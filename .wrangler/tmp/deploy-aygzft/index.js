var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/config.js
var CONFIG = {
  STORE_NAME: "JAIWATeam VPN Bot",
  ADMIN_USERNAME: ["JaiwaJG"],
  BOT_USERNAME: "jaiwateamvpnbot",
  REFERRAL_PERCENT: 5,
  // 5% Commission
  // Giveaway defaults for /giftway. No emoji IDs are changed here.
  GIVEAWAY: {
    DEFAULT_DURATION_HOURS: 24,
    CHANNEL_ID: "-1003109042473"
  },
  FORCE_JOIN: {
    ENABLED: true,
    CHANNEL_ID: "-1003109042473",
    CHANNEL_LINK: "https://t.me/jaiwateam"
  },
  // 📱 Payment Information
  PAYMENT: {
    PHONE: "09456545321",
    NAME: "GUM SENG LAT",
    MIN_TOPUP: 2500
  },
  // 💎 Packages Configuration (Category ၂ မျိုး ခွဲခြားထားခြင်း)
  PACKAGES: {
    // --- Category 1: Limited Data | Unlimited Users ---
    "50gb": {
      name: "50 GB High-Speed Plan",
      category_type: "limited_data",
      price: 2500,
      days: 30,
      gb: "50 GB",
      users: "Unlimited Devices",
      detail: "50 GB | High-Speed Singapore | Unlimited Devices"
    },
    "100gb": {
      name: "100 GB High-Speed Plan",
      category_type: "limited_data",
      price: 4500,
      days: 35,
      gb: "100 GB",
      users: "Unlimited Devices",
      detail: "100 GB | High-Speed Singapore | Unlimited Devices"
    },
    "250gb": {
      name: "250 GB High-Speed Plan",
      category_type: "limited_data",
      price: 10500,
      days: 75,
      gb: "250 GB",
      users: "Unlimited Devices",
      detail: "250 GB | High-Speed Singapore | Unlimited Devices"
    },
    // --- Category 2: Unlimited Data | Limited Users ---
    "1m_1u": {
      name: "1 Month | Unlimited (1 User)",
      category_type: "unlimited_data",
      price: 6e3,
      days: 30,
      gb: "Unlimited",
      users: "1 Device / User",
      detail: "Unlimited Data | 1 User/Device | 30 Days"
    },
    "1m_2u": {
      name: "1 Month | Unlimited (2 Users)",
      category_type: "unlimited_data",
      price: 1e4,
      days: 30,
      gb: "Unlimited",
      users: "2 Devices / Users",
      detail: "Unlimited Data | 2 Users/Devices | 30 Days"
    },
    "3m_1u": {
      name: "3 Months | Unlimited (1 User)",
      category_type: "unlimited_data",
      price: 16e3,
      days: 90,
      gb: "Unlimited",
      users: "1 Device / User",
      detail: "Unlimited Data | 1 User/Device | 90 Days"
    },
    "3m_2u": {
      name: "3 Months | Unlimited (2 Users)",
      category_type: "unlimited_data",
      price: 27e3,
      days: 90,
      gb: "Unlimited",
      users: "2 Devices / Users",
      detail: "Unlimited Data | 2 Users/Devices | 90 Days"
    }
  },
  BUTTON_THEMES: {
    PRIMARY: "\u{1F7E2}",
    SECONDARY: "\u{1F535}",
    ACCENT: "\u{1F7E0}",
    DANGER: "\u{1F534}",
    SPECIAL: "\u{1F7E3}"
  },
  EMOJIS: {
    CROWN: "5460935893344864057",
    CHANNEL: "5839394435644788150",
    FIRE: "5289722755871162900",
    VERIFIED: "5289722755871162900",
    USER_ID: "6309581148536183273",
    STAR: "5472164874886846699",
    DOT: "5220103835673969226",
    INFO: "5258503720928288433",
    CLOCK: "5451732530048802485",
    FLASH: "5460991276948143687",
    STATUS: "5258330865674494479",
    DOWN: "5231102735817918643",
    UP: "5229077409629752304",
    ANNOUNCE: "4967835134792303324",
    REFERRAL: "5260730055880876557",
    ACTIVE: "5260463209562776385",
    INACTIVE: "5974083768233760323",
    OUTLINE: "5247168718118598489",
    HIDDIFY: "5424898364657383422",
    SHOP: "5431499171045581032",
    BUY: "5373052667671093676",
    STOCK: "5154930575995306994",
    UNSTOCK: "5458779239941681169",
    FALSE: "6208506738266610545",
    FREEBIES: "6089047892285200811",
    DEPOSIT: "5258204546391351475",
    BALANCE: "5298988357538328017",
    PROFILE: "5258011929993026890",
    USERS: "5258513401784573443",
    TERMS: "5258503720928288433",
    SUPPORT: "5328121752067258288",
    KPAY: "6055487705029025287",
    AYAPAY: "6057575338307754857",
    UABPAY: "6057859463279287344",
    WAVEPAY: "6165694392590933660",
    WALLET: "4972482444025398275",
    SUCCESS: "6300915244562651655",
    DONE: "5429381339851796035",
    WARNING: "5215677343594457295",
    ALARM: "6208754910066908504",
    BAN: "6091190140368071716",
    KEY: "5330115548900501467",
    TRASH: "5330115548900501467",
    SLIP: "5444856076954520455",
    DATE: "5258105663359294787",
    TIME: "5258419835922030550",
    PIN: "5258461531464539536",
    CUSTOM: "5470060791883374114",
    BTN_SHOP: "5431499171045581032",
    BTN_FREEBIES: "6089047892285200811",
    BTN_DEPOSIT: "5258204546391351475",
    BTN_BALANCE: "5298988357538328017",
    BTN_PROFILE: "5258011929993026890",
    BTN_TERMS: "5258503720928288433",
    BTN_CUSTOM: "5470060791883374114",
    BTN_HOME: "5257963315258204021",
    BTN_SUPPORT: "6057677034543391682",
    BTN_APPROVE: "5260463209562776385",
    BTN_REJECT: "5974083768233760323",
    BTN_KEY: "5330115548900501467",
    BTN_REFRESH: "5244758760429213978",
    BTN_ANNOUNCE: "4967835134792303324",
    BTN_DELETE: "5258130763148172425",
    BTN_BACK: "5416113713428057601",
    BTN_PREV: "5258236805890710909",
    BTN_NEXT: "5260450573768990626",
    BTN_PAGE: "5257965810634202885",
    BTN_ORDERS: "5258389041006518073"
  }
};
function e(emojiType, fallbackUnicode = "") {
  const emojiId = CONFIG.EMOJIS[emojiType];
  if (emojiId && emojiId.trim() !== "") {
    return `<tg-emoji emoji-id="${emojiId.trim()}">${fallbackUnicode}</tg-emoji>`;
  }
  return fallbackUnicode;
}
__name(e, "e");
function makeBtn(title, actionType, actionValue, style = null, emojiIdKey = null) {
  const btn = { text: title };
  if (actionType === "callback_data") btn.callback_data = actionValue;
  if (actionType === "url") btn.url = actionValue;
  if (actionType === "copy_text") btn.copy_text = { text: actionValue };
  if (style) btn.style = style;
  const emojiId = emojiIdKey ? CONFIG.EMOJIS[emojiIdKey] : null;
  if (emojiId && emojiId.trim() !== "") {
    btn.icon_custom_emoji_id = emojiId.trim();
  }
  return btn;
}
__name(makeBtn, "makeBtn");

// src/keyboards.js
function getMainKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Buy Outline Key", "callback_data", "menu_buy", "success", "BTN_SHOP")],
      [
        makeBtn("Free Test Key", "callback_data", "menu_test", null, "KEY"),
        makeBtn("Giveaway", "callback_data", "menu_giftway", "danger", "BTN_FREEBIES")
      ],
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
__name(getMainKeyboard, "getMainKeyboard");
function getCategoryKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Limited Data | Unlimited Users", "callback_data", "cat_limited_data", "primary", "STOCK")],
      [makeBtn("Unlimited Data | Limited Users", "callback_data", "cat_unlimited_data", "primary", "FLASH")],
      [makeBtn("Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getCategoryKeyboard, "getCategoryKeyboard");
function getCategoryPackagesKeyboard(categoryType, stockMap = {}) {
  const rows = [];
  const pkgs = Object.entries(CONFIG.PACKAGES).filter(([k, v]) => v.category_type === categoryType);
  for (const [key, pkg] of pkgs) {
    const stockCount = stockMap[key] || 0;
    if (stockCount > 0) {
      rows.push([
        makeBtn(`${pkg.name} \u2014 ${pkg.price.toLocaleString()} MMK`, "callback_data", `detail_pkg_${key}`, "primary", "BTN_SHOP")
      ]);
    } else {
      rows.push([
        makeBtn(`${pkg.name} \u2014 Out of Stock`, "callback_data", `out_of_stock_${key}`, "danger", "FALSE")
      ]);
    }
  }
  rows.push([makeBtn("Back to Categories", "callback_data", "menu_buy", null, "BTN_BACK")]);
  return { inline_keyboard: rows };
}
__name(getCategoryPackagesKeyboard, "getCategoryPackagesKeyboard");
function getPlanPaymentMethodKeyboard(categoryKey, categoryType) {
  return {
    inline_keyboard: [
      [makeBtn("Buy with Wallet", "callback_data", `buy_wallet_${categoryKey}`, "success", "WALLET")],
      [makeBtn("Pay Direct", "callback_data", `pay_direct_${categoryKey}`, "primary", "PAY")],
      [makeBtn("Back to Plans", "callback_data", `cat_${categoryType}`, null, "BTN_BACK")]
    ]
  };
}
__name(getPlanPaymentMethodKeyboard, "getPlanPaymentMethodKeyboard");
function getInsufficientBalanceKeyboard(categoryType) {
  return {
    inline_keyboard: [
      [makeBtn("Deposit Wallet", "callback_data", "menu_topup", "primary", "BTN_DEPOSIT")],
      [makeBtn("Back to Plans", "callback_data", `cat_${categoryType}`, null, "BTN_BACK")]
    ]
  };
}
__name(getInsufficientBalanceKeyboard, "getInsufficientBalanceKeyboard");
function getTopupKeyboard() {
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
__name(getTopupKeyboard, "getTopupKeyboard");
function getProfileKeyboard() {
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
__name(getProfileKeyboard, "getProfileKeyboard");
function getProfileOrdersKeyboard(orders, page, totalPages) {
  let inlineKeyboard = [];
  orders.forEach((o) => {
    inlineKeyboard.push([
      makeBtn(`#${o.id} \xB7 ${o.category.toUpperCase()} \xB7 ${o.price.toLocaleString()} MMK`, "callback_data", `view_ord_${o.id}_${page}`, null, "BTN_KEY")
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
__name(getProfileOrdersKeyboard, "getProfileOrdersKeyboard");
function getKeyDetailKeyboard(orderId, page, accessKey) {
  const safeKey = accessKey || "No-Key-Found";
  return {
    inline_keyboard: [
      [makeBtn("Copy Key", "copy_text", safeKey, "primary", "BTN_KEY")],
      [makeBtn("Delete Key", "callback_data", `del_conf_${orderId}_${page}`, "danger", "BTN_DELETE")],
      [makeBtn("Back to Orders", "callback_data", `menu_orders_p_${page}`, null, "BTN_BACK")]
    ]
  };
}
__name(getKeyDetailKeyboard, "getKeyDetailKeyboard");
function getDeleteConfirmKeyboard(orderId, page) {
  return {
    inline_keyboard: [
      [makeBtn("Yes, Delete Permanently", "callback_data", `del_exec_${orderId}_${page}`, "danger")],
      [makeBtn("Cancel", "callback_data", `view_ord_${orderId}_${page}`)]
    ]
  };
}
__name(getDeleteConfirmKeyboard, "getDeleteConfirmKeyboard");
function getSalesChannelKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Buy Outline Key", "url", `https://t.me/${CONFIG.BOT_USERNAME}?start=menu_buy`, "success", "BTN_SHOP")]
    ]
  };
}
__name(getSalesChannelKeyboard, "getSalesChannelKeyboard");
function getPaymentAdminKeyboard(requestId, targetUserId, amount) {
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
__name(getPaymentAdminKeyboard, "getPaymentAdminKeyboard");
function getStockRefreshKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Refresh Stock Status", "callback_data", "admin_refresh_stock", "primary", "BTN_REFRESH")]
    ]
  };
}
__name(getStockRefreshKeyboard, "getStockRefreshKeyboard");
function getTestKeyActionKeyboard(accessKey) {
  const safeKey = accessKey || "No-Key-Found";
  return {
    inline_keyboard: [
      [makeBtn("Copy Test Key", "copy_text", safeKey, "primary", "BTN_KEY")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getTestKeyActionKeyboard, "getTestKeyActionKeyboard");
function getStatsRefreshKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Refresh Status", "callback_data", "admin_refresh_stats", "primary", "BTN_REFRESH")]
    ]
  };
}
__name(getStatsRefreshKeyboard, "getStatsRefreshKeyboard");
function getTestKeyKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Claim Free Test Key", "callback_data", "exec_claim_test_key", null, "BTN_KEY")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getTestKeyKeyboard, "getTestKeyKeyboard");
function getReferralKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getReferralKeyboard, "getReferralKeyboard");
function getMustJoinKeyboard(channelLink) {
  return {
    inline_keyboard: [
      [makeBtn("Join Channel", "url", channelLink, "primary", "CROWN")],
      [makeBtn("Check / Continue", "callback_data", "check_force_join", "success", "DONE")]
    ]
  };
}
__name(getMustJoinKeyboard, "getMustJoinKeyboard");
function getSupportKeyboard() {
  return {
    inline_keyboard: [
      [
        makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME"),
        makeBtn("Contact Support", "url", `https://t.me/JaiwaJG`, null, "BTN_SUPPORT")
      ]
    ]
  };
}
__name(getSupportKeyboard, "getSupportKeyboard");
function getGiveawayKeyboard(giveawayId) {
  return {
    inline_keyboard: [
      [makeBtn("Join Giveaway", "url", `https://t.me/${CONFIG.BOT_USERNAME}?start=menu_giftway`, "success", "BTN_FREEBIES")]
    ]
  };
}
__name(getGiveawayKeyboard, "getGiveawayKeyboard");
function getGiveawayPrizeKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Wallet Balance", "callback_data", "gw_prize_balance", "primary", "WALLET")],
      [makeBtn("VPN Package Key", "callback_data", "gw_prize_package", "primary", "BTN_SHOP")],
      [makeBtn("Free Test Key", "callback_data", "gw_prize_test", null, "BTN_FREEBIES")],
      [makeBtn("Custom Prize", "callback_data", "gw_prize_custom", null, "BTN_CUSTOM")]
    ]
  };
}
__name(getGiveawayPrizeKeyboard, "getGiveawayPrizeKeyboard");
function getGiveawayPackageKeyboard() {
  const rows = [];
  for (const [key, pkg] of Object.entries(CONFIG.PACKAGES)) {
    rows.push([makeBtn(`${pkg.name} \u2014 ${pkg.price.toLocaleString()} MMK`, "callback_data", `gw_pkg_${key}`, "primary", "BTN_SHOP")]);
  }
  return { inline_keyboard: rows };
}
__name(getGiveawayPackageKeyboard, "getGiveawayPackageKeyboard");
function getGiveawayConfirmKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Confirm & Start Giveaway", "callback_data", "gw_create_confirm", "success", "BTN_APPROVE")],
      [makeBtn("Cancel", "callback_data", "gw_draft_cancel", "danger", "BTN_REJECT")]
    ]
  };
}
__name(getGiveawayConfirmKeyboard, "getGiveawayConfirmKeyboard");
function getGiveawayAdminKeyboard(giveawayId) {
  return {
    inline_keyboard: [
      [makeBtn("End Now & Draw Winners", "callback_data", `gw_end_${giveawayId}`, "success", "BTN_APPROVE")],
      [makeBtn("Participants", "callback_data", `gw_participants_${giveawayId}`, "primary", "USERS")],
      [makeBtn("Cancel Giveaway", "callback_data", `gw_giveaway_cancel_${giveawayId}`, "danger", "BTN_REJECT")]
    ]
  };
}
__name(getGiveawayAdminKeyboard, "getGiveawayAdminKeyboard");
function getAnnounceConfirmKeyboard(pendingId) {
  return {
    inline_keyboard: [
      [makeBtn("Confirm & Send", "callback_data", `announce_confirm_${pendingId}`, "success", "BTN_APPROVE")],
      [makeBtn("Cancel", "callback_data", `announce_cancel_${pendingId}`, "danger", "BTN_REJECT")]
    ]
  };
}
__name(getAnnounceConfirmKeyboard, "getAnnounceConfirmKeyboard");
function getGiveawayUserKeyboard(giveawayId) {
  return {
    inline_keyboard: [
      [makeBtn("Join Giveaway", "callback_data", `gw_join_${giveawayId}`, "success", "BTN_FREEBIES")],
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getGiveawayUserKeyboard, "getGiveawayUserKeyboard");
function getGiveawayUnavailableKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
    ]
  };
}
__name(getGiveawayUnavailableKeyboard, "getGiveawayUnavailableKeyboard");
function getGiveawayActiveChoiceKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Replace Now", "callback_data", "gw_active_replace", "danger", "BTN_REJECT")],
      [makeBtn("Schedule for Later", "callback_data", "gw_active_schedule", "primary", "CLOCK")],
      [makeBtn("Cancel", "callback_data", "gw_active_cancel", null, "BTN_BACK")]
    ]
  };
}
__name(getGiveawayActiveChoiceKeyboard, "getGiveawayActiveChoiceKeyboard");
function getGiveawayScheduleConfirmKeyboard() {
  return {
    inline_keyboard: [
      [makeBtn("Confirm & Set Date", "callback_data", "gw_create_confirm", "success", "BTN_APPROVE")],
      [makeBtn("Cancel", "callback_data", "gw_draft_cancel", "danger", "BTN_REJECT")]
    ]
  };
}
__name(getGiveawayScheduleConfirmKeyboard, "getGiveawayScheduleConfirmKeyboard");

