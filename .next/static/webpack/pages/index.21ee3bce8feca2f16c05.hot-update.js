webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    id: 1,\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"in progress\"\n  }, {\n    id: 2,\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    id: 3,\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    var id = e.dataTransfer.getData('id'); // const task = data.filter((ts) => {\n    //     if(ts.name == id){\n    //         ts.status = param;\n    //     }\n    //     return task;\n    // })\n  };\n\n  var handleDragStart = function handleDragStart(e, id) {\n    console.log(\"PAaram drag\", id);\n    e.dataTransfer.setData('id', id);\n    console.log(e.dataTransfer.getData('id'));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"complete\");\n              },\n              children: stateTask.filter(function (task) {\n                return task.status == 'wait';\n              }).map(function (dt, i) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 41\n                  }, _this)]\n                }, i, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 64,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"1JR+rRKY6tFvbw9BIHNLqXBEf/U=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJzdGF0ZVRhc2siLCJzZXRTdGF0ZVRhc2siLCJoYW5kbGVEcmFnSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJwYXJhbSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJoYW5kbGVEcmFnU3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0YSIsImZpbHRlciIsInRhc2siLCJtYXAiLCJkdCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLENBQ3ZDO0FBQ0lDLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxRQUZYO0FBR0lDLGVBQVcsRUFBRSxtQkFIakI7QUFJSUMsVUFBTSxFQUFFO0FBSlosR0FEdUMsRUFPdkM7QUFDSUgsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLFFBRlg7QUFHSUMsZUFBVyxFQUFFLG1CQUhqQjtBQUlJQyxVQUFNLEVBQUU7QUFKWixHQVB1QyxFQWF2QztBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsUUFGWDtBQUdJQyxlQUFXLEVBQUUscUJBSGpCO0FBSUlDLFVBQU0sRUFBRTtBQUpaLEdBYnVDLENBQUQsQ0FGM0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFR0MsWUFGSDs7QUF1QmYsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsQ0FBRCxFQUFJRyxLQUFKLEVBQWM7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QSxpQkFwQkosZUEwQkk7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQTRDSCxDQXhGRDs7R0FBTXZCLEk7O0tBQUFBLEk7QUEwRlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzdGF0ZVRhc2ssIHNldFN0YXRlVGFza10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgSW5kZXggUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImluIHByb2dyZXNzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNyZWF0ZSBMb2dpbiBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgTGFuZGluZyBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdJdGVtID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnaWQnKTtcblxuICAgICAgICAvLyBjb25zdCB0YXNrID0gZGF0YS5maWx0ZXIoKHRzKSA9PiB7XG4gICAgICAgIC8vICAgICBpZih0cy5uYW1lID09IGlkKXtcbiAgICAgICAgLy8gICAgICAgICB0cy5zdGF0dXMgPSBwYXJhbTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybiB0YXNrO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChlLCBpZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgUEFhcmFtIGRyYWdgLCBpZCk7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2lkJywgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpZCcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJ5IERyYWcgJmFtcDsgRHJvcDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHAtMiBtYi0yIHRleHQtd2hpdGUgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxlYXJuIERyYWcgJmFtcDsgRHJvcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5MaXN0IFRhc2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX0gb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSwgXCJjb21wbGV0ZVwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZVRhc2suZmlsdGVyKHRhc2s9PiB0YXNrLnN0YXR1cyA9PSAnd2FpdCcpLm1hcCgoZHQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpPT5oYW5kbGVEcmFnU3RhcnQoZSwgZHQudGl0bGUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBiZy13aGl0ZSBjdXJzb3ItcG9pbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+VGl0bGUgOiB7ZHQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG15LTFcIj5EZXNjcmlwdGlvbiA6IHtkdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXktMVwiPnN0YXR1cyA6IHtkdC5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNDAwIGgtZnVsbCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtMiBtYi0yXCI+SW4gUHJvZ3Jlc3M8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5Db21wbGV0ZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})