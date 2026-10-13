import { CONFIG, makeBtn } from "./config.js";

export function getMainKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Buy Outline Key", "callback_data", "menu_buy", "success", "BTN_SHOP")],
      [makeBtn("Free Test Key", "callback_data", "menu_test", null, "BTN_FREEBIES")],
      [
        makeBtn("Deposit", "callback_data", "menu_topup", null, "BTN_DEPOSIT"),
        makeBtn("My Profile", "callback_data", "menu_profile", null, "BTN_PROFILE")        
      ],
      [makeBtn("Refer & Earn", "callback_data", "menu_referral", null, "STAR")],
      [
        makeBtn("Contact Support", "url", `https://t.me/JaiwaJG`, null, "BTN_SUPPORT"),
        makeBtn("Terms of Service", "callback_data", "menu_terms", null, "BTN_TERMS")
      ]
    ]
  };
}

export function getCategoryKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Limited Data | Unlimited Users", "callback_data", "cat_limited_data", "primary", "STOCK")],
      [makeBtn("Unlimited Data | Limited Users", "callback_data", "cat_unlimited_data", "primary", "FLASH")],
      [makeBtn("Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

export function getCategoryPackagesKeyboard(categoryType, stockMap = {}) {
  const rows = [];
  const pkgs = Object.entries(CONFIG.PACKAGES).filter(([k, v]) => v.category_type === categoryType);

  for (const [key, pkg] of pkgs) {
    const stockCount = stockMap[key] || 0;
    if (stockCount > 0) {
      rows.push([
        makeBtn(`${pkg.name} — ${pkg.price.toLocaleString()} MMK`, "callback_data", `detail_pkg_${key}`, "primary", "BTN_SHOP")
      ]);
    } else {
      rows.push([
        makeBtn(`${pkg.name} — Out of Stock`, "callback_data", `out_of_stock_${key}`, "danger", "FALSE")
      ]);
    }
  }

  rows.push([makeBtn("Back to Categories", "callback_data", "menu_buy", null, "BTN_BACK")]);
  return { inline_keyboard: rows };
}

export function getPlanPaymentMethodKeyboard(categoryKey, categoryType) {
  return {
    inline_keyboard: [
      [makeBtn("Buy with Wallet", "callback_data", `buy_wallet_${categoryKey}`, "success", "WALLET")],
      [makeBtn("Pay Direct", "callback_data", `pay_direct_${categoryKey}`, "primary", "PAY")],
      [makeBtn("Back to Plans", "callback_data", `cat_${categoryType}`, null, "BTN_BACK")]
    ]
  };
}

export function getInsufficientBalanceKeyboard(categoryType) {
  return {
    inline_keyboard: [
      [makeBtn("Deposit Wallet", "callback_data", "menu_topup", "primary", "BTN_DEPOSIT")],
      [makeBtn("Back to Plans", "callback_data", `cat_${categoryType}`, null, "BTN_BACK")]
    ]
  };
}

export function getTopupKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("2,500 MMK", "callback_data", "topup_amt_2500", "success", "BTN_DEPOSIT")],
      [makeBtn("4,500 MMK", "callback_data", "topup_amt_4500", "success", "BTN_DEPOSIT")],
      [makeBtn("10,500 MMK", "callback_data", "topup_amt_10500", "success", "BTN_DEPOSIT")],
      [makeBtn("Custom Deposit Amount", "callback_data", "topup_custom", "primary", "BTN_CUSTOM")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

export function getProfileKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("My Orders", "callback_data", "menu_orders_p_1", "primary", "BTN_ORDERS")],
      [
        makeBtn("Deposit", "callback_data", "menu_topup", null, "BTN_DEPOSIT"),
        makeBtn("Refer & Earn", "callback_data", "menu_referral", null, "STAR")
      ],
      [makeBtn("Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

export function getProfileOrdersKeyboard(orders, page, totalPages) {
  let inlineKeyboard = [];
  orders.forEach((o) => {
    inlineKeyboard.push([
      makeBtn(`#${o.id} · ${o.category.toUpperCase()} · ${o.price.toLocaleString()} MMK`, "callback_data", `view_ord_${o.id}_${page}`, null, "BTN_KEY")
    ]);
  });

  let navRow = [];
  if (page > 1) navRow.push(makeBtn("Prev", "callback_data", `menu_orders_p_${page - 1}`, null, "BTN_PREV"));
  if (totalPages > 1) navRow.push(makeBtn(`${page}/${totalPages}`, "callback_data", "noop", "success", "BTN_PAGE"));
  if (page < totalPages) navRow.push(makeBtn("Next", "callback_data", `menu_orders_p_${page + 1}`, null, "BTN_NEXT"));
  if (navRow.length > 0) inlineKeyboard.push(navRow);

  inlineKeyboard.push([
      makeBtn("Back", "callback_data", "menu_profile", null, "BTN_BACK"),
      makeBtn("Home", "callback_data", "menu_home", null, "BTN_HOME")
  ]);
  return { inline_keyboard: inlineKeyboard };
}

// ပုံ ၂ အတိုင်း Copy Key, Delete Key, Back to Orders ခလုတ်များ
export function getKeyDetailKeyboard(orderId, page, accessKey) {
  const safeKey = accessKey || "No-Key-Found";
  return {
    inline_keyboard: [
      [makeBtn("Copy Key", "copy_text", safeKey, "primary", "BTN_KEY")],
      [makeBtn("Delete Key", "callback_data", `del_conf_${orderId}_${page}`, "danger", "BTN_DELETE")],
      [makeBtn("Back to Orders", "callback_data", `menu_orders_p_${page}`, null, "BTN_BACK")]
    ]
  };
}

export function getDeleteConfirmKeyboard(orderId, page) {
  return {
    inline_keyboard: [
      [makeBtn("Yes, Delete Permanently", "callback_data", `del_exec_${orderId}_${page}`, "danger")],
      [makeBtn("Cancel", "callback_data", `view_ord_${orderId}_${page}`)]
    ]
  };
}

export function getSalesChannelKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Buy Outline Key", "url", `https://t.me/${CONFIG.BOT_USERNAME}?start=menu_buy`, "success", "BTN_SHOP")]
    ]
  };
}