// src/messages.js
function e2(emojiType, fallbackUnicode = "") {
  try {
    const id = CONFIG?.EMOJIS?.[emojiType];
    if (id && String(id).trim() !== "") {
      return `<tg-emoji emoji-id="${String(id).trim()}">${fallbackUnicode}</tg-emoji>`;
    }
    return fallbackUnicode;
  } catch (err) {
    return fallbackUnicode;
  }
}
__name(e2, "e");
function maskName(name) {
  if (!name) return "Anonymous";
  const str = String(name).trim();
  if (str.length <= 2) return str[0] + "*";
  return str.slice(0, 2) + "*".repeat(Math.max(1, str.length - 2));
}
__name(maskName, "maskName");
function formatMyanmarTime(dateObj) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Yangon",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }).format(dateObj);
  } catch (err) {
    return dateObj.toISOString();
  }
}
__name(formatMyanmarTime, "formatMyanmarTime");
function getWelcomeMessage(firstName) {
  return `${e2("CROWN", "\u{1F451}")} <b>Welcome to ${CONFIG.STORE_NAME}</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Hello <b>${firstName || "Customer"}</b> ${e2("STAR", "\u2728")}

We provide ultra-fast, stable, and encrypted <b>Outline VPN Access Keys</b> with instant automated delivery.

<blockquote>${e2("SHOP", "\u{1F6CD}")} <b>Shop</b> \u2014 Browse & buy Outline Private Key
${e2("KEY", "\u{1F381}")} <b>Freebies</b> \u2014 Claim monthly free test key
${e2("FREEBIES", "\u{1F381}")} <b>Giveaway</b> \u2014 Claim availiable Gift
${e2("DEPOSIT", "\u{1F4B3}")} <b>Deposit</b> \u2014 Top up wallet balance
${e2("PROFILE", "\u{1F464}")} <b>My Profile</b> \u2014 Balance, keys & order history
${e2("STAR", "\u2728")} <b>Referral</b> \u2014 Invite friends & earn 5%
${e2("TERMS", "\u{1F4DC}")} <b>Terms</b> \u2014 Store rules & usage policies</blockquote>

${e2("CROWN", "\u{1F451}")} <b>Channel: @jaiwateam</b>
${e2("BUY", "\u{1F451}")} <b>Sale Proved: @sales_proved</b>

<b>Select an option below to continue.</b> ${e2("DOWN", "\u{1F447}")}`;
}
__name(getWelcomeMessage, "getWelcomeMessage");
function getCategorySelectMessage() {
  return `${e2("SHOP", "\u{1F6CD}")} <b>Select Package Category</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Please choose your desired key package category:

<blockquote>1 <b>Limited Data | Unlimited Users</b>
\u2022 High-speed data quota with unlimited simultaneous device connections.
</blockquote>

<blockquote>2 <b>Unlimited Data | Limited Users</b>
\u2022 100% Unlimited high-speed data with dedicated device quota.</blockquote>

${e2("DOWN", "\u{1F447}")} <i>Choose a category below to continue:</i>`;
}
__name(getCategorySelectMessage, "getCategorySelectMessage");
function getPackageListMessage(balance, categoryType, stockMap = {}) {
  const isLimited = categoryType === "limited_data";
  const title = isLimited ? "Limited Data | Unlimited Users" : "Unlimited Data | Limited Users";
  let listHtml = "";
  for (const [key, pkg] of Object.entries(CONFIG.PACKAGES)) {
    if (pkg.category_type === categoryType) {
      const stock = stockMap[key] || 0;
      const stockBadge = stock > 0 ? `${e2("ACTIVE", "\u{1F7E2}")} In Stock (${stock})` : `${e2("INACTIVE", "\u{1F534}")} Out of Stock`;
      listHtml += `<blockquote>${e2("OUTLINE", "\u{1F539}")} <b>${pkg.name}</b>
\u2022 <b>Details:</b> ${pkg.detail}
\u2022 <b>Validity:</b> ${pkg.days} Days
\u2022 <b>Price:</b> <b>${pkg.price.toLocaleString()} MMK</b>
\u2022 <b>Status:</b> ${stockBadge}
</blockquote>
`;
    }
  }
  return `${e2("SHOP", "\u{1F6CD}")} <b>${title}</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${e2("BALANCE", "\u{1F4B0}")} <b>My Balance:</b> <code>${balance.toLocaleString()} MMK</code>

` + listHtml + `
${e2("FLASH", "\u26A1\uFE0F")} <i>Select a package below to view details and proceed to checkout:</i>`;
}
__name(getPackageListMessage, "getPackageListMessage");
function getPlanDetailMessage(pkgKey, balance, inStock = true) {
  const pkg = CONFIG.PACKAGES[pkgKey];
  return `${e2("STOCK", "\u{1F4E6}")} <b>Plan Details & Confirmation</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 <b>Plan:</b> ${pkg.name}
\u2022 <b>Data:</b> ${pkg.gb}
\u2022 <b>Allowed Devices:</b> ${pkg.users}
\u2022 <b>Duration:</b> ${pkg.days} Days
\u2022 <b>Price:</b> <b>${pkg.price.toLocaleString()} MMK</b>
\u2022 <b>Your Wallet Balance:</b> <b>${balance.toLocaleString()} MMK</b>
\u2022 <b>Availability:</b> ${inStock ? "\u{1F7E2} Available" : "\u{1F534} Out of Stock"}</blockquote>

${e2("DOWN", "\u{1F447}")} <i>Select your preferred payment method below:</i>`;
}
__name(getPlanDetailMessage, "getPlanDetailMessage");
function getInsufficientBalanceMessage(price, balance) {
  return `${e2("UNSTOCK", "\u{1F614}")} <b>Insufficient Wallet Balance!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 <b>Plan Price:</b> <b>${price.toLocaleString()} MMK</b>
\u2022 <b>Your Balance:</b> <b>${balance.toLocaleString()} MMK</b>
\u2022 <b>Required Top-up:</b> <b>${(price - balance).toLocaleString()} MMK</b></blockquote>

Please top up your wallet balance to complete this purchase.`;
}
__name(getInsufficientBalanceMessage, "getInsufficientBalanceMessage");
function getPaymentInfoMessage(amount) {
  return `${e2("DEPOSIT", "\u{1F4B3}")} <b>Payment Transfer Instructions</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${e2("BALANCE", "\u{1F4B0}")} <b>Required Amount:</b> <code>${amount.toLocaleString()} MMK</code>

Please transfer the exact amount to one of our verified accounts:

<blockquote>${e2("KPAY", "\u{1F4F1}")} <b>KBZPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>

${e2("AYAPAY", "\u{1F4F1}")} <b>AYAPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>

${e2("UABPAY", "\u{1F4F1}")} <b>UABPay:</b> <code>${CONFIG.PAYMENT.PHONE}</code> <b>${CONFIG.PAYMENT.NAME}</b>
</blockquote>

${e2("WARNING", "\u26A0\uFE0F")} <b>Important Transfer Rules:</b>
\u2022 Do <b>NOT</b> write <b>VPN</b>, <b>Outline</b>, or <b>Store names</b> in the transaction note.
\u2022 Send the transfer <b>Screenshot/Slip</b> directly into this chat.
\u2022 Fraudulent/fake slips will result in an immediate permanent ban.

${e2("SLIP", "\u{1F9FE}")} <i>Send your transaction screenshot/slip now:</i>`;
}
__name(getPaymentInfoMessage, "getPaymentInfoMessage");
function getKeyDeliveryMessage(category, price, accessKey) {
  const pkg = CONFIG.PACKAGES[category] || { days: 30, gb: category };
  return `${e2("SUCCESS", "\u{1F389}")} <b>Purchase Successful!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 ${e2("STOCK", "\u{1F4E6}")} <b>Package:</b> ${pkg.name || pkg.gb} (${pkg.days} Days)
\u2022 ${e2("BALANCE", "\u{1F4B0}")} <b>Amount Paid:</b> ${price.toLocaleString()} MMK
\u2022 ${e2("DATE", "\u{1F4C5}")} <b>Delivered At:</b> ${formatMyanmarTime(/* @__PURE__ */ new Date())}</blockquote>

${e2("KEY", "\u{1F511}")} <b>Your Outline VPN Key:</b>
<blockquote><code>${accessKey}</code>
</blockquote>

${e2("UP", "\u{1F446}")} <i>Tap the key to copy. Your purchased keys are always viewable in ${e2("PROFILE", "\u{1F464}")} <b>My Profile</b>.</i>`;
}
__name(getKeyDeliveryMessage, "getKeyDeliveryMessage");
function getChannelSaleMessage(buyerName, category, price, accessKey) {
  const pkg = CONFIG.PACKAGES[category] || { days: 30, gb: category };
  return `${e2("SUCCESS", "\u{1F389}")} <b>New Order Completed!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>${e2("PROFILE", "\u{1F464}")} <b>Customer:</b> ${maskName(buyerName)}
${e2("STOCK", "\u{1F4E6}")} <b>Package:</b> ${pkg.name || pkg.gb} (${pkg.days} Days)
${e2("BALANCE", "\u{1F4B0}")} <b>Amount Paid:</b> ${price.toLocaleString()} MMK
${e2("DATE", "\u{1F4C5}")} <b>Delivered At:</b> ${formatMyanmarTime(/* @__PURE__ */ new Date())}
</blockquote>

${e2("FLASH", "\u26A1\uFE0F")} <i>Instant automated 24/7 delivery by Our Bot.</i>`;
}
__name(getChannelSaleMessage, "getChannelSaleMessage");
function getOrderDetailMessage(order, pkgInfo, buyDate, expiryDate, statusText) {
  return `${e2("STOCK", "\u{1F4E6}")} <b>Order Details (#${order.id})</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 ${e2("STAR", "\u2728")} <b>Plan:</b> ${pkgInfo.name || pkgInfo.gb || order.category.toUpperCase()}
\u2022 ${e2("BALANCE", "\u{1F48E}")} <b>Price:</b> ${order.price.toLocaleString()} MMK
\u2022 ${e2("DATE", "\u{1F4C5}")} <b>Purchased:</b> ${formatMyanmarTime(buyDate)}
\u2022 ${e2("CLOCK", "\u23F3")} <b>Expires:</b> ${formatMyanmarTime(expiryDate)}
\u2022 ${e2("STATUS", "\u{1F4CA}")} <b>Status:</b> ${statusText}</blockquote>

${e2("KEY", "\u{1F511}")} <b>Outline Access Key:</b>
<blockquote><code>${order.access_key}</code></blockquote>

${e2("DOWN", "\u{1F447}")} <i>Tap the copy button below or tap the code to copy ${e2("KEY", "\u{1F511}")} Key.</i>`;
}
__name(getOrderDetailMessage, "getOrderDetailMessage");
function getTestKeyClaimedMessage(claimedDate, nextAvailDate, daysLeft, hoursLeft) {
  return `\u26A0\uFE0F <b>Test Key Already Claimed!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 ${e2("DATE", "\u{1F4C5}")} <b>Claimed On:</b> ${formatMyanmarTime(claimedDate)}
\u2022 ${e2("CLOCK", "\u23F3")} <b>Next Available:</b> ${formatMyanmarTime(nextAvailDate)}</blockquote>

<i>You can claim another test key in <b>${daysLeft} days and ${hoursLeft} hours</b>.</i>`;
}
__name(getTestKeyClaimedMessage, "getTestKeyClaimedMessage");
function getActiveTestKeyMessage(keyStr) {
  return `${e2("KEY", "\u{1F511}")} <b>My Active Free Test Key</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote><code>${keyStr}</code></blockquote>

${e2("DOWN", "\u{1F447}")} <i>Tap the copy button below or tap the code to copy ${e2("KEY", "\u{1F511}")} Test Key.</i>`;
}
__name(getActiveTestKeyMessage, "getActiveTestKeyMessage");
function getTestKeyIntroMessage() {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Free Outline Test Key</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Claim an exclusive free test key to experience our high-speed network.

<blockquote>${e2("PIN", "\u{1F4CC}")} <b>Freebie Terms:</b>
\u2022 Each user can claim <b>1 free test key every 30 days</b>.
\u2022 For individual use only; do not re-distribute.
\u2022 The claimed key is saved in your Profile.</blockquote>

Tap the button below to claim your key now. ${e2("DOWN", "\u{1F447}")}`;
}
__name(getTestKeyIntroMessage, "getTestKeyIntroMessage");
function getExpiryReminderMessage(buyerName, category, accessKey, daysLeft = 2) {
  const pkg = CONFIG.PACKAGES[category] || { name: category.toUpperCase() };
  return `${e2("ALARM", "\u{1F6A8}")} <b>Outline Key Expiry Reminder!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Hello <b>${buyerName}</b>,
Your Outline VPN key for <b>${pkg.name}</b> will expire in <b>${daysLeft} days</b>.

<blockquote>\u2022 <b>Plan:</b> ${pkg.name}
\u2022 <b>Remaining:</b> ${daysLeft} Days
\u2022 <b>Key:</b> <code>${accessKey}</code></blockquote>

<i>To maintain continuous VPN access, please purchase a new key before your current one expires.</i>`;
}
__name(getExpiryReminderMessage, "getExpiryReminderMessage");
function getTestKeyExpiredMessage(buyerName) {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Free Trial Period Ended!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Hello <b>${buyerName}</b> ${e2("STAR", "\u2728")},
Your Outline VPN <b>Free Trial Key</b> has expired.

<blockquote>\u2022 <b>Status:</b> Expired & Cleared
\u2022 <b>Action:</b> You can now claim a fresh test key or upgrade to an unlimited private plan.</blockquote>

<i>Tap the button below to claim a new trial key:</i>`;
}
__name(getTestKeyExpiredMessage, "getTestKeyExpiredMessage");
function getReferralMessage(botUsername, tgId, invitedCount, earnings, percent) {
  const refLink = `https://t.me/${botUsername}?start=ref_${tgId}`;
  return `${e2("STAR", "\u2728")} <b>Referral Program</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>Share your referral link and earn <b>${percent}%</b> of every deposit your friends make \u2014 <i>forever</i>.</blockquote>

${e2("REFERRAL", "\u{1F517}")} <b>My Referral Link:</b>
<code>${refLink}</code>

<blockquote>${e2("USERS", "\u{1F465}")} <b>Invited:</b> ${invitedCount} Users
${e2("BALANCE", "\u{1F4B0}")} <b>Earned:</b> ${Number(earnings || 0).toLocaleString()} MMK</blockquote>`;
}
__name(getReferralMessage, "getReferralMessage");
function getMustJoinMessage() {
  return `${e2("CROWN", "\u{1F451}")} <b>Join Our Official Channel First!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Please join our official channel to use this bot.

After joining, tap <b>${e2("DONE", "\u2705")} Check / Continue</b> below.`;
}
__name(getMustJoinMessage, "getMustJoinMessage");
function getProfileMessage(data) {
  const { firstName, telegramId, regDate, balance, totalOrders, totalSpent, totalDeposited, invitedCount, earnings, latestOrder, latestOrderDate } = data;
  let msg = `${e2("PROFILE", "\u{1F464}")} <b>My Profile</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 ${e2("PROFILE", "\u{1F464}")} Name: <b>${firstName}</b>
\u2022 ${e2("USER_ID", "\u{1F194}")} Telegram ID: <code>${telegramId}</code>
\u2022 ${e2("DATE", "\u{1F4C5}")} Member Since: <b>${regDate}</b></blockquote>

<blockquote>\u2022 ${e2("BALANCE", "\u{1F4B0}")} Available Balance: <b>${balance.toLocaleString()} MMK</b></blockquote>

${e2("STATUS", "\u{1F4C8}")} <b>Account Stats</b>
<blockquote>\u2022 ${e2("STOCK", "\u{1F4E6}")} Orders Count: <b>${totalOrders}</b>
\u2022 ${e2("SHOP", "\u{1F4B8}")} Total Spent: <b>${totalSpent.toLocaleString()} MMK</b>
\u2022 ${e2("DEPOSIT", "\u{1F4B3}")} Total Deposited: <b>${totalDeposited.toLocaleString()} MMK</b></blockquote>

${e2("REFERRAL", "\u{1F517}")} <b>Referrals</b>
<blockquote>\u2022 ${e2("USERS", "\u{1F465}")} Invited: <b>${invitedCount} Users</b>
\u2022 ${e2("BALANCE", "\u{1F4B0}")} Total Earned: <b>${earnings.toLocaleString()} MMK</b></blockquote>

${e2("STOCK", "\u{1F465}")} <b>Latest Order:</b>
`;
  if (latestOrder) {
    const pkg = CONFIG.PACKAGES[latestOrder.category] || { gb: latestOrder.category.toUpperCase() };
    msg += `<blockquote>\u2022 Plan: ${pkg.name || pkg.gb}
\u2022 Price: ${latestOrder.price.toLocaleString()} MMK
\u2022 Date: ${latestOrderDate}</blockquote>`;
  } else {
    msg += `<blockquote><i>No orders yet</i></blockquote>`;
  }
  return msg;
}
__name(getProfileMessage, "getProfileMessage");
function getOrdersSummaryMessage(totalOrders, totalSpent) {
  let noteText = "";
  if (totalOrders > 0) {
    noteText = `${e2("DOWN", "\u{1F447}")} <i>Select an order below to view your Access Key and details:</i>`;
  } else {
    noteText = `<i>No orders yet</i>`;
  }
  return `${e2("SHOP", "\u{1F6CD}")} <b>My Orders</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 ${e2("STOCK", "\u{1F4E6}")} Total Orders: <b>${totalOrders} orders</b>
\u2022 ${e2("BALANCE", "\u{1F4B0}")} Total Spent: <b>${totalSpent.toLocaleString()} MMK</b>
</blockquote>

${noteText}`;
}
__name(getOrdersSummaryMessage, "getOrdersSummaryMessage");
function formatStoreAnalyticsReport(data) {
  const {
    todayRev,
    todayOrders,
    yestRev,
    yestOrders,
    monthRev,
    monthOrders,
    totalRev,
    totalOrders,
    pkgBreakdownText,
    totalRef,
    totalUsers,
    activeUsers,
    bannedUsers,
    stockMap,
    pendingAudit,
    nowStr
  } = data;
  const fmt = /* @__PURE__ */ __name((n) => Number(n || 0).toLocaleString(), "fmt");
  let stockLines = "";
  for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
    const qty = stockMap[k] || 0;
    const warn = qty <= 2 ? " \u26A0\uFE0F" : "";
    stockLines += `\u2022 <b>${pkg.name}:</b> ${fmt(qty)} Available${warn}
`;
  }
  stockLines += `\u2022 <b>Free Test Keys:</b> ${fmt(stockMap["test"] || 0)} Available`;
  return `${e2("STATUS", "\u{1F4CA}")} <b>Store Analytics & Executive Report</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${e2("BALANCE", "\u{1F48E}")} <b>Revenue & Cash Flow</b>
<blockquote>\u2022 <b>Today:</b> ${fmt(todayRev)} MMK (${fmt(todayOrders)} Orders)
\u2022 <b>Yesterday:</b> ${fmt(yestRev)} MMK (${fmt(yestOrders)} Orders)
\u2022 <b>This Month:</b> ${fmt(monthRev)} MMK (${fmt(monthOrders)} Orders)
\u2022 <b>All-Time Revenue:</b> ${fmt(totalRev)} MMK
\u2022 <b>Total Completed Sales:</b> ${fmt(totalOrders)}</blockquote>

${e2("STOCK", "\u{1F4E6}")} <b>Package Performance (Sales)</b>
<blockquote>${pkgBreakdownText}</blockquote>

${e2("STAR", "\u2728")} <b>Affiliate / Referral Stats</b>
<blockquote>\u2022 <b>Total Commission:</b> ${fmt(totalRef)} MMK</blockquote>

${e2("STOCK", "\u{1F4E6}")} <b>Key Inventory (Stock)</b>
<blockquote>${stockLines}</blockquote>

${e2("USERS", "\u{1F465}")} <b>Users & Security</b>
<blockquote>\u2022 <b>Total Registered:</b> ${fmt(totalUsers)}
\u2022 <b>Active Key Users:</b> ${fmt(activeUsers)}
\u2022 <b>Suspended/Banned:</b> ${fmt(bannedUsers)}</blockquote>

${e2("CLOCK", "\u23F3")} <b>Audit Queue:</b> ${fmt(pendingAudit)} Pending Slips
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>
${e2("BTN_REFRESH", "\u{1F504}")} <i>Last updated: ${nowStr}</i>`;
}
__name(formatStoreAnalyticsReport, "formatStoreAnalyticsReport");
function escapeHtml(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
__name(escapeHtml, "escapeHtml");
function formatGiveawayPrize(prizeType, prizeValue) {
  if (prizeType === "balance") return `${Number(prizeValue || 0).toLocaleString()} MMK Wallet Balance`;
  if (prizeType === "package") {
    const pkg = CONFIG.PACKAGES[prizeValue];
    return pkg ? pkg.name : String(prizeValue || "");
  }
  if (prizeType === "test") return "Free Test Key";
  return String(prizeValue || "");
}
__name(formatGiveawayPrize, "formatGiveawayPrize");
function getGiveawayMessage(giveaway, participantCount = 0) {
  const maxText = giveaway.max_participants && Number(giveaway.max_participants) > 0 ? `${participantCount} / ${giveaway.max_participants}` : `${participantCount} (Unlimited)`;
  const customBlock = giveaway.custom_message ? `${escapeHtml(giveaway.custom_message)}

` : "";
  return `${e2("FREEBIES", "\u{1F381}")} <b> ${giveaway.title}</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

` + customBlock + `<blockquote>${e2("STAR", "\u2728")} <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}
${e2("PROFILE", "\u{1F464}")} <b>Winners:</b> ${giveaway.winners_count}
${e2("USERS", "\u{1F465}")} <b>Participants:</b> ${maxText}
${e2("CLOCK", "\u23F3")} <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}</blockquote>

${e2("DOWN", "\u{1F447}")} <i>Tap Join Giveaway below to enter. One entry per user.</i>`;
}
__name(getGiveawayMessage, "getGiveawayMessage");
function getGiveawaySummaryMessage(draft) {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Giveaway Summary \u2014 Confirm to Start</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<blockquote>\u2022 <b>Title:</b> ${draft.title}
\u2022 <b>Custom Message:</b> ${draft.custom_message ? escapeHtml(draft.custom_message) : "None"}
\u2022 <b>Prize:</b> ${formatGiveawayPrize(draft.prize_type, draft.prize_value)}
\u2022 <b>Winners:</b> ${draft.winners_count}
\u2022 <b>Max Participants:</b> ${draft.max_participants && Number(draft.max_participants) > 0 ? draft.max_participants : "Unlimited"}
\u2022 <b>Duration:</b> ${draft.duration_hours} hours</blockquote>

<i>Confirm to post the giveaway. Cancel to discard it.</i>`;
}
__name(getGiveawaySummaryMessage, "getGiveawaySummaryMessage");
function getGiveawayWinnersMessage(giveaway, winners, participantCount = 0) {
  const list = winners.length > 0 ? winners.map((w, i) => `${i + 1}. ${w.first_name || "Customer"} (<code>${w.user_id}</code>)`).join("\n") : "<i>No participants, so no winners were drawn.</i>";
  const customBlockW = giveaway.custom_message ? `${escapeHtml(giveaway.custom_message)}

` : "";
  return `${e2("FREEBIES", "\u{1F381}")} <b>Giveaway Ended: ${giveaway.title}</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

` + customBlockW + `<blockquote>${e2("STAR", "\u2728")} <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}
${e2("USERS", "\u{1F465}")} <b>Participants:</b> ${participantCount}</blockquote>

<b>Winners:</b>
${list}`;
}
__name(getGiveawayWinnersMessage, "getGiveawayWinnersMessage");
function getGiveawayAdminMessage(giveaway, participantCount = 0) {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Giveaway Created (#${giveaway.id})</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

\u2022 <b>Title:</b> ${giveaway.title}
\u2022 <b>Custom Message:</b> ${giveaway.custom_message ? escapeHtml(giveaway.custom_message) : "None"}
\u2022 <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}
\u2022 <b>Winners:</b> ${giveaway.winners_count}
\u2022 <b>Participants:</b> ${participantCount}
\u2022 <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}`;
}
__name(getGiveawayAdminMessage, "getGiveawayAdminMessage");
function getAnnouncePreviewMessage(text) {
  return `${e2("ANNOUNCE", "\u{1F4E2}")} <b>Announcement Preview</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${text}

<i>Confirm to send this to all non-banned users, or cancel.</i>`;
}
__name(getAnnouncePreviewMessage, "getAnnouncePreviewMessage");
function getBanListMessage(bannedUsers) {
  if (!bannedUsers || bannedUsers.length === 0) {
    return `${e2("BAN", "\u{1F6AB}")} <b>Banned Users</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

<i>No banned users.</i>`;
  }
  const list = bannedUsers.map((u) => `\u2022 ${u.first_name || ""} (<code>${u.telegram_id}</code>) @${u.username || "None"}`).join("\n");
  return `${e2("BAN", "\u{1F6AB}")} <b>Banned Users (${bannedUsers.length})</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${list}`;
}
__name(getBanListMessage, "getBanListMessage");
function getGiveawayUnavailableMessage() {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Giveaway Unavailable</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Coming soon! Please check back later.`;
}
__name(getGiveawayUnavailableMessage, "getGiveawayUnavailableMessage");
function getGiveawayActiveChoiceMessage(giveaway) {
  return `${e2("FREEBIES", "\u{1F381}")} <b>Active Giveaway Already Running</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

\u2022 <b>Giveaway:</b> ${giveaway.title}
\u2022 <b>Prize:</b> ${formatGiveawayPrize(giveaway.prize_type, giveaway.prize_value)}
\u2022 <b>Ends:</b> ${formatMyanmarTime(new Date(Number(giveaway.ends_at)))}

What do you want to do with the new giveaway?
<i>Replace Now posts the new giveaway now and cancels this one. Schedule for Later saves the new giveaway and posts it at the date you set, replacing the active one at that time. Cancel keeps this giveaway running.</i>`;
}
__name(getGiveawayActiveChoiceMessage, "getGiveawayActiveChoiceMessage");
function getGiveawaySchedulePromptMessage(draft) {
  return `${e2("CLOCK", "\u23F3")} <b>Set Post Date & Time</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

\u2022 <b>Giveaway:</b> ${draft.title}

Send the date and time to post this giveaway, in Asia/Yangon time, or /cancel.
Examples:
<code>5 Nov 2026, 10:00 am</code>
<code>2026-11-05 10:00</code>
<code>05/11/2026 10:00</code>`;
}
__name(getGiveawaySchedulePromptMessage, "getGiveawaySchedulePromptMessage");
function getGiveawayScheduledMessage(draft, scheduledAt) {
  return `${e2("DONE", "\u2705")} <b>Giveaway Scheduled</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

\u2022 <b>Giveaway:</b> ${draft.title}
\u2022 <b>Prize:</b> ${formatGiveawayPrize(draft.prize_type, draft.prize_value)}
\u2022 <b>Will be posted:</b> ${formatMyanmarTime(new Date(Number(scheduledAt)))}

<i>It will replace the active giveaway at that time. It will not appear in the bot before then.</i>`;
}
__name(getGiveawayScheduledMessage, "getGiveawayScheduledMessage");

// src/index.js
var index_default = {
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
  // ⏰ Cloudflare Cron Trigger (Test Key Noti + Regular Expiry Alarm)
  async scheduled(event, env, ctx) {
    try {
      const now = /* @__PURE__ */ new Date();
      await checkAndPostScheduledGiveaways(env);
      try {
        await ensureGiveawayTables(env);
        const activeGifts = await env.DB.prepare("SELECT * FROM giveaways WHERE status = 'active' AND ends_at <= ?").bind(now.getTime()).all();
        for (const g of activeGifts.results || []) await endGiveaway(env, g);
      } catch (e3) {
      }
      const expiredTests = await env.DB.prepare(`
        SELECT orders.*, users.first_name 
        FROM orders 
        JOIN users ON orders.user_id = users.telegram_id
        WHERE orders.category = 'test' AND orders.reminded_exp = 0
      `).all();
      for (const order of expiredTests.results || []) {
        const totalDays = 1;
        const createdAt = parseDbDate(order.created_at);
        const expireAt = new Date(createdAt.getTime() + totalDays * 24 * 60 * 60 * 1e3);
        if (now.getTime() >= expireAt.getTime()) {
          await env.DB.prepare("UPDATE orders SET reminded_exp = 1 WHERE id = ?").bind(order.id).run();
          const buyerName = order.first_name || "Customer";
          const expiredMsg = getTestKeyExpiredMessage(buyerName);
          await tg(env, "sendMessage", {
            chat_id: order.user_id,
            text: expiredMsg,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [makeBtn("Claim Free Test Key", "callback_data", "menu_test", "success", "BTN_FREEBIES")],
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
        const expireAt = new Date(createdAt.getTime() + totalDays * 24 * 60 * 60 * 1e3);
        const diffMs = expireAt.getTime() - now.getTime();
        const daysLeft = Math.ceil(diffMs / (1e3 * 60 * 60 * 24));
        if (daysLeft <= 2 && daysLeft > 0) {
          const buyerName = order.first_name || "Customer";
          const reminderText = getExpiryReminderMessage(
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
    body: JSON.stringify(payload)
  });
}
__name(tg, "tg");
async function tgJson(env, method, payload) {
  try {
    const res = await tg(env, method, payload);
    return await res.json();
  } catch (e3) {
    return null;
  }
}
__name(tgJson, "tgJson");
async function ensureGiveawayTables(env) {
  try {
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS giveaways (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, prize_type TEXT, prize_value TEXT, winners_count INTEGER, max_participants INTEGER, duration_hours INTEGER, ends_at INTEGER, status TEXT DEFAULT 'active', message_chat_id TEXT, message_id INTEGER, created_by INTEGER, created_at TEXT, custom_message TEXT)").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS giveaway_entries (giveaway_id INTEGER, user_id INTEGER, PRIMARY KEY (giveaway_id, user_id))").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS giveaway_drafts (admin_id INTEGER, group_id TEXT, step TEXT, title TEXT, prize_type TEXT, prize_value TEXT, winners_count INTEGER, max_participants INTEGER, duration_hours INTEGER, custom_message TEXT, prompt_message_id INTEGER, PRIMARY KEY (admin_id, group_id))").run();
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS pending_announcements (id INTEGER PRIMARY KEY AUTOINCREMENT, admin_id INTEGER, group_id TEXT, text TEXT, created_at TEXT)").run();
    try {
      await env.DB.prepare("ALTER TABLE giveaways ADD COLUMN custom_message TEXT").run();
    } catch (e3) {
    }
    try {
      await env.DB.prepare("ALTER TABLE giveaway_drafts ADD COLUMN custom_message TEXT").run();
    } catch (e3) {
    }
    try {
      await env.DB.prepare("ALTER TABLE giveaway_drafts ADD COLUMN prompt_message_id INTEGER").run();
    } catch (e3) {
    }
    try {
      await env.DB.prepare("ALTER TABLE giveaway_drafts ADD COLUMN schedule_mode INTEGER DEFAULT 0").run();
    } catch (e3) {
    }
    try {
      await env.DB.prepare("ALTER TABLE giveaway_drafts ADD COLUMN scheduled_at INTEGER").run();
    } catch (e3) {
    }
    await env.DB.prepare("CREATE TABLE IF NOT EXISTS scheduled_giveaways (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, custom_message TEXT, prize_type TEXT, prize_value TEXT, winners_count INTEGER, max_participants INTEGER, duration_hours INTEGER, scheduled_at INTEGER, group_id TEXT, created_by INTEGER, created_at TEXT, status TEXT DEFAULT 'scheduled')").run();
  } catch (e3) {
  }
}
__name(ensureGiveawayTables, "ensureGiveawayTables");
async function getLatestActiveGiveaway(env) {
  try {
    return await env.DB.prepare("SELECT * FROM giveaways WHERE status = 'active' ORDER BY id DESC LIMIT 1").first();
  } catch (e3) {
    return null;
  }
}
__name(getLatestActiveGiveaway, "getLatestActiveGiveaway");
function parseYangonDateTime(text) {
  const s = String(text || "").trim();
  const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  let m = s.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\s*,?\s+(\d{1,2}):(\d{2})\s*([aApP][mM])?$/);
  let year, month, day, hour, minute;
  if (m) {
    day = parseInt(m[1], 10);
    month = months[m[2].toLowerCase().slice(0, 3)];
    year = parseInt(m[3], 10);
    hour = parseInt(m[4], 10);
    minute = parseInt(m[5], 10);
    if (month === void 0) return null;
    if (m[6]) {
      const ap = m[6].toLowerCase();
      if (ap === "pm" && hour < 12) hour += 12;
      if (ap === "am" && hour === 12) hour = 0;
    }
  } else if (m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})$/)) {
    year = parseInt(m[1], 10);
    month = parseInt(m[2], 10) - 1;
    day = parseInt(m[3], 10);
    hour = parseInt(m[4], 10);
    minute = parseInt(m[5], 10);
  } else if (m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})$/)) {
    day = parseInt(m[1], 10);
    month = parseInt(m[2], 10) - 1;
    year = parseInt(m[3], 10);
    hour = parseInt(m[4], 10);
    minute = parseInt(m[5], 10);
  } else return null;
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || month < 0 || month > 11 || day < 1 || day > 31) return null;
  const utcMs = Date.UTC(year, month, day, hour, minute) - (6 * 60 + 30) * 60 * 1e3;
  const check = new Date(utcMs + (6 * 60 + 30) * 60 * 1e3);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month || check.getUTCDate() !== day) return null;
  return utcMs;
}
__name(parseYangonDateTime, "parseYangonDateTime");
async function replaceOldActiveGiveaways(env, paymentGroupId, excludeId) {
  const oldGifts = await env.DB.prepare("SELECT * FROM giveaways WHERE status = 'active' AND id != ?").bind(excludeId).all();
  for (const oldGift of oldGifts.results || []) {
    await env.DB.prepare("UPDATE giveaways SET status = 'cancelled' WHERE id = ?").bind(oldGift.id).run();
    if (oldGift.message_chat_id && oldGift.message_id) {
      try {
        await tg(env, "deleteMessage", { chat_id: oldGift.message_chat_id, message_id: oldGift.message_id });
      } catch (e3) {
      }
    }
  }
  if (oldGifts.results?.length && paymentGroupId) {
    await tg(env, "sendMessage", { chat_id: paymentGroupId, text: `${e("WARNING", "\u26A0\uFE0F")} Previous active giveaway(s) replaced: ${oldGifts.results.map((g) => `#${g.id}`).join(", ")}`, parse_mode: "HTML" });
  }
  return oldGifts.results || [];
}
__name(replaceOldActiveGiveaways, "replaceOldActiveGiveaways");
async function createAndPostGiveaway(env, data, paymentGroupId) {
  const endsAt = Date.now() + Number(data.duration_hours || 24) * 60 * 60 * 1e3;
  const res = await env.DB.prepare("INSERT INTO giveaways (title, custom_message, prize_type, prize_value, winners_count, max_participants, duration_hours, ends_at, status, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?)").bind(data.title, data.custom_message, data.prize_type, data.prize_value, data.winners_count, data.max_participants, data.duration_hours, endsAt, data.created_by, (/* @__PURE__ */ new Date()).toISOString()).run();
  const giftId = res.meta?.last_row_id;
  if (!giftId) return null;
  const gift = { id: giftId, title: data.title, custom_message: data.custom_message, prize_type: data.prize_type, prize_value: data.prize_value, winners_count: data.winners_count, max_participants: data.max_participants, duration_hours: data.duration_hours, ends_at: endsAt, status: "active" };
  await replaceOldActiveGiveaways(env, paymentGroupId, giftId);
  const mainChannelId = String(CONFIG.GIVEAWAY?.CHANNEL_ID || CONFIG.FORCE_JOIN?.CHANNEL_ID || "").trim();
  let posted = null;
  if (mainChannelId) {
    posted = await tgJson(env, "sendMessage", { chat_id: mainChannelId, text: getGiveawayMessage(gift, 0), parse_mode: "HTML", reply_markup: getGiveawayKeyboard(giftId) });
  }
  if (posted?.ok && posted.result?.message_id) {
    await env.DB.prepare("UPDATE giveaways SET message_chat_id = ?, message_id = ? WHERE id = ?").bind(String(mainChannelId), posted.result.message_id, giftId).run();
  } else if (paymentGroupId) {
    await tg(env, "sendMessage", { chat_id: paymentGroupId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>Giveaway #${giftId} created, but the main-channel post failed.</b>

Check that the bot is an admin in the main channel with Post Messages permission. The giveaway is still active in the bot, but no channel post was made.`, parse_mode: "HTML" });
  }
  if (paymentGroupId) {
    await tg(env, "sendMessage", { chat_id: paymentGroupId, text: getGiveawayAdminMessage(gift, 0), parse_mode: "HTML", reply_markup: getGiveawayAdminKeyboard(giftId) });
  }
  return gift;
}
__name(createAndPostGiveaway, "createAndPostGiveaway");
async function checkAndPostScheduledGiveaways(env) {
  try {
    await ensureGiveawayTables(env);
    const now = Date.now();
    const due = await env.DB.prepare("SELECT * FROM scheduled_giveaways WHERE status = 'scheduled' AND scheduled_at <= ? ORDER BY scheduled_at ASC").bind(now).all();
    for (const s of due.results || []) {
      await env.DB.prepare("UPDATE scheduled_giveaways SET status = 'posting' WHERE id = ?").bind(s.id).run();
      const gift = await createAndPostGiveaway(env, { title: s.title, custom_message: s.custom_message, prize_type: s.prize_type, prize_value: s.prize_value, winners_count: s.winners_count, max_participants: s.max_participants, duration_hours: s.duration_hours, created_by: s.created_by }, s.group_id);
      await env.DB.prepare("UPDATE scheduled_giveaways SET status = ? WHERE id = ?").bind(gift ? "posted" : "failed", s.id).run();
    }
  } catch (e3) {
  }
}
__name(checkAndPostScheduledGiveaways, "checkAndPostScheduledGiveaways");
async function updateWizardPrompt(env, chatId, draft, text, replyMarkup) {
  let newId = draft.prompt_message_id || null;
  if (newId) {
    const edited = await tgJson(env, "editMessageText", { chat_id: chatId, message_id: newId, text, parse_mode: "HTML", reply_markup: replyMarkup });
    if (edited?.ok) return newId;
  }
  const sent = await tgJson(env, "sendMessage", { chat_id: chatId, text, parse_mode: "HTML", reply_markup: replyMarkup });
  if (sent?.ok && sent.result?.message_id) newId = sent.result.message_id;
  return newId;
}
__name(updateWizardPrompt, "updateWizardPrompt");
async function getGiveawayEntryCount(env, giveawayId) {
  try {
    const row = await env.DB.prepare("SELECT COUNT(*) as count FROM giveaway_entries WHERE giveaway_id = ?").bind(giveawayId).first();
    return Number(row?.count || 0);
  } catch (e3) {
    return 0;
  }
}
__name(getGiveawayEntryCount, "getGiveawayEntryCount");
async function updateGiveawayMessage(env, giveaway) {
  if (!giveaway.message_chat_id || !giveaway.message_id) return;
  try {
    const count = await getGiveawayEntryCount(env, giveaway.id);
    await tg(env, "editMessageText", {
      chat_id: giveaway.message_chat_id,
      message_id: giveaway.message_id,
      text: getGiveawayMessage(giveaway, count),
      parse_mode: "HTML",
      reply_markup: getGiveawayKeyboard(giveaway.id)
    });
  } catch (e3) {
  }
}
__name(updateGiveawayMessage, "updateGiveawayMessage");
async function deliverGiveawayPrize(env, giveaway, winnerId) {
  try {
    if (giveaway.prize_type === "balance") {
      const amount = Number(giveaway.prize_value || 0);
      if (amount > 0) {
        await env.DB.prepare("UPDATE users SET balance = balance + ? WHERE telegram_id = ?").bind(amount, winnerId).run();
        await tg(env, "sendMessage", {
          chat_id: winnerId,
          text: `${e("SUCCESS", "\u{1F389}")} <b>You Won the Giveaway!</b>

Prize: <b>${amount.toLocaleString()} MMK</b> credited to your wallet.
Giveaway: <b>${giveaway.title}</b>`,
          parse_mode: "HTML",
          reply_markup: getSupportKeyboard()
        });
      }
    } else if (giveaway.prize_type === "package") {
      const keyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = ? LIMIT 1").bind(giveaway.prize_value).first();
      if (!keyItem) {
        await tg(env, "sendMessage", { chat_id: winnerId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>You Won the Giveaway!</b>

Prize: <b>${giveaway.title}</b>
We are out of stock for this package right now. Our admin team will deliver your key shortly.`, parse_mode: "HTML", reply_markup: getSupportKeyboard() });
        return;
      }
      await env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(keyItem.id).run();
      const pkg = CONFIG.PACKAGES[giveaway.prize_value];
      await env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, ?, ?, ?)").bind(winnerId, giveaway.prize_value, keyItem.access_key, pkg?.price || 0).run();
      await tg(env, "sendMessage", { chat_id: winnerId, text: getKeyDeliveryMessage(giveaway.prize_value, pkg?.price || 0, keyItem.access_key), parse_mode: "HTML" });
    } else if (giveaway.prize_type === "test") {
      const keyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = 'test' LIMIT 1").first();
      if (!keyItem) {
        await tg(env, "sendMessage", { chat_id: winnerId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>You Won the Giveaway!</b>

Prize: <b>${giveaway.title}</b>
No free test keys are in stock right now. Our admin team will deliver your key shortly.`, parse_mode: "HTML", reply_markup: getSupportKeyboard() });
        return;
      }
      await env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(keyItem.id).run();
      await env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, 'test', ?, 0)").bind(winnerId, keyItem.access_key).run();
      await tg(env, "sendMessage", { chat_id: winnerId, text: getActiveTestKeyMessage(keyItem.access_key), parse_mode: "HTML", reply_markup: getSupportKeyboard() });
    } else {
      await tg(env, "sendMessage", {
        chat_id: winnerId,
        text: `${e("SUCCESS", "\u{1F389}")} <b>You Won the Giveaway!</b>

Prize: <b>${giveaway.title}</b>
${giveaway.prize_value ? `Prize details: ${giveaway.prize_value}
` : ""}Our admin team will contact you about delivery.`,
        parse_mode: "HTML",
        reply_markup: getSupportKeyboard()
      });
    }
  } catch (e3) {
  }
}
__name(deliverGiveawayPrize, "deliverGiveawayPrize");
async function endGiveaway(env, giveaway) {
  try {
    const entries = await env.DB.prepare("SELECT user_id FROM giveaway_entries WHERE giveaway_id = ?").bind(giveaway.id).all();
    const ids = (entries.results || []).map((r) => r.user_id);
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
    const winnerIds = shuffled.slice(0, Math.max(1, Number(giveaway.winners_count || 1)));
    const winners = [];
    for (const wid of winnerIds) {
      const row = await env.DB.prepare("SELECT first_name FROM users WHERE telegram_id = ?").bind(wid).first();
      winners.push({ user_id: wid, first_name: row?.first_name || "Customer" });
    }
    await env.DB.prepare("UPDATE giveaways SET status = 'ended' WHERE id = ?").bind(giveaway.id).run();
    const count = ids.length;
    if (giveaway.message_chat_id && giveaway.message_id) {
      try {
        await tg(env, "deleteMessage", {
          chat_id: giveaway.message_chat_id,
          message_id: giveaway.message_id
        });
      } catch (e3) {
      }
    }
    for (const w of winners) await deliverGiveawayPrize(env, giveaway, w.user_id);
    const paymentGroupId = String(env.PAYMENT_GROUP_ID || "").trim();
    if (paymentGroupId) {
      await tg(env, "sendMessage", {
        chat_id: paymentGroupId,
        text: getGiveawayWinnersMessage(giveaway, winners, count),
        parse_mode: "HTML"
      });
    }
    return winners;
  } catch (e3) {
    return [];
  }
}
__name(endGiveaway, "endGiveaway");
async function resolveBanTarget(env, msg, arg) {
  try {
    if (msg.reply_to_message?.from?.id) {
      const uid = String(msg.reply_to_message.from.id);
      const row = await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(uid).first();
      return { userRow: row, userId: uid };
    }
  } catch (e3) {
  }
  if (!arg) return { userRow: null, userId: null };
  const clean = String(arg).trim().replace(/^@/, "");
  if (!clean) return { userRow: null, userId: null };
  try {
    if (/^\d+$/.test(clean)) {
      const row2 = await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(clean).first();
      return { userRow: row2, userId: row2 ? String(row2.telegram_id) : null };
    }
    const row = await env.DB.prepare("SELECT * FROM users WHERE LOWER(username) = LOWER(?)").bind(clean).first();
    return { userRow: row, userId: row ? String(row.telegram_id) : null };
  } catch (e3) {
    return { userRow: null, userId: null };
  }
}
__name(resolveBanTarget, "resolveBanTarget");
function isMatchChatId(chatId, targetGroupId) {
  if (!targetGroupId || !chatId) return false;
  const a = String(chatId).replace(/^-100/, "").replace(/^-/, "").trim();
  const b = String(targetGroupId).replace(/^-100/, "").replace(/^-/, "").trim();
  return a === b;
}
__name(isMatchChatId, "isMatchChatId");
function parseDbDate(dateStr) {
  if (!dateStr) return /* @__PURE__ */ new Date();
  const s = String(dateStr).trim();
  return new Date(s.includes("T") ? s : s.replace(" ", "T") + (s.endsWith("Z") ? "" : "Z"));
}
__name(parseDbDate, "parseDbDate");
async function checkIsAdmin(env, chatId, user) {
  if (user?.username && Array.isArray(CONFIG.ADMIN_USERNAME)) {
    const cur = user.username.toLowerCase().replace("@", "");
    if (CONFIG.ADMIN_USERNAME.some((a) => a.toLowerCase().replace("@", "") === cur)) {
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
  } catch (e3) {
    return false;
  }
}
__name(checkIsAdmin, "checkIsAdmin");
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
__name(checkMustJoin, "checkMustJoin");
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
  } catch (e3) {
  }
  return stockMap;
}
__name(getStockCountMap, "getStockCountMap");
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
__name(getOrCreateUser, "getOrCreateUser");
async function getStoreAnalyticsReport(env) {
  const fmtNum = /* @__PURE__ */ __name((n) => Number(n || 0).toLocaleString(), "fmtNum");
  const nowStr = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Yangon"
  });
  const totalRevRes = await env.DB.prepare("SELECT SUM(price) as total_rev, COUNT(*) as total_orders FROM orders WHERE category != 'test'").first();
  const todayRes = await env.DB.prepare("SELECT SUM(price) as today_rev, COUNT(*) as today_orders FROM orders WHERE category != 'test' AND date(datetime(created_at, '+6 hours', '+30 minutes')) = date(datetime('now', '+6 hours', '+30 minutes'))").first();
  const yestRes = await env.DB.prepare("SELECT COALESCE(SUM(price), 0) AS rev, COUNT(*) AS orders FROM orders WHERE category != 'test' AND date(datetime(created_at, '+6 hours', '+30 minutes')) = date(datetime('now', '+6 hours', '+30 minutes', '-1 day'))").first();
  const monthRes = await env.DB.prepare("SELECT COALESCE(SUM(price), 0) AS rev, COUNT(*) AS orders FROM orders WHERE category != 'test' AND strftime('%Y-%m', datetime(created_at, '+6 hours', '+30 minutes')) = strftime('%Y-%m', datetime('now', '+6 hours', '+30 minutes'))").first();
  const pkgRows = await env.DB.prepare("SELECT category, COUNT(*) AS count, COALESCE(SUM(price), 0) AS rev FROM orders WHERE category != 'test' GROUP BY category").all();
  let pkgBreakdownText = pkgRows?.results?.length > 0 ? pkgRows.results.map((r) => `\u2022 <b>${r.category}:</b> ${r.count} Sold (${fmtNum(r.rev)} MMK)`).join("\n") : "\u2022 <i>No sales yet</i>";
  const refRes = await env.DB.prepare("SELECT COALESCE(SUM(referral_earnings), 0) AS total_ref FROM users").first();
  const totalUsersRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users").first();
  const bannedUsersRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users WHERE is_banned = 1").first();
  const activeKeysRes = await env.DB.prepare("SELECT COUNT(DISTINCT user_id) as count FROM orders").first();
  const stockMap = await getStockCountMap(env);
  const pendingAuditRes = await env.DB.prepare("SELECT COUNT(*) as count FROM topup_requests WHERE status = 'pending'").first();
  return formatStoreAnalyticsReport({
    todayRev: todayRes?.today_rev || 0,
    todayOrders: todayRes?.today_orders || 0,
    yestRev: yestRes?.rev || 0,
    yestOrders: yestRes?.orders || 0,
    monthRev: monthRes?.rev || 0,
    monthOrders: monthRes?.orders || 0,
    totalRev: totalRevRes?.total_rev || 0,
    totalOrders: totalRevRes?.total_orders || 0,
    pkgBreakdownText,
    totalRef: refRes?.total_ref || 0,
    totalUsers: totalUsersRes?.count || 0,
    activeUsers: activeKeysRes?.count || 0,
    bannedUsers: bannedUsersRes?.count || 0,
    stockMap,
    pendingAudit: pendingAuditRes?.count || 0,
    nowStr
  });
}
__name(getStoreAnalyticsReport, "getStoreAnalyticsReport");
async function handleMessage(msg, env) {
  const chatId = String(msg.chat.id);
  const text = (msg.text || "").trim();
  const paymentGroupId = String(env.PAYMENT_GROUP_ID || "").trim();
  const stockGroupId = String(env.STOCK_GROUP_ID || "").trim();
  if (msg.chat.type !== "private" && msg.text && msg.text.startsWith("/")) {
    try {
      await tg(env, "deleteMessage", { chat_id: msg.chat.id, message_id: msg.message_id });
    } catch (e3) {
    }
  }
  if (!chatId.startsWith("-")) {
    try {
      await tg(env, "deleteMessage", {
        chat_id: msg.chat.id,
        message_id: msg.message_id
      });
    } catch (delErr) {
    }
    const user = await getOrCreateUser(env, msg.from);
    if (user.is_banned === 1) {
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("BAN", "\u{1F6AB}")} <b>Access Denied:</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Your account has been permanently suspended due to violation of store rules.`,
        parse_mode: "HTML"
      });
      return;
    }
    if (text.startsWith("/start")) {
      await env.DB.prepare("UPDATE users SET pending_topup_amount = 0, pending_plan_key = NULL WHERE telegram_id = ?").bind(user.telegram_id).run();
      const isJoined = await checkMustJoin(env, user.telegram_id);
      if (!isJoined) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: getMustJoinMessage(),
          parse_mode: "HTML",
          reply_markup: getMustJoinKeyboard(CONFIG.FORCE_JOIN.CHANNEL_LINK)
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
          text: getCategorySelectMessage(),
          parse_mode: "HTML",
          reply_markup: getCategoryKeyboard()
        });
        return;
      }
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: getWelcomeMessage(msg.from.first_name),
        parse_mode: "HTML",
        reply_markup: getMainKeyboard()
      });
      return;
    }
    if (user.pending_topup_amount === -1 && text) {
      const cleanNum = text.replace(/,/g, "").trim();
      const amount = parseInt(cleanNum, 10);
      if (isNaN(amount) || amount < CONFIG.PAYMENT.MIN_TOPUP) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "\u26A0\uFE0F")} <b>Invalid Amount!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Minimum deposit is <b>${CONFIG.PAYMENT.MIN_TOPUP.toLocaleString()} MMK</b>.
Please send digits only (e.g. <code>2500</code> or <code>5000</code>).`,
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: [[makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]] }
        });
        return;
      }
      await env.DB.prepare("UPDATE users SET pending_topup_amount = ?, pending_plan_key = NULL WHERE telegram_id = ?").bind(amount, user.telegram_id).run();
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: getPaymentInfoMessage(amount),
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[makeBtn("Change Amount", "callback_data", "topup_custom", "primary", "BTN_CUSTOM")]] }
      });
      return;
    }
    if (msg.photo && msg.photo.length > 0) {
      const currentAmt = Number(user.pending_topup_amount || 0);
      const planKey = user.pending_plan_key || null;
      if (currentAmt <= 0) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "\u26A0\uFE0F")} Please select a plan or deposit amount from the menu before uploading payment screenshot.`,
          parse_mode: "HTML",
          reply_markup: getMainKeyboard()
        });
        return;
      }
      const photo = msg.photo[msg.photo.length - 1];
      const res = await env.DB.prepare(
        "INSERT INTO topup_requests (user_id, amount, slip_file_id, status, plan_key) VALUES (?, ?, ?, 'pending', ?)"
      ).bind(user.telegram_id, currentAmt, photo.file_id, planKey).run();
      const requestId = res.meta?.last_row_id || Date.now();
      await env.DB.prepare("UPDATE users SET pending_topup_amount = 0, pending_plan_key = NULL WHERE telegram_id = ?").bind(user.telegram_id).run();
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("DONE", "\u2705")} <b>Payment Slip Received!</b>

Amount: <b>${currentAmt.toLocaleString()} MMK</b>
Our team is verifying your payment. ${e("CLOCK", "\u23F3")}
Your ${planKey ? "VPN key will be delivered" : "wallet balance will be credited"} automatically once approved.

Have A Great Day ${e("STAR", "\u2728")}`,
        parse_mode: "HTML"
      });
      if (paymentGroupId) {
        const planBadge = planKey ? `
\u2022 <b>Direct Purchase Plan:</b> <code>${CONFIG.PACKAGES[planKey]?.name || planKey}</code>` : "";
        const captionText = `${e("DEPOSIT", "\u{1F4B3}")} <b>New Deposit Request (#ID_${requestId})</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

\u2022 <b>User:</b> ${msg.from.first_name || ""} (<code>${user.telegram_id}</code>)
\u2022 <b>Username:</b> @${msg.from.username || "None"}
\u2022 <b>Amount:</b> <b>${currentAmt.toLocaleString()} MMK</b>` + planBadge + `
\u2022 <b>Time:</b> ${formatMyanmarTime(/* @__PURE__ */ new Date())}

${e("DOWN", "\u{1F447}")} <i>Verify bank transaction and select action:</i>`;
        await tg(env, "sendPhoto", {
          chat_id: paymentGroupId,
          photo: photo.file_id,
          caption: captionText,
          parse_mode: "HTML",
          reply_markup: getPaymentAdminKeyboard(requestId, user.telegram_id, currentAmt)
        });
      }
      return;
    }
  }
  if (paymentGroupId && isMatchChatId(chatId, paymentGroupId)) {
    const isAdmin = await checkIsAdmin(env, chatId, msg.from);
    if (!isAdmin) return;
    if (text.split("@")[0].split(/\s+/)[0].toLowerCase() === "/giftway") {
      await ensureGiveawayTables(env);
      await checkAndPostScheduledGiveaways(env);
      const activeGift = await getLatestActiveGiveaway(env);
      if (activeGift) {
        await env.DB.prepare("INSERT OR REPLACE INTO giveaway_drafts (admin_id, group_id, step, title, custom_message, prize_type, prize_value, winners_count, max_participants, duration_hours, prompt_message_id) VALUES (?, ?, 'active_choice', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)").bind(msg.from.id, chatId).run();
        const choicePrompt = await tgJson(env, "sendMessage", { chat_id: chatId, text: getGiveawayActiveChoiceMessage(activeGift), parse_mode: "HTML", reply_markup: getGiveawayActiveChoiceKeyboard() });
        if (choicePrompt?.ok && choicePrompt.result?.message_id) {
          await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(choicePrompt.result.message_id, msg.from.id, chatId).run();
        }
        return;
      }
      await env.DB.prepare("INSERT OR REPLACE INTO giveaway_drafts (admin_id, group_id, step, title, custom_message, prize_type, prize_value, winners_count, max_participants, duration_hours, prompt_message_id) VALUES (?, ?, 'title', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)").bind(msg.from.id, chatId).run();
      const startPrompt = await tgJson(env, "sendMessage", { chat_id: chatId, text: `${e("FREEBIES", "\u{1F381}")} <b>Giveaway Setup (1/7)</b>

Send the giveaway title, or /cancel.`, parse_mode: "HTML" });
      if (startPrompt?.ok && startPrompt.result?.message_id) {
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(startPrompt.result.message_id, msg.from.id, chatId).run();
      }
      return;
    }
    {
      await ensureGiveawayTables(env);
      const draft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
      if (draft) {
        try {
          await tg(env, "deleteMessage", { chat_id: msg.chat.id, message_id: msg.message_id });
        } catch (e3) {
        }
        if (text === "/cancel") {
          const cancelPromptId = draft.prompt_message_id;
          await env.DB.prepare("DELETE FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).run();
          if (cancelPromptId) {
            const edited = await tgJson(env, "editMessageText", { chat_id: chatId, message_id: cancelPromptId, text: `${e("FALSE", "\u274C")} Giveaway setup cancelled.`, parse_mode: "HTML", reply_markup: { inline_keyboard: [] } });
            if (!edited?.ok) await tg(env, "sendMessage", { chat_id: chatId, text: `${e("FALSE", "\u274C")} Giveaway setup cancelled.`, parse_mode: "HTML" });
          } else {
            await tg(env, "sendMessage", { chat_id: chatId, text: `${e("FALSE", "\u274C")} Giveaway setup cancelled.`, parse_mode: "HTML" });
          }
          return;
        }
        if (text === "/skip" && draft.step === "custom_message") {
          await env.DB.prepare("UPDATE giveaway_drafts SET custom_message = NULL, step = 'prize_type' WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).run();
          const skipDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
          const newPromptId = await updateWizardPrompt(env, chatId, skipDraft, `${e("STAR", "\u2728")} <b>Giveaway Setup (3/7)</b>

Choose a prize type below, or /cancel.`, getGiveawayPrizeKeyboard());
          if (newPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(newPromptId, msg.from.id, chatId).run();
          return;
        }
        if (!text.startsWith("/")) {
          if (draft.step === "title") {
            await env.DB.prepare("UPDATE giveaway_drafts SET title = ?, step = 'custom_message' WHERE admin_id = ? AND group_id = ?").bind(text, msg.from.id, chatId).run();
            const titleDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
            const newPromptId = await updateWizardPrompt(env, chatId, titleDraft, `${e("STAR", "\u2728")} <b>Giveaway Setup (2/7)</b>

Send a custom message for the giveaway post, or send /skip to leave it blank, or /cancel.`, { inline_keyboard: [] });
            if (newPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(newPromptId, msg.from.id, chatId).run();
            return;
          }
          if (draft.step === "custom_message") {
            await env.DB.prepare("UPDATE giveaway_drafts SET custom_message = ?, step = 'prize_type' WHERE admin_id = ? AND group_id = ?").bind(text, msg.from.id, chatId).run();
            const customDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
            const newPromptId = await updateWizardPrompt(env, chatId, customDraft, `${e("STAR", "\u2728")} <b>Giveaway Setup (3/7)</b>

Choose a prize type below, or /cancel.`, getGiveawayPrizeKeyboard());
            if (newPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(newPromptId, msg.from.id, chatId).run();
            return;
          }
          if (draft.step === "prize_type" || draft.step === "prize_package") {
            await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Please choose a prize type / package using the buttons above, or /cancel.`, parse_mode: "HTML" });
            return;
          }
          if (draft.step === "prize_value") {
            if (draft.prize_type === "balance") {
              const amount = parseInt(text.replace(/,/g, ""), 10);
              if (isNaN(amount) || amount <= 0) {
                await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Invalid amount. Send digits only (e.g. 5000), or /cancel.`, parse_mode: "HTML" });
                return;
              }
              await env.DB.prepare("UPDATE giveaway_drafts SET prize_value = ?, step = 'winners' WHERE admin_id = ? AND group_id = ?").bind(String(amount), msg.from.id, chatId).run();
              const balDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
              const balPromptId = await updateWizardPrompt(env, chatId, balDraft, `${e("USERS", "\u{1F465}")} <b>Giveaway Setup (5/7)</b>

Send the number of winners (e.g. 1, 3, 5), or /cancel.`, { inline_keyboard: [] });
              if (balPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(balPromptId, msg.from.id, chatId).run();
              return;
            }
            if (draft.prize_type === "custom") {
              await env.DB.prepare("UPDATE giveaway_drafts SET prize_value = ?, step = 'winners' WHERE admin_id = ? AND group_id = ?").bind(text, msg.from.id, chatId).run();
              const custDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
              const custPromptId = await updateWizardPrompt(env, chatId, custDraft, `${e("USERS", "\u{1F465}")} <b>Giveaway Setup (5/7)</b>

Send the number of winners (e.g. 1, 3, 5), or /cancel.`, { inline_keyboard: [] });
              if (custPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(custPromptId, msg.from.id, chatId).run();
              return;
            }
          }
          if (draft.step === "winners") {
            const n = parseInt(text, 10);
            if (isNaN(n) || n < 1) {
              await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Invalid winners count. Send a number of 1 or more, or /cancel.`, parse_mode: "HTML" });
              return;
            }
            await env.DB.prepare("UPDATE giveaway_drafts SET winners_count = ?, step = 'duration' WHERE admin_id = ? AND group_id = ?").bind(n, msg.from.id, chatId).run();
            const winDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
            const winPromptId = await updateWizardPrompt(env, chatId, winDraft, `${e("CLOCK", "\u23F3")} <b>Giveaway Setup (6/7)</b>

Send the duration in hours (e.g. 24), or /cancel.`, { inline_keyboard: [] });
            if (winPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(winPromptId, msg.from.id, chatId).run();
            return;
          }
          if (draft.step === "duration") {
            const n = parseInt(text, 10);
            if (isNaN(n) || n < 1) {
              await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Invalid duration. Send hours as a number of 1 or more, or /cancel.`, parse_mode: "HTML" });
              return;
            }
            await env.DB.prepare("UPDATE giveaway_drafts SET duration_hours = ?, step = 'max' WHERE admin_id = ? AND group_id = ?").bind(n, msg.from.id, chatId).run();
            const durDraft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
            const durPromptId = await updateWizardPrompt(env, chatId, durDraft, `${e("USERS", "\u{1F465}")} <b>Giveaway Setup (7/7)</b>

Send the maximum number of participants (0 = unlimited), or /cancel.`, { inline_keyboard: [] });
            if (durPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(durPromptId, msg.from.id, chatId).run();
            return;
          }
          if (draft.step === "max") {
            const n = parseInt(text, 10);
            if (isNaN(n) || n < 0) {
              await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Invalid limit. Send 0 for unlimited, or a number of 1 or more, or /cancel.`, parse_mode: "HTML" });
              return;
            }
            await env.DB.prepare("UPDATE giveaway_drafts SET max_participants = ?, step = 'confirm' WHERE admin_id = ? AND group_id = ?").bind(n, msg.from.id, chatId).run();
            const updated = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).first();
            const sumPromptId = await updateWizardPrompt(env, chatId, updated, getGiveawaySummaryMessage(updated), Number(updated.schedule_mode || 0) === 1 ? getGiveawayScheduleConfirmKeyboard() : getGiveawayConfirmKeyboard());
            if (sumPromptId) await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(sumPromptId, msg.from.id, chatId).run();
            return;
          }
          if (draft.step === "schedule_date") {
            const scheduledAt = parseYangonDateTime(text);
            if (!scheduledAt || scheduledAt <= Date.now()) {
              await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Invalid or past date. Send a future date, e.g. <code>5 Nov 2026, 10:00 am</code> (Asia/Yangon), or /cancel.`, parse_mode: "HTML" });
              return;
            }
            await env.DB.prepare("INSERT INTO scheduled_giveaways (title, custom_message, prize_type, prize_value, winners_count, max_participants, duration_hours, scheduled_at, group_id, created_by, created_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'scheduled')").bind(draft.title, draft.custom_message, draft.prize_type, draft.prize_value, draft.winners_count, draft.max_participants, draft.duration_hours, scheduledAt, chatId, msg.from.id, (/* @__PURE__ */ new Date()).toISOString()).run();
            const schedDraft = { title: draft.title, custom_message: draft.custom_message, prize_type: draft.prize_type, prize_value: draft.prize_value };
            await env.DB.prepare("DELETE FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(msg.from.id, chatId).run();
            const schedPromptId = await updateWizardPrompt(env, chatId, { ...draft, prompt_message_id: draft.prompt_message_id }, getGiveawayScheduledMessage(schedDraft, scheduledAt), { inline_keyboard: [] });
            if (schedPromptId) {
            }
            return;
          }
          if (draft.step === "confirm") {
            await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Please tap Confirm or Cancel on the summary above, or /cancel.`, parse_mode: "HTML" });
            return;
          }
        }
      }
    }
    if (text.split("@")[0].split(/\s+/)[0].toLowerCase() === "/banlist") {
      const rows = await env.DB.prepare("SELECT telegram_id, username, first_name FROM users WHERE is_banned = 1 ORDER BY telegram_id ASC LIMIT 50").all();
      await tg(env, "sendMessage", { chat_id: chatId, text: getBanListMessage(rows.results || []), parse_mode: "HTML" });
      return;
    }
    if (text.startsWith("/announce")) {
      const announceText = text.replace(/^\/announce(@\w+)?\s*/, "").trim();
      if (!announceText) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>Usage:</b> <code>/announce Your announcement text</code>`, parse_mode: "HTML" });
        return;
      }
      await ensureGiveawayTables(env);
      const res = await env.DB.prepare("INSERT INTO pending_announcements (admin_id, group_id, text, created_at) VALUES (?, ?, ?, ?)").bind(msg.from.id, chatId, announceText, (/* @__PURE__ */ new Date()).toISOString()).run();
      const pendingId = res.meta?.last_row_id;
      if (!pendingId) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} Could not save this announcement. Please try again.`, parse_mode: "HTML" });
        return;
      }
      await tg(env, "sendMessage", { chat_id: chatId, text: getAnnouncePreviewMessage(announceText), parse_mode: "HTML", reply_markup: getAnnounceConfirmKeyboard(pendingId) });
      return;
    }
    if (text.startsWith("/ban") && text.split("@")[0].split(/\s+/)[0].toLowerCase() === "/ban") {
      const arg = text.split(/\s+/)[1]?.trim();
      const target = await resolveBanTarget(env, msg, arg);
      if (!target.userRow) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>User Not Found:</b> ${arg ? `<code>${arg}</code>` : "reply to the user's message or send an ID / @username"}`, parse_mode: "HTML" });
        return;
      }
      const targetId = String(target.userRow.telegram_id);
      await env.DB.prepare("UPDATE users SET is_banned = 1 WHERE telegram_id = ?").bind(targetId).run();
      await tg(env, "sendMessage", { chat_id: chatId, text: `${e("BAN", "\u{1F6AB}")} User <code>${targetId}</code> (${target.userRow.first_name || ""} @${target.userRow.username || "None"}) has been banned.`, parse_mode: "HTML" });
      try {
        await tg(env, "sendMessage", {
          chat_id: targetId,
          text: `${e("BAN", "\u{1F6AB}")} <b>Account Suspended</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>
Your account has been suspended for violating store rules.`,
          parse_mode: "HTML"
        });
      } catch (_) {
      }
      return;
    }
    if (text.startsWith("/unban") && text.split("@")[0].split(/\s+/)[0].toLowerCase() === "/unban") {
      const arg = text.split(/\s+/)[1]?.trim();
      const target = await resolveBanTarget(env, msg, arg);
      if (!target.userRow) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>User Not Found:</b> ${arg ? `<code>${arg}</code>` : "reply to the user's message or send an ID / @username"}`, parse_mode: "HTML" });
        return;
      }
      if (target.userRow.is_banned !== 1) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} User <code>${target.userRow.telegram_id}</code> is not currently banned.`, parse_mode: "HTML" });
        return;
      }
      const targetId = String(target.userRow.telegram_id);
      await env.DB.prepare("UPDATE users SET is_banned = 0 WHERE telegram_id = ?").bind(targetId).run();
      await tg(env, "sendMessage", { chat_id: chatId, text: `${e("DONE", "\u2705")} User <code>${targetId}</code> (${target.userRow.first_name || ""} @${target.userRow.username || "None"}) has been unbanned.`, parse_mode: "HTML" });
      try {
        await tg(env, "sendMessage", {
          chat_id: targetId,
          text: `${e("SUCCESS", "\u{1F389}")} <b>Account Re-activated</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>
Your account suspension has been lifted. You can now use the store.`,
          parse_mode: "HTML"
        });
      } catch (_) {
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
        reply_markup: getStatsRefreshKeyboard()
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
          text: `${e("WARNING", "\u26A0\uFE0F")} <b>Invalid Command Format!</b>

<b>Usage:</b>
\u2022 <code>/addbal &lt;id or @username&gt; &lt;amount&gt;</code>
\u2022 <code>/subbal &lt;id or @username&gt; &lt;amount&gt;</code>`,
          parse_mode: "HTML"
        });
        return;
      }
      let targetUser = targetInput.startsWith("@") ? await env.DB.prepare("SELECT * FROM users WHERE LOWER(username) = LOWER(?)").bind(targetInput.replace("@", "").trim()).first() : await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(targetInput.trim()).first();
      if (!targetUser) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u274C")} <b>User Not Found:</b> <code>${targetInput}</code>`, parse_mode: "HTML" });
        return;
      }
      const isAdd = cmd.startsWith("/add");
      if (!isAdd && targetUser.balance < amount) {
        await tg(env, "sendMessage", { chat_id: chatId, text: `${e("WARNING", "\u26A0\uFE0F")} <b>Insufficient Balance!</b>
User's current balance is only <b>${Number(targetUser.balance).toLocaleString()} MMK</b>.`, parse_mode: "HTML" });
        return;
      }
      const sql = isAdd ? "UPDATE users SET balance = balance + ?, last_topup_at = datetime('now', '+6 hours', '+30 minutes') WHERE telegram_id = ?" : "UPDATE users SET balance = balance - ? WHERE telegram_id = ?";
      await env.DB.prepare(sql).bind(amount, targetUser.telegram_id).run();
      const updatedUser = await env.DB.prepare("SELECT balance FROM users WHERE telegram_id = ?").bind(targetUser.telegram_id).first();
      const newBal = Number(updatedUser?.balance || 0);
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${isAdd ? e("SUCCESS", "\u2705") : e("WARNING", "\u{1F53B}")} <b>Balance Updated:</b>
\u2022 User: ${targetUser.first_name} (<code>${targetUser.telegram_id}</code>)
\u2022 Action: ${isAdd ? "Credited (+)" : "Deducted (-)"} <b>${amount.toLocaleString()} MMK</b>
\u2022 New Balance: <b>${newBal.toLocaleString()} MMK</b>`,
        parse_mode: "HTML"
      });
      try {
        const userNotice = isAdd ? `${e("SUCCESS", "\u{1F389}")} <b>Balance Credited!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Admin has added <b>+${amount.toLocaleString()} MMK</b> to your wallet.

