import { CONFIG } from "./config.js";
// Helper for rendering Telegram custom emojis safely without scope clash 
export function e(emojiType, fallbackUnicode = "") { 
  try { const id = CONFIG?.EMOJIS?.[emojiType]; 
    if (id && String(id).trim() !== "") { 
      return `<tg-emoji emoji-id="${String(id).trim()}">${fallbackUnicode}</tg-emoji>`; 
    } 
    return fallbackUnicode; } 
    catch (err) { 
      return fallbackUnicode; 
    } 
  }

export function maskName(name) {
  if (!name) return "Anonymous";
  const str = String(name).trim();
  if (str.length <= 2) return str[0] + "*";
  return str.slice(0, 2) + "*".repeat(Math.max(1, str.length - 2));
}

// 12-hour format with AM/PM (e.g. 11 Oct 2026, 02:53 am)
export function formatMyanmarTime(dateObj) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Yangon",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(dateObj);
  } catch (err) {
    return dateObj.toISOString();
  }
}

export function getWelcomeMessage(firstName) {
  return (
    `${e("CROWN", "👑")} <b>Welcome to ${CONFIG.STORE_NAME}</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Hello <b>${firstName || "Customer"}</b> ${e("STAR", "✨")}\n\n` +
    `We provide ultra-fast, stable, and encrypted <b>Outline VPN Access Keys</b> with instant automated delivery.\n\n` +
    `<blockquote>` +
    `${e("SHOP", "🛍")} <b>Shop</b> — Browse & buy Outline Private Key\n` +
    `${e("KEY", "🎁")} <b>Freebies</b> — Claim monthly free test key\n` +
    `${e("FREEBIES", "🎁")} <b>Giveaway</b> — Claim availiable Gift\n` +
    `${e("DEPOSIT", "💳")} <b>Deposit</b> — Top up wallet balance\n` +
    `${e("PROFILE", "👤")} <b>My Profile</b> — Balance, keys & order history\n` +
    `${e("STAR", "✨")} <b>Referral</b> — Invite friends & earn 5%\n` +
    `${e("TERMS", "📜")} <b>Terms</b> — Store rules & usage policies` +
    `</blockquote>\n\n` +
    `${e("CROWN", "👑")} <b>Channel: @jaiwateam</b>\n` +
    `${e("BUY", "👑")} <b>Sale Proved: @sales_proved</b>\n\n` +
    `<b>Select an option below to continue.</b> ${e("DOWN", "👇")}`
  );
}

export function getCategorySelectMessage() {
  return (
    `${e("SHOP", "🛍")} <b>Select Package Category</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Please choose your desired key package category:\n\n` +
    `<blockquote>` +
    `1 <b>Limited Data | Unlimited Users</b>\n` +
    `• High-speed data quota with unlimited simultaneous device connections.\n` +
    `</blockquote>\n\n` +
    `<blockquote>` +
    `2 <b>Unlimited Data | Limited Users</b>\n` +
    `• 100% Unlimited high-speed data with dedicated device quota.` +
    `</blockquote>\n\n` +
    `${e("DOWN", "👇")} <i>Choose a category below to continue:</i>`
  );
}

