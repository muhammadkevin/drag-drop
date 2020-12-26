webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([{\n    id: 1,\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"in progress\"\n  }, {\n    id: 2,\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    id: 3,\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    e.preventDefault();\n    var id = e.dataTransfer.getData('id');\n    setStateTask(stateTask.map(function (state) {\n      return state.id == id ? _objectSpread(_objectSpread({}, state), {}, {\n        status: param\n      }) : state;\n    }));\n  };\n\n  var handleDragStart = function handleDragStart(e, param) {\n    console.log(\"PAaram drag\", param);\n    e.dataTransfer.setData('id', param);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"wait\");\n              },\n              children: stateTask.filter(function (state) {\n                return state.status == 'wait';\n              }).map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.id);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 69,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"in progress\");\n              },\n              children: stateTask.filter(function (state) {\n                return state.status == 'in progress';\n              }).map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.id);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"1JR+rRKY6tFvbw9BIHNLqXBEf/U=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJzdGF0ZVRhc2siLCJzZXRTdGF0ZVRhc2siLCJoYW5kbGVEcmFnSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJwYXJhbSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJtYXAiLCJzdGF0ZSIsImhhbmRsZURyYWdTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwiZmlsdGVyIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLENBQ3ZDO0FBQ0lDLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxRQUZYO0FBR0lDLGVBQVcsRUFBRSxtQkFIakI7QUFJSUMsVUFBTSxFQUFFO0FBSlosR0FEdUMsRUFPdkM7QUFDSUgsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLFFBRlg7QUFHSUMsZUFBVyxFQUFFLG1CQUhqQjtBQUlJQyxVQUFNLEVBQUU7QUFKWixHQVB1QyxFQWF2QztBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsUUFGWDtBQUdJQyxlQUFXLEVBQUUscUJBSGpCO0FBSUlDLFVBQU0sRUFBRTtBQUpaLEdBYnVDLENBQUQsQ0FGM0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFR0MsWUFGSDs7QUF1QmYsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsQ0FBRCxFQUFJRyxLQUFKLEVB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K0NJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0k7QUFBSSx1QkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFpRUgsQ0F2R0Q7O0dBQU1GLEk7O0tBQUFBLEk7QUF5R1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzdGF0ZVRhc2ssIHNldFN0YXRlVGFza10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgSW5kZXggUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImluIHByb2dyZXNzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNyZWF0ZSBMb2dpbiBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgTGFuZGluZyBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdJdGVtID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpZCcpO1xuICAgICAgICBzZXRTdGF0ZVRhc2soc3RhdGVUYXNrLm1hcChzdGF0ZSA9PiAoc3RhdGUuaWQgPT0gaWQgPyB7Li4uc3RhdGUsIHN0YXR1czogcGFyYW19OiBzdGF0ZSkgKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQQWFyYW0gZHJhZ2AsIHBhcmFtKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRyeSBEcmFnICZhbXA7IERyb3A8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHAtMiBtYi0yIHRleHQtd2hpdGUgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxlYXJuIERyYWcgJmFtcDsgRHJvcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5MaXN0IFRhc2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSwgXCJ3YWl0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlVGFzay5maWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZS5zdGF0dXMgPT0gJ3dhaXQnKS5tYXAoKGR0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKT0+aGFuZGxlRHJhZ1N0YXJ0KGUsIGR0LmlkKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBwLTMgYmctd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5UaXRsZSA6IHtkdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbXktMVwiPkRlc2NyaXB0aW9uIDoge2R0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBteS0xXCI+c3RhdHVzIDoge2R0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5JbiBQcm9ncmVzczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpPT5oYW5kbGVEcm9wKGUsIFwiaW4gcHJvZ3Jlc3NcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVUYXNrLmZpbHRlcigoc3RhdGUpID0+IHN0YXRlLnN0YXR1cyA9PSAnaW4gcHJvZ3Jlc3MnKS5tYXAoKGR0KT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSk9PmhhbmRsZURyYWdTdGFydChlLCBkdC5pZCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0zIGJnLXdoaXRlIGN1cnNvci1wb2ludGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZHQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+VGl0bGUgOiB7ZHQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG15LTFcIj5EZXNjcmlwdGlvbiA6IHtkdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXktMVwiPnN0YXR1cyA6IHtkdC5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNDAwIGgtZnVsbCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtMiBtYi0yXCI+Q29tcGxldGVkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})