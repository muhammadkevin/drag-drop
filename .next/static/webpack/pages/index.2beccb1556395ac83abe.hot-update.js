webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([{\n    id: 1,\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"in progress\"\n  }, {\n    id: 2,\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    id: 3,\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    e.preventDefault();\n    var id = e.dataTransfer.getData('id');\n    stateTask.filter(function (ts) {\n      if (ts.id == id) {\n        setStateTask.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stateTask).concat([{\n          status: \"param\"\n        }]));\n        console.log('terpilih', ts.title);\n      }\n    });\n    console.log(stateTask); // // setStateTask([...stateTask, task]);\n    // console.log(task);\n  };\n\n  var handleDragStart = function handleDragStart(e, param) {\n    console.log(\"PAaram drag\", param);\n    e.dataTransfer.setData('id', param);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"wait\");\n              },\n              children: stateTask.map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.id);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 77,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"complete\");\n              },\n              children: stateTask.map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 100,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 101,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 102,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"1JR+rRKY6tFvbw9BIHNLqXBEf/U=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJzdGF0ZVRhc2siLCJzZXRTdGF0ZVRhc2siLCJoYW5kbGVEcmFnSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJwYXJhbSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJmaWx0ZXIiLCJ0cyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnU3RhcnQiLCJzZXREYXRhIiwibWFwIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsQ0FDdkM7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLFFBRlg7QUFHSUMsZUFBVyxFQUFFLG1CQUhqQjtBQUlJQyxVQUFNLEVBQUU7QUFKWixHQUR1QyxFQU92QztBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsUUFGWDtBQUdJQyxlQUFXLEVBQUUsbUJBSGpCO0FBSUlDLFVBQU0sRUFBRTtBQUpaLEdBUHVDLEVBYXZDO0FBQ0lILE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxRQUZYO0FBR0lDLGVBQVcsRUFBRSxxQkFIakI7QUFJSUMsVUFBTSxFQUFFO0FBSlosR0FidUMsQ0FBRCxDQUYzQjtBQUFBLE1BRVJDLFNBRlE7QUFBQSxNQUVHQyxZQUZIOztBQXVCZixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixDQUFELEVBQUlHLEtBQUosRUFBYztBQUM3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bUNBQ0k7QUFBSSx1QkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFpRUgsQ0FoSEQ7O0dBQU1GLEk7O0tBQUFBLEk7QUFrSFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzdGF0ZVRhc2ssIHNldFN0YXRlVGFza10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgSW5kZXggUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImluIHByb2dyZXNzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogXCJUYXNrIDJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNyZWF0ZSBMb2dpbiBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgTGFuZGluZyBQYWdlXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwid2FpdFwiXG4gICAgICAgIH1cbiAgICBdKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdJdGVtID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpZCcpO1xuXG4gICAgICAgIHN0YXRlVGFzay5maWx0ZXIoKHRzKSA9PiB7XG4gICAgICAgICAgICBpZih0cy5pZCA9PSBpZCl7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGVUYXNrKC4uLnN0YXRlVGFzaywgeyBzdGF0dXMgOiBcInBhcmFtXCJ9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVycGlsaWgnLCB0cy50aXRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZVRhc2spO1xuICAgICAgICAvLyAvLyBzZXRTdGF0ZVRhc2soWy4uLnN0YXRlVGFzaywgdGFza10pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZSwgcGFyYW0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFBBYXJhbSBkcmFnYCwgcGFyYW0pO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdpZCcsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJ5IERyYWcgJmFtcDsgRHJvcDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctYmx1ZS04MDAgcC0yIG1iLTIgdGV4dC13aGl0ZSBweC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TGVhcm4gRHJhZyAmYW1wOyBEcm9wPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcC01IG1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCBoLWZ1bGwgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHB4LTIgbWItMlwiPkxpc3QgVGFzazwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSk9PmhhbmRsZURyYWdJdGVtKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9eyhlKT0+aGFuZGxlRHJvcChlLCBcIndhaXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVUYXNrLm1hcCgoZHQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpPT5oYW5kbGVEcmFnU3RhcnQoZSwgZHQuaWQpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBiZy13aGl0ZSBjdXJzb3ItcG9pbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2R0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMVwiPlRpdGxlIDoge2R0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBteS0xXCI+RGVzY3JpcHRpb24gOiB7ZHQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTFcIj5zdGF0dXMgOiB7ZHQuc3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCBoLWZ1bGwgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHB4LTIgbWItMlwiPkluIFByb2dyZXNzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSk9PmhhbmRsZURyYWdJdGVtKGUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PmhhbmRsZURyb3AoZSwgXCJjb21wbGV0ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZVRhc2subWFwKChkdCk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpPT5oYW5kbGVEcmFnU3RhcnQoZSwgZHQudGl0bGUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBiZy13aGl0ZSBjdXJzb3ItcG9pbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2R0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMVwiPlRpdGxlIDoge2R0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBteS0xXCI+RGVzY3JpcHRpb24gOiB7ZHQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTFcIj5zdGF0dXMgOiB7ZHQuc3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTQwMCBoLWZ1bGwgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHB4LTIgbWItMlwiPkNvbXBsZXRlZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})