export function getPackageListMessage(balance, categoryType, stockMap = {}) {
  const isLimited = categoryType === "limited_data";
  const title = isLimited ? "Limited Data | Unlimited Users" : "Unlimited Data | Limited Users";

  let listHtml = "";
  for (const [key, pkg] of Object.entries(CONFIG.PACKAGES)) {
    if (pkg.category_type === categoryType) {
      const stock = stockMap[key] || 0;
      const stockBadge = stock > 0 ? `${e("ACTIVE", "🟢")} In Stock (${stock})` : `${e("INACTIVE", "🔴")} Out of Stock`;

      listHtml += 
        `<blockquote>` +
        `${e("OUTLINE", "🔹")} <b>${pkg.name}</b>\n` +
        `• <b>Details:</b> ${pkg.detail}\n` +
        `• <b>Validity:</b> ${pkg.days} Days\n` +
        `• <b>Price:</b> <b>${pkg.price.toLocaleString()} MMK</b>\n` +
        `• <b>Status:</b> ${stockBadge}\n` +
        `</blockquote>\n`;
    }
  }

  return (
    `${e("SHOP", "🛍")} <b>${title}</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `${e("BALANCE", "💰")} <b>My Balance:</b> <code>${balance.toLocaleString()} MMK</code>\n\n` +
    listHtml + `\n` +
    `${e("FLASH", "⚡️")} <i>Select a package below to view details and proceed to checkout:</i>`
  );
}

export function getPlanDetailMessage(pkgKey, balance, inStock = true) {
  const pkg = CONFIG.PACKAGES[pkgKey];
  return (
    `${e("STOCK", "📦")} <b>Plan Details & Confirmation</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• <b>Plan:</b> ${pkg.name}\n` +
    `• <b>Data:</b> ${pkg.gb}\n` +
    `• <b>Allowed Devices:</b> ${pkg.users}\n` +
    `• <b>Duration:</b> ${pkg.days} Days\n` +
    `• <b>Price:</b> <b>${pkg.price.toLocaleString()} MMK</b>\n` +
    `• <b>Your Wallet Balance:</b> <b>${balance.toLocaleString()} MMK</b>\n` +
    `• <b>Availability:</b> ${inStock ? "🟢 Available" : "🔴 Out of Stock"}` +
    `</blockquote>\n\n` +
    `${e("DOWN", "👇")} <i>Select your preferred payment method below:</i>`
  );
}

export function getInsufficientBalanceMessage(price, balance) {
  return (
    `${e("UNSTOCK", "😔")} <b>Insufficient Wallet Balance!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• <b>Plan Price:</b> <b>${price.toLocaleString()} MMK</b>\n` +
    `• <b>Your Balance:</b> <b>${balance.toLocaleString()} MMK</b>\n` +
    `• <b>Required Top-up:</b> <b>${(price - balance).toLocaleString()} MMK</b>` +
    `</blockquote>\n\n` +
    `Please top up your wallet balance to complete this purchase.`
  );
}

export function getPaymentInfoMessage(amount) {
  return (
    `${e("DEPOSIT", "💳")} <b>Payment Transfer Instructions</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `${e("BALANCE", "💰")} <b>Required Amount:</b> <code>${amount.toLocaleString()} MMK</code>\n\n` +
    `Please transfer the exact amount to one of our verified accounts:\n\n` +
    `<blockquote>` +
    `${e("KPAY", "📱")} <b>KBZPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>\n\n` +
    `${e("AYAPAY", "📱")} <b>AYAPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>\n\n` +
    `${e("UABPAY", "📱")} <b>UABPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>\n` +
    `</blockquote>\n\n` +
    `${e("WARNING", "⚠️")} <b>Important Transfer Rules:</b>\n` +
    `• Do <b>NOT</b> write <b>VPN</b>, <b>Outline</b>, or <b>Store names</b> in the transaction note.\n` +
    `• Send the transfer <b>Screenshot/Slip</b> directly into this chat.\n` +
    `• Fraudulent/fake slips will result in an immediate permanent ban.\n\n` +
    `${e("SLIP", "🧾")} <i>Send your transaction screenshot/slip now:</i>`
  );
}