${e("BALANCE", "\u{1F4B0}")} <b>Current Balance:</b> <code>${newBal.toLocaleString()} MMK</code>` : `${e("WARNING", "\u26A0\uFE0F")} <b>Balance Deducted!</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Admin has deducted <b>-${amount.toLocaleString()} MMK</b> from your wallet.

${e("BALANCE", "\u{1F4B0}")} <b>Current Balance:</b> <code>${newBal.toLocaleString()} MMK</code>`;
        await tg(env, "sendMessage", {
          chat_id: targetUser.telegram_id,
          text: userNotice,
          parse_mode: "HTML"
        });
      } catch (err) {
      }
      return;
    }
    if (text.startsWith("/broadcast")) {
      const broadcastMsg = text.replace(/^\/broadcast(@\w+)?/, "").trim();
      if (!broadcastMsg) return;
      const allUsers = await env.DB.prepare("SELECT telegram_id FROM users WHERE is_banned = 0").all();
      let successCount = 0;
      for (const u of allUsers.results || []) {
        try {
          await tg(env, "sendMessage", { chat_id: u.telegram_id, text: `${e("ANNOUNCE", "\u{1F4E2}")} <b>Store Announcement</b>

${broadcastMsg}`, parse_mode: "HTML" });
          successCount++;
        } catch (e3) {
        }
      }
      await tg(env, "sendMessage", { chat_id: chatId, text: `${e("DONE", "\u2705")} Announcement sent to <b>${successCount}</b> users.`, parse_mode: "HTML" });
      return;
    }
  }
  if (stockGroupId && isMatchChatId(chatId, stockGroupId)) {
    const cleanCmd = text.split("@")[0].split(/\s+/)[0].toLowerCase();
    if (cleanCmd === "/stock") {
      const stockMap = await getStockCountMap(env);
      let stockMsg = `${e("STATUS", "\u{1F4CA}")} <b>Real-Time Key Stock Status</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

