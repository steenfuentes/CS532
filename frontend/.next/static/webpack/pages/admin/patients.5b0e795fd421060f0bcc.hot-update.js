"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/patients",{

/***/ "./src/pages/admin/patients.js":
/*!*************************************!*\
  !*** ./src/pages/admin/patients.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _layouts_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Admin */ \"./src/layouts/Admin.js\");\n/* harmony import */ var _components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Grid/GridItem */ \"./src/components/Grid/GridItem.js\");\n/* harmony import */ var _components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Grid/GridContainer */ \"./src/components/Grid/GridContainer.js\");\n/* harmony import */ var _components_Card_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Card/CardHeader */ \"./src/components/Card/CardHeader.js\");\n/* harmony import */ var _components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card/CardBody */ \"./src/components/Card/CardBody.js\");\n/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Table/Table */ \"./src/components/Table/Table.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Card/Card */ \"./src/components/Card/Card.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _assets_styling_views_dashboardStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/styling/views/dashboardStyle.js */ \"./src/assets/styling/views/dashboardStyle.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/ts/Desktop/JS/reactPractice/CS532/frontend/src/pages/admin/patients.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Patient() {\n  _s();\n\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(_assets_styling_views_dashboardStyle_js__WEBPACK_IMPORTED_MODULE_8__.default);\n  var classes = useStyles();\n  var current = new Date();\n  var dateNow = \"\".concat(current.getMonth() + 1, \"/\").concat(current.getDate(), \"/\").concat(current.getFullYear());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n      variant: \"h4\",\n      children: \"Electronic Patient Record\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Card_CardHeader__WEBPACK_IMPORTED_MODULE_4__.default, {\n          color: \"warning\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"h4\", {\n            className: classes.cardTitleWhite,\n            children: \"View Patients\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"p\", {\n            className: classes.cardCategoryWhite,\n            children: [\"Active patients as of \", dateNow]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5__.default, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Table_Table__WEBPACK_IMPORTED_MODULE_6__.default, {\n            tableHeaderColor: \"warning\",\n            tableHead: [\"ID\", \"Name\", \"Insurance\", \"Physician\"],\n            tableData: [[\"1\", \"Dakota Rice\", \"EPO\", \"Dr. Frankenstein\"], [\"2\", \"Minerva Hooper\", \"HMO\", \"Dr. Drew\"], [\"3\", \"Sage Rodriguez\", \"PPO\", \"Dr. Frankenstein\"], [\"4\", \"Philip Chaney\", \"EPO\", \"Dr. Frankenstein\"]]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Patient, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Patient;\nPatient.layout = _layouts_Admin__WEBPACK_IMPORTED_MODULE_1__.default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Patient);\n\nvar _c;\n\n$RefreshReg$(_c, \"Patient\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRtaW4vcGF0aWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNXLE9BQVQsR0FBbUI7QUFBQTs7QUFDZixNQUFNQyxTQUFTLEdBQUdYLHFFQUFVLENBQUNTLDRFQUFELENBQTVCO0FBQ0EsTUFBTUcsT0FBTyxHQUFHRCxTQUFTLEVBQXpCO0FBRUEsTUFBTUUsT0FBTyxHQUFHLElBQUlDLElBQUosRUFBaEI7QUFDQSxNQUFNQyxPQUFPLGFBQU1GLE9BQU8sQ0FBQ0csUUFBUixLQUFxQixDQUEzQixjQUFnQ0gsT0FBTyxDQUFDSSxPQUFSLEVBQWhDLGNBQXFESixPQUFPLENBQUNLLFdBQVIsRUFBckQsQ0FBYjtBQUVBLHNCQUNJLDhEQUFDLG1FQUFEO0FBQUEsNEJBQ0ksOERBQUMsc0RBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLDhEQUFEO0FBQVUsUUFBRSxFQUFFLEVBQWQ7QUFBa0IsUUFBRSxFQUFFLEVBQXRCO0FBQTBCLFFBQUUsRUFBRSxFQUE5QjtBQUFBLDZCQUNJLDhEQUFDLDBEQUFEO0FBQUEsZ0NBQ0ksOERBQUMsZ0VBQUQ7QUFBWSxlQUFLLEVBQUMsU0FBbEI7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUVOLE9BQU8sQ0FBQ08sY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUVQLE9BQU8sQ0FBQ1EsaUJBQXRCO0FBQUEsaURBQzJCTCxPQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBT0ksOERBQUMsOERBQUQ7QUFBQSxpQ0FDSSw4REFBQyw0REFBRDtBQUNJLDRCQUFnQixFQUFDLFNBRHJCO0FBRUkscUJBQVMsRUFBRSxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsV0FBZixFQUE0QixXQUE1QixDQUZmO0FBR0kscUJBQVMsRUFBRSxDQUNQLENBQUMsR0FBRCxFQUFNLGFBQU4sRUFBcUIsS0FBckIsRUFBNEIsa0JBQTVCLENBRE8sRUFFUCxDQUFDLEdBQUQsRUFBTSxnQkFBTixFQUF3QixLQUF4QixFQUErQixVQUEvQixDQUZPLEVBR1AsQ0FBQyxHQUFELEVBQU0sZ0JBQU4sRUFBd0IsS0FBeEIsRUFBK0Isa0JBQS9CLENBSE8sRUFJUCxDQUFDLEdBQUQsRUFBTSxlQUFOLEVBQXVCLEtBQXZCLEVBQThCLGtCQUE5QixDQUpPO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztHQWxDUUw7VUFFV0M7OztLQUZYRDtBQW9DVEEsT0FBTyxDQUFDVyxNQUFSLEdBQWlCcEIsbURBQWpCO0FBQ0EsK0RBQWVTLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkbWluL3BhdGllbnRzLmpzPzhjMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uL2xheW91dHMvQWRtaW4nO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW1cIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lclwiO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9UYWJsZSdcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9zdHlsaW5nL3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzXCI7XG5cblxuZnVuY3Rpb24gUGF0aWVudCgpIHtcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlO1xuICAgIGNvbnN0IGRhdGVOb3cgPSBgJHtjdXJyZW50LmdldE1vbnRoKCkgKyAxfS8ke2N1cnJlbnQuZ2V0RGF0ZSgpfS8ke2N1cnJlbnQuZ2V0RnVsbFllYXIoKX1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWRDb250YWluZXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5FbGVjdHJvbmljIFBhdGllbnQgUmVjb3JkPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRpdGxlV2hpdGV9PlZpZXcgUGF0aWVudHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDYXRlZ29yeVdoaXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmUgcGF0aWVudHMgYXMgb2Yge2RhdGVOb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJDb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSGVhZD17W1wiSURcIiwgXCJOYW1lXCIsIFwiSW5zdXJhbmNlXCIsIFwiUGh5c2ljaWFuXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCIxXCIsIFwiRGFrb3RhIFJpY2VcIiwgXCJFUE9cIiwgXCJEci4gRnJhbmtlbnN0ZWluXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCIyXCIsIFwiTWluZXJ2YSBIb29wZXJcIiwgXCJITU9cIiwgXCJEci4gRHJld1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiM1wiLCBcIlNhZ2UgUm9kcmlndWV6XCIsIFwiUFBPXCIsIFwiRHIuIEZyYW5rZW5zdGVpblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiNFwiLCBcIlBoaWxpcCBDaGFuZXlcIiwgXCJFUE9cIiwgXCJEci4gRnJhbmtlbnN0ZWluXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApXG59XG5cblBhdGllbnQubGF5b3V0ID0gQWRtaW47XG5leHBvcnQgZGVmYXVsdCBQYXRpZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1ha2VTdHlsZXMiLCJBZG1pbiIsIkdyaWRJdGVtIiwiR3JpZENvbnRhaW5lciIsIkNhcmRIZWFkZXIiLCJDYXJkQm9keSIsIlRhYmxlIiwiQ2FyZCIsIlR5cG9ncmFwaHkiLCJzdHlsZXMiLCJQYXRpZW50IiwidXNlU3R5bGVzIiwiY2xhc3NlcyIsImN1cnJlbnQiLCJEYXRlIiwiZGF0ZU5vdyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiY2FyZFRpdGxlV2hpdGUiLCJjYXJkQ2F0ZWdvcnlXaGl0ZSIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/admin/patients.js\n");

/***/ })

});