export function getKeyDeliveryMessage(category, price, accessKey) {
  const pkg = CONFIG.PACKAGES[category] || { days: 30, gb: category };
  return (
    `${e("SUCCESS", "🎉")} <b>Purchase Successful!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• ${e("STOCK", "📦")} <b>Package:</b> ${pkg.name || pkg.gb} (${pkg.days} Days)\n` +
    `• ${e("BALANCE", "💰")} <b>Amount Paid:</b> ${price.toLocaleString()} MMK\n` +
    `• ${e("DATE", "📅")} <b>Delivered At:</b> ${formatMyanmarTime(new Date())}` +
    `</blockquote>\n\n` +
    `${e("KEY", "🔑")} <b>Your Outline VPN Key:</b>\n` +
    `<blockquote>` +
    `<code>${accessKey}</code>\n` +
    `</blockquote>\n\n` +
    `${e("UP", "👆")} <i>Tap the key to copy. Your purchased keys are always viewable in ${e("PROFILE", "👤")} <b>My Profile</b>.</i>`
  );
}

export function getChannelSaleMessage(buyerName, category, price, accessKey) {
  const pkg = CONFIG.PACKAGES[category] || { days: 30, gb: category };
  return (
    `${e("SUCCESS", "🎉")} <b>New Order Completed!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `${e("PROFILE", "👤")} <b>Customer:</b> ${maskName(buyerName)}\n` +
    `${e("STOCK", "📦")} <b>Package:</b> ${pkg.name || pkg.gb} (${pkg.days} Days)\n` +
    `${e("BALANCE", "💰")} <b>Amount Paid:</b> ${price.toLocaleString()} MMK\n` +
    `${e("DATE", "📅")} <b>Delivered At:</b> ${formatMyanmarTime(new Date())}\n` +
    `</blockquote>\n\n` +
    `${e("FLASH", "⚡️")} <i>Instant automated 24/7 delivery by Our Bot.</i>`
  );
}

// ပုံ ၂ အတိုင်း Key Detail View Message
export function getOrderDetailMessage(order, pkgInfo, buyDate, expiryDate, statusText) {
  return (
    `${e("STOCK", "📦")} <b>Order Details (#${order.id})</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• ${e("STAR", "✨")} <b>Plan:</b> ${pkgInfo.name || pkgInfo.gb || order.category.toUpperCase()}\n` +
    `• ${e("BALANCE", "💎")} <b>Price:</b> ${order.price.toLocaleString()} MMK\n` +
    `• ${e("DATE", "📅")} <b>Purchased:</b> ${formatMyanmarTime(buyDate)}\n` +
    `• ${e("CLOCK", "⏳")} <b>Expires:</b> ${formatMyanmarTime(expiryDate)}\n` +
    `• ${e("STATUS", "📊")} <b>Status:</b> ${statusText}` +
    `</blockquote>\n\n` +
    `${e("KEY", "🔑")} <b>Outline Access Key:</b>\n` +
    `<blockquote>` +
    `<code>${order.access_key}</code>` +
    `</blockquote>\n\n` +
    `${e("DOWN", "👇")} <i>Tap the copy button below or tap the code to copy ${e("KEY", "🔑")} Key.</i>`
  );
}

// ပုံ ၃ အတိုင်း Test Key Cooldown Message
export function getTestKeyClaimedMessage(claimedDate, nextAvailDate, daysLeft, hoursLeft) {
  return (
    `⚠️ <b>Test Key Already Claimed!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• ${e("DATE", "📅")} <b>Claimed On:</b> ${formatMyanmarTime(claimedDate)}\n` +
    `• ${e("CLOCK", "⏳")} <b>Next Available:</b> ${formatMyanmarTime(nextAvailDate)}` +
    `</blockquote>\n\n` +
    `<i>You can claim another test key in <b>${daysLeft} days and ${hoursLeft} hours</b>.</i>`
  );
}

// ပုံ ၄ အတိုင်း Active Free Test Key Viewer Message
export function getActiveTestKeyMessage(keyStr) {
  return (
    `${e("KEY", "🔑")} <b>My Active Free Test Key</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `<code>${keyStr}</code>` +
    `</blockquote>\n\n` +
    `${e("DOWN", "👇")} <i>Tap the copy button below or tap the code to copy ${e("KEY", "🔑")} Test Key.</i>`
  );
}

export function getTestKeyIntroMessage() {
  return (
    `${e("FREEBIES", "🎁")} <b>Free Outline Test Key</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Claim an exclusive free test key to experience our high-speed network.\n\n` +
    `<blockquote>` +
    `${e("PIN", "📌")} <b>Freebie Terms:</b>\n` +
    `• Each user can claim <b>1 free test key every 30 days</b>.\n` +
    `• For individual use only; do not re-distribute.\n` +
    `• The claimed key is saved in your Profile.` +
    `</blockquote>\n\n` +
    `Tap the button below to claim your key now. ${e("DOWN", "👇")}`
  );
}

export function getExpiryReminderMessage(buyerName, category, accessKey, daysLeft = 2) {
  const pkg = CONFIG.PACKAGES[category] || { name: category.toUpperCase() };
  return (
    `${e("ALARM", "🚨")} <b>Outline Key Expiry Reminder!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Hello <b>${buyerName}</b>,\n` +
    `Your Outline VPN key for <b>${pkg.name}</b> will expire in <b>${daysLeft} days</b>.\n\n` +
    `<blockquote>` +
    `• <b>Plan:</b> ${pkg.name}\n` +
    `• <b>Remaining:</b> ${daysLeft} Days\n` +
    `• <b>Key:</b> <code>${accessKey}</code>` +
    `</blockquote>\n\n` +
    `<i>To maintain continuous VPN access, please purchase a new key before your current one expires.</i>`
  );
}

// Test Key Expired Notification Message
export function getTestKeyExpiredMessage(buyerName) {
  return (
    `${e("FREEBIES", "🎁")} <b>Free Trial Period Ended!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Hello <b>${buyerName}</b> ${e("STAR", "✨")},\n` +
    `Your Outline VPN <b>Free Trial Key</b> has expired.\n\n` +
    `<blockquote>` +
    `• <b>Status:</b> Expired & Cleared\n` +
    `• <b>Action:</b> You can now claim a fresh test key or upgrade to an unlimited private plan.` +
    `</blockquote>\n\n` +
    `<i>Tap the button below to claim a new trial key:</i>`
  );
}

export function getReferralMessage(botUsername, tgId, invitedCount, earnings, percent) {
  const refLink = `https://t.me/${botUsername}?start=ref_${tgId}`;
  return `${e("STAR", "✨")} <b>Referral Program</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `Share your referral link and earn <b>${percent}%</b> of every deposit your friends make — <i>forever</i>.` +
    `</blockquote>\n\n` +
    `${e("REFERRAL", "🔗")} <b>My Referral Link:</b>\n` +
    `<code>${refLink}</code>\n\n` +
    `<blockquote>` +
    `${e("USERS", "👥")} <b>Invited:</b> ${invitedCount} Users\n` +
    `${e("BALANCE", "💰")} <b>Earned:</b> ${Number(earnings || 0).toLocaleString()} MMK` +
    `</blockquote>`;
}

export function getMustJoinMessage() {
  return `${e("CROWN", "👑")} <b>Join Our Official Channel First!</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Please join our official channel to use this bot.\n\n` +
    `After joining, tap <b>${e("DONE", "✅")} Check / Continue</b> below.`;
}

export function getProfileMessage(data) {
  const { firstName, telegramId, regDate, balance, totalOrders, totalSpent, totalDeposited, invitedCount, earnings, latestOrder, latestOrderDate } = data;

  let msg = `${e("PROFILE", "👤")} <b>My Profile</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• ${e("PROFILE", "👤")} Name: <b>${firstName}</b>\n` +
    `• ${e("USER_ID", "🆔")} Telegram ID: <code>${telegramId}</code>\n` +
    `• ${e("DATE", "📅")} Member Since: <b>${regDate}</b>` +
    `</blockquote>\n\n` +
    `<blockquote>` +
    `• ${e("BALANCE", "💰")} Available Balance: <b>${balance.toLocaleString()} MMK</b>` +
    `</blockquote>\n\n` +
    `${e("STATUS", "📈")} <b>Account Stats</b>\n` +
    `<blockquote>` +
    `• ${e("STOCK", "📦")} Orders Count: <b>${totalOrders}</b>\n` +
    `• ${e("SHOP", "💸")} Total Spent: <b>${totalSpent.toLocaleString()} MMK</b>\n` +
    `• ${e("DEPOSIT", "💳")} Total Deposited: <b>${totalDeposited.toLocaleString()} MMK</b>` +
    `</blockquote>\n\n` +
    `${e("REFERRAL", "🔗")} <b>Referrals</b>\n` +
    `<blockquote>` +
    `• ${e("USERS", "👥")} Invited: <b>${invitedCount} Users</b>\n` +
    `• ${e("BALANCE", "💰")} Total Earned: <b>${earnings.toLocaleString()} MMK</b>` +
    `</blockquote>\n\n` +
    `${e("STOCK", "👥")} <b>Latest Order:</b>\n`;

  if (latestOrder) {
    const pkg = CONFIG.PACKAGES[latestOrder.category] || { gb: latestOrder.category.toUpperCase() };
    msg += `<blockquote>` +
           `• Plan: ${pkg.name || pkg.gb}\n` +
           `• Price: ${latestOrder.price.toLocaleString()} MMK\n` +
           `• Date: ${latestOrderDate}` +
           `</blockquote>`;
  } else {
    msg += `<blockquote><i>No orders yet</i></blockquote>`;
  }

  return msg;
}

export function getOrdersSummaryMessage(totalOrders, totalSpent) { 
  let noteText = "";
  if (totalOrders > 0) { 
    noteText = `${e("DOWN", "👇")} <i>Select an order below to view your Access Key and details:</i>`;
  } else { 
    noteText = `<i>No orders yet</i>`; 
  }
  return `${e("SHOP", "🛍")} <b>My Orders</b>\n` + 
  `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` + 
  `<blockquote>` + 
  `• ${e("STOCK", "📦")} Total Orders: <b>${totalOrders} orders</b>\n` + 
  `• ${e("BALANCE", "💰")} Total Spent: <b>${totalSpent.toLocaleString()} MMK</b>\n` + 
  `</blockquote>\n\n` + 
  `${noteText}`; 
}

// ပုံ ၁ အတိုင်း Store Analytics Executive Report
export function formatStoreAnalyticsReport(data) {
  const {
    todayRev, todayOrders,
    yestRev, yestOrders,
    monthRev, monthOrders,
    totalRev, totalOrders,
    pkgBreakdownText,
    totalRef,
    totalUsers, activeUsers, bannedUsers,
    stockMap,
    pendingAudit,
    nowStr
  } = data;

  const fmt = (n) => Number(n || 0).toLocaleString();

  let stockLines = "";
  for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
    const qty = stockMap[k] || 0;
    const warn = qty <= 2 ? " ⚠️" : "";
    stockLines += `• <b>${pkg.name}:</b> ${fmt(qty)} Available${warn}\n`;
  }
  stockLines += `• <b>Free Test Keys:</b> ${fmt(stockMap["test"] || 0)} Available`;

  return (
    `${e("STATUS", "📊")} <b>Store Analytics & Executive Report</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `${e("BALANCE", "💎")} <b>Revenue & Cash Flow</b>\n` +
    `<blockquote>` +
    `• <b>Today:</b> ${fmt(todayRev)} MMK (${fmt(todayOrders)} Orders)\n` +
    `• <b>Yesterday:</b> ${fmt(yestRev)} MMK (${fmt(yestOrders)} Orders)\n` +
    `• <b>This Month:</b> ${fmt(monthRev)} MMK (${fmt(monthOrders)} Orders)\n` +
    `• <b>All-Time Revenue:</b> ${fmt(totalRev)} MMK\n` +
    `• <b>Total Completed Sales:</b> ${fmt(totalOrders)}` +
    `</blockquote>\n\n` +
    `${e("STOCK", "📦")} <b>Package Performance (Sales)</b>\n` +
    `<blockquote>${pkgBreakdownText}</blockquote>\n\n` +
    `${e("STAR", "✨")} <b>Affiliate / Referral Stats</b>\n` +
    `<blockquote>• <b>Total Commission:</b> ${fmt(totalRef)} MMK</blockquote>\n\n` +
    `${e("STOCK", "📦")} <b>Key Inventory (Stock)</b>\n` +
    `<blockquote>${stockLines}</blockquote>\n\n` +
    `${e("USERS", "👥")} <b>Users & Security</b>\n` +
    `<blockquote>` +
    `• <b>Total Registered:</b> ${fmt(totalUsers)}\n` +
    `• <b>Active Key Users:</b> ${fmt(activeUsers)}\n` +
    `• <b>Suspended/Banned:</b> ${fmt(bannedUsers)}` +
    `</blockquote>\n\n` +
    `${e("CLOCK", "⏳")} <b>Audit Queue:</b> ${fmt(pendingAudit)} Pending Slips\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n` +
    `${e("BTN_REFRESH", "🔄")} <i>Last updated: ${nowStr}</i>`
  );
}

// --- Giveaway / announce / ban-list messages (added; existing messages untouched) ---
function escapeHtml(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function formatGiveawayPrize(prizeType, prizeValue) {
  if (prizeType === "balance") return `${Number(prizeValue || 0).toLocaleString()} MMK Wallet Balance`;
  if (prizeType === "package") {
    const pkg = CONFIG.PACKAGES[prizeValue];
    return pkg ? pkg.name : String(prizeValue || "");
  }
  if (prizeType === "test") return "Free Test Key";
  return String(prizeValue || "");
}

export function getGiveawayMessage(giveaway, participantCount = 0) {
  const maxText = giveaway.max_participants && Number(giveaway.max_participants) > 0
    ? `${participantCount} / ${giveaway.max_participants}`
    : `${participantCount} (Unlimited)`;
  const customBlock = giveaway.custom_message ? `${escapeHtml(giveaway.custom_message)}\n\n` : "";
  return (
    `${e("FREEBIES", "🎁")} <b> ${giveaway.title}</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    customBlock +
    `<blockquote>` +
    `${e("STAR", "✨")} <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}\n` +
    `${e("PROFILE", "👤")} <b>Winners:</b> ${giveaway.winners_count}\n` +
    `${e("USERS", "👥")} <b>Participants:</b> ${maxText}\n` +
    `${e("CLOCK", "⏳")} <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}` +
    `</blockquote>\n\n` +
    `${e("DOWN", "👇")} <i>Tap Join Giveaway below to enter. One entry per user.</i>`
  );
}

export function getGiveawaySummaryMessage(draft) {
  return (
    `${e("FREEBIES", "🎁")} <b>Giveaway Summary — Confirm to Start</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `<blockquote>` +
    `• <b>Title:</b> ${draft.title}\n` +
    `• <b>Custom Message:</b> ${draft.custom_message ? escapeHtml(draft.custom_message) : "None"}\n` +
    `• <b>Prize:</b> ${formatGiveawayPrize(draft.prize_type, draft.prize_value)}\n` +
    `• <b>Winners:</b> ${draft.winners_count}\n` +
    `• <b>Max Participants:</b> ${draft.max_participants && Number(draft.max_participants) > 0 ? draft.max_participants : "Unlimited"}\n` +
    `• <b>Duration:</b> ${draft.duration_hours} hours` +
    `</blockquote>\n\n` +
    `<i>Confirm to post the giveaway. Cancel to discard it.</i>`
  );
}