`;
      for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
        const count = stockMap[k] || 0;
        const alertBadge = count <= 2 ? " \u26A0\uFE0F" : "";
        stockMsg += `\u2022 ${e("DOT", "\u{1F539}")} ${pkg.name}: <b>${count}</b> keys${alertBadge}
`;
      }
      stockMsg += `\u2022 ${e("FREEBIES", "\u{1F381}")} Free Test Keys: <b>${stockMap["test"] || 0}</b> keys
`;
      await tg(env, "sendMessage", { chat_id: chatId, text: stockMsg, parse_mode: "HTML", reply_markup: getStockRefreshKeyboard() });
      return;
    }
    const validCommands = [
      "/add_test",
      "/add_50gb",
      "/add_100gb",
      "/add_250gb",
      "/add_1m_1u",
      "/add_1m_2u",
      "/add_3m_1u",
      "/add_3m_2u"
    ];
    if (validCommands.includes(cleanCmd)) {
      const category = cleanCmd.replace("/add_", "");
      const validKeys = text.split("\n").slice(1).map((k) => k.trim()).filter((k) => k.startsWith("ss://"));
      if (validKeys.length === 0) {
        await tg(env, "sendMessage", {
          chat_id: chatId,
          text: `${e("WARNING", "\u26A0\uFE0F")} No keys detected. Format:
