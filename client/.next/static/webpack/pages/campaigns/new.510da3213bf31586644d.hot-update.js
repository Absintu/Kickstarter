webpackHotUpdate_N_E("pages/campaigns/new",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nvar web3;\n\nif (window.ethereum) {\n  try {\n    window.ethereum.enable().then(function () {\n      // User has allowed account access to DApp...\n      web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);\n    });\n  } catch (e) {\n    // User has denied account access to DApp...\n    alert('Cant use window.ethereum !');\n  }\n} // Legacy DApp Browsers\nelse if (window.web3) {\n    web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);\n  } // Non-DApp Browsers\n  else {\n      alert('You have to install MetaMask !');\n    }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);\n/*import Web3 from 'web3';\n\nlet web3;\n\nif(typeof window !== 'undefined' && window.web3 !== 'undefined') {\n    // We are in the browser and metamask is running.\n    web3= new Web3(window.web3.currentProvider);\n    console.log('We are in the browser and metamask is running.');\n} else{\n    // We are on the server *OR* the user is not running metamask\n    const provider = new Web3.providers.HttpProvider(\n        `https://goerli.infura.io/v3/e692e48e183f4772a500fe1ab8d47f03`\n    );\n    web3 = new Web3(provider);\n    console.log('We are on the server *OR* the user is not running metamask');\n}\n\nexport default web3;\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd2ViMy5qcz84OWQ3Il0sIm5hbWVzIjpbIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsInRoZW4iLCJXZWIzIiwiZSIsImFsZXJ0IiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLElBQUo7O0FBRUEsSUFBSUMsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ2xCLE1BQUk7QUFDREQsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QkMsSUFBekIsQ0FBOEIsWUFBVztBQUNyQztBQUNBSixVQUFJLEdBQUcsSUFBSUssMkNBQUosQ0FBU0osTUFBTSxDQUFDQyxRQUFoQixDQUFQO0FBQ0gsS0FIRDtBQUlGLEdBTEQsQ0FLRSxPQUFNSSxDQUFOLEVBQVM7QUFDUjtBQUNBQyxTQUFLLENBQUMsNEJBQUQsQ0FBTDtBQUNGO0FBQ0gsQ0FWRCxDQVdBO0FBWEEsS0FZSyxJQUFJTixNQUFNLENBQUNELElBQVgsRUFBaUI7QUFDbEJBLFFBQUksR0FBRyxJQUFJSywyQ0FBSixDQUFTSixNQUFNLENBQUNELElBQVAsQ0FBWVEsZUFBckIsQ0FBUDtBQUNILEdBRkksQ0FHTDtBQUhLLE9BSUE7QUFDREQsV0FBSyxDQUFDLGdDQUFELENBQUw7QUFDSDs7QUFFY1AsbUVBQWY7QUFDQSIsImZpbGUiOiIuL3dlYjMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xuXG5sZXQgd2ViMztcblxuaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFVzZXIgaGFzIGFsbG93ZWQgYWNjb3VudCBhY2Nlc3MgdG8gREFwcC4uLlxuICAgICAgICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgfSk7XG4gICB9IGNhdGNoKGUpIHtcbiAgICAgIC8vIFVzZXIgaGFzIGRlbmllZCBhY2NvdW50IGFjY2VzcyB0byBEQXBwLi4uXG4gICAgICBhbGVydCgnQ2FudCB1c2Ugd2luZG93LmV0aGVyZXVtICEnKTtcbiAgIH1cbn1cbi8vIExlZ2FjeSBEQXBwIEJyb3dzZXJzXG5lbHNlIGlmICh3aW5kb3cud2ViMykge1xuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufVxuLy8gTm9uLURBcHAgQnJvd3NlcnNcbmVsc2Uge1xuICAgIGFsZXJ0KCdZb3UgaGF2ZSB0byBpbnN0YWxsIE1ldGFNYXNrICEnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcbi8qaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmxldCB3ZWIzO1xuXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmcuXG4gICAgd2ViMz0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbiAgICBjb25zb2xlLmxvZygnV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLicpO1xufSBlbHNle1xuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyICpPUiogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgIGBodHRwczovL2dvZXJsaS5pbmZ1cmEuaW8vdjMvZTY5MmU0OGUxODNmNDc3MmE1MDBmZTFhYjhkNDdmMDNgXG4gICAgKTtcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuICAgIGNvbnNvbGUubG9nKCdXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web3.js\n");

/***/ })

})