export function getGiveawayWinnersMessage(giveaway, winners, participantCount = 0) {
  const list = winners.length > 0
    ? winners.map((w, i) => `${i + 1}. ${w.first_name || "Customer"} (<code>${w.user_id}</code>)`).join("\n")
    : "<i>No participants, so no winners were drawn.</i>";
  const customBlockW = giveaway.custom_message ? `${escapeHtml(giveaway.custom_message)}\n\n` : "";
  return (
    `${e("FREEBIES", "🎁")} <b>Giveaway Ended: ${giveaway.title}</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    customBlockW +
    `<blockquote>` +
    `${e("STAR", "✨")} <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}\n` +
    `${e("USERS", "👥")} <b>Participants:</b> ${participantCount}` +
    `</blockquote>\n\n` +
    `<b>Winners:</b>\n${list}`
  );
}

export function getGiveawayAdminMessage(giveaway, participantCount = 0) {
  return (
    `${e("FREEBIES", "🎁")} <b>Giveaway Created (#${giveaway.id})</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `• <b>Title:</b> ${giveaway.title}\n` +
    `• <b>Custom Message:</b> ${giveaway.custom_message ? escapeHtml(giveaway.custom_message) : "None"}\n` +
    `• <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}\n` +
    `• <b>Winners:</b> ${giveaway.winners_count}\n` +
    `• <b>Participants:</b> ${participantCount}\n` +
    `• <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}`
  );
}

