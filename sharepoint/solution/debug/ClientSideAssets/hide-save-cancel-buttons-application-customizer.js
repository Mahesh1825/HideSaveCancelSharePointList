define("ca5ffe85-5dc7-4e65-ab21-45ffe7b48614_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-application-base","@microsoft/sp-dialog","HideSaveCancelButtonsApplicationCustomizerStrings"], (__WEBPACK_EXTERNAL_MODULE__676__, __WEBPACK_EXTERNAL_MODULE__841__, __WEBPACK_EXTERNAL_MODULE__817__, __WEBPACK_EXTERNAL_MODULE__285__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 841:
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__841__;

/***/ }),

/***/ 676:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__676__;

/***/ }),

/***/ 817:
/*!***************************************!*\
  !*** external "@microsoft/sp-dialog" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__817__;

/***/ }),

/***/ 285:
/*!********************************************************************!*\
  !*** external "HideSaveCancelButtonsApplicationCustomizerStrings" ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__285__;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************************!*\
  !*** ./lib/extensions/hideSaveCancelButtons/HideSaveCancelButtonsApplicationCustomizer.js ***!
  \********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ 676);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-application-base */ 841);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-dialog */ 817);
/* harmony import */ var _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var HideSaveCancelButtonsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! HideSaveCancelButtonsApplicationCustomizerStrings */ 285);
/* harmony import */ var HideSaveCancelButtonsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(HideSaveCancelButtonsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var LOG_SOURCE = 'HideSaveCancelButtonsApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HideSaveCancelButtonsApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HideSaveCancelButtonsApplicationCustomizer, _super);
    function HideSaveCancelButtonsApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideSaveCancelButtonsApplicationCustomizer.prototype.onInit = function () {
        console.log("HideSaveCancelButtons extension initialized");
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.Log.info(LOG_SOURCE, "Initialized ".concat(HideSaveCancelButtonsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__.Title));
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog.alert("Hello from new update ".concat(HideSaveCancelButtonsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__.Title, ":\n\n").concat(message)).catch(function () {
            /* handle error */
        });
        // Add CSS to hide Save and Cancel
        var style = document.createElement("style");
        style.innerHTML = "\n      button[title=\"Save\"],\n      button[title=\"Cancel\"],\n      button[title=\"Close\"] {\n        display: none !important;\n      }\n    ";
        document.head.appendChild(style);
        return Promise.resolve();
    };
    return HideSaveCancelButtonsApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__.BaseApplicationCustomizer));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HideSaveCancelButtonsApplicationCustomizer);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=hide-save-cancel-buttons-application-customizer.js.map