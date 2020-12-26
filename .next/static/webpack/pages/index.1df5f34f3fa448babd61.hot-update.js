webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/media/kevin/KULIAH/Project/trying/drag-drop/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    id: 1,\n    title: \"Task 1\",\n    description: \"create Index Page\",\n    status: \"in progress\"\n  }, {\n    id: 2,\n    title: \"Task 2\",\n    description: \"create Login Page\",\n    status: \"wait\"\n  }, {\n    id: 3,\n    title: \"Task 3\",\n    description: \"create Landing Page\",\n    status: \"wait\"\n  }]),\n      stateTask = _useState[0],\n      setStateTask = _useState[1];\n\n  var handleDragItem = function handleDragItem(e) {\n    e.preventDefault();\n  };\n\n  var handleDrop = function handleDrop(e, param) {\n    var id = e.dataTransfer.getData('id');\n    var task = stateTask.filter(function (ts) {\n      if (ts.name == id) {\n        console.log(stateTask[ts.id]); // ts.status = 'in progress'\n      } // return task;\n\n    }); // // setStateTask([...stateTask, task]);\n    // console.log(task);\n  };\n\n  var handleDragStart = function handleDragStart(e, param) {\n    console.log(\"PAaram drag\", param);\n    e.dataTransfer.setData('id', param);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Try Drag & Drop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        className: \"bg-blue-800 p-2 mb-2 text-white px-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Learn Drag & Drop\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex w-full p-5 min-h-screen\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-red-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"List Task\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"wait\");\n              },\n              children: stateTask.filter(function (task) {\n                return task.status == \"wait\";\n              }).map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 76,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 77,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-yellow-400 h-full px-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"In Progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"h-full\",\n              onDragOver: function onDragOver(e) {\n                return handleDragItem(e);\n              },\n              onDrop: function onDrop(e) {\n                return handleDrop(e, \"complete\");\n              },\n              children: stateTask.filter(function (task) {\n                return task.status == 'in progress';\n              }).map(function (dt) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onDragStart: function onDragStart(e) {\n                    return handleDragStart(e, dt.title);\n                  },\n                  className: \"mt-2 p-3 bg-white cursor-pointer\",\n                  draggable: true,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"my-1\",\n                    children: [\"Title : \", dt.title]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 99,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-sm my-1\",\n                    children: [\"Description : \", dt.description]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 100,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-xs my-1\",\n                    children: [\"status : \", dt.status]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 101,\n                    columnNumber: 41\n                  }, _this)]\n                }, dt.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 37\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-1/3 px-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"bg-green-400 h-full px-2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: \"text-lg px-2 mb-2\",\n              children: \"Completed\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Main, \"1JR+rRKY6tFvbw9BIHNLqXBEf/U=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJzdGF0ZVRhc2siLCJzZXRTdGF0ZVRhc2siLCJoYW5kbGVEcmFnSXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJwYXJhbSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJ0YXNrIiwiZmlsdGVyIiwidHMiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURyYWdTdGFydCIsInNldERhdGEiLCJtYXAiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsQ0FDdkM7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsU0FBSyxFQUFFLFFBRlg7QUFHSUMsZUFBVyxFQUFFLG1CQUhqQjtBQUlJQyxVQUFNLEVBQUU7QUFKWixHQUR1QyxFQU92QztBQUNJSCxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsUUFGWDtBQUdJQyxlQUFXLEVBQUUsbUJBSGpCO0FBSUlDLFVBQU0sRUFBRTtBQUpaLEdBUHVDLEVBYXZDO0FBQ0lILE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxRQUZYO0FBR0lDLGVBQVcsRUFBRSxxQkFIakI7QUFJSUMsVUFBTSxFQUFFO0FBSlosR0FidUMsQ0FBRCxDQUYzQjtBQUFBLE1BRVJDLFNBRlE7QUFBQSxNQUVHQyxZQUZIOztBQXVCZixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixDQUFELEVBQUlHLEtBQUosRUFBYztBQUM3QixRQUFNVixFQUFFLEdBQUdPLENBQUMsQ0FBQ0ksWUFBRixDQUFlQyxPQUFmLENBQXVCLElBQXZCLENBQVg7QUFFQSxRQUFNQyxJQUFJLEdBQUdULFNBQVMsQ0FBQ1UsTUFBVixDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDbEMsVUFBR0EsRUFBRSxDQUFDQyxJQUFILElBQVdoQixFQUFkLEVBQWlCO0FBQ2JpQixlQUFPLENBQUNDLEdBQVIsQ0FBWWQsU0FBUyxDQUFDVyxFQUFFLENBQUNmLEVBQUosQ0FBckIsRUFEYSxDQUViO0FBQ0gsT0FKaUMsQ0FLbEM7O0FBQ0gsS0FOWSxDQUFiLENBSDZCLENBVTdCO0FBQ0E7QUFDSCxHQVpEOztBQWNBLE1BQU1tQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNaLENBQUQsRUFBSUcsS0FBSixFQUFjO0FBQ2xDTyxXQUFPLENBQUNDLEdBQVIsZ0JBQTJCUixLQUEzQjtBQUNBSCxLQUFDLENBQUNJLFlBQUYsQ0FBZVMsT0FBZixDQUF1QixJQUF2QixFQUE2QlYsS0FBN0I7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFNLGlCQUFTLEVBQUMsOEJBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsd0JBQWY7QUFBQSxvQ0FDSTtBQUFJLHVCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUNJLHVCQUFTLEVBQUMsUUFEZDtBQUVJLHdCQUFVLEVBQUUsb0JBQUNILENBQUQ7QUFBQSx1QkFBS0QsY0FBYyxDQUFDQyxDQUFELENBQW5CO0FBQUEsZUFGaEI7QUFHSSxvQkFBTSxFQUFFLGdCQUFDQSxDQUFEO0FBQUEsdUJBQUtFLFVBQVUsQ0FBQ0YsQ0FBRCxFQUFJLE1BQUosQ0FBZjtBQUFBLGVBSFo7QUFBQSx3QkFLS0gsU0FBUyxDQUFDVSxNQUFWLENBQWlCLFVBQUFELElBQUk7QUFBQSx1QkFBR0EsSUFBSSxDQUFDVixNQUFMLElBQWUsTUFBbEI7QUFBQSxlQUFyQixFQUErQ2tCLEdBQS9DLENBQW1ELFVBQUNDLEVBQUQ7QUFBQSxvQ0FDaEQ7QUFDSSw2QkFBVyxFQUFFLHFCQUFDZixDQUFEO0FBQUEsMkJBQUtZLGVBQWUsQ0FBQ1osQ0FBRCxFQUFJZSxFQUFFLENBQUNyQixLQUFQLENBQXBCO0FBQUEsbUJBRGpCO0FBRUksMkJBQVMsRUFBQyxrQ0FGZDtBQUdJLDJCQUFTLE1BSGI7QUFBQSwwQ0FNSTtBQUFLLDZCQUFTLEVBQUMsTUFBZjtBQUFBLDJDQUErQnFCLEVBQUUsQ0FBQ3JCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFOSixlQU9JO0FBQUssNkJBQVMsRUFBQyxjQUFmO0FBQUEsaURBQTZDcUIsRUFBRSxDQUFDcEIsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKLGVBUUk7QUFBSyw2QkFBUyxFQUFDLGNBQWY7QUFBQSw0Q0FBd0NvQixFQUFFLENBQUNuQixNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUko7QUFBQSxtQkFJU21CLEVBQUUsQ0FBQ3RCLEVBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZ0Q7QUFBQSxlQUFuRDtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQXdCSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUNJO0FBQUksdUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQ0ksdUJBQVMsRUFBQyxRQURkO0FBRUksd0JBQVUsRUFBRSxvQkFBQ08sQ0FBRDtBQUFBLHVCQUFLRCxjQUFjLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxlQUZoQjtBQUdJLG9CQUFNLEVBQUUsZ0JBQUNBLENBQUQ7QUFBQSx1QkFBS0UsVUFBVSxDQUFDRixDQUFELEVBQUksVUFBSixDQUFmO0FBQUEsZUFIWjtBQUFBLHdCQUtLSCxTQUFTLENBQUNVLE1BQVYsQ0FBaUIsVUFBQUQsSUFBSTtBQUFBLHVCQUFJQSxJQUFJLENBQUNWLE1BQUwsSUFBZSxhQUFuQjtBQUFBLGVBQXJCLEVBQXVEa0IsR0FBdkQsQ0FBMkQsVUFBQ0MsRUFBRDtBQUFBLG9DQUN4RDtBQUNJLDZCQUFXLEVBQUUscUJBQUNmLENBQUQ7QUFBQSwyQkFBS1ksZUFBZSxDQUFDWixDQUFELEVBQUllLEVBQUUsQ0FBQ3JCLEtBQVAsQ0FBcEI7QUFBQSxtQkFEakI7QUFFSSwyQkFBUyxFQUFDLGtDQUZkO0FBR0ksMkJBQVMsTUFIYjtBQUFBLDBDQU1JO0FBQUssNkJBQVMsRUFBQyxNQUFmO0FBQUEsMkNBQStCcUIsRUFBRSxDQUFDckIsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5KLGVBT0k7QUFBSyw2QkFBUyxFQUFDLGNBQWY7QUFBQSxpREFBNkNxQixFQUFFLENBQUNwQixXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEosZUFRSTtBQUFLLDZCQUFTLEVBQUMsY0FBZjtBQUFBLDRDQUF3Q29CLEVBQUUsQ0FBQ25CLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSjtBQUFBLG1CQUlTbUIsRUFBRSxDQUFDdEIsRUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR3RDtBQUFBLGVBQTNEO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCSixlQStDSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBaUVILENBL0dEOztHQUFNRixJOztLQUFBQSxJO0FBaUhTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGVUYXNrLCBzZXRTdGF0ZVRhc2tdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiY3JlYXRlIEluZGV4IFBhZ2VcIixcbiAgICAgICAgICAgIHN0YXR1czogXCJpbiBwcm9ncmVzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjcmVhdGUgTG9naW4gUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiY3JlYXRlIExhbmRpbmcgUGFnZVwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcIndhaXRcIlxuICAgICAgICB9XG4gICAgXSk7XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnSXRlbSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChlLCBwYXJhbSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2lkJyk7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IHN0YXRlVGFzay5maWx0ZXIoKHRzKSA9PiB7XG4gICAgICAgICAgICBpZih0cy5uYW1lID09IGlkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZVRhc2tbdHMuaWRdKTtcbiAgICAgICAgICAgICAgICAvLyB0cy5zdGF0dXMgPSAnaW4gcHJvZ3Jlc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gdGFzaztcbiAgICAgICAgfSlcbiAgICAgICAgLy8gLy8gc2V0U3RhdGVUYXNrKFsuLi5zdGF0ZVRhc2ssIHRhc2tdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUsIHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQQWFyYW0gZHJhZ2AsIHBhcmFtKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRyeSBEcmFnICZhbXA7IERyb3A8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ibHVlLTgwMCBwLTIgbWItMiB0ZXh0LXdoaXRlIHB4LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5MZWFybiBEcmFnICZhbXA7IERyb3A8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwLTUgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIGgtZnVsbCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtMiBtYi0yXCI+TGlzdCBUYXNrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKT0+aGFuZGxlRHJhZ0l0ZW0oZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpPT5oYW5kbGVEcm9wKGUsIFwid2FpdFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZVRhc2suZmlsdGVyKHRhc2s9PiB0YXNrLnN0YXR1cyA9PSBcIndhaXRcIikubWFwKChkdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSk9PmhhbmRsZURyYWdTdGFydChlLCBkdC50aXRsZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0zIGJnLXdoaXRlIGN1cnNvci1wb2ludGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZHQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+VGl0bGUgOiB7ZHQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG15LTFcIj5EZXNjcmlwdGlvbiA6IHtkdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXktMVwiPnN0YXR1cyA6IHtkdC5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNDAwIGgtZnVsbCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtMiBtYi0yXCI+SW4gUHJvZ3Jlc3M8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKT0+aGFuZGxlRHJhZ0l0ZW0oZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9eyhlKT0+aGFuZGxlRHJvcChlLCBcImNvbXBsZXRlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlVGFzay5maWx0ZXIodGFzayA9PiB0YXNrLnN0YXR1cyA9PSAnaW4gcHJvZ3Jlc3MnKS5tYXAoKGR0KT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZSk9PmhhbmRsZURyYWdTdGFydChlLCBkdC50aXRsZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0zIGJnLXdoaXRlIGN1cnNvci1wb2ludGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZHQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+VGl0bGUgOiB7ZHQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG15LTFcIj5EZXNjcmlwdGlvbiA6IHtkdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXktMVwiPnN0YXR1cyA6IHtkdC5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNDAwIGgtZnVsbCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgcHgtMiBtYi0yXCI+Q29tcGxldGVkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})