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

/***/ "./components/BottomFilterComponents/TradingParamsBottomBar.tsx":
/*!**********************************************************************!*\
  !*** ./components/BottomFilterComponents/TradingParamsBottomBar.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/system/Box */ \"./node_modules/@mui/system/esm/Box/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _ClosedFilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClosedFilterBar */ \"./components/BottomFilterComponents/ClosedFilterBar.tsx\");\n/* harmony import */ var _OpenFilterByType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenFilterByType */ \"./components/BottomFilterComponents/OpenFilterByType.tsx\");\n/* harmony import */ var _OpenCountrySelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OpenCountrySelector */ \"./components/BottomFilterComponents/OpenCountrySelector.tsx\");\n/* harmony import */ var _OpenFilterSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OpenFilterSelectors */ \"./components/BottomFilterComponents/OpenFilterSelectors.tsx\");\n/* harmony import */ var _OpenRangeSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OpenRangeSlider */ \"./components/BottomFilterComponents/OpenRangeSlider.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n//This needs to be imported in any page you want to have the Trading Params at the bottom\n//Provides the bar at the bottom of the screen\n//All components in the Trading params will either begin with Open or Closed which refences the open and closed state\n//These are the components for the closed state\n\n//These are the components for the open state\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TradingParamsBottomBar = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var openHandler = function() {\n        return setOpen(true);\n    };\n    var closeHandler = function() {\n        return setOpen(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: openHandler,\n                sx: {\n                    bgcolor: \"background.paper\",\n                    position: \"fixed\",\n                    bottom: 5,\n                    right: 20,\n                    width: \"calc(100% - 300px)\",\n                    borderRadius: 2,\n                    cursor: \"pointer\",\n                    border: \"1px solid #fff\",\n                    minWidth: \"600px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClosedFilterBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                open: open,\n                onClose: closeHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        bgcolor: \"background.paper\",\n                        position: \"fixed\",\n                        bottom: 5,\n                        right: 20,\n                        width: \"calc(100% - 300px)\",\n                        borderRadius: 2,\n                        px: 3,\n                        minHeight: \"570px\",\n                        height: \"50vh\",\n                        overflowY: \"scroll\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OpenFilterByType__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            container: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OpenCountrySelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    xs: 6,\n                                    item: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OpenFilterSelectors__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            variant: \"h6\",\n                                            children: \"Ranges\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OpenRangeSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"flex-end\",\n                                mb: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    onClick: closeHandler,\n                                    color: \"error\",\n                                    variant: \"contained\",\n                                    children: \"CLEAR\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    sx: {\n                                        ml: 2\n                                    },\n                                    variant: \"contained\",\n                                    children: \"GENERATE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryanslater/sites/demo/components/BottomFilterComponents/TradingParamsBottomBar.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this));\n};\n_s(TradingParamsBottomBar, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = TradingParamsBottomBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradingParamsBottomBar);\nvar _c;\n$RefreshReg$(_c, \"TradingParamsBottomBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JvdHRvbUZpbHRlckNvbXBvbmVudHMvVHJhZGluZ1BhcmFtc0JvdHRvbUJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTtBQUNJO0FBQ1k7QUFDVjtBQUNFO0FBRXpDLEVBQXlGO0FBQ3pGLEVBQThDO0FBQzlDLEVBQXFIO0FBRXJILEVBQStDO0FBQ0E7QUFFL0MsRUFBNkM7QUFDSTtBQUNNO0FBQ0E7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxHQUFLLENBQUNXLHNCQUFzQixHQUFHLFFBQy9CLEdBRHFDLENBQUM7O0lBQ3BDLEdBQUssQ0FBbUJYLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLE9BQXJDYSxJQUFJLEdBQWFiLEdBQXFCLEtBQWhDYyxPQUFPLEdBQUlkLEdBQXFCO0lBQzdDLEdBQUssQ0FBQ2UsV0FBVyxHQUFHLFFBQVE7UUFBRkQsTUFBTSxDQUFOQSxPQUFPLENBQUMsSUFBSTs7SUFDdEMsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFBUTtRQUFGRixNQUFNLENBQU5BLE9BQU8sQ0FBQyxLQUFLOztJQUV4QyxNQUFNLDZFQUNIZCx1REFBYzs7YUFDWGEsSUFBSSxnRkFDSFosdURBQUc7Z0JBQ0ZpQixPQUFPLEVBQUVILFdBQVc7Z0JBQ3BCSSxFQUFFLEVBQUUsQ0FBQztvQkFDSEMsT0FBTyxFQUFFLENBQWtCO29CQUMzQkMsUUFBUSxFQUFFLENBQU87b0JBQ2pCQyxNQUFNLEVBQUUsQ0FBQztvQkFDVEMsS0FBSyxFQUFFLEVBQUU7b0JBQ1RDLEtBQUssRUFBRyxDQUFrQjtvQkFDMUJDLFlBQVksRUFBRSxDQUFDO29CQUNmQyxNQUFNLEVBQUUsQ0FBUztvQkFDakJDLE1BQU0sRUFBRSxDQUFnQjtvQkFDeEJDLFFBQVEsRUFBRSxDQUFPO2dCQUNuQixDQUFDO3NHQUVBdEIsd0RBQWU7Ozs7Ozs7Ozs7d0ZBR25CRiwyREFBSztnQkFBQ1MsSUFBSSxFQUFFQSxJQUFJO2dCQUFFZ0IsT0FBTyxFQUFFYixZQUFZO3NHQUNyQ2YsdURBQUc7b0JBQ0ZrQixFQUFFLEVBQUUsQ0FBQzt3QkFDSEMsT0FBTyxFQUFFLENBQWtCO3dCQUMzQkMsUUFBUSxFQUFFLENBQU87d0JBQ2pCQyxNQUFNLEVBQUUsQ0FBQzt3QkFDVEMsS0FBSyxFQUFFLEVBQUU7d0JBQ1RDLEtBQUssRUFBRyxDQUFrQjt3QkFDMUJDLFlBQVksRUFBRSxDQUFDO3dCQUNmSyxFQUFFLEVBQUUsQ0FBQzt3QkFDTEMsU0FBUyxFQUFFLENBQU87d0JBQ2xCQyxNQUFNLEVBQUUsQ0FBTTt3QkFDZEMsU0FBUyxFQUFFLENBQVE7b0JBQ3JCLENBQUM7O29HQUVBMUIseURBQWdCOzs7OztvR0FDaEJMLDBEQUFJOzRCQUFDZ0MsU0FBUzs7NEdBQ1oxQiw0REFBbUI7Ozs7OzRHQUNuQk4sMERBQUk7b0NBQUNpQyxFQUFFLEVBQUUsQ0FBQztvQ0FBRUMsSUFBSTs7b0hBQ2QzQiw0REFBbUI7Ozs7O29IQUNuQk4saUVBQVU7NENBQUNrQyxPQUFPLEVBQUMsQ0FBSTtzREFBQyxDQUFNOzs7Ozs7b0hBQzlCM0Isd0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUduQlQsdURBQUc7NEJBQUNrQixFQUFFLEVBQUUsQ0FBQztnQ0FBQ21CLE9BQU8sRUFBRSxDQUFNO2dDQUFFQyxjQUFjLEVBQUUsQ0FBVTtnQ0FBRUMsRUFBRSxFQUFFLENBQUM7NEJBQUMsQ0FBQzs7NEdBQzVEbkMsNkRBQU07b0NBQUNhLE9BQU8sRUFBRUYsWUFBWTtvQ0FBRXlCLEtBQUssRUFBQyxDQUFPO29DQUFDSixPQUFPLEVBQUMsQ0FBVzs4Q0FBQyxDQUVqRTs7Ozs7OzRHQUNDaEMsNkRBQU07b0NBQUNjLEVBQUUsRUFBRSxDQUFDO3dDQUFDdUIsRUFBRSxFQUFFLENBQUM7b0NBQUMsQ0FBQztvQ0FBRUwsT0FBTyxFQUFDLENBQVc7OENBQUMsQ0FFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQTdESzFCLHNCQUFzQjtLQUF0QkEsc0JBQXNCO0FBK0Q1QiwrREFBZUEsc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb3R0b21GaWx0ZXJDb21wb25lbnRzL1RyYWRpbmdQYXJhbXNCb3R0b21CYXIudHN4PzRjZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9zeXN0ZW0vQm94XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbi8vVGhpcyBuZWVkcyB0byBiZSBpbXBvcnRlZCBpbiBhbnkgcGFnZSB5b3Ugd2FudCB0byBoYXZlIHRoZSBUcmFkaW5nIFBhcmFtcyBhdCB0aGUgYm90dG9tXG4vL1Byb3ZpZGVzIHRoZSBiYXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXG4vL0FsbCBjb21wb25lbnRzIGluIHRoZSBUcmFkaW5nIHBhcmFtcyB3aWxsIGVpdGhlciBiZWdpbiB3aXRoIE9wZW4gb3IgQ2xvc2VkIHdoaWNoIHJlZmVuY2VzIHRoZSBvcGVuIGFuZCBjbG9zZWQgc3RhdGVcblxuLy9UaGVzZSBhcmUgdGhlIGNvbXBvbmVudHMgZm9yIHRoZSBjbG9zZWQgc3RhdGVcbmltcG9ydCBDbG9zZWRGaWx0ZXJCYXIgZnJvbSBcIi4vQ2xvc2VkRmlsdGVyQmFyXCI7XG5cbi8vVGhlc2UgYXJlIHRoZSBjb21wb25lbnRzIGZvciB0aGUgb3BlbiBzdGF0ZVxuaW1wb3J0IE9wZW5GaWx0ZXJCeVR5cGUgZnJvbSBcIi4vT3BlbkZpbHRlckJ5VHlwZVwiO1xuaW1wb3J0IE9wZW5Db3VudHJ5U2VsZWN0b3IgZnJvbSBcIi4vT3BlbkNvdW50cnlTZWxlY3RvclwiO1xuaW1wb3J0IE9wZW5GaWx0ZXJTZWxlY3RvcnMgZnJvbSBcIi4vT3BlbkZpbHRlclNlbGVjdG9yc1wiO1xuaW1wb3J0IE9wZW5SYW5nZVNsaWRlciBmcm9tIFwiLi9PcGVuUmFuZ2VTbGlkZXJcIjtcblxuY29uc3QgVHJhZGluZ1BhcmFtc0JvdHRvbUJhciA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuSGFuZGxlciA9ICgpID0+IHNldE9wZW4odHJ1ZSk7XG4gIGNvbnN0IGNsb3NlSGFuZGxlciA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgeyFvcGVuICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5IYW5kbGVyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICBib3R0b206IDUsXG4gICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAtIDMwMHB4KWAsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogXCI2MDBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2VkRmlsdGVyQmFyIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXtjbG9zZUhhbmRsZXJ9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGJvdHRvbTogNSxcbiAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gMzAwcHgpYCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgIHB4OiAzLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjU3MHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8T3BlbkZpbHRlckJ5VHlwZSAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxPcGVuQ291bnRyeVNlbGVjdG9yIC8+XG4gICAgICAgICAgICA8R3JpZCB4cz17Nn0gaXRlbT5cbiAgICAgICAgICAgICAgPE9wZW5GaWx0ZXJTZWxlY3RvcnMgLz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UmFuZ2VzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8T3BlblJhbmdlU2xpZGVyIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIG1iOiAyIH19PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjbG9zZUhhbmRsZXJ9IGNvbG9yPVwiZXJyb3JcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICAgIENMRUFSXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gc3g9e3sgbWw6IDIgfX0gdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgICBHRU5FUkFURVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhZGluZ1BhcmFtc0JvdHRvbUJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCdXR0b24iLCJDbG9zZWRGaWx0ZXJCYXIiLCJPcGVuRmlsdGVyQnlUeXBlIiwiT3BlbkNvdW50cnlTZWxlY3RvciIsIk9wZW5GaWx0ZXJTZWxlY3RvcnMiLCJPcGVuUmFuZ2VTbGlkZXIiLCJUcmFkaW5nUGFyYW1zQm90dG9tQmFyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm9wZW5IYW5kbGVyIiwiY2xvc2VIYW5kbGVyIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwic3giLCJiZ2NvbG9yIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiYm9yZGVyIiwibWluV2lkdGgiLCJvbkNsb3NlIiwicHgiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJjb250YWluZXIiLCJ4cyIsIml0ZW0iLCJ2YXJpYW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJjb2xvciIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BottomFilterComponents/TradingParamsBottomBar.tsx\n");

/***/ })

});