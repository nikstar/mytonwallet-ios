/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/api/blockchains/ton/index.ts
var ton_namespaceObject = {};
__webpack_require__.r(ton_namespaceObject);
__webpack_require__.d(ton_namespaceObject, {
  buildTokenSlug: () => (buildTokenSlug),
  checkApiAvailability: () => (checkApiAvailability),
  checkMultiTransactionDraft: () => (checkMultiTransactionDraft),
  checkStakeDraft: () => (checkStakeDraft),
  checkTransactionDraft: () => (checkTransactionDraft),
  checkUnstakeDraft: () => (checkUnstakeDraft),
  decryptComment: () => (decryptComment),
  decryptMnemonic: () => (decryptMnemonic),
  encryptMnemonic: () => (encryptMnemonic),
  fetchMnemonic: () => (fetchMnemonic),
  fetchPrivateKey: () => (fetchPrivateKey),
  fetchToken: () => (fetchToken),
  fixTokenActivitiesAddressForm: () => (fixTokenActivitiesAddressForm),
  generateMnemonic: () => (generateMnemonic),
  getAccountBalance: () => (getAccountBalance),
  getAccountNewestTxId: () => (getAccountNewestTxId),
  getAccountNfts: () => (getAccountNfts),
  getAccountTokenBalances: () => (getAccountTokenBalances),
  getAccountTransactionSlice: () => (getAccountTransactionSlice),
  getAddressTokenBalances: () => (getAddressTokenBalances),
  getMergedTransactionSlice: () => (getMergedTransactionSlice),
  getNftUpdates: () => (getNftUpdates),
  getStakingState: () => (getStakingState),
  getTokenTransactionSlice: () => (getTokenTransactionSlice),
  getWalletBalance: () => (getWalletBalance),
  getWalletInfo: () => (getWalletInfo),
  getWalletSeqno: () => (getWalletSeqno),
  getWalletStateInit: () => (getWalletStateInit),
  getWalletVersionInfos: () => (getWalletVersionInfos),
  getWalletVersions: () => (getWalletVersions),
  isActiveSmartContract: () => (isActiveSmartContract),
  isAddressInitialized: () => (isAddressInitialized),
  mnemonicToSeed: () => (mnemonicToSeed),
  normalizeAddress: () => (normalizeAddress),
  oneCellFromBoc: () => (oneCellFromBoc),
  packPayloadToBoc: () => (packPayloadToBoc),
  parsePayloadBase64: () => (parsePayloadBase64),
  pickAccountWallet: () => (pickAccountWallet),
  pickBestWallet: () => (pickBestWallet),
  pickWalletByAddress: () => (pickWalletByAddress),
  publicKeyToAddress: () => (publicKeyToAddress),
  rawSign: () => (rawSign),
  resolveTokenBySlug: () => (resolveTokenBySlug),
  resolveTokenMinterAddress: () => (resolveTokenMinterAddress),
  resolveTokenWalletAddress: () => (resolveTokenWalletAddress),
  resolveWalletVersion: () => (resolveWalletVersion),
  seedToKeyPair: () => (seedToKeyPair),
  sendSignedMessage: () => (sendSignedMessage),
  sendSignedMessages: () => (sendSignedMessages),
  submitMultiTransfer: () => (submitMultiTransfer),
  submitStake: () => (submitStake),
  submitTransfer: () => (submitTransfer),
  submitUnstake: () => (submitUnstake),
  validateDexSwapTransfers: () => (validateDexSwapTransfers),
  validateMnemonic: () => (validateMnemonic),
  verifyPassword: () => (verifyPassword),
  waitLastTransfer: () => (waitLastTransfer),
  waitUntilTransactionAppears: () => (waitUntilTransactionAppears)
});

// NAMESPACE OBJECT: ./src/api/tonConnect/index.ts
var tonConnect_namespaceObject = {};
__webpack_require__.r(tonConnect_namespaceObject);
__webpack_require__.d(tonConnect_namespaceObject, {
  connect: () => (connect),
  deactivate: () => (deactivate),
  disconnect: () => (disconnect),
  fetchDappMetadata: () => (fetchDappMetadata),
  initTonConnect: () => (initTonConnect),
  reconnect: () => (reconnect),
  sendTransaction: () => (sendTransaction),
  signData: () => (signData)
});

// NAMESPACE OBJECT: ./src/api/methods/index.ts
var methods_namespaceObject = {};
__webpack_require__.r(methods_namespaceObject);
__webpack_require__.d(methods_namespaceObject, {
  activateAccount: () => (activateAccount),
  buildTokenSlug: () => (tokens_buildTokenSlug),
  cancelDappRequest: () => (cancelDappRequest),
  changePassword: () => (changePassword),
  checkApiAvailability: () => (other_checkApiAvailability),
  checkStakeDraft: () => (staking_checkStakeDraft),
  checkTransactionDraft: () => (transactions_checkTransactionDraft),
  checkUnstakeDraft: () => (staking_checkUnstakeDraft),
  confirmDappRequest: () => (confirmDappRequest),
  confirmDappRequestConnect: () => (confirmDappRequestConnect),
  createLocalTransaction: () => (createLocalTransaction),
  createWallet: () => (createWallet),
  deactivateAllAccounts: () => (deactivateAllAccounts),
  deactivateCurrentAccount: () => (deactivateCurrentAccount),
  deactivateDapp: () => (deactivateDapp),
  decryptComment: () => (transactions_decryptComment),
  deleteAllDapps: () => (deleteAllDapps),
  deleteDapp: () => (deleteDapp),
  fetchAccount: () => (fetchAccount),
  fetchAccountConfigForDebugPurposesOnly: () => (fetchAccountConfigForDebugPurposesOnly),
  fetchAddress: () => (fetchAddress),
  fetchAllActivitySlice: () => (fetchAllActivitySlice),
  fetchBackendStakingState: () => (fetchBackendStakingState),
  fetchDappCatalog: () => (fetchDappCatalog),
  fetchNfts: () => (fetchNfts),
  fetchToken: () => (tokens_fetchToken),
  fetchTokenActivitySlice: () => (fetchTokenActivitySlice),
  fetchTokenBalances: () => (fetchTokenBalances),
  fetchTokenBalancesByAddress: () => (fetchTokenBalancesByAddress),
  generateMnemonic: () => (auth_generateMnemonic),
  getActiveAccountId: () => (getActiveAccountId),
  getActiveDapp: () => (getActiveDapp),
  getBackendAuthToken: () => (getBackendAuthToken),
  getBackendStakingState: () => (getBackendStakingState),
  getBaseCurrency: () => (getBaseCurrency),
  getClientId: () => (getClientId),
  getDapps: () => (getDapps),
  getDappsByOrigin: () => (getDappsByOrigin),
  getMnemonic: () => (getMnemonic),
  getMnemonicWordList: () => (getMnemonicWordList),
  getStakingHistory: () => (getStakingHistory),
  getWalletBalance: () => (wallet_getWalletBalance),
  getWalletSeqno: () => (wallet_getWalletSeqno),
  importLedgerWallet: () => (importLedgerWallet),
  importMnemonic: () => (importMnemonic),
  importNewWalletVersion: () => (importNewWalletVersion),
  initDapps: () => (initDapps),
  initNfts: () => (initNfts),
  initPolling: () => (initPolling),
  initStaking: () => (initStaking),
  initSwap: () => (initSwap),
  initTransactions: () => (initTransactions),
  isAccountActive: () => (accounts_isAccountActive),
  isWalletInitialized: () => (isWalletInitialized),
  onStakingChangeExpected: () => (onStakingChangeExpected),
  processNftUpdates: () => (processNftUpdates),
  removeAccount: () => (removeAccount),
  removeNetworkAccounts: () => (removeNetworkAccounts),
  resetAccounts: () => (resetAccounts),
  resolveTokenBySlug: () => (tokens_resolveTokenBySlug),
  resolveTokenMinterAddress: () => (tokens_resolveTokenMinterAddress),
  resolveTokenWalletAddress: () => (tokens_resolveTokenWalletAddress),
  sendSignedTransferMessage: () => (sendSignedTransferMessage),
  sendSignedTransferMessages: () => (sendSignedTransferMessages),
  sendUpdateTokens: () => (sendUpdateTokens),
  setBaseCurrency: () => (setBaseCurrency),
  setIsAppFocused: () => (setIsAppFocused),
  setupBackendPolling: () => (setupBackendPolling),
  setupBalanceBasedPolling: () => (setupBalanceBasedPolling),
  setupLongBackendPolling: () => (setupLongBackendPolling),
  setupStakingPolling: () => (setupStakingPolling),
  setupSwapPolling: () => (setupSwapPolling),
  setupWalletVersionsPolling: () => (setupWalletVersionsPolling),
  startSseConnection: () => (startSseConnection),
  submitStake: () => (staking_submitStake),
  submitTransfer: () => (transactions_submitTransfer),
  submitUnstake: () => (staking_submitUnstake),
  swapBuild: () => (swapBuild),
  swapBuildTransfer: () => (swapBuildTransfer),
  swapCexCreateTransaction: () => (swapCexCreateTransaction),
  swapCexEstimate: () => (swapCexEstimate),
  swapCexValidateAddress: () => (swapCexValidateAddress),
  swapEstimate: () => (swapEstimate),
  swapGetAssets: () => (swapGetAssets),
  swapGetHistory: () => (swapGetHistory),
  swapGetHistoryByRanges: () => (swapGetHistoryByRanges),
  swapGetHistoryItem: () => (swapGetHistoryItem),
  swapGetPairs: () => (swapGetPairs),
  swapGetTonCurrencies: () => (swapGetTonCurrencies),
  swapItemToActivity: () => (swapItemToActivity),
  swapReplaceTransactions: () => (swapReplaceTransactions),
  swapReplaceTransactionsByRanges: () => (swapReplaceTransactionsByRanges),
  swapSubmit: () => (swapSubmit),
  tryLoadSwapTokens: () => (tryLoadSwapTokens),
  tryUpdatePrices: () => (tryUpdatePrices),
  tryUpdateRegion: () => (tryUpdateRegion),
  tryUpdateStakingCommonData: () => (tryUpdateStakingCommonData),
  tryUpdateTokens: () => (tryUpdateTokens),
  updateNfts: () => (updateNfts),
  validateMnemonic: () => (auth_validateMnemonic),
  verifyPassword: () => (wallet_verifyPassword),
  waitDataPreload: () => (waitDataPreload),
  waitLastTransfer: () => (transactions_waitLastTransfer)
});

;// CONCATENATED MODULE: ./src/config.ts
const APP_ENV = "production";
const APP_NAME = ({}).APP_NAME || 'MyTonWallet';
const APP_VERSION = ({}).APP_VERSION;
const APP_ENV_MARKER = APP_ENV === 'staging' ? 'Beta' : APP_ENV === 'development' ? 'Dev' : undefined;
const DEBUG = APP_ENV !== 'production' && APP_ENV !== 'perf' && APP_ENV !== 'test';
const DEBUG_MORE = false;
const IS_TEST = APP_ENV === 'test';
const IS_PERF = APP_ENV === 'perf';
const IS_EXTENSION = ({}).IS_EXTENSION === '1';
const IS_FIREFOX_EXTENSION = ({}).IS_FIREFOX_EXTENSION === '1';
const IS_PACKAGED_ELECTRON = ({}).IS_PACKAGED_ELECTRON === '1';
const IS_CAPACITOR = ({}).IS_CAPACITOR === '1';
const ELECTRON_HOST_URL = 'https://dumb-host';
const INACTIVE_MARKER = '[Inactive]';
const PRODUCTION_URL = 'https://mytonwallet.app';
const BETA_URL = 'https://beta.mytonwallet.app';
const BASE_URL = (/* unused pure expression or super */ null && ("https://mytonwallet.app"));
const SWAP_FEE_ADDRESS = ({}).SWAP_FEE_ADDRESS || 'UQDUkQbpTVIgt7v66-JTFR-3-eXRFz_4V66F-Ufn6vOg0GOp';
const STRICTERDOM_ENABLED = DEBUG && !IS_PACKAGED_ELECTRON;
const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';
const PIN_LENGTH = 4;
const NATIVE_BIOMETRICS_USERNAME = 'MyTonWallet';
const NATIVE_BIOMETRICS_SERVER = 'https://mytonwallet.app';
const MNEMONIC_COUNT = 24;
const MNEMONIC_CHECK_COUNT = 3;
const MOBILE_SCREEN_MAX_WIDTH = 700; // px

const ANIMATION_END_DELAY = 50;
const ANIMATED_STICKER_TINY_SIZE_PX = 70;
const ANIMATED_STICKER_SMALL_SIZE_PX = 110;
const ANIMATED_STICKER_MIDDLE_SIZE_PX = 120;
const ANIMATED_STICKER_DEFAULT_PX = 150;
const ANIMATED_STICKER_BIG_SIZE_PX = 156;
const ANIMATED_STICKER_HUGE_SIZE_PX = 192;
const TON_SYMBOL = 'TON';
const DEFAULT_LANDSCAPE_ACTION_TAB_ID = 0;
const config_DEFAULT_DECIMAL_PLACES = 9;
const DEFAULT_SLIPPAGE_VALUE = 5;
const GLOBAL_STATE_CACHE_DISABLED = false;
const GLOBAL_STATE_CACHE_KEY = 'mytonwallet-global-state';
const ANIMATION_LEVEL_MIN = 0;
const ANIMATION_LEVEL_MED = 1;
const ANIMATION_LEVEL_MAX = 2;
const ANIMATION_LEVEL_DEFAULT = (/* unused pure expression or super */ null && (ANIMATION_LEVEL_MAX));
const THEME_DEFAULT = 'system';
const MAIN_ACCOUNT_ID = '0-ton-mainnet';
const TONHTTPAPI_MAINNET_URL = ({}).TONHTTPAPI_MAINNET_URL || 'https://tonhttpapi.mytonwallet.org/api/v2/jsonRPC';
const TONHTTPAPI_MAINNET_API_KEY = ({}).TONHTTPAPI_MAINNET_API_KEY;
const ELECTRON_TONHTTPAPI_MAINNET_API_KEY = ({}).ELECTRON_TONHTTPAPI_MAINNET_API_KEY;
const TONHTTPAPI_V3_MAINNET_API_URL = ({}).TONHTTPAPI_V3_MAINNET_API_KEY || 'https://tonhttpapi-v3.mytonwallet.org/api/v3';
const TONAPIIO_MAINNET_URL = ({}).TONAPIIO_MAINNET_URL || 'https://tonapiio.mytonwallet.org';
const TONHTTPAPI_TESTNET_URL = ({}).TONHTTPAPI_TESTNET_URL || 'https://tonhttpapi-testnet.mytonwallet.org/api/v2/jsonRPC';
const TONHTTPAPI_TESTNET_API_KEY = ({}).TONHTTPAPI_TESTNET_API_KEY;
const ELECTRON_TONHTTPAPI_TESTNET_API_KEY = ({}).ELECTRON_TONHTTPAPI_TESTNET_API_KEY;
const TONHTTPAPI_V3_TESTNET_API_URL = ({}).TONHTTPAPI_V3_TESTNET_API_KEY || 'https://tonhttpapi-v3-testnet.mytonwallet.org/api/v3';
const TONAPIIO_TESTNET_URL = ({}).TONAPIIO_TESTNET_URL || 'https://tonapiio-testnet.mytonwallet.org';
const BRILLIANT_API_BASE_URL = ({}).BRILLIANT_API_BASE_URL || 'https://api.mytonwallet.org';
const FRACTION_DIGITS = 9;
const SHORT_FRACTION_DIGITS = 2;
const MY_TON_WALLET_PROMO_URL = 'https://mytonwallet.io';
const TELEGRAM_WEB_URL = 'https://web.telegram.org/a/';
const TONSCAN_BASE_MAINNET_URL = 'https://tonscan.org/';
const TONSCAN_BASE_TESTNET_URL = 'https://testnet.tonscan.org/';
const GETGEMS_BASE_MAINNET_URL = 'https://getgems.io/';
const GETGEMS_BASE_TESTNET_URL = 'https://testnet.getgems.io/';
const CHANGELLY_SUPPORT_EMAIL = 'support@changelly.com';
const CHANGELLY_SECURITY_EMAIL = 'security@changelly.com';
const CHANGELLY_TERMS_OF_USE = 'https://changelly.com/terms-of-use';
const CHANGELLY_PRIVACY_POLICY = 'https://changelly.com/privacy-policy';
const CHANGELLY_AML_KYC = 'https://changelly.com/aml-kyc';
const CHANGELLY_WAITING_DEADLINE = (/* unused pure expression or super */ null && (3 * 60 * 60 * 1000)); // 3 hour

const TON_TOKEN_SLUG = 'toncoin';
const JWBTC_TOKEN_SLUG = 'ton-eqdcbkghmc';
const JUSDT_TOKEN_SLUG = 'ton-eqbynbo23y';
const USDT_TRON_TOKEN_SLUG = 'usdtrx';
const PROXY_HOSTS = ({}).PROXY_HOSTS;
const TINY_TRANSFER_MAX_COST = 0.01;
const LANG_CACHE_NAME = 'mtw-lang-74';
const LANG_LIST = [{
  langCode: 'en',
  name: 'English',
  nativeName: 'English',
  rtl: false
}, {
  langCode: 'es',
  name: 'Spanish',
  nativeName: 'Español',
  rtl: false
}, {
  langCode: 'ru',
  name: 'Russian',
  nativeName: 'Русский',
  rtl: false
}, {
  langCode: 'zh-Hans',
  name: 'Chinese (Simplified)',
  nativeName: '简体',
  rtl: false
}, {
  langCode: 'zh-Hant',
  name: 'Chinese (Traditional)',
  nativeName: '繁體',
  rtl: false
}, {
  langCode: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  rtl: false
}, {
  langCode: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  rtl: false
}];
const STAKING_CYCLE_DURATION_MS = 131072000; // 36.4 hours
const VALIDATION_PERIOD_MS = 65536000; // 18.2 h.
const ONE_TON = 1000000000n;
const MIN_BALANCE_FOR_UNSTAKE = 1020000000n; // 1.02 TON
const STAKING_FORWARD_AMOUNT = (/* unused pure expression or super */ null && (ONE_TON));
const DEFAULT_FEE = 15000000n; // 0.015 TON

const STAKING_POOLS = ({}).STAKING_POOLS ? ({}).STAKING_POOLS.split(' ') : [];
const LIQUID_POOL = ({}).LIQUID_POOL || 'EQD2_4d91M4TVbEBVyBF8J1UwpMJc361LKVCz6bBlffMW05o';
const LIQUID_JETTON = ({}).LIQUID_JETTON || 'EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE';
const STAKING_MIN_AMOUNT = (/* unused pure expression or super */ null && (ONE_TON));
const NOMINATORS_STAKING_MIN_AMOUNT = ONE_TON * 10001n;
const TON_PROTOCOL = 'ton://';
const TONCONNECT_PROTOCOL = 'tc://';
const TONCONNECT_UNIVERSAL_URL = 'https://connect.mytonwallet.org';
const TONCONNECT_PROTOCOL_VERSION = 2;
const TONCONNECT_WALLET_JSBRIDGE_KEY = 'mytonwallet';
const DEFAULT_API_TIMEOUT = 5000;
const TOKEN_INFO = {
  toncoin: {
    name: 'Toncoin',
    symbol: TON_SYMBOL,
    slug: TON_TOKEN_SLUG,
    cmcSlug: TON_TOKEN_SLUG,
    quote: {
      price: 1.95,
      priceUsd: 1.95,
      percentChange1h: 0,
      percentChange24h: 0,
      percentChange7d: 0,
      percentChange30d: 0
    },
    decimals: config_DEFAULT_DECIMAL_PLACES
  }
};
const TON_BLOCKCHAIN = 'ton';
const INIT_SWAP_ASSETS = {
  toncoin: {
    name: 'Toncoin',
    symbol: TON_SYMBOL,
    blockchain: TON_BLOCKCHAIN,
    slug: TON_TOKEN_SLUG,
    decimals: config_DEFAULT_DECIMAL_PLACES,
    price: 0,
    isPopular: true
  },
  'ton-eqdcbkghmc': {
    name: 'jWBTC',
    symbol: 'jWBTC',
    blockchain: TON_BLOCKCHAIN,
    slug: 'ton-eqdcbkghmc',
    decimals: 8,
    // eslint-disable-next-line max-len
    image: 'https://cache.tonapi.io/imgproxy/LaFKdzahVX9epWT067gyVLd8aCa1lFrZd7Rp9siViEE/rs:fill:200:200:1/g:no/aHR0cHM6Ly9icmlkZ2UudG9uLm9yZy90b2tlbi8xLzB4MjI2MGZhYzVlNTU0MmE3NzNhYTQ0ZmJjZmVkZjdjMTkzYmMyYzU5OS5wbmc.webp',
    contract: 'EQDcBkGHmC4pTf34x3Gm05XvepO5w60DNxZ-XT4I6-UGG5L5',
    price: 0,
    isPopular: false,
    keywords: ['bitcoin']
  }
};
const MULTITAB_DATA_CHANNEL_NAME = 'mtw-multitab';
const ACTIVE_TAB_STORAGE_KEY = 'mtw-active-tab';
const INDEXED_DB_NAME = 'keyval-store';
const INDEXED_DB_STORE_NAME = 'keyval';
const WINDOW_PROVIDER_CHANNEL = 'windowProvider';
const MIN_ASSETS_TAB_VIEW = 5;
const DEFAULT_PRICE_CURRENCY = 'USD';
const SHORT_CURRENCY_SYMBOL_MAP = {
  USD: '$',
  EUR: '€',
  RUB: '₽',
  CNY: '¥'
};
const CURRENCY_LIST = [{
  value: 'USD',
  name: 'US Dollar'
}, {
  value: 'EUR',
  name: 'Euro'
}, {
  value: 'RUB',
  name: 'Ruble'
}, {
  value: 'CNY',
  name: 'Yuan'
}, {
  value: 'BTC',
  name: 'Bitcoin'
}, {
  value: TON_SYMBOL,
  name: 'Toncoin'
}];
const EXCHANGE_ADDRESSES = new Set(['EQBfAN7LfaUYgXZNw5Wc7GBgkEX2yhuJ5ka95J1JJwXXf4a8', 'UQBfAN7LfaUYgXZNw5Wc7GBgkEX2yhuJ5ka95J1JJwXXf9t5',
// OKX
'EQBBlxK8VBxEidbxw4oQVyLSk7iEf9VPJxetaRQpEbi-XG4U', 'UQBBlxK8VBxEidbxw4oQVyLSk7iEf9VPJxetaRQpEbi-XDPR',
// Bitfinex
'EQBX63RAdgShn34EAFMV73Cut7Z15lUZd1hnVva68SEl7sxi', 'UQBX63RAdgShn34EAFMV73Cut7Z15lUZd1hnVva68SEl7pGn',
// MEXC
'EQDD8dqOzaj4zUK6ziJOo_G2lx6qf1TEktTRkFJ7T1c_fPQb', 'UQDD8dqOzaj4zUK6ziJOo_G2lx6qf1TEktTRkFJ7T1c_fKne',
// Bybit
'EQBVXzBT4lcTA3S7gxrg4hnl5fnsDKj4oNEzNp09aQxkwj1f', 'UQBVXzBT4lcTA3S7gxrg4hnl5fnsDKj4oNEzNp09aQxkwmCa',
// Huobi
'EQCA1BI4QRZ8qYmskSRDzJmkucGodYRTZCf_b9hckjla6dZl', 'UQCA1BI4QRZ8qYmskSRDzJmkucGodYRTZCf_b9hckjla6Yug' // KuCoin
]);

const DEFAULT_WALLET_VERSION = 'v4R2';
const POPULAR_WALLET_VERSIONS = ['v3R1', 'v3R2', 'v4R2'];
;// CONCATENATED MODULE: ./src/lib/big.js/index.js
/*
 *  big.js v6.2.1
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2022 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */

/************************************** EDITABLE DEFAULTS *****************************************/

// The default values below must be integers within the stated ranges.

/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 20,
  // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,
  // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,
  // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,
  // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,
  // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,
  // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,
  // true or false

  /**************************************************************************************************/

  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',
  // The shared prototype object.
  P = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

/*
 * Create and return a Big constructor.
 */
function _Big_() {
  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== 'string') {
        if (Big.strict === true && typeof n !== 'bigint') {
          throw TypeError(INVALID + 'value');
        }

        // Minus zero?
        n = n === 0 && 1 / n < 0 ? '-0' : String(n);
      }
      parse(x, n);
    }

    // Retain a reference to this Big constructor.
    // Shadow Big.prototype.constructor which points to Object.
    x.constructor = Big;
  }
  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.strict = STRICT;
  Big.roundDown = 0;
  Big.roundHalfUp = 1;
  Big.roundHalfEven = 2;
  Big.roundUp = 3;
  return Big;
}

/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;
  if (!NUMERIC.test(n)) {
    throw Error(INVALID + 'number');
  }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {
    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {
    // Integer.
    e = n.length;
  }
  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
  if (i == nl) {
    // Zero.
    x.c = [x.e = 0];
  } else {
    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';);
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
  }
  return x;
}

/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
  var xc = x.c;
  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {
      // Zero.
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {
    // xc[sd] is the digit after the digit that may be rounded up.
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);

    // Remove any digits after the required precision.
    xc.length = sd;

    // Round up?
    if (more) {
      // Rounding up may mean the previous digit has to be rounded up.
      for (; ++xc[--sd] > 9;) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }

    // Remove trailing zeros.
    for (sd = xc.length; !xc[--sd];) xc.pop();
  }
  return x;
}

/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
  var e = x.e,
    s = x.c.join(''),
    n = s.length;

  // Exponential notation?
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
  } else if (e < 0) {
    for (; ++e;) s = '0' + s;
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--;) s += '0';
    } else if (e < n) {
      s = s.slice(0, e) + '.' + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }
  return x.s < 0 && isNonzero ? '-' + s : s;
}

// Prototype/instance methods

/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};

/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;
  isneg = i < 0;

  // Compare exponents.
  if (k != l) return k > l ^ isneg ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};

/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,
    // dividend
    b = (y = new Big(y)).c,
    // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }

  // Divisor is zero?
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }

  // Dividend is 0? Return +-0.
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }
  var bl,
    bt,
    n,
    cmp,
    ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),
    // remainder
    rl = r.length,
    q = y,
    // quotient
    qc = q.c = [],
    qi = 0,
    p = dp + (q.e = x.e - y.e) + 1; // precision of the result

  q.s = k;
  k = p < 0 ? 0 : p;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) r.push(0);
  do {
    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {
      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {
        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }
        for (; !r[0];) r.shift();
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {
    // There can't be more than one zero.
    qc.shift();
    q.e--;
    p--;
  }

  // Round?
  if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
  return q;
};

/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
  return this.cmp(y) === 0;
};

/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
  return this.cmp(y) > 0;
};

/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
  return this.cmp(y) > -1;
};

/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
  return this.cmp(y) < 0;
};

/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
  return this.cmp(y) < 1;
};

/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
  var i,
    j,
    t,
    xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }
  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big(x);
    } else {
      y.s = 1;
    }
    return y;
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }
    t.reverse();
    for (b = a; b--;) t.push(0);
    t.reverse();
  } else {
    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) xc.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;
  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;
  if (ygtx) return new Big(x);
  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;
  return this.minus(x.times(y));
};

/*
 * Return a new Big whose value is the value of this Big negated.
 */
P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};

/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
  var e,
    k,
    t,
    x = this,
    Big = x.constructor;
  y = new Big(y);

  // Signs differ?
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }
  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }
    t.reverse();
    for (; e--;) t.push(0);
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }
  e = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (k) {
    xc.unshift(k);
    ++ye;
  }

  // Remove trailing zeros.
  for (e = xc.length; xc[--e] === 0;) xc.pop();
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
  var x = this,
    one = new x.constructor('1'),
    y = one,
    isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + 'exponent');
  }
  if (isneg) n = -n;
  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }
  return isneg ? one.div(y) : y;
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.prec = function (sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + 'precision');
  }
  return round(new this.constructor(this), sd, rm);
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.round = function (dp, rm) {
  if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};

/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
  var r,
    c,
    t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big('0.5');

  // Zero?
  if (!x.c[0]) return new Big(x);

  // Negative?
  if (s < 0) {
    throw Error(NAME + 'No square root');
  }

  // Estimate.
  s = Math.sqrt(x + '');

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) c += '0';
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s + '');
  }
  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
  return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};

/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {
      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }
    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;
  return y;
};

/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toExponential = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, true, !!n);
};

/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);

    // x.e may have changed if the value is rounded up.
    for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, false, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P[Symbol.for('nodejs.util.inspect.custom')] = P.toJSON = P.toString = function () {
  var x = this,
    Big = x.constructor;
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};

/*
 * Return the value of this Big as a primitve number.
 */
P.toNumber = function () {
  var n = Number(stringify(this, true, true));
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + 'Imprecise conversion');
  }
  return n;
};

/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toPrecision = function (sd, rm) {
  var x = this,
    Big = x.constructor,
    n = x.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }
    x = round(new Big(x), sd, rm);
    for (; x.c.length < sd;) x.c.push(0);
  }
  return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = function () {
  var x = this,
    Big = x.constructor;
  if (Big.strict === true) {
    throw Error(NAME + 'valueOf disallowed');
  }
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};

// Export

var big_js_Big = _Big_();

/// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
/* harmony default export */ const big_js = ((/* unused pure expression or super */ null && (big_js_Big)));
;// CONCATENATED MODULE: ./src/util/decimals.ts


big_js_Big.RM = 0; // RoundDown
big_js_Big.NE = -100000; // Disable exponential form
big_js_Big.PE = 100000; // Disable exponential form

const ten = big_js_Big(10);
function fromDecimal(value, decimals) {
  return BigInt(big_js_Big(value).mul(ten.pow(decimals !== null && decimals !== void 0 ? decimals : config_DEFAULT_DECIMAL_PLACES)).round().toString());
}
function toDecimal(value, decimals) {
  return toBig(value, decimals !== null && decimals !== void 0 ? decimals : DEFAULT_DECIMAL_PLACES).toString();
}
function toBig(value) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_DECIMAL_PLACES;
  return Big(value.toString()).div(ten.pow(decimals)).round(decimals);
}
function roundDecimal(value, decimals) {
  return Big(value).round(decimals).toString();
}
function getIsPositiveDecimal(value) {
  return !value.startsWith('-');
}
;// CONCATENATED MODULE: ./src/util/bigint.ts


const PREFIX = 'bigint:';

// @ts-ignore
BigInt.prototype.toJSON = function toJSON() {
  return `${PREFIX}${this}`;
};
function bigint_bigintReviver(key, value) {
  if (typeof value === 'string' && value.startsWith(PREFIX)) {
    return BigInt(value.slice(7));
  }
  return value;
}
function bigintAbs(value) {
  return value === -0n || value < 0n ? -value : value;
}
function bigintDivideToNumber(value, num) {
  return value * ONE_TON / fromDecimal(num);
}
function bigintMultiplyToNumber(value, num) {
  return value * fromDecimal(num) / ONE_TON;
}
;// CONCATENATED MODULE: ./src/util/logs.ts

function logDebugError(message) {
  if (DEBUG) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    // eslint-disable-next-line no-console
    console.error(`[DEBUG][${message}]`, ...args);
  }
}
function logDebug(message) {
  if (DEBUG) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    // eslint-disable-next-line no-console
    console.log(`[DEBUG] ${message}`, ...args);
  }
}
;// CONCATENATED MODULE: ./src/util/createPostMessageInterface.ts



const callbackState = new Map();
function createPostMessageInterface(api, channel) {
  let target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self;
  let shouldIgnoreErrors = arguments.length > 3 ? arguments[3] : undefined;
  function sendToOrigin(data, transferables) {
    data.channel = channel;
    if (transferables) {
      target.postMessage(data, transferables);
    } else {
      target.postMessage(data);
    }
  }
  if (!shouldIgnoreErrors) {
    handleErrors(sendToOrigin);
  }
  target.onmessage = message => {
    var _message$data;
    if (((_message$data = message.data) === null || _message$data === void 0 ? void 0 : _message$data.channel) === channel) {
      onMessage(api, message.data, sendToOrigin);
    }
  };
}
function createExtensionInterface(portName, api, channel, cleanUpdater) {
  let withAutoInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  chrome.runtime.onConnect.addListener(port => {
    var _port$sender;
    if (port.name !== portName) {
      return;
    }

    /**
     * If the sender's URL includes the DETACHED_TAB_URL, we skip further processing
     * This condition ensures that we don't interact with tabs that have already been closed.
     */
    const url = (_port$sender = port.sender) === null || _port$sender === void 0 ? void 0 : _port$sender.url;
    if (url !== null && url !== void 0 && url.includes(DETACHED_TAB_URL)) {
      return;
    }
    const origin = url ? new URL(url).origin : undefined;
    const dAppUpdater = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
    function sendToOrigin(data) {
      data.channel = channel;
      const json = JSON.stringify(data);
      port.postMessage(json);
    }
    handleErrors(sendToOrigin);
    port.onMessage.addListener(data => {
      if (typeof data === 'string') {
        data = JSON.parse(data, bigintReviver);
      }
      if (data.channel === channel) {
        onMessage(api, data, sendToOrigin, dAppUpdater, origin);
      }
    });
    port.onDisconnect.addListener(() => {
      cleanUpdater === null || cleanUpdater === void 0 ? void 0 : cleanUpdater(dAppUpdater);
    });
    if (withAutoInit) {
      onMessage(api, {
        type: 'init',
        name: 'init',
        args: []
      }, sendToOrigin, dAppUpdater);
    }
  });
}
async function onMessage(api, data, sendToOrigin, onUpdate, origin) {
  if (!onUpdate) {
    onUpdate = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
  }
  switch (data.type) {
    case 'init':
      {
        var _api$init;
        const {
          args
        } = data;
        const promise = typeof api === 'function' ? api('init', origin, onUpdate, ...args) : (_api$init = api.init) === null || _api$init === void 0 ? void 0 : _api$init.call(api, onUpdate, ...args);
        await promise;
        break;
      }
    case 'callMethod':
      {
        const {
          messageId,
          name,
          args,
          withCallback
        } = data;
        try {
          if (messageId && withCallback) {
            const callback = function () {
              for (var _len = arguments.length, callbackArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                callbackArgs[_key] = arguments[_key];
              }
              const lastArg = callbackArgs[callbackArgs.length - 1];
              sendToOrigin({
                type: 'methodCallback',
                messageId,
                callbackArgs
              }, isTransferable(lastArg) ? [lastArg] : undefined);
            };
            callbackState.set(messageId, callback);
            args.push(callback);
          }
          const response = typeof api === 'function' ? await api(name, origin, ...args) : await api[name](...args);
          const {
            arrayBuffer
          } = typeof response === 'object' && 'arrayBuffer' in response && response || {};
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              response
            }, arrayBuffer ? [arrayBuffer] : undefined);
          }
        } catch (err) {
          logDebugError(name, err);
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              error: {
                message: err.message
              }
            });
          }
        }
        if (messageId) {
          callbackState.delete(messageId);
        }
        break;
      }
    case 'cancelProgress':
      {
        const callback = callbackState.get(data.messageId);
        if (callback) {
          callback.isCanceled = true;
        }
        break;
      }
  }
}
function isTransferable(obj) {
  return obj instanceof ArrayBuffer || obj instanceof ImageBitmap;
}
function handleErrors(sendToOrigin) {
  self.onerror = e => {
    var _e$error;
    // eslint-disable-next-line no-console
    console.error(e);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message: ((_e$error = e.error) === null || _e$error === void 0 ? void 0 : _e$error.message) || 'Uncaught exception in worker'
      }
    });
  };
  self.addEventListener('unhandledrejection', e => {
    var _e$reason;
    // eslint-disable-next-line no-console
    console.error(e);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message: ((_e$reason = e.reason) === null || _e$reason === void 0 ? void 0 : _e$reason.message) || 'Uncaught rejection in worker'
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/api/types/misc.ts
let Workchain = /*#__PURE__*/function (Workchain) {
  Workchain[Workchain["MasterChain"] = -1] = "MasterChain";
  Workchain[Workchain["BaseChain"] = 0] = "BaseChain";
  return Workchain;
}({});
const WORKCHAIN = Workchain.BaseChain;
const TRANSFER_TIMEOUT_SEC = 60; // 1 min.

let ApiLiquidUnstakeMode = /*#__PURE__*/function (ApiLiquidUnstakeMode) {
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Default"] = 0] = "Default";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Instant"] = 1] = "Instant";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["BestRate"] = 2] = "BestRate";
  return ApiLiquidUnstakeMode;
}({});
;// CONCATENATED MODULE: ./src/api/types/errors.ts
let ApiCommonError = /*#__PURE__*/function (ApiCommonError) {
  ApiCommonError["Unexpected"] = "Unexpected";
  ApiCommonError["ServerError"] = "ServerError";
  ApiCommonError["DebugError"] = "DebugError";
  return ApiCommonError;
}({});
let ApiTransactionDraftError = /*#__PURE__*/function (ApiTransactionDraftError) {
  ApiTransactionDraftError["InvalidAmount"] = "InvalidAmount";
  ApiTransactionDraftError["InvalidToAddress"] = "InvalidToAddress";
  ApiTransactionDraftError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionDraftError["DomainNotResolved"] = "DomainNotResolved";
  ApiTransactionDraftError["WalletNotInitialized"] = "WalletNotInitialized";
  ApiTransactionDraftError["UnsupportedHardwareOperation"] = "UnsupportedHardwareOperation";
  ApiTransactionDraftError["UnsupportedHardwareContract"] = "UnsupportedHardwareContract";
  ApiTransactionDraftError["EncryptedDataNotSupported"] = "EncryptedDataNotSupported";
  ApiTransactionDraftError["NonAsciiCommentForHardwareOperation"] = "NonAsciiCommentForHardwareOperation";
  ApiTransactionDraftError["TooLongCommentForHardwareOperation"] = "TooLongCommentForHardwareOperation";
  ApiTransactionDraftError["InvalidAddressFormat"] = "InvalidAddressFormat";
  return ApiTransactionDraftError;
}({});
let ApiTransactionError = /*#__PURE__*/function (ApiTransactionError) {
  ApiTransactionError["PartialTransactionFailure"] = "PartialTransactionFailure";
  ApiTransactionError["IncorrectDeviceTime"] = "IncorrectDeviceTime";
  ApiTransactionError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionError["UnsuccesfulTransfer"] = "UnsuccesfulTransfer";
  ApiTransactionError["UnsupportedHardwareContract"] = "UnsupportedHardwareContract";
  ApiTransactionError["UnsupportedHardwarePayload"] = "UnsupportedHardwarePayload";
  ApiTransactionError["NonAsciiCommentForHardwareOperation"] = "NonAsciiCommentForHardwareOperation";
  ApiTransactionError["TooLongCommentForHardwareOperation"] = "TooLongCommentForHardwareOperation";
  ApiTransactionError["UnsupportedHardwareNftOperation"] = "UnsupportedHardwareNftOperation";
  return ApiTransactionError;
}({});
;// CONCATENATED MODULE: ./src/api/types/index.ts







;// CONCATENATED MODULE: ./src/util/account.ts
function parseAccountId(accountId) {
  const [id, blockchain = 'ton',
  // Handle deprecated case when `accountId = '0'`
  network = 'mainnet'] = accountId.split('-');
  return {
    id: Number(id),
    blockchain: blockchain,
    network: network
  };
}
function buildAccountId(account) {
  const {
    id,
    network,
    blockchain
  } = account;
  return `${id}-${blockchain}-${network}`;
}
// EXTERNAL MODULE: ./node_modules/tonweb-mnemonic/dist/web/index.js
var web = __webpack_require__(6845);
// EXTERNAL MODULE: ./node_modules/tweetnacl/nacl-fast.js
var nacl_fast = __webpack_require__(780);
var nacl_fast_default = /*#__PURE__*/__webpack_require__.n(nacl_fast);
;// CONCATENATED MODULE: ./src/api/storages/types.ts
let StorageType = /*#__PURE__*/function (StorageType) {
  StorageType[StorageType["IndexedDb"] = 0] = "IndexedDb";
  StorageType[StorageType["LocalStorage"] = 1] = "LocalStorage";
  StorageType[StorageType["ExtensionLocal"] = 2] = "ExtensionLocal";
  StorageType[StorageType["CapacitorStorage"] = 3] = "CapacitorStorage";
  return StorageType;
}({});
;// CONCATENATED MODULE: ./src/util/generateUniqueId.ts
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
;// CONCATENATED MODULE: ./src/util/PostMessageConnector.ts
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class ConnectorClass {
  constructor(target, onUpdate, channel, shouldUseJson) {
    let targetOrigin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '*';
    this.target = target;
    this.onUpdate = onUpdate;
    this.channel = channel;
    this.shouldUseJson = shouldUseJson;
    this.targetOrigin = targetOrigin;
    _defineProperty(this, "requestStates", new Map());
    _defineProperty(this, "requestStatesByCallback", new Map());
  }

  // eslint-disable-next-line class-methods-use-this
  destroy() {}
  init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.postMessage({
      type: 'init',
      args
    });
  }
  request(messageData) {
    const {
      requestStates,
      requestStatesByCallback
    } = this;
    const messageId = generateUniqueId();
    const payload = {
      type: 'callMethod',
      messageId,
      ...messageData
    };
    const requestState = {
      messageId
    };

    // Re-wrap type because of `postMessage`
    const promise = new Promise((resolve, reject) => {
      Object.assign(requestState, {
        resolve,
        reject
      });
    });
    if (typeof payload.args[payload.args.length - 1] === 'function') {
      payload.withCallback = true;
      const callback = payload.args.pop();
      requestState.callback = callback;
      requestStatesByCallback.set(callback, requestState);
    }
    requestStates.set(messageId, requestState);
    promise.catch(() => undefined).finally(() => {
      requestStates.delete(messageId);
      if (requestState.callback) {
        requestStatesByCallback.delete(requestState.callback);
      }
    });
    this.postMessage(payload);
    return promise;
  }
  cancelCallback(progressCallback) {
    progressCallback.isCanceled = true;
    const {
      messageId
    } = this.requestStatesByCallback.get(progressCallback) || {};
    if (!messageId) {
      return;
    }
    this.postMessage({
      type: 'cancelProgress',
      messageId
    });
  }
  onMessage(data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data, bigint_bigintReviver);
      } catch (err) {
        logDebugError('PostMessageConnector: Failed to parse message', err);
        return;
      }
    }
    const {
      requestStates,
      channel
    } = this;
    if (data.channel !== channel) {
      return;
    }
    if (data.type === 'update' && this.onUpdate) {
      this.onUpdate(data.update);
    }
    if (data.type === 'methodResponse') {
      const requestState = requestStates.get(data.messageId);
      if (requestState) {
        if (data.error) {
          requestState.reject(data.error);
        } else {
          requestState.resolve(data.response);
        }
      }
    } else if (data.type === 'methodCallback') {
      var _requestState$callbac;
      const requestState = requestStates.get(data.messageId);
      requestState === null || requestState === void 0 || (_requestState$callbac = requestState.callback) === null || _requestState$callbac === void 0 ? void 0 : _requestState$callbac.call(requestState, ...data.callbackArgs);
    } else if (data.type === 'unhandledError') {
      var _data$error;
      throw new Error((_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message);
    }
  }
  postMessage(data) {
    data.channel = this.channel;
    let rawData = data;
    if (this.shouldUseJson) {
      rawData = JSON.stringify(data);
    }
    if ('open' in this.target) {
      // Is Window
      this.target.postMessage(rawData, this.targetOrigin);
    } else {
      this.target.postMessage(rawData);
    }
  }
}
function createConnector(worker, onUpdate, channel, targetOrigin) {
  const connector = new ConnectorClass(worker, onUpdate, channel, undefined, targetOrigin);
  function handleMessage(_ref) {
    let {
      data
    } = _ref;
    connector.onMessage(data);
  }
  worker.addEventListener('message', handleMessage); // TS weirdly complains here

  connector.destroy = () => {
    worker.removeEventListener('message', handleMessage);
  };
  return connector;
}
function createExtensionConnector(name, onUpdate, getInitArgs, channel) {
  const connector = new ConnectorClass(connect(), onUpdate, channel, true);
  function connect() {
    // eslint-disable-next-line no-restricted-globals
    const port = self.chrome.runtime.connect({
      name
    });
    port.onMessage.addListener(data => {
      connector.onMessage(data);
    });

    // For some reason port can suddenly get disconnected
    port.onDisconnect.addListener(() => {
      connector.target = connect();
      connector.init(getInitArgs === null || getInitArgs === void 0 ? void 0 : getInitArgs());
    });
    return port;
  }
  connector.init(getInitArgs === null || getInitArgs === void 0 ? void 0 : getInitArgs());
  return connector;
}
;// CONCATENATED MODULE: ./src/util/capacitorStorageProxy/connector.ts



let connector;
function initWindowConnector() {
  if (!connector) {
    // eslint-disable-next-line no-restricted-globals
    connector = createConnector(self, undefined, WINDOW_PROVIDER_CHANNEL);
    connector.init();
  }
}
async function callWindow(methodName) {
  if (!connector) {
    logDebugError('API is not initialized');
    return undefined;
  }
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return await connector.request({
      name: methodName,
      args
    });
  } catch (err) {
    return undefined;
  }
}
;// CONCATENATED MODULE: ./src/api/storages/capacitorStorage.ts


const NON_CACHED_KEYS = ['mnemonicsEncrypted'];
let cache = {};
const storage = {
  async getItem(key, force) {
    if (key in cache && !force) return cache[key];
    const result = await callWindow('getItem', key);
    const value = result ? JSON.parse(result, bigint_bigintReviver) : undefined;
    if (value !== undefined && !NON_CACHED_KEYS.includes(key)) cache[key] = value;
    return value;
  },
  async setItem(key, value) {
    await callWindow('setItem', key, JSON.stringify(value));
    if (!NON_CACHED_KEYS.includes(key)) cache[key] = value;
  },
  async removeItem(key) {
    await callWindow('removeItem', key);
    delete cache[key];
  },
  async clear() {
    await callWindow('clear');
    cache = {};
  }
};
/* harmony default export */ const capacitorStorage = (storage);
;// CONCATENATED MODULE: ./src/api/storages/extension.ts


// eslint-disable-next-line no-restricted-globals
const extension_storage = IS_EXTENSION ? self.chrome.storage.local : undefined;
/* harmony default export */ const extension = (extension_storage && {
  getItem: async key => {
    var _await$storage$get;
    return (_await$storage$get = await extension_storage.get(key)) === null || _await$storage$get === void 0 ? void 0 : _await$storage$get[key];
  },
  setItem: (key, value) => extension_storage.set({
    [key]: value
  }),
  removeItem: extension_storage.remove.bind(extension_storage),
  clear: extension_storage.clear.bind(extension_storage),
  getAll: extension_storage.get.bind(extension_storage),
  setMany: extension_storage.set.bind(extension_storage),
  getMany: extension_storage.get.bind(extension_storage)
} || {});
// EXTERNAL MODULE: ./node_modules/idb-keyval/dist/index.js
var dist = __webpack_require__(4678);
;// CONCATENATED MODULE: ./src/util/iteratees.ts
function buildCollectionByKey(collection, key) {
  return collection.reduce((byKey, member) => {
    byKey[member[key]] = member;
    return byKey;
  }, {});
}
function mapValues(byKey, callback) {
  return Object.keys(byKey).reduce((newByKey, key, index) => {
    newByKey[key] = callback(byKey[key], key, index, byKey);
    return newByKey;
  }, {});
}
function pick(object, keys) {
  return keys.reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});
}
function pickTruthy(object, keys) {
  return keys.reduce((result, key) => {
    if (object[key]) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
function omit(object, keys) {
  const stringKeys = new Set(keys.map(String));
  const savedKeys = Object.keys(object).filter(key => !stringKeys.has(key));
  return pick(object, savedKeys);
}
function orderBy(collection, orderRule) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
  function compareValues(a, b, currentOrderRule, isAsc) {
    const aValue = (typeof currentOrderRule === 'function' ? currentOrderRule(a) : a[currentOrderRule]) || 0;
    const bValue = (typeof currentOrderRule === 'function' ? currentOrderRule(b) : b[currentOrderRule]) || 0;
    return isAsc ? aValue - bValue : bValue - aValue;
  }
  if (Array.isArray(orderRule)) {
    const [mode1, mode2] = Array.isArray(mode) ? mode : [mode, mode];
    const [orderRule1, orderRule2] = orderRule;
    const isAsc1 = mode1 === 'asc';
    const isAsc2 = mode2 === 'asc';
    return collection.sort((a, b) => {
      return compareValues(a, b, orderRule1, isAsc1) || compareValues(a, b, orderRule2, isAsc2);
    });
  }
  const isAsc = mode === 'asc';
  return collection.sort((a, b) => {
    return compareValues(a, b, orderRule, isAsc);
  });
}
function unique(array) {
  return Array.from(new Set(array));
}
function compact(array) {
  return array.filter(Boolean);
}
function areSortedArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item, i) => item === array2[i]);
}
function split(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function cloneDeep(value) {
  if (!isObject(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  return Object.keys(value).reduce((acc, key) => {
    acc[key] = cloneDeep(value[key]);
    return acc;
  }, {});
}
function isObject(value) {
  // eslint-disable-next-line no-null/no-null
  return typeof value === 'object' && value !== null;
}
function findLast(array, predicate) {
  let cursor = array.length;
  while (cursor--) {
    if (predicate(array[cursor], cursor, array)) {
      return array[cursor];
    }
  }
  return undefined;
}
function range(start, end) {
  const arr = [];
  for (let i = start; i < end;) {
    arr.push(i++);
  }
  return arr;
}
function fromKeyValueArrays(keys, values) {
  return keys.reduce((acc, key, index) => {
    acc[key] = Array.isArray(values) ? values[index] : values;
    return acc;
  }, {});
}
function extractKey(array, key) {
  return array.map(value => value[key]);
}
;// CONCATENATED MODULE: ./src/api/storages/idb.ts



const store = dist/* createStore */.MT(INDEXED_DB_NAME, INDEXED_DB_STORE_NAME);
/* harmony default export */ const idb = ({
  getItem: name => dist/* get */.U2(name, store),
  setItem: (name, value) => dist/* set */.t8(name, value, store),
  removeItem: name => dist/* del */.IV(name, store),
  clear: () => dist/* clear */.ZH(store),
  getAll: async () => {
    const keys = await dist/* keys */.XP(store);
    const values = await dist/* getMany */.yS(keys, store);
    return fromKeyValueArrays(keys, values);
  },
  getMany: async keys => {
    const values = await dist/* getMany */.yS(keys, store);
    return fromKeyValueArrays(keys, values);
  },
  setMany: items => {
    return dist/* setMany */.vw(Object.entries(items), store);
  }
});
;// CONCATENATED MODULE: ./src/api/storages/localStorage.ts

function withPromise(fn) {
  return function () {
    return Promise.resolve(fn(...arguments));
  };
}
/* harmony default export */ const storages_localStorage = (typeof localStorage === 'object' ? {
  getItem: withPromise(localStorage.getItem),
  setItem: localStorage.setItem,
  removeItem: localStorage.removeItem,
  clear: localStorage.clear,
  getAll: withPromise(() => ({
    ...localStorage
  })),
  getMany: withPromise(keys => pick(localStorage, keys)),
  setMany: items => {
    Object.assign(localStorage, items);
  }
} : {});
;// CONCATENATED MODULE: ./src/api/storages/index.ts






const storages_storage = IS_EXTENSION ? extension : IS_CAPACITOR ? capacitorStorage : idb;
/* harmony default export */ const storages = ({
  [StorageType.IndexedDb]: idb,
  [StorageType.LocalStorage]: storages_localStorage,
  [StorageType.ExtensionLocal]: extension,
  [StorageType.CapacitorStorage]: capacitorStorage
});
;// CONCATENATED MODULE: ./src/api/common/accounts.ts


const MIN_ACCOUNT_NUMBER = 0;

// eslint-disable-next-line import/no-mutable-exports
let loginResolve;
const loginPromise = new Promise(resolve => {
  loginResolve = resolve;
});
async function getAccountIds() {
  return Object.keys((await storages_storage.getItem('accounts')) || {});
}
async function getAccountIdWithMnemonic() {
  var _Object$entries$find;
  const byId = await fetchStoredAccounts();
  return (_Object$entries$find = Object.entries(byId).find(_ref => {
    let [, account] = _ref;
    return !account.ledger;
  })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0];
}
async function getNewAccountId(network) {
  const ids = (await getAccountIds()).map(accountId => parseAccountId(accountId).id);
  const id = ids.length === 0 ? MIN_ACCOUNT_NUMBER : Math.max(...ids) + 1;
  return buildAccountId({
    id,
    network,
    blockchain: 'ton'
  });
}
async function fetchStoredPublicKey(accountId) {
  return (await fetchStoredAccount(accountId)).publicKey;
}
async function fetchStoredAddress(accountId) {
  return (await fetchStoredAccount(accountId)).address;
}
function fetchStoredAccount(accountId) {
  return getAccountValue(accountId, 'accounts');
}
function fetchStoredAccounts() {
  return storages_storage.getItem('accounts');
}
async function updateStoredAccount(accountId, partial) {
  const account = await fetchStoredAccount(accountId);
  return setAccountValue(accountId, 'accounts', {
    ...account,
    ...partial
  });
}
async function getAccountValue(accountId, key) {
  var _await$storage$getIte;
  return (_await$storage$getIte = await storages_storage.getItem(key)) === null || _await$storage$getIte === void 0 ? void 0 : _await$storage$getIte[accountId];
}
async function removeAccountValue(accountId, key) {
  const data = await storages_storage.getItem(key);
  if (!data) return;
  const {
    [accountId]: removedValue,
    ...restData
  } = data;
  await storages_storage.setItem(key, restData);
}
async function setAccountValue(accountId, key, value) {
  const data = await storages_storage.getItem(key);
  await storages_storage.setItem(key, {
    ...data,
    [accountId]: value
  });
}
async function removeNetworkAccountsValue(network, key) {
  const data = await storages_storage.getItem(key);
  if (!data) return;
  for (const accountId of Object.keys(data)) {
    if (parseAccountId(accountId).network === network) {
      delete data[accountId];
    }
  }
  await storages_storage.setItem(key, data);
}
async function getCurrentNetwork() {
  const accountId = await getCurrentAccountId();
  if (!accountId) return undefined;
  return parseAccountId(accountId).network;
}
async function getCurrentAccountIdOrFail() {
  const accountId = await getCurrentAccountId();
  if (!accountId) {
    throw new Error('The user is not authorized in the wallet');
  }
  return accountId;
}
function getCurrentAccountId() {
  return storages_storage.getItem('currentAccountId');
}
function waitLogin() {
  return loginPromise;
}
;// CONCATENATED MODULE: ./src/api/errors.ts
// eslint-disable-next-line max-classes-per-file


class ApiBaseError extends Error {
  constructor(message, displayError) {
    super(message);
    this.displayError = displayError;
    this.name = this.constructor.name;
  }
}
class ApiUserRejectsError extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Canceled by the user';
    super(message);
  }
}
class ApiServerError extends ApiBaseError {
  constructor(message) {
    super(message, ApiCommonError.ServerError);
  }
}
function maybeApiErrors(fn) {
  return async function () {
    try {
      return await fn(...arguments);
    } catch (err) {
      return handleServerError(err);
    }
  };
}
function handleServerError(err) {
  if (err instanceof ApiServerError) {
    return {
      error: err.displayError
    };
  }
  throw err;
}
;// CONCATENATED MODULE: ./src/api/common/utils.ts
/* provided dependency */ var Buffer = __webpack_require__(8764)["lW"];


function sha256(bytes) {
  return crypto.subtle.digest('SHA-256', bytes);
}
function bytesToHex(bytes) {
  return Buffer.from(bytes).toString('hex');
}
function hexToBytes(hex) {
  return Uint8Array.from(Buffer.from(hex, 'hex'));
}
function bytesToBase64(bytes) {
  return Buffer.from(bytes).toString('base64');
}
function base64ToBytes(base64) {
  return Uint8Array.from(Buffer.from(base64, 'base64'));
}
function base64ToString(base64) {
  return Buffer.from(base64, 'base64').toString('utf-8');
}
function handleFetchErrors(response, ignoreHttpCodes) {
  if (!response.ok && !(ignoreHttpCodes !== null && ignoreHttpCodes !== void 0 && ignoreHttpCodes.includes(response.status))) {
    throw new Error(response.statusText);
  }
  return response;
}
function isKnownStakingPool(address) {
  return STAKING_POOLS.some(poolPart => address.endsWith(poolPart));
}
async function fetchJson(url, data, init) {
  const urlObject = new URL(url);
  if (data) {
    Object.entries(data).forEach(_ref => {
      let [key, value] = _ref;
      if (value === undefined) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach(item => {
          urlObject.searchParams.append(key, item.toString());
        });
      } else {
        urlObject.searchParams.set(key, value.toString());
      }
    });
  }
  const response = await fetch(urlObject, init);
  if (!response.ok) {
    throw new ApiServerError(`Http error ${response.status}`);
  }
  return response.json();
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/auth.ts





function generateMnemonic() {
  return web.generateMnemonic();
}
function validateMnemonic(mnemonic) {
  return web.validateMnemonic(mnemonic);
}
async function mnemonicToSeed(mnemonic) {
  const keyPair = await web.mnemonicToKeyPair(mnemonic);
  return bytesToBase64(keyPair.secretKey.slice(0, 32));
}
function seedToKeyPair(seed) {
  return nacl_fast_default().sign.keyPair.fromSeed(base64ToBytes(seed));
}
async function encryptMnemonic(mnemonic, password) {
  const plaintext = mnemonic.join(',');
  const pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); // hash the password
  const iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv
  const alg = {
    name: 'AES-GCM',
    iv
  }; // specify algorithm to use
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']); // generate key from pw
  const ptUint8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8
  const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8); // encrypt plaintext using key
  const ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array
  const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join(''); // ciphertext as string
  // TODO Try `ctArray.toString('base64')` or `ctBuffer.toString('base64')`
  const ctBase64 = btoa(ctStr); // encode ciphertext as base64
  const ivHex = Array.from(iv).map(b => `00${b.toString(16)}`.slice(-2)).join(''); // iv as hex string

  return ivHex + ctBase64; // return iv+ciphertext
}

async function decryptMnemonic(encrypted, password) {
  const pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); // hash the password
  const iv = encrypted.slice(0, 24).match(/.{2}/g).map(byte => parseInt(byte, 16)); // get iv from ciphertext
  const alg = {
    name: 'AES-GCM',
    iv: new Uint8Array(iv)
  }; // specify algorithm to use
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']); // use pw to generate key
  const ctStr = atob(encrypted.slice(24)); // decode base64 ciphertext
  const ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(ch => ch.charCodeAt(0))); // ciphertext as Uint8Array
  // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?
  const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8); // decrypt ciphertext using key
  const plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8
  return plaintext.split(',');
}
async function fetchMnemonic(accountId, password) {
  try {
    const mnemonicEncrypted = await getAccountValue(accountId, 'mnemonicsEncrypted');
    return await decryptMnemonic(mnemonicEncrypted, password);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  }
}
async function fetchPrivateKey(accountId, password) {
  try {
    const mnemonic = await fetchMnemonic(accountId, password);
    if (!mnemonic) {
      return undefined;
    }
    const seedBase64 = await mnemonicToSeed(mnemonic);
    const {
      secretKey: privateKey
    } = seedToKeyPair(seedBase64);
    return privateKey;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  }
}
async function fetchKeyPair(accountId, password) {
  try {
    const mnemonic = await fetchMnemonic(accountId, password);
    if (!mnemonic) {
      return undefined;
    }
    return await web.mnemonicToKeyPair(mnemonic);
  } catch (err) {
    logDebugError('fetchKeyPair', err);
    return undefined;
  }
}
async function rawSign(accountId, password, dataHex) {
  const privateKey = await fetchPrivateKey(accountId, password);
  if (!privateKey) {
    return undefined;
  }
  const signature = nacl_fast_default().sign.detached(hexToBytes(dataHex), privateKey);
  return bytesToHex(signature);
}
async function verifyPassword(accountId, password) {
  const mnemonic = await fetchMnemonic(accountId, password);
  return Boolean(mnemonic);
}
// EXTERNAL MODULE: ./node_modules/tonapi-sdk-js/dist/index.js
var tonapi_sdk_js_dist = __webpack_require__(3824);
;// CONCATENATED MODULE: ./src/util/fetchWithTimeout.ts

async function fetchWithTimeout(url, init) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_API_TIMEOUT;
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal
    });
  } finally {
    clearTimeout(id);
  }
}
/* harmony default export */ const util_fetchWithTimeout = (fetchWithTimeout);
;// CONCATENATED MODULE: ./src/api/environment.ts
/*
 * This module is to be used instead of /src/util/environment.ts
 * when `window` is not available (e.g. in a web worker).
 */


const ELECTRON_ORIGIN = 'file://';
let environment;
function setEnvironment(args) {
  var _self;
  environment = {
    ...args,
    isDappSupported: IS_EXTENSION || IS_CAPACITOR || args.isElectron,
    isSseSupported: args.isElectron || IS_CAPACITOR && !args.isNativeBottomSheet,
    // eslint-disable-next-line no-restricted-globals
    apiHeaders: {
      'X-App-Origin': args.isElectron ? ELECTRON_ORIGIN : (_self = self) === null || _self === void 0 ? void 0 : _self.origin
    },
    tonhttpapiMainnetKey: args.isElectron ? ELECTRON_TONHTTPAPI_MAINNET_API_KEY : TONHTTPAPI_MAINNET_API_KEY,
    tonhttpapiTestnetKey: args.isElectron ? ELECTRON_TONHTTPAPI_TESTNET_API_KEY : TONHTTPAPI_TESTNET_API_KEY
  };
  return environment;
}
function getEnvironment() {
  return environment;
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/tonapiio.ts




const MAX_LIMIT = 500;
const EVENTS_LIMIT = 100;
let apiByNetwork;
function getApi(network) {
  if (!apiByNetwork) {
    const headers = {
      ...getEnvironment().apiHeaders,
      'Content-Type': 'application/json'
    };
    apiByNetwork = {
      mainnet: new tonapi_sdk_js_dist/* Api */.V0(new tonapi_sdk_js_dist/* HttpClient */.eN({
        baseUrl: TONAPIIO_MAINNET_URL,
        baseApiParams: {
          headers
        },
        customFetch: util_fetchWithTimeout
      })),
      testnet: new tonapi_sdk_js_dist/* Api */.V0(new tonapi_sdk_js_dist/* HttpClient */.eN({
        baseUrl: TONAPIIO_TESTNET_URL,
        baseApiParams: {
          headers
        },
        customFetch: util_fetchWithTimeout
      }))
    };
  }
  return apiByNetwork[network];
}
async function fetchJettonBalances(network, account) {
  return (await getApi(network).accounts.getAccountJettonsBalances(account)).balances;
}
async function fetchNftItems(network, addresses) {
  return (await getApi(network).nft.getNftItemsByAddresses({
    account_ids: addresses
  })).nft_items;
}
async function fetchAccountNfts(network, address, options) {
  const {
    collection,
    offset,
    limit
  } = options !== null && options !== void 0 ? options : {};
  return (await getApi(network).accounts.getAccountNftItems(address, {
    offset: offset !== null && offset !== void 0 ? offset : 0,
    limit: limit !== null && limit !== void 0 ? limit : MAX_LIMIT,
    indirect_ownership: true,
    collection
  })).nft_items;
}
async function fetchAccountEvents(network, address, fromSec, limit) {
  return (await getApi(network).accounts.getAccountEvents(address, {
    limit: limit !== null && limit !== void 0 ? limit : EVENTS_LIMIT,
    start_date: fromSec
  })).events;
}
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var core_dist = __webpack_require__(6104);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R1.js
var WalletContractV1R1 = __webpack_require__(309);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R2.js
var WalletContractV1R2 = __webpack_require__(8795);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R3.js
var WalletContractV1R3 = __webpack_require__(42);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R1.js
var WalletContractV2R1 = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R2.js
var WalletContractV2R2 = __webpack_require__(2467);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R1.js
var WalletContractV3R1 = __webpack_require__(7700);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R2.js
var WalletContractV3R2 = __webpack_require__(3182);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV4.js
var WalletContractV4 = __webpack_require__(7845);
;// CONCATENATED MODULE: ./src/util/withCacheAsync.ts
const withCacheAsync_cache = new WeakMap();
function withCacheAsync(fn) {
  let canBeCached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => !!value;
  return async function () {
    let fnCache = withCacheAsync_cache.get(fn);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const cacheKey = buildCacheKey(args);
    if (fnCache) {
      const cached = fnCache.get(cacheKey);
      if (cached) {
        return cached;
      }
    } else {
      fnCache = new Map();
      withCacheAsync_cache.set(fn, fnCache);
    }
    const newValue = await fn(...args);
    if (canBeCached(newValue)) {
      fnCache.set(cacheKey, newValue);
    }
    return newValue;
  };
}
function buildCacheKey(args) {
  return args.reduce((cacheKey, arg) => {
    return `${cacheKey}_${typeof arg === 'object' ? JSON.stringify(args) : arg}`;
  }, '');
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/contracts/JettonConstants.ts
function JettonConstants_defineProperty(obj, key, value) { key = JettonConstants_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function JettonConstants_toPropertyKey(arg) { var key = JettonConstants_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function JettonConstants_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// eslint-disable-next-line max-classes-per-file
class Op {}
JettonConstants_defineProperty(Op, "transfer", 0xf8a7ea5);
JettonConstants_defineProperty(Op, "transfer_notification", 0x7362d09c);
JettonConstants_defineProperty(Op, "internal_transfer", 0x178d4519);
JettonConstants_defineProperty(Op, "excesses", 0xd53276db);
JettonConstants_defineProperty(Op, "burn", 0x595f07bc);
JettonConstants_defineProperty(Op, "burn_notification", 0x7bdd97de);
JettonConstants_defineProperty(Op, "provide_wallet_address", 0x2c76b973);
JettonConstants_defineProperty(Op, "take_wallet_address", 0xd1735400);
JettonConstants_defineProperty(Op, "mint", 21);
JettonConstants_defineProperty(Op, "change_admin", 3);
JettonConstants_defineProperty(Op, "change_content", 4);
class Errors {}
JettonConstants_defineProperty(Errors, "invalid_op", 709);
JettonConstants_defineProperty(Errors, "not_admin", 73);
JettonConstants_defineProperty(Errors, "unouthorized_burn", 74);
JettonConstants_defineProperty(Errors, "discovery_fee_not_matched", 75);
JettonConstants_defineProperty(Errors, "wrong_op", 0xffff);
JettonConstants_defineProperty(Errors, "not_owner", 705);
JettonConstants_defineProperty(Errors, "not_enough_ton", 709);
JettonConstants_defineProperty(Errors, "not_enough_gas", 707);
JettonConstants_defineProperty(Errors, "not_valid_wallet", 707);
JettonConstants_defineProperty(Errors, "wrong_workchain", 333);
JettonConstants_defineProperty(Errors, "balance_error", 706);
;// CONCATENATED MODULE: ./src/api/blockchains/ton/contracts/JettonMaster.ts


function jettonMinterConfigToCell(config) {
  return (0,core_dist.beginCell)().storeCoins(0).storeAddress(config.admin).storeRef(config.content).storeRef(config.wallet_code).endCell();
}
function jettonContentToCell(content) {
  return beginCell().storeUint(content.type, 8).storeStringTail(content.uri) // Snake logic under the hood
  .endCell();
}
class JettonMinter {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonMinter(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonMinterConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonMinter((0,core_dist.contractAddress)(workchain, init), init);
  }

  // eslint-disable-next-line class-methods-use-this
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: (0,core_dist.beginCell)().endCell()
    });
  }
  static jettonInternalTransfer(jetton_amount, forward_ton_amount, response_addr) {
    let query_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return (0,core_dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(query_id, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(response_addr).storeCoins(forward_ton_amount).storeBit(false).endCell();
  }
  static mintMessage(from, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    let query_id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    const mintMsg = (0,core_dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(0, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(from) // Response addr
    .storeCoins(forward_ton_amount).storeMaybeRef(undefined).endCell();
    return (0,core_dist.beginCell)().storeUint(Op.mint, 32).storeUint(query_id, 64) // op, queryId
    .storeAddress(to).storeCoins(total_ton_amount).storeCoins(jetton_amount).storeRef(mintMsg).endCell();
  }
  async sendMint(provider, via, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    if (total_ton_amount <= forward_ton_amount) {
      throw new Error('Total ton amount should be > forward amount');
    }
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.mintMessage(this.address, to, jetton_amount, forward_ton_amount, total_ton_amount),
      value: total_ton_amount + (0,core_dist.toNano)('0.015')
    });
  }

  /* provide_wallet_address#2c76b973 query_id:uint64 owner_address:MsgAddress include_address:Bool = InternalMsgBody;
  */
  static discoveryMessage(owner, include_address) {
    return (0,core_dist.beginCell)().storeUint(0x2c76b973, 32).storeUint(0, 64) // op, queryId
    .storeAddress(owner).storeBit(include_address).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendDiscovery(provider, via, owner, include_address) {
    let value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0,core_dist.toNano)('0.1');
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.discoveryMessage(owner, include_address),
      value
    });
  }
  static changeAdminMessage(newOwner) {
    return (0,core_dist.beginCell)().storeUint(Op.change_admin, 32).storeUint(0, 64) // op, queryId
    .storeAddress(newOwner).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendChangeAdmin(provider, via, newOwner) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.changeAdminMessage(newOwner),
      value: (0,core_dist.toNano)('0.05')
    });
  }
  static changeContentMessage(content) {
    return (0,core_dist.beginCell)().storeUint(Op.change_content, 32).storeUint(0, 64) // op, queryId
    .storeRef(content).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendChangeContent(provider, via, content) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.changeContentMessage(content),
      value: (0,core_dist.toNano)('0.05')
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async getWalletAddress(provider, owner) {
    const res = await provider.get('get_wallet_address', [{
      type: 'slice',
      cell: (0,core_dist.beginCell)().storeAddress(owner).endCell()
    }]);
    return res.stack.readAddress();
  }

  // eslint-disable-next-line class-methods-use-this
  async getJettonData(provider) {
    const res = await provider.get('get_jetton_data', []);
    const totalSupply = res.stack.readBigNumber();
    const mintable = res.stack.readBoolean();
    const adminAddress = res.stack.readAddress();
    const content = res.stack.readCell();
    const walletCode = res.stack.readCell();
    return {
      totalSupply,
      mintable,
      adminAddress,
      content,
      walletCode
    };
  }
  async getTotalSupply(provider) {
    const res = await this.getJettonData(provider);
    return res.totalSupply;
  }
  async getAdminAddress(provider) {
    const res = await this.getJettonData(provider);
    return res.adminAddress;
  }
  async getContent(provider) {
    const res = await this.getJettonData(provider);
    return res.content;
  }
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/contracts/JettonWallet.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function jettonWalletConfigToCell(config) {
  return (0,core_dist.beginCell)().endCell();
}
class JettonWallet {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonWallet(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonWalletConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonWallet((0,core_dist.contractAddress)(workchain, init), init);
  }

  // eslint-disable-next-line class-methods-use-this
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: (0,core_dist.beginCell)().endCell()
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async getJettonBalance(provider) {
    const state = await provider.getState();
    if (state.state.type !== 'active') {
      return 0n;
    }
    const res = await provider.get('get_wallet_data', []);
    return res.stack.readBigNumber();
  }
  static transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    return (0,core_dist.beginCell)().storeUint(0xf8a7ea5, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(to).storeAddress(responseAddress).storeMaybeRef(customPayload).storeCoins(forward_ton_amount).storeMaybeRef(forwardPayload).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendTransfer(provider, via, value, jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload),
      value
    });
  }

  /*
    burn#595f07bc query_id:uint64 amount:(VarUInteger 16)
                  response_destination:MsgAddress custom_payload:(Maybe ^Cell)
                  = InternalMsgBody;
  */
  static burnMessage(jetton_amount, responseAddress, customPayload) {
    return (0,core_dist.beginCell)().storeUint(0x595f07bc, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(responseAddress).storeMaybeRef(customPayload).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendBurn(provider, via, value, jetton_amount, responseAddress, customPayload) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.burnMessage(jetton_amount, responseAddress, customPayload),
      value
    });
  }

  /*
    withdraw_tons#107c49ef query_id:uint64 = InternalMsgBody;
  */
  static withdrawTonsMessage() {
    return (0,core_dist.beginCell)().storeUint(0x6d8e5e3c, 32).storeUint(0, 64) // op, queryId
    .endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendWithdrawTons(provider, via) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.withdrawTonsMessage(),
      value: (0,core_dist.toNano)('0.1')
    });
  }

  /*
    withdraw_jettons#10 query_id:uint64 wallet:MsgAddressInt amount:Coins = InternalMsgBody;
  */
  static withdrawJettonsMessage(from, amount) {
    return (0,core_dist.beginCell)().storeUint(0x768a50b2, 32).storeUint(0, 64) // op, queryId
    .storeAddress(from).storeCoins(amount).storeMaybeRef(undefined).endCell();
  }

  // eslint-disable-next-line class-methods-use-this
  async sendWithdrawJettons(provider, via, from, amount) {
    await provider.internal(via, {
      sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.withdrawJettonsMessage(from, amount),
      value: (0,core_dist.toNano)('0.1')
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async getWalletData(provider) {
    const res = await provider.get('get_wallet_data', []);
    const balance = res.stack.readBigNumber();
    const owner = res.stack.readAddress();
    const minter = res.stack.readAddress();
    const code = res.stack.readCell();
    return {
      balance,
      owner,
      minter,
      code
    };
  }
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/constants.ts
const TOKEN_TRANSFER_TON_AMOUNT = 100000000n; // 0.1 TON
const TOKEN_TRANSFER_TON_FORWARD_AMOUNT = 1n; // 0.000000001 TON

const STAKE_COMMENT = 'd';
const UNSTAKE_COMMENT = 'w';
const ATTEMPTS = 5;
const DEFAULT_DECIMALS = 9;
const DEFAULT_IS_BOUNCEABLE = false;

// Fee may change, so we add 5% for more reliability. This is only safe for low-fee blockchains such as TON.
const FEE_FACTOR = 1.05;
const LEDGER_SUPPORTED_PAYLOADS = ['nft:transfer', 'tokens:transfer', 'comment'];
const ALL_WALLET_VERSIONS = ['simpleR1', 'simpleR2', 'simpleR3', 'v2R1', 'v2R2', 'v3R1', 'v3R2', 'v4R2'];
let OpCode = /*#__PURE__*/function (OpCode) {
  OpCode[OpCode["Comment"] = 0] = "Comment";
  OpCode[OpCode["Encrypted"] = 560454219] = "Encrypted";
  return OpCode;
}({});
let JettonOpCode = /*#__PURE__*/function (JettonOpCode) {
  JettonOpCode[JettonOpCode["Transfer"] = 260734629] = "Transfer";
  JettonOpCode[JettonOpCode["TransferNotification"] = 1935855772] = "TransferNotification";
  JettonOpCode[JettonOpCode["InternalTransfer"] = 395134233] = "InternalTransfer";
  JettonOpCode[JettonOpCode["Excesses"] = 3576854235] = "Excesses";
  JettonOpCode[JettonOpCode["Burn"] = 1499400124] = "Burn";
  JettonOpCode[JettonOpCode["BurnNotification"] = 2078119902] = "BurnNotification";
  return JettonOpCode;
}({});
let NftOpCode = /*#__PURE__*/function (NftOpCode) {
  NftOpCode[NftOpCode["TransferOwnership"] = 1607220500] = "TransferOwnership";
  return NftOpCode;
}({});
let LiquidStakingOpCode = /*#__PURE__*/function (LiquidStakingOpCode) {
  LiquidStakingOpCode[LiquidStakingOpCode["RequestLoan"] = 3863136613] = "RequestLoan";
  LiquidStakingOpCode[LiquidStakingOpCode["LoanRepayment"] = 3755778683] = "LoanRepayment";
  LiquidStakingOpCode[LiquidStakingOpCode["Deposit"] = 1205158801] = "Deposit";
  LiquidStakingOpCode[LiquidStakingOpCode["Withdraw"] = 832244956] = "Withdraw";
  LiquidStakingOpCode[LiquidStakingOpCode["Withdrawal"] = 175592284] = "Withdrawal";
  LiquidStakingOpCode[LiquidStakingOpCode["DeployController"] = 2994658477] = "DeployController";
  LiquidStakingOpCode[LiquidStakingOpCode["Touch"] = 1271382751] = "Touch";
  LiquidStakingOpCode[LiquidStakingOpCode["Donate"] = 1940913697] = "Donate";
  LiquidStakingOpCode[LiquidStakingOpCode["DistributedAsset"] = 3678112445] = "DistributedAsset";
  return LiquidStakingOpCode;
}({});
let ContractType = /*#__PURE__*/function (ContractType) {
  ContractType["Wallet"] = "wallet";
  ContractType["Staking"] = "staking";
  return ContractType;
}({});
const KnownContracts = {
  simpleR1: {
    name: 'simpleR1',
    hash: '3232dc55b02b3d2a9485adc151cf29c50b94c374d3571cb59390d761b87af8bd',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  simpleR2: {
    name: 'simpleR2',
    hash: '672ce2b01d2fd487a5e0528611e7e4fc11867148cc13ff772bd773b72fb368df',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  simpleR3: {
    name: 'simpleR3',
    hash: 'd95417233f66ae218317f533630cbbddc677d6d893d5722be6947c8fad8e9d52',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v2R1: {
    name: 'v2R1',
    hash: 'fb3bd539b7e50166f1cfdc0bbd298b1c88f6b261fe5ee61343ea47ab4b256029',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v2R2: {
    name: 'v2R2',
    hash: 'b584b6106753b7f34709df505be603e463a44ff6a85adf7fec4e26453c325983',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v3R1: {
    name: 'v3R1',
    hash: '11d123ed5c2055128e75a9ef4cf1e837e6d14a9c079c39939885c78dc13626e6',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v3R2: {
    name: 'v3R2',
    hash: 'df7bf014ee7ac0c38da19ef1b7fa054e2cc7a4513df1f1aa295109cf3606ac14',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v4R1: {
    name: 'v4R1',
    hash: '1bc0dfa40956c911616f8a5db09ecc217601bae48d7d3f9311562c5afcb66dcf',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  v4R2: {
    name: 'v4R2',
    hash: '5659ce2300f4a09a37b0bdee41246ded52474f032c1d6ffce0d7d31b18b7b2b1',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  highloadV2: {
    name: 'highloadV2',
    hash: 'fcd7d1f3b3847f0b9bd44bc64a2256c03450979dd1646a24fbc874b075392d6e',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  nominatorPool: {
    name: 'nominatorPool',
    hash: 'bffbc2310c6c535fe7271667fd3352a1151d097905c052701c5c98bf45487f08',
    type: ContractType.Staking,
    isLedgerAllowed: true
  },
  multisig: {
    name: 'multisig',
    hash: '45d890485cdd6b152bcbbe3fb2e16d2df82f6da840440a5b9f34ea13cb0b92d2',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  multisigV2: {
    name: 'multisigV2',
    hash: 'eb1323c5544d5bf26248dc427d108d722d5c2922dd97dd0bdf903c4cea73ca97',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  },
  vesting: {
    name: 'vesting',
    hash: '69dc931958f7aa203c4a7bfcf263d25d2d828d573184b542a65dd55c8398ad83',
    type: ContractType.Wallet,
    isLedgerAllowed: true
  }
};
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/client/TonClient.js
var client_TonClient = __webpack_require__(874);
// EXTERNAL MODULE: ./src/lib/axios-retry/index.js
var axios_retry = __webpack_require__(9386);
var axios_retry_default = /*#__PURE__*/__webpack_require__.n(axios_retry);
;// CONCATENATED MODULE: ./src/util/schedulers.ts
function debounce(fn, ms) {
  let shouldRunFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let shouldRunLast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let waitingTimeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = undefined;
    } else if (shouldRunFirst) {
      fn(...args);
    }

    // eslint-disable-next-line no-restricted-globals
    waitingTimeout = self.setTimeout(() => {
      if (shouldRunLast) {
        fn(...args);
      }
      waitingTimeout = undefined;
    }, ms);
  };
}
function throttle(fn, ms) {
  let shouldRunFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let interval;
  let isPending;
  let args;
  return function () {
    isPending = true;
    for (var _len2 = arguments.length, _args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _args[_key2] = arguments[_key2];
    }
    args = _args;
    if (!interval) {
      if (shouldRunFirst) {
        isPending = false;
        fn(...args);
      }

      // eslint-disable-next-line no-restricted-globals
      interval = self.setInterval(() => {
        if (!isPending) {
          // eslint-disable-next-line no-restricted-globals
          self.clearInterval(interval);
          interval = undefined;
          return;
        }
        isPending = false;
        fn(...args);
      }, ms);
    }
  };
}
function throttleWithTickEnd(fn) {
  return throttleWith(onTickEnd, fn);
}
function throttleWith(schedulerFn, fn) {
  let waiting = false;
  let args;
  return function () {
    for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _args[_key3] = arguments[_key3];
    }
    args = _args;
    if (!waiting) {
      waiting = true;
      schedulerFn(() => {
        waiting = false;
        fn(...args);
      });
    }
  };
}
function onIdle(cb, timeout) {
  // eslint-disable-next-line no-restricted-globals
  if (self.requestIdleCallback) {
    // eslint-disable-next-line no-restricted-globals
    self.requestIdleCallback(cb, {
      timeout
    });
  } else {
    onTickEnd(cb);
  }
}
const pause = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
});
function rafPromise() {
  return new Promise(resolve => {
    fastRaf(resolve);
  });
}
const FAST_RAF_TIMEOUT_FALLBACK_MS = 35; // < 30 FPS

let fastRafCallbacks;
let fastRafFallbackCallbacks;
let fastRafFallbackTimeout;

// May result in an immediate execution if called from another RAF callback which was scheduled
// (and therefore is executed) earlier than RAF callback scheduled by `fastRaf`
function fastRaf(callback) {
  let withTimeoutFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!fastRafCallbacks) {
    fastRafCallbacks = new Set([callback]);
    requestAnimationFrame(() => {
      const currentCallbacks = fastRafCallbacks;
      fastRafCallbacks = undefined;
      fastRafFallbackCallbacks = undefined;
      if (fastRafFallbackTimeout) {
        clearTimeout(fastRafFallbackTimeout);
        fastRafFallbackTimeout = undefined;
      }
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    fastRafCallbacks.add(callback);
  }
  if (withTimeoutFallback) {
    if (!fastRafFallbackCallbacks) {
      fastRafFallbackCallbacks = new Set([callback]);
    } else {
      fastRafFallbackCallbacks.add(callback);
    }
    if (!fastRafFallbackTimeout) {
      fastRafFallbackTimeout = window.setTimeout(() => {
        const currentTimeoutCallbacks = fastRafFallbackCallbacks;
        if (fastRafCallbacks) {
          currentTimeoutCallbacks.forEach(fastRafCallbacks.delete, fastRafCallbacks);
        }
        fastRafFallbackCallbacks = undefined;
        if (fastRafFallbackTimeout) {
          clearTimeout(fastRafFallbackTimeout);
          fastRafFallbackTimeout = undefined;
        }
        currentTimeoutCallbacks.forEach(cb => cb());
      }, FAST_RAF_TIMEOUT_FALLBACK_MS);
    }
  }
}
let onTickEndCallbacks;
function onTickEnd(callback) {
  if (!onTickEndCallbacks) {
    onTickEndCallbacks = [callback];
    Promise.resolve().then(() => {
      const currentCallbacks = onTickEndCallbacks;
      onTickEndCallbacks = undefined;
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    onTickEndCallbacks.push(callback);
  }
}
let beforeUnloadCallbacks;
function onBeforeUnload(callback) {
  let isLast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!beforeUnloadCallbacks) {
    beforeUnloadCallbacks = [];
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('beforeunload', () => {
      beforeUnloadCallbacks.forEach(cb => cb());
    });
  }
  if (isLast) {
    beforeUnloadCallbacks.push(callback);
  } else {
    beforeUnloadCallbacks.unshift(callback);
  }
  return () => {
    beforeUnloadCallbacks = beforeUnloadCallbacks.filter(cb => cb !== callback);
  };
}
async function waitFor(cb, interval, attempts) {
  let i = 0;
  let result = cb();
  while (!result && i < attempts) {
    await pause(interval);
    i++;
    result = cb();
  }
  return result;
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/TonClient.ts
function TonClient_defineProperty(obj, key, value) { key = TonClient_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TonClient_toPropertyKey(arg) { var key = TonClient_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function TonClient_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





const TonClient_ATTEMPTS = 5;
const ERROR_PAUSE = 200; // 200 ms

axios_retry_default()((axios_default()), {
  retries: TonClient_ATTEMPTS,
  retryDelay: retryCount => {
    return retryCount * ERROR_PAUSE;
  }
});
class TonClient extends client_TonClient.TonClient {
  constructor(parameters) {
    super(parameters);
    TonClient_defineProperty(this, "initParameters", void 0);
    this.initParameters = parameters;
  }
  getWalletInfo(address) {
    return this.callRpc('getWalletInformation', {
      address
    });
  }
  getAddressInfo(address) {
    return this.callRpc('getAddressInformation', {
      address
    });
  }
  callRpc(method, params) {
    return this.sendRequest(this.parameters.endpoint, {
      id: 1,
      jsonrpc: '2.0',
      method,
      params
    });
  }
  async sendRequest(apiUrl, request) {
    const method = request.method;
    const headers = {
      ...this.initParameters.headers,
      'Content-Type': 'application/json'
    };
    if (this.parameters.apiKey) {
      headers['X-API-Key'] = this.parameters.apiKey;
    }
    const body = JSON.stringify(request);
    let message = 'Unknown error.';
    let statusCode;
    for (let i = 1; i <= TonClient_ATTEMPTS; i++) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers,
          body
        });
        statusCode = response.status;
        if (statusCode >= 400) {
          if (response.headers.get('content-type') !== 'application/json') {
            throw new Error(`HTTP Error ${statusCode}`);
          }
          const {
            error
          } = await response.json();
          throw new Error(error);
        }
        const {
          result
        } = await response.json();
        return result;
      } catch (err) {
        var _err$message;
        message = typeof err === 'string' ? err : (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : message;
        if (isNotTemporaryError(method, message, statusCode)) {
          throw new ApiServerError(message);
        }
        if (i < TonClient_ATTEMPTS) {
          await pause(ERROR_PAUSE * i);
        }
      }
    }
    throw new ApiServerError(message);
  }
}
function isNotTemporaryError(method, message, statusCode) {
  return statusCode === 422 || method === 'sendBoc' && (message === null || message === void 0 ? void 0 : message.includes('exitcode='));
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/tonCore.ts
/* provided dependency */ var tonCore_Buffer = __webpack_require__(8764)["lW"];




















(axios_default()).defaults.adapter = (__webpack_require__(7361)/* ["default"] */ .Z);
const TON_MAX_COMMENT_BYTES = 127;
let clientByNetwork;
const walletClassMap = {
  simpleR1: WalletContractV1R1/* WalletContractV1R1 */.Q,
  simpleR2: WalletContractV1R2/* WalletContractV1R2 */.W,
  simpleR3: WalletContractV1R3/* WalletContractV1R3 */.q,
  v2R1: WalletContractV2R1/* WalletContractV2R1 */.s,
  v2R2: WalletContractV2R2/* WalletContractV2R2 */.r,
  v3R1: WalletContractV3R1/* WalletContractV3R1 */.A,
  v3R2: WalletContractV3R2/* WalletContractV3R2 */.z,
  v4R2: WalletContractV4/* WalletContractV4 */.J
};
function getTonClient() {
  let network = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mainnet';
  if (!clientByNetwork) {
    clientByNetwork = {
      mainnet: new TonClient({
        endpoint: TONHTTPAPI_MAINNET_URL,
        timeout: DEFAULT_API_TIMEOUT,
        apiKey: TONHTTPAPI_MAINNET_API_KEY,
        headers: getEnvironment().apiHeaders
      }),
      testnet: new TonClient({
        endpoint: TONHTTPAPI_TESTNET_URL,
        timeout: DEFAULT_API_TIMEOUT,
        apiKey: TONHTTPAPI_TESTNET_API_KEY,
        headers: getEnvironment().apiHeaders
      })
    };
  }
  return clientByNetwork[network];
}
function getTonWalletContract(publicKeyHex, version) {
  const walletClass = walletClassMap[version];
  if (!walletClass) {
    throw new Error('Unsupported wallet contract version');
  }
  const publicKey = tonCore_Buffer.from(hexToBytes(publicKeyHex));
  return walletClass.create({
    workchain: WORKCHAIN,
    publicKey
  });
}
const resolveTokenWalletAddress = withCacheAsync(async (network, address, minterAddress) => {
  const minter = getTonClient(network).open(new JettonMinter(core_dist.Address.parse(minterAddress)));
  const walletAddress = await minter.getWalletAddress(core_dist.Address.parse(address));
  return toBase64Address(walletAddress, true);
});
const resolveTokenMinterAddress = withCacheAsync(async (network, tokenWalletAddress) => {
  const tokenWallet = getTonClient(network).open(new JettonWallet(core_dist.Address.parse(tokenWalletAddress)));
  const data = await tokenWallet.getWalletData();
  return toBase64Address(data.minter, true);
});
const getWalletPublicKey = withCacheAsync(async (network, address) => {
  try {
    const res = await getTonClient(network).callGetMethod(core_dist.Address.parse(address), 'get_public_key');
    const bigintKey = res.stack.readBigNumber();
    const hex = bigintKey.toString(16).padStart(64, '0');
    return hexToBytes(hex);
  } catch (err) {
    logDebugError('getWalletPublicKey', err);
    return undefined;
  }
});
function getJettonMinterData(network, address) {
  const contract = getTonClient(network).open(new JettonMinter(core_dist.Address.parse(address)));
  return contract.getJettonData();
}
function oneCellFromBoc(bytes) {
  return core_dist.Cell.fromBoc(tonCore_Buffer.from(bytes));
}
function toBase64Address(address) {
  let isBounceable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_IS_BOUNCEABLE;
  if (typeof address === 'string') {
    address = core_dist.Address.parse(address);
  }
  return address.toString({
    urlSafe: true,
    bounceable: isBounceable
  });
}
function toRawAddress(address) {
  if (typeof address === 'string') {
    address = core_dist.Address.parse(address);
  }
  return address.toRawString();
}
function buildTokenTransferBody(params) {
  const {
    queryId,
    tokenAmount,
    toAddress,
    responseAddress,
    forwardAmount
  } = params;
  let forwardPayload = params.forwardPayload;
  let builder = new core_dist.Builder().storeUint(JettonOpCode.Transfer, 32).storeUint(queryId || 0, 64).storeCoins(tokenAmount).storeAddress(core_dist.Address.parse(toAddress)).storeAddress(core_dist.Address.parse(responseAddress)).storeBit(false).storeCoins(forwardAmount !== null && forwardAmount !== void 0 ? forwardAmount : 0n);
  if (forwardPayload instanceof Uint8Array) {
    const freeBytes = Math.round(builder.availableBits / 8);
    forwardPayload = packBytesAsSnake(forwardPayload, freeBytes);
  }
  if (!forwardPayload) {
    builder.storeBit(false);
  } else if (typeof forwardPayload === 'string') {
    builder = builder.storeBit(false).storeUint(0, 32).storeBuffer(tonCore_Buffer.from(forwardPayload));
  } else if (forwardPayload instanceof Uint8Array) {
    builder = builder.storeBit(false).storeBuffer(tonCore_Buffer.from(forwardPayload));
  } else {
    builder = builder.storeBit(true).storeRef(forwardPayload);
  }
  return builder.endCell();
}
function parseBase64(base64) {
  try {
    return core_dist.Cell.fromBase64(base64);
  } catch (err) {
    logDebugError('parseBase64', err);
    return Uint8Array.from(tonCore_Buffer.from(base64, 'base64'));
  }
}
function commentToBytes(comment) {
  const buffer = tonCore_Buffer.from(comment);
  const bytes = new Uint8Array(buffer.length + 4);
  const startBuffer = tonCore_Buffer.alloc(4);
  startBuffer.writeUInt32BE(OpCode.Comment);
  bytes.set(startBuffer, 0);
  bytes.set(buffer, 4);
  return bytes;
}
function packBytesAsSnake(bytes) {
  let maxBytes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TON_MAX_COMMENT_BYTES;
  const buffer = tonCore_Buffer.from(bytes);
  if (buffer.length <= maxBytes) {
    return bytes;
  }
  const mainBuilder = new core_dist.Builder();
  let prevBuilder;
  let currentBuilder = mainBuilder;
  for (const [i, byte] of buffer.entries()) {
    if (currentBuilder.availableBits < 8) {
      var _prevBuilder;
      (_prevBuilder = prevBuilder) === null || _prevBuilder === void 0 ? void 0 : _prevBuilder.storeRef(currentBuilder);
      prevBuilder = currentBuilder;
      currentBuilder = new core_dist.Builder();
    }
    currentBuilder = currentBuilder.storeUint(byte, 8);
    if (i === buffer.length - 1) {
      var _prevBuilder2;
      (_prevBuilder2 = prevBuilder) === null || _prevBuilder2 === void 0 ? void 0 : _prevBuilder2.storeRef(currentBuilder);
    }
  }
  return mainBuilder.asCell();
}
function buildLiquidStakingDepositBody(queryId) {
  return new core_dist.Builder().storeUint(LiquidStakingOpCode.Deposit, 32).storeUint(queryId || 0, 64).asCell();
}
function buildLiquidStakingWithdrawBody(options) {
  const {
    queryId,
    amount,
    responseAddress,
    waitTillRoundEnd,
    fillOrKill
  } = options;
  const customPayload = new core_dist.Builder().storeUint(Number(waitTillRoundEnd), 1).storeUint(Number(fillOrKill), 1).asCell();
  return new core_dist.Builder().storeUint(JettonOpCode.Burn, 32).storeUint(queryId !== null && queryId !== void 0 ? queryId : 0, 64).storeCoins(amount).storeAddress(core_dist.Address.parse(responseAddress)).storeBit(1).storeRef(customPayload).asCell();
}
function getTokenBalance(network, walletAddress) {
  const tokenWallet = getTonClient(network).open(new JettonWallet(core_dist.Address.parse(walletAddress)));
  return tokenWallet.getJettonBalance();
}
function parseAddress(address) {
  try {
    if (core_dist.Address.isRaw(address)) {
      return {
        address: core_dist.Address.parseRaw(address),
        isRaw: true,
        isValid: true
      };
    } else if (core_dist.Address.isFriendly(address)) {
      return {
        ...core_dist.Address.parseFriendly(address),
        isUserFriendly: true,
        isValid: true
      };
    }
  } catch (err) {
    // Do nothing
  }
  return {
    isValid: false
  };
}
function getIsRawAddress(address) {
  return Boolean(parseAddress(address).isRaw);
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/index.ts

function util_cloneDeep(value) {
  return JSON.parse(JSON.stringify(value), bigintReviver);
}
function stringifyTxId(_ref) {
  let {
    lt,
    hash
  } = _ref;
  return `${lt}:${hash}`;
}
function parseTxId(txId) {
  const [lt, hash] = txId.split(':');
  return {
    lt: Number(lt),
    hash
  };
}
function buildTokenSlug(minterAddress) {
  const addressPart = minterAddress.replace(/[^a-z\d]/gi, '').slice(0, 10);
  return `ton-${addressPart}`.toLowerCase();
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/wallet.ts
/* provided dependency */ var wallet_Buffer = __webpack_require__(8764)["lW"];











const isAddressInitialized = withCacheAsync(async (network, walletOrAddress) => {
  return (await getWalletInfo(network, walletOrAddress)).isInitialized;
});
const isActiveSmartContract = withCacheAsync(async (network, address) => {
  const {
    isInitialized,
    isWallet
  } = await getWalletInfo(network, address);
  return isInitialized ? !isWallet : undefined;
}, value => value !== undefined);
function publicKeyToAddress(network, publicKey, walletVersion) {
  const wallet = buildWallet(network, publicKey, walletVersion);
  return toBase64Address(wallet.address, false);
}
function buildWallet(network, publicKey, walletVersion) {
  const client = getTonClient(network);
  const WalletClass = walletClassMap[walletVersion];
  return client.open(WalletClass.create({
    publicKey: wallet_Buffer.from(publicKey),
    workchain: WORKCHAIN
  }));
}
async function getWalletInfo(network, walletOrAddress) {
  const address = typeof walletOrAddress === 'string' ? walletOrAddress : toBase64Address(walletOrAddress.address);
  const {
    account_state: accountState,
    wallet: isWallet,
    seqno = 0,
    balance,
    last_transaction_id: {
      lt,
      hash
    }
  } = await getTonClient(network).getWalletInfo(address);
  return {
    isInitialized: accountState === 'active',
    isWallet,
    seqno,
    balance: BigInt(balance || '0'),
    lastTxId: lt === '0' ? undefined : stringifyTxId({
      lt,
      hash
    })
  };
}
async function getContractInfo(network, address) {
  const data = await getTonClient(network).getAddressInfo(address);
  const {
    code,
    state
  } = data;
  const codeHash = wallet_Buffer.from(await sha256(base64ToBytes(code))).toString('hex');
  const contractInfo = Object.values(KnownContracts).find(info => info.hash === codeHash);
  const isInitialized = state === 'active';
  const isWallet = state === 'active' ? (contractInfo === null || contractInfo === void 0 ? void 0 : contractInfo.type) === 'wallet' : undefined;
  const isLedgerAllowed = Boolean(!isInitialized || (contractInfo === null || contractInfo === void 0 ? void 0 : contractInfo.isLedgerAllowed));
  return {
    isInitialized,
    isWallet,
    isLedgerAllowed,
    contractInfo
  };
}
async function getAccountBalance(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  return getWalletBalance(network, address);
}
async function getWalletBalance(network, walletOrAddress) {
  return (await getWalletInfo(network, walletOrAddress)).balance;
}
async function getWalletSeqno(network, walletOrAddress) {
  const {
    seqno
  } = await getWalletInfo(network, walletOrAddress);
  return seqno || 0;
}
async function pickBestWallet(network, publicKey) {
  const allWallets = await getWalletVersionInfos(network, publicKey);
  const withBiggestBalance = allWallets.reduce((best, current) => {
    return best && best.balance > current.balance ? best : current;
  }, undefined);
  if (!withBiggestBalance || !withBiggestBalance.balance) {
    const version = DEFAULT_WALLET_VERSION;
    const wallet = buildWallet(network, publicKey, version);
    return {
      wallet,
      version,
      balance: 0n
    };
  }
  return withBiggestBalance;
}
function getWalletVersionInfos(network, publicKey) {
  let versions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ALL_WALLET_VERSIONS;
  return Promise.all(versions.map(async version => {
    const wallet = buildWallet(network, publicKey, version);
    const address = toBase64Address(wallet.address, false);
    const walletInfo = await getWalletInfo(network, wallet);
    return {
      wallet,
      address,
      version,
      ...pick(walletInfo, ['isInitialized', 'balance', 'lastTxId'])
    };
  }));
}
function getWalletVersions(network, publicKey) {
  let versions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ALL_WALLET_VERSIONS;
  return versions.map(version => {
    const wallet = buildWallet(network, publicKey, version);
    const address = toBase64Address(wallet.address, false);
    return {
      wallet,
      address,
      version
    };
  });
}
async function getWalletStateInit(accountId) {
  const wallet = await pickAccountWallet(accountId);
  return (0,core_dist.beginCell)().storeWritable((0,core_dist.storeStateInit)(wallet.init)).endCell();
}
function pickWalletByAddress(network, publicKey, address) {
  address = toBase64Address(address, false);
  const allWallets = getWalletVersions(network, publicKey);
  return allWallets.find(w => w.address === address);
}
async function pickAccountWallet(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    publicKey,
    version
  } = await fetchStoredAccount(accountId);
  const publicKeyBytes = hexToBytes(publicKey);
  return buildWallet(network, publicKeyBytes, version);
}
function resolveWalletVersion(wallet) {
  var _Object$entries$find;
  return (_Object$entries$find = Object.entries(walletClassMap).find(_ref => {
    let [, walletClass] = _ref;
    return wallet instanceof walletClass;
  })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0];
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/nfts.ts






async function getAccountNfts(accountId, offset, limit) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const rawNfts = await fetchAccountNfts(network, address, {
    offset,
    limit
  });
  return compact(rawNfts.map(buildNft));
}
function buildNft(rawNft) {
  if (!rawNft.metadata) {
    return undefined;
  }
  try {
    const {
      address,
      index,
      collection,
      metadata: {
        name,
        image,
        description,
        render_type: renderType
      },
      previews,
      sale
    } = rawNft;
    const isHidden = renderType === 'hidden' || description === 'SCAM';
    return {
      index,
      name,
      address: toBase64Address(address, true),
      image,
      thumbnail: previews.find(x => x.resolution === '500x500').url,
      isOnSale: Boolean(sale),
      isHidden,
      ...(collection && {
        collectionAddress: toBase64Address(collection.address, true),
        collectionName: collection.name
      })
    };
  } catch (err) {
    return undefined;
  }
}
async function getNftUpdates(accountId, fromSec) {
  var _events$0$timestamp, _events$;
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const events = await fetchAccountEvents(network, address, fromSec);
  fromSec = (_events$0$timestamp = (_events$ = events[0]) === null || _events$ === void 0 ? void 0 : _events$.timestamp) !== null && _events$0$timestamp !== void 0 ? _events$0$timestamp : fromSec;
  events.reverse();
  const updates = [];
  for (const event of events) {
    for (const action of event.actions) {
      let to;
      let nftAddress;
      let rawNft;
      const isPurchase = !!action.NftPurchase;
      if (action.NftItemTransfer) {
        const {
          sender,
          recipient,
          nft: rawNftAddress
        } = action.NftItemTransfer;
        if (!sender || !recipient) continue;
        to = toBase64Address(recipient.address);
        nftAddress = toBase64Address(rawNftAddress, true);
      } else if (action.NftPurchase) {
        const {
          buyer
        } = action.NftPurchase;
        to = toBase64Address(buyer.address);
        rawNft = action.NftPurchase.nft;
        if (!rawNft) {
          continue;
        }
        nftAddress = toBase64Address(rawNft.address, true);
      } else {
        continue;
      }
      if (to === address) {
        if (!rawNft) {
          [rawNft] = await fetchNftItems(network, [nftAddress]);
        }
        if (rawNft) {
          const nft = buildNft(rawNft);
          if (nft) {
            updates.push({
              type: 'nftReceived',
              accountId,
              nftAddress,
              nft
            });
          }
        }
      } else if (!isPurchase && (await isActiveSmartContract(network, to))) {
        updates.push({
          type: 'nftPutUpForSale',
          accountId,
          nftAddress
        });
      } else {
        updates.push({
          type: 'nftSent',
          accountId,
          nftAddress
        });
      }
    }
  }
  return [fromSec, updates];
}
;// CONCATENATED MODULE: ./src/util/compareActivities.ts
function compareActivities(a, b) {
  let isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let value = a.timestamp - b.timestamp;
  if (value === 0) {
    value = a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
  }
  return isAsc ? value : -value;
}
;// CONCATENATED MODULE: ./src/util/stringFormat.ts
function isAscii(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) {
      return false;
    }
  }
  return true;
}
function insertSubstring(str, start, newSubStr) {
  if (start < 0) {
    start = str.length - start;
  }
  return str.slice(0, start) + newSubStr + str.slice(start);
}
;// CONCATENATED MODULE: ./src/util/ledger/utils.ts

const MAX_COMMENT_SIZE = 120;
function isValidLedgerComment(comment) {
  return isAscii(comment) && isLedgerCommentLengthValid(comment);
}
function isLedgerCommentLengthValid(comment) {
  return comment.length <= MAX_COMMENT_SIZE;
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/apiV3.ts






const ADDRESS_BOOK_CHUNK_SIZE = 128;
async function fetchTransactions(network, address, limit, toTxId, fromTxId) {
  const fromLt = fromTxId ? parseTxId(fromTxId).lt.toString() : undefined;
  const toLt = toTxId ? parseTxId(toTxId).lt.toString() : undefined;
  const data = await callApiV3(network, '/transactions', {
    account: address,
    limit,
    start_lt: fromLt,
    end_lt: toLt,
    sort: 'desc'
  });
  let {
    transactions: rawTransactions
  } = data;
  const {
    address_book: addressBook
  } = data;
  if (!rawTransactions.length) {
    return [];
  }
  if (limit > 1) {
    var _rawTransactions$;
    if (fromLt && rawTransactions[rawTransactions.length - 1].lt === fromLt) {
      rawTransactions.pop();
    }
    if (toLt && ((_rawTransactions$ = rawTransactions[0]) === null || _rawTransactions$ === void 0 ? void 0 : _rawTransactions$.lt) === toLt) {
      rawTransactions = rawTransactions.slice(1);
    }
  }
  return rawTransactions.map(rawTx => parseRawTransaction(rawTx, addressBook)).flat();
}
function parseRawTransaction(rawTx, addressBook) {
  const {
    now,
    lt,
    hash,
    total_fees: fee
  } = rawTx;
  const txId = stringifyTxId({
    lt,
    hash
  });
  const timestamp = now * 1000;
  const isIncoming = !!rawTx.in_msg.source;
  const msgs = isIncoming ? [rawTx.in_msg] : rawTx.out_msgs;
  if (!msgs.length) return [];
  return msgs.map((msg, i) => {
    const {
      source,
      destination,
      value
    } = msg;
    const fromAddress = addressBook[source].user_friendly;
    const toAddress = addressBook[destination].user_friendly;
    const normalizedAddress = toBase64Address(isIncoming ? source : destination, true);
    return {
      txId: msgs.length > 1 ? `${txId}:${i + 1}` : txId,
      timestamp,
      isIncoming,
      fromAddress,
      toAddress,
      amount: isIncoming ? BigInt(value) : -BigInt(value),
      slug: TON_TOKEN_SLUG,
      fee: BigInt(fee),
      normalizedAddress,
      extraData: {
        body: getRawBody(msg)
      }
    };
  });
}
async function fetchLatestTxId(network, address) {
  const {
    transactions
  } = await callApiV3(network, '/transactions', {
    account: address,
    limit: 1,
    sort: 'desc'
  });
  if (!transactions.length) {
    return undefined;
  }
  const {
    lt,
    hash
  } = transactions[0];
  return stringifyTxId({
    lt,
    hash
  });
}
function getRawBody(msg) {
  if (!msg.message_content) return undefined;
  return msg.message_content.body;
}
async function fetchAddressBook(network, addresses) {
  const chunks = split(addresses, ADDRESS_BOOK_CHUNK_SIZE);
  const results = await Promise.all(chunks.map(chunk => {
    return callApiV3(network, '/addressBook', {
      address: chunk
    });
  }));
  return results.reduce((acc, value) => {
    return Object.assign(acc, value);
  }, {});
}
function callApiV3(network, path, data) {
  const {
    apiHeaders,
    tonhttpapiMainnetKey,
    tonhttpapiTestnetKey
  } = getEnvironment();
  const baseUrl = network === 'testnet' ? TONHTTPAPI_V3_TESTNET_API_URL : TONHTTPAPI_V3_MAINNET_API_URL;
  const apiKey = network === 'testnet' ? tonhttpapiTestnetKey : tonhttpapiMainnetKey;
  return fetchJson(`${baseUrl}${path}`, data, {
    headers: {
      ...(apiKey && {
        'X-Api-Key': apiKey
      }),
      ...apiHeaders
    }
  });
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/encryption.ts
/* provided dependency */ var encryption_Buffer = __webpack_require__(8764)["lW"];
// This JS library implements TON message comment encryption and decryption for Web
// Reference C++ code - SimpleEncryptionV2 - https://github.com/ton-blockchain/ton/blob/cc0eb453cb3bf69f92693160103d33112856c056/tonlib/tonlib/keys/SimpleEncryption.cpp#L110
// Dependencies:
// - TonWeb 0.0.60
// - aes-js - 3.1.2 - https://github.com/ricmoo/aes-js/releases/tag/v3.1.2 - for aes-cbc without padding
// - noble-ed25519 - 1.7.3 - // https://github.com/paulmillr/noble-ed25519/releases/tag/1.7.3 - for getSharedKey



const ed25519 = __webpack_require__(4553);
const aesjs = __webpack_require__(2310);
async function hmacSha512(key, data) {
  const hmacAlgo = {
    name: 'HMAC',
    hash: 'SHA-512'
  };
  const hmacKey = await crypto.subtle.importKey('raw', key, hmacAlgo, false, ['sign']);
  const signature = await crypto.subtle.sign(hmacAlgo, hmacKey, data);
  const result = new Uint8Array(signature);
  if (result.length !== 512 / 8) throw new Error();
  return result;
}
function getAesCbcState(hash) {
  if (hash.length < 48) throw new Error();
  const key = hash.slice(0, 32);
  const iv = hash.slice(32, 32 + 16);

  // Note that native crypto.subtle AES-CBC not suitable here because
  // even if the data IS a multiple of 16 bytes, padding will still be added
  // So we use aes-js

  // eslint-disable-next-line new-cap
  return new aesjs.ModeOfOperation.cbc(key, iv);
}
function getRandomPrefix(dataLength, minPadding) {
  // eslint-disable-next-line no-bitwise
  const prefixLength = (minPadding + 15 + dataLength & -16) - dataLength;
  const prefix = crypto.getRandomValues(new Uint8Array(prefixLength));
  prefix[0] = prefixLength;
  if ((prefixLength + dataLength) % 16 !== 0) throw new Error();
  return prefix;
}
function combineSecrets(a, b) {
  return hmacSha512(a, b);
}
async function encryptDataWithPrefix(data, sharedSecret, salt) {
  if (data.length % 16 !== 0) throw new Error();
  const dataHash = await combineSecrets(salt, data);
  const msgKey = dataHash.slice(0, 16);
  const res = new Uint8Array(data.length + 16);
  res.set(msgKey, 0);
  const cbcStateSecret = await combineSecrets(sharedSecret, msgKey);
  const encrypted = (await getAesCbcState(cbcStateSecret)).encrypt(data);
  res.set(encrypted, 16);
  return res;
}
async function encryptDataImpl(data, sharedSecret, salt) {
  const prefix = await getRandomPrefix(data.length, 16);
  const combined = new Uint8Array(prefix.length + data.length);
  combined.set(prefix, 0);
  combined.set(data, prefix.length);
  return encryptDataWithPrefix(combined, sharedSecret, salt);
}
async function encryptData(data, myPublicKey, theirPublicKey, privateKey, salt) {
  const sharedSecret = await ed25519.getSharedSecret(privateKey, theirPublicKey);
  const encrypted = await encryptDataImpl(data, sharedSecret, salt);
  const prefixedEncrypted = new Uint8Array(myPublicKey.length + encrypted.length);
  for (let i = 0; i < myPublicKey.length; i++) {
    // eslint-disable-next-line no-bitwise
    prefixedEncrypted[i] = theirPublicKey[i] ^ myPublicKey[i];
  }
  prefixedEncrypted.set(encrypted, myPublicKey.length);
  return prefixedEncrypted;
}
async function encryptMessageComment(comment, myPublicKey, theirPublicKey, myPrivateKey, senderAddress) {
  if (!comment || !comment.length) throw new Error('empty comment');
  if (myPrivateKey.length === 64) {
    myPrivateKey = myPrivateKey.slice(0, 32); // convert nacl private key
  }

  const commentBytes = new TextEncoder().encode(comment);
  const salt = new TextEncoder().encode(toBase64Address(senderAddress, true));
  const encryptedBytes = await encryptData(commentBytes, myPublicKey, theirPublicKey, myPrivateKey, salt);
  const payload = new Uint8Array(encryptedBytes.length + 4);
  const buffer = encryption_Buffer.alloc(4);
  buffer.writeUInt32BE(OpCode.Encrypted);
  payload.set(buffer, 0);
  payload.set(encryptedBytes, 4);
  return payload;
}
async function doDecrypt(cbcStateSecret, msgKey, encryptedData, salt) {
  const decryptedData = (await getAesCbcState(cbcStateSecret)).decrypt(encryptedData);
  const dataHash = await combineSecrets(salt, decryptedData);
  const gotMsgKey = dataHash.slice(0, 16);
  if (msgKey.join(',') !== gotMsgKey.join(',')) {
    throw new Error('Failed to decrypt: hash mismatch');
  }
  const prefixLength = decryptedData[0];
  if (prefixLength > decryptedData.length || prefixLength < 16) {
    throw new Error('Failed to decrypt: invalid prefix size');
  }
  return decryptedData.slice(prefixLength);
}
async function decryptDataImpl(encryptedData, sharedSecret, salt) {
  if (encryptedData.length < 16) throw new Error('Failed to decrypt: data is too small');
  if (encryptedData.length % 16 !== 0) throw new Error('Failed to decrypt: data size is not divisible by 16');
  const msgKey = encryptedData.slice(0, 16);
  const data = encryptedData.slice(16);
  const cbcStateSecret = await combineSecrets(sharedSecret, msgKey);
  const res = await doDecrypt(cbcStateSecret, msgKey, data, salt);
  return res;
}
async function decryptData(data, publicKey, privateKey, salt) {
  if (data.length < publicKey.length) {
    throw new Error('Failed to decrypt: data is too small');
  }
  const theirPublicKey = new Uint8Array(publicKey.length);
  for (let i = 0; i < publicKey.length; i++) {
    // eslint-disable-next-line no-bitwise
    theirPublicKey[i] = data[i] ^ publicKey[i];
  }
  const sharedSecret = await ed25519.getSharedSecret(privateKey, theirPublicKey);
  const decrypted = await decryptDataImpl(data.slice(publicKey.length), sharedSecret, salt);
  return decrypted;
}
async function decryptMessageComment(encryptedData, myPublicKey, myPrivateKey, senderAddress) {
  if (myPrivateKey.length === 64) {
    myPrivateKey = myPrivateKey.slice(0, 32); // convert nacl private key
  }

  const salt = new TextEncoder().encode(toBase64Address(senderAddress, true));
  const decryptedBytes = await decryptData(encryptedData, myPublicKey, myPrivateKey, salt);
  return new TextDecoder().decode(decryptedBytes);
}
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/BitReader.js
var BitReader = __webpack_require__(4290);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/BitString.js
var BitString = __webpack_require__(3708);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Builder.js
var Builder = __webpack_require__(6777);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Cell.js
var Cell = __webpack_require__(7768);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Slice.js
var Slice = __webpack_require__(8624);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/dict/Dictionary.js
var Dictionary = __webpack_require__(5960);
;// CONCATENATED MODULE: ./src/util/metadata.ts

const IPFS_GATEWAY_BASE_URL = 'https://ipfs.io/ipfs/';
function fetchJsonMetadata(url) {
  url = fixIpfsUrl(url);
  const reserveUrl = `${BRILLIANT_API_BASE_URL}/utils/download-json?url=${url}`;
  if (IS_CAPACITOR) {
    return metadata_fetchJson(reserveUrl);
  }
  return metadata_fetchJson(url).catch(() => {
    return metadata_fetchJson(reserveUrl);
  });
}
function fixIpfsUrl(url) {
  return url.replace('ipfs://', IPFS_GATEWAY_BASE_URL);
}
async function metadata_fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(`Http error ${response.status}`);
  }
  return response.json();
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/metadata.ts
/* provided dependency */ var metadata_Buffer = __webpack_require__(8764)["lW"];















const OFFCHAIN_CONTENT_PREFIX = 0x01;
const SNAKE_PREFIX = 0x00;
function parseJettonWalletMsgBody(body) {
  if (!body) return undefined;
  try {
    let slice = Cell.Cell.fromBase64(body).beginParse();
    const opCode = slice.loadUint(32);
    const queryId = slice.loadUint(64);
    if (opCode !== JettonOpCode.Transfer && opCode !== JettonOpCode.InternalTransfer) {
      return undefined;
    }
    const jettonAmount = slice.loadCoins();
    const address = slice.loadMaybeAddress();
    const responseAddress = slice.loadMaybeAddress();
    let forwardAmount;
    let comment;
    let encryptedComment;
    if (responseAddress) {
      if (opCode === JettonOpCode.Transfer) {
        slice.loadBit();
      }
      forwardAmount = slice.loadCoins();
      const isSeparateCell = slice.remainingBits && slice.loadBit();
      if (isSeparateCell && slice.remainingRefs) {
        slice = slice.loadRef().beginParse();
      }
      if (slice.remainingBits > 32) {
        const forwardOpCode = slice.loadUint(32);
        if (forwardOpCode === OpCode.Comment) {
          const buffer = readSnakeBytes(slice);
          comment = buffer.toString('utf-8');
        } else if (forwardOpCode === OpCode.Encrypted) {
          const buffer = readSnakeBytes(slice);
          encryptedComment = buffer.toString('base64');
        }
      }
    }
    return {
      operation: JettonOpCode[opCode],
      queryId,
      jettonAmount,
      responseAddress,
      address: address ? toBase64Address(address) : undefined,
      forwardAmount,
      comment,
      encryptedComment
    };
  } catch (err) {
    logDebugError('parseJettonWalletMsgBody', err);
  }
  return undefined;
}
function fixBase64ImageData(data) {
  const decodedData = base64ToString(data);
  if (decodedData.includes('<svg')) {
    return `data:image/svg+xml;base64,${data}`;
  }
  return `data:image/png;base64,${data}`;
}
const dictSnakeBufferValue = {
  parse: slice => {
    const buffer = metadata_Buffer.from('');
    const sliceToVal = (s, v, isFirst) => {
      if (isFirst && s.loadUint(8) !== SNAKE_PREFIX) {
        throw new Error('Only snake format is supported');
      }
      v = metadata_Buffer.concat([v, s.loadBuffer(s.remainingBits / 8)]);
      if (s.remainingRefs === 1) {
        v = sliceToVal(s.loadRef().beginParse(), v, false);
      }
      return v;
    };
    return sliceToVal(slice.loadRef().beginParse(), buffer, true);
  },
  serialize: () => {
    // pass
  }
};
const jettonOnChainMetadataSpec = {
  uri: 'ascii',
  name: 'utf8',
  description: 'utf8',
  image: 'ascii',
  symbol: 'utf8',
  decimals: 'utf8'
};
async function fetchJettonMetadata(network, address) {
  const {
    content
  } = await getJettonMinterData(network, address);
  let metadata;
  const slice = content.asSlice();
  const prefix = slice.loadUint(8);
  if (prefix === OFFCHAIN_CONTENT_PREFIX) {
    const bytes = readSnakeBytes(slice);
    const contentUri = bytes.toString('utf-8');
    metadata = await fetchJettonOffchainMetadata(contentUri);
  } else {
    // On-chain content
    metadata = await parseJettonOnchainMetadata(slice);
    if (metadata.uri) {
      // Semi-chain content
      const offchainMetadata = await fetchJettonOffchainMetadata(metadata.uri);
      metadata = {
        ...offchainMetadata,
        ...metadata
      };
    }
  }
  return metadata;
}
async function parseJettonOnchainMetadata(slice) {
  const dict = slice.loadDict(Dictionary.Dictionary.Keys.Buffer(32), dictSnakeBufferValue);
  const res = {};
  for (const [key, value] of Object.entries(jettonOnChainMetadataSpec)) {
    var _dict$get;
    const sha256Key = metadata_Buffer.from(await sha256(metadata_Buffer.from(key, 'ascii')));
    const val = (_dict$get = dict.get(sha256Key)) === null || _dict$get === void 0 ? void 0 : _dict$get.toString(value);
    if (val) {
      res[key] = val;
    }
  }
  return res;
}
async function fetchJettonOffchainMetadata(uri) {
  const metadata = await fetchJsonMetadata(uri);
  return pick(metadata, ['name', 'description', 'symbol', 'decimals', 'image', 'image_data']);
}
async function parseWalletTransactionBody(network, transaction) {
  var _transaction$extraDat;
  const body = (_transaction$extraDat = transaction.extraData) === null || _transaction$extraDat === void 0 ? void 0 : _transaction$extraDat.body;
  if (!body || transaction.comment || transaction.encryptedComment) {
    return transaction;
  }
  try {
    const slice = dataToSlice(body);
    if (slice.remainingBits > 32) {
      const parsedPayload = await parsePayloadSlice(network, transaction.toAddress, slice);
      transaction.extraData.parsedPayload = parsedPayload;
      if ((parsedPayload === null || parsedPayload === void 0 ? void 0 : parsedPayload.type) === 'comment') {
        transaction = {
          ...transaction,
          comment: parsedPayload.comment
        };
      } else if ((parsedPayload === null || parsedPayload === void 0 ? void 0 : parsedPayload.type) === 'encrypted-comment') {
        transaction = {
          ...transaction,
          encryptedComment: parsedPayload.encryptedComment
        };
      }
    }
  } catch (err) {
    logDebugError('parseTransactionBody', err);
  }
  return transaction;
}
async function parsePayloadBase64(network, toAddress, base64) {
  var _await$parsePayloadSl;
  const slice = dataToSlice(base64);
  const result = {
    type: 'unknown',
    base64
  };
  if (!slice) return result;
  return (_await$parsePayloadSl = await parsePayloadSlice(network, toAddress, slice)) !== null && _await$parsePayloadSl !== void 0 ? _await$parsePayloadSl : result;
}
async function parsePayloadSlice(network, toAddress, slice) {
  try {
    const opCode = slice.loadUint(32);
    if (opCode === OpCode.Comment) {
      const buffer = readSnakeBytes(slice);
      const comment = buffer.toString('utf-8');
      return {
        type: 'comment',
        comment
      };
    } else if (opCode === OpCode.Encrypted) {
      const buffer = readSnakeBytes(slice);
      const encryptedComment = buffer.toString('base64');
      return {
        type: 'encrypted-comment',
        encryptedComment
      };
    } else if (slice.remainingBits < 64) {
      return undefined;
    }
    const queryId = slice.loadUintBig(64);
    switch (opCode) {
      case JettonOpCode.Transfer:
        {
          var _forwardPayload;
          const minterAddress = await resolveTokenMinterAddress(network, toAddress);
          const slug = buildTokenSlug(minterAddress);
          const amount = slice.loadCoins();
          const destination = slice.loadAddress();
          const responseDestination = slice.loadMaybeAddress();
          if (!responseDestination) {
            return {
              type: 'tokens:transfer-non-standard',
              queryId,
              destination: toBase64Address(destination),
              amount,
              slug
            };
          }
          const customPayload = slice.loadMaybeRef();
          const forwardAmount = slice.loadCoins();
          let forwardPayload = slice.loadMaybeRef();
          if (!forwardPayload && slice.remainingBits) {
            const builder = new Builder.Builder().storeBits(slice.loadBits(slice.remainingBits));
            range(0, slice.remainingRefs).forEach(() => {
              builder.storeRef(slice.loadRef());
            });
            forwardPayload = builder.endCell();
          }
          return {
            type: 'tokens:transfer',
            queryId,
            amount,
            destination: toBase64Address(destination),
            responseDestination: toBase64Address(responseDestination),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            forwardAmount,
            forwardPayload: (_forwardPayload = forwardPayload) === null || _forwardPayload === void 0 ? void 0 : _forwardPayload.toBoc().toString('base64'),
            slug
          };
        }
      case NftOpCode.TransferOwnership:
        {
          var _forwardPayload2, _nft$metadata;
          const newOwner = slice.loadAddress();
          const responseDestination = slice.loadAddress();
          const customPayload = slice.loadMaybeRef();
          const forwardAmount = slice.loadCoins();
          let forwardPayload = slice.loadMaybeRef();
          if (!forwardPayload && slice.remainingBits) {
            const builder = new Builder.Builder().storeBits(slice.loadBits(slice.remainingBits));
            range(0, slice.remainingRefs).forEach(() => {
              builder.storeRef(slice.loadRef());
            });
            forwardPayload = builder.endCell();
          }
          const nftAddress = toAddress;
          const [nft] = await fetchNftItems(network, [nftAddress]);
          return {
            type: 'nft:transfer',
            queryId,
            newOwner: toBase64Address(newOwner),
            responseDestination: toBase64Address(responseDestination),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            forwardAmount,
            forwardPayload: (_forwardPayload2 = forwardPayload) === null || _forwardPayload2 === void 0 ? void 0 : _forwardPayload2.toBoc().toString('base64'),
            nftAddress,
            nftName: nft === null || nft === void 0 || (_nft$metadata = nft.metadata) === null || _nft$metadata === void 0 ? void 0 : _nft$metadata.name
          };
        }
      case JettonOpCode.Burn:
        {
          const minterAddress = await resolveTokenMinterAddress(network, toAddress);
          const slug = buildTokenSlug(minterAddress);
          const amount = slice.loadCoins();
          const address = slice.loadAddress();
          const customPayload = slice.loadMaybeRef();
          const isLiquidUnstakeRequest = minterAddress === LIQUID_JETTON;
          return {
            type: 'tokens:burn',
            queryId,
            amount,
            address: toBase64Address(address),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            slug,
            isLiquidUnstakeRequest
          };
        }
      case LiquidStakingOpCode.DistributedAsset:
        {
          return {
            type: 'liquid-staking:withdrawal-nft',
            queryId
          };
        }
      case LiquidStakingOpCode.Withdrawal:
        {
          return {
            type: 'liquid-staking:withdrawal',
            queryId
          };
        }
      case LiquidStakingOpCode.Deposit:
        {
          // const amount = slice.loadCoins();
          return {
            type: 'liquid-staking:deposit',
            queryId
          };
        }
    }
  } catch (err) {
    logDebugError('parsePayload', err);
  }
  return undefined;
}
function dataToSlice(data) {
  let buffer;
  if (typeof data === 'string') {
    buffer = metadata_Buffer.from(data, 'base64');
  } else if (data instanceof metadata_Buffer) {
    buffer = data;
  } else {
    buffer = metadata_Buffer.from(data);
  }
  try {
    return Cell.Cell.fromBoc(buffer)[0].beginParse();
  } catch (err) {
    if ((err === null || err === void 0 ? void 0 : err.message) !== 'Invalid magic') {
      throw err;
    }
  }
  return new Slice.Slice(new BitReader.BitReader(new BitString.BitString(buffer, 0, buffer.length * 8)), []);
}
function readSnakeBytes(slice) {
  let buffer = metadata_Buffer.alloc(0);
  while (slice.remainingBits >= 8) {
    buffer = metadata_Buffer.concat([buffer, slice.loadBuffer(slice.remainingBits / 8)]);
    if (slice.remainingRefs) {
      slice = slice.loadRef().beginParse();
    } else {
      break;
    }
  }
  return buffer;
}
;// CONCATENATED MODULE: ./src/api/common/backend.ts


const BAD_REQUEST_CODE = 400;
async function callBackendPost(path, data, options) {
  const {
    authToken,
    isAllowBadRequest
  } = options !== null && options !== void 0 ? options : {};
  const response = await fetch(`${BRILLIANT_API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && {
        'X-Auth-Token': authToken
      })
    },
    body: JSON.stringify(data)
  });
  handleFetchErrors(response, isAllowBadRequest ? [BAD_REQUEST_CODE] : undefined);
  return response.json();
}
async function callBackendGet(path, data, headers) {
  const url = new URL(`${BRILLIANT_API_BASE_URL}${path}`);
  if (data) {
    Object.entries(data).forEach(_ref => {
      let [key, value] = _ref;
      if (value === undefined) return;
      url.searchParams.set(key, value.toString());
    });
  }
  const response = await fetch(url, {
    headers
  });
  handleFetchErrors(response);
  return response.json();
}
;// CONCATENATED MODULE: ./src/api/common/addresses.ts



let knownAddresses = {};
let scamMarkers = [];
async function tryUpdateKnownAddresses() {
  try {
    const data = await callBackendGet('/known-addresses');
    knownAddresses = mapValues(data.knownAddresses, value => {
      return typeof value === 'string' ? {
        name: value
      } : value;
    });
    scamMarkers = data.scamMarkers.map(x => new RegExp(x, 'i'));
  } catch (err) {
    logDebugError('tryUpdateKnownAddresses', err);
  }
}
function getKnownAddresses() {
  return knownAddresses;
}
function getScamMarkers() {
  return scamMarkers;
}
function getAddressInfo(address) {
  return knownAddresses[address];
}
;// CONCATENATED MODULE: ./src/util/areDeepEqual.ts
function areDeepEqual(value1, value2) {
  const type1 = typeof value1;
  const type2 = typeof value2;
  if (type1 !== type2) {
    return false;
  }
  if (type1 !== 'object') {
    return value1 === value2;
  }
  const isArray1 = Array.isArray(value1);
  const isArray2 = Array.isArray(value2);
  if (isArray1 !== isArray2) {
    return false;
  }
  if (isArray1) {
    const array1 = value1;
    const array2 = value2;
    if (array1.length !== array2.length) {
      return false;
    }
    return array1.every((member1, i) => areDeepEqual(member1, array2[i]));
  }
  const object1 = value1;
  const object2 = value2;
  const keys1 = Object.keys(object1);
  return keys1.every(key1 => areDeepEqual(object1[key1], object2[key1]));
}
// EXTERNAL MODULE: ./src/lib/dexie/dexie.js
var dexie = __webpack_require__(8876);
var dexie_default = /*#__PURE__*/__webpack_require__.n(dexie);
;// CONCATENATED MODULE: ./src/api/db.ts
function db_defineProperty(obj, key, value) { key = db_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function db_toPropertyKey(arg) { var key = db_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function db_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Table = (dexie_default()).Table;
const DB_NANE = 'tables';
class ApiDb extends (dexie_default()) {
  constructor() {
    super(DB_NANE);
    db_defineProperty(this, "nfts", void 0);
    db_defineProperty(this, "sseConnections", void 0);
    this.version(1).stores({
      nfts: '[accountId+address], accountId, address, collectionAddress'
    });
    this.version(2).stores({
      sseConnections: '&clientId'
    });
  }
}
const apiDb = new ApiDb();
;// CONCATENATED MODULE: ./src/api/common/helpers.ts











let localCounter = 0;
const getNextLocalId = () => `${Date.now()}|${localCounter++}`;
const actualStateVersion = 13;
let migrationEnsurePromise;
function resolveBlockchainKey(accountId) {
  return parseAccountId(accountId).blockchain;
}
function toInternalAccountId(accountId) {
  return buildInternalAccountId(parseAccountId(accountId));
}
function buildInternalAccountId(account) {
  const {
    id,
    blockchain
  } = account;
  return `${id}-${blockchain}`;
}
function buildLocalTransaction(params, normalizedAddress) {
  const {
    amount,
    ...restParams
  } = params;
  const transaction = updateTransactionMetadata({
    ...restParams,
    txId: getNextLocalId(),
    timestamp: Date.now(),
    isIncoming: false,
    amount: -amount,
    normalizedAddress,
    extraData: {}
  });
  return {
    ...transaction,
    id: transaction.txId,
    kind: 'transaction'
  };
}
function updateTransactionMetadata(transaction) {
  const {
    normalizedAddress,
    comment
  } = transaction;
  let {
    metadata = {}
  } = transaction;
  const knownAddresses = getKnownAddresses();
  const scamMarkers = getScamMarkers();
  if (normalizedAddress in knownAddresses) {
    metadata = {
      ...metadata,
      ...knownAddresses[normalizedAddress]
    };
  }
  if (comment && scamMarkers.map(sm => sm.test(comment)).find(Boolean)) {
    metadata.isScam = true;
  }
  return {
    ...transaction,
    metadata
  };
}
let currentOnUpdate;
function connectUpdater(onUpdate) {
  currentOnUpdate = onUpdate;
}
function disconnectUpdater() {
  currentOnUpdate = undefined;
}
function isUpdaterAlive(onUpdate) {
  return currentOnUpdate === onUpdate;
}
function startStorageMigration(onUpdate, ton) {
  migrationEnsurePromise = migrateStorage(onUpdate, ton);
  return migrationEnsurePromise;
}
function waitStorageMigration() {
  return migrationEnsurePromise;
}
async function migrateStorage(onUpdate, ton) {
  let version = Number(await storages_storage.getItem('stateVersion', true));
  if (version === actualStateVersion) {
    return;
  }
  if (IS_CAPACITOR && !version) {
    if (await storages_storage.getItem('accounts', true)) {
      // Fix broken version
      version = 10;
    } else {
      // Prepare for migration to secure storage
      const idbVersion = await idb.getItem('stateVersion');
      if (idbVersion) {
        version = Number(idbVersion);
      }
    }
  }

  // Migration to chrome.storage
  if (IS_EXTENSION && !version && !(await storages_storage.getItem('addresses'))) {
    version = await idb.getItem('stateVersion');
    if (version) {
      // Switching from IndexedDB to `chrome.storage.local`
      const idbData = await idb.getAll();
      await storages_storage.setMany(idbData);
    }
  }
  if (!version) {
    await storages_storage.setItem('stateVersion', actualStateVersion);
    return;
  }

  // First version (v1)
  if (!version) {
    // Support multi-accounts
    const mnemonicEncrypted = await storages_storage.getItem('mnemonicEncrypted');
    if (mnemonicEncrypted) {
      await storages_storage.setItem('mnemonicsEncrypted', JSON.stringify({
        [MAIN_ACCOUNT_ID]: mnemonicEncrypted
      }));
      await storages_storage.removeItem('mnemonicEncrypted');
    }

    // Change accountId format ('0' -> '0-ton', '1-ton-mainnet' -> '1-ton')
    if (!mnemonicEncrypted) {
      for (const field of ['mnemonicsEncrypted', 'addresses', 'publicKeys']) {
        const raw = await storages_storage.getItem(field);
        if (!raw) continue;
        const oldItem = JSON.parse(raw);
        const newItem = Object.entries(oldItem).reduce((prevValue, _ref) => {
          let [accountId, data] = _ref;
          prevValue[toInternalAccountId(accountId)] = data;
          return prevValue;
        }, {});
        await storages_storage.setItem(field, JSON.stringify(newItem));
      }
    }
    version = 1;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 1) {
    const addresses = await storages_storage.getItem('addresses');
    if (addresses && addresses.includes('-undefined')) {
      for (const field of ['mnemonicsEncrypted', 'addresses', 'publicKeys']) {
        const newValue = (await storages_storage.getItem(field)).replace('-undefined', '-ton');
        await storages_storage.setItem(field, newValue);
      }
    }
    version = 2;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version >= 2 && version <= 4) {
    for (const key of ['addresses', 'mnemonicsEncrypted', 'publicKeys', 'dapps']) {
      const rawData = await storages_storage.getItem(key);
      if (typeof rawData === 'string') {
        await storages_storage.setItem(key, JSON.parse(rawData));
      }
    }
    version = 5;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 5) {
    const dapps = await storages_storage.getItem('dapps');
    if (dapps) {
      for (const accountDapps of Object.values(dapps)) {
        for (const dapp of Object.values(accountDapps)) {
          dapp.connectedAt = 1;
        }
      }
      await storages_storage.setItem('dapps', dapps);
    }
    version = 6;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 6) {
    for (const key of ['addresses', 'mnemonicsEncrypted', 'publicKeys', 'accounts', 'dapps']) {
      let data = await storages_storage.getItem(key);
      if (!data) continue;
      data = Object.entries(data).reduce((byAccountId, _ref2) => {
        let [internalAccountId, accountData] = _ref2;
        const parsed = parseAccountId(internalAccountId);
        const mainnetAccountId = buildAccountId({
          ...parsed,
          network: 'mainnet'
        });
        const testnetAccountId = buildAccountId({
          ...parsed,
          network: 'testnet'
        });
        return {
          ...byAccountId,
          [mainnetAccountId]: accountData,
          [testnetAccountId]: accountData
        };
      }, {});
      await storages_storage.setItem(key, data);
    }
    version = 7;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 7) {
    const addresses = await storages_storage.getItem('addresses');
    if (addresses) {
      var _await$storage$getIte;
      const publicKeys = await storages_storage.getItem('publicKeys');
      const accounts = (_await$storage$getIte = await storages_storage.getItem('accounts')) !== null && _await$storage$getIte !== void 0 ? _await$storage$getIte : {};
      for (const [accountId, oldAddress] of Object.entries(addresses)) {
        const newAddress = toBase64Address(oldAddress, false);
        accounts[accountId] = {
          ...accounts[accountId],
          address: newAddress,
          publicKey: publicKeys[accountId]
        };
        onUpdate({
          type: 'updateAccount',
          accountId,
          partial: {
            address: newAddress
          }
        });
      }
      await storages_storage.setItem('accounts', accounts);
      await storages_storage.removeItem('addresses');
      await storages_storage.removeItem('publicKeys');
    }
    version = 8;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 8) {
    if (getEnvironment().isSseSupported) {
      const dapps = await storages_storage.getItem('dapps');
      if (dapps) {
        const items = [];
        for (const accountDapps of Object.values(dapps)) {
          for (const dapp of Object.values(accountDapps)) {
            var _dapp$sse;
            if ((_dapp$sse = dapp.sse) !== null && _dapp$sse !== void 0 && _dapp$sse.appClientId) {
              var _dapp$sse2;
              items.push({
                clientId: (_dapp$sse2 = dapp.sse) === null || _dapp$sse2 === void 0 ? void 0 : _dapp$sse2.appClientId
              });
            }
          }
        }
        if (items.length) {
          await apiDb.sseConnections.bulkPut(items);
        }
      }
    }
    version = 9;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 9) {
    if (IS_CAPACITOR) {
      const data = await idb.getAll();
      for (const [key, value] of Object.entries(data)) {
        await capacitorStorage.setItem(key, value);
        const newValue = await capacitorStorage.getItem(key, true);
        if (!areDeepEqual(value, newValue)) {
          throw new Error('Migration error!');
        }
      }
      await idb.clear();
    }
    version = 10;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 10 || version === 11 || version === 12) {
    const accounts = await storages_storage.getItem('accounts', true);
    if (accounts) {
      for (const account of Object.values(accounts)) {
        const {
          publicKey,
          address,
          version: walletVersion
        } = account;
        if (walletVersion) continue;
        const publicKeyBytes = hexToBytes(publicKey);
        const walletInfo = ton.pickWalletByAddress('mainnet', publicKeyBytes, address);
        account.version = walletInfo.version;
      }
      await storages_storage.setItem('accounts', accounts);
    }
    version = 13;
    await storages_storage.setItem('stateVersion', version);
  }
}
;// CONCATENATED MODULE: ./src/util/dns.ts
const zones = ['ton', 't.me', 'vip'];
const zonesRegex = {
  ton: /^([-\da-z]+\.){0,2}([-\da-z]{4,126})\.ton$/i,
  't.me': /^([-\da-z]+\.){0,2}([-_\da-z]{4,126})\.t\.me$/i,
  vip: /^(?<base>([-\da-z]+\.){0,2}([\da-z]{1,24}))\.(ton\.vip|vip\.ton|vip)$/i
};
function isDnsDomain(value) {
  return Object.values(zonesRegex).some(zone => zone.test(value));
}
function isVipDnsDomain(value) {
  return zonesRegex.vip.test(value);
}
function removeVipZone(value) {
  var _value$match;
  value = value.replace(/\.ton\.vip$/i, '.vip').replace(/\.vip\.ton$/i, '.vip');
  return (_value$match = value.match(zonesRegex.vip)) === null || _value$match === void 0 || (_value$match = _value$match.groups) === null || _value$match === void 0 ? void 0 : _value$match.base;
}
function removeTonZone(value) {
  return value.replace(/\.ton$/i, '');
}
/* harmony default export */ const dns = ({
  zones,
  zonesRegex,
  isDnsDomain,
  isVipDnsDomain,
  removeVipZone,
  removeTonZone
});
;// CONCATENATED MODULE: ./src/api/blockchains/ton/util/dns.ts
/* provided dependency */ var dns_Buffer = __webpack_require__(8764)["lW"];
/* Source https://github.com/toncenter/tonweb/blob/master/src/contract/dns/DnsUtils.js */



let DnsCategory = /*#__PURE__*/function (DnsCategory) {
  DnsCategory["DnsNextResolver"] = "dns_next_resolver";
  DnsCategory["Wallet"] = "wallet";
  DnsCategory["Site"] = "site";
  DnsCategory["BagId"] = "storage";
  return DnsCategory;
}({});
async function categoryToBigInt(category) {
  if (!category) return 0n; // all categories
  const categoryBytes = new TextEncoder().encode(category);
  const categoryHashHex = dns_Buffer.from(await sha256(categoryBytes)).toString('hex');
  return BigInt(`0x${categoryHashHex}`);
}
function parseSmartContractAddressImpl(cell, prefix0, prefix1) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== prefix0 || byte1 !== prefix1) {
    throw new Error('Invalid dns record value prefix');
  }
  return dns_parseAddress(slice);
}
function parseSmartContractAddressRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0x9f, 0xd3);
}
function parseNextResolverRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0xba, 0x93);
}
function parseStorageBagIdRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0x74 || byte1 !== 0x73) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
function parseSiteRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 === 0xad || byte1 === 0x01) {
    return parseAdnlAddressRecord(cell);
  } else {
    return parseStorageBagIdRecord(cell);
  }
}
function parseAdnlAddressRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0xad || byte1 !== 0x01) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
async function dnsResolveImpl(client, dnsAddress, rawDomainBytes, category, oneStep) {
  const len = rawDomainBytes.length * 8;
  const domainCell = new core_dist.Builder().storeBuffer(dns_Buffer.from(rawDomainBytes)).asCell();
  const categoryBN = await categoryToBigInt(category);
  const {
    stack
  } = await client.callGetMethod(core_dist.Address.parse(dnsAddress), 'dnsresolve', [{
    type: 'slice',
    cell: domainCell
  }, {
    type: 'int',
    value: BigInt(categoryBN.toString())
  }]);
  const resultLen = stack.readNumber();
  let cell;
  try {
    cell = stack.readCell();
  } catch (err) {
    // Do nothing
  }
  if (resultLen === 0) {
    return undefined; // domain cannot be resolved
  }

  if (resultLen % 8 !== 0) {
    throw new Error('domain split not at a component boundary');
  }
  // if (rawDomainBytes[resultLen] !== 0) {
  //     throw new Error('domain split not at a component boundary');
  // }
  if (resultLen > len) {
    throw new Error(`invalid response ${resultLen}/${len}`);
  } else if (resultLen === len) {
    if (category === DnsCategory.DnsNextResolver) {
      return cell ? parseNextResolverRecord(cell) : undefined;
    } else if (category === DnsCategory.Wallet) {
      return cell ? parseSmartContractAddressRecord(cell) : undefined;
    } else if (category === DnsCategory.Site) {
      return cell ? parseSiteRecord(cell) : undefined;
    } else if (category === DnsCategory.BagId) {
      return cell ? parseStorageBagIdRecord(cell) : undefined;
    } else {
      return cell;
    }
  } else if (!cell) {
    return undefined; // domain cannot be resolved
  } else {
    const nextAddress = parseNextResolverRecord(cell);
    if (oneStep) {
      if (category === DnsCategory.DnsNextResolver) {
        return nextAddress;
      } else {
        return undefined;
      }
    } else {
      return dnsResolveImpl(client, nextAddress.toString(), rawDomainBytes.slice(resultLen / 8), category, false);
    }
  }
}
function domainToBytes(domain) {
  if (!domain || !domain.length) {
    throw new Error('empty domain');
  }
  if (domain === '.') {
    return new Uint8Array([0]);
  }
  domain = domain.toLowerCase();
  for (let i = 0; i < domain.length; i++) {
    if (domain.charCodeAt(i) <= 32) {
      throw new Error('bytes in range 0..32 are not allowed in domain names');
    }
  }
  for (let i = 0; i < domain.length; i++) {
    const s = domain.substring(i, i + 1);
    for (let c = 127; c <= 159; c++) {
      // another control codes range
      if (s === String.fromCharCode(c)) {
        throw new Error('bytes in range 127..159 are not allowed in domain names');
      }
    }
  }
  const arr = domain.split('.');
  arr.forEach(part => {
    if (!part.length) {
      throw new Error('domain name cannot have an empty component');
    }
  });
  let rawDomain = `${arr.reverse().join('\0')}\0`;
  if (rawDomain.length < 126) {
    rawDomain = `\0${rawDomain}`;
  }
  return new TextEncoder().encode(rawDomain);
}
function dnsResolve(client, rootDnsAddress, domain, category, oneStep) {
  const rawDomainBytes = domainToBytes(domain);
  return dnsResolveImpl(client, rootDnsAddress, rawDomainBytes, category, oneStep);
}
function dns_parseAddress(slice) {
  slice.loadUint(3);
  let n = slice.loadUintBig(8);
  if (n > 127n) {
    // Maybe it's not necessary?
    n -= 256n;
  }
  const hashPart = slice.loadUintBig(256);
  if (`${n.toString(10)}:${hashPart.toString(16)}` === '0:0') {
    return undefined;
  }
  const s = `${n.toString(10)}:${hashPart.toString(16).padStart(64, '0')}`;
  return core_dist.Address.parse(s);
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/address.ts




const TON_DNS_COLLECTION = 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz';
const VIP_DNS_COLLECTION = 'EQBWG4EBbPDv4Xj7xlPwzxd7hSyHMzwwLB5O6rY-0BBeaixS';
async function resolveAddress(network, address) {
  if (!dns.isDnsDomain(address)) {
    return {
      address
    };
  }
  const domain = address;
  try {
    let base;
    let collection;
    if (dns.isVipDnsDomain(domain)) {
      base = dns.removeVipZone(domain);
      collection = VIP_DNS_COLLECTION;
    } else {
      base = dns.removeTonZone(domain);
      collection = TON_DNS_COLLECTION;
    }
    const result = await dnsResolve(getTonClient(network), collection, base, DnsCategory.Wallet);
    if (!(result instanceof core_dist.Address)) {
      return undefined;
    }
    return {
      address: toBase64Address(result),
      domain
    };
  } catch (err) {
    if (err.message !== 'http provider parse response error') {
      throw err;
    }
    return undefined;
  }
}
function normalizeAddress(address) {
  return toBase64Address(address, true);
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/tokens.ts












const KNOWN_TOKENS = [{
  slug: TON_TOKEN_SLUG,
  name: 'Toncoin',
  cmcSlug: TON_TOKEN_SLUG,
  symbol: TON_SYMBOL,
  decimals: config_DEFAULT_DECIMAL_PLACES
}];
const knownTokens = {};
addKnownTokens(KNOWN_TOKENS);
async function getAccountTokenBalances(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const balancesRaw = await fetchJettonBalances(network, address);
  return balancesRaw.map(parseTokenBalance).filter(Boolean);
}
async function getAddressTokenBalances(address, network) {
  const balancesRaw = await fetchJettonBalances(network, address);
  return balancesRaw.map(parseTokenBalance).filter(Boolean);
}
function parseTokenBalance(balanceRaw) {
  if (!balanceRaw.jetton) {
    return undefined;
  }
  try {
    const {
      balance,
      jetton,
      wallet_address: walletAddress
    } = balanceRaw;
    const minterAddress = toBase64Address(jetton.address, true);
    const token = buildTokenByMetadata(minterAddress, jetton);
    return {
      slug: token.slug,
      balance: BigInt(balance),
      token,
      jettonWallet: toBase64Address(walletAddress.address)
    };
  } catch (err) {
    logDebugError('parseTokenBalance', err);
    return undefined;
  }
}
function parseTokenTransaction(tx, slug, walletAddress) {
  const {
    extraData
  } = tx;
  if (!(extraData !== null && extraData !== void 0 && extraData.body)) {
    return undefined;
  }
  const parsedData = parseJettonWalletMsgBody(extraData.body);
  if (!parsedData) {
    return undefined;
  }
  const {
    operation,
    jettonAmount,
    address,
    comment,
    encryptedComment
  } = parsedData;
  const isIncoming = operation === 'InternalTransfer';
  return {
    ...tx,
    slug,
    fromAddress: isIncoming ? address !== null && address !== void 0 ? address : tx.fromAddress : walletAddress,
    toAddress: isIncoming ? walletAddress : address,
    amount: isIncoming ? jettonAmount : -jettonAmount,
    comment,
    encryptedComment,
    isIncoming
  };
}
async function buildTokenTransfer(network, slug, fromAddress, toAddress, amount, payload) {
  const minterAddress = resolveTokenBySlug(slug).minterAddress;
  const tokenWalletAddress = await resolveTokenWalletAddress(network, fromAddress, minterAddress);
  const realMinterAddress = await resolveTokenMinterAddress(network, tokenWalletAddress);
  if (minterAddress !== realMinterAddress) {
    throw new Error('Invalid contract');
  }
  const tokenWallet = getTokenWallet(network, tokenWalletAddress);
  payload = buildTokenTransferBody({
    tokenAmount: amount,
    toAddress,
    forwardAmount: TOKEN_TRANSFER_TON_FORWARD_AMOUNT,
    forwardPayload: payload,
    responseAddress: fromAddress
  });
  return {
    tokenWallet,
    amount: TOKEN_TRANSFER_TON_AMOUNT,
    toAddress: tokenWalletAddress,
    payload
  };
}
function resolveTokenBySlug(slug) {
  return knownTokens[slug];
}
function findTokenByMinter(minter) {
  return Object.values(knownTokens).find(token => token.minterAddress === minter);
}
function getTokenWallet(network, tokenAddress) {
  return getTonClient(network).open(new JettonWallet(core_dist.Address.parse(tokenAddress)));
}
function getKnownTokens() {
  return knownTokens;
}
function addKnownTokens(tokens) {
  for (const token of tokens) {
    if (token.slug in knownTokens) continue;
    knownTokens[token.slug] = {
      ...token,
      quote: {
        price: 0,
        priceUsd: 0,
        percentChange1h: 0,
        percentChange24h: 0,
        percentChange7d: 0,
        percentChange30d: 0
      }
    };
  }
}
async function fetchToken(network, address) {
  const metadata = await fetchJettonMetadata(network, address);
  return buildTokenByMetadata(address, metadata);
}
function buildTokenByMetadata(address, metadata) {
  const {
    name,
    symbol,
    image,
    image_data: imageData,
    decimals
  } = metadata;
  return {
    slug: buildTokenSlug(address),
    name,
    symbol,
    decimals: decimals === undefined ? DEFAULT_DECIMALS : Number(decimals),
    minterAddress: address,
    image: image && fixIpfsUrl(image) || imageData && fixBase64ImageData(imageData) || undefined
  };
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/transactions.ts
/* provided dependency */ var transactions_Buffer = __webpack_require__(8764)["lW"];



























const DEFAULT_EXPIRE_AT_TIMEOUT_SEC = 60; // 60 sec.
const GET_TRANSACTIONS_LIMIT = 50;
const GET_TRANSACTIONS_MAX_LIMIT = 100;
const WAIT_SEQNO_TIMEOUT = 40000; // 40 sec.
const WAIT_SEQNO_PAUSE = 5000; // 5 sec.
const WAIT_TRANSACTION_PAUSE = 500; // 0.5 sec.

const lastTransfers = {
  mainnet: {},
  testnet: {}
};
const checkHasTransaction = withCacheAsync(async (network, address) => {
  const transactions = await fetchTransactions(network, address, 1);
  return Boolean(transactions.length);
});
async function checkTransactionDraft(accountId, tokenSlug, toAddress, amount, data, stateInit, shouldEncrypt, isBase64Data) {
  const {
    network
  } = parseAccountId(accountId);
  const result = {};
  try {
    const resolved = await resolveAddress(network, toAddress);
    if (resolved) {
      result.addressName = resolved.domain;
      toAddress = resolved.address;
    } else {
      return {
        ...result,
        error: ApiTransactionDraftError.DomainNotResolved
      };
    }
    const {
      isValid,
      isUserFriendly,
      isTestOnly,
      isBounceable
    } = parseAddress(toAddress);
    if (!isValid) {
      return {
        ...result,
        error: ApiTransactionDraftError.InvalidToAddress
      };
    }
    const regex = /[+=/]/; // Temp check for `isUrlSafe`. Remove after TonWeb fixes the issue
    const isUrlSafe = !regex.test(toAddress);
    if (!isUserFriendly || !isUrlSafe || network === 'mainnet' && isTestOnly) {
      return {
        ...result,
        error: ApiTransactionDraftError.InvalidAddressFormat
      };
    }
    const {
      isInitialized,
      isLedgerAllowed
    } = await getContractInfo(network, toAddress);
    if (isBounceable && !isInitialized) {
      result.isToAddressNew = !(await checkHasTransaction(network, toAddress));
      if (tokenSlug === TON_TOKEN_SLUG) {
        // Force non-bounceable for non-initialized recipients
        toAddress = toBase64Address(toAddress, false);
      }
    }
    result.resolvedAddress = toAddress;
    const addressInfo = await getAddressInfo(toBase64Address(toAddress, true));
    if (addressInfo !== null && addressInfo !== void 0 && addressInfo.name) result.addressName = addressInfo.name;
    if (addressInfo !== null && addressInfo !== void 0 && addressInfo.isScam) result.isScam = addressInfo.isScam;
    if (amount < 0n) {
      return {
        ...result,
        error: ApiTransactionDraftError.InvalidAmount
      };
    }
    const wallet = await pickAccountWallet(accountId);
    if (!wallet) {
      return {
        ...result,
        error: ApiCommonError.Unexpected
      };
    }
    if (typeof data === 'string' && isBase64Data) {
      data = base64ToBytes(data);
    }
    if (data && typeof data === 'string' && shouldEncrypt) {
      const toPublicKey = await getWalletPublicKey(network, toAddress);
      if (!toPublicKey) {
        return {
          ...result,
          error: ApiTransactionDraftError.WalletNotInitialized
        };
      }
    }
    const account = await fetchStoredAccount(accountId);
    const isLedger = !!account.ledger;
    if (isLedger && !isLedgerAllowed) {
      return {
        ...result,
        error: ApiTransactionDraftError.UnsupportedHardwareContract
      };
    }
    if (data && typeof data === 'string' && !isBase64Data && !isLedger) {
      data = commentToBytes(data);
    }
    if (tokenSlug === TON_TOKEN_SLUG) {
      if (data && isLedger && (typeof data !== 'string' || shouldEncrypt || !isValidLedgerComment(data))) {
        let error;
        if (typeof data !== 'string') {
          error = ApiTransactionDraftError.UnsupportedHardwareOperation;
        } else if (shouldEncrypt) {
          error = ApiTransactionDraftError.EncryptedDataNotSupported;
        } else {
          error = !isAscii(data) ? ApiTransactionDraftError.NonAsciiCommentForHardwareOperation : ApiTransactionDraftError.TooLongCommentForHardwareOperation;
        }
        return {
          ...result,
          error
        };
      }
      if (data instanceof Uint8Array) {
        data = packBytesAsSnake(data);
      }
    } else {
      const address = await fetchStoredAddress(accountId);
      const tokenAmount = amount;
      let tokenWallet;
      ({
        tokenWallet,
        amount,
        toAddress,
        payload: data
      } = await buildTokenTransfer(network, tokenSlug, address, toAddress, amount, data));
      const tokenBalance = await tokenWallet.getJettonBalance();
      if (tokenBalance < tokenAmount) {
        return {
          ...result,
          error: ApiTransactionDraftError.InsufficientBalance
        };
      }
    }
    const {
      transaction
    } = await signTransaction(network, wallet, toAddress, amount, data, stateInit);
    const realFee = await calculateFee(network, wallet, transaction, account.isInitialized);
    result.fee = bigintMultiplyToNumber(realFee, FEE_FACTOR);
    const balance = await getWalletBalance(network, wallet);
    if (balance < amount + realFee) {
      return {
        ...result,
        error: ApiTransactionDraftError.InsufficientBalance
      };
    }
    return result;
  } catch (err) {
    return {
      ...handleServerError(err),
      ...result
    };
  }
}
async function submitTransfer(accountId, password, tokenSlug, toAddress, amount, data, stateInit, shouldEncrypt, isBase64Data) {
  const {
    network
  } = parseAccountId(accountId);
  try {
    const [wallet, account, keyPair] = await Promise.all([pickAccountWallet(accountId), fetchStoredAccount(accountId), fetchKeyPair(accountId, password)]);
    const {
      address: fromAddress
    } = account;
    const {
      publicKey,
      secretKey
    } = keyPair;
    let encryptedComment;
    if (typeof data === 'string') {
      if (!data) {
        data = undefined;
      } else if (isBase64Data) {
        data = parseBase64(data);
      } else if (shouldEncrypt) {
        const toPublicKey = await getWalletPublicKey(network, toAddress);
        data = await encryptMessageComment(data, publicKey, toPublicKey, secretKey, fromAddress);
        encryptedComment = transactions_Buffer.from(data.slice(4)).toString('base64');
      } else {
        data = commentToBytes(data);
      }
    }
    if (tokenSlug === TON_TOKEN_SLUG) {
      if (data instanceof Uint8Array) {
        data = packBytesAsSnake(data);
      }
    } else {
      ({
        amount,
        toAddress,
        payload: data
      } = await buildTokenTransfer(network, tokenSlug, fromAddress, toAddress, amount, data));
    }
    await waitLastTransfer(network, fromAddress);
    const {
      balance
    } = await getWalletInfo(network, wallet);
    const {
      seqno,
      transaction
    } = await signTransaction(network, wallet, toAddress, amount, data, stateInit, secretKey);
    const fee = await calculateFee(network, wallet, transaction, account.isInitialized);
    if (balance < amount + fee) {
      return {
        error: ApiTransactionError.InsufficientBalance
      };
    }
    wallet.send(transaction);
    updateLastTransfer(network, fromAddress, seqno);
    return {
      amount,
      seqno,
      encryptedComment,
      toAddress
    };
  } catch (err) {
    logDebugError('submitTransfer', err);
    return {
      error: resolveTransactionError(err)
    };
  }
}
function resolveTransactionError(error) {
  if (error instanceof ApiServerError) {
    if (error.message.includes('exitcode=35,')) {
      return ApiTransactionError.IncorrectDeviceTime;
    } else if (error.displayError) {
      return error.displayError;
    }
  }
  return ApiTransactionError.UnsuccesfulTransfer;
}
async function signTransaction(network, wallet, toAddress, amount, payload, stateInit) {
  let privateKey = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Uint8Array(64);
  const {
    seqno
  } = await getWalletInfo(network, wallet);
  if (payload instanceof Uint8Array) {
    payload = packBytesAsSnake(payload, 0);
  }
  const init = stateInit ? {
    code: stateInit.refs[0],
    data: stateInit.refs[1]
  } : undefined;
  const transaction = wallet.createTransfer({
    seqno,
    secretKey: transactions_Buffer.from(privateKey),
    messages: [(0,core_dist.internal)({
      value: amount,
      to: toAddress,
      body: payload,
      init,
      bounce: parseAddress(toAddress).isBounceable
    })],
    sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY + core_dist.SendMode.IGNORE_ERRORS
  });
  return {
    seqno,
    transaction
  };
}
async function getAccountNewestTxId(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  return fetchNewestTxId(network, address);
}
async function getAccountTransactionSlice(accountId, toTxId, fromTxId, limit) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  let transactions = await fetchTransactions(network, address, limit !== null && limit !== void 0 ? limit : GET_TRANSACTIONS_LIMIT, toTxId, fromTxId);
  transactions = await Promise.all(transactions.map(transaction => parseWalletTransactionBody(network, transaction)));
  return transactions.map(updateTransactionType).map(updateTransactionMetadata).map(omitExtraData).map(transactionToActivity);
}
async function getMergedTransactionSlice(accountId, lastTxIds, limit) {
  // eslint-disable-next-line prefer-const
  let {
    toncoin: lastTonTxId,
    ...tokenLastTxIds
  } = lastTxIds;
  const tonTxs = await getAccountTransactionSlice(accountId, lastTonTxId, undefined, limit);
  if (!tonTxs.length) {
    return [];
  }
  lastTonTxId = tonTxs[tonTxs.length - 1].txId;
  const lastTonTxLt = parseTxId(lastTonTxId).lt;
  const results = await Promise.all(Object.entries(tokenLastTxIds).map(_ref => {
    let [slug, lastTxId] = _ref;
    if (lastTxId && parseTxId(lastTxId).lt < lastTonTxLt) {
      return [];
    }
    return getTokenTransactionSlice(accountId, slug, lastTxId, lastTonTxId, GET_TRANSACTIONS_MAX_LIMIT);
  }));
  const allTxs = [...tonTxs, ...results.flat()];
  allTxs.sort((a, b) => compareActivities(a, b));
  return allTxs;
}
async function getTokenTransactionSlice(accountId, tokenSlug, toTxId, fromTxId, limit) {
  if (tokenSlug === TON_TOKEN_SLUG) {
    return getAccountTransactionSlice(accountId, toTxId, fromTxId, limit);
  }
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const minterAddress = resolveTokenBySlug(tokenSlug).minterAddress;
  const tokenWalletAddress = await resolveTokenWalletAddress(network, address, minterAddress);
  const transactions = await fetchTransactions(network, tokenWalletAddress, limit !== null && limit !== void 0 ? limit : GET_TRANSACTIONS_LIMIT, toTxId, fromTxId);
  return transactions.map(tx => parseTokenTransaction(tx, tokenSlug, address)).filter(Boolean).map(updateTransactionMetadata).map(omitExtraData).map(transactionToActivity);
}
function omitExtraData(tx) {
  return omit(tx, ['extraData']);
}
function updateTransactionType(transaction) {
  const {
    fromAddress,
    toAddress,
    comment,
    amount,
    extraData
  } = transaction;
  let type;
  if (isKnownStakingPool(toBase64Address(fromAddress, true)) && amount > ONE_TON) {
    type = 'unstake';
  } else if (isKnownStakingPool(toBase64Address(toAddress, true))) {
    if (comment === STAKE_COMMENT) {
      type = 'stake';
    } else if (comment === UNSTAKE_COMMENT) {
      type = 'unstakeRequest';
    }
  } else if (extraData !== null && extraData !== void 0 && extraData.parsedPayload) {
    const payload = extraData.parsedPayload;
    if (payload.type === 'tokens:burn' && payload.isLiquidUnstakeRequest) {
      type = 'unstakeRequest';
    } else if (payload.type === 'liquid-staking:deposit') {
      type = 'stake';
    } else if (payload.type === 'liquid-staking:withdrawal' || payload.type === 'liquid-staking:withdrawal-nft') {
      type = 'unstake';
    }
  }
  return {
    ...transaction,
    type
  };
}
function transactionToActivity(transaction) {
  return {
    ...transaction,
    kind: 'transaction',
    id: transaction.txId
  };
}
async function checkMultiTransactionDraft(accountId, messages) {
  const {
    network
  } = parseAccountId(accountId);
  const result = {};
  let totalAmount = 0n;
  const account = await fetchStoredAccount(accountId);
  try {
    for (const {
      toAddress,
      amount
    } of messages) {
      if (amount < 0n) {
        return {
          ...result,
          error: ApiTransactionDraftError.InvalidAmount
        };
      }
      if (!parseAddress(toAddress).isValid) {
        return {
          ...result,
          error: ApiTransactionDraftError.InvalidToAddress
        };
      }
      totalAmount += amount;
    }
    const wallet = await pickAccountWallet(accountId);
    if (!wallet) {
      return {
        ...result,
        error: ApiCommonError.Unexpected
      };
    }
    const {
      balance
    } = await getWalletInfo(network, wallet);
    const {
      transaction
    } = await signMultiTransaction(network, wallet, messages);
    const realFee = await calculateFee(network, wallet, transaction, account.isInitialized);
    result.totalAmount = totalAmount;
    result.fee = bigintMultiplyToNumber(realFee, FEE_FACTOR);
    if (balance < totalAmount + realFee) {
      return {
        ...result,
        error: ApiTransactionDraftError.InsufficientBalance
      };
    }
    return result;
  } catch (err) {
    return handleServerError(err);
  }
}
async function submitMultiTransfer(accountId, password, messages, expireAt) {
  const {
    network
  } = parseAccountId(accountId);
  try {
    const [wallet, account, privateKey] = await Promise.all([pickAccountWallet(accountId), fetchStoredAccount(accountId), fetchPrivateKey(accountId, password)]);
    const {
      address: fromAddress
    } = account;
    let totalAmount = 0n;
    messages.forEach(message => {
      totalAmount += BigInt(message.amount);
    });
    await waitLastTransfer(network, fromAddress);
    const {
      balance
    } = await getWalletInfo(network, wallet);
    const {
      seqno,
      transaction
    } = await signMultiTransaction(network, wallet, messages, privateKey, expireAt);
    const boc = transaction.toBoc().toString('base64');
    const fee = await calculateFee(network, wallet, transaction, account.isInitialized);
    if (BigInt(balance) < BigInt(totalAmount) + BigInt(fee)) {
      return {
        error: ApiTransactionError.InsufficientBalance
      };
    }
    wallet.send(transaction);
    updateLastTransfer(network, fromAddress, seqno);
    return {
      seqno,
      amount: totalAmount.toString(),
      messages,
      boc
    };
  } catch (err) {
    logDebugError('submitMultiTransfer', err);
    return {
      error: resolveTransactionError(err)
    };
  }
}
async function signMultiTransaction(network, wallet, messages) {
  let privateKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Uint8Array(64);
  let expireAt = arguments.length > 4 ? arguments[4] : undefined;
  const {
    seqno
  } = await getWalletInfo(network, wallet);
  if (!expireAt) {
    expireAt = Math.round(Date.now() / 1000) + DEFAULT_EXPIRE_AT_TIMEOUT_SEC;
  }
  const preparedMessages = messages.map(message => {
    const {
      amount,
      toAddress,
      stateInit,
      isBase64Payload
    } = message;
    let {
      payload
    } = message;
    if (isBase64Payload && typeof payload === 'string') {
      payload = core_dist.Cell.fromBase64(payload);
    }
    const init = stateInit ? {
      code: stateInit.refs[0],
      data: stateInit.refs[1]
    } : undefined;
    return (0,core_dist.internal)({
      value: amount,
      to: toAddress,
      body: payload,
      // TODO Fix Uint8Array type
      bounce: parseAddress(toAddress).isBounceable,
      init
    });
  });
  const transaction = wallet.createTransfer({
    seqno,
    secretKey: transactions_Buffer.from(privateKey),
    messages: preparedMessages,
    sendMode: core_dist.SendMode.PAY_GAS_SEPARATELY + core_dist.SendMode.IGNORE_ERRORS,
    timeout: expireAt
  });
  return {
    seqno,
    transaction
  };
}
function updateLastTransfer(network, address, seqno) {
  lastTransfers[network][address] = {
    timestamp: Date.now(),
    seqno
  };
}
async function waitLastTransfer(network, address) {
  const lastTransfer = lastTransfers[network][address];
  if (!lastTransfer) return;
  const {
    seqno,
    timestamp
  } = lastTransfer;
  const waitUntil = timestamp + WAIT_SEQNO_TIMEOUT;
  const result = await waitIncrementSeqno(network, address, seqno, waitUntil);
  if (result) {
    delete lastTransfers[network][address];
  }
}
async function waitIncrementSeqno(network, address, seqno, waitUntil) {
  if (!waitUntil) {
    waitUntil = Date.now() + WAIT_SEQNO_TIMEOUT;
  }
  while (Date.now() < waitUntil) {
    try {
      const {
        seqno: currentSeqno
      } = await getWalletInfo(network, address);
      if (currentSeqno > seqno) {
        return true;
      }
      await pause(WAIT_SEQNO_PAUSE);
    } catch (err) {
      logDebugError('waitIncrementSeqno', err);
    }
  }
  return false;
}
async function calculateFee(network, wallet, transaction, isInitialized) {
  // eslint-disable-next-line no-null/no-null
  const {
    code = null,
    data = null
  } = !isInitialized ? wallet.init : {};
  const {
    source_fees: fees
  } = await getTonClient(network).estimateExternalMessageFee(wallet.address, {
    body: transaction,
    initCode: code,
    initData: data,
    ignoreSignature: true
  });
  return BigInt(fees.in_fwd_fee + fees.storage_fee + fees.gas_fee + fees.fwd_fee);
}
async function sendSignedMessage(accountId, message) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address: fromAddress,
    publicKey,
    version
  } = await fetchStoredAccount(accountId);
  const wallet = getTonWalletContract(publicKey, version);
  const client = getTonClient(network);
  const contract = client.open(wallet);
  const {
    base64,
    seqno
  } = message;
  await contract.send(core_dist.Cell.fromBase64(base64));
  updateLastTransfer(network, fromAddress, seqno);
}
async function sendSignedMessages(accountId, messages) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address: fromAddress,
    publicKey,
    version
  } = await fetchStoredAccount(accountId);
  const wallet = getTonWalletContract(publicKey, version);
  const client = getTonClient(network);
  const contract = client.open(wallet);
  const attempts = ATTEMPTS + messages.length;
  let index = 0;
  let attempt = 0;
  while (index < messages.length && attempt < attempts) {
    const {
      base64,
      seqno
    } = messages[index];
    try {
      await waitLastTransfer(network, fromAddress);
      await contract.send(core_dist.Cell.fromBase64(base64));
      updateLastTransfer(network, fromAddress, seqno);
      index++;
    } catch (err) {
      logDebugError('sendSignedMessages', err);
    }
    attempt++;
  }
  return {
    successNumber: index
  };
}
async function decryptComment(accountId, encryptedComment, fromAddress, password) {
  const keyPair = await fetchKeyPair(accountId, password);
  if (!keyPair) {
    return undefined;
  }
  const {
    secretKey,
    publicKey
  } = keyPair;
  const buffer = transactions_Buffer.from(encryptedComment, 'base64');
  return decryptMessageComment(buffer, publicKey, secretKey, fromAddress);
}
async function waitUntilTransactionAppears(network, address, txId) {
  const {
    lt
  } = parseTxId(txId);
  if (lt === 0) {
    return;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const latestTxId = await fetchLatestTxId(network, address);
    if (latestTxId && parseTxId(latestTxId).lt >= lt) {
      return;
    }
    await pause(WAIT_TRANSACTION_PAUSE);
  }
}
async function fetchNewestTxId(network, address) {
  const transactions = await fetchTransactions(network, address, 1);
  if (!transactions.length) {
    return undefined;
  }
  return transactions[0].txId;
}
async function fixTokenActivitiesAddressForm(network, activities) {
  const tokenAddresses = new Set();
  for (const activity of activities) {
    if (activity.kind === 'transaction' && activity.slug !== TON_TOKEN_SLUG) {
      tokenAddresses.add(activity.fromAddress);
      tokenAddresses.add(activity.toAddress);
    }
  }
  if (!tokenAddresses.size) {
    return;
  }
  const addressBook = await fetchAddressBook(network, Array.from(tokenAddresses));
  for (const activity of activities) {
    if (activity.kind === 'transaction' && activity.slug !== TON_TOKEN_SLUG) {
      activity.fromAddress = addressBook[activity.fromAddress].user_friendly;
      activity.toAddress = addressBook[activity.toAddress].user_friendly;
    }
  }
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/contracts/NominatorPool.ts


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function nominatorPoolConfigToCell(config) {
  return (0,core_dist.beginCell)().endCell();
}
class NominatorPool {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new NominatorPool(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = nominatorPoolConfigToCell(config);
    const init = {
      code,
      data
    };
    return new NominatorPool((0,core_dist.contractAddress)(workchain, init), init);
  }

  // eslint-disable-next-line class-methods-use-this
  async getListNominators(provider) {
    const res = await provider.get('list_nominators', []);
    const items = res.stack.items[0].items;
    return items.map(item => {
      const tuple = new core_dist.TupleReader(item.items);
      const hash = tuple.readBigNumber().toString(16).padStart(64, '0');
      const address = toBase64Address(`0:${hash}`, true);
      const amount = tuple.readBigNumber();
      const pendingDepositAmount = tuple.readBigNumber();
      const withdrawRequested = Boolean(tuple.readNumber());
      return {
        address,
        amount,
        pendingDepositAmount,
        withdrawRequested
      };
    });
  }
}
;// CONCATENATED MODULE: ./src/api/common/cache.ts
let stakingCommonCache;
const accountCache = {};
function getAccountCache(accountId, address) {
  var _accountCache;
  return (_accountCache = accountCache[`${accountId}:${address}`]) !== null && _accountCache !== void 0 ? _accountCache : {};
}
function updateAccountCache(accountId, address, partial) {
  const key = `${accountId}:${address}`;
  accountCache[key] = {
    ...accountCache[key],
    ...partial
  };
}
function setStakingCommonCache(data) {
  stakingCommonCache = data;
}
function getStakingCommonCache() {
  return stakingCommonCache;
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/staking.ts














async function checkStakeDraft(accountId, amount, backendState) {
  const staked = await getStakingState(accountId, backendState);
  let type;
  let result;
  if ((staked === null || staked === void 0 ? void 0 : staked.type) === 'nominators' && amount >= ONE_TON) {
    type = 'nominators';
    const poolAddress = backendState.nominatorsPool.address;
    amount += ONE_TON;
    result = await checkTransactionDraft(accountId, TON_TOKEN_SLUG, poolAddress, amount, STAKE_COMMENT);
  } else if (amount < ONE_TON) {
    return {
      error: ApiTransactionDraftError.InvalidAmount
    };
  } else {
    type = 'liquid';
    const body = buildLiquidStakingDepositBody();
    result = await checkTransactionDraft(accountId, TON_TOKEN_SLUG, LIQUID_POOL, amount, body);
  }
  return {
    ...result,
    type
  };
}
async function checkUnstakeDraft(accountId, amount, backendState) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const commonData = getStakingCommonCache();
  const staked = await getStakingState(accountId, backendState);
  let type;
  let result;
  let tokenAmount;
  if (staked.type === 'nominators') {
    type = 'nominators';
    const poolAddress = backendState.nominatorsPool.address;
    result = await checkTransactionDraft(accountId, TON_TOKEN_SLUG, poolAddress, ONE_TON, UNSTAKE_COMMENT);
  } else if (staked.type === 'liquid') {
    type = 'liquid';
    if (amount > staked.amount) {
      return {
        error: ApiTransactionDraftError.InsufficientBalance
      };
    } else if (amount === staked.amount) {
      tokenAmount = staked.tokenAmount;
    } else {
      tokenAmount = bigintDivideToNumber(amount, commonData.liquid.currentRate);
    }
    const params = await buildLiquidStakingWithdraw(network, address, tokenAmount);
    result = await checkTransactionDraft(accountId, TON_TOKEN_SLUG, params.toAddress, params.amount, params.payload);
  } else {
    return {
      error: ApiCommonError.Unexpected
    };
  }
  return {
    ...result,
    type,
    tokenAmount
  };
}
async function submitStake(accountId, password, amount, type, backendState) {
  let result;
  const address = await fetchStoredAddress(accountId);
  if (type === 'liquid') {
    amount += ONE_TON;
    result = await submitTransfer(accountId, password, TON_TOKEN_SLUG, LIQUID_POOL, amount, buildLiquidStakingDepositBody());
  } else {
    const poolAddress = backendState.nominatorsPool.address;
    result = await submitTransfer(accountId, password, TON_TOKEN_SLUG, toBase64Address(poolAddress, true), amount, STAKE_COMMENT);
  }
  if (!('error' in result)) {
    updateAccountCache(accountId, address, {
      stakedAt: Date.now()
    });
  }
  return result;
}
async function submitUnstake(accountId, password, type, amount, backendState) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  const staked = await getStakingState(accountId, backendState);
  let result;
  if (type === 'liquid') {
    const mode = staked.type === 'liquid' && !staked.instantAvailable ? ApiLiquidUnstakeMode.BestRate : ApiLiquidUnstakeMode.Default;
    const params = await buildLiquidStakingWithdraw(network, address, amount, mode);
    result = await submitTransfer(accountId, password, TON_TOKEN_SLUG, params.toAddress, params.amount, params.payload);
  } else {
    const poolAddress = backendState.nominatorsPool.address;
    result = await submitTransfer(accountId, password, TON_TOKEN_SLUG, toBase64Address(poolAddress, true), ONE_TON, UNSTAKE_COMMENT);
  }
  return result;
}
async function buildLiquidStakingWithdraw(network, address, amount) {
  let mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ApiLiquidUnstakeMode.Default;
  const tokenWalletAddress = await resolveTokenWalletAddress(network, address, LIQUID_JETTON);
  const payload = buildLiquidStakingWithdrawBody({
    amount,
    responseAddress: address,
    fillOrKill: mode === ApiLiquidUnstakeMode.Instant,
    waitTillRoundEnd: mode === ApiLiquidUnstakeMode.BestRate
  });
  return {
    amount: ONE_TON,
    toAddress: tokenWalletAddress,
    payload
  };
}
async function getStakingState(accountId, backendState) {
  var _accountCache$stakedA, _backendState$stakedA;
  const commonData = getStakingCommonCache();
  const {
    network
  } = parseAccountId(accountId);
  const address = toBase64Address(await fetchStoredAddress(accountId), true);
  const {
    currentRate,
    collection
  } = commonData.liquid;
  const tokenBalance = await getLiquidStakingTokenBalance(accountId);
  let unstakeAmount = 0n;
  if (collection) {
    const nfts = await apiDb.nfts.where({
      accountId,
      collectionAddress: collection
    }).toArray();
    for (const nft of nfts) {
      var _nft$name;
      const billAmount = (_nft$name = nft.name) === null || _nft$name === void 0 || (_nft$name = _nft$name.match(/Bill for (?<amount>[\d.]+) Pool Jetton/)) === null || _nft$name === void 0 || (_nft$name = _nft$name.groups) === null || _nft$name === void 0 ? void 0 : _nft$name.amount;
      if (billAmount) {
        unstakeAmount += fromDecimal(billAmount);
      }
    }
  }
  const {
    loyaltyType,
    shouldUseNominators
  } = backendState;
  const accountCache = getAccountCache(accountId, address);
  const stakedAt = Math.max((_accountCache$stakedA = accountCache.stakedAt) !== null && _accountCache$stakedA !== void 0 ? _accountCache$stakedA : 0, (_backendState$stakedA = backendState.stakedAt) !== null && _backendState$stakedA !== void 0 ? _backendState$stakedA : 0);
  const isInstantUnstake = !commonData.liquid.collection && Date.now() - stakedAt > VALIDATION_PERIOD_MS;
  const liquidAvailable = isInstantUnstake ? commonData.liquid.available : 0n;
  let liquidApy = commonData.liquid.apy;
  if (loyaltyType && loyaltyType in commonData.liquid.loyaltyApy) {
    liquidApy = commonData.liquid.loyaltyApy[loyaltyType];
  }
  if (tokenBalance > 0n || unstakeAmount > 0n) {
    const fullTokenAmount = tokenBalance + unstakeAmount;
    const amount = bigintMultiplyToNumber(fullTokenAmount, currentRate);
    return {
      type: 'liquid',
      tokenAmount: tokenBalance,
      amount,
      unstakeRequestAmount: unstakeAmount,
      apy: liquidApy,
      instantAvailable: liquidAvailable
    };
  }
  const poolAddress = backendState.nominatorsPool.address;
  if (backendState.type === 'nominators') {
    const nominatorPool = getPoolContract(network, poolAddress);
    const nominators = await nominatorPool.getListNominators();
    const currentNominator = nominators.find(n => n.address === address);
    if (currentNominator) {
      return {
        type: 'nominators',
        amount: backendState.balance,
        pendingDepositAmount: currentNominator.pendingDepositAmount,
        isUnstakeRequested: currentNominator.withdrawRequested
      };
    }
  }
  if (shouldUseNominators) {
    return {
      type: 'nominators',
      amount: 0n,
      pendingDepositAmount: 0n,
      isUnstakeRequested: false
    };
  } else {
    return {
      type: 'liquid',
      tokenAmount: 0n,
      amount: 0n,
      unstakeRequestAmount: 0n,
      apy: liquidApy,
      instantAvailable: liquidAvailable
    };
  }
}
function getPoolContract(network, poolAddress) {
  return getTonClient(network).open(new NominatorPool(core_dist.Address.parse(poolAddress)));
}
async function getLiquidStakingTokenBalance(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  if (network !== 'mainnet') {
    return 0n;
  }
  const address = await fetchStoredAddress(accountId);
  const walletAddress = await resolveTokenWalletAddress(network, address, LIQUID_JETTON);
  const isInitialized = await isAddressInitialized(network, walletAddress);
  if (!isInitialized) {
    return 0n;
  }
  return getTokenBalance(network, walletAddress);
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/other.ts
/* provided dependency */ var other_Buffer = __webpack_require__(8764)["lW"];


function packPayloadToBoc(payload) {
  let cell = new core_dist.Cell();
  if (payload) {
    if (payload instanceof core_dist.Cell) {
      cell = payload;
    } else if (typeof payload === 'string') {
      if (payload.length > 0) {
        cell = new core_dist.Builder().storeUint(0, 32).storeStringTail(payload).asCell();
      }
    } else {
      cell = new core_dist.Builder().storeBuffer(other_Buffer.from(payload)).asCell();
    }
  }
  return cell.toBoc().toString('base64');
}
async function checkApiAvailability(network) {
  try {
    await getTonClient(network).getMasterchainInfo();
    return true;
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/util/assert.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/swap.ts






const MAX_NETWORK_FEE = 1000000000n; // 1 TON

async function validateDexSwapTransfers(network, address, params, transfers) {
  assert(transfers.length <= 2);
  const [mainTransfer, feeTransfer] = transfers;
  if (params.from === TON_SYMBOL) {
    const maxAmount = fromDecimal(params.fromAmount) + MAX_NETWORK_FEE;
    assert(mainTransfer.amount <= maxAmount);
    if (feeTransfer) {
      assert(feeTransfer.amount <= mainTransfer.amount);
      assert(feeTransfer.amount + mainTransfer.amount < maxAmount);
      assert(toBase64Address(feeTransfer.toAddress, false) === SWAP_FEE_ADDRESS);
    }
  } else {
    const token = findTokenByMinter(params.from);
    assert(!!token);
    const maxAmount = fromDecimal(params.fromAmount, token.decimals);
    const maxTonAmount = MAX_NETWORK_FEE;
    const walletAddress = await resolveTokenWalletAddress(network, address, token.minterAddress);
    const parsedPayload = await parsePayloadBase64(network, mainTransfer.toAddress, mainTransfer.payload);
    assert(mainTransfer.toAddress === walletAddress);
    assert(mainTransfer.amount < maxTonAmount);
    assert(['tokens:transfer', 'tokens:transfer-non-standard'].includes(parsedPayload.type));
    const {
      amount: tokenAmount
    } = parsedPayload;
    assert(tokenAmount <= maxAmount);
    if (feeTransfer) {
      const feePayload = await parsePayloadBase64(network, feeTransfer.toAddress, feeTransfer.payload);
      assert(feeTransfer.amount + mainTransfer.amount < maxTonAmount);
      assert(feeTransfer.toAddress === walletAddress);
      assert(['tokens:transfer', 'tokens:transfer-non-standard'].includes(feePayload.type));
      const {
        amount: tokenFeeAmount,
        destination
      } = feePayload;
      assert(tokenFeeAmount < tokenAmount);
      assert(tokenAmount + tokenFeeAmount <= maxAmount);
      assert(toBase64Address(destination, false) === SWAP_FEE_ADDRESS);
    }
  }
}
;// CONCATENATED MODULE: ./src/api/blockchains/ton/index.ts













;// CONCATENATED MODULE: ./src/api/blockchains/index.ts

/* harmony default export */ const blockchains = ({
  ton: ton_namespaceObject
});
;// CONCATENATED MODULE: ./src/api/hooks.ts

const hooks = {};
function addHooks(partial) {
  for (const [name, hook] of Object.entries(partial)) {
    var _hooks$name;
    hooks[name] = ((_hooks$name = hooks[name]) !== null && _hooks$name !== void 0 ? _hooks$name : []).concat([hook]);
  }
}
async function callHook(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  for (const hook of (_hooks$name2 = hooks[name]) !== null && _hooks$name2 !== void 0 ? _hooks$name2 : []) {
    var _hooks$name2;
    try {
      // @ts-ignore
      await hook(...args);
    } catch (err) {
      logDebugError(`callHooks:${name}`, err);
    }
  }
}
;// CONCATENATED MODULE: ./src/api/methods/dapps.ts






const activeDappByAccountId = {};
let onUpdate;
function initDapps(_onUpdate) {
  onUpdate = _onUpdate;
}
function onActiveDappAccountUpdated(accountId) {
  const activeDappOrigin = getActiveDapp(accountId);
  onUpdate({
    type: 'updateActiveDapp',
    accountId,
    origin: activeDappOrigin
  });
}
function activateDapp(accountId, origin) {
  const oldAccountId = findActiveDappAccount(origin);
  activeDappByAccountId[accountId] = origin;

  // The method can be called in headless mode (tonConnect:reconnect)
  if (!onUpdate || !isUpdaterAlive(onUpdate)) {
    return;
  }
  if (oldAccountId) {
    onUpdate({
      type: 'updateActiveDapp',
      accountId: oldAccountId
    });
  }
  onUpdate({
    type: 'updateActiveDapp',
    accountId,
    origin
  });
}
function getActiveDapp(accountId) {
  return activeDappByAccountId[accountId];
}
function deactivateDapp(origin) {
  const accountId = findActiveDappAccount(origin);
  if (!accountId) {
    return false;
  }
  deactivateAccountDapp(accountId);
  return true;
}
function findActiveDappAccount(origin) {
  return Object.keys(activeDappByAccountId).find(acc => origin === activeDappByAccountId[acc]);
}
function deactivateAccountDapp(accountId) {
  const activeOrigin = activeDappByAccountId[accountId];
  if (!activeOrigin) {
    return false;
  }
  delete activeDappByAccountId[accountId];
  if (onUpdate && isUpdaterAlive(onUpdate)) {
    onUpdate({
      type: 'updateActiveDapp',
      accountId
    });
  }
  return true;
}
function deactivateAllDapps() {
  for (const [accountId, value] of Object.entries(activeDappByAccountId)) {
    if (!value) {
      continue;
    }
    delete activeDappByAccountId[accountId];
    onUpdate({
      type: 'updateActiveDapp',
      accountId
    });
  }
}
function isDappActive(accountId, origin) {
  return activeDappByAccountId[accountId] === origin;
}
async function updateDapp(accountId, origin, updater) {
  const dapp = await getDapp(accountId, origin);
  await addDapp(accountId, updater(dapp));
}
async function getDapp(accountId, origin) {
  return (await getAccountValue(accountId, 'dapps'))[origin];
}
async function addDapp(accountId, dapp) {
  const dapps = await getDappsByOrigin(accountId);
  dapps[dapp.origin] = dapp;
  await setAccountValue(accountId, 'dapps', dapps);
}
async function deleteDapp(accountId, origin, dontNotifyDapp) {
  const dapps = await getDappsByOrigin(accountId);
  if (!(origin in dapps)) {
    return false;
  }
  if (isDappActive(accountId, origin)) {
    deactivateAccountDapp(accountId);
  }
  delete dapps[origin];
  await setAccountValue(accountId, 'dapps', dapps);
  if (onUpdate && isUpdaterAlive(onUpdate)) {
    onUpdate({
      type: 'dappDisconnect',
      accountId,
      origin
    });
  }
  if (!dontNotifyDapp) {
    await callHook('onDappDisconnected', accountId, origin);
  }
  await callHook('onDappsChanged');
  return true;
}
async function deleteAllDapps(accountId) {
  deactivateAccountDapp(accountId);
  const origins = Object.keys(await getDappsByOrigin(accountId));
  await setAccountValue(accountId, 'dapps', {});
  origins.forEach(origin => {
    onUpdate({
      type: 'dappDisconnect',
      accountId,
      origin
    });
    callHook('onDappDisconnected', accountId, origin);
  });
  await callHook('onDappsChanged');
}
async function getDapps(accountId) {
  return Object.values(await getDappsByOrigin(accountId));
}
async function getDappsByOrigin(accountId) {
  return (await getAccountValue(accountId, 'dapps')) || {};
}
async function findLastConnectedAccount(network, origin) {
  const dapps = (await getDappsState()) || {};
  let connectedAt = 0;
  let lastConnectedAccountId;
  Object.entries(dapps).forEach(_ref => {
    let [accountId, byOrigin] = _ref;
    if (!(origin in byOrigin)) return;
    if (byOrigin[origin].connectedAt > connectedAt) {
      connectedAt = byOrigin[origin].connectedAt;
      lastConnectedAccountId = accountId;
    }
  });
  if (!lastConnectedAccountId) {
    return undefined;
  }
  return buildAccountId({
    ...parseAccountId(lastConnectedAccountId),
    network
  });
}
function getDappsState() {
  return storages_storage.getItem('dapps');
}
async function removeAccountDapps(accountId) {
  await removeAccountValue(accountId, 'dapps');
  callHook('onDappsChanged');
}
async function removeAllDapps() {
  await storages_storage.removeItem('dapps');
  await callHook('onDappsChanged');
}
function removeNetworkDapps(network) {
  return removeNetworkAccountsValue(network, 'dapps');
}
function getSseLastEventId() {
  return storages_storage.getItem('sseLastEventId');
}
function setSseLastEventId(lastEventId) {
  return storages_storage.setItem('sseLastEventId', lastEventId);
}
function fetchDappCatalog() {
  return callBackendGet('/dapp/catalog');
}
;// CONCATENATED MODULE: ./src/util/Deferred.ts
function Deferred_defineProperty(obj, key, value) { key = Deferred_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Deferred_toPropertyKey(arg) { var key = Deferred_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function Deferred_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Deferred {
  constructor() {
    Deferred_defineProperty(this, "promise", void 0);
    Deferred_defineProperty(this, "reject", void 0);
    Deferred_defineProperty(this, "resolve", void 0);
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
  static resolved(value) {
    const deferred = new Deferred();
    deferred.resolve(value);
    return deferred;
  }
}
;// CONCATENATED MODULE: ./src/util/pauseOrFocus.ts


const deferreds = new Set();
let isFocused = true;
function pauseOrFocus(ms) {
  let msWhenNotFocused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ms;
  const deferred = new Deferred();
  deferreds.add(deferred);
  deferred.promise.then(() => {
    deferreds.delete(deferred);
  });
  pause(isFocused ? ms : msWhenNotFocused).then(deferred.resolve);
  return deferred.promise;
}
function setIsAppFocused(_isFocused) {
  isFocused = _isFocused;
  if (_isFocused) {
    deferreds.forEach(d => d.resolve());
  }
}
;// CONCATENATED MODULE: ./src/util/callbacks.ts
function callbacks_defineProperty(obj, key, value) { key = callbacks_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function callbacks_toPropertyKey(arg) { var key = callbacks_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function callbacks_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function createCallbackManager() {
  const callbacks = new Set();
  function addCallback(cb) {
    callbacks.add(cb);
    return () => {
      removeCallback(cb);
    };
  }
  function removeCallback(cb) {
    callbacks.delete(cb);
  }
  function runCallbacks() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callbacks.forEach(callback => {
      callback(...args);
    });
  }
  function hasCallbacks() {
    return Boolean(callbacks.size);
  }
  return {
    runCallbacks,
    addCallback,
    removeCallback,
    hasCallbacks
  };
}
class EventEmitter {
  constructor() {
    callbacks_defineProperty(this, "channels", new Map());
  }
  on(name, handler) {
    this.resolveChannel(name).addCallback(handler);
    return this;
  }
  removeListener(name, handler) {
    this.resolveChannel(name).removeCallback(handler);
    return this;
  }
  emit(name) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this.resolveChannel(name).runCallbacks(...args);
    return this;
  }
  resolveChannel(name) {
    let channel = this.channels.get(name);
    if (!channel) {
      channel = createCallbackManager();
      this.channels.set(name, channel);
    }
    return channel;
  }
}
;// CONCATENATED MODULE: ./src/api/common/txCallbacks.ts

const txCallbacks = createCallbackManager();
function whenTxComplete(normalizedAddress, amount) {
  return new Promise(resolve => {
    txCallbacks.addCallback(function callback(transaction) {
      if (transaction.normalizedAddress === normalizedAddress && transaction.amount === -amount) {
        txCallbacks.removeCallback(callback);
        resolve({
          result: true,
          transaction
        });
      }
    });
  });
}
;// CONCATENATED MODULE: ./src/api/methods/nfts.ts



let nfts_onUpdate;
function initNfts(_onUpdate) {
  nfts_onUpdate = _onUpdate;
}
function fetchNfts(accountId) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  return blockchain.getAccountNfts(accountId);
}
async function processNftUpdates(accountId, updates) {
  updates.filter(update => !(update.type === 'nftReceived' && update.nft.isHidden)).forEach(nfts_onUpdate);
  for (const update of updates) {
    if (update.type === 'nftSent') {
      const key = [accountId, update.nftAddress];
      await apiDb.nfts["delete"](key);
    } else if (update.type === 'nftReceived') {
      const dbNft = convertToDbEntity(accountId, update.nft);
      await apiDb.nfts.put(dbNft);
    } else if (update.type === 'nftPutUpForSale') {
      const key = [accountId, update.nftAddress];
      await apiDb.nfts.update(key, {
        isOnSale: true
      });
    }
  }
}
async function updateNfts(accountId, nfts) {
  const visibleNfts = nfts.filter(nft => !nft.isHidden);
  nfts_onUpdate({
    type: 'updateNfts',
    accountId,
    nfts: visibleNfts
  });
  const dbNfts = nfts.map(nft => convertToDbEntity(accountId, nft));
  await apiDb.nfts.where({
    accountId
  }).delete();
  await apiDb.nfts.bulkPut(dbNfts);
}
function convertToDbEntity(accountId, nft) {
  var _nft$collectionAddres;
  return {
    ...nft,
    collectionAddress: (_nft$collectionAddres = nft.collectionAddress) !== null && _nft$collectionAddres !== void 0 ? _nft$collectionAddres : '',
    accountId
  };
}
;// CONCATENATED MODULE: ./src/api/methods/prices.ts


async function getBaseCurrency() {
  var _await$storage$getIte;
  return (_await$storage$getIte = await storages_storage.getItem('baseCurrency')) !== null && _await$storage$getIte !== void 0 ? _await$storage$getIte : DEFAULT_PRICE_CURRENCY;
}
function setBaseCurrency(currency) {
  return storages_storage.setItem('baseCurrency', currency);
}
;// CONCATENATED MODULE: ./src/api/methods/other.ts
/* provided dependency */ var methods_other_Buffer = __webpack_require__(8764)["lW"];






const SIGN_MESSAGE = methods_other_Buffer.from('MyTonWallet_AuthToken_n6i0k4w8pb');
let clientId;
function other_checkApiAvailability(options) {
  let network;
  let blockchainKey;
  if ('network' in options) {
    ({
      network,
      blockchainKey
    } = options);
  } else {
    ({
      network,
      blockchain: blockchainKey
    } = parseAccountId(options.accountId));
  }
  const blockchain = blockchains[blockchainKey];
  return blockchain.checkApiAvailability(network);
}
async function getBackendAuthToken(accountId, password) {
  const account = await fetchStoredAccount(accountId);
  let authToken = account.authToken;
  if (!authToken) {
    const privateKey = await blockchains.ton.fetchPrivateKey(accountId, password);
    const signature = nacl_fast_default().sign.detached(SIGN_MESSAGE, privateKey);
    authToken = methods_other_Buffer.from(signature).toString('base64');
    await updateStoredAccount(accountId, {
      authToken
    });
  }
  if (!account.isInitialized) {
    authToken += `:${account.publicKey}`;
  }
  return authToken;
}
async function getClientId() {
  clientId = await storages_storage.getItem('clientId');
  if (!clientId) {
    clientId = methods_other_Buffer.from((0,nacl_fast.randomBytes)(10)).toString('hex');
    await storages_storage.setItem('clientId', clientId);
  }
  return clientId;
}
async function fetchAccountConfigForDebugPurposesOnly() {
  try {
    const [accounts, mnemonicsEncrypted] = await Promise.all([fetchStoredAccounts(), storages_storage.getItem('mnemonicsEncrypted')]);
    return JSON.stringify({
      accounts,
      mnemonicsEncrypted
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  }
}

;// CONCATENATED MODULE: ./src/util/swap/buildSwapId.ts
function buildSwapId(backendId) {
  return `swap:${backendId}`;
}
;// CONCATENATED MODULE: ./src/api/methods/tokens.ts


function tokens_fetchToken(accountId, address) {
  const {
    network,
    blockchain: blockchainKey
  } = parseAccountId(accountId);
  const blockchain = blockchains[blockchainKey];
  return blockchain.fetchToken(network, address);
}
function tokens_resolveTokenBySlug(slug) {
  const blockchain = blockchains.ton;
  return blockchain.resolveTokenBySlug(slug);
}
function tokens_resolveTokenWalletAddress(network, address, minterAddress) {
  const blockchain = blockchains.ton;
  return blockchain.resolveTokenWalletAddress(network, address, minterAddress);
}
function tokens_resolveTokenMinterAddress(network, tokenWalletAddress) {
  const blockchain = blockchains.ton;
  return blockchain.resolveTokenMinterAddress(network, tokenWalletAddress);
}
function tokens_buildTokenSlug(address) {
  const blockchain = blockchains.ton;
  return blockchain.buildTokenSlug(address);
}
function fetchTokenBalances(accountId) {
  const blockchain = blockchains.ton;
  return blockchain.getAccountTokenBalances(accountId);
}
function fetchTokenBalancesByAddress(address, network) {
  const blockchain = blockchains.ton;
  return blockchain.getAddressTokenBalances(address, network);
}
;// CONCATENATED MODULE: ./src/api/methods/swap.ts














const SWAP_MAX_LT = 50;
const SWAP_WAITING_TIME = 5 * 60 * 1_000; // 5 min
const SWAP_WAITING_PAUSE = 1_000; // 1 sec
const MAX_OLD_SWAP_ID = 41276;
const ton = blockchains.ton;
let swap_onUpdate;
function initSwap(_onUpdate) {
  swap_onUpdate = _onUpdate;
}
async function swapBuildTransfer(accountId, password, params) {
  const {
    network
  } = parseAccountId(accountId);
  const authToken = await getBackendAuthToken(accountId, password);
  const address = await fetchStoredAddress(accountId);
  const {
    id,
    transfers
  } = await swapBuild(authToken, params);
  const transferList = transfers.map(transfer => ({
    ...transfer,
    amount: BigInt(transfer.amount),
    isBase64Payload: true
  }));
  await ton.validateDexSwapTransfers(network, address, params, transferList);
  const result = await ton.checkMultiTransactionDraft(accountId, transferList);
  if ('error' in result) {
    return result;
  }
  return {
    ...result,
    id,
    transfers
  };
}
async function swapSubmit(accountId, password, fee, transfers, historyItem) {
  const transferList = transfers.map(transfer => ({
    ...transfer,
    amount: BigInt(transfer.amount),
    isBase64Payload: true
  }));
  const result = await ton.submitMultiTransfer(accountId, password, transferList);
  if ('error' in result) {
    return result;
  }
  const from = getSwapItemSlug(historyItem, historyItem.from);
  const to = getSwapItemSlug(historyItem, historyItem.to);
  const swap = {
    ...historyItem,
    id: buildSwapId(historyItem.id),
    from,
    to,
    kind: 'swap'
  };
  swap_onUpdate({
    type: 'newActivities',
    accountId,
    activities: [swap]
  });
  void callHook('onSwapCreated', accountId, swap.timestamp - 1);
  return result;
}
function getSwapItemSlug(item, asset) {
  if (asset === TON_SYMBOL) return TON_TOKEN_SLUG;
  if (item.cex) return asset;
  return buildTokenSlug(asset);
}
async function swapReplaceTransactions(accountId, transactions, network, slug) {
  if (!transactions.length || network === 'testnet') {
    return transactions;
  }
  try {
    var _resolveTokenBySlug$m;
    const address = await fetchStoredAddress(accountId);
    const asset = slug ? (_resolveTokenBySlug$m = tokens_resolveTokenBySlug(slug).minterAddress) !== null && _resolveTokenBySlug$m !== void 0 ? _resolveTokenBySlug$m : TON_SYMBOL : undefined;
    const {
      fromLt,
      toLt,
      fromTime,
      toTime
    } = buildSwapHistoryRange(transactions);
    const swaps = await swapGetHistory(address, {
      fromLt,
      toLt,
      fromTimestamp: fromTime,
      toTimestamp: toTime,
      asset
    });
    if (!swaps.length) {
      return transactions;
    }
    return replaceTransactions(transactions, swaps);
  } catch (err) {
    logDebugError('swapReplaceTransactions', err);
    return transactions;
  }
}
async function swapReplaceTransactionsByRanges(accountId, transactions, chunks, isFirstLoad) {
  const {
    network
  } = parseAccountId(accountId);
  if (!chunks.length || network === 'testnet') {
    return [];
  }
  try {
    const address = await fetchStoredAddress(accountId);
    if (!isFirstLoad) {
      await waitPendingDexSwap(address);
    }
    const ranges = chunks.map(txs => buildSwapHistoryRange(txs));
    const swaps = await swapGetHistoryByRanges(address, ranges);
    if (!swaps.length) {
      return [...transactions];
    }
    return replaceTransactions(transactions, swaps);
  } catch (err) {
    logDebugError('swapReplaceTransactionsByRanges', err);
    return [...transactions];
  }
}
function replaceTransactions(transactions, swaps) {
  const result = [];
  const hiddenTxIds = new Set();
  const skipLtRanges = []; // TODO Remove it after applying correcting script in backend

  for (const swap of swaps) {
    var _swap$txIds;
    (_swap$txIds = swap.txIds) === null || _swap$txIds === void 0 ? void 0 : _swap$txIds.forEach(txId => {
      hiddenTxIds.add(txId);
    });
    if (swap.lt && Number(swap.id) < MAX_OLD_SWAP_ID) {
      skipLtRanges.push([swap.lt, swap.lt + SWAP_MAX_LT]);
    }
    const swapActivity = swapItemToActivity(swap);
    result.push(swapActivity);
  }
  for (let transaction of transactions) {
    const [ltString, hash] = transaction.txId.split(':');
    const lt = Number(ltString);
    const shortenedTxId = `${lt}:${hash}`;
    const shouldHide = Boolean(hiddenTxIds.has(shortenedTxId) || skipLtRanges.find(_ref => {
      let [startLt, endLt] = _ref;
      return lt >= startLt && lt <= endLt;
    }));
    if (shouldHide) {
      transaction = {
        ...transaction,
        shouldHide
      };
    }
    result.push(transaction);
  }
  return result;
}
async function waitPendingDexSwap(address) {
  const waitUntil = Date.now() + SWAP_WAITING_TIME;
  while (Date.now() < waitUntil) {
    const pendingSwaps = await swapGetHistory(address, {
      status: 'pending',
      isCex: false
    });
    if (!pendingSwaps.length) {
      break;
    }
    await pause(SWAP_WAITING_PAUSE);
  }
}
function buildSwapHistoryRange(transactions) {
  const firstLt = parseTxId(transactions[0].txId).lt;
  const lastLt = parseTxId(transactions[transactions.length - 1].txId).lt;
  const firstTimestamp = transactions[0].timestamp;
  const lastTimestamp = transactions[transactions.length - 1].timestamp;
  const [fromLt, fromTime] = firstLt > lastLt ? [lastLt, lastTimestamp] : [firstLt, firstTimestamp];
  const [toLt, toTime] = firstLt > lastLt ? [firstLt, firstTimestamp] : [lastLt, lastTimestamp];
  const slug = transactions[0].slug;
  const asset = slug === TON_TOKEN_SLUG ? TON_SYMBOL : tokens_resolveTokenBySlug(slug).minterAddress;
  return {
    asset,
    fromLt: Math.floor(fromLt / 100) * 100,
    toLt,
    fromTime,
    toTime
  };
}
function swapItemToActivity(swap) {
  return {
    ...swap,
    id: buildSwapId(swap.id),
    kind: 'swap',
    from: getSwapItemSlug(swap, swap.from),
    to: getSwapItemSlug(swap, swap.to)
  };
}
function swapEstimate(params) {
  return callBackendPost('/swap/ton/estimate', params, {
    isAllowBadRequest: true
  });
}
function swapBuild(authToken, params) {
  return callBackendPost('/swap/ton/build', params, {
    authToken
  });
}
function swapGetAssets() {
  return callBackendGet('/swap/assets');
}
function swapGetTonCurrencies() {
  return callBackendGet('/swap/ton/tokens');
}
function swapGetPairs(symbolOrMinter) {
  return callBackendGet('/swap/pairs', {
    asset: symbolOrMinter
  });
}
function swapGetHistory(address, params) {
  return callBackendGet(`/swap/history/${address}`, params);
}
function swapGetHistoryByRanges(address, ranges) {
  return callBackendPost(`/swap/history-ranges/${address}`, {
    ranges
  });
}
function swapGetHistoryItem(address, id) {
  return callBackendGet(`/swap/history/${address}/${id}`);
}
function swapCexEstimate(params) {
  return callBackendPost('/swap/cex/estimate', params);
}
function swapCexValidateAddress(params) {
  return callBackendGet('/swap/cex/validate-address', params);
}
async function swapCexCreateTransaction(accountId, password, params) {
  const authToken = await getBackendAuthToken(accountId, password);
  const {
    swap
  } = await callBackendPost('/swap/cex/createTransaction', params, {
    authToken
  });
  const activity = swapItemToActivity(swap);
  let transfer;
  if (params.from === TON_SYMBOL) {
    transfer = {
      toAddress: swap.cex.payinAddress,
      amount: fromDecimal(swap.fromAmount)
    };
    assert(transfer.amount <= fromDecimal(params.fromAmount));
  }
  swap_onUpdate({
    type: 'newActivities',
    accountId,
    activities: [activity]
  });
  void callHook('onSwapCreated', accountId, swap.timestamp - 1);
  return {
    swap,
    activity,
    transfer
  };
}
;// CONCATENATED MODULE: ./src/api/methods/transactions.ts







let transactions_onUpdate;
function initTransactions(_onUpdate) {
  transactions_onUpdate = _onUpdate;
}
async function fetchTokenActivitySlice(accountId, slug, fromTxId, limit) {
  const {
    network,
    blockchain
  } = parseAccountId(accountId);
  const activeBlockchain = blockchains[blockchain];
  try {
    const transactions = await activeBlockchain.getTokenTransactionSlice(accountId, slug, fromTxId, undefined, limit);
    const activities = await swapReplaceTransactions(accountId, transactions, network, slug);
    await activeBlockchain.fixTokenActivitiesAddressForm(network, activities);
    return activities;
  } catch (err) {
    logDebugError('fetchTokenActivitySlice', err);
    return handleServerError(err);
  }
}
async function fetchAllActivitySlice(accountId, lastTxIds, limit) {
  const {
    network,
    blockchain
  } = parseAccountId(accountId);
  const activeBlockchain = blockchains[blockchain];
  try {
    const transactions = await activeBlockchain.getMergedTransactionSlice(accountId, lastTxIds, limit);
    const activities = await swapReplaceTransactions(accountId, transactions, network);
    await activeBlockchain.fixTokenActivitiesAddressForm(network, activities);
    return activities;
  } catch (err) {
    logDebugError('fetchAllActivitySlice', err);
    return handleServerError(err);
  }
}
function transactions_checkTransactionDraft(accountId, slug, toAddress, amount, comment, shouldEncrypt) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  return blockchain.checkTransactionDraft(accountId, slug, toAddress, amount, comment, undefined, shouldEncrypt);
}
async function transactions_submitTransfer(options) {
  let shouldCreateLocalTransaction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const {
    accountId,
    password,
    slug,
    toAddress,
    amount,
    comment,
    fee,
    shouldEncrypt
  } = options;
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  const fromAddress = await fetchStoredAddress(accountId);
  const result = await blockchain.submitTransfer(accountId, password, slug, toAddress, amount, comment, undefined, shouldEncrypt);
  if ('error' in result) {
    return result;
  }
  const {
    encryptedComment
  } = result;
  if (!shouldCreateLocalTransaction) {
    return result;
  }
  const localTransaction = createLocalTransaction(accountId, {
    amount,
    fromAddress,
    toAddress,
    comment: shouldEncrypt ? undefined : comment,
    encryptedComment,
    fee: fee || 0n,
    slug
  });
  return {
    ...result,
    txId: localTransaction.txId
  };
}
async function transactions_waitLastTransfer(accountId) {
  const blockchain = blockchains.ton;
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  return blockchain.waitLastTransfer(network, address);
}
async function sendSignedTransferMessage(accountId, message) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  await blockchain.sendSignedMessage(accountId, message);
  const localTransaction = createLocalTransaction(accountId, message.params);
  return localTransaction.txId;
}
async function sendSignedTransferMessages(accountId, messages) {
  const blockchain = blockchains.ton;
  const result = await blockchain.sendSignedMessages(accountId, messages);
  for (let i = 0; i < result.successNumber; i++) {
    createLocalTransaction(accountId, messages[i].params);
  }
  return result;
}
function transactions_decryptComment(accountId, encryptedComment, fromAddress, password) {
  const blockchain = blockchains.ton;
  return blockchain.decryptComment(accountId, encryptedComment, fromAddress, password);
}
function createLocalTransaction(accountId, params) {
  const blockchainKey = parseAccountId(accountId).blockchain;
  const blockchain = blockchains[blockchainKey];
  const {
    toAddress
  } = params;
  const normalizedAddress = blockchain.normalizeAddress(toAddress);
  const localTransaction = buildLocalTransaction(params, normalizedAddress);
  transactions_onUpdate({
    type: 'newLocalTransaction',
    transaction: localTransaction,
    accountId
  });
  return localTransaction;
}
;// CONCATENATED MODULE: ./src/api/methods/staking.ts













const CACHE_TTL = 5000; // 5 s.
let backendStakingStateByAddress = {};

// let onUpdate: OnApiUpdate;

function initStaking() {
  // onUpdate = _onUpdate;
}
async function staking_checkStakeDraft(accountId, amount) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  const backendState = await getBackendStakingState(accountId);
  return blockchain.checkStakeDraft(accountId, amount, backendState);
}
async function staking_checkUnstakeDraft(accountId, amount) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  const backendState = await getBackendStakingState(accountId);
  return blockchain.checkUnstakeDraft(accountId, amount, backendState);
}
async function staking_submitStake(accountId, password, amount, type, fee) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  const fromAddress = await fetchStoredAddress(accountId);
  const backendState = await getBackendStakingState(accountId);
  const result = await blockchain.submitStake(accountId, password, amount, type, backendState);
  if ('error' in result) {
    return false;
  }
  onStakingChangeExpected();
  const localTransaction = createLocalTransaction(accountId, {
    amount: result.amount,
    fromAddress,
    toAddress: result.toAddress,
    comment: STAKE_COMMENT,
    fee: fee || 0n,
    type: 'stake',
    slug: TON_TOKEN_SLUG
  });
  return {
    ...result,
    txId: localTransaction.txId
  };
}
async function staking_submitUnstake(accountId, password, type, amount, fee) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  const fromAddress = await fetchStoredAddress(accountId);
  const backendState = await getBackendStakingState(accountId);
  const result = await blockchain.submitUnstake(accountId, password, type, amount, backendState);
  if ('error' in result) {
    return false;
  }
  onStakingChangeExpected();
  const localTransaction = createLocalTransaction(accountId, {
    amount: result.amount,
    fromAddress,
    toAddress: result.toAddress,
    comment: UNSTAKE_COMMENT,
    fee: fee || 0n,
    type: 'unstakeRequest',
    slug: TON_TOKEN_SLUG
  });
  return {
    ...result,
    txId: localTransaction.txId
  };
}
async function getBackendStakingState(accountId) {
  const {
    address,
    ledger
  } = await fetchStoredAccount(accountId);
  const state = await fetchBackendStakingState(address, Boolean(ledger));
  return {
    ...state,
    nominatorsPool: {
      ...state.nominatorsPool,
      start: state.nominatorsPool.start * 1000,
      end: state.nominatorsPool.end * 1000
    }
  };
}
async function fetchBackendStakingState(address, isLedger) {
  const cacheItem = backendStakingStateByAddress[address];
  if (cacheItem && cacheItem[0] > Date.now()) {
    return cacheItem[1];
  }
  const headers = {
    ...getEnvironment().apiHeaders,
    'X-App-Version': APP_VERSION,
    'X-App-ClientID': await getClientId(),
    'X-App-Env': APP_ENV
  };
  const stakingState = await callBackendGet(`/staking/state/${address}`, {
    isLedger
  }, headers);
  stakingState.balance = fromDecimal(stakingState.balance);
  stakingState.totalProfit = fromDecimal(stakingState.totalProfit);
  if (!isKnownStakingPool(stakingState.nominatorsPool.address)) {
    throw Error('Unexpected pool address, likely a malicious activity');
  }
  backendStakingStateByAddress[address] = [Date.now() + CACHE_TTL, stakingState];
  return stakingState;
}
async function getStakingHistory(accountId, limit, offset) {
  const address = await fetchStoredAddress(accountId);
  return callBackendGet(`/staking/profits/${address}`, {
    limit,
    offset
  });
}
function onStakingChangeExpected() {
  backendStakingStateByAddress = {};
}
async function tryUpdateStakingCommonData() {
  try {
    const data = await callBackendGet('/staking/common');
    data.round.start *= 1000;
    data.round.end *= 1000;
    data.round.unlock *= 1000;
    data.prevRound.start *= 1000;
    data.prevRound.end *= 1000;
    data.prevRound.unlock *= 1000;
    data.liquid.available = fromDecimal(data.liquid.available);
    setStakingCommonCache(data);
  } catch (err) {
    logDebugError('tryUpdateLiquidStakingState', err);
  }
}
;// CONCATENATED MODULE: ./src/api/methods/polling.ts




















const SEC = 1000;
const BALANCE_BASED_INTERVAL = 1.1 * SEC;
const BALANCE_BASED_INTERVAL_WHEN_NOT_FOCUSED = 10 * SEC;
const STAKING_INTERVAL = 1.1 * SEC;
const STAKING_INTERVAL_WHEN_NOT_FOCUSED = 10 * SEC;
const BACKEND_INTERVAL = 30 * SEC;
const LONG_BACKEND_INTERVAL = 60 * SEC;
const NFT_FULL_INTERVAL = 60 * SEC;
const SWAP_POLLING_INTERVAL = 3 * SEC;
const SWAP_POLLING_INTERVAL_WHEN_NOT_FOCUSED = 10 * SEC;
const SWAP_FINISHED_STATUSES = new Set(['failed', 'completed', 'expired']);
const VERSIONS_INTERVAL = 5 * 60 * SEC;
const VERSIONS_INTERVAL_WHEN_NOT_FOCUSED = 15 * 60 * SEC;
const FIRST_TRANSACTIONS_LIMIT = 50;
const DOUBLE_CHECK_TOKENS_PAUSE = 30 * SEC;
let polling_onUpdate;
let isAccountActive;
let resolvePreloadPromise;
const preloadEnsurePromise = new Promise(resolve => {
  resolvePreloadPromise = resolve;
});
const prices = {
  baseCurrency: DEFAULT_PRICE_CURRENCY,
  bySlug: {}
};
let swapPollingAccountId;
const lastBalanceCache = {};
async function initPolling(_onUpdate, _isAccountActive) {
  polling_onUpdate = _onUpdate;
  isAccountActive = _isAccountActive;
  await tryUpdatePrices();
  Promise.all([tryUpdateKnownAddresses(), tryUpdateTokens(_onUpdate), tryLoadSwapTokens(_onUpdate), tryUpdateStakingCommonData()]).then(() => resolvePreloadPromise());
  void tryUpdateRegion(_onUpdate);
  void setupBackendPolling();
  void setupLongBackendPolling();
}
function registerNewTokens(tokenBalances) {
  const tokens = getKnownTokens();
  let areNewTokensFound = false;
  for (const {
    token
  } of tokenBalances.filter(Boolean)) {
    if (token.slug in tokens) continue;
    areNewTokensFound = true;
    tokens[token.slug] = {
      ...token,
      quote: prices.bySlug[token.slug] || {
        price: 0.0,
        percentChange1h: 0.0,
        percentChange24h: 0.0,
        percentChange7d: 0.0,
        percentChange30d: 0.0
      }
    };
  }
  if (areNewTokensFound) {
    sendUpdateTokens();
  }
}
async function setupBalanceBasedPolling(accountId) {
  let newestTxIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  delete lastBalanceCache[accountId];
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredAccount(accountId);
  const {
    address
  } = account;
  let {
    isInitialized
  } = account;
  let nftFromSec = Math.round(Date.now() / 1000);
  let nftUpdates;
  let lastNftFullUpdate = 0;
  let doubleCheckTokensTime;
  let tokenBalances;
  const localOnUpdate = polling_onUpdate;
  while (isAlive(localOnUpdate, accountId)) {
    try {
      const walletInfo = await blockchain.getWalletInfo(network, address);
      if (!isAlive(localOnUpdate, accountId)) return;
      const {
        balance,
        lastTxId
      } = walletInfo !== null && walletInfo !== void 0 ? walletInfo : {};
      if (Date.now() - lastNftFullUpdate > NFT_FULL_INTERVAL) {
        const nfts = await blockchain.getAccountNfts(accountId).catch(logAndRescue);
        lastNftFullUpdate = Date.now();
        if (!isAlive(localOnUpdate, accountId)) return;
        if (nfts) {
          nftFromSec = Math.round(Date.now() / 1000);
          if (!isAlive(localOnUpdate, accountId)) return;
          void updateNfts(accountId, nfts);
        }
      }

      // Process TON balance
      const cache = lastBalanceCache[accountId];
      const changedTokenSlugs = [];
      const isTonBalanceChanged = balance !== undefined && balance !== (cache === null || cache === void 0 ? void 0 : cache.balance);
      const balancesToUpdate = {};
      if (isTonBalanceChanged) {
        balancesToUpdate[TON_TOKEN_SLUG] = balance;
        lastBalanceCache[accountId] = {
          ...lastBalanceCache[accountId],
          balance
        };
      }

      // Fetch and process token balances
      if (isTonBalanceChanged || doubleCheckTokensTime && doubleCheckTokensTime < Date.now()) {
        doubleCheckTokensTime = isTonBalanceChanged ? Date.now() + DOUBLE_CHECK_TOKENS_PAUSE : undefined;
        tokenBalances = await blockchain.getAccountTokenBalances(accountId).catch(logAndRescue);
        if (!isAlive(localOnUpdate, accountId)) return;
        if (tokenBalances) {
          registerNewTokens(tokenBalances);
          tokenBalances.forEach(_ref => {
            let {
              slug,
              balance: tokenBalance
            } = _ref;
            const cachedBalance = (cache === null || cache === void 0 ? void 0 : cache.tokenBalances) && cache.tokenBalances[slug];
            if (cachedBalance === tokenBalance) return;
            changedTokenSlugs.push(slug);
            balancesToUpdate[slug] = tokenBalance;
          });
          lastBalanceCache[accountId] = {
            ...lastBalanceCache[accountId],
            tokenBalances: Object.fromEntries(tokenBalances.map(_ref2 => {
              let {
                slug,
                balance: tokenBalance
              } = _ref2;
              return [slug, tokenBalance];
            }))
          };
        }
        if (Object.keys(balancesToUpdate).length > 0) {
          polling_onUpdate({
            type: 'updateBalances',
            accountId,
            balancesToUpdate
          });
        }
      }

      // Fetch transactions for tokens with a changed balance
      if (isTonBalanceChanged || changedTokenSlugs.length) {
        if (lastTxId) {
          await blockchain.waitUntilTransactionAppears(network, address, lastTxId);
        }
        const newTxIds = await processNewActivities(accountId, newestTxIds, changedTokenSlugs, tokenBalances);
        newestTxIds = {
          ...newestTxIds,
          ...newTxIds
        };
      }

      // Fetch NFT updates
      if (isTonBalanceChanged) {
        const nftResult = await blockchain.getNftUpdates(accountId, nftFromSec).catch(logAndRescue);
        if (!isAlive(localOnUpdate, accountId)) return;
        if (nftResult) {
          [nftFromSec, nftUpdates] = nftResult;
          void processNftUpdates(accountId, nftUpdates);
        }
      }
      if (isTonBalanceChanged && !isInitialized && (await blockchain.isAddressInitialized(network, address))) {
        isInitialized = true;
        await updateStoredAccount(accountId, {
          isInitialized
        });
      }
    } catch (err) {
      logDebugError('setupBalanceBasedPolling', err);
    }
    await pauseOrFocus(BALANCE_BASED_INTERVAL, BALANCE_BASED_INTERVAL_WHEN_NOT_FOCUSED);
  }
}
async function setupStakingPolling(accountId) {
  const {
    blockchain: blockchainKey,
    network
  } = parseAccountId(accountId);
  const blockchain = blockchains[blockchainKey];
  if (network !== 'mainnet') {
    return;
  }
  const localOnUpdate = polling_onUpdate;
  let lastState;
  while (isAlive(localOnUpdate, accountId)) {
    try {
      const stakingCommonData = getStakingCommonCache();
      const backendStakingState = await getBackendStakingState(accountId);
      const stakingState = await blockchain.getStakingState(accountId, backendStakingState);
      if (!isAlive(localOnUpdate, accountId)) return;
      const state = {
        stakingCommonData,
        backendStakingState,
        stakingState
      };
      if (!areDeepEqual(state, lastState)) {
        lastState = state;
        polling_onUpdate({
          type: 'updateStaking',
          accountId,
          ...state
        });
      }
    } catch (err) {
      logDebugError('setupStakingPolling', err);
    }
    await pauseOrFocus(STAKING_INTERVAL, STAKING_INTERVAL_WHEN_NOT_FOCUSED);
  }
}
async function processNewActivities(accountId, newestTxIds, tokenSlugs, tokenBalances) {
  const {
    network,
    blockchain
  } = parseAccountId(accountId);
  const activeBlockchain = blockchains[blockchain];
  const chunks = [];
  const result = [];

  // Process TON transactions first
  {
    const slug = TON_TOKEN_SLUG;
    let newestTxId = newestTxIds[slug];
    const transactions = await activeBlockchain.getTokenTransactionSlice(accountId, slug, undefined, newestTxId, FIRST_TRANSACTIONS_LIMIT);
    if (transactions.length) {
      newestTxId = transactions[0].txId;
      chunks.push(transactions);
    }
    result.push([slug, newestTxId]);

    // Find affected token wallets
    const tokenBalanceByAddress = buildCollectionByKey(tokenBalances !== null && tokenBalances !== void 0 ? tokenBalances : [], 'jettonWallet');
    transactions.forEach(_ref3 => {
      let {
        isIncoming,
        toAddress,
        fromAddress
      } = _ref3;
      const address = isIncoming ? fromAddress : toAddress;
      const tokenBalance = tokenBalanceByAddress[address];
      if (tokenBalance && !tokenSlugs.includes(tokenBalance.slug)) {
        tokenSlugs = tokenSlugs.concat([tokenBalance.slug]);
      }
    });
  }

  // Process token transactions
  await Promise.all(tokenSlugs.map(async slug => {
    let newestTxId = newestTxIds[slug];
    const transactions = await activeBlockchain.getTokenTransactionSlice(accountId, slug, undefined, newestTxId, FIRST_TRANSACTIONS_LIMIT);
    if (transactions.length) {
      newestTxId = transactions[0].txId;
      chunks.push(transactions);
    }
    result.push([slug, newestTxId]);
  }));
  const allTransactions = chunks.flat().sort((a, b) => compareActivities(a, b));
  const isFirstRun = !Object.keys(newestTxIds).length;
  const activities = await swapReplaceTransactionsByRanges(accountId, allTransactions, chunks, isFirstRun);
  allTransactions.sort((a, b) => compareActivities(a, b, true));
  allTransactions.forEach(transaction => {
    txCallbacks.runCallbacks(transaction);
  });
  await activeBlockchain.fixTokenActivitiesAddressForm(network, activities);
  polling_onUpdate({
    type: 'newActivities',
    activities,
    accountId
  });
  return Object.fromEntries(result);
}
async function setupBackendPolling() {
  const localOnUpdate = polling_onUpdate;
  while (isUpdaterAlive(localOnUpdate)) {
    await pauseOrFocus(BACKEND_INTERVAL);
    if (!isUpdaterAlive(localOnUpdate)) return;
    try {
      await tryUpdatePrices(localOnUpdate);
      await tryUpdateTokens(localOnUpdate);
    } catch (err) {
      logDebugError('setupBackendPolling', err);
    }
  }
}
async function setupLongBackendPolling() {
  const localOnUpdate = polling_onUpdate;
  while (isUpdaterAlive(localOnUpdate)) {
    await pauseOrFocus(LONG_BACKEND_INTERVAL);
    await Promise.all([tryUpdateKnownAddresses(), tryUpdateStakingCommonData(), tryUpdateRegion(localOnUpdate)]);
  }
}
async function tryUpdatePrices(localOnUpdate) {
  if (!localOnUpdate) {
    localOnUpdate = polling_onUpdate;
  }
  try {
    const baseCurrency = await getBaseCurrency();
    const pricesData = await callBackendGet('/prices', {
      base: baseCurrency
    });
    if (!isUpdaterAlive(localOnUpdate)) return;
    prices.bySlug = Object.values(pricesData).reduce((acc, _ref4) => {
      let {
        slugs,
        quote
      } = _ref4;
      for (const slug of slugs) {
        acc[slug] = quote;
      }
      return acc;
    }, {});
    prices.baseCurrency = baseCurrency;
  } catch (err) {
    logDebugError('tryUpdatePrices', err);
  }
}
async function tryUpdateTokens(localOnUpdate) {
  if (!localOnUpdate) {
    localOnUpdate = polling_onUpdate;
  }
  try {
    const tokens = await callBackendGet('/known-tokens');
    if (!isUpdaterAlive(localOnUpdate)) return;
    addKnownTokens(tokens);
    sendUpdateTokens();
  } catch (err) {
    logDebugError('tryUpdateTokens', err);
  }
}
async function tryLoadSwapTokens(localOnUpdate) {
  try {
    const assets = await swapGetAssets();
    if (!isUpdaterAlive(localOnUpdate)) return;
    const tokens = assets.reduce((acc, asset) => {
      var _asset$contract, _prices$bySlug$asset$, _prices$bySlug$asset$2;
      acc[asset.slug] = {
        ...asset,
        contract: (_asset$contract = asset.contract) !== null && _asset$contract !== void 0 ? _asset$contract : asset.slug,
        price: (_prices$bySlug$asset$ = (_prices$bySlug$asset$2 = prices.bySlug[asset.slug]) === null || _prices$bySlug$asset$2 === void 0 ? void 0 : _prices$bySlug$asset$2.price) !== null && _prices$bySlug$asset$ !== void 0 ? _prices$bySlug$asset$ : 0
      };
      return acc;
    }, {});
    polling_onUpdate({
      type: 'updateSwapTokens',
      tokens
    });
  } catch (err) {
    logDebugError('tryLoadSwapTokens', err);
  }
}
async function tryUpdateRegion(localOnUpdate) {
  try {
    const {
      isLimited
    } = await callBackendGet('/utils/check-region');
    if (!isUpdaterAlive(localOnUpdate)) return;
    polling_onUpdate({
      type: 'updateRegion',
      isLimited
    });
  } catch (err) {
    logDebugError('tryUpdateRegion', err);
  }
}
function sendUpdateTokens() {
  const tokens = getKnownTokens();
  Object.values(tokens).forEach(token => {
    if (token.slug in prices.bySlug) {
      token.quote = prices.bySlug[token.slug];
    }
  });
  polling_onUpdate({
    type: 'updateTokens',
    tokens,
    baseCurrency: prices.baseCurrency
  });
}
async function setupSwapPolling(accountId) {
  if (swapPollingAccountId === accountId) return; // Double launch is not allowed
  swapPollingAccountId = accountId;
  const {
    address,
    lastFinishedSwapTimestamp
  } = await fetchStoredAccount(accountId);
  let fromTimestamp = lastFinishedSwapTimestamp !== null && lastFinishedSwapTimestamp !== void 0 ? lastFinishedSwapTimestamp : await getActualLastFinishedSwapTimestamp(accountId, address);
  const localOnUpdate = polling_onUpdate;
  const swapById = {};
  while (isAlive(localOnUpdate, accountId)) {
    try {
      const swaps = await swapGetHistory(address, {
        fromTimestamp
      });
      if (!isAlive(localOnUpdate, accountId)) break;
      if (!swaps.length) break;
      swaps.reverse();
      let isLastFinishedSwapUpdated = false;
      let isPrevFinished = true;
      for (const swap of swaps) {
        var _swapById$swap$id2;
        if (swap.cex) {
          var _swapById$swap$id;
          if (swap.cex.status === ((_swapById$swap$id = swapById[swap.id]) === null || _swapById$swap$id === void 0 ? void 0 : _swapById$swap$id.cex.status)) {
            continue;
          }
        } else if (swap.status === ((_swapById$swap$id2 = swapById[swap.id]) === null || _swapById$swap$id2 === void 0 ? void 0 : _swapById$swap$id2.status)) {
          continue;
        }
        swapById[swap.id] = swap;
        const isFinished = SWAP_FINISHED_STATUSES.has(swap.status);
        if (isFinished && isPrevFinished) {
          fromTimestamp = swap.timestamp;
          isLastFinishedSwapUpdated = true;
        }
        isPrevFinished = isFinished;
        if (!swap.cex && swap.status !== 'completed') {
          // Completed onchain swaps are processed in swapReplaceTransactions
          polling_onUpdate({
            type: 'newActivities',
            accountId,
            activities: [swapItemToActivity(swap)]
          });
        }
      }
      if (isLastFinishedSwapUpdated) {
        await updateStoredAccount(accountId, {
          lastFinishedSwapTimestamp: fromTimestamp
        });
      }
    } catch (err) {
      logDebugError('setupSwapPolling', err);
    }
    await pauseOrFocus(SWAP_POLLING_INTERVAL, SWAP_POLLING_INTERVAL_WHEN_NOT_FOCUSED);
  }
  if (accountId === swapPollingAccountId) {
    swapPollingAccountId = undefined;
  }
}
function isAlive(localOnUpdate, accountId) {
  return isUpdaterAlive(localOnUpdate) && isAccountActive(accountId);
}
async function getActualLastFinishedSwapTimestamp(accountId, address) {
  const swaps = await swapGetHistory(address, {});
  swaps.reverse();
  let timestamp = Date.now();
  for (const swap of swaps) {
    if (SWAP_FINISHED_STATUSES.has(swap.status)) {
      timestamp = swap.timestamp;
    } else {
      break;
    }
  }
  await updateStoredAccount(accountId, {
    lastFinishedSwapTimestamp: timestamp
  });
  return timestamp;
}
function logAndRescue(err) {
  logDebugError('Polling error', err);
  return undefined;
}
async function waitDataPreload() {
  await preloadEnsurePromise;
}
async function setupWalletVersionsPolling(accountId) {
  const {
    ton
  } = blockchains;
  const localOnUpdate = polling_onUpdate;
  const {
    publicKey,
    version
  } = await fetchStoredAccount(accountId);
  const publicKeyBytes = hexToBytes(publicKey);
  const {
    network
  } = parseAccountId(accountId);
  const versions = POPULAR_WALLET_VERSIONS.filter(value => value !== version);
  let lastResult;
  while (isAlive(localOnUpdate, accountId)) {
    try {
      const versionInfos = (await ton.getWalletVersionInfos(network, publicKeyBytes, versions)).filter(_ref5 => {
        let {
          lastTxId
        } = _ref5;
        return !!lastTxId;
      });
      const filteredVersions = versionInfos.map(_ref6 => {
        let {
          wallet,
          ...rest
        } = _ref6;
        return rest;
      });
      if (!isAlive(localOnUpdate, accountId)) return;
      if (!areDeepEqual(versionInfos, lastResult)) {
        lastResult = versionInfos;
        polling_onUpdate({
          type: 'updateWalletVersions',
          accountId,
          currentVersion: version,
          versions: filteredVersions
        });
      }
    } catch (err) {
      logDebugError('setupWalletVersionsPolling', err);
    }
    await pauseOrFocus(VERSIONS_INTERVAL, VERSIONS_INTERVAL_WHEN_NOT_FOCUSED);
  }
}
;// CONCATENATED MODULE: ./src/api/methods/accounts.ts








let activeAccountId;
async function activateAccount(accountId, newestTxIds) {
  await waitStorageMigration();
  const prevAccountId = activeAccountId;
  const isFirstLogin = !prevAccountId;
  activeAccountId = accountId;
  await storages_storage.setItem('currentAccountId', accountId);
  loginResolve();
  if (IS_EXTENSION) {
    if (prevAccountId && parseAccountId(prevAccountId).network !== parseAccountId(accountId).network) {
      deactivateAllDapps();
    }
    callHook('onFirstLogin');
    onActiveDappAccountUpdated(accountId);
  }
  if (isFirstLogin) {
    sendUpdateTokens();
  }
  void setupBalanceBasedPolling(accountId, newestTxIds);
  void setupStakingPolling(accountId);
  void setupSwapPolling(accountId);
  void setupWalletVersionsPolling(accountId);
}
function deactivateAllAccounts() {
  deactivateCurrentAccount();
  activeAccountId = undefined;
  if (IS_EXTENSION) {
    deactivateAllDapps();
    callHook('onFullLogout');
  }
}
function deactivateCurrentAccount() {
  if (IS_EXTENSION) {
    deactivateAccountDapp(activeAccountId);
  }
}
function accounts_isAccountActive(accountId) {
  return activeAccountId === accountId;
}
function fetchAccount(accountId) {
  return fetchStoredAccount(accountId);
}
function getActiveAccountId() {
  return activeAccountId;
}
;// CONCATENATED MODULE: ./src/api/methods/auth.ts













function auth_generateMnemonic() {
  return blockchains.ton.generateMnemonic();
}
async function createWallet(network, mnemonic, password) {
  const {
    mnemonicToSeed,
    seedToKeyPair,
    publicKeyToAddress
  } = blockchains.ton;
  if (!(await auth_validateMnemonic(mnemonic))) {
    throw new Error('Invalid mnemonic');
  }
  const seedBase64 = await mnemonicToSeed(mnemonic);
  const {
    publicKey
  } = seedToKeyPair(seedBase64);
  const version = DEFAULT_WALLET_VERSION;
  const address = publicKeyToAddress(network, publicKey, version);
  const accountId = await getNewAccountId(network);
  const result = await storeAccount(accountId, mnemonic, password, {
    address,
    publicKey: bytesToHex(publicKey),
    version
  });
  if ('error' in result) {
    return result;
  }
  void activateAccount(accountId);
  return {
    accountId,
    address
  };
}
function auth_validateMnemonic(mnemonic) {
  return blockchains.ton.validateMnemonic(mnemonic);
}
async function importMnemonic(network, mnemonic, password) {
  const {
    mnemonicToSeed,
    seedToKeyPair,
    pickBestWallet
  } = blockchains.ton;
  if (!(await auth_validateMnemonic(mnemonic))) {
    throw new Error('Invalid mnemonic');
  }
  const seedBase64 = await mnemonicToSeed(mnemonic);
  const {
    publicKey
  } = seedToKeyPair(seedBase64);
  let wallet;
  let version;
  try {
    ({
      wallet,
      version
    } = await pickBestWallet(network, publicKey));
  } catch (err) {
    return handleServerError(err);
  }
  const address = toBase64Address(wallet.address, false);
  const accountId = await getNewAccountId(network);
  const result = await storeAccount(accountId, mnemonic, password, {
    publicKey: bytesToHex(publicKey),
    address,
    version
  });
  if ('error' in result) {
    return result;
  }
  void activateAccount(accountId);
  return {
    accountId,
    address
  };
}
async function importLedgerWallet(network, walletInfo) {
  const accountId = await getNewAccountId(network);
  const {
    publicKey,
    address,
    index,
    driver,
    deviceId,
    deviceName,
    version
  } = walletInfo;
  await storeHardwareAccount(accountId, {
    address,
    publicKey,
    version,
    ledger: {
      index,
      driver,
      deviceId,
      deviceName
    }
  });
  void activateAccount(accountId);
  return {
    accountId,
    address,
    walletInfo
  };
}
async function importNewWalletVersion(accountId, version) {
  const {
    publicKeyToAddress
  } = blockchains.ton;
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredAccount(accountId);
  const mnemonicEncrypted = await getAccountValue(accountId, 'mnemonicsEncrypted');
  const publicKey = hexToBytes(account.publicKey);
  const newAddress = publicKeyToAddress(network, publicKey, version);
  const newAccountId = await getNewAccountId(network);
  const newAccount = {
    address: newAddress,
    publicKey: account.publicKey,
    version
  };
  await Promise.all([setAccountValue(newAccountId, 'mnemonicsEncrypted', mnemonicEncrypted), setAccountValue(newAccountId, 'accounts', newAccount)]);
  void activateAccount(newAccountId);
  return {
    accountId: newAccountId,
    address: newAddress
  };
}
function storeHardwareAccount(accountId, account) {
  return setAccountValue(accountId, 'accounts', account);
}
async function storeAccount(accountId, mnemonic, password, account) {
  const mnemonicEncrypted = await blockchains.ton.encryptMnemonic(mnemonic, password);

  // This is a defensive approach against potential corrupted encryption reported by some users
  const decryptedMnemonic = await blockchains.ton.decryptMnemonic(mnemonicEncrypted, password).catch(() => undefined);
  if (!password || !decryptedMnemonic) {
    return {
      error: ApiCommonError.DebugError
    };
  }
  await Promise.all([setAccountValue(accountId, 'mnemonicsEncrypted', mnemonicEncrypted), setAccountValue(accountId, 'accounts', account)]);
  return {};
}
async function removeNetworkAccounts(network) {
  deactivateAllAccounts();
  await Promise.all([removeNetworkAccountsValue(network, 'mnemonicsEncrypted'), removeNetworkAccountsValue(network, 'accounts'), getEnvironment().isDappSupported && removeNetworkDapps(network)]);
}
async function resetAccounts() {
  deactivateAllAccounts();
  await Promise.all([storages_storage.removeItem('mnemonicsEncrypted'), storages_storage.removeItem('accounts'), storages_storage.removeItem('currentAccountId'), getEnvironment().isDappSupported && removeAllDapps(), apiDb.nfts.clear()]);
}
async function removeAccount(accountId, nextAccountId, newestTxIds) {
  await Promise.all([removeAccountValue(accountId, 'mnemonicsEncrypted'), removeAccountValue(accountId, 'accounts'), getEnvironment().isDappSupported && removeAccountDapps(accountId), apiDb.nfts.where({
    accountId
  }).delete()]);
  deactivateCurrentAccount();
  await activateAccount(nextAccountId, newestTxIds);
}
async function changePassword(oldPassword, password) {
  for (const accountId of await getAccountIds()) {
    const mnemonic = await blockchains.ton.fetchMnemonic(accountId, oldPassword);
    if (!mnemonic) {
      throw new Error('Incorrect password');
    }
    const encryptedMnemonic = await blockchains.ton.encryptMnemonic(mnemonic, password);
    await setAccountValue(accountId, 'mnemonicsEncrypted', encryptedMnemonic);
  }
}
;// CONCATENATED MODULE: ./src/api/common/dappPromises.ts
function dappPromises_defineProperty(obj, key, value) { key = dappPromises_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function dappPromises_toPropertyKey(arg) { var key = dappPromises_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function dappPromises_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const dappPromises_deferreds = new Map();
class dappPromises_Deferred {
  constructor() {
    dappPromises_defineProperty(this, "resolve", void 0);
    dappPromises_defineProperty(this, "reject", void 0);
    dappPromises_defineProperty(this, "promise", new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    }));
  }
}
function createDappPromise() {
  let promiseId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : generateUniqueId();
  const deferred = new dappPromises_Deferred();
  dappPromises_deferreds.set(promiseId, deferred);
  const {
    promise
  } = deferred;
  return {
    promiseId,
    promise
  };
}
function resolveDappPromise(promiseId, value) {
  const deferred = dappPromises_deferreds.get(promiseId);
  if (!deferred) {
    return;
  }
  deferred.resolve(value);
  dappPromises_deferreds.delete(promiseId);
}
function rejectDappPromise(promiseId) {
  let reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown rejection reason';
  const deferred = dappPromises_deferreds.get(promiseId);
  if (!deferred) {
    return;
  }
  deferred.reject(new ApiUserRejectsError(reason));
  dappPromises_deferreds.delete(promiseId);
}
function rejectAllDappPromises(message) {
  Array.from(dappPromises_deferreds.keys()).forEach(id => {
    rejectDappPromise(id, message);
  });
}
;// CONCATENATED MODULE: ./src/api/methods/wallet.ts






const wallet_ton = blockchains.ton;
function getMnemonic(accountId, password) {
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  return blockchain.fetchMnemonic(accountId, password);
}
function getMnemonicWordList() {
  return web.wordlists["default"];
}
async function wallet_verifyPassword(password) {
  const accountId = await getAccountIdWithMnemonic();
  if (!accountId) {
    throw new Error('The user is not authorized in the wallet');
  }
  const blockchain = blockchains[resolveBlockchainKey(accountId)];
  return blockchain.verifyPassword(accountId, password);
}
function confirmDappRequest(promiseId, data) {
  resolveDappPromise(promiseId, data);
}
function confirmDappRequestConnect(promiseId, data) {
  resolveDappPromise(promiseId, data);
}
function cancelDappRequest(promiseId, reason) {
  rejectDappPromise(promiseId, reason);
}
async function wallet_getWalletSeqno(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const address = await fetchStoredAddress(accountId);
  return wallet_ton.getWalletSeqno(network, address);
}
function fetchAddress(accountId) {
  return fetchStoredAddress(accountId);
}
function isWalletInitialized(network, address) {
  const blockchain = blockchains.ton;
  return blockchain.isAddressInitialized(network, address);
}
function wallet_getWalletBalance(network, address) {
  const blockchain = blockchains.ton;
  return blockchain.getWalletBalance(network, address);
}
;// CONCATENATED MODULE: ./src/util/handleError.ts


const noop = () => {};
const throttledAlert = typeof window !== 'undefined' ? throttle(window.alert, 1000) : noop;

// eslint-disable-next-line no-restricted-globals
self.addEventListener('error', handleErrorEvent);
// eslint-disable-next-line no-restricted-globals
self.addEventListener('unhandledrejection', handleErrorEvent);
function handleErrorEvent(e) {
  // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
  if (e instanceof ErrorEvent && e.message === 'ResizeObserver loop limit exceeded') {
    return;
  }
  e.preventDefault();
  handleError(e instanceof ErrorEvent ? e.error || e.message : e.reason);
}
function handleError(err) {
  // eslint-disable-next-line no-console
  console.error(err);
  if (APP_ENV === 'development' || APP_ENV === 'staging') {
    throttledAlert(`${DEBUG_ALERT_MSG}\n\n${(err === null || err === void 0 ? void 0 : err.message) || err}\n${err === null || err === void 0 ? void 0 : err.stack}`);
  }
}
;// CONCATENATED MODULE: ./src/util/safeExec.ts


const SAFE_EXEC_ENABLED = !DEBUG_MORE;
function safeExec(cb, rescue, always) {
  if (!SAFE_EXEC_ENABLED) {
    return cb();
  }
  try {
    return cb();
  } catch (err) {
    rescue === null || rescue === void 0 ? void 0 : rescue(err);
    handleError(err);
    return undefined;
  } finally {
    always === null || always === void 0 ? void 0 : always();
  }
}
// EXTERNAL MODULE: ./node_modules/@tonconnect/protocol/lib/esm/index.mjs
var esm = __webpack_require__(1085);
;// CONCATENATED MODULE: ./src/api/tonConnect/types/index.ts
// eslint-disable-next-line @typescript-eslint/naming-convention
let CONNECT_EVENT_ERROR_CODES = /*#__PURE__*/function (CONNECT_EVENT_ERROR_CODES) {
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
  return CONNECT_EVENT_ERROR_CODES;
}({});

// eslint-disable-next-line @typescript-eslint/naming-convention
let SEND_TRANSACTION_ERROR_CODES = /*#__PURE__*/function (SEND_TRANSACTION_ERROR_CODES) {
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
  return SEND_TRANSACTION_ERROR_CODES;
}({});

// eslint-disable-next-line @typescript-eslint/naming-convention
let SIGN_DATA_ERROR_CODES = /*#__PURE__*/function (SIGN_DATA_ERROR_CODES) {
  SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
  SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
  SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
  SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
  return SIGN_DATA_ERROR_CODES;
}({});
;// CONCATENATED MODULE: ./src/api/tonConnect/errors.ts
function errors_defineProperty(obj, key, value) { key = errors_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function errors_toPropertyKey(arg) { var key = errors_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function errors_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// eslint-disable-next-line max-classes-per-file



class TonConnectError extends ApiBaseError {
  constructor(message) {
    let code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let displayError = arguments.length > 2 ? arguments[2] : undefined;
    super(message);
    errors_defineProperty(this, "code", void 0);
    this.code = code;
    this.displayError = displayError;
  }
}
class ManifestContentError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Manifest content error';
    super(message, CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR);
  }
}
class UnknownError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown error.';
    super(message, 0);
  }
}
class BadRequestError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Bad request';
    let displayError = arguments.length > 1 ? arguments[1] : undefined;
    super(message, 1, displayError);
  }
}
class UnknownAppError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown app error';
    super(message, 100);
  }
}
class UserRejectsError extends (/* unused pure expression or super */ null && (TonConnectError)) {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The user rejected the action';
    super(message, 300);
  }
}
class InsufficientBalance extends (/* unused pure expression or super */ null && (BadRequestError)) {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Insufficient balance';
    super(message);
  }
}
;// CONCATENATED MODULE: ./src/api/tonConnect/utils.ts
function isValidString(value) {
  let maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return typeof value === 'string' && value.length <= maxLength;
}
function isValidUrl(url) {
  const isString = isValidString(url, 150);
  if (!isString) return false;
  try {
    // eslint-disable-next-line no-new
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/api/tonConnect/index.ts
/* provided dependency */ var tonConnect_Buffer = __webpack_require__(8764)["lW"];
// eslint-disable-next-line max-classes-per-file






























const tonConnect_ton = blockchains.ton;
let resolveInit;
const initPromise = new Promise(resolve => {
  resolveInit = resolve;
});
let onPopupUpdate;
function initTonConnect(_onPopupUpdate) {
  onPopupUpdate = _onPopupUpdate;
  resolveInit();
}
async function connect(request, message, id) {
  try {
    await openExtensionPopup(true);
    onPopupUpdate({
      type: 'dappLoading',
      connectionType: 'connect'
    });
    const dappMetadata = await fetchDappMetadata(message.manifestUrl);
    // Take origin from manifest metadata
    request.origin = dappMetadata.origin;
    const {
      origin
    } = await validateRequest(request, true);
    const addressItem = message.items.find(_ref => {
      let {
        name
      } = _ref;
      return name === 'ton_addr';
    });
    const proofItem = message.items.find(_ref2 => {
      let {
        name
      } = _ref2;
      return name === 'ton_proof';
    });
    const proof = proofItem ? {
      timestamp: Math.round(Date.now() / 1000),
      domain: new URL(origin).host,
      payload: proofItem.payload
    } : undefined;
    if (!addressItem) {
      throw new BadRequestError("Missing 'ton_addr'");
    }
    let accountId = await getCurrentAccountOrFail();
    const {
      promiseId,
      promise
    } = createDappPromise();
    const dapp = {
      ...(await dappMetadata),
      connectedAt: Date.now(),
      ...('sseOptions' in request && {
        sse: request.sseOptions
      })
    };
    onPopupUpdate({
      type: 'dappConnect',
      promiseId,
      accountId,
      dapp,
      permissions: {
        address: true,
        proof: !!proof
      },
      proof
    });
    const promiseResult = await promise;
    accountId = promiseResult.accountId;
    await addDapp(accountId, dapp);
    const result = await reconnect(request, id);
    if (result.event === 'connect' && proof) {
      const address = await fetchStoredAddress(accountId);
      const {
        password,
        signature
      } = promiseResult;
      let proofReplyItem;
      if (password) {
        proofReplyItem = await signTonProof(accountId, password, address, proof);
      } else {
        proofReplyItem = buildTonProofReplyItem(proof, signature);
      }
      result.payload.items.push(proofReplyItem);
    }
    return result;
  } catch (err) {
    logDebugError('tonConnect:connect', err);
    safeExec(() => {
      onPopupUpdate({
        type: 'dappCloseLoading'
      });
    });
    return formatConnectError(id, err);
  }
}
async function reconnect(request, id) {
  try {
    const {
      origin,
      accountId
    } = await validateRequest(request);
    activateDapp(accountId, origin);
    const currentDapp = await getDapp(accountId, origin);
    if (!currentDapp) {
      throw new UnknownAppError();
    }
    await updateDapp(accountId, origin, dapp => ({
      ...dapp,
      connectedAt: Date.now()
    }));
    const address = await fetchStoredAddress(accountId);
    const items = [await buildTonAddressReplyItem(accountId, address)];
    return {
      event: 'connect',
      id,
      payload: {
        items
      }
    };
  } catch (e) {
    logDebugError('tonConnect:reconnect', e);
    return formatConnectError(id, e);
  }
}
async function disconnect(request, message) {
  try {
    const {
      origin,
      accountId
    } = await validateRequest(request);
    await deleteDapp(accountId, origin, true);
    deactivateAccountDapp(accountId);
  } catch (err) {
    logDebugError('tonConnect:disconnect', err);
  }
  return {
    id: message.id,
    result: {}
  };
}
async function sendTransaction(request, message) {
  try {
    const {
      origin,
      accountId
    } = await validateRequest(request);
    const txPayload = JSON.parse(message.params[0]);
    if (txPayload.messages.length > 4) {
      throw new BadRequestError('Payload contains more than 4 messages, which exceeds limit');
    }
    const messages = txPayload.messages;
    let validUntil = txPayload.valid_until;
    if (validUntil && validUntil > 10 ** 10) {
      // If milliseconds were passed instead of seconds
      validUntil = Math.round(validUntil / 1000);
    }
    const {
      network
    } = parseAccountId(accountId);
    const account = await fetchStoredAccount(accountId);
    const isLedger = !!account.ledger;
    await openExtensionPopup(true);
    onPopupUpdate({
      type: 'dappLoading',
      connectionType: 'sendTransaction'
    });
    const {
      preparedMessages,
      checkResult
    } = await checkTransactionMessages(accountId, messages);
    const dapp = (await getDappsByOrigin(accountId))[origin];
    const transactionsForRequest = await prepareTransactionForRequest(network, messages, isLedger);
    const {
      promiseId,
      promise
    } = createDappPromise();
    onPopupUpdate({
      type: 'dappSendTransactions',
      promiseId,
      accountId,
      dapp,
      transactions: transactionsForRequest,
      fee: checkResult.fee
    });

    // eslint-disable-next-line prefer-const
    const response = await promise;
    if (validUntil && validUntil < Date.now() / 1000) {
      throw new BadRequestError('The confirmation timeout has expired');
    }
    let boc;
    let successNumber;
    let error;
    if (isLedger) {
      const signedTransfers = response;
      const submitResult = await tonConnect_ton.sendSignedMessages(accountId, signedTransfers);
      boc = signedTransfers[0].base64;
      successNumber = submitResult.successNumber;
      if (successNumber > 0) {
        if (successNumber < messages.length) {
          onPopupUpdate({
            type: 'showError',
            error: ApiTransactionError.PartialTransactionFailure
          });
        }
      } else {
        error = 'Failed transfers';
      }
    } else {
      const password = response;
      const submitResult = await tonConnect_ton.submitMultiTransfer(accountId, password, preparedMessages, validUntil);
      if ('error' in submitResult) {
        error = submitResult.error;
      } else {
        boc = submitResult.boc;
        successNumber = messages.length;
      }
    }
    if (error) {
      throw new UnknownError(error);
    }
    const fromAddress = await fetchStoredAddress(accountId);
    const successTransactions = transactionsForRequest.slice(0, successNumber);
    successTransactions.forEach(_ref3 => {
      let {
        amount,
        normalizedAddress,
        payload
      } = _ref3;
      const comment = (payload === null || payload === void 0 ? void 0 : payload.type) === 'comment' ? payload.comment : undefined;
      createLocalTransaction(accountId, {
        amount,
        fromAddress,
        toAddress: normalizedAddress,
        comment,
        fee: checkResult.fee,
        slug: TON_TOKEN_SLUG
      });
    });
    return {
      result: boc,
      id: message.id
    };
  } catch (err) {
    logDebugError('tonConnect:sendTransaction', err);
    safeExec(() => {
      onPopupUpdate({
        type: 'dappCloseLoading'
      });
    });
    let code = SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR;
    let errorMessage = 'Unhandled error';
    let displayError;
    if (err instanceof ApiUserRejectsError) {
      code = SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR;
      errorMessage = err.message;
    } else if (err instanceof TonConnectError) {
      code = err.code;
      errorMessage = err.message;
      displayError = err.displayError;
    } else if (err instanceof ApiServerError) {
      displayError = err.displayError;
    } else {
      displayError = ApiCommonError.Unexpected;
    }
    if (onPopupUpdate && isUpdaterAlive(onPopupUpdate) && displayError) {
      onPopupUpdate({
        type: 'showError',
        error: displayError
      });
    }
    return {
      error: {
        code,
        message: errorMessage
      },
      id: message.id
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function signData(request, message) {
  return {
    error: {
      code: SIGN_DATA_ERROR_CODES.METHOD_NOT_SUPPORTED,
      message: 'Method not supported'
    },
    id: message.id
  };
}
async function checkTransactionMessages(accountId, messages) {
  const preparedMessages = messages.map(msg => {
    const {
      address,
      amount,
      payload,
      stateInit
    } = msg;
    return {
      toAddress: getIsRawAddress(address) ? toBase64Address(address, true) : address,
      amount: BigInt(amount),
      payload: payload ? core_dist.Cell.fromBase64(payload) : undefined,
      stateInit: stateInit ? core_dist.Cell.fromBase64(stateInit) : undefined
    };
  });
  const checkResult = await tonConnect_ton.checkMultiTransactionDraft(accountId, preparedMessages);
  if ('error' in checkResult) {
    onPopupUpdate({
      type: 'showError',
      error: checkResult.error
    });
    throw new BadRequestError(checkResult.error);
  }
  return {
    preparedMessages,
    checkResult
  };
}
function prepareTransactionForRequest(network, messages, isLedger) {
  return Promise.all(messages.map(async _ref4 => {
    let {
      address,
      amount,
      payload: rawPayload,
      stateInit
    } = _ref4;
    const toAddress = getIsRawAddress(address) ? toBase64Address(address, true) : address;
    // Fix address format for `waitTxComplete` to work properly
    const normalizedAddress = toBase64Address(address);
    const payload = rawPayload ? await parsePayloadBase64(network, toAddress, rawPayload) : undefined;
    const {
      isLedgerAllowed
    } = await getContractInfo(network, toAddress);
    if (isLedger) {
      if (!isLedgerAllowed) {
        throw new BadRequestError('Unsupported contract', ApiTransactionError.UnsupportedHardwareContract);
      } else if (payload) {
        if (!LEDGER_SUPPORTED_PAYLOADS.includes(payload.type)) {
          throw new BadRequestError('Unsupported payload', ApiTransactionError.UnsupportedHardwarePayload);
        }
        if (payload.type === 'comment' && !isAscii(payload.comment)) {
          throw new BadRequestError('Unsupported payload', ApiTransactionError.NonAsciiCommentForHardwareOperation);
        }
        if (payload.type === 'comment' && !isLedgerCommentLengthValid(payload.comment)) {
          throw new BadRequestError('Unsupported payload', ApiTransactionError.TooLongCommentForHardwareOperation);
        }
        if (payload.type === 'nft:transfer' && !!payload.forwardPayload) {
          throw new BadRequestError('Unsupported payload', ApiTransactionError.UnsupportedHardwareNftOperation);
        }
      }
    }
    return {
      toAddress,
      amount: BigInt(amount),
      rawPayload,
      payload,
      stateInit,
      normalizedAddress
    };
  }));
}
async function deactivate(request) {
  try {
    const {
      origin
    } = await validateRequest(request, true);
    deactivateDapp(origin);
  } catch (err) {
    logDebugError('tonConnect:deactivate', err);
  }
}
function formatConnectError(id, error) {
  let code = CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR;
  let message = 'Unhandled error';
  if (error instanceof ApiUserRejectsError) {
    code = CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR;
    message = error.message;
  } else if (error instanceof TonConnectError) {
    code = error.code;
    message = error.message;
  }
  return {
    id,
    event: 'connect_error',
    payload: {
      code,
      message
    }
  };
}
async function buildTonAddressReplyItem(accountId, address) {
  const {
    network
  } = parseAccountId(accountId);
  const [stateInit, publicKey] = await Promise.all([tonConnect_ton.getWalletStateInit(accountId), fetchStoredPublicKey(accountId)]);
  return {
    name: 'ton_addr',
    address: toRawAddress(address),
    network: network === 'mainnet' ? esm/* CHAIN.MAINNET */.sX.MAINNET : esm/* CHAIN.TESTNET */.sX.TESTNET,
    publicKey,
    walletStateInit: stateInit.toBoc({
      idx: true,
      crc32: true
    }).toString('base64')
  };
}
async function signTonProof(accountId, password, walletAddress, proof) {
  const keyPair = await fetchKeyPair(accountId, password);
  const {
    timestamp,
    domain,
    payload
  } = proof;
  const timestampBuffer = tonConnect_Buffer.allocUnsafe(8);
  timestampBuffer.writeBigInt64LE(BigInt(timestamp));
  const domainBuffer = tonConnect_Buffer.from(domain);
  const domainLengthBuffer = tonConnect_Buffer.allocUnsafe(4);
  domainLengthBuffer.writeInt32LE(domainBuffer.byteLength);
  const address = core_dist.Address.parse(walletAddress);
  const addressWorkchainBuffer = tonConnect_Buffer.allocUnsafe(4);
  addressWorkchainBuffer.writeInt32BE(address.workChain);
  const addressBuffer = tonConnect_Buffer.concat([addressWorkchainBuffer, address.hash]);
  const messageBuffer = tonConnect_Buffer.concat([tonConnect_Buffer.from('ton-proof-item-v2/', 'utf8'), addressBuffer, domainLengthBuffer, domainBuffer, timestampBuffer, tonConnect_Buffer.from(payload)]);
  const bufferToSign = tonConnect_Buffer.concat([tonConnect_Buffer.from('ffff', 'hex'), tonConnect_Buffer.from('ton-connect', 'utf8'), tonConnect_Buffer.from(await sha256(messageBuffer))]);
  const signature = nacl_fast_default().sign.detached(tonConnect_Buffer.from(await sha256(bufferToSign)), keyPair.secretKey);
  return buildTonProofReplyItem(proof, bytesToBase64(signature));
}
function buildTonProofReplyItem(proof, signature) {
  const {
    timestamp,
    domain,
    payload
  } = proof;
  const domainBuffer = tonConnect_Buffer.from(domain);
  return {
    name: 'ton_proof',
    proof: {
      timestamp,
      domain: {
        lengthBytes: domainBuffer.byteLength,
        value: domainBuffer.toString('utf8')
      },
      signature,
      payload
    }
  };
}
async function fetchDappMetadata(manifestUrl, origin) {
  try {
    const data = await fetchJsonMetadata(manifestUrl);
    const {
      url,
      name,
      iconUrl
    } = await data;
    if (!isValidUrl(url) || !isValidString(name) || !isValidUrl(iconUrl)) {
      throw new Error('Invalid data');
    }
    return {
      origin: origin !== null && origin !== void 0 ? origin : new URL(url).origin,
      url,
      name,
      iconUrl,
      manifestUrl
    };
  } catch (err) {
    logDebugError('fetchDapp', err);
    throw new ManifestContentError();
  }
}
async function validateRequest(request) {
  let skipConnection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    origin
  } = request;
  if (!origin) {
    throw new BadRequestError('Invalid origin');
  }
  let accountId = '';
  if (request.accountId) {
    accountId = request.accountId;
  } else if (!skipConnection) {
    const {
      network
    } = parseAccountId(await getCurrentAccountIdOrFail());
    const lastAccountId = await findLastConnectedAccount(network, origin);
    if (!lastAccountId) {
      throw new BadRequestError('The connection is outdated, try relogin');
    }
    accountId = lastAccountId;
  }
  return {
    origin,
    accountId
  };
}
async function openExtensionPopup(force) {
  if (!IS_EXTENSION || !force && onPopupUpdate && isUpdaterAlive(onPopupUpdate)) {
    return false;
  }
  await callHook('onWindowNeeded');
  await initPromise;
  return true;
}
async function getCurrentAccountOrFail() {
  const accountId = await getCurrentAccountId();
  if (!accountId) {
    throw new BadRequestError('The user is not authorized in the wallet');
  }
  return accountId;
}
;// CONCATENATED MODULE: ./src/api/tonConnect/sse.ts
/* provided dependency */ var sse_Buffer = __webpack_require__(8764)["lW"];










const BRIDGE_URL = 'https://tonconnectbridge.mytonwallet.org/bridge';
const TTL_SEC = 300;
const NONCE_SIZE = 24;
let sseEventSource;
let sseDapps = [];
async function startSseConnection(url, deviceInfo) {
  const {
    searchParams: params,
    origin
  } = new URL(url);
  const ret = params.get('ret') || 'back';
  const version = Number(params.get('v'));
  const appClientId = params.get('id');
  if (!params.get('r')) {
    return undefined;
  }
  if (await apiDb.sseConnections.get(appClientId)) {
    // Avoid re-processing link
    return ret !== null && ret !== void 0 ? ret : undefined;
  }
  const connectRequest = JSON.parse(params.get('r'));
  logDebug('SSE Start connection:', {
    version,
    appClientId,
    connectRequest,
    ret,
    origin
  });
  const {
    secretKey: secretKeyArray,
    publicKey: publicKeyArray
  } = nacl_fast_default().box.keyPair();
  const secretKey = bytesToHex(secretKeyArray);
  const clientId = bytesToHex(publicKeyArray);
  const lastOutputId = 0;
  const request = {
    origin,
    sseOptions: {
      clientId,
      appClientId,
      secretKey,
      lastOutputId
    }
  };
  await waitLogin();
  const result = await connect(request, connectRequest, lastOutputId);
  if (result.event === 'connect') {
    result.payload.device = deviceInfo;
  }
  await sendMessage(result, secretKey, clientId, appClientId);
  await apiDb.sseConnections.put({
    clientId: appClientId
  });
  if (result.event !== 'connect_error') {
    await resetupSseConnection();
  }
  if (ret === 'none' || ret === 'back') {
    // `back` strategy cannot be implemented
    return undefined;
  }
  return ret;
}
async function resetupSseConnection() {
  closeEventSource();
  const [lastEventId, dappsState, network] = await Promise.all([getSseLastEventId(), getDappsState(), getCurrentNetwork()]);
  if (!dappsState || !network) {
    return;
  }
  sseDapps = Object.entries(dappsState).reduce((result, _ref) => {
    let [accountId, dapps] = _ref;
    if (parseAccountId(accountId).network === network) {
      for (const dapp of Object.values(dapps)) {
        result.push({
          ...dapp.sse,
          accountId,
          origin: dapp.origin
        });
      }
    }
    return result;
  }, []);
  const clientIds = extractKey(sseDapps, 'clientId');
  if (!clientIds.length) {
    return;
  }
  if (sseEventSource) {
    safeExec(() => {
      sseEventSource.close();
    });
    sseEventSource = undefined;
  }
  sseEventSource = openEventSource(clientIds, lastEventId);
  sseEventSource.onopen = () => {
    logDebug('EventSource opened');
  };
  sseEventSource.onerror = e => {
    logDebugError('EventSource', e.type);
  };
  sseEventSource.onmessage = async event => {
    const {
      from,
      message: encryptedMessage
    } = JSON.parse(event.data);
    const sseDapp = sseDapps.find(_ref2 => {
      let {
        appClientId
      } = _ref2;
      return appClientId === from;
    });
    if (!sseDapp) {
      logDebug(`Dapp with clientId ${from} not found`);
      return;
    }
    const {
      accountId,
      clientId,
      appClientId,
      secretKey,
      origin
    } = sseDapp;
    const message = decryptMessage(encryptedMessage, appClientId, secretKey);
    logDebug('SSE Event:', message);
    await setSseLastEventId(event.lastEventId);

    // @ts-ignore
    const result = await tonConnect_namespaceObject[message.method]({
      origin,
      accountId
    }, message);
    await sendMessage(result, secretKey, clientId, appClientId);
  };
}
async function sendSseDisconnect(accountId, origin) {
  const sseDapp = sseDapps.find(dapp => dapp.origin === origin && dapp.accountId === accountId);
  if (!sseDapp) return;
  const {
    secretKey,
    clientId,
    appClientId
  } = sseDapp;
  const lastOutputId = sseDapp.lastOutputId + 1;
  const response = {
    event: 'disconnect',
    id: lastOutputId,
    payload: {}
  };
  await sendMessage(response, secretKey, clientId, appClientId);
}
function sendMessage(message, secretKey, clientId, toId, topic) {
  const buffer = sse_Buffer.from(JSON.stringify(message));
  const encryptedMessage = encryptMessage(buffer, toId, secretKey);
  return sendRawMessage(encryptedMessage, clientId, toId, topic);
}
async function sendRawMessage(body, clientId, toId, topic) {
  const url = new URL(`${BRIDGE_URL}/message`);
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('to', toId);
  url.searchParams.set('ttl', TTL_SEC.toString());
  if (topic) {
    url.searchParams.set('topic', topic);
  }
  const response = await fetch(url, {
    method: 'POST',
    body
  });
  handleFetchErrors(response);
}
function closeEventSource() {
  if (!sseEventSource) return;
  sseEventSource.close();
  sseEventSource = undefined;
}
function openEventSource(clientIds, lastEventId) {
  const url = new URL(`${BRIDGE_URL}/events`);
  url.searchParams.set('client_id', clientIds.join(','));
  if (lastEventId) {
    url.searchParams.set('last_event_id', lastEventId);
  }
  return new EventSource(url);
}
function encryptMessage(message, publicKey, secretKey) {
  const nonce = (0,nacl_fast.randomBytes)(NONCE_SIZE);
  const encrypted = nacl_fast_default().box(message, nonce, sse_Buffer.from(publicKey, 'hex'), sse_Buffer.from(secretKey, 'hex'));
  return sse_Buffer.concat([nonce, encrypted]).toString('base64');
}
function decryptMessage(message, publicKey, secretKey) {
  const fullBuffer = sse_Buffer.from(message, 'base64');
  const nonce = fullBuffer.subarray(0, NONCE_SIZE);
  const encrypted = fullBuffer.subarray(NONCE_SIZE);
  const decrypted = nacl_fast_default().box.open(encrypted, nonce, sse_Buffer.from(publicKey, 'hex'), sse_Buffer.from(secretKey, 'hex'));
  const jsonText = new TextDecoder('utf-8').decode(decrypted);
  return JSON.parse(jsonText);
}
;// CONCATENATED MODULE: ./src/api/methods/index.ts













;// CONCATENATED MODULE: ./src/api/methods/init.ts









addHooks({
  onDappDisconnected: sendSseDisconnect,
  onDappsChanged: resetupSseConnection,
  onSwapCreated: setupSwapPolling
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function init(onUpdate, args) {
  connectUpdater(onUpdate);
  const environment = setEnvironment(args);
  if (IS_CAPACITOR) {
    initWindowConnector();
  }
  initPolling(onUpdate, accounts_isAccountActive);
  initTransactions(onUpdate);
  initStaking();
  initSwap(onUpdate);
  initNfts(onUpdate);
  if (environment.isDappSupported) {
    initDapps(onUpdate);
    initTonConnect(onUpdate);
  }
  await startStorageMigration(onUpdate, blockchains.ton);
  if (environment.isSseSupported) {
    void resetupSseConnection();
  }
}
;// CONCATENATED MODULE: ./src/api/providers/worker/provider.ts




createPostMessageInterface(function (name, origin) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (name === 'init') {
    return init(args[0], args[1]);
  } else {
    if (name.startsWith('tonConnect_')) {
      name = name.replace('tonConnect_', '');
      const method = tonConnect_namespaceObject[name];
      // @ts-ignore
      return method(...args);
    }
    const method = methods_namespaceObject[name];

    // @ts-ignore
    return method(...args);
  }
});

/***/ }),

/***/ 2310:
/***/ (function(module) {

// Version 3.1.2
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
(function (root) {
  "use strict";

  function checkInt(value) {
    return parseInt(value) === value;
  }
  function checkInts(arrayish) {
    if (!checkInt(arrayish.length)) {
      return false;
    }
    for (var i = 0; i < arrayish.length; i++) {
      if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
        return false;
      }
    }
    return true;
  }
  function coerceArray(arg, copy) {
    // ArrayBuffer view
    if (arg.buffer && arg.name === 'Uint8Array') {
      if (copy) {
        if (arg.slice) {
          arg = arg.slice();
        } else {
          arg = Array.prototype.slice.call(arg);
        }
      }
      return arg;
    }

    // It's an array; check it is a valid representation of a byte
    if (Array.isArray(arg)) {
      if (!checkInts(arg)) {
        throw new Error('Array contains invalid value: ' + arg);
      }
      return new Uint8Array(arg);
    }

    // Something else, but behaves like an array (maybe a Buffer? Arguments?)
    if (checkInt(arg.length) && checkInts(arg)) {
      return new Uint8Array(arg);
    }
    throw new Error('unsupported array-like object');
  }
  function createArray(length) {
    return new Uint8Array(length);
  }
  function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
    if (sourceStart != null || sourceEnd != null) {
      if (sourceArray.slice) {
        sourceArray = sourceArray.slice(sourceStart, sourceEnd);
      } else {
        sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
      }
    }
    targetArray.set(sourceArray, targetStart);
  }
  var convertUtf8 = function () {
    function toBytes(text) {
      var result = [],
        i = 0;
      text = encodeURI(text);
      while (i < text.length) {
        var c = text.charCodeAt(i++);

        // if it is a % sign, encode the following 2 bytes as a hex value
        if (c === 37) {
          result.push(parseInt(text.substr(i, 2), 16));
          i += 2;

          // otherwise, just the actual byte
        } else {
          result.push(c);
        }
      }
      return coerceArray(result);
    }
    function fromBytes(bytes) {
      var result = [],
        i = 0;
      while (i < bytes.length) {
        var c = bytes[i];
        if (c < 128) {
          result.push(String.fromCharCode(c));
          i++;
        } else if (c > 191 && c < 224) {
          result.push(String.fromCharCode((c & 0x1f) << 6 | bytes[i + 1] & 0x3f));
          i += 2;
        } else {
          result.push(String.fromCharCode((c & 0x0f) << 12 | (bytes[i + 1] & 0x3f) << 6 | bytes[i + 2] & 0x3f));
          i += 3;
        }
      }
      return result.join('');
    }
    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }();
  var convertHex = function () {
    function toBytes(text) {
      var result = [];
      for (var i = 0; i < text.length; i += 2) {
        result.push(parseInt(text.substr(i, 2), 16));
      }
      return result;
    }

    // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
    var Hex = '0123456789abcdef';
    function fromBytes(bytes) {
      var result = [];
      for (var i = 0; i < bytes.length; i++) {
        var v = bytes[i];
        result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
      }
      return result.join('');
    }
    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }();

  // Number of rounds by keysize
  var numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
  };

  // Round constant words
  var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

  // S-box and Inverse S-box (S is for Substitution)
  var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
  var Si = [0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

  // Transformations for encryption
  var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
  var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
  var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
  var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

  // Transformations for decryption
  var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
  var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
  var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
  var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

  // Transformations for decryption key expansion
  var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
  var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
  var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
  var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];
  function convertToInt32(bytes) {
    var result = [];
    for (var i = 0; i < bytes.length; i += 4) {
      result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }
    return result;
  }
  var AES = function (key) {
    if (!(this instanceof AES)) {
      throw Error('AES must be instanitated with `new`');
    }
    Object.defineProperty(this, 'key', {
      value: coerceArray(key, true)
    });
    this._prepare();
  };
  AES.prototype._prepare = function () {
    var rounds = numberOfRounds[this.key.length];
    if (rounds == null) {
      throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
    }

    // encryption round keys
    this._Ke = [];

    // decryption round keys
    this._Kd = [];
    for (var i = 0; i <= rounds; i++) {
      this._Ke.push([0, 0, 0, 0]);
      this._Kd.push([0, 0, 0, 0]);
    }
    var roundKeyCount = (rounds + 1) * 4;
    var KC = this.key.length / 4;

    // convert the key into ints
    var tk = convertToInt32(this.key);

    // copy values into round key arrays
    var index;
    for (var i = 0; i < KC; i++) {
      index = i >> 2;
      this._Ke[index][i % 4] = tk[i];
      this._Kd[rounds - index][i % 4] = tk[i];
    }

    // key expansion (fips-197 section 5.2)
    var rconpointer = 0;
    var t = KC,
      tt;
    while (t < roundKeyCount) {
      tt = tk[KC - 1];
      tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
      rconpointer += 1;

      // key expansion (for non-256 bit)
      if (KC != 8) {
        for (var i = 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        }

        // key expansion for 256-bit keys is "slightly different" (fips-197)
      } else {
        for (var i = 1; i < KC / 2; i++) {
          tk[i] ^= tk[i - 1];
        }
        tt = tk[KC / 2 - 1];
        tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;
        for (var i = KC / 2 + 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        }
      }

      // copy values into round key arrays
      var i = 0,
        r,
        c;
      while (i < KC && t < roundKeyCount) {
        r = t >> 2;
        c = t % 4;
        this._Ke[r][c] = tk[i];
        this._Kd[rounds - r][c] = tk[i++];
        t++;
      }
    }

    // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
    for (var r = 1; r < rounds; r++) {
      for (var c = 0; c < 4; c++) {
        tt = this._Kd[r][c];
        this._Kd[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
      }
    }
  };
  AES.prototype.encrypt = function (plaintext) {
    if (plaintext.length != 16) {
      throw new Error('invalid plaintext size (must be 16 bytes)');
    }
    var rounds = this._Ke.length - 1;
    var a = [0, 0, 0, 0];

    // convert plaintext to (ints ^ key)
    var t = convertToInt32(plaintext);
    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Ke[0][i];
    }

    // apply round transforms
    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ this._Ke[r][i];
      }
      t = a.slice();
    }

    // the last round is special
    var result = createArray(16),
      tt;
    for (var i = 0; i < 4; i++) {
      tt = this._Ke[rounds][i];
      result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
    }
    return result;
  };
  AES.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length != 16) {
      throw new Error('invalid ciphertext size (must be 16 bytes)');
    }
    var rounds = this._Kd.length - 1;
    var a = [0, 0, 0, 0];

    // convert plaintext to (ints ^ key)
    var t = convertToInt32(ciphertext);
    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Kd[0][i];
    }

    // apply round transforms
    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ this._Kd[r][i];
      }
      t = a.slice();
    }

    // the last round is special
    var result = createArray(16),
      tt;
    for (var i = 0; i < 4; i++) {
      tt = this._Kd[rounds][i];
      result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
    }
    return result;
  };

  /**
   *  Mode Of Operation - Electonic Codebook (ECB)
   */
  var ModeOfOperationECB = function (key) {
    if (!(this instanceof ModeOfOperationECB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Electronic Code Block";
    this.name = "ecb";
    this._aes = new AES(key);
  };
  ModeOfOperationECB.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);
    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }
    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);
    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);
      block = this._aes.encrypt(block);
      copyArray(block, ciphertext, i);
    }
    return ciphertext;
  };
  ModeOfOperationECB.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);
    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }
    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);
    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);
      copyArray(block, plaintext, i);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Cipher Block Chaining (CBC)
   */
  var ModeOfOperationCBC = function (key, iv) {
    if (!(this instanceof ModeOfOperationCBC)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Cipher Block Chaining";
    this.name = "cbc";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }
    this._lastCipherblock = coerceArray(iv, true);
    this._aes = new AES(key);
  };
  ModeOfOperationCBC.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);
    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }
    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);
    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);
      for (var j = 0; j < 16; j++) {
        block[j] ^= this._lastCipherblock[j];
      }
      this._lastCipherblock = this._aes.encrypt(block);
      copyArray(this._lastCipherblock, ciphertext, i);
    }
    return ciphertext;
  };
  ModeOfOperationCBC.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);
    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }
    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);
    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);
      for (var j = 0; j < 16; j++) {
        plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
      }
      copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Cipher Feedback (CFB)
   */
  var ModeOfOperationCFB = function (key, iv, segmentSize) {
    if (!(this instanceof ModeOfOperationCFB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Cipher Feedback";
    this.name = "cfb";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 size)');
    }
    if (!segmentSize) {
      segmentSize = 1;
    }
    this.segmentSize = segmentSize;
    this._shiftRegister = coerceArray(iv, true);
    this._aes = new AES(key);
  };
  ModeOfOperationCFB.prototype.encrypt = function (plaintext) {
    if (plaintext.length % this.segmentSize != 0) {
      throw new Error('invalid plaintext size (must be segmentSize bytes)');
    }
    var encrypted = coerceArray(plaintext, true);
    var xorSegment;
    for (var i = 0; i < encrypted.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);
      for (var j = 0; j < this.segmentSize; j++) {
        encrypted[i + j] ^= xorSegment[j];
      }

      // Shift the register
      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }
    return encrypted;
  };
  ModeOfOperationCFB.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length % this.segmentSize != 0) {
      throw new Error('invalid ciphertext size (must be segmentSize bytes)');
    }
    var plaintext = coerceArray(ciphertext, true);
    var xorSegment;
    for (var i = 0; i < plaintext.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);
      for (var j = 0; j < this.segmentSize; j++) {
        plaintext[i + j] ^= xorSegment[j];
      }

      // Shift the register
      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Output Feedback (OFB)
   */
  var ModeOfOperationOFB = function (key, iv) {
    if (!(this instanceof ModeOfOperationOFB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Output Feedback";
    this.name = "ofb";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }
    this._lastPrecipher = coerceArray(iv, true);
    this._lastPrecipherIndex = 16;
    this._aes = new AES(key);
  };
  ModeOfOperationOFB.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);
    for (var i = 0; i < encrypted.length; i++) {
      if (this._lastPrecipherIndex === 16) {
        this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
        this._lastPrecipherIndex = 0;
      }
      encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
    }
    return encrypted;
  };

  // Decryption is symetric
  ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;

  /**
   *  Counter object for CTR common mode of operation
   */
  var Counter = function (initialValue) {
    if (!(this instanceof Counter)) {
      throw Error('Counter must be instanitated with `new`');
    }

    // We allow 0, but anything false-ish uses the default 1
    if (initialValue !== 0 && !initialValue) {
      initialValue = 1;
    }
    if (typeof initialValue === 'number') {
      this._counter = createArray(16);
      this.setValue(initialValue);
    } else {
      this.setBytes(initialValue);
    }
  };
  Counter.prototype.setValue = function (value) {
    if (typeof value !== 'number' || parseInt(value) != value) {
      throw new Error('invalid counter value (must be an integer)');
    }

    // We cannot safely handle numbers beyond the safe range for integers
    if (value > Number.MAX_SAFE_INTEGER) {
      throw new Error('integer value out of safe range');
    }
    for (var index = 15; index >= 0; --index) {
      this._counter[index] = value % 256;
      value = parseInt(value / 256);
    }
  };
  Counter.prototype.setBytes = function (bytes) {
    bytes = coerceArray(bytes, true);
    if (bytes.length != 16) {
      throw new Error('invalid counter bytes size (must be 16 bytes)');
    }
    this._counter = bytes;
  };
  Counter.prototype.increment = function () {
    for (var i = 15; i >= 0; i--) {
      if (this._counter[i] === 255) {
        this._counter[i] = 0;
      } else {
        this._counter[i]++;
        break;
      }
    }
  };

  /**
   *  Mode Of Operation - Counter (CTR)
   */
  var ModeOfOperationCTR = function (key, counter) {
    if (!(this instanceof ModeOfOperationCTR)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Counter";
    this.name = "ctr";
    if (!(counter instanceof Counter)) {
      counter = new Counter(counter);
    }
    this._counter = counter;
    this._remainingCounter = null;
    this._remainingCounterIndex = 16;
    this._aes = new AES(key);
  };
  ModeOfOperationCTR.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);
    for (var i = 0; i < encrypted.length; i++) {
      if (this._remainingCounterIndex === 16) {
        this._remainingCounter = this._aes.encrypt(this._counter._counter);
        this._remainingCounterIndex = 0;
        this._counter.increment();
      }
      encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
    }
    return encrypted;
  };

  // Decryption is symetric
  ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;

  ///////////////////////
  // Padding

  // See:https://tools.ietf.org/html/rfc2315
  function pkcs7pad(data) {
    data = coerceArray(data, true);
    var padder = 16 - data.length % 16;
    var result = createArray(data.length + padder);
    copyArray(data, result);
    for (var i = data.length; i < result.length; i++) {
      result[i] = padder;
    }
    return result;
  }
  function pkcs7strip(data) {
    data = coerceArray(data, true);
    if (data.length < 16) {
      throw new Error('PKCS#7 invalid length');
    }
    var padder = data[data.length - 1];
    if (padder > 16) {
      throw new Error('PKCS#7 padding byte out of range');
    }
    var length = data.length - padder;
    for (var i = 0; i < padder; i++) {
      if (data[length + i] !== padder) {
        throw new Error('PKCS#7 invalid padding byte');
      }
    }
    var result = createArray(length);
    copyArray(data, result, 0, 0, length);
    return result;
  }

  ///////////////////////
  // Exporting

  // The block cipher
  var aesjs = {
    AES: AES,
    Counter: Counter,
    ModeOfOperation: {
      ecb: ModeOfOperationECB,
      cbc: ModeOfOperationCBC,
      cfb: ModeOfOperationCFB,
      ofb: ModeOfOperationOFB,
      ctr: ModeOfOperationCTR
    },
    utils: {
      hex: convertHex,
      utf8: convertUtf8
    },
    padding: {
      pkcs7: {
        pad: pkcs7pad,
        strip: pkcs7strip
      }
    },
    _arrayTest: {
      coerceArray: coerceArray,
      createArray: createArray,
      copyArray: copyArray
    }
  };

  // node.js
  if (true) {
    module.exports = aesjs;

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
  } else {}
})(this);

/***/ }),

/***/ 7361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ fetchAdapter)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4097);
/* harmony import */ var axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6026);
/* harmony import */ var axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5327);
/* harmony import */ var axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4867);
/* harmony import */ var axios_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios_lib_utils__WEBPACK_IMPORTED_MODULE_4__);






/**
 * - Create a request object
 * - Get response body
 * - Check if timeout
 */
async function fetchAdapter(config) {
  const request = createRequest(config);
  const promiseChain = [getResponse(request, config)];
  if (config.timeout && config.timeout > 0) {
    promiseChain.push(new Promise(res => {
      setTimeout(() => {
        const message = config.timeoutErrorMessage ? config.timeoutErrorMessage : `timeout of ${config.timeout}ms exceeded`;
        res(createError(message, config, 'ECONNABORTED', request));
      }, config.timeout);
    }));
  }
  const data = await Promise.race(promiseChain);
  return new Promise((resolve, reject) => {
    if (data instanceof Error) {
      reject(data);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      Object.prototype.toString.call(config.settle) === '[object Function]' ? config.settle(resolve, reject, data) : axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_2___default()(resolve, reject, data);
    }
  });
}

/**
 * Fetch API stage two is to get response body. This funtion tries to retrieve
 * response body based on response's type
 */
async function getResponse(request, config) {
  let stageOne;
  try {
    stageOne = await fetch(request);
  } catch (e) {
    return createError('Network Error', config, 'ERR_NETWORK', request);
  }
  const response = {
    ok: stageOne.ok,
    status: stageOne.status,
    statusText: stageOne.statusText,
    headers: new Headers(stageOne.headers),
    // Make a copy of headers
    config,
    request
  };
  if (stageOne.status >= 200 && stageOne.status !== 204) {
    switch (config.responseType) {
      case 'arraybuffer':
        response.data = await stageOne.arrayBuffer();
        break;
      case 'blob':
        response.data = await stageOne.blob();
        break;
      case 'json':
        response.data = await stageOne.json();
        break;
      case 'formData':
        response.data = await stageOne.formData();
        break;
      default:
        response.data = await stageOne.text();
        break;
    }
  }
  return response;
}

/**
 * This function will create a Request object based on configuration's axios
 */
function createRequest(config) {
  const headers = new Headers(config.headers);

  // HTTP basic authentication
  if (config.auth) {
    const username = config.auth.username || '';
    const password = config.auth.password ? decodeURI(encodeURIComponent(config.auth.password)) : '';
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
  }
  const method = config.method.toUpperCase();
  const options = {
    headers,
    method
  };
  if (method !== 'GET' && method !== 'HEAD') {
    options.body = config.data;

    // In these cases the browser will automatically set the correct Content-Type,
    // but only if that header hasn't been set yet. So that's why we're deleting it.
    if ((0,axios_lib_utils__WEBPACK_IMPORTED_MODULE_4__.isFormData)(options.body) && (0,axios_lib_utils__WEBPACK_IMPORTED_MODULE_4__.isStandardBrowserEnv)()) {
      headers.delete('Content-Type');
    }
  }
  if (config.mode) {
    options.mode = config.mode;
  }
  if (config.cache) {
    options.cache = config.cache;
  }
  if (config.integrity) {
    options.integrity = config.integrity;
  }
  if (config.redirect) {
    options.redirect = config.redirect;
  }
  if (config.referrer) {
    options.referrer = config.referrer;
  }
  // This config is similar to XHR’s withCredentials flag, but with three available values instead of two.
  // So if withCredentials is not set, default value 'same-origin' will be used
  if (!(0,axios_lib_utils__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(config.withCredentials)) {
    options.credentials = config.withCredentials ? 'include' : 'omit';
  }
  const fullPath = axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_1___default()(config.baseURL, config.url);
  const url = axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_3___default()(fullPath, config.params, config.paramsSerializer);

  // Expected browser to throw error if there is any wrong configuration value
  return new Request(url, options);
}

/**
 * Note:
 *
 *   From version >= 0.27.0, createError function is replaced by AxiosError class.
 *   So I copy the old createError function here for backward compatible.
 *
 *
 *
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function createError(message, config, code, request, response) {
  if ((axios__WEBPACK_IMPORTED_MODULE_0___default().AxiosError) && typeof (axios__WEBPACK_IMPORTED_MODULE_0___default().AxiosError) === 'function') {
    return new (axios__WEBPACK_IMPORTED_MODULE_0___default().AxiosError)(message, (axios__WEBPACK_IMPORTED_MODULE_0___default().AxiosError)[code], config, request, response);
  }
  const error = new Error(message);
  return enhanceError(error, config, code, request, response);
}

/**
 *
 * Note:
 *
 *   This function is for backward compatible.
 *
 *
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      // eslint-disable-next-line no-null/no-null
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
}

/***/ }),

/***/ 9386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_OPTIONS = exports.exponentialDelay = exports.isNetworkOrIdempotentRequestError = exports.isIdempotentRequestError = exports.isSafeRequestError = exports.isRetryableError = exports.isNetworkError = exports.namespace = void 0;
const is_retry_allowed_1 = __importDefault(__webpack_require__(6592));
exports.namespace = 'axios-retry';
function isNetworkError(error) {
  const CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
  if (error.response) {
    return false;
  }
  if (!error.code) {
    return false;
  }
  // Prevents retrying timed out & cancelled requests
  if (CODE_EXCLUDE_LIST.includes(error.code)) {
    return false;
  }
  // Prevents retrying unsafe errors
  return (0, is_retry_allowed_1.default)(error);
}
exports.isNetworkError = isNetworkError;
const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
function isRetryableError(error) {
  return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
}
exports.isRetryableError = isRetryableError;
function isSafeRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isSafeRequestError = isSafeRequestError;
function isIdempotentRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isIdempotentRequestError = isIdempotentRequestError;
function isNetworkOrIdempotentRequestError(error) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
function noDelay() {
  return 0;
}
function exponentialDelay() {
  let retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let _error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let delayFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  const delay = Math.pow(2, retryNumber) * delayFactor;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
}
exports.exponentialDelay = exponentialDelay;
exports.DEFAULT_OPTIONS = {
  retries: 3,
  retryCondition: isNetworkOrIdempotentRequestError,
  retryDelay: noDelay,
  shouldResetTimeout: false,
  onRetry: () => {}
};
function getRequestOptions(config, defaultOptions) {
  return Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_OPTIONS), defaultOptions), config[exports.namespace]);
}
function setCurrentState(config, defaultOptions) {
  const currentState = getRequestOptions(config, defaultOptions || {});
  currentState.retryCount = currentState.retryCount || 0;
  currentState.lastRequestTime = currentState.lastRequestTime || Date.now();
  config[exports.namespace] = currentState;
  return currentState;
}
function fixConfig(axiosInstance, config) {
  // @ts-ignore
  if (axiosInstance.defaults.agent === config.agent) {
    // @ts-ignore
    delete config.agent;
  }
  if (axiosInstance.defaults.httpAgent === config.httpAgent) {
    delete config.httpAgent;
  }
  if (axiosInstance.defaults.httpsAgent === config.httpsAgent) {
    delete config.httpsAgent;
  }
}
function shouldRetry(currentState, error) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      retries,
      retryCondition
    } = currentState;
    const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
    // This could be a promise
    if (typeof shouldRetryOrPromise === 'object') {
      try {
        const shouldRetryPromiseResult = yield shouldRetryOrPromise;
        // keep return true unless shouldRetryPromiseResult return false for compatibility
        return shouldRetryPromiseResult !== false;
      } catch (_err) {
        return false;
      }
    }
    return shouldRetryOrPromise;
  });
}
const axiosRetry = (axiosInstance, defaultOptions) => {
  const requestInterceptorId = axiosInstance.interceptors.request.use(config => {
    setCurrentState(config, defaultOptions);
    return config;
  });
  const responseInterceptorId = axiosInstance.interceptors.response.use(null, error => __awaiter(void 0, void 0, void 0, function* () {
    const {
      config
    } = error;
    // If we have no information to retry the request
    if (!config) {
      return Promise.reject(error);
    }
    const currentState = setCurrentState(config, defaultOptions);
    if (yield shouldRetry(currentState, error)) {
      currentState.retryCount += 1;
      const {
        retryDelay,
        shouldResetTimeout,
        onRetry
      } = currentState;
      const delay = retryDelay(currentState.retryCount, error);
      // Axios fails merging this configuration to the default configuration because it has an issue
      // with circular structures: https://github.com/mzabriskie/axios/issues/370
      fixConfig(axiosInstance, config);
      if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
        const lastRequestDuration = Date.now() - currentState.lastRequestTime;
        const timeout = config.timeout - lastRequestDuration - delay;
        if (timeout <= 0) {
          return Promise.reject(error);
        }
        config.timeout = timeout;
      }
      config.transformRequest = [data => data];
      yield onRetry(currentState.retryCount, error, config);
      return new Promise(resolve => {
        setTimeout(() => resolve(axiosInstance(config)), delay);
      });
    }
    return Promise.reject(error);
  }));
  return {
    requestInterceptorId,
    responseInterceptorId
  };
};
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
exports["default"] = axiosRetry;

/***/ }),

/***/ 8876:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.2.4, Tue May 30 2023
 *
 * https://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */

(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var _global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : __webpack_require__.g;
  var keys = Object.keys;
  var isArray = Array.isArray;
  if (typeof Promise !== 'undefined' && !_global.Promise) {
    _global.Promise = Promise;
  }
  function extend(obj, extension) {
    if (typeof extension !== 'object') return obj;
    keys(extension).forEach(function (key) {
      obj[key] = extension[key];
    });
    return obj;
  }
  var getProto = Object.getPrototypeOf;
  var _hasOwn = {}.hasOwnProperty;
  function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
  }
  function props(proto, extension) {
    if (typeof extension === 'function') extension = extension(getProto(proto));
    (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function (key) {
      setProp(proto, key, extension[key]);
    });
  }
  var defineProperty = Object.defineProperty;
  function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? {
      get: functionOrGetSet.get,
      set: functionOrGetSet.set,
      configurable: true
    } : {
      value: functionOrGetSet,
      configurable: true,
      writable: true
    }, options));
  }
  function derive(Child) {
    return {
      from: function (Parent) {
        Child.prototype = Object.create(Parent.prototype);
        setProp(Child.prototype, "constructor", Child);
        return {
          extend: props.bind(null, Child.prototype)
        };
      }
    };
  }
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop);
    var proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
  }
  var _slice = [].slice;
  function slice(args, start, end) {
    return _slice.call(args, start, end);
  }
  function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
  }
  function assert(b) {
    if (!b) throw new Error("Assertion Failed");
  }
  function asap$1(fn) {
    if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
  }
  function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
      var nameAndValue = extractor(item, i);
      if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
      return result;
    }, {});
  }
  function tryCatch(fn, onerror, args) {
    try {
      fn.apply(null, args);
    } catch (ex) {
      onerror && onerror(ex);
    }
  }
  function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath)) return obj[keyPath];
    if (!keyPath) return obj;
    if (typeof keyPath !== 'string') {
      var rv = [];
      for (var i = 0, l = keyPath.length; i < l; ++i) {
        var val = getByKeyPath(obj, keyPath[i]);
        rv.push(val);
      }
      return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
      var innerObj = obj[keyPath.substr(0, period)];
      return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
  }
  function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined) return;
    if ('isFrozen' in Object && Object.isFrozen(obj)) return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
      assert(typeof value !== 'string' && 'length' in value);
      for (var i = 0, l = keyPath.length; i < l; ++i) {
        setByKeyPath(obj, keyPath[i], value[i]);
      }
    } else {
      var period = keyPath.indexOf('.');
      if (period !== -1) {
        var currentKeyPath = keyPath.substr(0, period);
        var remainingKeyPath = keyPath.substr(period + 1);
        if (remainingKeyPath === "") {
          if (value === undefined) {
            if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
          } else obj[currentKeyPath] = value;
        } else {
          var innerObj = obj[currentKeyPath];
          if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
          setByKeyPath(innerObj, remainingKeyPath, value);
        }
      } else {
        if (value === undefined) {
          if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
        } else obj[keyPath] = value;
      }
    }
  }
  function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
      setByKeyPath(obj, kp, undefined);
    });
  }
  function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
      if (hasOwn(obj, m)) rv[m] = obj[m];
    }
    return rv;
  }
  var concat = [].concat;
  function flatten(a) {
    return concat.apply([], a);
  }
  var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(',').concat(flatten([8, 16, 32, 64].map(function (num) {
    return ["Int", "Uint", "Float"].map(function (t) {
      return t + num + "Array";
    });
  }))).filter(function (t) {
    return _global[t];
  });
  var intrinsicTypes = intrinsicTypeNames.map(function (t) {
    return _global[t];
  });
  arrayToObject(intrinsicTypeNames, function (x) {
    return [x, true];
  });
  var circularRefs = null;
  function deepClone(any) {
    circularRefs = typeof WeakMap !== 'undefined' && new WeakMap();
    var rv = innerDeepClone(any);
    circularRefs = null;
    return rv;
  }
  function innerDeepClone(any) {
    if (!any || typeof any !== 'object') return any;
    var rv = circularRefs && circularRefs.get(any);
    if (rv) return rv;
    if (isArray(any)) {
      rv = [];
      circularRefs && circularRefs.set(any, rv);
      for (var i = 0, l = any.length; i < l; ++i) {
        rv.push(innerDeepClone(any[i]));
      }
    } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
      rv = any;
    } else {
      var proto = getProto(any);
      rv = proto === Object.prototype ? {} : Object.create(proto);
      circularRefs && circularRefs.set(any, rv);
      for (var prop in any) {
        if (hasOwn(any, prop)) {
          rv[prop] = innerDeepClone(any[prop]);
        }
      }
    }
    return rv;
  }
  var toString = {}.toString;
  function toStringTag(o) {
    return toString.call(o).slice(8, -1);
  }
  var iteratorSymbol = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
  } : function () {
    return null;
  };
  var NO_CHAR_ARRAY = {};
  function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
      if (isArray(arrayLike)) return arrayLike.slice();
      if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];
      if (it = getIteratorOf(arrayLike)) {
        a = [];
        while (x = it.next(), !x.done) a.push(x.value);
        return a;
      }
      if (arrayLike == null) return [arrayLike];
      i = arrayLike.length;
      if (typeof i === 'number') {
        a = new Array(i);
        while (i--) a[i] = arrayLike[i];
        return a;
      }
      return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--) a[i] = arguments[i];
    return a;
  }
  var isAsyncFunction = typeof Symbol !== 'undefined' ? function (fn) {
    return fn[Symbol.toStringTag] === 'AsyncFunction';
  } : function () {
    return false;
  };
  var debug = typeof location !== 'undefined' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
  function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
  }
  var libraryFilter = function () {
    return true;
  };
  var NEEDS_THROW_FOR_STACK = !new Error("").stack;
  function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK) try {
      getErrorWithStack.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
    return new Error();
  }
  function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack) return "";
    numIgnoredFrames = numIgnoredFrames || 0;
    if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
      return "\n" + frame;
    }).join('');
  }
  var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'PrematureCommit', 'ForeignAwait'];
  var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];
  var errorList = dexieErrorNames.concat(idbDomErrorNames);
  var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed",
    MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
  };
  function DexieError(name, msg) {
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
  }
  derive(DexieError).from(Error).extend({
    stack: {
      get: function () {
        return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
      }
    },
    toString: function () {
      return this.name + ": " + this.message;
    }
  });
  function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures).map(function (key) {
      return failures[key].toString();
    }).filter(function (v, i, s) {
      return s.indexOf(v) === i;
    }).join('\n');
  }
  function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
    this.message = getMultiErrorMessage(msg, failures);
  }
  derive(ModifyError).from(DexieError);
  function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = Object.keys(failures).map(function (pos) {
      return failures[pos];
    });
    this.failuresByPos = failures;
    this.message = getMultiErrorMessage(msg, failures);
  }
  derive(BulkError).from(DexieError);
  var errnames = errorList.reduce(function (obj, name) {
    return obj[name] = name + "Error", obj;
  }, {});
  var BaseException = DexieError;
  var exceptions = errorList.reduce(function (obj, name) {
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
      this._e = getErrorWithStack();
      this.name = fullName;
      if (!msgOrInner) {
        this.message = defaultTexts[name] || fullName;
        this.inner = null;
      } else if (typeof msgOrInner === 'string') {
        this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
        this.inner = inner || null;
      } else if (typeof msgOrInner === 'object') {
        this.message = msgOrInner.name + " " + msgOrInner.message;
        this.inner = msgOrInner;
      }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
  }, {});
  exceptions.Syntax = SyntaxError;
  exceptions.Type = TypeError;
  exceptions.Range = RangeError;
  var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
  }, {});
  function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
      setProp(rv, "stack", {
        get: function () {
          return this.inner.stack;
        }
      });
    }
    return rv;
  }
  var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
    return obj;
  }, {});
  fullNameExceptions.ModifyError = ModifyError;
  fullNameExceptions.DexieError = DexieError;
  fullNameExceptions.BulkError = BulkError;
  function nop() {}
  function mirror(val) {
    return val;
  }
  function pureFunctionChain(f1, f2) {
    if (f1 == null || f1 === mirror) return f2;
    return function (val) {
      return f2(f1(val));
    };
  }
  function callBoth(on1, on2) {
    return function () {
      on1.apply(this, arguments);
      on2.apply(this, arguments);
    };
  }
  function hookCreatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
      var res = f1.apply(this, arguments);
      if (res !== undefined) arguments[0] = res;
      var onsuccess = this.onsuccess,
        onerror = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var res2 = f2.apply(this, arguments);
      if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
      if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
      return res2 !== undefined ? res2 : res;
    };
  }
  function hookDeletingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
      f1.apply(this, arguments);
      var onsuccess = this.onsuccess,
        onerror = this.onerror;
      this.onsuccess = this.onerror = null;
      f2.apply(this, arguments);
      if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
      if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
  }
  function hookUpdatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function (modifications) {
      var res = f1.apply(this, arguments);
      extend(modifications, res);
      var onsuccess = this.onsuccess,
        onerror = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var res2 = f2.apply(this, arguments);
      if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
      if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
      return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
    };
  }
  function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
      if (f2.apply(this, arguments) === false) return false;
      return f1.apply(this, arguments);
    };
  }
  function promisableChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
      var res = f1.apply(this, arguments);
      if (res && typeof res.then === 'function') {
        var thiz = this,
          i = arguments.length,
          args = new Array(i);
        while (i--) args[i] = arguments[i];
        return res.then(function () {
          return f2.apply(thiz, args);
        });
      }
      return f2.apply(this, arguments);
    };
  }
  var INTERNAL = {};
  var LONG_STACKS_CLIP_LIMIT = 100,
    MAX_LONG_STACKS = 20,
    ZONE_ECHO_LIMIT = 100,
    _a$1 = typeof Promise === 'undefined' ? [] : function () {
      var globalP = Promise.resolve();
      if (typeof crypto === 'undefined' || !crypto.subtle) return [globalP, getProto(globalP), globalP];
      var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [nativeP, getProto(nativeP), globalP];
    }(),
    resolvedNativePromise = _a$1[0],
    nativePromiseProto = _a$1[1],
    resolvedGlobalPromise = _a$1[2],
    nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
  var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
  var patchGlobalPromise = !!resolvedGlobalPromise;
  var stack_being_generated = false;
  var schedulePhysicalTick = resolvedGlobalPromise ? function () {
    resolvedGlobalPromise.then(physicalTick);
  } : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function () {
    var hiddenDiv = document.createElement("div");
    new MutationObserver(function () {
      physicalTick();
      hiddenDiv = null;
    }).observe(hiddenDiv, {
      attributes: true
    });
    hiddenDiv.setAttribute('i', '1');
  } : function () {
    setTimeout(physicalTick, 0);
  };
  var asap = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
      schedulePhysicalTick();
      needsNewPhysicalTick = false;
    }
  };
  var isOutsideMicroTick = true,
    needsNewPhysicalTick = true,
    unhandledErrors = [],
    rejectingErrors = [],
    currentFulfiller = null,
    rejectionMapper = mirror;
  var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
      this.unhandleds.forEach(function (uh) {
        try {
          globalError(uh[0], uh[1]);
        } catch (e) {}
      });
    }
  };
  var PSD = globalPSD;
  var microtickQueue = [];
  var numScheduledCalls = 0;
  var tickFinalizers = [];
  function DexiePromise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop;
    this._lib = false;
    var psd = this._PSD = PSD;
    if (debug) {
      this._stackHolder = getErrorWithStack();
      this._prev = null;
      this._numPrev = 0;
    }
    if (typeof fn !== 'function') {
      if (fn !== INTERNAL) throw new TypeError('Not a function');
      this._state = arguments[1];
      this._value = arguments[2];
      if (this._state === false) handleRejection(this, this._value);
      return;
    }
    this._state = null;
    this._value = null;
    ++psd.ref;
    executePromiseTask(this, fn);
  }
  var thenProp = {
    get: function () {
      var psd = PSD,
        microTaskId = totalEchoes;
      function then(onFulfilled, onRejected) {
        var _this = this;
        var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
        var cleanup = possibleAwait && !decrementExpectedAwaits();
        var rv = new DexiePromise(function (resolve, reject) {
          propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
        });
        debug && linkToPreviousPromise(rv, this);
        return rv;
      }
      then.prototype = INTERNAL;
      return then;
    },
    set: function (value) {
      setProp(this, 'then', value && value.prototype === INTERNAL ? thenProp : {
        get: function () {
          return value;
        },
        set: thenProp.set
      });
    }
  };
  props(DexiePromise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
      propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
      if (arguments.length === 1) return this.then(null, onRejected);
      var type = arguments[0],
        handler = arguments[1];
      return typeof type === 'function' ? this.then(null, function (err) {
        return err instanceof type ? handler(err) : PromiseReject(err);
      }) : this.then(null, function (err) {
        return err && err.name === type ? handler(err) : PromiseReject(err);
      });
    },
    finally: function (onFinally) {
      return this.then(function (value) {
        onFinally();
        return value;
      }, function (err) {
        onFinally();
        return PromiseReject(err);
      });
    },
    stack: {
      get: function () {
        if (this._stack) return this._stack;
        try {
          stack_being_generated = true;
          var stacks = getStack(this, [], MAX_LONG_STACKS);
          var stack = stacks.join("\nFrom previous: ");
          if (this._state !== null) this._stack = stack;
          return stack;
        } finally {
          stack_being_generated = false;
        }
      }
    },
    timeout: function (ms, msg) {
      var _this = this;
      return ms < Infinity ? new DexiePromise(function (resolve, reject) {
        var handle = setTimeout(function () {
          return reject(new exceptions.Timeout(msg));
        }, ms);
        _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
      }) : this;
    }
  });
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
  globalPSD.env = snapShot();
  function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
  }
  props(DexiePromise, {
    all: function () {
      var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve, reject) {
        if (values.length === 0) resolve([]);
        var remaining = values.length;
        values.forEach(function (a, i) {
          return DexiePromise.resolve(a).then(function (x) {
            values[i] = x;
            if (! --remaining) resolve(values);
          }, reject);
        });
      });
    },
    resolve: function (value) {
      if (value instanceof DexiePromise) return value;
      if (value && typeof value.then === 'function') return new DexiePromise(function (resolve, reject) {
        value.then(resolve, reject);
      });
      var rv = new DexiePromise(INTERNAL, true, value);
      linkToPreviousPromise(rv, currentFulfiller);
      return rv;
    },
    reject: PromiseReject,
    race: function () {
      var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve, reject) {
        values.map(function (value) {
          return DexiePromise.resolve(value).then(resolve, reject);
        });
      });
    },
    PSD: {
      get: function () {
        return PSD;
      },
      set: function (value) {
        return PSD = value;
      }
    },
    totalEchoes: {
      get: function () {
        return totalEchoes;
      }
    },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
      get: function () {
        return asap;
      },
      set: function (value) {
        asap = value;
      }
    },
    rejectionMapper: {
      get: function () {
        return rejectionMapper;
      },
      set: function (value) {
        rejectionMapper = value;
      }
    },
    follow: function (fn, zoneProps) {
      return new DexiePromise(function (resolve, reject) {
        return newScope(function (resolve, reject) {
          var psd = PSD;
          psd.unhandleds = [];
          psd.onunhandled = reject;
          psd.finalize = callBoth(function () {
            var _this = this;
            run_at_end_of_this_or_next_physical_tick(function () {
              _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
            });
          }, psd.finalize);
          fn();
        }, zoneProps, resolve, reject);
      });
    }
  });
  if (NativePromise) {
    if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve) {
        if (possiblePromises.length === 0) resolve([]);
        var remaining = possiblePromises.length;
        var results = new Array(remaining);
        possiblePromises.forEach(function (p, i) {
          return DexiePromise.resolve(p).then(function (value) {
            return results[i] = {
              status: "fulfilled",
              value: value
            };
          }, function (reason) {
            return results[i] = {
              status: "rejected",
              reason: reason
            };
          }).then(function () {
            return --remaining || resolve(results);
          });
        });
      });
    });
    if (NativePromise.any && typeof AggregateError !== 'undefined') setProp(DexiePromise, "any", function () {
      var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
      return new DexiePromise(function (resolve, reject) {
        if (possiblePromises.length === 0) reject(new AggregateError([]));
        var remaining = possiblePromises.length;
        var failures = new Array(remaining);
        possiblePromises.forEach(function (p, i) {
          return DexiePromise.resolve(p).then(function (value) {
            return resolve(value);
          }, function (failure) {
            failures[i] = failure;
            if (! --remaining) reject(new AggregateError(failures));
          });
        });
      });
    });
  }
  function executePromiseTask(promise, fn) {
    try {
      fn(function (value) {
        if (promise._state !== null) return;
        if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
        var shouldExecuteTick = promise._lib && beginMicroTickScope();
        if (value && typeof value.then === 'function') {
          executePromiseTask(promise, function (resolve, reject) {
            value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
          });
        } else {
          promise._state = true;
          promise._value = value;
          propagateAllListeners(promise);
        }
        if (shouldExecuteTick) endMicroTickScope();
      }, handleRejection.bind(null, promise));
    } catch (ex) {
      handleRejection(promise, ex);
    }
  }
  function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null) return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
      var origProp = getPropertyDescriptor(reason, "stack");
      reason._promise = promise;
      setProp(reason, "stack", {
        get: function () {
          return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
        }
      });
    });
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick) endMicroTickScope();
  }
  function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
      propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize();
    if (numScheduledCalls === 0) {
      ++numScheduledCalls;
      asap(function () {
        if (--numScheduledCalls === 0) finalizePhysicalTick();
      }, []);
    }
  }
  function propagateToListener(promise, listener) {
    if (promise._state === null) {
      promise._listeners.push(listener);
      return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
      return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap(callListener, [cb, promise, listener]);
  }
  function callListener(cb, promise, listener) {
    try {
      currentFulfiller = promise;
      var ret,
        value = promise._value;
      if (promise._state) {
        ret = cb(value);
      } else {
        if (rejectingErrors.length) rejectingErrors = [];
        ret = cb(value);
        if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
      }
      listener.resolve(ret);
    } catch (e) {
      listener.reject(e);
    } finally {
      currentFulfiller = null;
      if (--numScheduledCalls === 0) finalizePhysicalTick();
      --listener.psd.ref || listener.psd.finalize();
    }
  }
  function getStack(promise, stacks, limit) {
    if (stacks.length === limit) return stacks;
    var stack = "";
    if (promise._state === false) {
      var failure = promise._value,
        errorName,
        message;
      if (failure != null) {
        errorName = failure.name || "Error";
        message = failure.message || failure;
        stack = prettyStack(failure, 0);
      } else {
        errorName = failure;
        message = "";
      }
      stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
      stack = prettyStack(promise._stackHolder, 2);
      if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
      if (promise._prev) getStack(promise._prev, stacks, limit);
    }
    return stacks;
  }
  function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
      promise._prev = prev;
      promise._numPrev = numPrev;
    }
  }
  function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
  }
  function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
  }
  function endMicroTickScope() {
    var callbacks, i, l;
    do {
      while (microtickQueue.length > 0) {
        callbacks = microtickQueue;
        microtickQueue = [];
        l = callbacks.length;
        for (i = 0; i < l; ++i) {
          var item = callbacks[i];
          item[0].apply(null, item[1]);
        }
      }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
  }
  function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
      p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0);
    var i = finalizers.length;
    while (i) finalizers[--i]();
  }
  function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
      fn();
      tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap(function () {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
  function addPossiblyUnhandledError(promise) {
    if (!unhandledErrors.some(function (p) {
      return p._value === promise._value;
    })) unhandledErrors.push(promise);
  }
  function markErrorAsHandled(promise) {
    var i = unhandledErrors.length;
    while (i) if (unhandledErrors[--i]._value === promise._value) {
      unhandledErrors.splice(i, 1);
      return;
    }
  }
  function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, false, reason);
  }
  function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
      var wasRootExec = beginMicroTickScope(),
        outerScope = PSD;
      try {
        switchToZone(psd, true);
        return fn.apply(this, arguments);
      } catch (e) {
        errorCatcher && errorCatcher(e);
      } finally {
        switchToZone(outerScope, false);
        if (wasRootExec) endMicroTickScope();
      }
    };
  }
  var task = {
    awaits: 0,
    echoes: 0,
    id: 0
  };
  var taskCounter = 0;
  var zoneStack = [];
  var zoneEchoes = 0;
  var totalEchoes = 0;
  var zone_id_counter = 0;
  function newScope(fn, props, a1, a2) {
    var parent = PSD,
      psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
      Promise: DexiePromise,
      PromiseProp: {
        value: DexiePromise,
        configurable: true,
        writable: true
      },
      all: DexiePromise.all,
      race: DexiePromise.race,
      allSettled: DexiePromise.allSettled,
      any: DexiePromise.any,
      resolve: DexiePromise.resolve,
      reject: DexiePromise.reject,
      nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
      gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {};
    if (props) extend(psd, props);
    ++parent.ref;
    psd.finalize = function () {
      --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0) psd.finalize();
    return rv;
  }
  function incrementExpectedAwaits() {
    if (!task.id) task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
  }
  function decrementExpectedAwaits() {
    if (!task.awaits) return false;
    if (--task.awaits === 0) task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    return true;
  }
  if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
    incrementExpectedAwaits = decrementExpectedAwaits = nop;
  }
  function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
      incrementExpectedAwaits();
      return possiblePromise.then(function (x) {
        decrementExpectedAwaits();
        return x;
      }, function (e) {
        decrementExpectedAwaits();
        return rejection(e);
      });
    }
    return possiblePromise;
  }
  function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
      task.echoes = task.id = 0;
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
  }
  function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
  }
  function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
      enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD) return;
    PSD = targetZone;
    if (currentZone === globalPSD) globalPSD.env = snapShot();
    if (patchGlobalPromise) {
      var GlobalPromise_1 = globalPSD.env.Promise;
      var targetEnv = targetZone.env;
      nativePromiseProto.then = targetEnv.nthen;
      GlobalPromise_1.prototype.then = targetEnv.gthen;
      if (currentZone.global || targetZone.global) {
        Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
        GlobalPromise_1.all = targetEnv.all;
        GlobalPromise_1.race = targetEnv.race;
        GlobalPromise_1.resolve = targetEnv.resolve;
        GlobalPromise_1.reject = targetEnv.reject;
        if (targetEnv.allSettled) GlobalPromise_1.allSettled = targetEnv.allSettled;
        if (targetEnv.any) GlobalPromise_1.any = targetEnv.any;
      }
    }
  }
  function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
      Promise: GlobalPromise,
      PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
      all: GlobalPromise.all,
      race: GlobalPromise.race,
      allSettled: GlobalPromise.allSettled,
      any: GlobalPromise.any,
      resolve: GlobalPromise.resolve,
      reject: GlobalPromise.reject,
      nthen: nativePromiseProto.then,
      gthen: GlobalPromise.prototype.then
    } : {};
  }
  function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn(a1, a2, a3);
    } finally {
      switchToZone(outerScope, false);
    }
  }
  function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
  }
  function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return typeof fn !== 'function' ? fn : function () {
      var outerZone = PSD;
      if (possibleAwait) incrementExpectedAwaits();
      switchToZone(zone, true);
      try {
        return fn.apply(this, arguments);
      } finally {
        switchToZone(outerZone, false);
        if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
      }
    };
  }
  function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
      return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
  }
  var UNHANDLEDREJECTION = "unhandledrejection";
  function globalError(err, promise) {
    var rv;
    try {
      rv = promise.onuncatched(err);
    } catch (e) {}
    if (rv !== false) try {
      var event,
        eventData = {
          promise: promise,
          reason: err
        };
      if (_global.document && document.createEvent) {
        event = document.createEvent('Event');
        event.initEvent(UNHANDLEDREJECTION, true, true);
        extend(event, eventData);
      } else if (_global.CustomEvent) {
        event = new CustomEvent(UNHANDLEDREJECTION, {
          detail: eventData
        });
        extend(event, eventData);
      }
      if (event && _global.dispatchEvent) {
        dispatchEvent(event);
        if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
          _global.onunhandledrejection(event);
        } catch (_) {}
      }
      if (debug && event && !event.defaultPrevented) {
        console.warn("Unhandled rejection: " + (err.stack || err));
      }
    } catch (e) {}
  }
  var rejection = DexiePromise.reject;
  function tempTransaction(db, mode, storeNames, fn) {
    if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
      if (db._state.openComplete) {
        return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
      }
      if (!db._state.isBeingOpened) {
        if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
        db.open().catch(nop);
      }
      return db._state.dbReadyPromise.then(function () {
        return tempTransaction(db, mode, storeNames, fn);
      });
    } else {
      var trans = db._createTransaction(mode, storeNames, db._dbSchema);
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn('Dexie: Need to reopen db');
          db._close();
          return db.open().then(function () {
            return tempTransaction(db, mode, storeNames, fn);
          });
        }
        return rejection(ex);
      }
      return trans._promise(mode, function (resolve, reject) {
        return newScope(function () {
          PSD.trans = trans;
          return fn(resolve, reject, trans);
        });
      }).then(function (result) {
        return trans._completion.then(function () {
          return result;
        });
      });
    }
  }
  var DEXIE_VERSION = '3.2.4';
  var maxString = String.fromCharCode(65535);
  var minKey = -Infinity;
  var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
  var STRING_EXPECTED = "String expected.";
  var connections = [];
  var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
  var hasIEDeleteObjectStoreBug = isIEOrEdge;
  var hangsOnDeleteLargeKeyRange = isIEOrEdge;
  var dexieStackFrameFilter = function (frame) {
    return !/(dexie\.js|dexie\.min\.js)/.test(frame);
  };
  var DBNAMES_DB = '__dbnames';
  var READONLY = 'readonly';
  var READWRITE = 'readwrite';
  function combine(filter1, filter2) {
    return filter1 ? filter2 ? function () {
      return filter1.apply(this, arguments) && filter2.apply(this, arguments);
    } : filter1 : filter2;
  }
  var AnyRange = {
    type: 3,
    lower: -Infinity,
    lowerOpen: false,
    upper: [[]],
    upperOpen: false
  };
  function workaroundForUndefinedPrimKey(keyPath) {
    return typeof keyPath === "string" && !/\./.test(keyPath) ? function (obj) {
      if (obj[keyPath] === undefined && keyPath in obj) {
        obj = deepClone(obj);
        delete obj[keyPath];
      }
      return obj;
    } : function (obj) {
      return obj;
    };
  }
  var Table = function () {
    function Table() {}
    Table.prototype._trans = function (mode, fn, writeLocked) {
      var trans = this._tx || PSD.trans;
      var tableName = this.name;
      function checkTableInTransaction(resolve, reject, trans) {
        if (!trans.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        return fn(trans.idbtrans, trans);
      }
      var wasRootExec = beginMicroTickScope();
      try {
        return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function () {
          return trans._promise(mode, checkTableInTransaction, writeLocked);
        }, {
          trans: trans,
          transless: PSD.transless || PSD
        }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
      } finally {
        if (wasRootExec) endMicroTickScope();
      }
    };
    Table.prototype.get = function (keyOrCrit, cb) {
      var _this = this;
      if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
      return this._trans('readonly', function (trans) {
        return _this.core.get({
          trans: trans,
          key: keyOrCrit
        }).then(function (res) {
          return _this.hook.reading.fire(res);
        });
      }).then(cb);
    };
    Table.prototype.where = function (indexOrCrit) {
      if (typeof indexOrCrit === 'string') return new this.db.WhereClause(this, indexOrCrit);
      if (isArray(indexOrCrit)) return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
      var keyPaths = keys(indexOrCrit);
      if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
      var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
        return ix.compound && keyPaths.every(function (keyPath) {
          return ix.keyPath.indexOf(keyPath) >= 0;
        }) && ix.keyPath.every(function (keyPath) {
          return keyPaths.indexOf(keyPath) >= 0;
        });
      })[0];
      if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function (kp) {
        return indexOrCrit[kp];
      }));
      if (!compoundIndex && debug) console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join('+') + "]"));
      var idxByName = this.schema.idxByName;
      var idb = this.db._deps.indexedDB;
      function equals(a, b) {
        try {
          return idb.cmp(a, b) === 0;
        } catch (e) {
          return false;
        }
      }
      var _a = keyPaths.reduce(function (_a, keyPath) {
          var prevIndex = _a[0],
            prevFilterFn = _a[1];
          var index = idxByName[keyPath];
          var value = indexOrCrit[keyPath];
          return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function (x) {
            var prop = getByKeyPath(x, keyPath);
            return isArray(prop) && prop.some(function (item) {
              return equals(value, item);
            });
          } : function (x) {
            return equals(value, getByKeyPath(x, keyPath));
          }) : prevFilterFn];
        }, [null, null]),
        idx = _a[0],
        filterFunction = _a[1];
      return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals('');
    };
    Table.prototype.filter = function (filterFunction) {
      return this.toCollection().and(filterFunction);
    };
    Table.prototype.count = function (thenShortcut) {
      return this.toCollection().count(thenShortcut);
    };
    Table.prototype.offset = function (offset) {
      return this.toCollection().offset(offset);
    };
    Table.prototype.limit = function (numRows) {
      return this.toCollection().limit(numRows);
    };
    Table.prototype.each = function (callback) {
      return this.toCollection().each(callback);
    };
    Table.prototype.toArray = function (thenShortcut) {
      return this.toCollection().toArray(thenShortcut);
    };
    Table.prototype.toCollection = function () {
      return new this.db.Collection(new this.db.WhereClause(this));
    };
    Table.prototype.orderBy = function (index) {
      return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join('+') + "]" : index));
    };
    Table.prototype.reverse = function () {
      return this.toCollection().reverse();
    };
    Table.prototype.mapToClass = function (constructor) {
      this.schema.mappedClass = constructor;
      var readHook = function (obj) {
        if (!obj) return obj;
        var res = Object.create(constructor.prototype);
        for (var m in obj) if (hasOwn(obj, m)) try {
          res[m] = obj[m];
        } catch (_) {}
        return res;
      };
      if (this.schema.readHook) {
        this.hook.reading.unsubscribe(this.schema.readHook);
      }
      this.schema.readHook = readHook;
      this.hook("reading", readHook);
      return constructor;
    };
    Table.prototype.defineClass = function () {
      function Class(content) {
        extend(this, content);
      }
      return this.mapToClass(Class);
    };
    Table.prototype.add = function (obj, key) {
      var _this = this;
      var _a = this.schema.primKey,
        auto = _a.auto,
        keyPath = _a.keyPath;
      var objToAdd = obj;
      if (keyPath && auto) {
        objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
      }
      return this._trans('readwrite', function (trans) {
        return _this.core.mutate({
          trans: trans,
          type: 'add',
          keys: key != null ? [key] : null,
          values: [objToAdd]
        });
      }).then(function (res) {
        return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
      }).then(function (lastResult) {
        if (keyPath) {
          try {
            setByKeyPath(obj, keyPath, lastResult);
          } catch (_) {}
        }
        return lastResult;
      });
    };
    Table.prototype.update = function (keyOrObject, modifications) {
      if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
        var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
        if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
        try {
          if (typeof modifications !== "function") {
            keys(modifications).forEach(function (keyPath) {
              setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
            });
          } else {
            modifications(keyOrObject, {
              value: keyOrObject,
              primKey: key
            });
          }
        } catch (_a) {}
        return this.where(":id").equals(key).modify(modifications);
      } else {
        return this.where(":id").equals(keyOrObject).modify(modifications);
      }
    };
    Table.prototype.put = function (obj, key) {
      var _this = this;
      var _a = this.schema.primKey,
        auto = _a.auto,
        keyPath = _a.keyPath;
      var objToAdd = obj;
      if (keyPath && auto) {
        objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
      }
      return this._trans('readwrite', function (trans) {
        return _this.core.mutate({
          trans: trans,
          type: 'put',
          values: [objToAdd],
          keys: key != null ? [key] : null
        });
      }).then(function (res) {
        return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
      }).then(function (lastResult) {
        if (keyPath) {
          try {
            setByKeyPath(obj, keyPath, lastResult);
          } catch (_) {}
        }
        return lastResult;
      });
    };
    Table.prototype.delete = function (key) {
      var _this = this;
      return this._trans('readwrite', function (trans) {
        return _this.core.mutate({
          trans: trans,
          type: 'delete',
          keys: [key]
        });
      }).then(function (res) {
        return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
      });
    };
    Table.prototype.clear = function () {
      var _this = this;
      return this._trans('readwrite', function (trans) {
        return _this.core.mutate({
          trans: trans,
          type: 'deleteRange',
          range: AnyRange
        });
      }).then(function (res) {
        return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
      });
    };
    Table.prototype.bulkGet = function (keys) {
      var _this = this;
      return this._trans('readonly', function (trans) {
        return _this.core.getMany({
          keys: keys,
          trans: trans
        }).then(function (result) {
          return result.map(function (res) {
            return _this.hook.reading.fire(res);
          });
        });
      });
    };
    Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
      var _this = this;
      var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
      options = options || (keys ? undefined : keysOrOptions);
      var wantResults = options ? options.allKeys : undefined;
      return this._trans('readwrite', function (trans) {
        var _a = _this.schema.primKey,
          auto = _a.auto,
          keyPath = _a.keyPath;
        if (keyPath && keys) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (keys && keys.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
        var numObjects = objects.length;
        var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
        return _this.core.mutate({
          trans: trans,
          type: 'add',
          keys: keys,
          values: objectsToAdd,
          wantResults: wantResults
        }).then(function (_a) {
          var numFailures = _a.numFailures,
            results = _a.results,
            lastResult = _a.lastResult,
            failures = _a.failures;
          var result = wantResults ? results : lastResult;
          if (numFailures === 0) return result;
          throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
        });
      });
    };
    Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
      var _this = this;
      var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
      options = options || (keys ? undefined : keysOrOptions);
      var wantResults = options ? options.allKeys : undefined;
      return this._trans('readwrite', function (trans) {
        var _a = _this.schema.primKey,
          auto = _a.auto,
          keyPath = _a.keyPath;
        if (keyPath && keys) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (keys && keys.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
        var numObjects = objects.length;
        var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
        return _this.core.mutate({
          trans: trans,
          type: 'put',
          keys: keys,
          values: objectsToPut,
          wantResults: wantResults
        }).then(function (_a) {
          var numFailures = _a.numFailures,
            results = _a.results,
            lastResult = _a.lastResult,
            failures = _a.failures;
          var result = wantResults ? results : lastResult;
          if (numFailures === 0) return result;
          throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
        });
      });
    };
    Table.prototype.bulkDelete = function (keys) {
      var _this = this;
      var numKeys = keys.length;
      return this._trans('readwrite', function (trans) {
        return _this.core.mutate({
          trans: trans,
          type: 'delete',
          keys: keys
        });
      }).then(function (_a) {
        var numFailures = _a.numFailures,
          lastResult = _a.lastResult,
          failures = _a.failures;
        if (numFailures === 0) return lastResult;
        throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
      });
    };
    return Table;
  }();
  function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
      if (subscriber) {
        var i = arguments.length,
          args = new Array(i - 1);
        while (--i) args[i - 1] = arguments[i];
        evs[eventName].subscribe.apply(null, args);
        return ctx;
      } else if (typeof eventName === 'string') {
        return evs[eventName];
      }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
      add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
      if (typeof eventName === 'object') return addConfiguredEvents(eventName);
      if (!chainFunction) chainFunction = reverseStoppableEventChain;
      if (!defaultFunction) defaultFunction = nop;
      var context = {
        subscribers: [],
        fire: defaultFunction,
        subscribe: function (cb) {
          if (context.subscribers.indexOf(cb) === -1) {
            context.subscribers.push(cb);
            context.fire = chainFunction(context.fire, cb);
          }
        },
        unsubscribe: function (cb) {
          context.subscribers = context.subscribers.filter(function (fn) {
            return fn !== cb;
          });
          context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
        }
      };
      evs[eventName] = rv[eventName] = context;
      return context;
    }
    function addConfiguredEvents(cfg) {
      keys(cfg).forEach(function (eventName) {
        var args = cfg[eventName];
        if (isArray(args)) {
          add(eventName, cfg[eventName][0], cfg[eventName][1]);
        } else if (args === 'asap') {
          var context = add(eventName, mirror, function fire() {
            var i = arguments.length,
              args = new Array(i);
            while (i--) args[i] = arguments[i];
            context.subscribers.forEach(function (fn) {
              asap$1(function fireEvent() {
                fn.apply(null, args);
              });
            });
          });
        } else throw new exceptions.InvalidArgument("Invalid event config");
      });
    }
  }
  function makeClassConstructor(prototype, constructor) {
    derive(constructor).from({
      prototype: prototype
    });
    return constructor;
  }
  function createTableConstructor(db) {
    return makeClassConstructor(Table.prototype, function Table(name, tableSchema, trans) {
      this.db = db;
      this._tx = trans;
      this.name = name;
      this.schema = tableSchema;
      this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
        "creating": [hookCreatingChain, nop],
        "reading": [pureFunctionChain, mirror],
        "updating": [hookUpdatingChain, nop],
        "deleting": [hookDeletingChain, nop]
      });
    });
  }
  function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
  }
  function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
  }
  function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function () {
      return combine(curr(), factory());
    } : factory;
    ctx.justLimit = isLimitFilter && !curr;
  }
  function addMatchFilter(ctx, fn) {
    ctx.isMatch = combine(ctx.isMatch, fn);
  }
  function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey) return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
  }
  function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
      trans: trans,
      values: !ctx.keysOnly,
      reverse: ctx.dir === 'prev',
      unique: !!ctx.unique,
      query: {
        index: index,
        range: ctx.range
      }
    });
  }
  function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (!ctx.or) {
      return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
    } else {
      var set_1 = {};
      var union = function (item, cursor, advance) {
        if (!filter || filter(cursor, advance, function (result) {
          return cursor.stop(result);
        }, function (err) {
          return cursor.fail(err);
        })) {
          var primaryKey = cursor.primaryKey;
          var key = '' + primaryKey;
          if (key === '[object ArrayBuffer]') key = '' + new Uint8Array(primaryKey);
          if (!hasOwn(set_1, key)) {
            set_1[key] = true;
            fn(item, cursor, advance);
          }
        }
      };
      return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
    }
  }
  function iterate(cursorPromise, filter, fn, valueMapper) {
    var mappedFn = valueMapper ? function (x, c, a) {
      return fn(valueMapper(x), c, a);
    } : fn;
    var wrappedFn = wrap(mappedFn);
    return cursorPromise.then(function (cursor) {
      if (cursor) {
        return cursor.start(function () {
          var c = function () {
            return cursor.continue();
          };
          if (!filter || filter(cursor, function (advancer) {
            return c = advancer;
          }, function (val) {
            cursor.stop(val);
            c = nop;
          }, function (e) {
            cursor.fail(e);
            c = nop;
          })) wrappedFn(cursor.value, cursor, function (advancer) {
            return c = advancer;
          });
          c();
        });
      }
    });
  }
  function cmp(a, b) {
    try {
      var ta = type(a);
      var tb = type(b);
      if (ta !== tb) {
        if (ta === 'Array') return 1;
        if (tb === 'Array') return -1;
        if (ta === 'binary') return 1;
        if (tb === 'binary') return -1;
        if (ta === 'string') return 1;
        if (tb === 'string') return -1;
        if (ta === 'Date') return 1;
        if (tb !== 'Date') return NaN;
        return -1;
      }
      switch (ta) {
        case 'number':
        case 'Date':
        case 'string':
          return a > b ? 1 : a < b ? -1 : 0;
        case 'binary':
          {
            return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
          }
        case 'Array':
          return compareArrays(a, b);
      }
    } catch (_a) {}
    return NaN;
  }
  function compareArrays(a, b) {
    var al = a.length;
    var bl = b.length;
    var l = al < bl ? al : bl;
    for (var i = 0; i < l; ++i) {
      var res = cmp(a[i], b[i]);
      if (res !== 0) return res;
    }
    return al === bl ? 0 : al < bl ? -1 : 1;
  }
  function compareUint8Arrays(a, b) {
    var al = a.length;
    var bl = b.length;
    var l = al < bl ? al : bl;
    for (var i = 0; i < l; ++i) {
      if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
    }
    return al === bl ? 0 : al < bl ? -1 : 1;
  }
  function type(x) {
    var t = typeof x;
    if (t !== 'object') return t;
    if (ArrayBuffer.isView(x)) return 'binary';
    var tsTag = toStringTag(x);
    return tsTag === 'ArrayBuffer' ? 'binary' : tsTag;
  }
  function getUint8Array(a) {
    if (a instanceof Uint8Array) return a;
    if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    return new Uint8Array(a);
  }
  var Collection = function () {
    function Collection() {}
    Collection.prototype._read = function (fn, cb) {
      var ctx = this._ctx;
      return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readonly', fn).then(cb);
    };
    Collection.prototype._write = function (fn) {
      var ctx = this._ctx;
      return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readwrite', fn, "locked");
    };
    Collection.prototype._addAlgorithm = function (fn) {
      var ctx = this._ctx;
      ctx.algorithm = combine(ctx.algorithm, fn);
    };
    Collection.prototype._iterate = function (fn, coreTrans) {
      return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    };
    Collection.prototype.clone = function (props) {
      var rv = Object.create(this.constructor.prototype),
        ctx = Object.create(this._ctx);
      if (props) extend(ctx, props);
      rv._ctx = ctx;
      return rv;
    };
    Collection.prototype.raw = function () {
      this._ctx.valueMapper = null;
      return this;
    };
    Collection.prototype.each = function (fn) {
      var ctx = this._ctx;
      return this._read(function (trans) {
        return iter(ctx, fn, trans, ctx.table.core);
      });
    };
    Collection.prototype.count = function (cb) {
      var _this = this;
      return this._read(function (trans) {
        var ctx = _this._ctx;
        var coreTable = ctx.table.core;
        if (isPlainKeyRange(ctx, true)) {
          return coreTable.count({
            trans: trans,
            query: {
              index: getIndexOrStore(ctx, coreTable.schema),
              range: ctx.range
            }
          }).then(function (count) {
            return Math.min(count, ctx.limit);
          });
        } else {
          var count = 0;
          return iter(ctx, function () {
            ++count;
            return false;
          }, trans, coreTable).then(function () {
            return count;
          });
        }
      }).then(cb);
    };
    Collection.prototype.sortBy = function (keyPath, cb) {
      var parts = keyPath.split('.').reverse(),
        lastPart = parts[0],
        lastIndex = parts.length - 1;
      function getval(obj, i) {
        if (i) return getval(obj[parts[i]], i - 1);
        return obj[lastPart];
      }
      var order = this._ctx.dir === "next" ? 1 : -1;
      function sorter(a, b) {
        var aVal = getval(a, lastIndex),
          bVal = getval(b, lastIndex);
        return aVal < bVal ? -order : aVal > bVal ? order : 0;
      }
      return this.toArray(function (a) {
        return a.sort(sorter);
      }).then(cb);
    };
    Collection.prototype.toArray = function (cb) {
      var _this = this;
      return this._read(function (trans) {
        var ctx = _this._ctx;
        if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
          var valueMapper_1 = ctx.valueMapper;
          var index = getIndexOrStore(ctx, ctx.table.core.schema);
          return ctx.table.core.query({
            trans: trans,
            limit: ctx.limit,
            values: true,
            query: {
              index: index,
              range: ctx.range
            }
          }).then(function (_a) {
            var result = _a.result;
            return valueMapper_1 ? result.map(valueMapper_1) : result;
          });
        } else {
          var a_1 = [];
          return iter(ctx, function (item) {
            return a_1.push(item);
          }, trans, ctx.table.core).then(function () {
            return a_1;
          });
        }
      }, cb);
    };
    Collection.prototype.offset = function (offset) {
      var ctx = this._ctx;
      if (offset <= 0) return this;
      ctx.offset += offset;
      if (isPlainKeyRange(ctx)) {
        addReplayFilter(ctx, function () {
          var offsetLeft = offset;
          return function (cursor, advance) {
            if (offsetLeft === 0) return true;
            if (offsetLeft === 1) {
              --offsetLeft;
              return false;
            }
            advance(function () {
              cursor.advance(offsetLeft);
              offsetLeft = 0;
            });
            return false;
          };
        });
      } else {
        addReplayFilter(ctx, function () {
          var offsetLeft = offset;
          return function () {
            return --offsetLeft < 0;
          };
        });
      }
      return this;
    };
    Collection.prototype.limit = function (numRows) {
      this._ctx.limit = Math.min(this._ctx.limit, numRows);
      addReplayFilter(this._ctx, function () {
        var rowsLeft = numRows;
        return function (cursor, advance, resolve) {
          if (--rowsLeft <= 0) advance(resolve);
          return rowsLeft >= 0;
        };
      }, true);
      return this;
    };
    Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
      addFilter(this._ctx, function (cursor, advance, resolve) {
        if (filterFunction(cursor.value)) {
          advance(resolve);
          return bIncludeStopEntry;
        } else {
          return true;
        }
      });
      return this;
    };
    Collection.prototype.first = function (cb) {
      return this.limit(1).toArray(function (a) {
        return a[0];
      }).then(cb);
    };
    Collection.prototype.last = function (cb) {
      return this.reverse().first(cb);
    };
    Collection.prototype.filter = function (filterFunction) {
      addFilter(this._ctx, function (cursor) {
        return filterFunction(cursor.value);
      });
      addMatchFilter(this._ctx, filterFunction);
      return this;
    };
    Collection.prototype.and = function (filter) {
      return this.filter(filter);
    };
    Collection.prototype.or = function (indexName) {
      return new this.db.WhereClause(this._ctx.table, indexName, this);
    };
    Collection.prototype.reverse = function () {
      this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
      if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
      return this;
    };
    Collection.prototype.desc = function () {
      return this.reverse();
    };
    Collection.prototype.eachKey = function (cb) {
      var ctx = this._ctx;
      ctx.keysOnly = !ctx.isMatch;
      return this.each(function (val, cursor) {
        cb(cursor.key, cursor);
      });
    };
    Collection.prototype.eachUniqueKey = function (cb) {
      this._ctx.unique = "unique";
      return this.eachKey(cb);
    };
    Collection.prototype.eachPrimaryKey = function (cb) {
      var ctx = this._ctx;
      ctx.keysOnly = !ctx.isMatch;
      return this.each(function (val, cursor) {
        cb(cursor.primaryKey, cursor);
      });
    };
    Collection.prototype.keys = function (cb) {
      var ctx = this._ctx;
      ctx.keysOnly = !ctx.isMatch;
      var a = [];
      return this.each(function (item, cursor) {
        a.push(cursor.key);
      }).then(function () {
        return a;
      }).then(cb);
    };
    Collection.prototype.primaryKeys = function (cb) {
      var ctx = this._ctx;
      if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        return this._read(function (trans) {
          var index = getIndexOrStore(ctx, ctx.table.core.schema);
          return ctx.table.core.query({
            trans: trans,
            values: false,
            limit: ctx.limit,
            query: {
              index: index,
              range: ctx.range
            }
          });
        }).then(function (_a) {
          var result = _a.result;
          return result;
        }).then(cb);
      }
      ctx.keysOnly = !ctx.isMatch;
      var a = [];
      return this.each(function (item, cursor) {
        a.push(cursor.primaryKey);
      }).then(function () {
        return a;
      }).then(cb);
    };
    Collection.prototype.uniqueKeys = function (cb) {
      this._ctx.unique = "unique";
      return this.keys(cb);
    };
    Collection.prototype.firstKey = function (cb) {
      return this.limit(1).keys(function (a) {
        return a[0];
      }).then(cb);
    };
    Collection.prototype.lastKey = function (cb) {
      return this.reverse().firstKey(cb);
    };
    Collection.prototype.distinct = function () {
      var ctx = this._ctx,
        idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
      if (!idx || !idx.multi) return this;
      var set = {};
      addFilter(this._ctx, function (cursor) {
        var strKey = cursor.primaryKey.toString();
        var found = hasOwn(set, strKey);
        set[strKey] = true;
        return !found;
      });
      return this;
    };
    Collection.prototype.modify = function (changes) {
      var _this = this;
      var ctx = this._ctx;
      return this._write(function (trans) {
        var modifyer;
        if (typeof changes === 'function') {
          modifyer = changes;
        } else {
          var keyPaths = keys(changes);
          var numKeys = keyPaths.length;
          modifyer = function (item) {
            var anythingModified = false;
            for (var i = 0; i < numKeys; ++i) {
              var keyPath = keyPaths[i],
                val = changes[keyPath];
              if (getByKeyPath(item, keyPath) !== val) {
                setByKeyPath(item, keyPath, val);
                anythingModified = true;
              }
            }
            return anythingModified;
          };
        }
        var coreTable = ctx.table.core;
        var _a = coreTable.schema.primaryKey,
          outbound = _a.outbound,
          extractKey = _a.extractKey;
        var limit = _this.db._options.modifyChunkSize || 200;
        var totalFailures = [];
        var successCount = 0;
        var failedKeys = [];
        var applyMutateResult = function (expectedCount, res) {
          var failures = res.failures,
            numFailures = res.numFailures;
          successCount += expectedCount - numFailures;
          for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
            var pos = _a[_i];
            totalFailures.push(failures[pos]);
          }
        };
        return _this.clone().primaryKeys().then(function (keys) {
          var nextChunk = function (offset) {
            var count = Math.min(limit, keys.length - offset);
            return coreTable.getMany({
              trans: trans,
              keys: keys.slice(offset, offset + count),
              cache: "immutable"
            }).then(function (values) {
              var addValues = [];
              var putValues = [];
              var putKeys = outbound ? [] : null;
              var deleteKeys = [];
              for (var i = 0; i < count; ++i) {
                var origValue = values[i];
                var ctx_1 = {
                  value: deepClone(origValue),
                  primKey: keys[offset + i]
                };
                if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                  if (ctx_1.value == null) {
                    deleteKeys.push(keys[offset + i]);
                  } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                    deleteKeys.push(keys[offset + i]);
                    addValues.push(ctx_1.value);
                  } else {
                    putValues.push(ctx_1.value);
                    if (outbound) putKeys.push(keys[offset + i]);
                  }
                }
              }
              var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== 'function' || changes === deleteCallback) && {
                index: ctx.index,
                range: ctx.range
              };
              return Promise.resolve(addValues.length > 0 && coreTable.mutate({
                trans: trans,
                type: 'add',
                values: addValues
              }).then(function (res) {
                for (var pos in res.failures) {
                  deleteKeys.splice(parseInt(pos), 1);
                }
                applyMutateResult(addValues.length, res);
              })).then(function () {
                return (putValues.length > 0 || criteria && typeof changes === 'object') && coreTable.mutate({
                  trans: trans,
                  type: 'put',
                  keys: putKeys,
                  values: putValues,
                  criteria: criteria,
                  changeSpec: typeof changes !== 'function' && changes
                }).then(function (res) {
                  return applyMutateResult(putValues.length, res);
                });
              }).then(function () {
                return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                  trans: trans,
                  type: 'delete',
                  keys: deleteKeys,
                  criteria: criteria
                }).then(function (res) {
                  return applyMutateResult(deleteKeys.length, res);
                });
              }).then(function () {
                return keys.length > offset + count && nextChunk(offset + limit);
              });
            });
          };
          return nextChunk(0).then(function () {
            if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
            return keys.length;
          });
        });
      });
    };
    Collection.prototype.delete = function () {
      var ctx = this._ctx,
        range = ctx.range;
      if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
        return this._write(function (trans) {
          var primaryKey = ctx.table.core.schema.primaryKey;
          var coreRange = range;
          return ctx.table.core.count({
            trans: trans,
            query: {
              index: primaryKey,
              range: coreRange
            }
          }).then(function (count) {
            return ctx.table.core.mutate({
              trans: trans,
              type: 'deleteRange',
              range: coreRange
            }).then(function (_a) {
              var failures = _a.failures;
              _a.lastResult;
              _a.results;
              var numFailures = _a.numFailures;
              if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) {
                return failures[pos];
              }), count - numFailures);
              return count - numFailures;
            });
          });
        });
      }
      return this.modify(deleteCallback);
    };
    return Collection;
  }();
  var deleteCallback = function (value, ctx) {
    return ctx.value = null;
  };
  function createCollectionConstructor(db) {
    return makeClassConstructor(Collection.prototype, function Collection(whereClause, keyRangeGenerator) {
      this.db = db;
      var keyRange = AnyRange,
        error = null;
      if (keyRangeGenerator) try {
        keyRange = keyRangeGenerator();
      } catch (ex) {
        error = ex;
      }
      var whereCtx = whereClause._ctx;
      var table = whereCtx.table;
      var readingHook = table.hook.reading.fire;
      this._ctx = {
        table: table,
        index: whereCtx.index,
        isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
        range: keyRange,
        keysOnly: false,
        dir: "next",
        unique: "",
        algorithm: null,
        filter: null,
        replayFilter: null,
        justLimit: true,
        isMatch: null,
        offset: 0,
        limit: Infinity,
        error: error,
        or: whereCtx.or,
        valueMapper: readingHook !== mirror ? readingHook : null
      };
    });
  }
  function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
  }
  function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  }
  function fail(collectionOrWhereClause, err, T) {
    var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
    collection._ctx.error = T ? new T(err) : new TypeError(err);
    return collection;
  }
  function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function () {
      return rangeEqual("");
    }).limit(0);
  }
  function upperFactory(dir) {
    return dir === "next" ? function (s) {
      return s.toUpperCase();
    } : function (s) {
      return s.toLowerCase();
    };
  }
  function lowerFactory(dir) {
    return dir === "next" ? function (s) {
      return s.toLowerCase();
    } : function (s) {
      return s.toUpperCase();
    };
  }
  function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
    var length = Math.min(key.length, lowerNeedle.length);
    var llp = -1;
    for (var i = 0; i < length; ++i) {
      var lwrKeyChar = lowerKey[i];
      if (lwrKeyChar !== lowerNeedle[i]) {
        if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
        if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
        if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
        return null;
      }
      if (cmp(key[i], lwrKeyChar) < 0) llp = i;
    }
    if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
    if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
    return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
  }
  function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var upper,
      lower,
      compare,
      upperNeedles,
      lowerNeedles,
      direction,
      nextKeySuffix,
      needlesLen = needles.length;
    if (!needles.every(function (s) {
      return typeof s === 'string';
    })) {
      return fail(whereClause, STRING_EXPECTED);
    }
    function initDirection(dir) {
      upper = upperFactory(dir);
      lower = lowerFactory(dir);
      compare = dir === "next" ? simpleCompare : simpleCompareReverse;
      var needleBounds = needles.map(function (needle) {
        return {
          lower: lower(needle),
          upper: upper(needle)
        };
      }).sort(function (a, b) {
        return compare(a.lower, b.lower);
      });
      upperNeedles = needleBounds.map(function (nb) {
        return nb.upper;
      });
      lowerNeedles = needleBounds.map(function (nb) {
        return nb.lower;
      });
      direction = dir;
      nextKeySuffix = dir === "next" ? "" : suffix;
    }
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function () {
      return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
    });
    c._ondirectionchange = function (direction) {
      initDirection(direction);
    };
    var firstPossibleNeedle = 0;
    c._addAlgorithm(function (cursor, advance, resolve) {
      var key = cursor.key;
      if (typeof key !== 'string') return false;
      var lowerKey = lower(key);
      if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
        return true;
      } else {
        var lowestPossibleCasing = null;
        for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
          var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
          if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
            lowestPossibleCasing = casing;
          }
        }
        if (lowestPossibleCasing !== null) {
          advance(function () {
            cursor.continue(lowestPossibleCasing + nextKeySuffix);
          });
        } else {
          advance(resolve);
        }
        return false;
      }
    });
    return c;
  }
  function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
      type: 2,
      lower: lower,
      upper: upper,
      lowerOpen: lowerOpen,
      upperOpen: upperOpen
    };
  }
  function rangeEqual(value) {
    return {
      type: 1,
      lower: value,
      upper: value
    };
  }
  var WhereClause = function () {
    function WhereClause() {}
    Object.defineProperty(WhereClause.prototype, "Collection", {
      get: function () {
        return this._ctx.table.db.Collection;
      },
      enumerable: false,
      configurable: true
    });
    WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
      includeLower = includeLower !== false;
      includeUpper = includeUpper === true;
      try {
        if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
        return new this.Collection(this, function () {
          return createRange(lower, upper, !includeLower, !includeUpper);
        });
      } catch (e) {
        return fail(this, INVALID_KEY_ARGUMENT);
      }
    };
    WhereClause.prototype.equals = function (value) {
      if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
      return new this.Collection(this, function () {
        return rangeEqual(value);
      });
    };
    WhereClause.prototype.above = function (value) {
      if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
      return new this.Collection(this, function () {
        return createRange(value, undefined, true);
      });
    };
    WhereClause.prototype.aboveOrEqual = function (value) {
      if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
      return new this.Collection(this, function () {
        return createRange(value, undefined, false);
      });
    };
    WhereClause.prototype.below = function (value) {
      if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
      return new this.Collection(this, function () {
        return createRange(undefined, value, false, true);
      });
    };
    WhereClause.prototype.belowOrEqual = function (value) {
      if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
      return new this.Collection(this, function () {
        return createRange(undefined, value);
      });
    };
    WhereClause.prototype.startsWith = function (str) {
      if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
      return this.between(str, str + maxString, true, true);
    };
    WhereClause.prototype.startsWithIgnoreCase = function (str) {
      if (str === "") return this.startsWith(str);
      return addIgnoreCaseAlgorithm(this, function (x, a) {
        return x.indexOf(a[0]) === 0;
      }, [str], maxString);
    };
    WhereClause.prototype.equalsIgnoreCase = function (str) {
      return addIgnoreCaseAlgorithm(this, function (x, a) {
        return x === a[0];
      }, [str], "");
    };
    WhereClause.prototype.anyOfIgnoreCase = function () {
      var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
      if (set.length === 0) return emptyCollection(this);
      return addIgnoreCaseAlgorithm(this, function (x, a) {
        return a.indexOf(x) !== -1;
      }, set, "");
    };
    WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
      var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
      if (set.length === 0) return emptyCollection(this);
      return addIgnoreCaseAlgorithm(this, function (x, a) {
        return a.some(function (n) {
          return x.indexOf(n) === 0;
        });
      }, set, maxString);
    };
    WhereClause.prototype.anyOf = function () {
      var _this = this;
      var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
      var compare = this._cmp;
      try {
        set.sort(compare);
      } catch (e) {
        return fail(this, INVALID_KEY_ARGUMENT);
      }
      if (set.length === 0) return emptyCollection(this);
      var c = new this.Collection(this, function () {
        return createRange(set[0], set[set.length - 1]);
      });
      c._ondirectionchange = function (direction) {
        compare = direction === "next" ? _this._ascending : _this._descending;
        set.sort(compare);
      };
      var i = 0;
      c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        while (compare(key, set[i]) > 0) {
          ++i;
          if (i === set.length) {
            advance(resolve);
            return false;
          }
        }
        if (compare(key, set[i]) === 0) {
          return true;
        } else {
          advance(function () {
            cursor.continue(set[i]);
          });
          return false;
        }
      });
      return c;
    };
    WhereClause.prototype.notEqual = function (value) {
      return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
        includeLowers: false,
        includeUppers: false
      });
    };
    WhereClause.prototype.noneOf = function () {
      var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
      if (set.length === 0) return new this.Collection(this);
      try {
        set.sort(this._ascending);
      } catch (e) {
        return fail(this, INVALID_KEY_ARGUMENT);
      }
      var ranges = set.reduce(function (res, val) {
        return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
      }, null);
      ranges.push([set[set.length - 1], this.db._maxKey]);
      return this.inAnyRange(ranges, {
        includeLowers: false,
        includeUppers: false
      });
    };
    WhereClause.prototype.inAnyRange = function (ranges, options) {
      var _this = this;
      var cmp = this._cmp,
        ascending = this._ascending,
        descending = this._descending,
        min = this._min,
        max = this._max;
      if (ranges.length === 0) return emptyCollection(this);
      if (!ranges.every(function (range) {
        return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
      })) {
        return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
      }
      var includeLowers = !options || options.includeLowers !== false;
      var includeUppers = options && options.includeUppers === true;
      function addRange(ranges, newRange) {
        var i = 0,
          l = ranges.length;
        for (; i < l; ++i) {
          var range = ranges[i];
          if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
            range[0] = min(range[0], newRange[0]);
            range[1] = max(range[1], newRange[1]);
            break;
          }
        }
        if (i === l) ranges.push(newRange);
        return ranges;
      }
      var sortDirection = ascending;
      function rangeSorter(a, b) {
        return sortDirection(a[0], b[0]);
      }
      var set;
      try {
        set = ranges.reduce(addRange, []);
        set.sort(rangeSorter);
      } catch (ex) {
        return fail(this, INVALID_KEY_ARGUMENT);
      }
      var rangePos = 0;
      var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
        return ascending(key, set[rangePos][1]) > 0;
      } : function (key) {
        return ascending(key, set[rangePos][1]) >= 0;
      };
      var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
        return descending(key, set[rangePos][0]) > 0;
      } : function (key) {
        return descending(key, set[rangePos][0]) >= 0;
      };
      function keyWithinCurrentRange(key) {
        return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
      }
      var checkKey = keyIsBeyondCurrentEntry;
      var c = new this.Collection(this, function () {
        return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
      });
      c._ondirectionchange = function (direction) {
        if (direction === "next") {
          checkKey = keyIsBeyondCurrentEntry;
          sortDirection = ascending;
        } else {
          checkKey = keyIsBeforeCurrentEntry;
          sortDirection = descending;
        }
        set.sort(rangeSorter);
      };
      c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        while (checkKey(key)) {
          ++rangePos;
          if (rangePos === set.length) {
            advance(resolve);
            return false;
          }
        }
        if (keyWithinCurrentRange(key)) {
          return true;
        } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
          return false;
        } else {
          advance(function () {
            if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
          });
          return false;
        }
      });
      return c;
    };
    WhereClause.prototype.startsWithAnyOf = function () {
      var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
      if (!set.every(function (s) {
        return typeof s === 'string';
      })) {
        return fail(this, "startsWithAnyOf() only works with strings");
      }
      if (set.length === 0) return emptyCollection(this);
      return this.inAnyRange(set.map(function (str) {
        return [str, str + maxString];
      }));
    };
    return WhereClause;
  }();
  function createWhereClauseConstructor(db) {
    return makeClassConstructor(WhereClause.prototype, function WhereClause(table, index, orCollection) {
      this.db = db;
      this._ctx = {
        table: table,
        index: index === ":id" ? null : index,
        or: orCollection
      };
      var indexedDB = db._deps.indexedDB;
      if (!indexedDB) throw new exceptions.MissingAPI();
      this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);
      this._descending = function (a, b) {
        return indexedDB.cmp(b, a);
      };
      this._max = function (a, b) {
        return indexedDB.cmp(a, b) > 0 ? a : b;
      };
      this._min = function (a, b) {
        return indexedDB.cmp(a, b) < 0 ? a : b;
      };
      this._IDBKeyRange = db._deps.IDBKeyRange;
    });
  }
  function eventRejectHandler(reject) {
    return wrap(function (event) {
      preventDefault(event);
      reject(event.target.error);
      return false;
    });
  }
  function preventDefault(event) {
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  }
  var DEXIE_STORAGE_MUTATED_EVENT_NAME = 'storagemutated';
  var STORAGE_MUTATED_DOM_EVENT_NAME = 'x-storagemutated-1';
  var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
  var Transaction = function () {
    function Transaction() {}
    Transaction.prototype._lock = function () {
      assert(!PSD.global);
      ++this._reculock;
      if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
      return this;
    };
    Transaction.prototype._unlock = function () {
      assert(!PSD.global);
      if (--this._reculock === 0) {
        if (!PSD.global) PSD.lockOwnerFor = null;
        while (this._blockedFuncs.length > 0 && !this._locked()) {
          var fnAndPSD = this._blockedFuncs.shift();
          try {
            usePSD(fnAndPSD[1], fnAndPSD[0]);
          } catch (e) {}
        }
      }
      return this;
    };
    Transaction.prototype._locked = function () {
      return this._reculock && PSD.lockOwnerFor !== this;
    };
    Transaction.prototype.create = function (idbtrans) {
      var _this = this;
      if (!this.mode) return this;
      var idbdb = this.db.idbdb;
      var dbOpenError = this.db._state.dbOpenError;
      assert(!this.idbtrans);
      if (!idbtrans && !idbdb) {
        switch (dbOpenError && dbOpenError.name) {
          case "DatabaseClosedError":
            throw new exceptions.DatabaseClosed(dbOpenError);
          case "MissingAPIError":
            throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
          default:
            throw new exceptions.OpenFailed(dbOpenError);
        }
      }
      if (!this.active) throw new exceptions.TransactionInactive();
      assert(this._completion._state === null);
      idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
        durability: this.chromeTransactionDurability
      }) : idbdb.transaction(this.storeNames, this.mode, {
        durability: this.chromeTransactionDurability
      }));
      idbtrans.onerror = wrap(function (ev) {
        preventDefault(ev);
        _this._reject(idbtrans.error);
      });
      idbtrans.onabort = wrap(function (ev) {
        preventDefault(ev);
        _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
        _this.active = false;
        _this.on("abort").fire(ev);
      });
      idbtrans.oncomplete = wrap(function () {
        _this.active = false;
        _this._resolve();
        if ('mutatedParts' in idbtrans) {
          globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
        }
      });
      return this;
    };
    Transaction.prototype._promise = function (mode, fn, bWriteLock) {
      var _this = this;
      if (mode === 'readwrite' && this.mode !== 'readwrite') return rejection(new exceptions.ReadOnly("Transaction is readonly"));
      if (!this.active) return rejection(new exceptions.TransactionInactive());
      if (this._locked()) {
        return new DexiePromise(function (resolve, reject) {
          _this._blockedFuncs.push([function () {
            _this._promise(mode, fn, bWriteLock).then(resolve, reject);
          }, PSD]);
        });
      } else if (bWriteLock) {
        return newScope(function () {
          var p = new DexiePromise(function (resolve, reject) {
            _this._lock();
            var rv = fn(resolve, reject, _this);
            if (rv && rv.then) rv.then(resolve, reject);
          });
          p.finally(function () {
            return _this._unlock();
          });
          p._lib = true;
          return p;
        });
      } else {
        var p = new DexiePromise(function (resolve, reject) {
          var rv = fn(resolve, reject, _this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p._lib = true;
        return p;
      }
    };
    Transaction.prototype._root = function () {
      return this.parent ? this.parent._root() : this;
    };
    Transaction.prototype.waitFor = function (promiseLike) {
      var root = this._root();
      var promise = DexiePromise.resolve(promiseLike);
      if (root._waitingFor) {
        root._waitingFor = root._waitingFor.then(function () {
          return promise;
        });
      } else {
        root._waitingFor = promise;
        root._waitingQueue = [];
        var store = root.idbtrans.objectStore(root.storeNames[0]);
        (function spin() {
          ++root._spinCount;
          while (root._waitingQueue.length) root._waitingQueue.shift()();
          if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
        })();
      }
      var currentWaitPromise = root._waitingFor;
      return new DexiePromise(function (resolve, reject) {
        promise.then(function (res) {
          return root._waitingQueue.push(wrap(resolve.bind(null, res)));
        }, function (err) {
          return root._waitingQueue.push(wrap(reject.bind(null, err)));
        }).finally(function () {
          if (root._waitingFor === currentWaitPromise) {
            root._waitingFor = null;
          }
        });
      });
    };
    Transaction.prototype.abort = function () {
      if (this.active) {
        this.active = false;
        if (this.idbtrans) this.idbtrans.abort();
        this._reject(new exceptions.Abort());
      }
    };
    Transaction.prototype.table = function (tableName) {
      var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
      if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
      var tableSchema = this.schema[tableName];
      if (!tableSchema) {
        throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      }
      var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
      transactionBoundTable.core = this.db.core.table(tableName);
      memoizedTables[tableName] = transactionBoundTable;
      return transactionBoundTable;
    };
    return Transaction;
  }();
  function createTransactionConstructor(db) {
    return makeClassConstructor(Transaction.prototype, function Transaction(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
      var _this = this;
      this.db = db;
      this.mode = mode;
      this.storeNames = storeNames;
      this.schema = dbschema;
      this.chromeTransactionDurability = chromeTransactionDurability;
      this.idbtrans = null;
      this.on = Events(this, "complete", "error", "abort");
      this.parent = parent || null;
      this.active = true;
      this._reculock = 0;
      this._blockedFuncs = [];
      this._resolve = null;
      this._reject = null;
      this._waitingFor = null;
      this._waitingQueue = null;
      this._spinCount = 0;
      this._completion = new DexiePromise(function (resolve, reject) {
        _this._resolve = resolve;
        _this._reject = reject;
      });
      this._completion.then(function () {
        _this.active = false;
        _this.on.complete.fire();
      }, function (e) {
        var wasActive = _this.active;
        _this.active = false;
        _this.on.error.fire(e);
        _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
        return rejection(e);
      });
    });
  }
  function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
      name: name,
      keyPath: keyPath,
      unique: unique,
      multi: multi,
      auto: auto,
      compound: compound,
      src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
  }
  function nameFromKeyPath(keyPath) {
    return typeof keyPath === 'string' ? keyPath : keyPath ? '[' + [].join.call(keyPath, '+') + ']' : "";
  }
  function createTableSchema(name, primKey, indexes) {
    return {
      name: name,
      primKey: primKey,
      indexes: indexes,
      mappedClass: null,
      idxByName: arrayToObject(indexes, function (index) {
        return [index.name, index];
      })
    };
  }
  function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
  }
  var getMaxKey = function (IdbKeyRange) {
    try {
      IdbKeyRange.only([[]]);
      getMaxKey = function () {
        return [[]];
      };
      return [[]];
    } catch (e) {
      getMaxKey = function () {
        return maxString;
      };
      return maxString;
    }
  };
  function getKeyExtractor(keyPath) {
    if (keyPath == null) {
      return function () {
        return undefined;
      };
    } else if (typeof keyPath === 'string') {
      return getSinglePathKeyExtractor(keyPath);
    } else {
      return function (obj) {
        return getByKeyPath(obj, keyPath);
      };
    }
  }
  function getSinglePathKeyExtractor(keyPath) {
    var split = keyPath.split('.');
    if (split.length === 1) {
      return function (obj) {
        return obj[keyPath];
      };
    } else {
      return function (obj) {
        return getByKeyPath(obj, keyPath);
      };
    }
  }
  function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
  }
  var _id_counter = 0;
  function getKeyPathAlias(keyPath) {
    return keyPath == null ? ":id" : typeof keyPath === 'string' ? keyPath : "[" + keyPath.join('+') + "]";
  }
  function createDBCore(db, IdbKeyRange, tmpTrans) {
    function extractSchema(db, trans) {
      var tables = arrayify(db.objectStoreNames);
      return {
        schema: {
          name: db.name,
          tables: tables.map(function (table) {
            return trans.objectStore(table);
          }).map(function (store) {
            var keyPath = store.keyPath,
              autoIncrement = store.autoIncrement;
            var compound = isArray(keyPath);
            var outbound = keyPath == null;
            var indexByKeyPath = {};
            var result = {
              name: store.name,
              primaryKey: {
                name: null,
                isPrimaryKey: true,
                outbound: outbound,
                compound: compound,
                keyPath: keyPath,
                autoIncrement: autoIncrement,
                unique: true,
                extractKey: getKeyExtractor(keyPath)
              },
              indexes: arrayify(store.indexNames).map(function (indexName) {
                return store.index(indexName);
              }).map(function (index) {
                var name = index.name,
                  unique = index.unique,
                  multiEntry = index.multiEntry,
                  keyPath = index.keyPath;
                var compound = isArray(keyPath);
                var result = {
                  name: name,
                  compound: compound,
                  keyPath: keyPath,
                  unique: unique,
                  multiEntry: multiEntry,
                  extractKey: getKeyExtractor(keyPath)
                };
                indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                return result;
              }),
              getIndexByKeyPath: function (keyPath) {
                return indexByKeyPath[getKeyPathAlias(keyPath)];
              }
            };
            indexByKeyPath[":id"] = result.primaryKey;
            if (keyPath != null) {
              indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
            }
            return result;
          })
        },
        hasGetAll: tables.length > 0 && 'getAll' in trans.objectStore(tables[0]) && !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
      };
    }
    function makeIDBKeyRange(range) {
      if (range.type === 3) return null;
      if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
      var lower = range.lower,
        upper = range.upper,
        lowerOpen = range.lowerOpen,
        upperOpen = range.upperOpen;
      var idbRange = lower === undefined ? upper === undefined ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === undefined ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
      return idbRange;
    }
    function createDbCoreTable(tableSchema) {
      var tableName = tableSchema.name;
      function mutate(_a) {
        var trans = _a.trans,
          type = _a.type,
          keys = _a.keys,
          values = _a.values,
          range = _a.range;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var outbound = store.keyPath == null;
          var isAddOrPut = type === "put" || type === "add";
          if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange') throw new Error("Invalid operation type: " + type);
          var length = (keys || values || {
            length: 1
          }).length;
          if (keys && values && keys.length !== values.length) {
            throw new Error("Given keys array must have same length as given values array.");
          }
          if (length === 0) return resolve({
            numFailures: 0,
            failures: {},
            results: [],
            lastResult: undefined
          });
          var req;
          var reqs = [];
          var failures = [];
          var numFailures = 0;
          var errorHandler = function (event) {
            ++numFailures;
            preventDefault(event);
          };
          if (type === 'deleteRange') {
            if (range.type === 4) return resolve({
              numFailures: numFailures,
              failures: failures,
              results: [],
              lastResult: undefined
            });
            if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
          } else {
            var _a = isAddOrPut ? outbound ? [values, keys] : [values, null] : [keys, null],
              args1 = _a[0],
              args2 = _a[1];
            if (isAddOrPut) {
              for (var i = 0; i < length; ++i) {
                reqs.push(req = args2 && args2[i] !== undefined ? store[type](args1[i], args2[i]) : store[type](args1[i]));
                req.onerror = errorHandler;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                reqs.push(req = store[type](args1[i]));
                req.onerror = errorHandler;
              }
            }
          }
          var done = function (event) {
            var lastResult = event.target.result;
            reqs.forEach(function (req, i) {
              return req.error != null && (failures[i] = req.error);
            });
            resolve({
              numFailures: numFailures,
              failures: failures,
              results: type === "delete" ? keys : reqs.map(function (req) {
                return req.result;
              }),
              lastResult: lastResult
            });
          };
          req.onerror = function (event) {
            errorHandler(event);
            done(event);
          };
          req.onsuccess = done;
        });
      }
      function openCursor(_a) {
        var trans = _a.trans,
          values = _a.values,
          query = _a.query,
          reverse = _a.reverse,
          unique = _a.unique;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var index = query.index,
            range = query.range;
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
          var req = values || !('openKeyCursor' in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
          req.onerror = eventRejectHandler(reject);
          req.onsuccess = wrap(function (ev) {
            var cursor = req.result;
            if (!cursor) {
              resolve(null);
              return;
            }
            cursor.___id = ++_id_counter;
            cursor.done = false;
            var _cursorContinue = cursor.continue.bind(cursor);
            var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
            if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
            var _cursorAdvance = cursor.advance.bind(cursor);
            var doThrowCursorIsNotStarted = function () {
              throw new Error("Cursor not started");
            };
            var doThrowCursorIsStopped = function () {
              throw new Error("Cursor not stopped");
            };
            cursor.trans = trans;
            cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
            cursor.fail = wrap(reject);
            cursor.next = function () {
              var _this = this;
              var gotOne = 1;
              return this.start(function () {
                return gotOne-- ? _this.continue() : _this.stop();
              }).then(function () {
                return _this;
              });
            };
            cursor.start = function (callback) {
              var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                resolveIteration = wrap(resolveIteration);
                req.onerror = eventRejectHandler(rejectIteration);
                cursor.fail = rejectIteration;
                cursor.stop = function (value) {
                  cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                  resolveIteration(value);
                };
              });
              var guardedCallback = function () {
                if (req.result) {
                  try {
                    callback();
                  } catch (err) {
                    cursor.fail(err);
                  }
                } else {
                  cursor.done = true;
                  cursor.start = function () {
                    throw new Error("Cursor behind last entry");
                  };
                  cursor.stop();
                }
              };
              req.onsuccess = wrap(function (ev) {
                req.onsuccess = guardedCallback;
                guardedCallback();
              });
              cursor.continue = _cursorContinue;
              cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
              cursor.advance = _cursorAdvance;
              guardedCallback();
              return iterationPromise;
            };
            resolve(cursor);
          }, reject);
        });
      }
      function query(hasGetAll) {
        return function (request) {
          return new Promise(function (resolve, reject) {
            resolve = wrap(resolve);
            var trans = request.trans,
              values = request.values,
              limit = request.limit,
              query = request.query;
            var nonInfinitLimit = limit === Infinity ? undefined : limit;
            var index = query.index,
              range = query.range;
            var store = trans.objectStore(tableName);
            var source = index.isPrimaryKey ? store : store.index(index.name);
            var idbKeyRange = makeIDBKeyRange(range);
            if (limit === 0) return resolve({
              result: []
            });
            if (hasGetAll) {
              var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
              req.onsuccess = function (event) {
                return resolve({
                  result: event.target.result
                });
              };
              req.onerror = eventRejectHandler(reject);
            } else {
              var count_1 = 0;
              var req_1 = values || !('openKeyCursor' in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
              var result_1 = [];
              req_1.onsuccess = function (event) {
                var cursor = req_1.result;
                if (!cursor) return resolve({
                  result: result_1
                });
                result_1.push(values ? cursor.value : cursor.primaryKey);
                if (++count_1 === limit) return resolve({
                  result: result_1
                });
                cursor.continue();
              };
              req_1.onerror = eventRejectHandler(reject);
            }
          });
        };
      }
      return {
        name: tableName,
        schema: tableSchema,
        mutate: mutate,
        getMany: function (_a) {
          var trans = _a.trans,
            keys = _a.keys;
          return new Promise(function (resolve, reject) {
            resolve = wrap(resolve);
            var store = trans.objectStore(tableName);
            var length = keys.length;
            var result = new Array(length);
            var keyCount = 0;
            var callbackCount = 0;
            var req;
            var successHandler = function (event) {
              var req = event.target;
              if ((result[req._pos] = req.result) != null) ;
              if (++callbackCount === keyCount) resolve(result);
            };
            var errorHandler = eventRejectHandler(reject);
            for (var i = 0; i < length; ++i) {
              var key = keys[i];
              if (key != null) {
                req = store.get(keys[i]);
                req._pos = i;
                req.onsuccess = successHandler;
                req.onerror = errorHandler;
                ++keyCount;
              }
            }
            if (keyCount === 0) resolve(result);
          });
        },
        get: function (_a) {
          var trans = _a.trans,
            key = _a.key;
          return new Promise(function (resolve, reject) {
            resolve = wrap(resolve);
            var store = trans.objectStore(tableName);
            var req = store.get(key);
            req.onsuccess = function (event) {
              return resolve(event.target.result);
            };
            req.onerror = eventRejectHandler(reject);
          });
        },
        query: query(hasGetAll),
        openCursor: openCursor,
        count: function (_a) {
          var query = _a.query,
            trans = _a.trans;
          var index = query.index,
            range = query.range;
          return new Promise(function (resolve, reject) {
            var store = trans.objectStore(tableName);
            var source = index.isPrimaryKey ? store : store.index(index.name);
            var idbKeyRange = makeIDBKeyRange(range);
            var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
            req.onsuccess = wrap(function (ev) {
              return resolve(ev.target.result);
            });
            req.onerror = eventRejectHandler(reject);
          });
        }
      };
    }
    var _a = extractSchema(db, tmpTrans),
      schema = _a.schema,
      hasGetAll = _a.hasGetAll;
    var tables = schema.tables.map(function (tableSchema) {
      return createDbCoreTable(tableSchema);
    });
    var tableMap = {};
    tables.forEach(function (table) {
      return tableMap[table.name] = table;
    });
    return {
      stack: "dbcore",
      transaction: db.transaction.bind(db),
      table: function (name) {
        var result = tableMap[name];
        if (!result) throw new Error("Table '" + name + "' not found");
        return tableMap[name];
      },
      MIN_KEY: -Infinity,
      MAX_KEY: getMaxKey(IdbKeyRange),
      schema: schema
    };
  }
  function createMiddlewareStack(stackImpl, middlewares) {
    return middlewares.reduce(function (down, _a) {
      var create = _a.create;
      return __assign(__assign({}, down), create(down));
    }, stackImpl);
  }
  function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
    var IDBKeyRange = _a.IDBKeyRange;
    _a.indexedDB;
    var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
      dbcore: dbcore
    };
  }
  function generateMiddlewareStacks(_a, tmpTrans) {
    var db = _a._novip;
    var idbdb = tmpTrans.db;
    var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
    db.core = stacks.dbcore;
    db.tables.forEach(function (table) {
      var tableName = table.name;
      if (db.core.schema.tables.some(function (tbl) {
        return tbl.name === tableName;
      })) {
        table.core = db.core.table(tableName);
        if (db[tableName] instanceof db.Table) {
          db[tableName].core = table.core;
        }
      }
    });
  }
  function setApiOnPlace(_a, objs, tableNames, dbschema) {
    var db = _a._novip;
    tableNames.forEach(function (tableName) {
      var schema = dbschema[tableName];
      objs.forEach(function (obj) {
        var propDesc = getPropertyDescriptor(obj, tableName);
        if (!propDesc || "value" in propDesc && propDesc.value === undefined) {
          if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
            setProp(obj, tableName, {
              get: function () {
                return this.table(tableName);
              },
              set: function (value) {
                defineProperty(this, tableName, {
                  value: value,
                  writable: true,
                  configurable: true,
                  enumerable: true
                });
              }
            });
          } else {
            obj[tableName] = new db.Table(tableName, schema);
          }
        }
      });
    });
  }
  function removeTablesApi(_a, objs) {
    var db = _a._novip;
    objs.forEach(function (obj) {
      for (var key in obj) {
        if (obj[key] instanceof db.Table) delete obj[key];
      }
    });
  }
  function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
  }
  function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db._dbSchema;
    var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);
    trans.create(idbUpgradeTrans);
    trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans);
    var transless = PSD.transless || PSD;
    newScope(function () {
      PSD.trans = trans;
      PSD.transless = transless;
      if (oldVersion === 0) {
        keys(globalSchema).forEach(function (tableName) {
          createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
        });
        generateMiddlewareStacks(db, idbUpgradeTrans);
        DexiePromise.follow(function () {
          return db.on.populate.fire(trans);
        }).catch(rejectTransaction);
      } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
  }
  function updateTablesAndIndexes(_a, oldVersion, trans, idbUpgradeTrans) {
    var db = _a._novip;
    var queue = [];
    var versions = db._versions;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function (v) {
      return v._cfg.version >= oldVersion;
    });
    versToRun.forEach(function (version) {
      queue.push(function () {
        var oldSchema = globalSchema;
        var newSchema = version._cfg.dbschema;
        adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
        adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
        globalSchema = db._dbSchema = newSchema;
        var diff = getSchemaDiff(oldSchema, newSchema);
        diff.add.forEach(function (tuple) {
          createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
        });
        diff.change.forEach(function (change) {
          if (change.recreate) {
            throw new exceptions.Upgrade("Not yet support for changing primary key");
          } else {
            var store_1 = idbUpgradeTrans.objectStore(change.name);
            change.add.forEach(function (idx) {
              return addIndex(store_1, idx);
            });
            change.change.forEach(function (idx) {
              store_1.deleteIndex(idx.name);
              addIndex(store_1, idx);
            });
            change.del.forEach(function (idxName) {
              return store_1.deleteIndex(idxName);
            });
          }
        });
        var contentUpgrade = version._cfg.contentUpgrade;
        if (contentUpgrade && version._cfg.version > oldVersion) {
          generateMiddlewareStacks(db, idbUpgradeTrans);
          trans._memoizedTables = {};
          anyContentUpgraderHasRun = true;
          var upgradeSchema_1 = shallowClone(newSchema);
          diff.del.forEach(function (table) {
            upgradeSchema_1[table] = oldSchema[table];
          });
          removeTablesApi(db, [db.Transaction.prototype]);
          setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
          trans.schema = upgradeSchema_1;
          var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
          if (contentUpgradeIsAsync_1) {
            incrementExpectedAwaits();
          }
          var returnValue_1;
          var promiseFollowed = DexiePromise.follow(function () {
            returnValue_1 = contentUpgrade(trans);
            if (returnValue_1) {
              if (contentUpgradeIsAsync_1) {
                var decrementor = decrementExpectedAwaits.bind(null, null);
                returnValue_1.then(decrementor, decrementor);
              }
            }
          });
          return returnValue_1 && typeof returnValue_1.then === 'function' ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () {
            return returnValue_1;
          });
        }
      });
      queue.push(function (idbtrans) {
        if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
          var newSchema = version._cfg.dbschema;
          deleteRemovedTables(newSchema, idbtrans);
        }
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
        trans.schema = db._dbSchema;
      });
    });
    function runQueue() {
      return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
    }
    return runQueue().then(function () {
      createMissingTables(globalSchema, idbUpgradeTrans);
    });
  }
  function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
      del: [],
      add: [],
      change: []
    };
    var table;
    for (table in oldSchema) {
      if (!newSchema[table]) diff.del.push(table);
    }
    for (table in newSchema) {
      var oldDef = oldSchema[table],
        newDef = newSchema[table];
      if (!oldDef) {
        diff.add.push([table, newDef]);
      } else {
        var change = {
          name: table,
          def: newDef,
          recreate: false,
          del: [],
          add: [],
          change: []
        };
        if ('' + (oldDef.primKey.keyPath || '') !== '' + (newDef.primKey.keyPath || '') || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
          change.recreate = true;
          diff.change.push(change);
        } else {
          var oldIndexes = oldDef.idxByName;
          var newIndexes = newDef.idxByName;
          var idxName = void 0;
          for (idxName in oldIndexes) {
            if (!newIndexes[idxName]) change.del.push(idxName);
          }
          for (idxName in newIndexes) {
            var oldIdx = oldIndexes[idxName],
              newIdx = newIndexes[idxName];
            if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
          }
          if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
            diff.change.push(change);
          }
        }
      }
    }
    return diff;
  }
  function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
      keyPath: primKey.keyPath,
      autoIncrement: primKey.auto
    } : {
      autoIncrement: primKey.auto
    });
    indexes.forEach(function (idx) {
      return addIndex(store, idx);
    });
    return store;
  }
  function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function (tableName) {
      if (!idbtrans.db.objectStoreNames.contains(tableName)) {
        createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
      }
    });
  }
  function deleteRemovedTables(newSchema, idbtrans) {
    [].slice.call(idbtrans.db.objectStoreNames).forEach(function (storeName) {
      return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
    });
  }
  function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, {
      unique: idx.unique,
      multiEntry: idx.multi
    });
  }
  function buildGlobalSchema(db, idbdb, tmpTrans) {
    var globalSchema = {};
    var dbStoreNames = slice(idbdb.objectStoreNames, 0);
    dbStoreNames.forEach(function (storeName) {
      var store = tmpTrans.objectStore(storeName);
      var keyPath = store.keyPath;
      var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
      var indexes = [];
      for (var j = 0; j < store.indexNames.length; ++j) {
        var idbindex = store.index(store.indexNames[j]);
        keyPath = idbindex.keyPath;
        var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
        indexes.push(index);
      }
      globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    });
    return globalSchema;
  }
  function readGlobalSchema(_a, idbdb, tmpTrans) {
    var db = _a._novip;
    db.verno = idbdb.version / 10;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
    db._storeNames = slice(idbdb.objectStoreNames, 0);
    setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
  }
  function verifyInstalledSchema(db, tmpTrans) {
    var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
    var diff = getSchemaDiff(installedSchema, db._dbSchema);
    return !(diff.add.length || diff.change.some(function (ch) {
      return ch.add.length || ch.change.length;
    }));
  }
  function adjustToExistingIndexNames(_a, schema, idbtrans) {
    var db = _a._novip;
    var storeNames = idbtrans.db.objectStoreNames;
    for (var i = 0; i < storeNames.length; ++i) {
      var storeName = storeNames[i];
      var store = idbtrans.objectStore(storeName);
      db._hasGetAll = 'getAll' in store;
      for (var j = 0; j < store.indexNames.length; ++j) {
        var indexName = store.indexNames[j];
        var keyPath = store.index(indexName).keyPath;
        var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
        if (schema[storeName]) {
          var indexSpec = schema[storeName].idxByName[dexieName];
          if (indexSpec) {
            indexSpec.name = indexName;
            delete schema[storeName].idxByName[dexieName];
            schema[storeName].idxByName[indexName] = indexSpec;
          }
        }
      }
    }
    if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
      db._hasGetAll = false;
    }
  }
  function parseIndexSyntax(primKeyAndIndexes) {
    return primKeyAndIndexes.split(',').map(function (index, indexNum) {
      index = index.trim();
      var name = index.replace(/([&*]|\+\+)/g, "");
      var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
      return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
    });
  }
  var Version = function () {
    function Version() {}
    Version.prototype._parseStoresSpec = function (stores, outSchema) {
      keys(stores).forEach(function (tableName) {
        if (stores[tableName] !== null) {
          var indexes = parseIndexSyntax(stores[tableName]);
          var primKey = indexes.shift();
          if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
          indexes.forEach(function (idx) {
            if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
          });
          outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
        }
      });
    };
    Version.prototype.stores = function (stores) {
      var db = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
      var versions = db._versions;
      var storesSpec = {};
      var dbschema = {};
      versions.forEach(function (version) {
        extend(storesSpec, version._cfg.storesSource);
        dbschema = version._cfg.dbschema = {};
        version._parseStoresSpec(storesSpec, dbschema);
      });
      db._dbSchema = dbschema;
      removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
      setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
      db._storeNames = keys(dbschema);
      return this;
    };
    Version.prototype.upgrade = function (upgradeFunction) {
      this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
      return this;
    };
    return Version;
  }();
  function createVersionConstructor(db) {
    return makeClassConstructor(Version.prototype, function Version(versionNumber) {
      this.db = db;
      this._cfg = {
        version: versionNumber,
        storesSource: null,
        dbschema: {},
        tables: {},
        contentUpgrade: null
      };
    });
  }
  function getDbNamesTable(indexedDB, IDBKeyRange) {
    var dbNamesDB = indexedDB["_dbNamesDB"];
    if (!dbNamesDB) {
      dbNamesDB = indexedDB["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
        addons: [],
        indexedDB: indexedDB,
        IDBKeyRange: IDBKeyRange
      });
      dbNamesDB.version(1).stores({
        dbnames: "name"
      });
    }
    return dbNamesDB.table("dbnames");
  }
  function hasDatabasesNative(indexedDB) {
    return indexedDB && typeof indexedDB.databases === "function";
  }
  function getDatabaseNames(_a) {
    var indexedDB = _a.indexedDB,
      IDBKeyRange = _a.IDBKeyRange;
    return hasDatabasesNative(indexedDB) ? Promise.resolve(indexedDB.databases()).then(function (infos) {
      return infos.map(function (info) {
        return info.name;
      }).filter(function (name) {
        return name !== DBNAMES_DB;
      });
    }) : getDbNamesTable(indexedDB, IDBKeyRange).toCollection().primaryKeys();
  }
  function _onDatabaseCreated(_a, name) {
    var indexedDB = _a.indexedDB,
      IDBKeyRange = _a.IDBKeyRange;
    !hasDatabasesNative(indexedDB) && name !== DBNAMES_DB && getDbNamesTable(indexedDB, IDBKeyRange).put({
      name: name
    }).catch(nop);
  }
  function _onDatabaseDeleted(_a, name) {
    var indexedDB = _a.indexedDB,
      IDBKeyRange = _a.IDBKeyRange;
    !hasDatabasesNative(indexedDB) && name !== DBNAMES_DB && getDbNamesTable(indexedDB, IDBKeyRange).delete(name).catch(nop);
  }
  function vip(fn) {
    return newScope(function () {
      PSD.letThrough = true;
      return fn();
    });
  }
  function idbReady() {
    var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
    if (!isSafari || !indexedDB.databases) return Promise.resolve();
    var intervalId;
    return new Promise(function (resolve) {
      var tryIdb = function () {
        return indexedDB.databases().finally(resolve);
      };
      intervalId = setInterval(tryIdb, 100);
      tryIdb();
    }).finally(function () {
      return clearInterval(intervalId);
    });
  }
  function dexieOpen(db) {
    var state = db._state;
    var indexedDB = db._deps.indexedDB;
    if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(function () {
      return state.dbOpenError ? rejection(state.dbOpenError) : db;
    });
    debug && (state.openCanceller._stackHolder = getErrorWithStack());
    state.isBeingOpened = true;
    state.dbOpenError = null;
    state.openComplete = false;
    var openCanceller = state.openCanceller;
    function throwIfCancelled() {
      if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed('db.open() was cancelled');
    }
    var resolveDbReady = state.dbReadyResolve,
      upgradeTransaction = null,
      wasCreated = false;
    return DexiePromise.race([openCanceller, (typeof navigator === 'undefined' ? DexiePromise.resolve() : idbReady()).then(function () {
      return new DexiePromise(function (resolve, reject) {
        throwIfCancelled();
        if (!indexedDB) throw new exceptions.MissingAPI();
        var dbName = db.name;
        var req = state.autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
        if (!req) throw new exceptions.MissingAPI();
        req.onerror = eventRejectHandler(reject);
        req.onblocked = wrap(db._fireOnBlocked);
        req.onupgradeneeded = wrap(function (e) {
          upgradeTransaction = req.transaction;
          if (state.autoSchema && !db._options.allowEmptyDB) {
            req.onerror = preventDefault;
            upgradeTransaction.abort();
            req.result.close();
            var delreq = indexedDB.deleteDatabase(dbName);
            delreq.onsuccess = delreq.onerror = wrap(function () {
              reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
            });
          } else {
            upgradeTransaction.onerror = eventRejectHandler(reject);
            var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
            wasCreated = oldVer < 1;
            db._novip.idbdb = req.result;
            runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
          }
        }, reject);
        req.onsuccess = wrap(function () {
          upgradeTransaction = null;
          var idbdb = db._novip.idbdb = req.result;
          var objectStoreNames = slice(idbdb.objectStoreNames);
          if (objectStoreNames.length > 0) try {
            var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
            if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
              adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
              if (!verifyInstalledSchema(db, tmpTrans)) {
                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
              }
            }
            generateMiddlewareStacks(db, tmpTrans);
          } catch (e) {}
          connections.push(db);
          idbdb.onversionchange = wrap(function (ev) {
            state.vcFired = true;
            db.on("versionchange").fire(ev);
          });
          idbdb.onclose = wrap(function (ev) {
            db.on("close").fire(ev);
          });
          if (wasCreated) _onDatabaseCreated(db._deps, dbName);
          resolve();
        }, reject);
      });
    })]).then(function () {
      throwIfCancelled();
      state.onReadyBeingFired = [];
      return DexiePromise.resolve(vip(function () {
        return db.on.ready.fire(db.vip);
      })).then(function fireRemainders() {
        if (state.onReadyBeingFired.length > 0) {
          var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
          state.onReadyBeingFired = [];
          return DexiePromise.resolve(vip(function () {
            return remainders_1(db.vip);
          })).then(fireRemainders);
        }
      });
    }).finally(function () {
      state.onReadyBeingFired = null;
      state.isBeingOpened = false;
    }).then(function () {
      return db;
    }).catch(function (err) {
      state.dbOpenError = err;
      try {
        upgradeTransaction && upgradeTransaction.abort();
      } catch (_a) {}
      if (openCanceller === state.openCanceller) {
        db._close();
      }
      return rejection(err);
    }).finally(function () {
      state.openComplete = true;
      resolveDbReady();
    });
  }
  function awaitIterator(iterator) {
    var callNext = function (result) {
        return iterator.next(result);
      },
      doThrow = function (error) {
        return iterator.throw(error);
      },
      onSuccess = step(callNext),
      onError = step(doThrow);
    function step(getNext) {
      return function (val) {
        var next = getNext(val),
          value = next.value;
        return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
      };
    }
    return step(callNext)();
  }
  function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
    var args = new Array(i - 1);
    while (--i) args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [mode, tables, scopeFunc];
  }
  function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function () {
      var transless = PSD.transless || PSD;
      var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
      var zoneProps = {
        trans: trans,
        transless: transless
      };
      if (parentTransaction) {
        trans.idbtrans = parentTransaction.idbtrans;
      } else {
        try {
          trans.create();
          db._state.PR1398_maxLoop = 3;
        } catch (ex) {
          if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
            console.warn('Dexie: Need to reopen db');
            db._close();
            return db.open().then(function () {
              return enterTransactionScope(db, mode, storeNames, null, scopeFunc);
            });
          }
          return rejection(ex);
        }
      }
      var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      var returnValue;
      var promiseFollowed = DexiePromise.follow(function () {
        returnValue = scopeFunc.call(trans, trans);
        if (returnValue) {
          if (scopeFuncIsAsync) {
            var decrementor = decrementExpectedAwaits.bind(null, null);
            returnValue.then(decrementor, decrementor);
          } else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
            returnValue = awaitIterator(returnValue);
          }
        }
      }, zoneProps);
      return (returnValue && typeof returnValue.then === 'function' ? DexiePromise.resolve(returnValue).then(function (x) {
        return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
      }) : promiseFollowed.then(function () {
        return returnValue;
      })).then(function (x) {
        if (parentTransaction) trans._resolve();
        return trans._completion.then(function () {
          return x;
        });
      }).catch(function (e) {
        trans._reject(e);
        return rejection(e);
      });
    });
  }
  function pad(a, value, count) {
    var result = isArray(a) ? a.slice() : [a];
    for (var i = 0; i < count; ++i) result.push(value);
    return result;
  }
  function createVirtualIndexMiddleware(down) {
    return __assign(__assign({}, down), {
      table: function (tableName) {
        var table = down.table(tableName);
        var schema = table.schema;
        var indexLookup = {};
        var allVirtualIndexes = [];
        function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
          var keyPathAlias = getKeyPathAlias(keyPath);
          var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
          var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
          var isVirtual = keyTail > 0;
          var virtualIndex = __assign(__assign({}, lowLevelIndex), {
            isVirtual: isVirtual,
            keyTail: keyTail,
            keyLength: keyLength,
            extractKey: getKeyExtractor(keyPath),
            unique: !isVirtual && lowLevelIndex.unique
          });
          indexList.push(virtualIndex);
          if (!virtualIndex.isPrimaryKey) {
            allVirtualIndexes.push(virtualIndex);
          }
          if (keyLength > 1) {
            var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
            addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
          }
          indexList.sort(function (a, b) {
            return a.keyTail - b.keyTail;
          });
          return virtualIndex;
        }
        var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
        indexLookup[":id"] = [primaryKey];
        for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
          var index = _a[_i];
          addVirtualIndexes(index.keyPath, 0, index);
        }
        function findBestIndex(keyPath) {
          var result = indexLookup[getKeyPathAlias(keyPath)];
          return result && result[0];
        }
        function translateRange(range, keyTail) {
          return {
            type: range.type === 1 ? 2 : range.type,
            lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
            lowerOpen: true,
            upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
            upperOpen: true
          };
        }
        function translateRequest(req) {
          var index = req.query.index;
          return index.isVirtual ? __assign(__assign({}, req), {
            query: {
              index: index,
              range: translateRange(req.query.range, index.keyTail)
            }
          }) : req;
        }
        var result = __assign(__assign({}, table), {
          schema: __assign(__assign({}, schema), {
            primaryKey: primaryKey,
            indexes: allVirtualIndexes,
            getIndexByKeyPath: findBestIndex
          }),
          count: function (req) {
            return table.count(translateRequest(req));
          },
          query: function (req) {
            return table.query(translateRequest(req));
          },
          openCursor: function (req) {
            var _a = req.query.index,
              keyTail = _a.keyTail,
              isVirtual = _a.isVirtual,
              keyLength = _a.keyLength;
            if (!isVirtual) return table.openCursor(req);
            function createVirtualCursor(cursor) {
              function _continue(key) {
                key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
              }
              var virtualCursor = Object.create(cursor, {
                continue: {
                  value: _continue
                },
                continuePrimaryKey: {
                  value: function (key, primaryKey) {
                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                  }
                },
                primaryKey: {
                  get: function () {
                    return cursor.primaryKey;
                  }
                },
                key: {
                  get: function () {
                    var key = cursor.key;
                    return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                  }
                },
                value: {
                  get: function () {
                    return cursor.value;
                  }
                }
              });
              return virtualCursor;
            }
            return table.openCursor(translateRequest(req)).then(function (cursor) {
              return cursor && createVirtualCursor(cursor);
            });
          }
        });
        return result;
      }
    });
  }
  var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: createVirtualIndexMiddleware
  };
  function getObjectDiff(a, b, rv, prfx) {
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
      if (!hasOwn(b, prop)) {
        rv[prfx + prop] = undefined;
      } else {
        var ap = a[prop],
          bp = b[prop];
        if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
          var apTypeName = toStringTag(ap);
          var bpTypeName = toStringTag(bp);
          if (apTypeName !== bpTypeName) {
            rv[prfx + prop] = b[prop];
          } else if (apTypeName === 'Object') {
            getObjectDiff(ap, bp, rv, prfx + prop + '.');
          } else if (ap !== bp) {
            rv[prfx + prop] = b[prop];
          }
        } else if (ap !== bp) rv[prfx + prop] = b[prop];
      }
    });
    keys(b).forEach(function (prop) {
      if (!hasOwn(a, prop)) {
        rv[prfx + prop] = b[prop];
      }
    });
    return rv;
  }
  function getEffectiveKeys(primaryKey, req) {
    if (req.type === 'delete') return req.keys;
    return req.keys || req.values.map(primaryKey.extractKey);
  }
  var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function (downCore) {
      return __assign(__assign({}, downCore), {
        table: function (tableName) {
          var downTable = downCore.table(tableName);
          var primaryKey = downTable.schema.primaryKey;
          var tableMiddleware = __assign(__assign({}, downTable), {
            mutate: function (req) {
              var dxTrans = PSD.trans;
              var _a = dxTrans.table(tableName).hook,
                deleting = _a.deleting,
                creating = _a.creating,
                updating = _a.updating;
              switch (req.type) {
                case 'add':
                  if (creating.fire === nop) break;
                  return dxTrans._promise('readwrite', function () {
                    return addPutOrDelete(req);
                  }, true);
                case 'put':
                  if (creating.fire === nop && updating.fire === nop) break;
                  return dxTrans._promise('readwrite', function () {
                    return addPutOrDelete(req);
                  }, true);
                case 'delete':
                  if (deleting.fire === nop) break;
                  return dxTrans._promise('readwrite', function () {
                    return addPutOrDelete(req);
                  }, true);
                case 'deleteRange':
                  if (deleting.fire === nop) break;
                  return dxTrans._promise('readwrite', function () {
                    return deleteRange(req);
                  }, true);
              }
              return downTable.mutate(req);
              function addPutOrDelete(req) {
                var dxTrans = PSD.trans;
                var keys = req.keys || getEffectiveKeys(primaryKey, req);
                if (!keys) throw new Error("Keys missing");
                req = req.type === 'add' || req.type === 'put' ? __assign(__assign({}, req), {
                  keys: keys
                }) : __assign({}, req);
                if (req.type !== 'delete') req.values = __spreadArray([], req.values, true);
                if (req.keys) req.keys = __spreadArray([], req.keys, true);
                return getExistingValues(downTable, req, keys).then(function (existingValues) {
                  var contexts = keys.map(function (key, i) {
                    var existingValue = existingValues[i];
                    var ctx = {
                      onerror: null,
                      onsuccess: null
                    };
                    if (req.type === 'delete') {
                      deleting.fire.call(ctx, key, existingValue, dxTrans);
                    } else if (req.type === 'add' || existingValue === undefined) {
                      var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                      if (key == null && generatedPrimaryKey != null) {
                        key = generatedPrimaryKey;
                        req.keys[i] = key;
                        if (!primaryKey.outbound) {
                          setByKeyPath(req.values[i], primaryKey.keyPath, key);
                        }
                      }
                    } else {
                      var objectDiff = getObjectDiff(existingValue, req.values[i]);
                      var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                      if (additionalChanges_1) {
                        var requestedValue_1 = req.values[i];
                        Object.keys(additionalChanges_1).forEach(function (keyPath) {
                          if (hasOwn(requestedValue_1, keyPath)) {
                            requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                          } else {
                            setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                          }
                        });
                      }
                    }
                    return ctx;
                  });
                  return downTable.mutate(req).then(function (_a) {
                    var failures = _a.failures,
                      results = _a.results,
                      numFailures = _a.numFailures,
                      lastResult = _a.lastResult;
                    for (var i = 0; i < keys.length; ++i) {
                      var primKey = results ? results[i] : keys[i];
                      var ctx = contexts[i];
                      if (primKey == null) {
                        ctx.onerror && ctx.onerror(failures[i]);
                      } else {
                        ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ? req.values[i] : primKey);
                      }
                    }
                    return {
                      failures: failures,
                      results: results,
                      numFailures: numFailures,
                      lastResult: lastResult
                    };
                  }).catch(function (error) {
                    contexts.forEach(function (ctx) {
                      return ctx.onerror && ctx.onerror(error);
                    });
                    return Promise.reject(error);
                  });
                });
              }
              function deleteRange(req) {
                return deleteNextChunk(req.trans, req.range, 10000);
              }
              function deleteNextChunk(trans, range, limit) {
                return downTable.query({
                  trans: trans,
                  values: false,
                  query: {
                    index: primaryKey,
                    range: range
                  },
                  limit: limit
                }).then(function (_a) {
                  var result = _a.result;
                  return addPutOrDelete({
                    type: 'delete',
                    keys: result,
                    trans: trans
                  }).then(function (res) {
                    if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                    if (result.length < limit) {
                      return {
                        failures: [],
                        numFailures: 0,
                        lastResult: undefined
                      };
                    } else {
                      return deleteNextChunk(trans, __assign(__assign({}, range), {
                        lower: result[result.length - 1],
                        lowerOpen: true
                      }), limit);
                    }
                  });
                });
              }
            }
          });
          return tableMiddleware;
        }
      });
    }
  };
  function getExistingValues(table, req, effectiveKeys) {
    return req.type === "add" ? Promise.resolve([]) : table.getMany({
      trans: req.trans,
      keys: effectiveKeys,
      cache: "immutable"
    });
  }
  function getFromTransactionCache(keys, cache, clone) {
    try {
      if (!cache) return null;
      if (cache.keys.length < keys.length) return null;
      var result = [];
      for (var i = 0, j = 0; i < cache.keys.length && j < keys.length; ++i) {
        if (cmp(cache.keys[i], keys[j]) !== 0) continue;
        result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
        ++j;
      }
      return result.length === keys.length ? result : null;
    } catch (_a) {
      return null;
    }
  }
  var cacheExistingValuesMiddleware = {
    stack: "dbcore",
    level: -1,
    create: function (core) {
      return {
        table: function (tableName) {
          var table = core.table(tableName);
          return __assign(__assign({}, table), {
            getMany: function (req) {
              if (!req.cache) {
                return table.getMany(req);
              }
              var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
              if (cachedResult) {
                return DexiePromise.resolve(cachedResult);
              }
              return table.getMany(req).then(function (res) {
                req.trans["_cache"] = {
                  keys: req.keys,
                  values: req.cache === "clone" ? deepClone(res) : res
                };
                return res;
              });
            },
            mutate: function (req) {
              if (req.type !== "add") req.trans["_cache"] = null;
              return table.mutate(req);
            }
          });
        }
      };
    }
  };
  var _a;
  function isEmptyRange(node) {
    return !("from" in node);
  }
  var RangeSet = function (fromOrTree, to) {
    if (this) {
      extend(this, arguments.length ? {
        d: 1,
        from: fromOrTree,
        to: arguments.length > 1 ? to : fromOrTree
      } : {
        d: 0
      });
    } else {
      var rv = new RangeSet();
      if (fromOrTree && "d" in fromOrTree) {
        extend(rv, fromOrTree);
      }
      return rv;
    }
  };
  props(RangeSet.prototype, (_a = {
    add: function (rangeSet) {
      mergeRanges(this, rangeSet);
      return this;
    },
    addKey: function (key) {
      addRange(this, key, key);
      return this;
    },
    addKeys: function (keys) {
      var _this = this;
      keys.forEach(function (key) {
        return addRange(_this, key, key);
      });
      return this;
    }
  }, _a[iteratorSymbol] = function () {
    return getRangeSetIterator(this);
  }, _a));
  function addRange(target, from, to) {
    var diff = cmp(from, to);
    if (isNaN(diff)) return;
    if (diff > 0) throw RangeError();
    if (isEmptyRange(target)) return extend(target, {
      from: from,
      to: to,
      d: 1
    });
    var left = target.l;
    var right = target.r;
    if (cmp(to, target.from) < 0) {
      left ? addRange(left, from, to) : target.l = {
        from: from,
        to: to,
        d: 1,
        l: null,
        r: null
      };
      return rebalance(target);
    }
    if (cmp(from, target.to) > 0) {
      right ? addRange(right, from, to) : target.r = {
        from: from,
        to: to,
        d: 1,
        l: null,
        r: null
      };
      return rebalance(target);
    }
    if (cmp(from, target.from) < 0) {
      target.from = from;
      target.l = null;
      target.d = right ? right.d + 1 : 1;
    }
    if (cmp(to, target.to) > 0) {
      target.to = to;
      target.r = null;
      target.d = target.l ? target.l.d + 1 : 1;
    }
    var rightWasCutOff = !target.r;
    if (left && !target.l) {
      mergeRanges(target, left);
    }
    if (right && rightWasCutOff) {
      mergeRanges(target, right);
    }
  }
  function mergeRanges(target, newSet) {
    function _addRangeSet(target, _a) {
      var from = _a.from,
        to = _a.to,
        l = _a.l,
        r = _a.r;
      addRange(target, from, to);
      if (l) _addRangeSet(target, l);
      if (r) _addRangeSet(target, r);
    }
    if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
  }
  function rangesOverlap(rangeSet1, rangeSet2) {
    var i1 = getRangeSetIterator(rangeSet2);
    var nextResult1 = i1.next();
    if (nextResult1.done) return false;
    var a = nextResult1.value;
    var i2 = getRangeSetIterator(rangeSet1);
    var nextResult2 = i2.next(a.from);
    var b = nextResult2.value;
    while (!nextResult1.done && !nextResult2.done) {
      if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
      cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
    }
    return false;
  }
  function getRangeSetIterator(node) {
    var state = isEmptyRange(node) ? null : {
      s: 0,
      n: node
    };
    return {
      next: function (key) {
        var keyProvided = arguments.length > 0;
        while (state) {
          switch (state.s) {
            case 0:
              state.s = 1;
              if (keyProvided) {
                while (state.n.l && cmp(key, state.n.from) < 0) state = {
                  up: state,
                  n: state.n.l,
                  s: 1
                };
              } else {
                while (state.n.l) state = {
                  up: state,
                  n: state.n.l,
                  s: 1
                };
              }
            case 1:
              state.s = 2;
              if (!keyProvided || cmp(key, state.n.to) <= 0) return {
                value: state.n,
                done: false
              };
            case 2:
              if (state.n.r) {
                state.s = 3;
                state = {
                  up: state,
                  n: state.n.r,
                  s: 0
                };
                continue;
              }
            case 3:
              state = state.up;
          }
        }
        return {
          done: true
        };
      }
    };
  }
  function rebalance(target) {
    var _a, _b;
    var diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
    var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
    if (r) {
      var l = r === "r" ? "l" : "r";
      var rootClone = __assign({}, target);
      var oldRootRight = target[r];
      target.from = oldRootRight.from;
      target.to = oldRootRight.to;
      target[r] = oldRootRight[r];
      rootClone[r] = oldRootRight[l];
      target[l] = rootClone;
      rootClone.d = computeDepth(rootClone);
    }
    target.d = computeDepth(target);
  }
  function computeDepth(_a) {
    var r = _a.r,
      l = _a.l;
    return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
  }
  var observabilityMiddleware = {
    stack: "dbcore",
    level: 0,
    create: function (core) {
      var dbName = core.schema.name;
      var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
      return __assign(__assign({}, core), {
        table: function (tableName) {
          var table = core.table(tableName);
          var schema = table.schema;
          var primaryKey = schema.primaryKey;
          var extractKey = primaryKey.extractKey,
            outbound = primaryKey.outbound;
          var tableClone = __assign(__assign({}, table), {
            mutate: function (req) {
              var trans = req.trans;
              var mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
              var getRangeSet = function (indexName) {
                var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
              };
              var pkRangeSet = getRangeSet("");
              var delsRangeSet = getRangeSet(":dels");
              var type = req.type;
              var _a = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [],
                keys = _a[0],
                newObjs = _a[1];
              var oldCache = req.trans["_cache"];
              return table.mutate(req).then(function (res) {
                if (isArray(keys)) {
                  if (type !== "delete") keys = res.results;
                  pkRangeSet.addKeys(keys);
                  var oldObjs = getFromTransactionCache(keys, oldCache);
                  if (!oldObjs && type !== "add") {
                    delsRangeSet.addKeys(keys);
                  }
                  if (oldObjs || newObjs) {
                    trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                  }
                } else if (keys) {
                  var range = {
                    from: keys.lower,
                    to: keys.upper
                  };
                  delsRangeSet.add(range);
                  pkRangeSet.add(range);
                } else {
                  pkRangeSet.add(FULL_RANGE);
                  delsRangeSet.add(FULL_RANGE);
                  schema.indexes.forEach(function (idx) {
                    return getRangeSet(idx.name).add(FULL_RANGE);
                  });
                }
                return res;
              });
            }
          });
          var getRange = function (_a) {
            var _b, _c;
            var _d = _a.query,
              index = _d.index,
              range = _d.range;
            return [index, new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)];
          };
          var readSubscribers = {
            get: function (req) {
              return [primaryKey, new RangeSet(req.key)];
            },
            getMany: function (req) {
              return [primaryKey, new RangeSet().addKeys(req.keys)];
            },
            count: getRange,
            query: getRange,
            openCursor: getRange
          };
          keys(readSubscribers).forEach(function (method) {
            tableClone[method] = function (req) {
              var subscr = PSD.subscr;
              if (subscr) {
                var getRangeSet = function (indexName) {
                  var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                  return subscr[part] || (subscr[part] = new RangeSet());
                };
                var pkRangeSet_1 = getRangeSet("");
                var delsRangeSet_1 = getRangeSet(":dels");
                var _a = readSubscribers[method](req),
                  queriedIndex = _a[0],
                  queriedRanges = _a[1];
                getRangeSet(queriedIndex.name || "").add(queriedRanges);
                if (!queriedIndex.isPrimaryKey) {
                  if (method === "count") {
                    delsRangeSet_1.add(FULL_RANGE);
                  } else {
                    var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), {
                      values: false
                    }));
                    return table[method].apply(this, arguments).then(function (res) {
                      if (method === "query") {
                        if (outbound && req.values) {
                          return keysPromise_1.then(function (_a) {
                            var resultingKeys = _a.result;
                            pkRangeSet_1.addKeys(resultingKeys);
                            return res;
                          });
                        }
                        var pKeys = req.values ? res.result.map(extractKey) : res.result;
                        if (req.values) {
                          pkRangeSet_1.addKeys(pKeys);
                        } else {
                          delsRangeSet_1.addKeys(pKeys);
                        }
                      } else if (method === "openCursor") {
                        var cursor_1 = res;
                        var wantValues_1 = req.values;
                        return cursor_1 && Object.create(cursor_1, {
                          key: {
                            get: function () {
                              delsRangeSet_1.addKey(cursor_1.primaryKey);
                              return cursor_1.key;
                            }
                          },
                          primaryKey: {
                            get: function () {
                              var pkey = cursor_1.primaryKey;
                              delsRangeSet_1.addKey(pkey);
                              return pkey;
                            }
                          },
                          value: {
                            get: function () {
                              wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                              return cursor_1.value;
                            }
                          }
                        });
                      }
                      return res;
                    });
                  }
                }
              }
              return table[method].apply(this, arguments);
            };
          });
          return tableClone;
        }
      });
    }
  };
  function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
    function addAffectedIndex(ix) {
      var rangeSet = getRangeSet(ix.name || "");
      function extractKey(obj) {
        return obj != null ? ix.extractKey(obj) : null;
      }
      var addKeyOrKeys = function (key) {
        return ix.multiEntry && isArray(key) ? key.forEach(function (key) {
          return rangeSet.addKey(key);
        }) : rangeSet.addKey(key);
      };
      (oldObjs || newObjs).forEach(function (_, i) {
        var oldKey = oldObjs && extractKey(oldObjs[i]);
        var newKey = newObjs && extractKey(newObjs[i]);
        if (cmp(oldKey, newKey) !== 0) {
          if (oldKey != null) addKeyOrKeys(oldKey);
          if (newKey != null) addKeyOrKeys(newKey);
        }
      });
    }
    schema.indexes.forEach(addAffectedIndex);
  }
  var Dexie$1 = function () {
    function Dexie(name, options) {
      var _this = this;
      this._middlewares = {};
      this.verno = 0;
      var deps = Dexie.dependencies;
      this._options = options = __assign({
        addons: Dexie.addons,
        autoOpen: true,
        indexedDB: deps.indexedDB,
        IDBKeyRange: deps.IDBKeyRange
      }, options);
      this._deps = {
        indexedDB: options.indexedDB,
        IDBKeyRange: options.IDBKeyRange
      };
      var addons = options.addons;
      this._dbSchema = {};
      this._versions = [];
      this._storeNames = [];
      this._allTables = {};
      this.idbdb = null;
      this._novip = this;
      var state = {
        dbOpenError: null,
        isBeingOpened: false,
        onReadyBeingFired: null,
        openComplete: false,
        dbReadyResolve: nop,
        dbReadyPromise: null,
        cancelOpen: nop,
        openCanceller: null,
        autoSchema: true,
        PR1398_maxLoop: 3
      };
      state.dbReadyPromise = new DexiePromise(function (resolve) {
        state.dbReadyResolve = resolve;
      });
      state.openCanceller = new DexiePromise(function (_, reject) {
        state.cancelOpen = reject;
      });
      this._state = state;
      this.name = name;
      this.on = Events(this, "populate", "blocked", "versionchange", "close", {
        ready: [promisableChain, nop]
      });
      this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
        return function (subscriber, bSticky) {
          Dexie.vip(function () {
            var state = _this._state;
            if (state.openComplete) {
              if (!state.dbOpenError) DexiePromise.resolve().then(subscriber);
              if (bSticky) subscribe(subscriber);
            } else if (state.onReadyBeingFired) {
              state.onReadyBeingFired.push(subscriber);
              if (bSticky) subscribe(subscriber);
            } else {
              subscribe(subscriber);
              var db_1 = _this;
              if (!bSticky) subscribe(function unsubscribe() {
                db_1.on.ready.unsubscribe(subscriber);
                db_1.on.ready.unsubscribe(unsubscribe);
              });
            }
          });
        };
      });
      this.Collection = createCollectionConstructor(this);
      this.Table = createTableConstructor(this);
      this.Transaction = createTransactionConstructor(this);
      this.Version = createVersionConstructor(this);
      this.WhereClause = createWhereClauseConstructor(this);
      this.on("versionchange", function (ev) {
        if (ev.newVersion > 0) console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");else console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
        _this.close();
      });
      this.on("blocked", function (ev) {
        if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn("Dexie.delete('" + _this.name + "') was blocked");else console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
      });
      this._maxKey = getMaxKey(options.IDBKeyRange);
      this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
        return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
      };
      this._fireOnBlocked = function (ev) {
        _this.on("blocked").fire(ev);
        connections.filter(function (c) {
          return c.name === _this.name && c !== _this && !c._state.vcFired;
        }).map(function (c) {
          return c.on("versionchange").fire(ev);
        });
      };
      this.use(virtualIndexMiddleware);
      this.use(hooksMiddleware);
      this.use(observabilityMiddleware);
      this.use(cacheExistingValuesMiddleware);
      this.vip = Object.create(this, {
        _vip: {
          value: true
        }
      });
      addons.forEach(function (addon) {
        return addon(_this);
      });
    }
    Dexie.prototype.version = function (versionNumber) {
      if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type("Given version is not a positive number");
      versionNumber = Math.round(versionNumber * 10) / 10;
      if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, versionNumber);
      var versions = this._versions;
      var versionInstance = versions.filter(function (v) {
        return v._cfg.version === versionNumber;
      })[0];
      if (versionInstance) return versionInstance;
      versionInstance = new this.Version(versionNumber);
      versions.push(versionInstance);
      versions.sort(lowerVersionFirst);
      versionInstance.stores({});
      this._state.autoSchema = false;
      return versionInstance;
    };
    Dexie.prototype._whenReady = function (fn) {
      var _this = this;
      return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function (resolve, reject) {
        if (_this._state.openComplete) {
          return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
        }
        if (!_this._state.isBeingOpened) {
          if (!_this._options.autoOpen) {
            reject(new exceptions.DatabaseClosed());
            return;
          }
          _this.open().catch(nop);
        }
        _this._state.dbReadyPromise.then(resolve, reject);
      }).then(fn);
    };
    Dexie.prototype.use = function (_a) {
      var stack = _a.stack,
        create = _a.create,
        level = _a.level,
        name = _a.name;
      if (name) this.unuse({
        stack: stack,
        name: name
      });
      var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
      middlewares.push({
        stack: stack,
        create: create,
        level: level == null ? 10 : level,
        name: name
      });
      middlewares.sort(function (a, b) {
        return a.level - b.level;
      });
      return this;
    };
    Dexie.prototype.unuse = function (_a) {
      var stack = _a.stack,
        name = _a.name,
        create = _a.create;
      if (stack && this._middlewares[stack]) {
        this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
          return create ? mw.create !== create : name ? mw.name !== name : false;
        });
      }
      return this;
    };
    Dexie.prototype.open = function () {
      return dexieOpen(this);
    };
    Dexie.prototype._close = function () {
      var state = this._state;
      var idx = connections.indexOf(this);
      if (idx >= 0) connections.splice(idx, 1);
      if (this.idbdb) {
        try {
          this.idbdb.close();
        } catch (e) {}
        this._novip.idbdb = null;
      }
      state.dbReadyPromise = new DexiePromise(function (resolve) {
        state.dbReadyResolve = resolve;
      });
      state.openCanceller = new DexiePromise(function (_, reject) {
        state.cancelOpen = reject;
      });
    };
    Dexie.prototype.close = function () {
      this._close();
      var state = this._state;
      this._options.autoOpen = false;
      state.dbOpenError = new exceptions.DatabaseClosed();
      if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
    };
    Dexie.prototype.delete = function () {
      var _this = this;
      var hasArguments = arguments.length > 0;
      var state = this._state;
      return new DexiePromise(function (resolve, reject) {
        var doDelete = function () {
          _this.close();
          var req = _this._deps.indexedDB.deleteDatabase(_this.name);
          req.onsuccess = wrap(function () {
            _onDatabaseDeleted(_this._deps, _this.name);
            resolve();
          });
          req.onerror = eventRejectHandler(reject);
          req.onblocked = _this._fireOnBlocked;
        };
        if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
        if (state.isBeingOpened) {
          state.dbReadyPromise.then(doDelete);
        } else {
          doDelete();
        }
      });
    };
    Dexie.prototype.backendDB = function () {
      return this.idbdb;
    };
    Dexie.prototype.isOpen = function () {
      return this.idbdb !== null;
    };
    Dexie.prototype.hasBeenClosed = function () {
      var dbOpenError = this._state.dbOpenError;
      return dbOpenError && dbOpenError.name === 'DatabaseClosed';
    };
    Dexie.prototype.hasFailed = function () {
      return this._state.dbOpenError !== null;
    };
    Dexie.prototype.dynamicallyOpened = function () {
      return this._state.autoSchema;
    };
    Object.defineProperty(Dexie.prototype, "tables", {
      get: function () {
        var _this = this;
        return keys(this._allTables).map(function (name) {
          return _this._allTables[name];
        });
      },
      enumerable: false,
      configurable: true
    });
    Dexie.prototype.transaction = function () {
      var args = extractTransactionArgs.apply(this, arguments);
      return this._transaction.apply(this, args);
    };
    Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
      var _this = this;
      var parentTransaction = PSD.trans;
      if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1) parentTransaction = null;
      var onlyIfCompatible = mode.indexOf('?') !== -1;
      mode = mode.replace('!', '').replace('?', '');
      var idbMode, storeNames;
      try {
        storeNames = tables.map(function (table) {
          var storeName = table instanceof _this.Table ? table.name : table;
          if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return storeName;
        });
        if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
        if (parentTransaction) {
          if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
            if (onlyIfCompatible) {
              parentTransaction = null;
            } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
          }
          if (parentTransaction) {
            storeNames.forEach(function (storeName) {
              if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                if (onlyIfCompatible) {
                  parentTransaction = null;
                } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
              }
            });
          }
          if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
            parentTransaction = null;
          }
        }
      } catch (e) {
        return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
          reject(e);
        }) : rejection(e);
      }
      var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
      return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function () {
        return _this._whenReady(enterTransaction);
      }) : this._whenReady(enterTransaction);
    };
    Dexie.prototype.table = function (tableName) {
      if (!hasOwn(this._allTables, tableName)) {
        throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
      }
      return this._allTables[tableName];
    };
    return Dexie;
  }();
  var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
  var Observable = function () {
    function Observable(subscribe) {
      this._subscribe = subscribe;
    }
    Observable.prototype.subscribe = function (x, error, complete) {
      return this._subscribe(!x || typeof x === "function" ? {
        next: x,
        error: error,
        complete: complete
      } : x);
    };
    Observable.prototype[symbolObservable] = function () {
      return this;
    };
    return Observable;
  }();
  function extendObservabilitySet(target, newSet) {
    keys(newSet).forEach(function (part) {
      var rangeSet = target[part] || (target[part] = new RangeSet());
      mergeRanges(rangeSet, newSet[part]);
    });
    return target;
  }
  function liveQuery(querier) {
    var hasValue = false;
    var currentValue = undefined;
    var observable = new Observable(function (observer) {
      var scopeFuncIsAsync = isAsyncFunction(querier);
      function execute(subscr) {
        if (scopeFuncIsAsync) {
          incrementExpectedAwaits();
        }
        var exec = function () {
          return newScope(querier, {
            subscr: subscr,
            trans: null
          });
        };
        var rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
        if (scopeFuncIsAsync) {
          rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
        }
        return rv;
      }
      var closed = false;
      var accumMuts = {};
      var currentObs = {};
      var subscription = {
        get closed() {
          return closed;
        },
        unsubscribe: function () {
          closed = true;
          globalEvents.storagemutated.unsubscribe(mutationListener);
        }
      };
      observer.start && observer.start(subscription);
      var querying = false,
        startedListening = false;
      function shouldNotify() {
        return keys(currentObs).some(function (key) {
          return accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]);
        });
      }
      var mutationListener = function (parts) {
        extendObservabilitySet(accumMuts, parts);
        if (shouldNotify()) {
          doQuery();
        }
      };
      var doQuery = function () {
        if (querying || closed) return;
        accumMuts = {};
        var subscr = {};
        var ret = execute(subscr);
        if (!startedListening) {
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
          startedListening = true;
        }
        querying = true;
        Promise.resolve(ret).then(function (result) {
          hasValue = true;
          currentValue = result;
          querying = false;
          if (closed) return;
          if (shouldNotify()) {
            doQuery();
          } else {
            accumMuts = {};
            currentObs = subscr;
            observer.next && observer.next(result);
          }
        }, function (err) {
          querying = false;
          hasValue = false;
          observer.error && observer.error(err);
          subscription.unsubscribe();
        });
      };
      doQuery();
      return subscription;
    });
    observable.hasValue = function () {
      return hasValue;
    };
    observable.getValue = function () {
      return currentValue;
    };
    return observable;
  }
  var domDeps;
  try {
    domDeps = {
      indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
      IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
    };
  } catch (e) {
    domDeps = {
      indexedDB: null,
      IDBKeyRange: null
    };
  }
  var Dexie = Dexie$1;
  props(Dexie, __assign(__assign({}, fullNameExceptions), {
    delete: function (databaseName) {
      var db = new Dexie(databaseName, {
        addons: []
      });
      return db.delete();
    },
    exists: function (name) {
      return new Dexie(name, {
        addons: []
      }).open().then(function (db) {
        db.close();
        return true;
      }).catch('NoSuchDatabaseError', function () {
        return false;
      });
    },
    getDatabaseNames: function (cb) {
      try {
        return getDatabaseNames(Dexie.dependencies).then(cb);
      } catch (_a) {
        return rejection(new exceptions.MissingAPI());
      }
    },
    defineClass: function () {
      function Class(content) {
        extend(this, content);
      }
      return Class;
    },
    ignoreTransaction: function (scopeFunc) {
      return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
    },
    vip: vip,
    async: function (generatorFn) {
      return function () {
        try {
          var rv = awaitIterator(generatorFn.apply(this, arguments));
          if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
          return rv;
        } catch (e) {
          return rejection(e);
        }
      };
    },
    spawn: function (generatorFn, args, thiz) {
      try {
        var rv = awaitIterator(generatorFn.apply(thiz, args || []));
        if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    },
    currentTransaction: {
      get: function () {
        return PSD.trans || null;
      }
    },
    waitFor: function (promiseOrFunction, optionalTimeout) {
      var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 60000);
      return PSD.trans ? PSD.trans.waitFor(promise) : promise;
    },
    Promise: DexiePromise,
    debug: {
      get: function () {
        return debug;
      },
      set: function (value) {
        setDebug(value, value === 'dexie' ? function () {
          return true;
        } : dexieStackFrameFilter);
      }
    },
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    Events: Events,
    on: globalEvents,
    liveQuery: liveQuery,
    extendObservabilitySet: extendObservabilitySet,
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    cmp: cmp,
    asap: asap$1,
    minKey: minKey,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: domDeps,
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split('.').map(function (n) {
      return parseInt(n);
    }).reduce(function (p, c, i) {
      return p + c / Math.pow(10, i * 2);
    })
  }));
  Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
  if (typeof dispatchEvent !== 'undefined' && typeof addEventListener !== 'undefined') {
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (updatedParts) {
      if (!propagatingLocally) {
        var event_1;
        if (isIEOrEdge) {
          event_1 = document.createEvent('CustomEvent');
          event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
        } else {
          event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
            detail: updatedParts
          });
        }
        propagatingLocally = true;
        dispatchEvent(event_1);
        propagatingLocally = false;
      }
    });
    addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function (_a) {
      var detail = _a.detail;
      if (!propagatingLocally) {
        propagateLocally(detail);
      }
    });
  }
  function propagateLocally(updateParts) {
    var wasMe = propagatingLocally;
    try {
      propagatingLocally = true;
      globalEvents.storagemutated.fire(updateParts);
    } finally {
      propagatingLocally = wasMe;
    }
  }
  var propagatingLocally = false;
  if (typeof BroadcastChannel !== 'undefined') {
    var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
    if (typeof bc_1.unref === 'function') {
      bc_1.unref();
    }
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
      if (!propagatingLocally) {
        bc_1.postMessage(changedParts);
      }
    });
    bc_1.onmessage = function (ev) {
      if (ev.data) propagateLocally(ev.data);
    };
  } else if (typeof self !== 'undefined' && typeof navigator !== 'undefined') {
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function (changedParts) {
      try {
        if (!propagatingLocally) {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
              trig: Math.random(),
              changedParts: changedParts
            }));
          }
          if (typeof self['clients'] === 'object') {
            __spreadArray([], self['clients'].matchAll({
              includeUncontrolled: true
            }), true).forEach(function (client) {
              return client.postMessage({
                type: STORAGE_MUTATED_DOM_EVENT_NAME,
                changedParts: changedParts
              });
            });
          }
        }
      } catch (_a) {}
    });
    if (typeof addEventListener !== 'undefined') {
      addEventListener('storage', function (ev) {
        if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
          var data = JSON.parse(ev.newValue);
          if (data) propagateLocally(data.changedParts);
        }
      });
    }
    var swContainer = self.document && navigator.serviceWorker;
    if (swContainer) {
      swContainer.addEventListener('message', propagateMessageLocally);
    }
  }
  function propagateMessageLocally(_a) {
    var data = _a.data;
    if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
      propagateLocally(data.changedParts);
    }
  }
  DexiePromise.rejectionMapper = mapError;
  setDebug(debug, dexieStackFrameFilter);
  var namedExports = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dexie: Dexie$1,
    liveQuery: liveQuery,
    'default': Dexie$1,
    RangeSet: RangeSet,
    mergeRanges: mergeRanges,
    rangesOverlap: rangesOverlap
  });
  __assign(Dexie$1, namedExports, {
    default: Dexie$1
  });
  return Dexie$1;
});

/***/ }),

/***/ 6592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isRetryAllowed)
/* harmony export */ });
const denyList = new Set(['ENOTFOUND', 'ENETUNREACH',
// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
'UNABLE_TO_GET_ISSUER_CERT', 'UNABLE_TO_GET_CRL', 'UNABLE_TO_DECRYPT_CERT_SIGNATURE', 'UNABLE_TO_DECRYPT_CRL_SIGNATURE', 'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY', 'CERT_SIGNATURE_FAILURE', 'CRL_SIGNATURE_FAILURE', 'CERT_NOT_YET_VALID', 'CERT_HAS_EXPIRED', 'CRL_NOT_YET_VALID', 'CRL_HAS_EXPIRED', 'ERROR_IN_CERT_NOT_BEFORE_FIELD', 'ERROR_IN_CERT_NOT_AFTER_FIELD', 'ERROR_IN_CRL_LAST_UPDATE_FIELD', 'ERROR_IN_CRL_NEXT_UPDATE_FIELD', 'OUT_OF_MEM', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'CERT_CHAIN_TOO_LONG', 'CERT_REVOKED', 'INVALID_CA', 'PATH_LENGTH_EXCEEDED', 'INVALID_PURPOSE', 'CERT_UNTRUSTED', 'CERT_REJECTED', 'HOSTNAME_MISMATCH']);

// TODO: Use `error?.code` when targeting Node.js 14
function isRetryAllowed(error) {
  return !denyList.has(error && error.code);
}

/***/ }),

/***/ 4553:
/***/ (function(__unused_webpack_module, exports) {

// Version 1.7.3
(function (global, factory) {
   true ? factory(exports) : 0;
})(this, function (exports) {
  'use strict';

  const _nodeResolve_empty = {};
  const nodeCrypto = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
  });

  /*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
  const _0n = BigInt(0);
  const _1n = BigInt(1);
  const _2n = BigInt(2);
  const _8n = BigInt(8);
  const CU_O = BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989');
  const CURVE = Object.freeze({
    a: BigInt(-1),
    d: BigInt('37095705934669439343138083508754565189542113879843219016388785533085940283555'),
    P: BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819949'),
    l: CU_O,
    n: CU_O,
    h: BigInt(8),
    Gx: BigInt('15112221349535400772501151409588531511454012693041857206046113283949847762202'),
    Gy: BigInt('46316835694926478169428394003475163141307993866256225615783033603165251855960')
  });
  const POW_2_256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
  const SQRT_M1 = BigInt('19681161376707505956807079304988542015446066515923890162744021073123829784752');
  BigInt('6853475219497561581579357271197624642482790079785650197046958215289687604742');
  const SQRT_AD_MINUS_ONE = BigInt('25063068953384623474111414158702152701244531502492656460079210482610430750235');
  const INVSQRT_A_MINUS_D = BigInt('54469307008909316920995813868745141605393597292927456921205312896311721017578');
  const ONE_MINUS_D_SQ = BigInt('1159843021668779879193775521855586647937357759715417654439879720876111806838');
  const D_MINUS_ONE_SQ = BigInt('40440834346308536858101042469323190826248399146238708352240133220865137265952');
  class ExtendedPoint {
    constructor(x, y, z, t) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.t = t;
    }
    static fromAffine(p) {
      if (!(p instanceof Point)) {
        throw new TypeError('ExtendedPoint#fromAffine: expected Point');
      }
      if (p.equals(Point.ZERO)) return ExtendedPoint.ZERO;
      return new ExtendedPoint(p.x, p.y, _1n, mod(p.x * p.y));
    }
    static toAffineBatch(points) {
      const toInv = invertBatch(points.map(p => p.z));
      return points.map((p, i) => p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
      return this.toAffineBatch(points).map(this.fromAffine);
    }
    equals(other) {
      assertExtPoint(other);
      const {
        x: X1,
        y: Y1,
        z: Z1
      } = this;
      const {
        x: X2,
        y: Y2,
        z: Z2
      } = other;
      const X1Z2 = mod(X1 * Z2);
      const X2Z1 = mod(X2 * Z1);
      const Y1Z2 = mod(Y1 * Z2);
      const Y2Z1 = mod(Y2 * Z1);
      return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    negate() {
      return new ExtendedPoint(mod(-this.x), this.y, this.z, mod(-this.t));
    }
    double() {
      const {
        x: X1,
        y: Y1,
        z: Z1
      } = this;
      const {
        a
      } = CURVE;
      const A = mod(X1 * X1);
      const B = mod(Y1 * Y1);
      const C = mod(_2n * mod(Z1 * Z1));
      const D = mod(a * A);
      const x1y1 = X1 + Y1;
      const E = mod(mod(x1y1 * x1y1) - A - B);
      const G = D + B;
      const F = G - C;
      const H = D - B;
      const X3 = mod(E * F);
      const Y3 = mod(G * H);
      const T3 = mod(E * H);
      const Z3 = mod(F * G);
      return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    add(other) {
      assertExtPoint(other);
      const {
        x: X1,
        y: Y1,
        z: Z1,
        t: T1
      } = this;
      const {
        x: X2,
        y: Y2,
        z: Z2,
        t: T2
      } = other;
      const A = mod((Y1 - X1) * (Y2 + X2));
      const B = mod((Y1 + X1) * (Y2 - X2));
      const F = mod(B - A);
      if (F === _0n) return this.double();
      const C = mod(Z1 * _2n * T2);
      const D = mod(T1 * _2n * Z2);
      const E = D + C;
      const G = B + A;
      const H = D - C;
      const X3 = mod(E * F);
      const Y3 = mod(G * H);
      const T3 = mod(E * H);
      const Z3 = mod(F * G);
      return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    precomputeWindow(W) {
      const windows = 1 + 256 / W;
      const points = [];
      let p = this;
      let base = p;
      for (let window = 0; window < windows; window++) {
        base = p;
        points.push(base);
        for (let i = 1; i < 2 ** (W - 1); i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    }
    wNAF(n, affinePoint) {
      if (!affinePoint && this.equals(ExtendedPoint.BASE)) affinePoint = Point.BASE;
      const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
      if (256 % W) {
        throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
      }
      let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
      if (!precomputes) {
        precomputes = this.precomputeWindow(W);
        if (affinePoint && W !== 1) {
          precomputes = ExtendedPoint.normalizeZ(precomputes);
          pointPrecomputes.set(affinePoint, precomputes);
        }
      }
      let p = ExtendedPoint.ZERO;
      let f = ExtendedPoint.BASE;
      const windows = 1 + 256 / W;
      const windowSize = 2 ** (W - 1);
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window = 0; window < windows; window++) {
        const offset = window * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f = f.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return ExtendedPoint.normalizeZ([p, f])[0];
    }
    multiply(scalar, affinePoint) {
      return this.wNAF(normalizeScalar(scalar, CURVE.l), affinePoint);
    }
    multiplyUnsafe(scalar) {
      let n = normalizeScalar(scalar, CURVE.l, false);
      const G = ExtendedPoint.BASE;
      const P0 = ExtendedPoint.ZERO;
      if (n === _0n) return P0;
      if (this.equals(P0) || n === _1n) return this;
      if (this.equals(G)) return this.wNAF(n);
      let p = P0;
      let d = this;
      while (n > _0n) {
        if (n & _1n) p = p.add(d);
        d = d.double();
        n >>= _1n;
      }
      return p;
    }
    isSmallOrder() {
      return this.multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
    }
    isTorsionFree() {
      let p = this.multiplyUnsafe(CURVE.l / _2n).double();
      if (CURVE.l % _2n) p = p.add(this);
      return p.equals(ExtendedPoint.ZERO);
    }
    toAffine(invZ) {
      const {
        x,
        y,
        z
      } = this;
      const is0 = this.equals(ExtendedPoint.ZERO);
      if (invZ == null) invZ = is0 ? _8n : invert(z);
      const ax = mod(x * invZ);
      const ay = mod(y * invZ);
      const zz = mod(z * invZ);
      if (is0) return Point.ZERO;
      if (zz !== _1n) throw new Error('invZ was invalid');
      return new Point(ax, ay);
    }
    fromRistrettoBytes() {
      legacyRist();
    }
    toRistrettoBytes() {
      legacyRist();
    }
    fromRistrettoHash() {
      legacyRist();
    }
  }
  ExtendedPoint.BASE = new ExtendedPoint(CURVE.Gx, CURVE.Gy, _1n, mod(CURVE.Gx * CURVE.Gy));
  ExtendedPoint.ZERO = new ExtendedPoint(_0n, _1n, _1n, _0n);
  function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  function assertExtPoint(other) {
    if (!(other instanceof ExtendedPoint)) throw new TypeError('ExtendedPoint expected');
  }
  function assertRstPoint(other) {
    if (!(other instanceof RistrettoPoint)) throw new TypeError('RistrettoPoint expected');
  }
  function legacyRist() {
    throw new Error('Legacy method: switch to RistrettoPoint');
  }
  class RistrettoPoint {
    constructor(ep) {
      this.ep = ep;
    }
    static calcElligatorRistrettoMap(r0) {
      const {
        d
      } = CURVE;
      const r = mod(SQRT_M1 * r0 * r0);
      const Ns = mod((r + _1n) * ONE_MINUS_D_SQ);
      let c = BigInt(-1);
      const D = mod((c - d * r) * mod(r + d));
      let {
        isValid: Ns_D_is_sq,
        value: s
      } = uvRatio(Ns, D);
      let s_ = mod(s * r0);
      if (!edIsNegative(s_)) s_ = mod(-s_);
      if (!Ns_D_is_sq) s = s_;
      if (!Ns_D_is_sq) c = r;
      const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D);
      const s2 = s * s;
      const W0 = mod((s + s) * D);
      const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
      const W2 = mod(_1n - s2);
      const W3 = mod(_1n + s2);
      return new ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
    }
    static hashToCurve(hex) {
      hex = ensureBytes(hex, 64);
      const r1 = bytes255ToNumberLE(hex.slice(0, 32));
      const R1 = this.calcElligatorRistrettoMap(r1);
      const r2 = bytes255ToNumberLE(hex.slice(32, 64));
      const R2 = this.calcElligatorRistrettoMap(r2);
      return new RistrettoPoint(R1.add(R2));
    }
    static fromHex(hex) {
      hex = ensureBytes(hex, 32);
      const {
        a,
        d
      } = CURVE;
      const emsg = 'RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint';
      const s = bytes255ToNumberLE(hex);
      if (!equalBytes(numberTo32BytesLE(s), hex) || edIsNegative(s)) throw new Error(emsg);
      const s2 = mod(s * s);
      const u1 = mod(_1n + a * s2);
      const u2 = mod(_1n - a * s2);
      const u1_2 = mod(u1 * u1);
      const u2_2 = mod(u2 * u2);
      const v = mod(a * d * u1_2 - u2_2);
      const {
        isValid,
        value: I
      } = invertSqrt(mod(v * u2_2));
      const Dx = mod(I * u2);
      const Dy = mod(I * Dx * v);
      let x = mod((s + s) * Dx);
      if (edIsNegative(x)) x = mod(-x);
      const y = mod(u1 * Dy);
      const t = mod(x * y);
      if (!isValid || edIsNegative(t) || y === _0n) throw new Error(emsg);
      return new RistrettoPoint(new ExtendedPoint(x, y, _1n, t));
    }
    toRawBytes() {
      let {
        x,
        y,
        z,
        t
      } = this.ep;
      const u1 = mod(mod(z + y) * mod(z - y));
      const u2 = mod(x * y);
      const u2sq = mod(u2 * u2);
      const {
        value: invsqrt
      } = invertSqrt(mod(u1 * u2sq));
      const D1 = mod(invsqrt * u1);
      const D2 = mod(invsqrt * u2);
      const zInv = mod(D1 * D2 * t);
      let D;
      if (edIsNegative(t * zInv)) {
        let _x = mod(y * SQRT_M1);
        let _y = mod(x * SQRT_M1);
        x = _x;
        y = _y;
        D = mod(D1 * INVSQRT_A_MINUS_D);
      } else {
        D = D2;
      }
      if (edIsNegative(x * zInv)) y = mod(-y);
      let s = mod((z - y) * D);
      if (edIsNegative(s)) s = mod(-s);
      return numberTo32BytesLE(s);
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
    toString() {
      return this.toHex();
    }
    equals(other) {
      assertRstPoint(other);
      const a = this.ep;
      const b = other.ep;
      const one = mod(a.x * b.y) === mod(a.y * b.x);
      const two = mod(a.y * b.y) === mod(a.x * b.x);
      return one || two;
    }
    add(other) {
      assertRstPoint(other);
      return new RistrettoPoint(this.ep.add(other.ep));
    }
    subtract(other) {
      assertRstPoint(other);
      return new RistrettoPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
      return new RistrettoPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
      return new RistrettoPoint(this.ep.multiplyUnsafe(scalar));
    }
  }
  RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE);
  RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
  const pointPrecomputes = new WeakMap();
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    static fromHex(hex) {
      let strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      const {
        d,
        P
      } = CURVE;
      hex = ensureBytes(hex, 32);
      const normed = hex.slice();
      normed[31] = hex[31] & ~0x80;
      const y = bytesToNumberLE(normed);
      if (strict && y >= P) throw new Error('Expected 0 < hex < P');
      if (!strict && y >= POW_2_256) throw new Error('Expected 0 < hex < 2**256');
      const y2 = mod(y * y);
      const u = mod(y2 - _1n);
      const v = mod(d * y2 + _1n);
      let {
        isValid,
        value: x
      } = uvRatio(u, v);
      if (!isValid) throw new Error('Point.fromHex: invalid y coordinate');
      const isXOdd = (x & _1n) === _1n;
      const isLastByteOdd = (hex[31] & 0x80) !== 0;
      if (isLastByteOdd !== isXOdd) {
        x = mod(-x);
      }
      return new Point(x, y);
    }
    static async fromPrivateKey(privateKey) {
      return (await getExtendedPublicKey(privateKey)).point;
    }
    toRawBytes() {
      const bytes = numberTo32BytesLE(this.y);
      bytes[31] |= this.x & _1n ? 0x80 : 0;
      return bytes;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
    toX25519() {
      const {
        y
      } = this;
      const u = mod((_1n + y) * invert(_1n - y));
      return numberTo32BytesLE(u);
    }
    isTorsionFree() {
      return ExtendedPoint.fromAffine(this).isTorsionFree();
    }
    equals(other) {
      return this.x === other.x && this.y === other.y;
    }
    negate() {
      return new Point(mod(-this.x), this.y);
    }
    add(other) {
      return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiply(scalar) {
      return ExtendedPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
  Point.ZERO = new Point(_0n, _1n);
  class Signature {
    constructor(r, s) {
      this.r = r;
      this.s = s;
      this.assertValidity();
    }
    static fromHex(hex) {
      const bytes = ensureBytes(hex, 64);
      const r = Point.fromHex(bytes.slice(0, 32), false);
      const s = bytesToNumberLE(bytes.slice(32, 64));
      return new Signature(r, s);
    }
    assertValidity() {
      const {
        r,
        s
      } = this;
      if (!(r instanceof Point)) throw new Error('Expected Point instance');
      normalizeScalar(s, CURVE.l, false);
      return this;
    }
    toRawBytes() {
      const u8 = new Uint8Array(64);
      u8.set(this.r.toRawBytes());
      u8.set(numberTo32BytesLE(this.s), 32);
      return u8;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
  }
  function concatBytes() {
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    if (!arrays.every(a => a instanceof Uint8Array)) throw new Error('Expected Uint8Array list');
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const arr = arrays[i];
      result.set(arr, pad);
      pad += arr.length;
    }
    return result;
  }
  const hexes = Array.from({
    length: 256
  }, (v, i) => i.toString(16).padStart(2, '0'));
  function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error('Uint8Array expected');
    let hex = '';
    for (let i = 0; i < uint8a.length; i++) {
      hex += hexes[uint8a[i]];
    }
    return hex;
  }
  function hexToBytes(hex) {
    if (typeof hex !== 'string') {
      throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    }
    if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
      const j = i * 2;
      const hexByte = hex.slice(j, j + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
      array[i] = byte;
    }
    return array;
  }
  function numberTo32BytesBE(num) {
    const length = 32;
    const hex = num.toString(16).padStart(length * 2, '0');
    return hexToBytes(hex);
  }
  function numberTo32BytesLE(num) {
    return numberTo32BytesBE(num).reverse();
  }
  function edIsNegative(num) {
    return (mod(num) & _1n) === _1n;
  }
  function bytesToNumberLE(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    return BigInt('0x' + bytesToHex(Uint8Array.from(uint8a).reverse()));
  }
  const MAX_255B = BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  function bytes255ToNumberLE(bytes) {
    return mod(bytesToNumberLE(bytes) & MAX_255B);
  }
  function mod(a) {
    let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    const res = a % b;
    return res >= _0n ? res : b + res;
  }
  function invert(number) {
    let modulo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    if (number === _0n || modulo <= _0n) {
      throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n,
      u = _1n;
    while (a !== _0n) {
      const q = b / a;
      const r = b % a;
      const m = x - u * q;
      b = a, a = r, x = u, u = m;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
  }
  function invertBatch(nums) {
    let p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i) => {
      if (num === _0n) return acc;
      tmp[i] = acc;
      return mod(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i) => {
      if (num === _0n) return acc;
      tmp[i] = mod(acc * tmp[i], p);
      return mod(acc * num, p);
    }, inverted);
    return tmp;
  }
  function pow2(x, power) {
    const {
      P
    } = CURVE;
    let res = x;
    while (power-- > _0n) {
      res *= res;
      res %= P;
    }
    return res;
  }
  function pow_2_252_3(x) {
    const {
      P
    } = CURVE;
    const _5n = BigInt(5);
    const _10n = BigInt(10);
    const _20n = BigInt(20);
    const _40n = BigInt(40);
    const _80n = BigInt(80);
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, _2n) * b2 % P;
    const b5 = pow2(b4, _1n) * x % P;
    const b10 = pow2(b5, _5n) * b5 % P;
    const b20 = pow2(b10, _10n) * b10 % P;
    const b40 = pow2(b20, _20n) * b20 % P;
    const b80 = pow2(b40, _40n) * b40 % P;
    const b160 = pow2(b80, _80n) * b80 % P;
    const b240 = pow2(b160, _80n) * b80 % P;
    const b250 = pow2(b240, _10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, _2n) * x % P;
    return {
      pow_p_5_8,
      b2
    };
  }
  function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7).pow_p_5_8;
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * SQRT_M1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * SQRT_M1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if (edIsNegative(x)) x = mod(-x);
    return {
      isValid: useRoot1 || useRoot2,
      value: x
    };
  }
  function invertSqrt(number) {
    return uvRatio(_1n, number);
  }
  function modlLE(hash) {
    return mod(bytesToNumberLE(hash), CURVE.l);
  }
  function equalBytes(b1, b2) {
    if (b1.length !== b2.length) {
      return false;
    }
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] !== b2[i]) {
        return false;
      }
    }
    return true;
  }
  function ensureBytes(hex, expectedLength) {
    const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
    if (typeof expectedLength === 'number' && bytes.length !== expectedLength) throw new Error(`Expected ${expectedLength} bytes`);
    return bytes;
  }
  function normalizeScalar(num, max) {
    let strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!max) throw new TypeError('Specify max value');
    if (typeof num === 'number' && Number.isSafeInteger(num)) num = BigInt(num);
    if (typeof num === 'bigint' && num < max) {
      if (strict) {
        if (_0n < num) return num;
      } else {
        if (_0n <= num) return num;
      }
    }
    throw new TypeError('Expected valid scalar: 0 < scalar < max');
  }
  function adjustBytes25519(bytes) {
    bytes[0] &= 248;
    bytes[31] &= 127;
    bytes[31] |= 64;
    return bytes;
  }
  function decodeScalar25519(n) {
    return bytesToNumberLE(adjustBytes25519(ensureBytes(n, 32)));
  }
  function checkPrivateKey(key) {
    key = typeof key === 'bigint' || typeof key === 'number' ? numberTo32BytesBE(normalizeScalar(key, POW_2_256)) : ensureBytes(key);
    if (key.length !== 32) throw new Error(`Expected 32 bytes`);
    return key;
  }
  function getKeyFromHash(hashed) {
    const head = adjustBytes25519(hashed.slice(0, 32));
    const prefix = hashed.slice(32, 64);
    const scalar = modlLE(head);
    const point = Point.BASE.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return {
      head,
      prefix,
      scalar,
      point,
      pointBytes
    };
  }
  let _sha512Sync;
  function sha512s() {
    if (typeof _sha512Sync !== 'function') throw new Error('utils.sha512Sync must be set to use sync methods');
    return _sha512Sync(...arguments);
  }
  async function getExtendedPublicKey(key) {
    return getKeyFromHash(await utils.sha512(checkPrivateKey(key)));
  }
  function getExtendedPublicKeySync(key) {
    return getKeyFromHash(sha512s(checkPrivateKey(key)));
  }
  async function getPublicKey(privateKey) {
    return (await getExtendedPublicKey(privateKey)).pointBytes;
  }
  function getPublicKeySync(privateKey) {
    return getExtendedPublicKeySync(privateKey).pointBytes;
  }
  async function sign(message, privateKey) {
    message = ensureBytes(message);
    const {
      prefix,
      scalar,
      pointBytes
    } = await getExtendedPublicKey(privateKey);
    const r = modlLE(await utils.sha512(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(await utils.sha512(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
  }
  function signSync(message, privateKey) {
    message = ensureBytes(message);
    const {
      prefix,
      scalar,
      pointBytes
    } = getExtendedPublicKeySync(privateKey);
    const r = modlLE(sha512s(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(sha512s(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
  }
  function prepareVerification(sig, message, publicKey) {
    message = ensureBytes(message);
    if (!(publicKey instanceof Point)) publicKey = Point.fromHex(publicKey, false);
    const {
      r,
      s
    } = sig instanceof Signature ? sig.assertValidity() : Signature.fromHex(sig);
    const SB = ExtendedPoint.BASE.multiplyUnsafe(s);
    return {
      r,
      s,
      SB,
      pub: publicKey,
      msg: message
    };
  }
  function finishVerification(publicKey, r, SB, hashed) {
    const k = modlLE(hashed);
    const kA = ExtendedPoint.fromAffine(publicKey).multiplyUnsafe(k);
    const RkA = ExtendedPoint.fromAffine(r).add(kA);
    return RkA.subtract(SB).multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
  }
  async function verify(sig, message, publicKey) {
    const {
      r,
      SB,
      msg,
      pub
    } = prepareVerification(sig, message, publicKey);
    const hashed = await utils.sha512(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
  }
  function verifySync(sig, message, publicKey) {
    const {
      r,
      SB,
      msg,
      pub
    } = prepareVerification(sig, message, publicKey);
    const hashed = sha512s(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
  }
  const sync = {
    getExtendedPublicKey: getExtendedPublicKeySync,
    getPublicKey: getPublicKeySync,
    sign: signSync,
    verify: verifySync
  };
  async function getSharedSecret(privateKey, publicKey) {
    const {
      head
    } = await getExtendedPublicKey(privateKey);
    const u = Point.fromHex(publicKey).toX25519();
    return curve25519.scalarMult(head, u);
  }
  Point.BASE._setWindowSize(8);
  function cswap(swap, x_2, x_3) {
    const dummy = mod(swap * (x_2 - x_3));
    x_2 = mod(x_2 - dummy);
    x_3 = mod(x_3 + dummy);
    return [x_2, x_3];
  }
  function montgomeryLadder(pointU, scalar) {
    const {
      P
    } = CURVE;
    const u = normalizeScalar(pointU, P);
    const k = normalizeScalar(scalar, P);
    const a24 = BigInt(121665);
    const x_1 = u;
    let x_2 = _1n;
    let z_2 = _0n;
    let x_3 = u;
    let z_3 = _1n;
    let swap = _0n;
    let sw;
    for (let t = BigInt(255 - 1); t >= _0n; t--) {
      const k_t = k >> t & _1n;
      swap ^= k_t;
      sw = cswap(swap, x_2, x_3);
      x_2 = sw[0];
      x_3 = sw[1];
      sw = cswap(swap, z_2, z_3);
      z_2 = sw[0];
      z_3 = sw[1];
      swap = k_t;
      const A = x_2 + z_2;
      const AA = mod(A * A);
      const B = x_2 - z_2;
      const BB = mod(B * B);
      const E = AA - BB;
      const C = x_3 + z_3;
      const D = x_3 - z_3;
      const DA = mod(D * A);
      const CB = mod(C * B);
      const dacb = DA + CB;
      const da_cb = DA - CB;
      x_3 = mod(dacb * dacb);
      z_3 = mod(x_1 * mod(da_cb * da_cb));
      x_2 = mod(AA * BB);
      z_2 = mod(E * (AA + mod(a24 * E)));
    }
    sw = cswap(swap, x_2, x_3);
    x_2 = sw[0];
    x_3 = sw[1];
    sw = cswap(swap, z_2, z_3);
    z_2 = sw[0];
    z_3 = sw[1];
    const {
      pow_p_5_8,
      b2
    } = pow_2_252_3(z_2);
    const xp2 = mod(pow2(pow_p_5_8, BigInt(3)) * b2);
    return mod(x_2 * xp2);
  }
  function encodeUCoordinate(u) {
    return numberTo32BytesLE(mod(u, CURVE.P));
  }
  function decodeUCoordinate(uEnc) {
    const u = ensureBytes(uEnc, 32);
    u[31] &= 127;
    return bytesToNumberLE(u);
  }
  const curve25519 = {
    BASE_POINT_U: '0900000000000000000000000000000000000000000000000000000000000000',
    scalarMult(privateKey, publicKey) {
      const u = decodeUCoordinate(publicKey);
      const p = decodeScalar25519(privateKey);
      const pu = montgomeryLadder(u, p);
      if (pu === _0n) throw new Error('Invalid private or public key received');
      return encodeUCoordinate(pu);
    },
    scalarMultBase(privateKey) {
      return curve25519.scalarMult(privateKey, curve25519.BASE_POINT_U);
    }
  };
  const crypto = {
    node: nodeCrypto,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined
  };
  const utils = {
    bytesToHex,
    hexToBytes,
    concatBytes,
    getExtendedPublicKey,
    mod,
    invert,
    TORSION_SUBGROUP: ['0100000000000000000000000000000000000000000000000000000000000000', 'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a', '0000000000000000000000000000000000000000000000000000000000000080', '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05', 'ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f', '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85', '0000000000000000000000000000000000000000000000000000000000000000', 'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa'],
    hashToPrivateScalar: hash => {
      hash = ensureBytes(hash);
      if (hash.length < 40 || hash.length > 1024) throw new Error('Expected 40-1024 bytes of private key as per FIPS 186');
      return mod(bytesToNumberLE(hash), CURVE.l - _1n) + _1n;
    },
    randomBytes: function () {
      let bytesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
      if (crypto.web) {
        return crypto.web.getRandomValues(new Uint8Array(bytesLength));
      } else if (crypto.node) {
        const {
          randomBytes
        } = crypto.node;
        return new Uint8Array(randomBytes(bytesLength).buffer);
      } else {
        throw new Error("The environment doesn't have randomBytes function");
      }
    },
    randomPrivateKey: () => {
      return utils.randomBytes(32);
    },
    sha512: async function () {
      const message = concatBytes(...arguments);
      if (crypto.web) {
        const buffer = await crypto.web.subtle.digest('SHA-512', message.buffer);
        return new Uint8Array(buffer);
      } else if (crypto.node) {
        return Uint8Array.from(crypto.node.createHash('sha512').update(message).digest());
      } else {
        throw new Error("The environment doesn't have sha512 function");
      }
    },
    precompute() {
      let windowSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      let point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Point.BASE;
      const cached = point.equals(Point.BASE) ? point : new Point(point.x, point.y);
      cached._setWindowSize(windowSize);
      cached.multiply(_2n);
      return cached;
    },
    sha512Sync: undefined
  };
  Object.defineProperties(utils, {
    sha512Sync: {
      configurable: false,
      get() {
        return _sha512Sync;
      },
      set(val) {
        if (!_sha512Sync) _sha512Sync = val;
      }
    }
  });
  exports.CURVE = CURVE;
  exports.ExtendedPoint = ExtendedPoint;
  exports.Point = Point;
  exports.RistrettoPoint = RistrettoPoint;
  exports.Signature = Signature;
  exports.curve25519 = curve25519;
  exports.getPublicKey = getPublicKey;
  exports.getSharedSecret = getSharedSecret;
  exports.sign = sign;
  exports.sync = sync;
  exports.utils = utils;
  exports.verify = verify;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ 8924:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 5024:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ton_ton_dist_client_TonClient_js-node_modules_ton_ton_dist_wallets_Walle-7e4ae2"], () => (__webpack_require__(104)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"worker": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_ton_ton_dist_client_TonClient_js-node_modules_ton_ton_dist_wallets_Walle-7e4ae2").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;