<code>${cleanCmd}</code>
ss://key1...
ss://key2...`,
          parse_mode: "HTML"
        });
        return;
      }
      const stmts = validKeys.map((k) => env.DB.prepare("INSERT OR IGNORE INTO keys (category, access_key) VALUES (?, ?)").bind(category, k));
      await env.DB.batch(stmts);
      const currentStock = await env.DB.prepare("SELECT COUNT(*) as count FROM keys WHERE category = ?").bind(category).first();
      await tg(env, "sendMessage", {
        chat_id: chatId,
        text: `${e("DONE", "\u2705")} <b>Keys Added: [${category.toUpperCase()}]</b>

\u2022 Added: <b>${validKeys.length}</b> keys
\u2022 Total in Stock: <b>${currentStock?.count || validKeys.length}</b> keys`,
        parse_mode: "HTML",
        reply_markup: getStockRefreshKeyboard()
      });
      return;
    }
  }
}
__name(handleMessage, "handleMessage");
async function handleCallback(cb, env) {
  const userId = cb.from.id;
  const callbackId = cb.id;
  const chatId = String(cb.message.chat.id);
  const messageId = cb.message.message_id;
  const data = cb.data;
  const paymentGroupId = String(env.PAYMENT_GROUP_ID || "").trim();
  const stockGroupId = String(env.STOCK_GROUP_ID || "").trim();
  async function editMsg(text, replyMarkup) {
    const edited = await tgJson(env, "editMessageText", {
      chat_id: chatId,
      message_id: messageId,
      text,
      parse_mode: "HTML",
      reply_markup: replyMarkup
    });
    if (!edited?.ok && !String(chatId).startsWith("-")) {
      await tg(env, "sendMessage", { chat_id: chatId, text, parse_mode: "HTML", reply_markup: replyMarkup });
    }
  }
  __name(editMsg, "editMsg");
  if (data.startsWith("out_of_stock_")) {
    await tg(env, "answerCallbackQuery", {
      callback_query_id: callbackId,
      text: "\u274C This package is currently out of stock! Admin has been notified to restock.",
      show_alert: true
    });
    return;
  }
  if (data.startsWith("gw_join_")) {
    const giftId = parseInt(data.replace("gw_join_", ""), 10);
    await ensureGiveawayTables(env);
    const gift = await env.DB.prepare("SELECT * FROM giveaways WHERE id = ?").bind(giftId).first();
    if (!gift || gift.status !== "active") {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "This giveaway is no longer active.", show_alert: true });
      return;
    }
    if (gift.ends_at && Date.now() >= Number(gift.ends_at)) {
      await endGiveaway(env, gift);
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "This giveaway has ended.", show_alert: true });
      return;
    }
    const existingUser = await env.DB.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(userId).first();
    if (existingUser?.is_banned === 1) {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "You are banned and cannot join giveaways.", show_alert: true });
      return;
    }
    await getOrCreateUser(env, cb.from);
    const count = await getGiveawayEntryCount(env, giftId);
    if (gift.max_participants && Number(gift.max_participants) > 0 && count >= Number(gift.max_participants)) {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "This giveaway is full.", show_alert: true });
      return;
    }
    try {
      await env.DB.prepare("INSERT INTO giveaway_entries (giveaway_id, user_id) VALUES (?, ?)").bind(giftId, userId).run();
    } catch (e3) {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "You have already joined this giveaway." });
      return;
    }
    await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "You joined the giveaway!" });
    await updateGiveawayMessage(env, gift);
    return;
  }
  if (paymentGroupId && isMatchChatId(chatId, paymentGroupId)) {
    const isAdmin = await checkIsAdmin(env, chatId, cb.from);
    if (!isAdmin) {
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "\u26A0\uFE0F Only store administrators can perform this action!", show_alert: true });
      return;
    }
    if (data.startsWith("announce_confirm_")) {
      const pendingId = parseInt(data.replace("announce_confirm_", ""), 10);
      await ensureGiveawayTables(env);
      const pending = await env.DB.prepare("SELECT * FROM pending_announcements WHERE id = ?").bind(pendingId).first();
      if (!pending) {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Announcement not found." });
        return;
      }
      const allUsers = await env.DB.prepare("SELECT telegram_id FROM users WHERE is_banned = 0").all();
      let successCount = 0;
      for (const u of allUsers.results || []) {
        try {
          await tg(env, "sendMessage", { chat_id: u.telegram_id, text: `${e("ANNOUNCE", "\u{1F4E2}")} <b>Store Announcement</b>

${pending.text}`, parse_mode: "HTML" });
          successCount++;
        } catch (e3) {
        }
      }
      await env.DB.prepare("DELETE FROM pending_announcements WHERE id = ?").bind(pendingId).run();
      await editMsg(`${e("DONE", "\u2705")} Announcement sent to <b>${successCount}</b> users.`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Announcement sent!" });
      return;
    }
    if (data.startsWith("announce_cancel_")) {
      const pendingId = parseInt(data.replace("announce_cancel_", ""), 10);
      await ensureGiveawayTables(env);
      await env.DB.prepare("DELETE FROM pending_announcements WHERE id = ?").bind(pendingId).run();
      await editMsg(`${e("FALSE", "\u274C")} Announcement cancelled.`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Cancelled." });
      return;
    }
    if (data.startsWith("gw_prize_")) {
      const prizeType = data.replace("gw_prize_", "");
      await ensureGiveawayTables(env);
      const draft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).first();
      if (!draft) {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "No giveaway draft found. Send /giftway first." });
        return;
      }
      if (prizeType === "balance") {
        await env.DB.prepare("UPDATE giveaway_drafts SET prize_type = ?, step = 'prize_value' WHERE admin_id = ? AND group_id = ?").bind(prizeType, userId, chatId).run();
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Wallet balance selected." });
        await editMsg(`${e("BALANCE", "\u{1F4B0}")} <b>Giveaway Setup (4/7)</b>

Send the wallet balance amount in MMK (digits only, e.g. 5000), or /cancel.`, { inline_keyboard: [] });
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      } else if (prizeType === "package") {
        await env.DB.prepare("UPDATE giveaway_drafts SET prize_type = ?, step = 'prize_package' WHERE admin_id = ? AND group_id = ?").bind(prizeType, userId, chatId).run();
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Package selected." });
        await editMsg(`${e("SHOP", "\u{1F6CD}")} <b>Giveaway Setup (4/7)</b>

Choose a package below, or /cancel.`, getGiveawayPackageKeyboard());
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      } else if (prizeType === "test") {
        await env.DB.prepare("UPDATE giveaway_drafts SET prize_type = ?, prize_value = 'test', step = 'winners' WHERE admin_id = ? AND group_id = ?").bind(prizeType, userId, chatId).run();
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Free test key selected." });
        await editMsg(`${e("USERS", "\u{1F465}")} <b>Giveaway Setup (5/7)</b>

Send the number of winners (e.g. 1, 3, 5), or /cancel.`, { inline_keyboard: [] });
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      } else if (prizeType === "custom") {
        await env.DB.prepare("UPDATE giveaway_drafts SET prize_type = ?, step = 'prize_value' WHERE admin_id = ? AND group_id = ?").bind(prizeType, userId, chatId).run();
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Custom prize selected." });
        await editMsg(`${e("STAR", "\u2728")} <b>Giveaway Setup (4/7)</b>

Send the custom prize description, or /cancel.`, { inline_keyboard: [] });
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      }
      return;
    }
    if (data.startsWith("gw_pkg_")) {
      const pkgKey = data.replace("gw_pkg_", "");
      if (!CONFIG.PACKAGES[pkgKey]) {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Invalid package." });
        return;
      }
      await ensureGiveawayTables(env);
      await env.DB.prepare("UPDATE giveaway_drafts SET prize_value = ?, step = 'winners' WHERE admin_id = ? AND group_id = ?").bind(pkgKey, userId, chatId).run();
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Package selected." });
      await editMsg(`${e("USERS", "\u{1F465}")} <b>Giveaway Setup (5/7)</b>

Send the number of winners (e.g. 1, 3, 5), or /cancel.`, { inline_keyboard: [] });
      await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      return;
    }
    if (data === "gw_active_replace" || data === "gw_active_schedule" || data === "gw_active_cancel") {
      await ensureGiveawayTables(env);
      const draft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).first();
      if (!draft || draft.step !== "active_choice") {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "No active-giveaway choice is pending." });
        return;
      }
      if (data === "gw_active_cancel") {
        await env.DB.prepare("DELETE FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).run();
        await editMsg(`${e("FALSE", "\u274C")} Cancelled. The active giveaway keeps running.`, { inline_keyboard: [] });
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Cancelled." });
        return;
      }
      const scheduleMode = data === "gw_active_schedule" ? 1 : 0;
      await env.DB.prepare("UPDATE giveaway_drafts SET step = 'title', schedule_mode = ? WHERE admin_id = ? AND group_id = ?").bind(scheduleMode, userId, chatId).run();
      await editMsg(`${e("FREEBIES", "\u{1F381}")} <b>Giveaway Setup (1/7)</b>

Send the giveaway title, or /cancel.${scheduleMode ? "\n\n<i>Scheduled mode: after Confirm you will set the post date.</i>" : ""}`, { inline_keyboard: [] });
      await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: scheduleMode ? "Scheduled mode selected." : "Replace mode selected." });
      return;
    }
    if (data === "gw_create_confirm") {
      await ensureGiveawayTables(env);
      const draft = await env.DB.prepare("SELECT * FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).first();
      if (!draft || draft.step !== "confirm") {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "No giveaway ready to confirm." });
        return;
      }
      if (Number(draft.schedule_mode || 0) === 1) {
        await env.DB.prepare("UPDATE giveaway_drafts SET step = 'schedule_date' WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).run();
        await editMsg(getGiveawaySchedulePromptMessage(draft), { inline_keyboard: [] });
        await env.DB.prepare("UPDATE giveaway_drafts SET prompt_message_id = ? WHERE admin_id = ? AND group_id = ?").bind(messageId, userId, chatId).run();
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Now set the post date." });
        return;
      }
      await env.DB.prepare("DELETE FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).run();
      const gift = await createAndPostGiveaway(env, { title: draft.title, custom_message: draft.custom_message, prize_type: draft.prize_type, prize_value: draft.prize_value, winners_count: draft.winners_count, max_participants: draft.max_participants, duration_hours: draft.duration_hours, created_by: userId }, paymentGroupId);
      if (!gift) {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Could not create giveaway." });
        return;
      }
      await editMsg(`${e("DONE", "\u2705")} Giveaway #${gift.id} started!`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Giveaway started!" });
      return;
    }
    if (data === "gw_draft_cancel") {
      await ensureGiveawayTables(env);
      await env.DB.prepare("DELETE FROM giveaway_drafts WHERE admin_id = ? AND group_id = ?").bind(userId, chatId).run();
      await editMsg(`${e("FALSE", "\u274C")} Giveaway setup cancelled.`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Cancelled." });
      return;
    }
    if (data.startsWith("gw_end_")) {
      const giftId = parseInt(data.replace("gw_end_", ""), 10);
      await ensureGiveawayTables(env);
      const gift = await env.DB.prepare("SELECT * FROM giveaways WHERE id = ?").bind(giftId).first();
      if (!gift || gift.status !== "active") {
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Giveaway is not active." });
        return;
      }
      await endGiveaway(env, gift);
      await editMsg(`${e("DONE", "\u2705")} Giveaway #${giftId} ended and winners drawn.`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Giveaway ended!" });
      return;
    }
    if (data.startsWith("gw_giveaway_cancel_")) {
      const giftId = parseInt(data.replace("gw_giveaway_cancel_", ""), 10);
      await ensureGiveawayTables(env);
      const gift = await env.DB.prepare("SELECT * FROM giveaways WHERE id = ?").bind(giftId).first();
      if (gift && gift.status === "active") {
        await env.DB.prepare("UPDATE giveaways SET status = 'cancelled' WHERE id = ?").bind(giftId).run();
        if (gift.message_chat_id && gift.message_id) {
          try {
            await tg(env, "editMessageText", { chat_id: gift.message_chat_id, message_id: gift.message_id, text: `${e("FALSE", "\u274C")} <b>Giveaway Cancelled: ${gift.title}</b>`, parse_mode: "HTML", reply_markup: { inline_keyboard: [] } });
          } catch (e3) {
          }
        }
      }
      await editMsg(`${e("FALSE", "\u274C")} Giveaway #${giftId} cancelled.`, { inline_keyboard: [] });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Cancelled." });
      return;
    }
    if (data.startsWith("gw_participants_")) {
      const giftId = parseInt(data.replace("gw_participants_", ""), 10);
      await ensureGiveawayTables(env);
      const entries = await env.DB.prepare("SELECT user_id FROM giveaway_entries WHERE giveaway_id = ? ORDER BY rowid ASC LIMIT 50").bind(giftId).all();
      const rows = entries.results || [];
      let listText = "No participants yet.";
      if (rows.length > 0) {
        const lines = [];
        for (const r of rows) {
          const u = await env.DB.prepare("SELECT first_name, username FROM users WHERE telegram_id = ?").bind(r.user_id).first();
          lines.push(`\u2022 ${u?.first_name || "Customer"} (<code>${r.user_id}</code>) @${u?.username || "None"}`);
        }
        listText = lines.join("\n");
      }
      await tg(env, "sendMessage", { chat_id: paymentGroupId, text: `${e("USERS", "\u{1F465}")} <b>Giveaway #${giftId} Participants (${rows.length} shown)</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${listText}`, parse_mode: "HTML" });
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "Participants list sent." });
      return;
    }
    if (data.startsWith("pay_app_")) {
      const parts = data.split("_");
      const reqId = parts[2];
      const targetUserId = parts[3];
      const amount = Number(parts[4]);
      try {
        const reqRow = await env.DB.prepare("SELECT plan_key FROM topup_requests WHERE id = ?").bind(reqId).first();
        const planKey = reqRow?.plan_key;
        if (planKey && CONFIG.PACKAGES[planKey]) {
          const keyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = ? LIMIT 1").bind(planKey).first();
          if (!keyItem) {
            await tg(env, "answerCallbackQuery", {
              callback_query_id: callbackId,
              text: `\u26A0\uFE0F Out of Stock for ${planKey.toUpperCase()}! Please restock first before approving.`,
              show_alert: true
            });
            return;
          }
          await env.DB.batch([
            env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(keyItem.id),
            env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, ?, ?, ?)").bind(targetUserId, planKey, keyItem.access_key, amount),
            env.DB.prepare("UPDATE topup_requests SET status = 'approved' WHERE id = ?").bind(reqId),
            env.DB.prepare("UPDATE users SET total_orders = total_orders + 1, total_spent = COALESCE(total_spent, 0) + ?, last_topup_at = datetime('now', '+6 hours', '+30 minutes') WHERE telegram_id = ?").bind(amount, targetUserId)
          ]);
          await tg(env, "editMessageCaption", {
            chat_id: chatId,
            message_id: messageId,
            caption: (cb.message?.caption || "") + `

\u{1F7E2} <b>APPROVED & KEY DELIVERED [${planKey.toUpperCase()}] by @${cb.from.username || "Admin"}</b>`,
            parse_mode: "HTML"
          });
          await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `\u2705 Approved & Delivered ${planKey.toUpperCase()} Key!` });
          await tg(env, "sendMessage", {
            chat_id: targetUserId,
            text: getKeyDeliveryMessage(planKey, amount, keyItem.access_key),
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [makeBtn("View in Orders", "callback_data", "menu_orders_p_1", null, "BTN_ORDERS")],
                [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
              ]
            }
          });
          const salesChannelId = String(env.SALES_CHANNEL_ID || "").trim();
          if (salesChannelId) {
            try {
              const buyer = await env.DB.prepare("SELECT first_name FROM users WHERE telegram_id = ?").bind(targetUserId).first();
              await tg(env, "sendMessage", {
                chat_id: salesChannelId,
                text: getChannelSaleMessage(buyer?.first_name || "Customer", planKey, amount, keyItem.access_key),
                parse_mode: "HTML",
                reply_markup: getSalesChannelKeyboard()
              });
            } catch (_) {
            }
          }
        } else {
          await env.DB.batch([
            env.DB.prepare("UPDATE users SET balance = balance + ?, last_topup_at = datetime('now', '+6 hours', '+30 minutes') WHERE telegram_id = ?").bind(amount, targetUserId),
            env.DB.prepare("UPDATE topup_requests SET status = 'approved' WHERE id = ?").bind(reqId)
          ]);
          await tg(env, "editMessageCaption", {
            chat_id: chatId,
            message_id: messageId,
            caption: (cb.message?.caption || "") + `

\u{1F7E2} <b>APPROVED (+${amount.toLocaleString()} MMK) by @${cb.from.username || "Admin"}</b>`,
            parse_mode: "HTML"
          });
          await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `\u2705 Approved (+${amount.toLocaleString()} MMK)!` });
          await tg(env, "sendMessage", {
            chat_id: targetUserId,
            text: `${e("SUCCESS", "\u{1F389}")} <b>Deposit Approved!</b>

Your wallet has been credited with <b>+${amount.toLocaleString()} MMK</b>.
You can now purchase Outline VPN keys anytime! ${e("STAR", "\u2728")}`,
            parse_mode: "HTML",
            reply_markup: getMainKeyboard()
          });
        }
        const targetUser = await env.DB.prepare("SELECT referred_by FROM users WHERE telegram_id = ?").bind(targetUserId).first();
        if (targetUser && targetUser.referred_by) {
          const bonusAmount = Math.floor(amount * ((CONFIG.REFERRAL_PERCENT || 5) / 100));
          if (bonusAmount > 0) {
            await env.DB.prepare("UPDATE users SET balance = balance + ?, referral_earnings = referral_earnings + ? WHERE telegram_id = ?").bind(bonusAmount, bonusAmount, targetUser.referred_by).run();
            try {
              await tg(env, "sendMessage", {
                chat_id: targetUser.referred_by,
                text: `${e("SUCCESS", "\u{1F389}")} <b>Referral Bonus Received!</b>

Your invited friend completed a deposit/purchase.
You earned: <b>+${bonusAmount.toLocaleString()} MMK</b> credited to your wallet!`,
                parse_mode: "HTML"
              });
            } catch (_) {
            }
          }
        }
      } catch (err) {
        console.error("Approve DB Error:", err);
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `\u274C DB Error: ${err.message}`, show_alert: true });
      }
      return;
    }
    if (data.startsWith("pay_rej_")) {
      const parts = data.split("_");
      const reqId = parts[2];
      const targetUserId = parts[3];
      try {
        await env.DB.prepare("UPDATE topup_requests SET status = 'rejected' WHERE id = ?").bind(reqId).run();
        await tg(env, "editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          caption: (cb.message?.caption || "") + `

\u{1F534} <b>REJECTED by @${cb.from.username || "Admin"}</b>`,
          parse_mode: "HTML"
        });
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "\u{1F534} Slip Rejected!" });
        await tg(env, "sendMessage", {
          chat_id: targetUserId,
          text: `${e("FALSE", "\u274C")} <b>Deposit Verification Failed:
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

</b> We could not verify your transaction slip. Please check your transfer details or contact support.`,
          parse_mode: "HTML",
          reply_markup: getSupportKeyboard()
        });
      } catch (err) {
        console.error("Reject Error:", err);
      }
      return;
    }
    if (data.startsWith("pay_ban_")) {
      const targetUserId = data.replace("pay_ban_", "");
      try {
        await env.DB.prepare("UPDATE users SET is_banned = 1 WHERE telegram_id = ?").bind(targetUserId).run();
        await tg(env, "editMessageCaption", {
          chat_id: chatId,
          message_id: messageId,
          caption: (cb.message?.caption || "") + `

\u{1F6AB} <b>USER BANNED by @${cb.from.username || "Admin"}</b>`,
          parse_mode: "HTML"
        });
        await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: "\u{1F6AB} User Banned Permanently!" });
        await tg(env, "sendMessage", {
          chat_id: targetUserId,
          text: `${e("BAN", "\u{1F6AB}")} <b>Account Suspended:
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

</b> Your account has been permanently banned due to fraudulent slip submission.`,
          parse_mode: "HTML"
        });
      } catch (err) {
        console.error("Ban Error:", err);
      }
      return;
    }
    if (data === "admin_refresh_stats") {
      const reportText = await getStoreAnalyticsReport(env);
      await editMsg(reportText, getStatsRefreshKeyboard());
      await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `${e("BTN_REFRESH", "\u{1F504}")} Stats Updated!` });
      return;
    }
  }
  if (stockGroupId && isMatchChatId(chatId, stockGroupId) && data === "admin_refresh_stock") {
    const stockMap = await getStockCountMap(env);
    let stockMsg = `${e("STATUS", "\u{1F4CA}")} <b>Real-Time Key Stock Status</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

`;
    for (const [k, pkg] of Object.entries(CONFIG.PACKAGES)) {
      stockMsg += `\u2022 ${e("DOT", "\u{1F539}")} ${pkg.name}: <b>${stockMap[k] || 0}</b> keys
`;
    }
    stockMsg += `\u2022 ${e("FREEBIES", "\u{1F381}")} Free Test Keys: <b>${stockMap["test"] || 0}</b> keys
`;
    await editMsg(stockMsg, getStockRefreshKeyboard());
    await tg(env, "answerCallbackQuery", { callback_query_id: callbackId, text: `${e("BTN_REFRESH", "\u{1F504}")} Stock Refreshed!` });
    return;
  }
  await tg(env, "answerCallbackQuery", { callback_query_id: callbackId });
  const user = await getOrCreateUser(env, cb.from);
  if (user.is_banned === 1) return;
  const balance = Number(user.balance || 0);
  if (data === "menu_giftway") {
    await ensureGiveawayTables(env);
    await checkAndPostScheduledGiveaways(env);
    let gift = await getLatestActiveGiveaway(env);
    if (gift && gift.ends_at && Date.now() >= Number(gift.ends_at)) {
      await endGiveaway(env, gift);
      gift = null;
    }
    if (!gift) {
      await editMsg(getGiveawayUnavailableMessage(), getGiveawayUnavailableKeyboard());
      return;
    }
    const giftCount = await getGiveawayEntryCount(env, gift.id);
    await editMsg(getGiveawayMessage(gift, giftCount), getGiveawayUserKeyboard(gift.id));
    return;
  }
  if (data === "menu_home") {
    await env.DB.prepare("UPDATE users SET pending_topup_amount = 0, pending_plan_key = NULL WHERE telegram_id = ?").bind(user.telegram_id).run();
    await editMsg(getWelcomeMessage(cb.from.first_name), getMainKeyboard());
    return;
  }
  if (data === "menu_referral") {
    const countRes = await env.DB.prepare("SELECT COUNT(*) as count FROM users WHERE referred_by = ?").bind(userId).first();
    const userRes = await env.DB.prepare("SELECT referral_earnings FROM users WHERE telegram_id = ?").bind(userId).first();
    await editMsg(getReferralMessage(CONFIG.BOT_USERNAME, userId, countRes?.count || 0, userRes?.referral_earnings || 0, CONFIG.REFERRAL_PERCENT), getReferralKeyboard());
    return;
  }
  if (data === "check_force_join") {
    const isJoined = await checkMustJoin(env, userId);
    if (!isJoined) {
      await tg(env, "answerCallbackQuery", { callback_query_id: cb.id, text: "\u274C Please join our channel first!", show_alert: true });
      return;
    }
    await editMsg(getWelcomeMessage(cb.from.first_name), getMainKeyboard());
    return;
  }
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
    const latestOrderDate = latestOrder ? formatMyanmarTime(parseDbDate(latestOrder.created_at)) : null;
    const regDate = user.created_at ? formatMyanmarTime(parseDbDate(user.created_at)) : "N/A";
    await editMsg(getProfileMessage({
      firstName: cb.from.first_name || "User",
      telegramId: user.telegram_id,
      regDate,
      balance,
      totalOrders,
      totalSpent,
      totalDeposited,
      invitedCount,
      earnings,
      latestOrder,
      latestOrderDate
    }), getProfileKeyboard());
    return;
  }
  if (data.startsWith("menu_orders_p_")) {
    const page = parseInt(data.replace("menu_orders_p_", ""), 10) || 1;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;
    const orderStats = await env.DB.prepare("SELECT COUNT(*) as count, SUM(price) as spent FROM orders WHERE user_id = ? AND category != 'test'").bind(userId).first();
    const totalOrders = orderStats?.count || 0;
    const totalSpent = orderStats?.spent || 0;
    const totalPages = Math.ceil(totalOrders / pageSize) || 1;
    const ordersRes = await env.DB.prepare(
      "SELECT id, category, price, created_at FROM orders WHERE user_id = ? AND category != 'test' ORDER BY id DESC LIMIT ? OFFSET ?"
    ).bind(userId, pageSize, offset).all();
    await editMsg(getOrdersSummaryMessage(totalOrders, totalSpent), getProfileOrdersKeyboard(ordersRes.results || [], page, totalPages));
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
    const expiryDate = new Date(buyDate.getTime() + (pkgInfo.days || 30) * 24 * 60 * 60 * 1e3);
    const now = /* @__PURE__ */ new Date();
    let statusText = "";
    if (now.getTime() > expiryDate.getTime()) {
      statusText = `${e("INACTIVE", "\u{1F534}")} <b>Expired</b>`;
    } else {
      const diffMs = expiryDate.getTime() - now.getTime();
      const leftDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      const leftHours = Math.floor(diffMs % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      statusText = `${e("ACTIVE", "\u{1F7E2}")} <b>Active (${leftDays}d ${leftHours}h remaining)</b>`;
    }
    const detailMsg = getOrderDetailMessage(order, pkgInfo, buyDate, expiryDate, statusText);
    await editMsg(detailMsg, getKeyDetailKeyboard(order.id, returnPage, order.access_key));
    return;
  }
  if (data.startsWith("del_conf_")) {
    const [, , orderId, returnPage] = data.split("_");
    await editMsg(`${e("WARNING", "\u26A0\uFE0F")} Are you sure you want to delete Key (#${orderId})?

<b>This action can't be undo and your key (#${orderId}) would be parmermently delete.</b>`, getDeleteConfirmKeyboard(orderId, returnPage));
    return;
  }
  if (data.startsWith("del_exec_")) {
    const [, , orderId] = data.split("_");
    await env.DB.prepare("DELETE FROM orders WHERE id = ? AND user_id = ?").bind(orderId, userId).run();
    await editMsg(`${e("DONE", "\u2705")} Key removed from profile.`, { inline_keyboard: [[makeBtn("Back to Orders", "callback_data", "menu_orders_p_1", null, "BTN_ORDERS")]] });
    return;
  }
  if (data === "menu_terms") {
    const termsMsg = `${e("TERMS", "\u{1F4DC}")} <b>Terms of Service & Store Policies</b>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

Please read and understand our store policies before proceeding:

<b>1. Strict No-Refund Policy:</b>
<blockquote>\u2022 All wallet top-ups and key purchases are final and non-refundable under any circumstances.</blockquote>
<b>2. Payment Transfer Rules:</b>
<blockquote>\u2022 Supported Methods: <b>KBZPay, AYAPay, UABPay</b>.
\u2022 <b>Strictly leave the transfer note/remark EMPTY</b>. Do NOT write "VPN", "Key", "Bot", or any related words.
\u2022 Violating this rule will result in immediate rejection, and funds will NOT be credited.
\u2022 <b>Processing Time:</b> Transactions are typically verified within <b>5 minutes to a maximum of 24 hours</b>. Wallet balance will be credited immediately once approved by the Admin Team.</blockquote>
<b>3. Fraud Prevention & Zero Tolerance:</b>
<blockquote>\u2022 Submitting altered, fake, reused, or forged payment slips will result in an immediate and permanent BAN of your Telegram ID and Account across all our services without warning.</blockquote>
<b>4. Fair Usage Policy:</b>
<blockquote>\u2022 Keys are optimized for personal, non-abusive usage.
\u2022 Reselling, public sharing, torrent abuse, or malicious activities that degrade server performance for others are strictly prohibited. Accounts violating fair use may be revoked.</blockquote>
<b>5. Service Uptime & Maintenance:</b>
<blockquote>\u2022 In the event of network disruption, IP filtering, or server downtime, our team will investigate and restore nodes as quickly as possible (typically within 24 hours).</blockquote>
<b>6. Final Authority:</b>
<blockquote>\u2022 In the event of any disputes, transaction discrepancies, or policy enforcement, the final decision rests solely with the Admin Team.</blockquote>
<b>\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501</b>

${e("WARNING", "\u26A0\uFE0F")} <b>By using our bot and depositing funds, you fully agree to comply with all the terms above.</b>`;
    await editMsg(termsMsg, {
      inline_keyboard: [[makeBtn("Main Menu", "callback_data", "menu_home", null, "BTN_HOME")]]
    });
    return;
  }
  if (data === "menu_topup") {
    await editMsg(`${e("DEPOSIT", "\u{1F4B3}")} <b>Select Deposit Amount:</b>`, getTopupKeyboard());
    return;
  }
  if (data === "topup_custom") {
    await env.DB.prepare("UPDATE users SET pending_topup_amount = -1, pending_plan_key = NULL WHERE telegram_id = ?").bind(userId).run();
    await editMsg(`${e("CUSTOM", "\u270D\uFE0F")} Type deposit amount (Min: ${CONFIG.PAYMENT.MIN_TOPUP.toLocaleString()} MMK):`, { inline_keyboard: [[makeBtn("Deposit", "callback_data", "menu_topup", null, "BTN_DEPOSIT")]] });
    return;
  }
  if (data.startsWith("topup_amt_")) {
    const amount = Number(data.replace("topup_amt_", ""));
    await env.DB.prepare("UPDATE users SET pending_topup_amount = ?, pending_plan_key = NULL WHERE telegram_id = ?").bind(amount, userId).run();
    await editMsg(getPaymentInfoMessage(amount), { inline_keyboard: [[makeBtn("Change Amount", "callback_data", "menu_topup", null, "BTN_CUSTOM")]] });
    return;
  }
  if (data === "menu_buy") {
    await editMsg(getCategorySelectMessage(), getCategoryKeyboard());
    return;
  }
  if (data === "cat_limited_data" || data === "cat_unlimited_data") {
    const categoryType = data.replace("cat_", "");
    const stockMap = await getStockCountMap(env);
    await editMsg(
      getPackageListMessage(balance, categoryType, stockMap),
      getCategoryPackagesKeyboard(categoryType, stockMap)
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
      getPlanDetailMessage(pkgKey, balance, inStock),
      getPlanPaymentMethodKeyboard(pkgKey, pkg.category_type)
    );
    return;
  }
  if (data.startsWith("pay_direct_")) {
    const pkgKey = data.replace("pay_direct_", "");
    const pkg = CONFIG.PACKAGES[pkgKey];
    if (!pkg) return;
    await env.DB.prepare("UPDATE users SET pending_topup_amount = ?, pending_plan_key = ? WHERE telegram_id = ?").bind(pkg.price, pkgKey, userId).run();
    await editMsg(getPaymentInfoMessage(pkg.price), {
      inline_keyboard: [
        [makeBtn("Back to Plans", "callback_data", `detail_pkg_${pkgKey}`, null, "BTN_BACK")]
      ]
    });
    return;
  }
  if (data.startsWith("buy_wallet_")) {
    const pkgKey = data.replace("buy_wallet_", "");
    const pkg = CONFIG.PACKAGES[pkgKey];
    if (!pkg) return;
    if (balance < pkg.price) {
      await editMsg(
        getInsufficientBalanceMessage(pkg.price, balance),
        getInsufficientBalanceKeyboard(pkg.category_type)
      );
      return;
    }
    const keyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = ? LIMIT 1").bind(pkgKey).first();
    if (!keyItem) {
      await editMsg(
        `${e("UNSTOCK", "\u{1F614}")} <b>Stock Unavailable!</b>

We are currently out of stock for <b>${pkg.name}</b>. Please check back shortly.`,
        {
          inline_keyboard: [
            [makeBtn("Back to Plans", "callback_data", `cat_${pkg.category_type}`, null, "BTN_BACK")],
            [makeBtn("Contact Support", "url", `https://t.me/JaiwaJG`, null, "BTN_SUPPORT")]
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
    await editMsg(getKeyDeliveryMessage(pkgKey, pkg.price, keyItem.access_key), {
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
          text: getChannelSaleMessage(cb.from?.first_name || "Customer", pkgKey, pkg.price, keyItem.access_key),
          parse_mode: "HTML",
          reply_markup: getSalesChannelKeyboard()
        });
      } catch (err) {
      }
    }
    if (stockGroupId) {
      try {
        const countRow = await env.DB.prepare("SELECT COUNT(*) as count FROM keys WHERE category = ?").bind(pkgKey).first();
        const rem = Number(countRow?.count || 0);
        if (rem <= 3) {
          await tg(env, "sendMessage", {
            chat_id: stockGroupId,
            text: `${e("WARNING", "\u26A0\uFE0F")} <b>[LOW STOCK ALERT]</b>
\u2022 Category: ${pkgKey.toUpperCase()}
\u2022 Remaining: <b>${rem} keys</b>

<i>Restock via /add_${pkgKey}</i>`,
            parse_mode: "HTML"
          });
        }
      } catch (e3) {
      }
    }
    return;
  }
  if (data === "menu_test" || data === "menu_test_key_info") {
    const existingTest = await env.DB.prepare("SELECT * FROM orders WHERE user_id = ? AND category = 'test' ORDER BY created_at DESC LIMIT 1").bind(userId).first();
    if (existingTest) {
      const claimedDate = parseDbDate(existingTest.created_at);
      const nextAvailDate = new Date(claimedDate.getTime() + 30 * 24 * 60 * 60 * 1e3);
      const now = /* @__PURE__ */ new Date();
      if (now.getTime() < nextAvailDate.getTime()) {
        const diffMs = nextAvailDate.getTime() - now.getTime();
        const daysLeft = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
        const hoursLeft = Math.floor(diffMs % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
        const claimedMsg = getTestKeyClaimedMessage(claimedDate, nextAvailDate, daysLeft, hoursLeft);
        await editMsg(claimedMsg, {
          inline_keyboard: [
            [makeBtn("View My Test Key", "callback_data", "view_claimed_test_key", null, "BTN_KEY")],
            [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
          ]
        });
        return;
      }
    }
    await editMsg(getTestKeyIntroMessage(), getTestKeyKeyboard());
    return;
  }
  if (data === "exec_claim_test_key" || data === "claim_free_test") {
    const existingTest = await env.DB.prepare("SELECT * FROM orders WHERE user_id = ? AND category = 'test' ORDER BY created_at DESC LIMIT 1").bind(userId).first();
    if (existingTest) {
      const claimedDate = parseDbDate(existingTest.created_at);
      const nextAvailDate = new Date(claimedDate.getTime() + 30 * 24 * 60 * 60 * 1e3);
      const now = /* @__PURE__ */ new Date();
      if (now.getTime() < nextAvailDate.getTime()) {
        const diffMs = nextAvailDate.getTime() - now.getTime();
        const daysLeft = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
        const hoursLeft = Math.floor(diffMs % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
        const claimedMsg = getTestKeyClaimedMessage(claimedDate, nextAvailDate, daysLeft, hoursLeft);
        await editMsg(claimedMsg, {
          inline_keyboard: [
            [makeBtn("View My Test Key", "callback_data", "view_claimed_test_key", null, "BTN_KEY")],
            [makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]
          ]
        });
        return;
      }
    }
    const testKeyItem = await env.DB.prepare("SELECT id, access_key FROM keys WHERE category = 'test' LIMIT 1").first();
    if (!testKeyItem) {
      await editMsg(`${e("UNSTOCK", "\u{1F614}")} <b>Out of Stock!</b>

No free test keys currently available.`, {
        inline_keyboard: [[makeBtn("Back to Home", "callback_data", "menu_home", null, "BTN_HOME")]]
      });
      return;
    }
    await env.DB.prepare("DELETE FROM keys WHERE id = ?").bind(testKeyItem.id).run();
    await env.DB.prepare("INSERT INTO orders (user_id, category, access_key, price) VALUES (?, 'test', ?, 0)").bind(userId, testKeyItem.access_key).run();
    await editMsg(
      getActiveTestKeyMessage(testKeyItem.access_key),
      getTestKeyActionKeyboard(testKeyItem.access_key)
    );
    return;
  }
  if (data === "view_claimed_test_key") {
    const existingTest = await env.DB.prepare("SELECT access_key FROM orders WHERE user_id = ? AND category = 'test' ORDER BY created_at DESC LIMIT 1").bind(userId).first();
    const keyStr = existingTest?.access_key || "No key found";
    await editMsg(
      getActiveTestKeyMessage(keyStr),
      getTestKeyActionKeyboard(keyStr)
    );
    return;
  }
}
__name(handleCallback, "handleCallback");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
