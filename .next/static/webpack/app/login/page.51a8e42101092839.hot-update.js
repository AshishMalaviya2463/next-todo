"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./src/app/components/ProtectRoutes.js":
/*!*********************************************!*\
  !*** ./src/app/components/ProtectRoutes.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nconst ProtectRoutes = (param)=>{\n    let { children  } = param;\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    useEffect(()=>{\n        setToken(localStorage.getItem(\"token\"));\n    }, []);\n    if (!token) {\n        if (window.location.pathname.includes(\"/registration\") || window.location.pathname.includes(\"/login\")) {\n            return children;\n        } else {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/login\");\n        }\n    } else {\n        if (window.location.pathname.includes(\"/registration\") || window.location.pathname.includes(\"/login\")) {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.redirect)(\"/todos\");\n        } else {\n            return children;\n        }\n    }\n};\n_s(ProtectRoutes, \"SSLzquenZQzOMzU62DrezfOo2pU=\");\n_c = ProtectRoutes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectRoutes);\nvar _c;\n$RefreshReg$(_c, \"ProtectRoutes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb3RlY3RSb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBDO0FBQ1Y7QUFFaEMsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsU0FBUSxFQUFFOztJQUUvQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFFbkNLLFVBQVU7UUFDTkQsU0FBU0UsYUFBYUMsUUFBUTtJQUNsQyxHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNKLE9BQU87UUFDUixJQUFJSyxPQUFPQyxTQUFTQyxTQUFTQyxTQUFTLG9CQUFvQkgsT0FBT0MsU0FBU0MsU0FBU0MsU0FBUyxXQUFXO1lBQ25HLE9BQU9UO1FBQ1gsT0FBTztZQUNISCx5REFBUUEsQ0FBQztRQUNiO0lBQ0osT0FBTztRQUNILElBQUlTLE9BQU9DLFNBQVNDLFNBQVNDLFNBQVMsb0JBQW9CSCxPQUFPQyxTQUFTQyxTQUFTQyxTQUFTLFdBQVc7WUFDbkdaLHlEQUFRQSxDQUFDO1FBQ2IsT0FBTztZQUNILE9BQU9HO1FBQ1g7SUFDSjtBQUNKO0dBckJNRDtLQUFBQTtBQXVCTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvdGVjdFJvdXRlcy5qcz80NmU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQcm90ZWN0Um91dGVzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSlcbiAgICB9LCBbXSlcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9yZWdpc3RyYXRpb25cIikgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2xvZ2luXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KFwiL2xvZ2luXCIpXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3JlZ2lzdHJhdGlvblwiKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvbG9naW5cIikpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KFwiL3RvZG9zXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdFJvdXRlcyJdLCJuYW1lcyI6WyJyZWRpcmVjdCIsInVzZVN0YXRlIiwiUHJvdGVjdFJvdXRlcyIsImNoaWxkcmVuIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/ProtectRoutes.js\n"));

/***/ })

});