export const CONFIG = {
  STORE_NAME: "JAIWATeam VPN Store",
  ADMIN_USERNAME: "JaiwaJG",
  BOT_USERNAME: "jaiwateamvpnbot",

  REFERRAL_PERCENT: 5, // 5% Commission

  FORCE_JOIN: {
    ENABLED: false,
    CHANNEL_ID: "-1003109042473",
    CHANNEL_LINK: "https://t.me/jaiwateam",
  },

  // 📱 Payment Information
  PAYMENT: {
    PHONE: "09456545321",
    NAME: "Gum Seng Lat",
    MIN_TOPUP: 2500,
  },

  // 💎 Packages Configuration
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
      price: 6000,
      days: 30,
      gb: "Unlimited",
      users: "1 Device / User",
      detail: "Unlimited Data | 1 User/Device | 30 Days"
    },
    "1m_2u": {
      name: "1 Month | Unlimited (2 Users)",
      category_type: "unlimited_data",
      price: 10000,
      days: 30,
      gb: "Unlimited",
      users: "2 Devices / Users",
      detail: "Unlimited Data | 2 Users/Devices | 30 Days"
    },
    "3m_1u": {
      name: "3 Months | Unlimited (1 User)",
      category_type: "unlimited_data",
      price: 16000,
      days: 90,
      gb: "Unlimited",
      users: "1 Device / User",
      detail: "Unlimited Data | 1 User/Device | 90 Days"
    },
    "3m_2u": {
      name: "3 Months | Unlimited (2 Users)",
      category_type: "unlimited_data",
      price: 27000,
      days: 90,
      gb: "Unlimited",
      users: "2 Devices / Users",
      detail: "Unlimited Data | 2 Users/Devices | 90 Days"
    }
  },

  BUTTON_THEMES: {
    PRIMARY: "🟢",
    SECONDARY: "🔵",
    ACCENT: "🟠",
    DANGER: "🔴",
    SPECIAL: "🟣",
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
    BTN_SUPPORT: "5328121752067258288",
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

export function e(emojiType, fallbackUnicode = "") {
  const emojiId = CONFIG.EMOJIS[emojiType];
  if (emojiId && emojiId.trim() !== "") {
    return `<tg-emoji emoji-id="${emojiId.trim()}">${fallbackUnicode}</tg-emoji>`;
  }
  return fallbackUnicode;
}

export function btnIcon(emojiType, colorTheme = "PRIMARY", fallbackUnicode = "") {
  const theme = CONFIG.BUTTON_THEMES[colorTheme] || "";
  const icon = fallbackUnicode || theme;
  return `${icon} `;
}

export function makeBtn(title, actionType, actionValue, style = null, emojiIdKey = null) {
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
