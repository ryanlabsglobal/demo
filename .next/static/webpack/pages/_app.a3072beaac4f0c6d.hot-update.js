"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/ContextProvider */ \"./store/ContextProvider.tsx\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n//\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n        components: {\n            MuiPaper: {\n                styleOverrides: {\n                    root: {\n                        borderRadius: \"1rem\",\n                        boxShadow: \"none\"\n                    }\n                }\n            },\n            MuiButton: {\n                styleOverrides: {\n                    root: {\n                        boxShadow: \"none\"\n                    }\n                }\n            },\n            MuiSlider: {\n                styleOverrides: {\n                    root: {\n                        color: \"#E200FF\"\n                    }\n                }\n            },\n            MuiCheckbox: {\n                styleOverrides: {\n                    root: {\n                        color: \"#ffffff\"\n                    }\n                }\n            }\n        },\n        palette: {\n            primary: {\n                main: \"#0F73B5\"\n            },\n            secondary: {\n                main: \"#1D8C9F\"\n            },\n            success: {\n                main: \"#15B50f\"\n            },\n            error: {\n                main: \"#B50F0F\"\n            },\n            warning: {\n                main: \"#D85B00\"\n            },\n            text: {\n                primary: \"#ffffff\"\n            },\n            background: {\n                paper: \"#103C55\",\n                default: \"#164D6C\"\n            }\n        },\n        typography: {\n            h1: {\n                fontFamily: \"Lato\",\n                fontWeight: 700,\n                fontSize: \"48px\",\n                textTransform: \"uppercase\"\n            },\n            h2: {\n                fontFamily: \"Lato\",\n                fontWeight: 700,\n                fontSize: \"34px\",\n                textTransform: \"uppercase\"\n            },\n            h3: {\n                fontFamily: \"Lato\",\n                fontWeight: 400,\n                fontSize: \"24px\",\n                textTransform: \"uppercase\"\n            },\n            h4: {\n                fontFamily: \"Lato\",\n                fontWeight: 700,\n                fontSize: \"24px\",\n                textTransform: \"uppercase\"\n            },\n            h5: {\n                fontFamily: \"Lato\",\n                fontWeight: 700\n            },\n            h6: {\n                fontFamily: \"Lato\",\n                fontWeight: 700\n            },\n            subtitle1: {\n                fontFamily: \"Lato\",\n                fontWeight: 400,\n                fontSize: \"20px\"\n            },\n            subtitle2: {\n                fontFamily: \"Lato\",\n                fontWeight: 700,\n                fontSize: \"20px\"\n            },\n            body1: {\n                fontFamily: \"Lato\",\n                fontWeight: 400,\n                fontSize: \"14px\"\n            },\n            body2: {\n                fontFamily: \"Lato\",\n                fontWeight: 400,\n                fontSize: \"12px\"\n            },\n            caption: {\n                fontFamily: \"Lato\",\n                fontWeight: 700,\n                fontSize: \"10px\"\n            },\n            button: {\n                fontFamily: \"Lato\",\n                fontWeight: 400\n            }\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_ContextProvider__WEBPACK_IMPORTED_MODULE_1__.ContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/pages/_app.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/pages/_app.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryanslater/sites/demo/pages/_app.tsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryanslater/sites/demo/pages/_app.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this));\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RvcmUvQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5cbi8vXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgTXVpUGFwZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgTXVpQnV0dG9uOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIE11aVNsaWRlcjoge1xuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNFMjAwRkZcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIE11aUNoZWNrYm94OiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBtYWluOiBcIiMwRjczQjVcIixcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbWFpbjogXCIjMUQ4QzlGXCIsXG4gICAgICB9LFxuICAgICAgc3VjY2Vzczoge1xuICAgICAgICBtYWluOiBcIiMxNUI1MGZcIixcbiAgICAgIH0sXG4gICAgICBlcnJvcjoge1xuICAgICAgICBtYWluOiBcIiNCNTBGMEZcIixcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiB7XG4gICAgICAgIG1haW46IFwiI0Q4NUIwMFwiLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgcHJpbWFyeTogXCIjZmZmZmZmXCIsXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBwYXBlcjogXCIjMTAzQzU1XCIsXG4gICAgICAgIGRlZmF1bHQ6IFwiIzE2NEQ2Q1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgIGgxOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgIH0sXG4gICAgICBoMjoge1xuICAgICAgICBmb250RmFtaWx5OiBcIkxhdG9cIixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBmb250U2l6ZTogXCIzNHB4XCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICB9LFxuICAgICAgaDM6IHtcbiAgICAgICAgZm9udEZhbWlseTogXCJMYXRvXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgfSxcbiAgICAgIGg0OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgIH0sXG4gICAgICBoNToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkxhdG9cIixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgfSxcbiAgICAgIGg2OiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICB9LFxuICAgICAgc3VidGl0bGUxOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgIH0sXG4gICAgICBzdWJ0aXRsZTI6IHtcbiAgICAgICAgZm9udEZhbWlseTogXCJMYXRvXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHkxOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIH0sXG4gICAgICBib2R5Mjoge1xuICAgICAgICBmb250RmFtaWx5OiBcIkxhdG9cIixcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICB9LFxuICAgICAgY2FwdGlvbjoge1xuICAgICAgICBmb250RmFtaWx5OiBcIkxhdG9cIixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTGF0b1wiLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJDc3NCYXNlbGluZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJjb21wb25lbnRzIiwiTXVpUGFwZXIiLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJNdWlCdXR0b24iLCJNdWlTbGlkZXIiLCJjb2xvciIsIk11aUNoZWNrYm94IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsInRleHQiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImgxIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYm9keTEiLCJib2R5MiIsImNhcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});