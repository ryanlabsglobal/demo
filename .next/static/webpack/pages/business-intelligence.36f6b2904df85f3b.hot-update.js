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

/***/ "./components/Navigation/TopBarNav.tsx":
/*!*********************************************!*\
  !*** ./components/Navigation/TopBarNav.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Notifications */ \"./node_modules/@mui/icons-material/Notifications.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/InputAdornment */ \"./node_modules/@mui/material/InputAdornment/index.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _AlertsModalComponents_AlertModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AlertsModalComponents/AlertModal */ \"./components/AlertsModalComponents/AlertModal.tsx\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NotificationDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NotificationDropDown */ \"./components/Navigation/NotificationDropDown.tsx\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//The main component for the navbar is Navigation.tsx\nvar drawerWidth = 260;\nvar TopBarNav = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), notification = ref[0], setNotification = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        position: \"fixed\",\n        sx: {\n            width: \"calc(100% - \".concat(drawerWidth, \"px)\"),\n            ml: \"\".concat(drawerWidth, \"px\"),\n            borderRadius: \"0px\",\n            bgcolor: \"background.paper\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    width: 60,\n                    height: 40,\n                    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                router.pathname === \"/business-intelligence\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        ml: 2\n                    },\n                    variant: \"h6\",\n                    noWrap: true,\n                    component: \"div\",\n                    children: \"Business Intelligence\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, _this),\n                router.pathname === \"/bet-stream\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        ml: 2\n                    },\n                    variant: \"h6\",\n                    noWrap: true,\n                    component: \"div\",\n                    children: \"Bet Stream\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, _this),\n                router.pathname === \"/player-profiles\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        ml: 2\n                    },\n                    variant: \"h6\",\n                    noWrap: true,\n                    component: \"div\",\n                    children: \"Player Profiles\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, _this),\n                router.pathname === \"/player-profiles/[id]\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        ml: 2\n                    },\n                    variant: \"h6\",\n                    noWrap: true,\n                    component: \"div\",\n                    children: \"Player Profiles\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, _this),\n                router.pathname === \"/player-profiles\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    sx: {\n                        mx: 2\n                    },\n                    placeholder: \"Search\",\n                    variant: \"filled\",\n                    InputProps: {\n                        startAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            position: \"start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this),\n                router.pathname === \"/player-profiles/[id]\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    sx: {\n                        mx: 2\n                    },\n                    placeholder: \"Search\",\n                    variant: \"filled\",\n                    InputProps: {\n                        startAdornment: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            position: \"start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    sx: {\n                        ml: \"auto\",\n                        mr: 3\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AlertsModalComponents_AlertModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                            onClick: function() {\n                                return setNotification(!notification);\n                            },\n                            color: \"primary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this),\n                        notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NotificationDropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ryanslater/sites/demo/components/Navigation/TopBarNav.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_s(TopBarNav, \"W+F179D+q8Xf7WkFVE6XlOerb1g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TopBarNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBarNav);\nvar _c;\n$RefreshReg$(_c, \"TopBarNav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vVG9wQmFyTmF2LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNnQjtBQUNOO0FBQ1E7QUFDTTtBQUNWO0FBQzBCO0FBQ2xCO0FBQ1U7QUFDTjtBQUNTO0FBQ3BCO0FBQ1Y7QUFDMkI7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxFQUFxRDtBQUVyRCxHQUFLLENBQUNlLFdBQVcsR0FBRyxHQUFHO0FBRXZCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7O0lBQ3ZCLEdBQUssQ0FBbUNoQixHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxPQUFyRGtCLFlBQVksR0FBcUJsQixHQUFxQixLQUF4Q21CLGVBQWUsR0FBSW5CLEdBQXFCO0lBQzdELEdBQUssQ0FBQ29CLE1BQU0sR0FBR2Ysc0RBQVM7SUFDeEIsTUFBTSw2RUFDSEosNERBQU07UUFDTG9CLFFBQVEsRUFBQyxDQUFPO1FBQ2hCQyxFQUFFLEVBQUUsQ0FBQztZQUNIQyxLQUFLLEVBQUcsQ0FBWSxjQUFjLE1BQUcsQ0FBZlIsV0FBVyxFQUFDLENBQUc7WUFDckNTLEVBQUUsRUFBRyxHQUFjLE1BQUUsQ0FBZFQsV0FBVyxFQUFDLENBQUU7WUFDckJVLFlBQVksRUFBRSxDQUFLO1lBQ25CQyxPQUFPLEVBQUUsQ0FBa0I7UUFDN0IsQ0FBQzs4RkFFQXZCLDZEQUFPOzs0RkFDTFMsbURBQUs7b0JBQUNXLEtBQUssRUFBRSxFQUFFO29CQUFFSSxNQUFNLEVBQUUsRUFBRTtvQkFBRUMsR0FBRyxFQUFFakIsd0RBQUk7Ozs7OztnQkFDdENTLE1BQU0sQ0FBQ1MsUUFBUSxLQUFLLENBQXdCLHVHQUMxQ3pCLGdFQUFVO29CQUFDa0IsRUFBRSxFQUFFLENBQUM7d0JBQUNFLEVBQUUsRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQUVNLE9BQU8sRUFBQyxDQUFJO29CQUFDQyxNQUFNO29CQUFDQyxTQUFTLEVBQUMsQ0FBSzs4QkFBQyxDQUUvRDs7Ozs7O2dCQUVEWixNQUFNLENBQUNTLFFBQVEsS0FBSyxDQUFhLDRGQUMvQnpCLGdFQUFVO29CQUFDa0IsRUFBRSxFQUFFLENBQUM7d0JBQUNFLEVBQUUsRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQUVNLE9BQU8sRUFBQyxDQUFJO29CQUFDQyxNQUFNO29CQUFDQyxTQUFTLEVBQUMsQ0FBSzs4QkFBQyxDQUUvRDs7Ozs7O2dCQUVEWixNQUFNLENBQUNTLFFBQVEsS0FBSyxDQUFrQixpR0FDcEN6QixnRUFBVTtvQkFBQ2tCLEVBQUUsRUFBRSxDQUFDO3dCQUFDRSxFQUFFLEVBQUUsQ0FBQztvQkFBQyxDQUFDO29CQUFFTSxPQUFPLEVBQUMsQ0FBSTtvQkFBQ0MsTUFBTTtvQkFBQ0MsU0FBUyxFQUFDLENBQUs7OEJBQUMsQ0FFL0Q7Ozs7OztnQkFFRFosTUFBTSxDQUFDUyxRQUFRLEtBQUssQ0FBdUIsc0dBQ3pDekIsZ0VBQVU7b0JBQUNrQixFQUFFLEVBQUUsQ0FBQzt3QkFBQ0UsRUFBRSxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFBRU0sT0FBTyxFQUFDLENBQUk7b0JBQUNDLE1BQU07b0JBQUNDLFNBQVMsRUFBQyxDQUFLOzhCQUFDLENBRS9EOzs7Ozs7Z0JBRURaLE1BQU0sQ0FBQ1MsUUFBUSxLQUFLLENBQWtCLGlHQUNwQ3RCLGdFQUFTO29CQUNSZSxFQUFFLEVBQUUsQ0FBQzt3QkFBQ1csRUFBRSxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFDYkMsV0FBVyxFQUFDLENBQVE7b0JBQ3BCSixPQUFPLEVBQUMsQ0FBUTtvQkFDaEJLLFVBQVUsRUFBRSxDQUFDO3dCQUNYQyxjQUFjLDhFQUNYNUIscUVBQWM7NEJBQUNhLFFBQVEsRUFBQyxDQUFPO2tIQUM3QlosbUVBQVU7O29CQUdqQixDQUFDOzs7Ozs7Z0JBR0pXLE1BQU0sQ0FBQ1MsUUFBUSxLQUFLLENBQXVCLHNHQUN6Q3RCLGdFQUFTO29CQUNSZSxFQUFFLEVBQUUsQ0FBQzt3QkFBQ1csRUFBRSxFQUFFLENBQUM7b0JBQUMsQ0FBQztvQkFDYkMsV0FBVyxFQUFDLENBQVE7b0JBQ3BCSixPQUFPLEVBQUMsQ0FBUTtvQkFDaEJLLFVBQVUsRUFBRSxDQUFDO3dCQUNYQyxjQUFjLDhFQUNYNUIscUVBQWM7NEJBQUNhLFFBQVEsRUFBQyxDQUFPO2tIQUM3QlosbUVBQVU7O29CQUdqQixDQUFDOzs7Ozs7NEZBR0pQLDBEQUFHO29CQUFDb0IsRUFBRSxFQUFFLENBQUM7d0JBQUNFLEVBQUUsRUFBRSxDQUFNO3dCQUFFYSxFQUFFLEVBQUUsQ0FBQztvQkFBQyxDQUFDOztvR0FDM0IzQix5RUFBVTs7Ozs7b0dBQ1ZJLGlFQUFVOzRCQUNUd0IsT0FBTyxFQUFFLFFBQVE7Z0NBQUZuQixNQUFNLENBQU5BLGVBQWUsRUFBRUQsWUFBWTs7NEJBQzVDcUIsS0FBSyxFQUFDLENBQVM7a0hBRWRqQywwRUFBaUI7Ozs7Ozs7Ozs7d0JBRW5CWSxZQUFZLGdGQUFLTCw2REFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQsQ0FBQztHQTVFS0csU0FBUzs7UUFFRVgsa0RBQVM7OztLQUZwQlcsU0FBUztBQThFZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9Ub3BCYXJOYXYudHN4P2I5NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0lucHV0QWRvcm5tZW50XCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2hcIjtcbmltcG9ydCBBbGVydE1vZGFsIGZyb20gXCIuLi9BbGVydHNNb2RhbENvbXBvbmVudHMvQWxlcnRNb2RhbFwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uRHJvcERvd24gZnJvbSBcIi4vTm90aWZpY2F0aW9uRHJvcERvd25cIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcblxuLy9UaGUgbWFpbiBjb21wb25lbnQgZm9yIHRoZSBuYXZiYXIgaXMgTmF2aWdhdGlvbi50c3hcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XG5cbmNvbnN0IFRvcEJhck5hdiA9ICgpID0+IHtcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICBzeD17e1xuICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcbiAgICAgICAgbWw6IGAke2RyYXdlcldpZHRofXB4YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgICAgICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxJbWFnZSB3aWR0aD17NjB9IGhlaWdodD17NDB9IHNyYz17bG9nb30gLz5cbiAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYnVzaW5lc3MtaW50ZWxsaWdlbmNlXCIgJiYgKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1sOiAyIH19IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIEJ1c2luZXNzIEludGVsbGlnZW5jZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKX1cbiAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYmV0LXN0cmVhbVwiICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtbDogMiB9fSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICBCZXQgU3RyZWFtXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9wbGF5ZXItcHJvZmlsZXNcIiAmJiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWw6IDIgfX0gdmFyaWFudD1cImg2XCIgbm9XcmFwIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgUGxheWVyIFByb2ZpbGVzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9wbGF5ZXItcHJvZmlsZXMvW2lkXVwiICYmIChcbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtbDogMiB9fSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICBQbGF5ZXIgUHJvZmlsZXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICl9XG4gICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BsYXllci1wcm9maWxlc1wiICYmIChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBzeD17eyBteDogMiB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcGxheWVyLXByb2ZpbGVzL1tpZF1cIiAmJiAoXG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgc3g9e3sgbXg6IDIgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxCb3ggc3g9e3sgbWw6IFwiYXV0b1wiLCBtcjogMyB9fT5cbiAgICAgICAgICA8QWxlcnRNb2RhbCAvPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROb3RpZmljYXRpb24oIW5vdGlmaWNhdGlvbil9XG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICB7bm90aWZpY2F0aW9uICYmIDxOb3RpZmljYXRpb25Ecm9wRG93biAvPn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJOYXY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsIk5vdGlmaWNhdGlvbnNJY29uIiwiVGV4dEZpZWxkIiwiSW5wdXRBZG9ybm1lbnQiLCJTZWFyY2hJY29uIiwiQWxlcnRNb2RhbCIsImxvZ28iLCJJbWFnZSIsIk5vdGlmaWNhdGlvbkRyb3BEb3duIiwiSWNvbkJ1dHRvbiIsImRyYXdlcldpZHRoIiwiVG9wQmFyTmF2IiwidXNlU3RhdGUiLCJub3RpZmljYXRpb24iLCJzZXROb3RpZmljYXRpb24iLCJyb3V0ZXIiLCJwb3NpdGlvbiIsInN4Iiwid2lkdGgiLCJtbCIsImJvcmRlclJhZGl1cyIsImJnY29sb3IiLCJoZWlnaHQiLCJzcmMiLCJwYXRobmFtZSIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJteCIsInBsYWNlaG9sZGVyIiwiSW5wdXRQcm9wcyIsInN0YXJ0QWRvcm5tZW50IiwibXIiLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/TopBarNav.tsx\n");

/***/ })

});