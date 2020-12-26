webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    id: 1,\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"in progress\"\n  }, {\n    id: 2,\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    id: 3,\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    e.preventDefault();\n    var id = e.dataTransfer.getData('id');\n    var index = stateTask.findIndex(function (c) {\n      return c.id == id;\n    });\n    console.log(stateTask); // // setStateTask([...stateTask, task]);\n    // console.log(task);\n  };\n\n  var handleDragStart = function handleDragStart(e, param) {\n    console.log(\"PAaram drag\", param);\n    e.dataTransfer.setData('id', param);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"wait\");\n              },\n              children: stateTask.map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.id);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"complete\");\n              },\n              children: stateTask.map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 95,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 96,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"1JR+rRKY6tFvbw9BIHNLqXBEf/U=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJzdGF0ZVRhc2siLCJzZXRTdGF0ZVRhc2siLCJoYW5kbGVEcmFnSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJwYXJhbSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJpbmRleCIsImZpbmRJbmRleCIsImMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJhZ1N0YXJ0Iiwic2V0RGF0YSIsIm1hcCIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUVtQkMsc0RBQVEsQ0FBQyxDQUN2QztBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsUUFGWDtBQUdJQyxlQUFXLEVBQUUsbUJBSGpCO0FBSUlDLFVBQU0sRUFBRTtBQUpaLEdBRHVDLEVBT3ZDO0FBQ0lILE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxRQUZYO0FBR0lDLGVBQVcsRUFBRSxtQkFIakI7QUFJSUMsVUFBTSxFQUFFO0FBSlosR0FQdUMsRUFhdkM7QUFDSUgsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLFFBRlg7QUFHSUMsZUFBVyxFQUFFLHFCQUhqQjtBQUlJQyxVQUFNLEVBQUU7QUFKWixHQWJ1QyxDQUFELENBRjNCO0FBQUEsTUFFUkMsU0FGUTtBQUFBLE1BRUdDLFlBRkg7O0FBdUJmLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLENBQUQsRUFBSUcsS0FBSixF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QUFBLGlCQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBaUVILENBMUdEOztHQUFNRixJOztLQUFBQSxJO0FBNEdTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGVUYXNrLCBzZXRTdGF0ZVRhc2tdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiY3JlYXRlIEluZGV4IFBhZ2VcIixcbiAgICAgICAgICAgIHN0YXR1czogXCJpbiBwcm9ncmVzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgTG9naW4gUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiY3JlYXRlIExhbmRpbmcgUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9XG4gICAgXSk7XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChlLCBwYXJhbSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnaWQnKTtcbiAgICAgICAgbGV0IGluZGV4ID0gc3RhdGVUYXNrLmZpbmRJbmRleCgoKGMpPT5jLmlkID09IGlkKSk7ICBcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGVUYXNrKTtcbiAgICAgICAgLy8gLy8gc2V0U3RhdGVUYXNrKFsuLi5zdGF0ZVRhc2ssIHRhc2tdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQQWFyYW0gZHJhZ2AsIHBhcmFtKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRyeSBEcmFnICZhbXA7IERyb3A8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHAtMiBtYi0yIHRleHQtd2hpdGUgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxlYXJuIERyYWcgJmFtcDsgRHJvcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5MaXN0IFRhc2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSwgXCJ3YWl0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlVGFzay5tYXAoKGR0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKT0+aGFuZGxlRHJhZ1N0YXJ0KGUsIGR0LmlkKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBwLTMgYmctd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5UaXRsZSA6IHtkdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbXktMVwiPkRlc2NyaXB0aW9uIDoge2R0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBteS0xXCI+c3RhdHVzIDoge2R0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5JbiBQcm9ncmVzczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpPT5oYW5kbGVEcm9wKGUsIFwiY29tcGxldGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVUYXNrLm1hcCgoZHQpPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKT0+aGFuZGxlRHJhZ1N0YXJ0KGUsIGR0LnRpdGxlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBwLTMgYmctd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5UaXRsZSA6IHtkdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbXktMVwiPkRlc2NyaXB0aW9uIDoge2R0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBteS0xXCI+c3RhdHVzIDoge2R0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5Db21wbGV0ZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})