export function getPaymentAdminKeyboard(requestId, targetUserId, amount) {
  return {
    inline_keyboard: [
      [makeBtn(`Approve (+${amount.toLocaleString()} MMK)`, "callback_data", `pay_app_${requestId}_${targetUserId}_${amount}`, "primary", "BTN_APPROVE")],
      [
        makeBtn("Reject Slip", "callback_data", `pay_rej_${requestId}_${targetUserId}`, "danger", "BTN_REJECT"),
        makeBtn("Ban Fraud User", "callback_data", `pay_ban_${targetUserId}`, "danger", "BAN")
      ]
    ]
  };
}

export function getStockRefreshKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Refresh Stock Status", "callback_data", "admin_refresh_stock", "primary", "BTN_REFRESH")]
    ]
  };
}

// ပုံ ၄ အတိုင်း Copy Test Key, Back to Home ခလုတ်များ
export function getTestKeyActionKeyboard(accessKey) {
  const safeKey = accessKey || "No-Key-Found";
  return {
    inline_keyboard: [
      [makeBtn("Copy Test Key", "copy_text", safeKey, "primary", "BTN_KEY")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

// ပုံ ၁ အောက်ခြေရှိ Refresh Status ခလုတ်
export function getStatsRefreshKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Refresh Status", "callback_data", "admin_refresh_stats", "primary", "BTN_REFRESH")]
    ]
  };
}

export function getTestKeyKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Claim Free Test Key", "callback_data", "exec_claim_test_key", null, "BTN_KEY")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

export function getReferralKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}

export function getMustJoinKeyboard(channelLink) {
  return {
    inline_keyboard: [
      [makeBtn("Join Channel", "url", channelLink, "primary", "CROWN")],
      [makeBtn("Check / Continue", "callback_data", "check_force_join", "success", "DONE")]
    ]
  };
}

export function getSupportKeyboard() {
  return {
    inline_keyboard: [
      [
        makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME"),
        makeBtn("Contact Support", "url", `https://t.me/JaiwaJG`, null, "BTN_SUPPORT")
      ]
    ]
  };
}