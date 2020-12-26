webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"wait\"\n  }, {\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    var id = e.dataTransfer.getData('id'); // const task = data.filter((ts) => {\n    //     if(ts.name == id){\n    //         ts.status = param;\n    //     }\n    //     return task;\n    // })\n  };\n\n  var handleDragStart = function handleDragStart(e, id) {\n    console.log(\"PAaram drag\", id);\n    e.dataTransfer.setData('id', id);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"complete\");\n              },\n              children: stateTask.filter(function (task) {\n                return task.status == 'wait';\n              }).map(function (dt, i) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 67,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 41\n                  }, _this)]\n                }, i, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"ptv2AIS8C2L8K6xOInPShAMWgvY=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwic3RhdGVUYXNrIiwic2V0U3RhdGVUYXNrIiwiaGFuZGxlRHJhZ0l0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcm9wIiwicGFyYW0iLCJpZCIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJoYW5kbGVEcmFnU3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0YSIsImZpbHRlciIsInRhc2siLCJtYXAiLCJkdCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLENBQ3ZDO0FBQ0lDLFNBQUssRUFBRSxRQURYO0FBRUlDLGVBQVcsRUFBRSxtQkFGakI7QUFHSUMsVUFBTSxFQUFFO0FBSFosR0FEdUMsRUFNdkM7QUFDSUYsU0FBSyxFQUFFLFFBRFg7QUFFSUMsZUFBVyxFQUFFLG1CQUZqQjtBQUdJQyxVQUFNLEVBQUU7QUFIWixHQU51QyxFQVd2QztBQUNJRixTQUFLLEVBQUUsUUFEWDtBQUVJQyxlQUFXLEVBQUUscUJBRmpCO0FBR0lDLFVBQU0sRUFBRTtBQUhaLEdBWHVDLENBQUQsQ0FGM0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFR0MsWUFGSDs7QUFvQmYsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsQ0FBRCxFQUFJRyxLQUFKLEVBQWM7QUFDN0IsUUFBTUMsRUFBRSxHQUFHSixDQUFDLENBQUNLLFlBQUYsQ0FBZUMsT0FBZixDQUF1QixJQUF2QixD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QUFBQTtBQUFBLGlCQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBMkNILENBbkZEOztHQUFNdkIsSTs7S0FBQUEsSTtBQXFGU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3N0YXRlVGFzaywgc2V0U3RhdGVUYXNrXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgSW5kZXggUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNyZWF0ZSBMb2dpbiBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiY3JlYXRlIExhbmRpbmcgUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9XG4gICAgXSk7XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChlLCBwYXJhbSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2lkJyk7XG5cbiAgICAgICAgLy8gY29uc3QgdGFzayA9IGRhdGEuZmlsdGVyKCh0cykgPT4ge1xuICAgICAgICAvLyAgICAgaWYodHMubmFtZSA9PSBpZCl7XG4gICAgICAgIC8vICAgICAgICAgdHMuc3RhdHVzID0gcGFyYW07XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSwgaWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFBBYXJhbSBkcmFnYCwgaWQpO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdpZCcsIGlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJ5IERyYWcgJmFtcDsgRHJvcDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHAtMiBtYi0yIHRleHQtd2hpdGUgcHgtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxlYXJuIERyYWcgJmFtcDsgRHJvcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIHAtNSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5MaXN0IFRhc2s8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25EcmFnT3Zlcj17KGUpPT5oYW5kbGVEcmFnSXRlbShlKX0gb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSwgXCJjb21wbGV0ZVwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZVRhc2suZmlsdGVyKCh0YXNrKT0+IHRhc2suc3RhdHVzID09ICd3YWl0JykubWFwKChkdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSk9PmhhbmRsZURyYWdTdGFydChlLCBkdC50aXRsZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0zIGJnLXdoaXRlIGN1cnNvci1wb2ludGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5UaXRsZSA6IHtkdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbXktMVwiPkRlc2NyaXB0aW9uIDoge2R0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBteS0xXCI+c3RhdHVzIDoge2R0LnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5JbiBQcm9ncmVzczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgaC1mdWxsIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBweC0yIG1iLTJcIj5Db21wbGV0ZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})