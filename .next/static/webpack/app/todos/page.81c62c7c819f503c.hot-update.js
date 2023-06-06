"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/todos/page",{

/***/ "(app-client)/./src/app/todos/page.js":
/*!*******************************!*\
  !*** ./src/app/todos/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ \"(app-client)/./src/app/components/TodoList.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"(app-client)/./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ButtonGroup */ \"(app-client)/./node_modules/react-bootstrap/esm/ButtonGroup.js\");\n/* harmony import */ var _backend_models_todoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend/models/todoModel */ \"(app-client)/./src/app/backend/models/todoModel.js\");\n/* harmony import */ var _backend_models_todoModel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backend_models_todoModel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProtectRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProtectRoutes */ \"(app-client)/./src/app/components/ProtectRoutes.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constant */ \"(app-client)/./src/app/constant.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    console.log(\"token\", token);\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todoesData, setTodoesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [listType, setListType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [editTodo, setEditTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/todos\", _constant__WEBPACK_IMPORTED_MODULE_6__.authorizationHeaderToken).then((res)=>{\n            if (res.status === 200) {\n                setTodoesData(res.data.data);\n            }\n        }).catch((err)=>console.log(\"error GET\", err));\n    }, []);\n    const addEditDisabled = todo.trim().length === 0 || (editTodo === null || editTodo === void 0 ? void 0 : editTodo.todo) !== undefined && editTodo.todo === todo;\n    const handleAddTodo = async ()=>{\n        const todoData = {\n            todo,\n            status: false\n        };\n        await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/todos\", todoData, _constant__WEBPACK_IMPORTED_MODULE_6__.authorizationHeaderToken).then((res)=>{\n            if (res.status === 200) {\n                setTodoesData(res.data.data);\n                setTodo(\"\");\n            }\n        }).catch((err)=>console.log(\"error GET\", err));\n    };\n    const handleClickEdit = (data)=>{\n        setEditTodo(data);\n        setTodo(data.todo);\n    };\n    const handleEditTodo = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/todos/\".concat(editTodo._id), {\n            todo\n        }, _constant__WEBPACK_IMPORTED_MODULE_6__.authorizationHeaderToken).then((res)=>{\n            if (res.status === 200) {\n                setTodoesData(res.data.data);\n                setTodo(\"\");\n                setEditTodo({});\n            }\n        }).catch((err)=>console.log(\"error GET\", err));\n    };\n    const handleStatusChange = async (todo)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/todos/\".concat(todo._id), {\n            status: !todo.status\n        }, _constant__WEBPACK_IMPORTED_MODULE_6__.authorizationHeaderToken).then((res)=>{\n            if (res.status === 200) {\n                setTodoesData(res.data.data);\n            }\n        }).catch((err)=>console.log(\"error GET\", err));\n    };\n    const handleClickDelete = async (data)=>{\n        await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"][\"delete\"](\"/api/todos/\".concat(data._id), _constant__WEBPACK_IMPORTED_MODULE_6__.authorizationHeaderToken).then((res)=>{\n            if (res.status === 200) {\n                setTodoesData(res.data.data);\n            }\n        }).catch((err)=>console.log(\"error GET\", err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todo_container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"form__field\",\n                        placeholder: \"Enter TODO\",\n                        value: todo,\n                        onChange: (e)=>setTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    (editTodo === null || editTodo === void 0 ? void 0 : editTodo.todo) !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"send_btn btn--primary btn--inside uppercase\",\n                                onClick: ()=>handleEditTodo(),\n                                disabled: addEditDisabled,\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                                lineNumber: 94,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"send_btn btn--primary uppercase ms-2\",\n                                onClick: ()=>{\n                                    setEditTodo({});\n                                    setTodo(\"\");\n                                },\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                                lineNumber: 95,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"send_btn btn--primary btn--inside uppercase\",\n                        onClick: ()=>handleAddTodo(),\n                        disabled: addEditDisabled,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                        lineNumber: 101,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-2 list_type_btn \".concat(listType === 1 ? \"active\" : \"\", \" btn--primary\"),\n                            onClick: ()=>setListType(1),\n                            children: \"All\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-2 list_type_btn \".concat(listType === 2 ? \"active\" : \"\", \" btn--primary\"),\n                            onClick: ()=>setListType(2),\n                            children: \"Completed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                            lineNumber: 108,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"mx-2 list_type_btn \".concat(listType === 3 ? \"active\" : \"\", \" btn--primary\"),\n                            onClick: ()=>setListType(3),\n                            children: \"Pending\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                todoes: todoesData,\n                handleStatusChange: handleStatusChange,\n                listType: listType,\n                onClickDelete: handleClickDelete,\n                handleClickEdit: handleClickEdit\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/next-todo/src/app/todos/page.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"nZgYhLws7v5LLO9O4u8MSfMCqQE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0F0R00xQjtBQXdHTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RvZG9zL3BhZ2UuanM/Y2I4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9MaXN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uR3JvdXAnO1xuaW1wb3J0IHsgVG9kb01vZGVsIH0gZnJvbSAnLi4vYmFja2VuZC9tb2RlbHMvdG9kb01vZGVsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3RlY3RSb3V0ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm90ZWN0Um91dGVzJztcbmltcG9ydCB7IGF1dGhvcml6YXRpb25IZWFkZXJUb2tlbiB9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4pXG4gICAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbdG9kb2VzRGF0YSwgc2V0VG9kb2VzRGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbGlzdFR5cGUsIHNldExpc3RUeXBlXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW2VkaXRUb2RvLCBzZXRFZGl0VG9kb10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvdG9kb3NcIiwgYXV0aG9yaXphdGlvbkhlYWRlclRva2VuKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG9lc0RhdGEocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcImVycm9yIEdFVFwiLCBlcnIpKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgYWRkRWRpdERpc2FibGVkID0gdG9kby50cmltKCkubGVuZ3RoID09PSAwIHx8IChlZGl0VG9kbz8udG9kbyAhPT0gdW5kZWZpbmVkICYmIGVkaXRUb2RvLnRvZG8gPT09IHRvZG8pXG5cbiAgICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRGF0YSA9IHtcbiAgICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgICBzdGF0dXM6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS90b2Rvc1wiLCB0b2RvRGF0YSwgYXV0aG9yaXphdGlvbkhlYWRlclRva2VuKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG9lc0RhdGEocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9kbyhcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUXCIsIGVycikpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tFZGl0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgc2V0RWRpdFRvZG8oZGF0YSlcbiAgICAgICAgc2V0VG9kbyhkYXRhLnRvZG8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRWRpdFRvZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdG9kb3MvJHtlZGl0VG9kby5faWR9YCwgeyB0b2RvIH0sIGF1dGhvcml6YXRpb25IZWFkZXJUb2tlbilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2RvZXNEYXRhKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG8oXCJcIilcbiAgICAgICAgICAgICAgICAgICAgc2V0RWRpdFRvZG8oe30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJlcnJvciBHRVRcIiwgZXJyKSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSBhc3luYyAodG9kbykgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3RvZG9zLyR7dG9kby5faWR9YCwgeyBzdGF0dXM6ICF0b2RvLnN0YXR1cyB9LCBhdXRob3JpemF0aW9uSGVhZGVyVG9rZW4pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9kb2VzRGF0YShyZXMuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUXCIsIGVycikpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tEZWxldGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvdG9kb3MvJHtkYXRhLl9pZH1gLCBhdXRob3JpemF0aW9uSGVhZGVyVG9rZW4pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9kb2VzRGF0YShyZXMuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyb3IgR0VUXCIsIGVycikpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtX19maWVsZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgVE9ET1wiIHZhbHVlPXt0b2RvfSBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRvZG8/LnRvZG8gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzZW5kX2J0biBidG4tLXByaW1hcnkgYnRuLS1pbnNpZGUgdXBwZXJjYXNlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdFRvZG8oKX0gZGlzYWJsZWQ9e2FkZEVkaXREaXNhYmxlZH0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic2VuZF9idG4gYnRuLS1wcmltYXJ5IHVwcGVyY2FzZSBtcy0yXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0VG9kbyh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9kbyhcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzZW5kX2J0biBidG4tLXByaW1hcnkgYnRuLS1pbnNpZGUgdXBwZXJjYXNlXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9kbygpfSBkaXNhYmxlZD17YWRkRWRpdERpc2FibGVkfT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG10LTUnPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2BteC0yIGxpc3RfdHlwZV9idG4gJHtsaXN0VHlwZSA9PT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwifSBidG4tLXByaW1hcnlgfSBvbkNsaWNrPXsoKSA9PiBzZXRMaXN0VHlwZSgxKX0+QWxsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtgbXgtMiBsaXN0X3R5cGVfYnRuICR7bGlzdFR5cGUgPT09IDIgPyBcImFjdGl2ZVwiIDogXCJcIn0gYnRuLS1wcmltYXJ5YH0gb25DbGljaz17KCkgPT4gc2V0TGlzdFR5cGUoMil9PkNvbXBsZXRlZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17YG14LTIgbGlzdF90eXBlX2J0biAke2xpc3RUeXBlID09PSAzID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGJ0bi0tcHJpbWFyeWB9IG9uQ2xpY2s9eygpID0+IHNldExpc3RUeXBlKDMpfT5QZW5kaW5nPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRvZG9MaXN0IHRvZG9lcz17dG9kb2VzRGF0YX0gaGFuZGxlU3RhdHVzQ2hhbmdlPXtoYW5kbGVTdGF0dXNDaGFuZ2V9IGxpc3RUeXBlPXtsaXN0VHlwZX0gb25DbGlja0RlbGV0ZT17aGFuZGxlQ2xpY2tEZWxldGV9IGhhbmRsZUNsaWNrRWRpdD17aGFuZGxlQ2xpY2tFZGl0fSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvZG9MaXN0IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJUb2RvTW9kZWwiLCJheGlvcyIsIkxpbmsiLCJQcm90ZWN0Um91dGVzIiwiYXV0aG9yaXphdGlvbkhlYWRlclRva2VuIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInRvZG8iLCJzZXRUb2RvIiwidG9kb2VzRGF0YSIsInNldFRvZG9lc0RhdGEiLCJsaXN0VHlwZSIsInNldExpc3RUeXBlIiwiZWRpdFRvZG8iLCJzZXRFZGl0VG9kbyIsImdldCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJhZGRFZGl0RGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGFuZGxlQWRkVG9kbyIsInRvZG9EYXRhIiwicG9zdCIsImhhbmRsZUNsaWNrRWRpdCIsImhhbmRsZUVkaXRUb2RvIiwiX2lkIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwiaGFuZGxlQ2xpY2tEZWxldGUiLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwidG9kb2VzIiwib25DbGlja0RlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/todos/page.js\n"));

/***/ })

});