export function getAnnouncePreviewMessage(text) {
  return (
    `${e("ANNOUNCE", "📢")} <b>Announcement Preview</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `${text}\n\n` +
    `<i>Confirm to send this to all non-banned users, or cancel.</i>`
  );
}

export function getBanListMessage(bannedUsers) {
  if (!bannedUsers || bannedUsers.length === 0) {
    return `${e("BAN", "🚫")} <b>Banned Users</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n<i>No banned users.</i>`;
  }
  const list = bannedUsers.map((u) => `• ${u.first_name || ""} (<code>${u.telegram_id}</code>) @${u.username || "None"}`).join("\n");
  return `${e("BAN", "🚫")} <b>Banned Users (${bannedUsers.length})</b>\n<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n${list}`;
}

export function getGiveawayUnavailableMessage() {
  return (
    `${e("FREEBIES", "🎁")} <b>Giveaway Unavailable</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `Coming soon! Please check back later.`
  );
}

export function getGiveawayActiveChoiceMessage(giveaway) {
  return (
    `${e("FREEBIES", "🎁")} <b>Active Giveaway Already Running</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `• <b>Giveaway:</b> ${giveaway.title}\n` +
    `• <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}\n` +
    `• <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}\n\n` +
    `What do you want to do with the new giveaway?\n` +
    `<i>Replace Now posts the new giveaway now and cancels this one. Schedule for Later saves the new giveaway and posts it at the date you set, replacing the active one at that time. Cancel keeps this giveaway running.</i>`
  );
}

export function getGiveawaySchedulePromptMessage(draft) {
  return (
    `${e("CLOCK", "⏳")} <b>Set Post Date & Time</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `• <b>Giveaway:</b> ${draft.title}\n\n` +
    `Send the date and time to post this giveaway, in Asia/Yangon time, or /cancel.\n` +
    `Examples:\n` +
    `<code>5 Nov 2026, 10:00 am</code>\n` +
    `<code>2026-11-05 10:00</code>\n` +
    `<code>05/11/2026 10:00</code>`
  );
}

export function getGiveawayScheduledMessage(draft, scheduledAt) {
  return (
    `${e("DONE", "✅")} <b>Giveaway Scheduled</b>\n` +
    `<b>━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
    `• <b>Giveaway:</b> ${draft.title}\n` +
    `• <b>Prize:</b> ${formatGiveawayPrize(draft.prize_type, draft.prize_value)}\n` +
    `• <b>Will be posted:</b> ${formatMyanmarTime(new Date(Number(scheduledAt)))}\n\n` +
    `<i>It will replace the active giveaway at that time. It will not appear in the bot before then.</i>`
  );
}
