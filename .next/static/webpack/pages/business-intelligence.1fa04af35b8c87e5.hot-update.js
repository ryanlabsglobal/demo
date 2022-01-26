"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/business-intelligence",{

/***/ "./lib/AuthComponent.tsx":
/*!*******************************!*\
  !*** ./lib/AuthComponent.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/UserContext */ \"./store/UserContext.ts\");\n/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation/Navigation */ \"./components/Navigation/Navigation.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n//This component is responsible for Authentication and wrapping the Navbar around pages that are logged in.\n//This will need to be imported into any page that required authentication and wrapped around the export\n//eg export default AuthComponent(home);\nvar AuthComponent = function(WrappedComponent) {\n    return function NewComponent(props) {\n        var auth = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_store_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).auth;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n            children: auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, _objectSpread({}, props), void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/lib/AuthComponent.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/lib/AuthComponent.tsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"You are not logged in\"\n            }, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/lib/AuthComponent.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ryanslater/sites/demo/lib/AuthComponent.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this));\n    };\n};\n_c = AuthComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthComponent);\nvar _c;\n$RefreshReg$(_c, \"AuthComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvQXV0aENvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUQsRUFBMkc7QUFDM0csRUFBd0c7QUFDeEcsRUFBd0M7QUFFeEMsR0FBSyxDQUFDRyxhQUFhLEdBQUcsUUFBUSxDQUFQQyxnQkFBcUIsRUFBSyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsS0FBUyxFQUFFLENBQUM7UUFDdkMsR0FBSyxDQUFHQyxJQUFJLEdBQUtQLHVEQUFnQixDQUFDQywwREFBVyxFQUFyQ00sSUFBSTtRQUNaLE1BQU0sNkVBQ0hQLHVEQUFjO3NCQUNaTyxJQUFJLCtFQUNGTCx5RUFBVTtzR0FDUkUsZ0JBQWdCLG9CQUFLRSxLQUFLOzs7Ozs7Ozs7bUdBRzVCSSxDQUFFOzBCQUFDLENBQXFCOzs7Ozs7Ozs7OztJQUlqQyxDQUFDO0FBQ0gsQ0FBQztLQWZLUCxhQUFhO0FBZ0JuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9BdXRoQ29tcG9uZW50LnRzeD9hYzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gXCIuLi9zdG9yZS9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XG5cbi8vVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIEF1dGhlbnRpY2F0aW9uIGFuZCB3cmFwcGluZyB0aGUgTmF2YmFyIGFyb3VuZCBwYWdlcyB0aGF0IGFyZSBsb2dnZWQgaW4uXG4vL1RoaXMgd2lsbCBuZWVkIHRvIGJlIGltcG9ydGVkIGludG8gYW55IHBhZ2UgdGhhdCByZXF1aXJlZCBhdXRoZW50aWNhdGlvbiBhbmQgd3JhcHBlZCBhcm91bmQgdGhlIGV4cG9ydFxuLy9lZyBleHBvcnQgZGVmYXVsdCBBdXRoQ29tcG9uZW50KGhvbWUpO1xuXG5jb25zdCBBdXRoQ29tcG9uZW50ID0gKFdyYXBwZWRDb21wb25lbnQ6IGFueSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gTmV3Q29tcG9uZW50KHByb3BzOiBGQykge1xuICAgIGNvbnN0IHsgYXV0aCB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge2F1dGggPyAoXG4gICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxoMj5Zb3UgYXJlIG5vdCBsb2dnZWQgaW48L2gyPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyQ29udGV4dCIsIk5hdmlnYXRpb24iLCJBdXRoQ29tcG9uZW50IiwiV3JhcHBlZENvbXBvbmVudCIsIk5ld0NvbXBvbmVudCIsInByb3BzIiwiYXV0aCIsInVzZUNvbnRleHQiLCJGcmFnbWVudCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/AuthComponent.tsx\n");

/***/ })

});