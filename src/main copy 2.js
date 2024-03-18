/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 		// This function allow to reference async chunks
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "mytonwallet:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: callApi

// NAMESPACE OBJECT: ./src/util/capacitorStorageProxy/methods.ts
var methods_namespaceObject = {};
__webpack_require__.r(methods_namespaceObject);
__webpack_require__.d(methods_namespaceObject, {
  clear: () => (clear),
  getItem: () => (getItem),
  init: () => (init),
  removeItem: () => (removeItem),
  setItem: () => (setItem)
});

;// CONCATENATED MODULE: ./src/config.ts
const APP_ENV = "production";
const APP_NAME = ({}).APP_NAME || 'MyTonWallet';
const APP_VERSION = ({}).APP_VERSION;
const APP_ENV_MARKER = APP_ENV === 'staging' ? 'Beta' : APP_ENV === 'development' ? 'Dev' : undefined;
const config_DEBUG = APP_ENV !== 'production' && APP_ENV !== 'perf' && APP_ENV !== 'test';
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
const STRICTERDOM_ENABLED = config_DEBUG && !IS_PACKAGED_ELECTRON;
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
const config_ONE_TON = 1000000000n;
const MIN_BALANCE_FOR_UNSTAKE = 1020000000n; // 1.02 TON
const STAKING_FORWARD_AMOUNT = (/* unused pure expression or super */ null && (config_ONE_TON));
const DEFAULT_FEE = 15000000n; // 0.015 TON

const STAKING_POOLS = ({}).STAKING_POOLS ? ({}).STAKING_POOLS.split(' ') : [];
const LIQUID_POOL = ({}).LIQUID_POOL || 'EQD2_4d91M4TVbEBVyBF8J1UwpMJc361LKVCz6bBlffMW05o';
const LIQUID_JETTON = ({}).LIQUID_JETTON || 'EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE';
const STAKING_MIN_AMOUNT = (/* unused pure expression or super */ null && (config_ONE_TON));
const NOMINATORS_STAKING_MIN_AMOUNT = config_ONE_TON * 10001n;
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
const POPULAR_WALLET_VERSIONS = (/* unused pure expression or super */ null && (['v3R1', 'v3R2', 'v4R2']));
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
function decimals_fromDecimal(value, decimals) {
  return BigInt(Big(value).mul(ten.pow(decimals !== null && decimals !== void 0 ? decimals : DEFAULT_DECIMAL_PLACES)).round().toString());
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
  if (config_DEBUG) {
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
;// CONCATENATED MODULE: ./src/util/capacitorStorageProxy/methods.ts
let SecureStoragePlugin;
let resolvePromise;
const promise = new Promise(resolve => {
  resolvePromise = resolve;
});
async function init() {
  ({
    SecureStoragePlugin
  } = await __webpack_require__.e(/* import() | capacitorSecureStorage */ "capacitorSecureStorage").then(__webpack_require__.bind(__webpack_require__, 1867)));
  resolvePromise();
}
async function getItem(key) {
  var _await$get$catch;
  await promise;
  return (_await$get$catch = await SecureStoragePlugin.get({
    key
  }).catch(() => undefined)) === null || _await$get$catch === void 0 ? void 0 : _await$get$catch.value;
}
async function setItem(key, value) {
  await promise;
  return SecureStoragePlugin.set({
    key,
    value
  });
}
async function removeItem(key) {
  await promise;
  return SecureStoragePlugin.remove({
    key
  });
}
async function clear() {
  await promise;
  return SecureStoragePlugin.clear();
}
;// CONCATENATED MODULE: ./src/util/capacitorStorageProxy/index.ts



function createWindowProvider(worker) {
  createPostMessageInterface(function (name, origin) {
    const method = methods_namespaceObject[name];

    // @ts-ignore
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return method(...args);
  }, WINDOW_PROVIDER_CHANNEL, worker, true);
}
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
;// CONCATENATED MODULE: ./src/api/providers/worker/connector.ts




let connector;
function initApi(onUpdate, initArgs) {
  if (!connector) {
    // const worker = new Worker( /* webpackChunkName: "worker" */new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("worker"), __webpack_require__.b));
    const worker = new Worker(window.URL.createObjectURL(
      new Blob([document.getElementById("worker").textContent], {
          type: "application/javascript",
      })
    ));
    connector = createConnector(worker, onUpdate);
    if (IS_CAPACITOR) {
      createWindowProvider(worker);
    }
  }
  const args = typeof initArgs === 'function' ? initArgs() : initArgs;
  return connector.init(args);
}
async function callApi(fnName) {
  if (!connector) {
    logDebugError('API is not initialized');
    return undefined;
  }
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return await connector.request({
      name: fnName,
      args
    });
  } catch (err) {
    return undefined;
  }
}
;// CONCATENATED MODULE: ./src/api/index.ts
// export { initApi, callApi } from './providers/direct/connector';

;// CONCATENATED MODULE: ./src/ios.js
/* eslint-disable no-console */

(async () => {
  const api = initApi(update => console.log(`update=${JSON.stringify(update).substring(0, 20)}`), {
    isElectron: false,
    isNativeBottomSheet: false
  });
  const ok = await callApi('validateMnemonic', ['poo']);
  console.log(ok);
  console.log(`api=${JSON.stringify(api)}`);
})();
window.initApi = initApi;
window.callApi = callApi;
// export callApi;

/******/ })()
;