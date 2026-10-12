import { CONFIG, e, makeBtn } from "./config.js";
import * as KB from "./keyboards.js";
import * as MSG from "./messages.js";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return new Response("OK");

    try {
      const update = await request.json();

      if (update.callback_query) {
        await handleCallback(update.callback_query, env);
      } else if (update.message) {
        await handleMessage(update.message, env);
      }
    } catch (err) {
      console.error("Worker Global Error:", err);
    }

    return new Response("OK");
  },

  // ⏰ Cloudflare Cron Trigger (Expiry Alarm to User + Test Key Auto Clear)
  async scheduled(event, env, ctx) {
    try {
      const now = new Date();

      // 1. Expired Free Test Keys Notification
      const expiredTests = await env.DB.prepare(`
        SELECT orders.*, users.first_name 
        FROM orders 
        JOIN users ON orders.user_id = users.telegram_id
        WHERE orders.category = 'test' AND orders.reminded_exp = 0
      `).all();

      for (const order of expiredTests.results || []) {
        const totalDays = 1;
        const createdAt = parseDbDate(order.created_at);
        const expireAt = new Date(createdAt.getTime() + totalDays * 24 * 60 * 60 * 1000);

        if (now.getTime() >= expireAt.getTime()) {
          await env.DB.prepare("UPDATE orders SET reminded_exp = 1 WHERE id = ?").bind(order.id).run();
          const buyerName = order.first_name || "Customer";
          const expiredMsg = MSG.getTestKeyExpiredMessage(buyerName);

          await tg(env, "sendMessage", {
            chat_id: order.user_id,
            text: expiredMsg,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [makeBtn("Get New Test Key", "callback_data", "menu_test", null, "BTN_FREEBIES")],
                [makeBtn("Buy Outline Key", "callback_data", "menu_buy", null, "BTN_SHOP")]
              ]
            }
          });
        }
      }

      await env.DB.prepare(`
        DELETE FROM orders 
        WHERE category = 'test' 
        AND datetime(created_at, '+30 days') <= datetime('now')
      `).run();

      // 2. Regular Keys 2 Days Expiry Alarm
      const { results } = await env.DB.prepare(`
        SELECT orders.*, users.first_name 
        FROM orders 
        JOIN users ON orders.user_id = users.telegram_id
        WHERE orders.category != 'test' AND orders.reminded_exp = 0
      `).all();

      for (const order of results || []) {
        const pkgConfig = CONFIG.PACKAGES[order.category];
        const totalDays = pkgConfig?.days || 30;

        const createdAt = parseDbDate(order.created_at);
        const expireAt = new Date(createdAt.getTime() + totalDays * 24 * 60 * 60 * 1000);

        const diffMs = expireAt.getTime() - now.getTime();
        const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        if (daysLeft <= 2 && daysLeft > 0) {
          const buyerName = order.first_name || "Customer";
          const reminderText = MSG.getExpiryReminderMessage(
            buyerName, 
            order.category, 
            order.access_key, 
            daysLeft
          );

          await tg(env, "sendMessage", {
            chat_id: order.user_id,
            text: reminderText,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [makeBtn("Renew / Buy New Key", "callback_data", "menu_buy", "success", "BTN_SHOP")]
              ]
            }
          });

          await env.DB.prepare(
            "UPDATE orders SET reminded_exp = 1 WHERE id = ?"
          ).bind(order.id).run();
        }
      }
    } catch (err) {
      console.error("Scheduled Error:", err.message || err);
    }
  }
};

