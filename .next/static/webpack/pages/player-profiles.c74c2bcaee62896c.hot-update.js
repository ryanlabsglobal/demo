"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player-profiles",{

/***/ "./components/Navigation/Navigation.tsx":
/*!**********************************************!*\
  !*** ./components/Navigation/Navigation.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/UserContext */ \"./store/UserContext.ts\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n/* harmony import */ var _TopBarNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBarNav */ \"./components/Navigation/TopBarNav.tsx\");\n/* harmony import */ var _ProfileAndTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileAndTitle */ \"./components/Navigation/ProfileAndTitle.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar drawerWidth = 260;\nvar Navigation = function(props) {\n    _s();\n    var ref = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_store_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), dashboards = ref.dashboards, setDashboards = ref.setDashboards;\n    var ShowDashboardHandler = function() {\n        return setDashboards(!dashboards);\n    };\n    var active;\n    if (dashboards === true) {\n        active = {\n            bgcolor: \"rgba(0, 0, 0, 0.6)\",\n            \"&:hover\": {\n                bgcolor: \"rgba(0, 0, 0, 0.55)\"\n            }\n        };\n    }\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopBarNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    \"& .MuiDrawer-paper\": {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        borderRadius: \"0px\"\n                    }\n                },\n                variant: \"permanent\",\n                anchor: \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileAndTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                button: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    primary: \"SETTINGS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                button: true,\n                                sx: active,\n                                onClick: ShowDashboardHandler,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    primary: \"DASHBOARDS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            dashboards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    sx: {\n                                        bgcolor: \"rgba(0, 0, 0, 0.4)\",\n                                        \"&:hover\": {\n                                            bgcolor: \"rgba(0, 0, 0, 0.35)\"\n                                        }\n                                    },\n                                    button: true,\n                                    onClick: function() {\n                                        return router.push(\"/business-intelligence\");\n                                    },\n                                    children: [\n                                        router.pathname === \"/business-intelligence\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            fontSize: \"small\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            primary: \"BUSINESS INTELLIGENCE\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this),\n                            dashboards && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    sx: {\n                                        bgcolor: \"rgba(0, 0, 0, 0.4)\",\n                                        \"&:hover\": {\n                                            bgcolor: \"rgba(0, 0, 0, 0.35)\"\n                                        }\n                                    },\n                                    button: true,\n                                    onClick: function() {\n                                        return router.push(\"/player-profiles\");\n                                    },\n                                    children: [\n                                        router.pathname === \"/player-profiles\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            fontSize: \"small\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            primary: \"PLAYER PROFILES\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    bgcolor: \"background.default\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this),\n                    props.children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryanslater/sites/demo/components/Navigation/Navigation.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navigation, \"WITfuFD7vBrLqLW9yFdBdZPbKXs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFDZ0I7QUFDUjtBQUNGO0FBQ0o7QUFDUTtBQUNRO0FBQ1Y7QUFFSjtBQUNVO0FBQ29CO0FBRWxDO0FBQ1k7OztBQUUvQyxHQUFLLENBQUNjLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLEdBQUssQ0FBQ0MsVUFBVSxHQUFhLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQ3ZDLEdBQUssQ0FBaUNoQixHQUE2QixHQUE3QkEsdURBQWdCLENBQUNVLDBEQUFXLEdBQTFEUSxVQUFVLEdBQW9CbEIsR0FBNkIsQ0FBM0RrQixVQUFVLEVBQUVDLGFBQWEsR0FBS25CLEdBQTZCLENBQS9DbUIsYUFBYTtJQUNqQyxHQUFLLENBQUNDLG9CQUFvQixHQUFHLFFBQVE7UUFBRkQsTUFBTSxDQUFOQSxhQUFhLEVBQUVELFVBQVU7O0lBQzVELEdBQUcsQ0FBQ0csTUFBTTtJQUNWLEVBQUUsRUFBRUgsVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hCRyxNQUFNLEdBQUcsQ0FBQztZQUNSQyxPQUFPLEVBQUUsQ0FBb0I7WUFDN0IsQ0FBUyxVQUFFLENBQUM7Z0JBQUNBLE9BQU8sRUFBRSxDQUFxQjtZQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFDRCxHQUFLLENBQUNDLE1BQU0sR0FBR2Qsc0RBQVM7SUFDeEIsTUFBTSw2RUFDSFIseURBQUc7UUFBQ3VCLEVBQUUsRUFBRSxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFNO1FBQUMsQ0FBQzs7d0ZBQ3pCdkIsaUVBQVc7Ozs7O3dGQUNYVSxrREFBUzs7Ozs7d0ZBQ1RSLDREQUFNO2dCQUNMb0IsRUFBRSxFQUFFLENBQUM7b0JBQ0hFLEtBQUssRUFBRVosV0FBVztvQkFDbEJhLFVBQVUsRUFBRSxDQUFDO29CQUNiLENBQW9CLHFCQUFFLENBQUM7d0JBQ3JCRCxLQUFLLEVBQUVaLFdBQVc7d0JBQ2xCYyxTQUFTLEVBQUUsQ0FBWTt3QkFDdkJDLFlBQVksRUFBRSxDQUFLO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBQ0RDLE9BQU8sRUFBQyxDQUFXO2dCQUNuQkMsTUFBTSxFQUFDLENBQU07O2dHQUVadkIsNkRBQU87Ozs7O2dHQUNQSCwyREFBSTs7d0dBQ0ZRLHdEQUFlOzs7Ozt3R0FDZlAsK0RBQVE7Z0NBQUMwQixNQUFNO3NIQUNiekIsbUVBQVk7b0NBQUMwQixPQUFPLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7d0dBRWpDOUIsOERBQU87Ozs7O3dHQUNQRywrREFBUTtnQ0FBQzBCLE1BQU07Z0NBQUNSLEVBQUUsRUFBRUgsTUFBTTtnQ0FBRWEsT0FBTyxFQUFFZCxvQkFBb0I7c0hBQ3ZEYixtRUFBWTtvQ0FBQzBCLE9BQU8sRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs0QkFHbkNmLFVBQVUsZ0ZBQ1JsQix1REFBYztzSEFDWk0sK0RBQVE7b0NBQ1BrQixFQUFFLEVBQUUsQ0FBQzt3Q0FDSEYsT0FBTyxFQUFFLENBQW9CO3dDQUM3QixDQUFTLFVBQUUsQ0FBQzs0Q0FBQ0EsT0FBTyxFQUFFLENBQXFCO3dDQUFDLENBQUM7b0NBQy9DLENBQUM7b0NBQ0RVLE1BQU07b0NBQ05FLE9BQU8sRUFBRSxRQUFRO3dDQUFGWCxNQUFNLENBQU5BLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLENBQXdCOzs7d0NBRWxEYixNQUFNLENBQUNjLFFBQVEsS0FBSyxDQUF3Qix1R0FDMUMxQiw0RUFBbUI7NENBQUMyQixRQUFRLEVBQUMsQ0FBTzs7Ozs7O29IQUV0Qy9CLG1FQUFZOzRDQUFDMEIsT0FBTyxFQUFDLENBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJbERmLFVBQVUsZ0ZBQ1JsQix1REFBYztzSEFDWk0sK0RBQVE7b0NBQ1BrQixFQUFFLEVBQUUsQ0FBQzt3Q0FDSEYsT0FBTyxFQUFFLENBQW9CO3dDQUM3QixDQUFTLFVBQUUsQ0FBQzs0Q0FBQ0EsT0FBTyxFQUFFLENBQXFCO3dDQUFDLENBQUM7b0NBQy9DLENBQUM7b0NBQ0RVLE1BQU07b0NBQ05FLE9BQU8sRUFBRSxRQUFRO3dDQUFGWCxNQUFNLENBQU5BLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLENBQWtCOzs7d0NBRTVDYixNQUFNLENBQUNjLFFBQVEsS0FBSyxDQUFrQixpR0FDcEMxQiw0RUFBbUI7NENBQUMyQixRQUFRLEVBQUMsQ0FBTzs7Ozs7O29IQUV0Qy9CLG1FQUFZOzRDQUFDMEIsT0FBTyxFQUFDLENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFNaERoQyx5REFBRztnQkFBQ3NDLFNBQVMsRUFBQyxDQUFNO2dCQUFDZixFQUFFLEVBQUUsQ0FBQztvQkFBQ2dCLFFBQVEsRUFBRSxDQUFDO29CQUFFbEIsT0FBTyxFQUFFLENBQW9CO2dCQUFDLENBQUM7O2dHQUNyRWQsNkRBQU87Ozs7O29CQUNQUSxLQUFLLENBQUN5QixRQUFROzs7Ozs7Ozs7Ozs7O0FBSXZCLENBQUM7R0FqRksxQixVQUFVOztRQVVDTixrREFBUzs7O0tBVnBCTSxVQUFVO0FBbUZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeD8yZDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRHJhd2VyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vLi4vc3RvcmUvVXNlckNvbnRleHRcIjtcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIjtcbmltcG9ydCBUb3BCYXJOYXYgZnJvbSBcIi4vVG9wQmFyTmF2XCI7XG5pbXBvcnQgUHJvZmlsZUFuZFRpdGxlIGZyb20gXCIuL1Byb2ZpbGVBbmRUaXRsZVwiO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcbmNvbnN0IE5hdmlnYXRpb246IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGFzaGJvYXJkcywgc2V0RGFzaGJvYXJkcyB9ID0gUmVhY3QudXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IFNob3dEYXNoYm9hcmRIYW5kbGVyID0gKCkgPT4gc2V0RGFzaGJvYXJkcyghZGFzaGJvYXJkcyk7XG4gIGxldCBhY3RpdmU7XG4gIGlmIChkYXNoYm9hcmRzID09PSB0cnVlKSB7XG4gICAgYWN0aXZlID0ge1xuICAgICAgYmdjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7IGJnY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjU1KVwiIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8VG9wQmFyTmF2IC8+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgXCImIC5NdWlEcmF3ZXItcGFwZXJcIjoge1xuICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgYW5jaG9yPVwibGVmdFwiXG4gICAgICA+XG4gICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIDxQcm9maWxlQW5kVGl0bGUgLz5cbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU0VUVElOR1NcIiAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIHN4PXthY3RpdmV9IG9uQ2xpY2s9e1Nob3dEYXNoYm9hcmRIYW5kbGVyfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRBU0hCT0FSRFNcIiAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICB7ZGFzaGJvYXJkcyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHsgYmdjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMzUpXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2J1c2luZXNzLWludGVsbGlnZW5jZVwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2J1c2luZXNzLWludGVsbGlnZW5jZVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQlVTSU5FU1MgSU5URUxMSUdFTkNFXCIgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZGFzaGJvYXJkcyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHsgYmdjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMzUpXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BsYXllci1wcm9maWxlc1wiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BsYXllci1wcm9maWxlc1wiICYmIChcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUExBWUVSIFBST0ZJTEVTXCIgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cIm1haW5cIiBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLmRlZmF1bHRcIiB9fT5cbiAgICAgICAgPFRvb2xiYXIgLz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQ3NzQmFzZWxpbmUiLCJEaXZpZGVyIiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiVG9vbGJhciIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiQXJyb3dGb3J3YXJkSW9zSWNvbiIsIlRvcEJhck5hdiIsIlByb2ZpbGVBbmRUaXRsZSIsImRyYXdlcldpZHRoIiwiTmF2aWdhdGlvbiIsInByb3BzIiwidXNlQ29udGV4dCIsImRhc2hib2FyZHMiLCJzZXREYXNoYm9hcmRzIiwiU2hvd0Rhc2hib2FyZEhhbmRsZXIiLCJhY3RpdmUiLCJiZ2NvbG9yIiwicm91dGVyIiwic3giLCJkaXNwbGF5Iiwid2lkdGgiLCJmbGV4U2hyaW5rIiwiYm94U2l6aW5nIiwiYm9yZGVyUmFkaXVzIiwidmFyaWFudCIsImFuY2hvciIsImJ1dHRvbiIsInByaW1hcnkiLCJvbkNsaWNrIiwiRnJhZ21lbnQiLCJwdXNoIiwicGF0aG5hbWUiLCJmb250U2l6ZSIsImNvbXBvbmVudCIsImZsZXhHcm93IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/Navigation.tsx\n");

/***/ })

});