async function tg(env, method, payload) {
  return fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function tgJson(env, method, payload) {
  try {
    const res = await tg(env, method, payload);
    return await res.json();
  } catch (e) {
    return null;
  }
}

function isMatchChatId(chatId, targetGroupId) {
  if (!targetGroupId || !chatId) return false;
  const a = String(chatId).replace(/^-100/, "").replace(/^-/, "").trim();
  const b = String(targetGroupId).replace(/^-100/, "").replace(/^-/, "").trim();
  return a === b;
}

function parseDbDate(dateStr) {
  if (!dateStr) return new Date();
  const s = String(dateStr).trim();
  return new Date(s.includes("T") ? s : s.replace(" ", "T") + (s.endsWith("Z") ? "" : "Z"));
}

// Multi-admin Verification Helper
async function checkIsAdmin(env, chatId, user) {
  if (user?.username && Array.isArray(CONFIG.ADMIN_USERNAME)) {
    const cur = user.username.toLowerCase().replace("@", "");
    if (CONFIG.ADMIN_USERNAME.some(a => a.toLowerCase().replace("@", "") === cur)) {
      return true;
    }
  } else if (user?.username && typeof CONFIG.ADMIN_USERNAME === "string") {
    if (user.username.toLowerCase().replace("@", "") === CONFIG.ADMIN_USERNAME.toLowerCase().replace("@", "")) {
      return true;
    }
  }

  try {
    const memberData = await tgJson(env, "getChatMember", {
      chat_id: chatId,
      user_id: user.id
    });
    return memberData?.ok && ["creator", "administrator"].includes(memberData?.result?.status);
  } catch (e) {
    return false;
  }
}

async function checkMustJoin(env, userId) {
  if (!CONFIG.FORCE_JOIN?.ENABLED) return true;
  try {
    const res = await tgJson(env, "getChatMember", {
      chat_id: CONFIG.FORCE_JOIN.CHANNEL_ID,
      user_id: userId
    });
    if (!res || !res.ok || !res.result) return false;
    const status = res.result.status;
    return ["member", "administrator", "creator"].includes(status);
  } catch (err) {
    return true;
  }
}

async function getStockCountMap(env) {
  const stockMap = {};
  for (const k of Object.keys(CONFIG.PACKAGES)) {
    stockMap[k] = 0;
  }
  stockMap["test"] = 0;

  try {
    const rows = await env.DB.prepare("SELECT category, COUNT(*) as count FROM keys GROUP BY category").all();
    if (rows && rows.results) {
      for (const r of rows.results) {
        stockMap[r.category] = Number(r.count || 0);
      }
    }
  } catch (e) {}
  return stockMap;
}

async function getOrCreateUser(env, from, referrerId = null) {
  let user = await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(from.id).first();
  if (!user) {
    await env.DB.prepare(
      "INSERT INTO users (telegram_id, username, first_name, balance, is_banned, pending_topup_amount, total_orders) VALUES (?, ?, ?, 0, 0, 0, 0)"
    ).bind(from.id, from.username || "Unknown", from.first_name || "").run();
    user = await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(from.id).first();
  }
  return user;
}

async function handleMessage(msg, env) {
  const chatId = String(msg.chat.id);
  const text = (msg.text || "").trim();
  const paymentGroupId = String(env.PAYMENT_GROUP_ID || "").trim();
  const stockGroupId = String(env.STOCK_GROUP_ID || "").trim();

  // Group commands deletion
  if (msg.chat.type !== "private" && msg.text && msg.text.startsWith("/")) {
    try {
      await tg(env, "deleteMessage", { chat_id: msg.chat.id, message_id: msg.message_id });
    } catch (e) {}
  }

  // --- 1. USER PRIVATE CHAT ---
  if (!chatId.startsWith("-")) {
    try {
      await tg(env, "deleteMessage", {
        chat_id: msg.chat.id,
        message_id: msg.message_id
      });
    } catch (delErr) {}

    const user = await getOrCreateUser(env, msg.from);

    if (user.is_banned === 1) {
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("BAN", "🚫")} <b>Access Denied:</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\nYour account has been permanently suspended due to violation of store rules.`,
        parse_mode: "HTML",
      });
      return;
    }

    if (text.startsWith("/start")) {
      await env.DB.prepare("UPDATE users SET pending_topup_amount = 0 WHERE telegram_id = ?").bind(user.telegram_id).run();
      const isJoined = await checkMustJoin(env, user.telegram_id);
      if (!isJoined) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: MSG.getMustJoinMessage(),
          parse_mode: "HTML",
          reply_markup: KB.getMustJoinKeyboard(CONFIG.FORCE_JOIN.CHANNEL_LINK),
        });
        return;
      }

      const param = text.split(" ")[1];
      if (param && param.startsWith("ref_")) {
        const referrerId = parseInt(param.replace("ref_", ""), 10);
        if (!isNaN(referrerId) && referrerId !== user.telegram_id && !user.referred_by) {
          await env.DB.prepare("UPDATE users SET referred_by = ? WHERE telegram_id = ?").bind(referrerId, user.telegram_id).run();
          user.referred_by = referrerId;
        }
      }
      if (param === "menu_buy") {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: MSG.getCategorySelectMessage(),
          parse_mode: "HTML",
          reply_markup: KB.getCategoryKeyboard(),
        });
        return;
      }

      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: MSG.getWelcomeMessage(msg.from.first_name),
        parse_mode: "HTML",
        reply_markup: KB.getMainKeyboard(),
      });
      return;
    }

    // Custom Top Up Amount Input Handler
    if (user.pending_topup_amount === -1 && text) {
      const cleanNum = text.replace(/,/g, "").trim();
      const amount = parseInt(cleanNum, 10);

      if (isNaN(amount) || amount < CONFIG.PAYMENT.MIN_TOPUP) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "⚠️")} <b>Invalid Amount!</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\nMinimum deposit is <b>${CONFIG.PAYMENT.MIN_TOPUP.toLocaleString()} MMK</b>.\nPlease send digits only (e.g. <code>2500</code> or <code>5000</code>).`,
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: [[makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]] }
        });
        return;
      }

      await env.DB.prepare("UPDATE users SET pending_topup_amount = ? WHERE telegram_id = ?").bind(amount, user.telegram_id).run();

      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: MSG.getPaymentInfoMessage(amount),
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[makeBtn("Change Amount", "callback_data", "topup_custom", "primary", "BTN_CUSTOM")]] }
      });
      return;
    }

    // Slip Photo Submission Handler
    if (msg.photo && msg.photo.length > 0) {
      const currentAmt = Number(user.pending_topup_amount || 0);

      if (currentAmt <= 0) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "⚠️")} Please select a deposit amount or plan from the menu before uploading payment screenshot.`,
          parse_mode: "HTML",
          reply_markup: KB.getMainKeyboard(),
        });
        return;
      }

      const photo = msg.photo[msg.photo.length - 1];
      const res = await env.DB.prepare(
        "INSERT INTO topup_requests (user_id, amount, slip_file_id, status) VALUES (?, ?, ?, 'pending')"
      ).bind(user.telegram_id, currentAmt, photo.file_id).run();

      const requestId = res.meta?.last_row_id || Date.now();
      await env.DB.prepare("UPDATE users SET pending_topup_amount = 0 WHERE telegram_id = ?").bind(user.telegram_id).run();

      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("DONE", "✅")} <b>Payment Slip Received!</b>\n\nAmount: <b>${currentAmt.toLocaleString()} MMK</b>\nOur team is verifying your payment. ${e("CLOCK", "⏳")}\nYour wallet balance will be credited within <b>5 Minutes to 24 Hours maximum</b> once approved.\n\nHave A Great Day ${e("STAR", "✨")}`,
        parse_mode: "HTML",
      });

      if (paymentGroupId) {
        const captionText = 
          `${e("DEPOSIT", "💳")} <b>New Deposit Request (#ID_${requestId})</b>\n` +
          `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
          `• <b>User:</b> ${msg.from.first_name || ""} (<code>${user.telegram_id}</code>)\n` +
          `• <b>Username:</b> @${msg.from.username || "None"}\n` +
          `• <b>Amount:</b> <b>${currentAmt.toLocaleString()} MMK</b>\n` +
          `• <b>Time:</b> ${MSG.formatMyanmarTime(new Date())}\n\n` +
          `${e("DOWN", "👇")} <i>Verify bank transaction and select action:</i>`;

        await tg(env, "sendPhoto", {
          chat_id: paymentGroupId,
          photo: photo.file_id,
          caption: captionText,
          parse_mode: "HTML",
          reply_markup: KB.getPaymentAdminKeyboard(requestId, user.telegram_id, currentAmt)
        });
      }
      return;
    }
  }

  // --- 2. PAYMENT AUDIT GROUP COMMANDS ---
  if (paymentGroupId && isMatchChatId(chatId, paymentGroupId)) {
    const isAdmin = await checkIsAdmin(env, chatId, msg.from);
    if (!isAdmin) return;

    if (text.startsWith("/ban")) {
      const targetId = text.split(/\s+/)[1]?.trim();
      if (targetId) {
        await env.DB.prepare("UPDATE users SET is_banned = 1 WHERE telegram_id = ?").bind(targetId).run();
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("BAN", "🚫")} User <code>${targetId}</code> has been banned.`, parse_mode: "HTML" });
        try {
          await tg(env, "sendMessage", {
            chat_id: targetId,
            text: `${e("BAN", "🚫")} <b>Account Suspended</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\nYour account has been suspended for violating store rules.`,
            parse_mode: "HTML"
          });
        } catch (_) {}
      }
      return;
    }

    if (text.startsWith("/unban")) {
      const targetId = text.split(/\s+/)[1]?.trim();
      if (targetId) {
        await env.DB.prepare("UPDATE users SET is_banned = 0 WHERE telegram_id = ?").bind(targetId).run();
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("DONE", "✅")} User <code>${targetId}</code> has been unbanned.`, parse_mode: "HTML" });
        try {
          await tg(env, "sendMessage", {
            chat_id: targetId,
            text: `${e("SUCCESS", "🎉")} <b>Account Re-activated</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\nYour account suspension has been lifted. You can now use the store.`,
            parse_mode: "HTML"
          });
        } catch (_) {}
      }
      return;
    }

    const cleanCmd = text.split("@")[0].split(/\s+/)[0].toLowerCase();
    if (cleanCmd === "/stats") {
      const reportText = await getStoreAnalyticsReport(env);
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: reportText,
        parse_mode: "HTML",
        reply_markup: KB.getStatsRefreshKeyboard()
      });
      return;
    }

    if (/^\/(addbal|addbl|subbal)\b/i.test(text)) {
      const parts = text.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const targetInput = parts[1];
      const amount = parseInt(parts[2], 10);

      if (!targetInput || isNaN(amount) || amount <= 0) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "⚠️")} <b>Invalid Command Format!</b>\n\n<b>Usage:</b>\n• <code>/addbal &lt;id or @username&gt; &lt;amount&gt;</code>\n• <code>/subbal &lt;id or @username&gt; &lt;amount&gt;</code>`,
          parse_mode: "HTML"
        });
        return;
      }

      let targetUser = targetInput.startsWith("@") 
        ? await env.DB.prepare("SELECT * FROM users WHERE LOWER(username) = LOWER(?)").bind(targetInput.replace("@", "").trim()).first()
        : await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(targetInput.trim()).first();

      if (!targetUser) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "❌")} <b>User Not Found:</b> <code>${targetInput}</code>`, parse_mode: "HTML" });
        return;
      }

      const isAdd = cmd.startsWith("/add");
      if (!isAdd && targetUser.balance < amount) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "⚠️")} <b>Insufficient Balance!</b>\nUser's current balance is only <b>${Number(targetUser.balance).toLocaleString()} MMK</b>.`, parse_mode: "HTML" });
        return;
      }

      const sql = isAdd 
        ? "UPDATE users SET balance = balance + ?, last_topup_at = datetime('now', '+6 hours', '+30 minutes') WHERE telegram_id = ?"
        : "UPDATE users SET balance = balance - ? WHERE telegram_id = ?";

      await env.DB.prepare(sql).bind(amount, targetUser.telegram_id).run();
      const updatedUser = await env.DB.prepare("SELECT balance FROM users WHERE telegram_id = ?").bind(targetUser.telegram_id).first();
      const newBal = Number(updatedUser?.balance || 0);

      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${isAdd ? e("SUCCESS", "✅") : e("WARNING", "🔻")} <b>Balance Updated:</b>\n• User: ${targetUser.first_name} (<code>${targetUser.telegram_id}</code>)\n• Action: ${isAdd ? "Credited (+)" : "Deducted (-)"} <b>${amount.toLocaleString()} MMK</b>\n• New Balance: <b>${newBal.toLocaleString()} MMK</b>`,
        parse_mode: "HTML"
      });
      return;
    }

    if (text.startsWith("/broadcast")) {
      const broadcastMsg = text.replace(/^\/broadcast(@\w+)?/, "").trim();
      if (!broadcastMsg) return;
      const allUsers = await env.DB.prepare("SELECT telegram_id FROM users WHERE is_banned = 0").all();
      let successCount = 0;
      for (const u of allUsers.results || []) {
        try {
          await tg(env, "sendMessage", { chat_id: u.telegram_id, text: `${e("ANNOUNCE", "📢")} <b>Store Announcement</b>\n\n${broadcastMsg}`, parse_mode: "HTML" });
          successCount++;
        } catch (e) {}
      }
      await tg(env, "sendMessage", { chat_id: chatId, text: `${e("DONE", "✅")} Announcement sent to <b>${successCount}</b> users.`, parse_mode: "HTML" });
      return;
    }
  }

  // --- 3. STOCK MANAGEMENT GROUP COMMANDS ---
  if (stockGroupId && isMatchChatId(chatId, stockGroupId)) {
    const cleanCmd = text.split("@")[0].split(/\s+/)[0].toLowerCase();
    
    if (cleanCmd === "/stock") {
      const stockMap = await getStockCountMap(env);
      let stockMsg = `${e("STATUS", "📊")} <b>Real-Time Key Stock Status</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n`;

      for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
        const count = stockMap[k] || 0;
        const alertBadge = count <= 2 ? " ⚠️" : "";
        stockMsg += `• ${e("DOT", "🔹")} ${pkg.name}: <b>${count}</b> keys${alertBadge}\n`;
      }
      stockMsg += `• ${e("FREEBIES", "🎁")} Free Test Keys: <b>${stockMap["test"] || 0}</b> keys\n`;

      await tg(env, "sendMessage", { chat_id: chatId, text: stockMsg, parse_mode: "HTML", reply_markup: KB.getStockRefreshKeyboard() });
      return;
    }

    // Dynamic stock adding for all plans
    const validCommands = [
      "/add_test", "/add_50gb", "/add_100gb", "/add_250gb",
      "/add_1m_1u", "/add_1m_2u", "/add_3m_1u", "/add_3m_2u"
    ];

    if (validCommands.includes(cleanCmd)) {
      const category = cleanCmd.replace("/add_", "");
      const validKeys = text.split("\n").slice(1).map(k => k.trim()).filter(k => k.startsWith("ss://"));
      
      if (validKeys.length === 0) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "⚠️")} No keys detected. Format:\n<code>${cleanCmd}</code>\nss://key1...\nss://key2...`,
          parse_mode: "HTML"
        });
        return;
      }

      const stmts = validKeys.map(k => env.DB.prepare("INSERT OR IGNORE INTO keys (category, access_key) VALUES (?, ?)").bind(category, k));
      await env.DB.batch(stmts);
      const currentStock = await env.DB.prepare("SELECT COUNT(*) as count FROM keys WHERE category = ?").bind(category).first();

      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("DONE", "✅")} <b>Keys Added: [${category.toUpperCase()}]</b>\n\n• Added: <b>${validKeys.length}</b> keys\n• Total in Stock: <b>${currentStock?.count || validKeys.length}</b> keys`,
        parse_mode: "HTML",
        reply_markup: KB.getStockRefreshKeyboard()
      });
      return;
    }
  }
}

async function getStoreAnalyticsReport(env) {
  const fmtNum = (n) => Number(n || 0).toLocaleString();
  const nowStr = new Date().toLocaleString("en-US", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: true,
    timeZone: "Asia/Yangon"
  });

  const totalRevRes = await env.DB.prepare("SELECT SUM(price) as total_rev, COUNT(*) as total_orders FROM orders WHERE category != 'test'").first();
  const todayRes = await env.DB.prepare("SELECT SUM(price) as today_rev, COUNT(*) as today_orders FROM orders WHERE category != 'test' AND date(datetime(created_at, '+6 hours', '+30 minutes')) = date(datetime('now', '+6 hours', '+30 minutes'))").first();
  const totalUsersRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users").first();
  const pendingAuditRes = await env.DB.prepare("SELECT COUNT(*) as count FROM topup_requests WHERE status = 'pending'").first();

  return `${e("STATUS", "📊")} <b>Store Analytics & Revenue Report</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `• <b>Today Sales:</b> ${fmtNum(todayRes?.today_rev)} MMK (${fmtNum(todayRes?.today_orders)} Orders)\n` +
    `• <b>All-Time Revenue:</b> ${fmtNum(totalRevRes?.total_rev)} MMK (${fmtNum(totalRevRes?.total_orders)} Completed Orders)\n` +
    `• <b>Total Registered Users:</b> ${fmtNum(totalUsersRes?.count)}\n` +
    `• <b>Pending Audit Queue:</b> ${fmtNum(pendingAuditRes?.count)} Slips\n\n` +
    `<i>Last updated: ${nowStr}</i>`;
}

// Callback Processor
async function handleCallback(cb, env) {
  const userId = cb.from.id;
  const callbackId = cb.id;
  const chatId = String(cb.message.chat.id);
  const messageId = cb.message.message_id;
  const data = cb.data;
  const paymentGroupId = String(env.PAYMENT_GROUP_ID || "").trim();
  const stockGroupId = String(env.STOCK_GROUP_ID || "").trim();

  async function editMsg(text, replyMarkup) {
    await tg(env, "editMessageText", {
      chat_id: chatId,
      message_id: messageId,
      text: text,
      parse_mode: "HTML",
      reply_markup: replyMarkup,
    });
  }

  // --- Out of stock prompt ---
  if (data.startsWith("out_of_stock_")) {
    await tg(env, "answerCallbackQuery", {
      callback_query_id: callbackId,
      text: "❌ This package is currently out of stock! Admin has been notified to restock.",
      show_alert: true
    });
    return;
  }

  // --- Payment Audit Actions in Payment Group (Robust Handling) ---
  if (paymentGroupId && isMatchChatId(chatId, paymentGroupId)) {
    const isAdmin = await checkIsAdmin(env, chatId, cb.from);
    if (!isAdmin) {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "⚠️ Only store administrators can perform this action!", show_alert: true });
      return;
    }

    // 1. APPROVE SLIP
    if (data.startsWith("pay_app_")) {
      const parts = data.split("_");
      const reqId = parts[2];
      const targetUserId = parts[3];
      const amount = Number(parts[4]);

      try {
        await env.DB.batch([
          env.DB.prepare("UPDATE users SET balance = balance + ?, last_topup_at = datetime('now', '+6 hours', '+30 minutes') WHERE telegram_id = ?").bind(amount, targetUserId),
          env.DB.prepare("UPDATE topup_requests SET status = 'approved' WHERE id = ?").bind(reqId)
        ]);

        await tg(env, "editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          caption: (cb.message?.caption || "") + `\n\n🟢 <b>APPROVED (+${amount.toLocaleString()} MMK) by @${cb.from.username || "Admin"}</b>`,
          parse_mode: "HTML"
        });

        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `✅ Approved (+${amount.toLocaleString()} MMK)!` });

        await tg(env, "sendMessage", {
          chat_id: targetUserId,
          text: `${e("SUCCESS", "🎉")} <b>Deposit Approved!</b>\n\nYour wallet has been credited with <b>+${amount.toLocaleString()} MMK</b>.\nYou can now purchase Outline VPN keys anytime! ${e("STAR", "✨")}`,
          parse_mode: "HTML",
          reply_markup: KB.getMainKeyboard()
        });

        // Referral commission check
        const targetUser = await env.DB.prepare("SELECT referred_by FROM users WHERE telegram_id = ?").bind(targetUserId).first();
        if (targetUser && targetUser.referred_by) {
          const bonusAmount = Math.floor(amount * ((CONFIG.REFERRAL_PERCENT || 5) / 100));
          if (bonusAmount > 0) {
            await env.DB.prepare("UPDATE users SET balance = balance + ?, referral_earnings = referral_earnings + ? WHERE telegram_id = ?").bind(bonusAmount, bonusAmount, targetUser.referred_by).run();
            try {
              await tg(env, "sendMessage", {
                chat_id: targetUser.referred_by,
                text: `${e("SUCCESS", "🎉")} <b>Referral Bonus Received!</b>\n\nYour invited friend topped up their wallet.\nYou earned: <b>+${bonusAmount.toLocaleString()} MMK</b> credited to your wallet!`,
                parse_mode: "HTML"
              });
            } catch (_) {}
          }
        }
      } catch (err) {
        console.error("Approve DB Error:", err);
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `❌ DB Error: ${err.message}`, show_alert: true });
      }
      return;
    }

    // 2. REJECT SLIP
    if (data.startsWith("pay_rej_")) {
      const parts = data.split("_");
      const reqId = parts[2];
      const targetUserId = parts[3];

      try {
        await env.DB.prepare("UPDATE topup_requests SET status = 'rejected' WHERE id = ?").bind(reqId).run();

        await tg(env, "editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          caption: (cb.message?.caption || "") + `\n\n🔴 <b>REJECTED by @${cb.from.username || "Admin"}</b>`,
          parse_mode: "HTML"
        });

        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "🔴 Slip Rejected!" });

        await tg(env, "sendMessage", {
          chat_id: targetUserId,
          text: `${e("FALSE", "❌")} <b>Deposit Verification Failed:</b> We could not verify your transaction slip. Please check your transfer details or contact support.`,
          parse_mode: "HTML",
          reply_markup: KB.getMainKeyboard()
        });
      } catch (err) {
        console.error("Reject Error:", err);
      }
      return;
    }

    // 3. BAN FRAUD USER
    if (data.startsWith("pay_ban_")) {
      const targetUserId = data.replace("pay_ban_", "");

      try {
        await env.DB.prepare("UPDATE users SET is_banned = 1 WHERE telegram_id = ?").bind(targetUserId).run();

        await tg(env, "editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          caption: (cb.message?.caption || "") + `\n\n🚫 <b>USER BANNED by @${cb.from.username || "Admin"}</b>`,
          parse_mode: "HTML"
        });

        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "🚫 User Banned Permanently!" });

        await tg(env, "sendMessage", {
          chat_id: targetUserId,
          text: `${e("BAN", "🚫")} <b>Account Suspended:</b> Your account has been permanently banned due to fraudulent slip submission.`,
          parse_mode: "HTML"
        });
      } catch (err) {
        console.error("Ban Error:", err);
      }
      return;
    }

    if (data === "admin_refresh_stats") {
      const reportText = await getStoreAnalyticsReport(env);
      await editMsg(reportText, KB.getStatsRefreshKeyboard());
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Stats Refreshed!" });
      return;
    }
  }

  // --- Stock Group Refresh Action ---
  if (stockGroupId && isMatchChatId(chatId, stockGroupId) && data === "admin_refresh_stock") {
    const stockMap = await getStockCountMap(env);
    let stockMsg = `${e("STATUS", "📊")} <b>Real-Time Key Stock Status</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n`;

    for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
      stockMsg += `• ${e("DOT", "🔹")} ${pkg.name}: <b>${stockMap[k] || 0}</b> keys\n`;
    }
    stockMsg += `• ${e("FREEBIES", "🎁")} Free Test Keys: <b>${stockMap["test"] || 0}</b> keys\n`;

    await editMsg(stockMsg, KB.getStockRefreshKeyboard());
    await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Stock Refreshed!" });
    return;
  }

  // Always Answer Callback to eliminate loading animation
  await tg(env, "answerCallbackQuery", { callback_query_id: callbackId });

  // --- USER INTERACTION FLOW ---
  const user = await getOrCreateUser(env, cb.from);
  if (user.is_banned === 1) return;
  const balance = Number(user.balance || 0);

  // Return Home
  if (data === "menu_home") {
    await env.DB.prepare("UPDATE users SET pending_topup_amount = 0 WHERE telegram_id = ?").bind(user.telegram_id).run();
    await editMsg(MSG.getWelcomeMessage(cb.from.first_name), KB.getMainKeyboard());
    return;
  }

  // Referral
  if (data === "menu_referral") {
    const countRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users WHERE referred_by = ?").bind(userId).first();
    const userRes = await env.DB.prepare("SELECT referral_earnings FROM users WHERE telegram_id = ?").bind(userId).first();
    await editMsg(MSG.getReferralMessage(CONFIG.BOT_USERNAME, userId, countRes?.count || 0, userRes?.referral_earnings || 0, CONFIG.REFERRAL_PERCENT), KB.getReferralKeyboard());
    return;
  }

  // Force Join
  if (data === "check_force_join") {
    const isJoined = await checkMustJoin(env, userId);
    if (!isJoined) {
      await tg(env, "answerCallbackQuery", { callback_query_id: cb.id, text: "❌ Please join our channel first!", show_alert: true });
      return;
    }
    await editMsg(MSG.getWelcomeMessage(cb.from.first_name), KB.getMainKeyboard());
    return;
  }

  // Profile View
  if (data === "menu_profile") {
    const totalSpent = Number(user.total_spent || 0);
    const depRes = await env.DB.prepare("SELECT SUM(amount) as total FROM topup_requests WHERE user_id = ? AND status = 'approved'").bind(userId).first();
    const totalDeposited = depRes?.total || 0;
    const orderStats = await env.DB.prepare("SELECT COUNT(*) as count FROM orders WHERE user_id = ? AND category != 'test'").bind(userId).first();
    const totalOrders = orderStats?.count || 0;
    const refCountRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users WHERE referred_by = ?").bind(userId).first();
    const invitedCount = refCountRes?.count || 0;
    const earnings = Number(user.referral_earnings || 0);
    const latestOrder = await env.DB.prepare("SELECT category, price, created_at FROM orders WHERE user_id = ? AND category != 'test' ORDER BY id DESC LIMIT 1").bind(userId).first();
    const latestOrderDate = latestOrder ? MSG.formatMyanmarTime(parseDbDate(latestOrder.created_at)) : null;
    const regDate = user.created_at ? MSG.formatMyanmarTime(parseDbDate(user.created_at)) : "N/A";

    await editMsg(MSG.getProfileMessage({
      firstName: cb.from.first_name || "User",
      telegramId: user.telegram_id,
      regDate, balance, totalOrders, totalSpent, totalDeposited,
      invitedCount, earnings, latestOrder, latestOrderDate
    }), KB.getProfileKeyboard());
    return;
  }

  // Orders Pagination
  if (data.startsWith("menu_orders_p_")) {
    const page = parseInt(data.replace("menu_orders_p_", ""), 10) || 1;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;
    const orderStats = await env.DB.prepare("SELECT COUNT(*) as count, SUM(price) as spent FROM orders WHERE user_id = ? AND category != 'test'").bind(userId).first();
    const totalOrders = orderStats?.count || 0;
    const totalSpent = orderStats?.spent || 0;
    const totalPages = Math.ceil(totalOrders / pageSize) || 1;
    const ordersRes = await env.DB.prepare("SELECT id, category, price, created_at FROM orders WHERE user_id = ? AND category != 'test' ORDER BY id DESC LIMIT ? OFFSET ?").bind(userId, pageSize, offset).all();

    await editMsg(MSG.getOrdersSummaryMessage(totalOrders, totalSpent), KB.getProfileOrdersKeyboard(ordersRes.results || [], page, totalPages));
    return;
  }

  if (data.startsWith("view_ord_")) {
    const parts = data.split("_");
    const orderId = parts[2];
    const returnPage = parts[3] || 1;
    const order = await env.DB.prepare("SELECT * FROM orders WHERE id = ? AND user_id = ?").bind(orderId, userId).first();
    if (!order) return;

    const pkgInfo = CONFIG.PACKAGES[order.category] || { days: 30, gb: order.category };
    const buyDate = parseDbDate(order.created_at);
    const expiryDate = new Date(buyDate.getTime() + pkgInfo.days * 24 * 60 * 60 * 1000);
    const now = new Date();
    const statusText = now > expiryDate ? `${e("INACTIVE", "🔴")} <b>Expired</b>` : `${e("ACTIVE", "🟢")} <b>Active</b>`;

    const detailMsg = 
      `${e("STOCK", "📦")} <b>Order Details (#${order.id})</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
      `<blockquote>• <b>Plan:</b> ${pkgInfo.name || order.category.toUpperCase()}\n• <b>Price:</b> ${order.price.toLocaleString()} MMK\n• <b>Purchased:</b> ${MSG.formatMyanmarTime(buyDate)}\n• <b>Expires:</b> ${MSG.formatMyanmarTime(expiryDate)}\n• <b>Status:</b> ${statusText}</blockquote>\n\n` +
      `<code>${order.access_key}</code>`;

    await editMsg(detailMsg, KB.getKeyDetailKeyboard(order.id, returnPage, order.access_key));
    return;
  }

  if (data.startsWith("del_conf_")) {
    const [, , orderId, returnPage] = data.split("_");
    await editMsg(`${e("WARNING", "⚠️")} Are you sure you want to delete Key (#${orderId})?`, KB.getDeleteConfirmKeyboard(orderId, returnPage));
    return;
  }

  if (data.startsWith("del_exec_")) {
    const [, , orderId] = data.split("_");
    await env.DB.prepare("DELETE FROM orders WHERE id = ? AND user_id = ?").bind(orderId, userId).run();
    await editMsg(`${e("DONE", "✅")} Key removed from profile.`, { inline_keyboard: [[makeBtn("Back to Orders", "callback_data", "menu_orders_p_1", null, "BTN_ORDERS")]] });
    return;
  }

  // Terms & Topup
  if (data === "menu_terms") {
    await editMsg(`${e("TERMS", "📜")} <b>Terms of Service & Usage Policies</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n• All wallet top-ups and key sales are non-refundable.\n• Leaving transfer notes with words like "VPN", "Outline" is strictly prohibited.\n• Fraudulent transaction slips will result in an immediate permanent ban.`, { inline_keyboard: [[makeBtn("Main Menu", "callback_data", "menu_home", null, "BTN_HOME")]] });
    return;
  }

  if (data === "menu_topup") {
    await editMsg(`${e("DEPOSIT", "💳")} <b>Select Deposit Amount:</b>`, KB.getTopupKeyboard());
    return;
  }

  if (data === "topup_custom") {
    await env.DB.prepare("UPDATE users SET pending_topup_amount = -1 WHERE telegram_id = ?").bind(userId).run();
    await editMsg(`${e("CUSTOM", "✍️")} Type deposit amount (Min: ${CONFIG.PAYMENT.MIN_TOPUP.toLocaleString()} MMK):`, { inline_keyboard: [[makeBtn("Deposit", "callback_data", "menu_topup", null, "BTN_DEPOSIT")]] });
    return;
  }

  if (data.startsWith("topup_amt_")) {
    const amount = Number(data.replace("topup_amt_", ""));
    await env.DB.prepare("UPDATE users SET pending_topup_amount = ? WHERE telegram_id = ?").bind(amount, userId).run();
    await editMsg(MSG.getPaymentInfoMessage(amount), { inline_keyboard: [[makeBtn("Change Amount", "callback_data", "menu_topup", null, "BTN_CUSTOM")]] });
    return;
  }

  // --- CATEGORY & PACKAGE SELECTION WITH DYNAMIC STOCK CHECK ---
  if (data === "menu_buy") {
    await editMsg(MSG.getCategorySelectMessage(), KB.getCategoryKeyboard());
    return;
  }

  if (data === "cat_limited_data" || data === "cat_unlimited_data") {
    const categoryType = data.replace("cat_", "");
    const stockMap = await getStockCountMap(env);

    await editMsg(
      MSG.getPackageListMessage(balance, categoryType, stockMap),
      KB.getCategoryPackagesKeyboard(categoryType, stockMap)
    );
    return;
  }

  if (data.startsWith("detail_pkg_")) {
    const pkgKey = data.replace("detail_pkg_", "");
    const pkg = CONFIG.PACKAGES[pkgKey];
    if (!pkg) return;

    const countRow = await env.DB.prepare("SELECT COUNT(*) as count FROM keys WHERE category = ?").bind(pkgKey).first();
    const inStock = Number(countRow?.count || 0) > 0;

    await editMsg(
      MSG.getPlanDetailMessage(pkgKey, balance, inStock),
      KB.getPlanPaymentMethodKeyboard(pkgKey, pkg.category_type)
    );
    return;
  }

  // Pay Direct
  if (data.startsWith("pay_direct_")) {
    const pkgKey = data.replace("pay_direct_", "");
    const pkg = CONFIG.PACKAGES[pkgKey];
    if (!pkg) return;

    await env.DB.prepare("UPDATE users SET pending_topup_amount = ? WHERE telegram_id = ?").bind(pkg.price, userId).run();
    await editMsg(MSG.getPaymentInfoMessage(pkg.price), {
      inline_keyboard: [
        [makeBtn("Back to Plans", "callback_data", `detail_pkg_${pkgKey}`, null, "BTN_BACK")]
      ]
    });
    return;
  }

  // Buy with Wallet
  if (data.startsWith("buy_wallet_")) {
    const pkgKey = data.replace("buy_wallet_", "");
    const pkg = CONFIG.PACKAGES[pkgKey];
    if (!pkg) return;

    if (balance < pkg.price) {
      await editMsg(
        MSG.getInsufficientBalanceMessage(pkg.price, balance),
        KB.getInsufficientBalanceKeyboard(pkg.category_type)
      );
      return;
    }

    const keyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = ? LIMIT 1").bind(pkgKey).first();

    if (!keyItem) {
      await editMsg(
        `${e("UNSTOCK", "😔")} <b>Stock Unavailable!</b>\n\nWe are currently out of stock for <b>${pkg.name}</b>. Please check back shortly.`,
        {
          inline_keyboard: [
            [makeBtn("Back to Plans", "callback_data", `cat_${pkg.category_type}`, null, "BTN_BACK")],
            [makeBtn("Contact Support", "url", `https://t.me/nevera33`, null, "BTN_SUPPORT")]
          ]
        }
      );
      return;
    }

    try {
      await env.DB.prepare("UPDATE users SET balance = balance - ?, total_spent = COALESCE(total_spent, 0) + ?, total_orders = total_orders + 1 WHERE telegram_id = ?").bind(pkg.price, pkg.price, userId).run();
    } catch (_) {
      await env.DB.prepare("UPDATE users SET balance = balance - ?, total_orders = total_orders + 1 WHERE telegram_id = ?").bind(pkg.price, userId).run();
    }
    await env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(keyItem.id).run();
    await env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, ?, ?, ?)").bind(userId, pkgKey, keyItem.access_key, pkg.price).run();

    await editMsg(MSG.getKeyDeliveryMessage(pkgKey, pkg.price, keyItem.access_key), {
      inline_keyboard: [
        [makeBtn("View in Orders", "callback_data", "menu_orders_p_1", null, "BTN_ORDERS")],
        [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
      ]
    });

    const salesChannelId = String(env.SALES_CHANNEL_ID || "").trim();
    if (salesChannelId) {
      try {
        await tg(env, "sendMessage", {
          chat_id: salesChannelId,
          text: MSG.getChannelSaleMessage(cb.from?.first_name || "Customer", pkgKey, pkg.price, keyItem.access_key),
          parse_mode: "HTML",
          reply_markup: KB.getSalesChannelKeyboard()
        });
      } catch (err) {}
    }

    if (stockGroupId) {
      try {
        const countRow = await env.DB.prepare("SELECT COUNT(*) as count FROM keys WHERE category = ?").bind(pkgKey).first();
        const rem = Number(countRow?.count || 0);
        if (rem <= 3) {
          await tg(env, "sendMessage", {
            chat_id: stockGroupId,
            text: `${e("WARNING", "⚠️")} <b>[LOW STOCK ALERT]</b>\n• Category: ${pkgKey.toUpperCase()}\n• Remaining: <b>${rem} keys</b>\n\n<i>Restock via /add_${pkgKey}</i>`,
            parse_mode: "HTML"
          });
        }
      } catch (e) {}
    }
    return;
  }

  // --- FREE TEST KEY ---
  if (data === "menu_test" || data === "menu_test_key_info") {
    const existingTest = await env.DB.prepare("SELECT * FROM orders WHERE user_id = ? AND category = 'test' ORDER BY created_at DESC LIMIT 1").bind(userId).first();
    if (existingTest) {
      const claimedDate = parseDbDate(existingTest.created_at);
      const nextAvailDate = new Date(claimedDate.getTime() + (30 * 24 * 60 * 60 * 1000));
      if (new Date().getTime() < nextAvailDate.getTime()) {
        await editMsg(`${e("WARNING", "⚠️")} <b>Test Key Already Claimed!</b>\n\nYou can claim another test key after 30 days cooldown.`, {
          inline_keyboard: [
            [makeBtn("View My Test Key", "callback_data", "view_claimed_test_key", null, "BTN_KEY")],
            [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
          ]
        });
        return;
      }
    }
    await editMsg(MSG.getTestKeyIntroMessage(), KB.getTestKeyKeyboard());
    return;
  }

  if (data === "exec_claim_test_key" || data === "claim_free_test") {
    const testKeyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = 'test' LIMIT 1").first();
    if (!testKeyItem) {
      await editMsg(`${e("UNSTOCK", "😔")} <b>Out of Stock!</b>\n\nNo free test keys currently available.`, {
        inline_keyboard: [[makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]]
      });
      return;
    }
    await env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(testKeyItem.id).run();
    await env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, 'test', ?, 0)").bind(userId, testKeyItem.access_key).run();

    await editMsg(
      `${e("SUCCESS", "🎉")} <b>Your Free Test Key is Ready!</b>\n\n<code>${testKeyItem.access_key}</code>`,
      KB.getTestKeyActionKeyboard(testKeyItem.access_key)
    );
    return;
  }

  if (data === "view_claimed_test_key") {
    const existingTest = await env.DB.prepare("SELECT access_key FROM orders WHERE user_id = ? AND category = 'test' ORDER BY created_at DESC LIMIT 1").bind(userId).first();
    await editMsg(`${e("KEY", "🔑")} <b>My Active Free Test Key</b>\n\n<code>${existingTest?.access_key || "None"}</code>`, KB.getTestKeyActionKeyboard(existingTest?.access_key));
    return;
  }
}
