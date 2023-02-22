"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Loading/Loading.tsx":
/*!****************************************!*\
  !*** ./components/Loading/Loading.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loading\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Loading = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n        active: true,\n        inline: \"centered\"\n    }, void 0, false, {\n        fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/components/Loading/Loading.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUM7QUFFbEUsTUFBTUUsVUFBVSxrQkFDWiw4REFBQ0QscURBQU1BO1FBQUNFLE1BQU07UUFBQ0MsUUFBTzs7Ozs7O0FBR1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4P2YyZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcbiAgICA8TG9hZGVyIGFjdGl2ZSBpbmxpbmU9J2NlbnRlcmVkJyAvPlxuKVxuXG5leHBvcnQgeyBMb2FkaW5nIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJMb2FkZXIiLCJMb2FkaW5nIiwiYWN0aXZlIiwiaW5saW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loading/Loading.tsx\n");

/***/ }),

/***/ "./components/ProductList/ProductList.tsx":
/*!************************************************!*\
  !*** ./components/ProductList/ProductList.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst mapProductsToCards = (products)=>products.map(({ name , id , price , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            href: `/product/${id}`,\n            as: \"a\",\n            header: name,\n            image: {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    src: image,\n                    width: 250,\n                    height: 250\n                }, void 0, false, void 0, void 0)\n            },\n            meta: {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {\n                    style: {\n                        color: \"dimgray\"\n                    },\n                    children: price\n                }, void 0, false, void 0, void 0)\n            }\n        }, void 0, false, {\n            fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/components/ProductList/ProductList.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined));\nconst ProductList = ({ products  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n        itemsPerRow: 3,\n        stackable: true,\n        children: mapProductsToCards(products)\n    }, void 0, false, {\n        fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/components/ProductList/ProductList.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QjtBQUNzQjtBQU8vQyxNQUFNRyxxQkFBcUIsQ0FBQ0MsV0FDMUJBLFNBQVNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEtBQUksRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRSxpQkFFcEMsOERBQUNSLG1EQUFJQTtZQUNIUyxNQUFNLENBQUMsU0FBUyxFQUFFSCxHQUFHLENBQUM7WUFDdEJJLElBQUc7WUFDSEMsUUFBUU47WUFDUkcsT0FBTztnQkFBRUksd0JBQVUsOERBQUNYLG9EQUFLQTtvQkFBQ1ksS0FBS0w7b0JBQU9NLE9BQU87b0JBQUtDLFFBQVE7O1lBQVE7WUFDbEVDLE1BQU07Z0JBQ0pKLHdCQUFVLDhEQUFDWix3REFBUztvQkFBQ2tCLE9BQU87d0JBQUVDLE9BQU87b0JBQVU7OEJBQUlaOztZQUNyRDs7Ozs7O0FBS1IsTUFBTWEsY0FBYyxDQUFDLEVBQUVqQixTQUFRLEVBQW9CLGlCQUNqRCw4REFBQ0gseURBQVU7UUFBQ3NCLGFBQWE7UUFBR0MsU0FBUztrQkFDbENyQixtQkFBbUJDOzs7Ozs7QUFJeEIsaUVBQWVpQixXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QvUHJvZHVjdExpc3QudHN4PzBlNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxudHlwZSBQcm9kdWN0TGlzdFByb3BzID0ge1xuICAgIHByb2R1Y3RzOiBUUHJvZHVjdFtdXG59XG5cblxuY29uc3QgbWFwUHJvZHVjdHNUb0NhcmRzID0gKHByb2R1Y3RzOiBUUHJvZHVjdFtdKSA9PlxuICBwcm9kdWN0cy5tYXAoKHsgbmFtZSwgaWQsIHByaWNlLCBpbWFnZSB9KSA9PiAoXG5cbiAgICAgIDxDYXJkXG4gICAgICAgIGhyZWY9e2AvcHJvZHVjdC8ke2lkfWB9XG4gICAgICAgIGFzPVwiYVwiXG4gICAgICAgIGhlYWRlcj17bmFtZX1cbiAgICAgICAgaW1hZ2U9e3sgY2hpbGRyZW46IDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz4gfX1cbiAgICAgICAgbWV0YT17e1xuICAgICAgICAgIGNoaWxkcmVuOiA8Q2FyZC5NZXRhIHN0eWxlPXt7IGNvbG9yOiAnZGltZ3JheScgfX0+e3ByaWNlfTwvQ2FyZC5NZXRhPixcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgKSlcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBwcm9kdWN0cyB9OiBQcm9kdWN0TGlzdFByb3BzKSA9PiAoXG4gIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXszfSBzdGFja2FibGU+XG4gICAge21hcFByb2R1Y3RzVG9DYXJkcyhwcm9kdWN0cyl9XG4gIDwvQ2FyZC5Hcm91cD5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiSW1hZ2UiLCJtYXBQcm9kdWN0c1RvQ2FyZHMiLCJwcm9kdWN0cyIsIm1hcCIsIm5hbWUiLCJpZCIsInByaWNlIiwiaW1hZ2UiLCJocmVmIiwiYXMiLCJoZWFkZXIiLCJjaGlsZHJlbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibWV0YSIsIk1ldGEiLCJzdHlsZSIsImNvbG9yIiwiUHJvZHVjdExpc3QiLCJHcm91cCIsIml0ZW1zUGVyUm93Iiwic3RhY2thYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductList/ProductList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ProductList/ProductList */ \"./components/ProductList/ProductList.tsx\");\n/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Loading/Loading */ \"./components/Loading/Loading.tsx\");\n\n\n\n\nconst HomePage = ()=>{\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setTimeout(()=>{\n            try {\n                window.fetch(\"/api/avo\").then((response)=>response.json()).then(({ data  })=>{\n                    setProductList(data);\n                });\n                setLoading(false);\n            } catch (error) {\n                let message = \"Unknown Error\";\n                if (error instanceof Error) message = error.message;\n            }\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {}, void 0, false, {\n                fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                products: productList\n            }, void 0, false, {\n                fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVztBQUNQO0FBRXRELE1BQU1JLFdBQVcsSUFBTTtJQUNuQixNQUFNLENBQUNDLGFBQWFDLGVBQWdCLEdBQUdMLCtDQUFRQSxDQUFhLEVBQUU7SUFDOUQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdSLHFEQUFjLENBQUMsSUFBSTtJQUVqREEsc0RBQWUsQ0FBQyxJQUFNO1FBQ2xCVSxXQUFXLElBQU07WUFDYixJQUFJO2dCQUNBQyxPQUFPQyxLQUFLLENBQUMsWUFDWkMsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDLEVBQUNHLEtBQUksRUFBQyxHQUFLO29CQUNsQlYsZUFBZVU7Z0JBQ2Y7Z0JBQ0FSLFdBQVcsS0FBSztZQUNwQixFQUFFLE9BQU1TLE9BQU87Z0JBQ1gsSUFBSUMsVUFBVTtnQkFDZCxJQUFJRCxpQkFBaUJFLE9BQU9ELFVBQVVELE1BQU1DLE9BQU87WUFDdkQ7UUFFSixHQUFHO0lBQ1AsR0FBRSxFQUFFO0lBR0oscUJBQ0ksOERBQUNFOztZQUNJYix5QkFBVyw4REFBQ0osZ0VBQU9BOzs7OzswQkFDcEIsOERBQUNELDJFQUFXQTtnQkFBQ21CLFVBQVVoQjs7Ozs7Ozs7Ozs7O0FBR25DO0FBRUEsaUVBQWVELFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJ0Bjb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0J1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmdcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdCBdID0gdXNlU3RhdGU8VFByb2R1Y3RbXT4oW10pXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmZldGNoKCcvYXBpL2F2bycpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdVbmtub3duIEVycm9yJ1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBtZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0sIDEwMDApXG4gICAgfSxbXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmcgLz59XG4gICAgICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RMaXN0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RMaXN0IiwiTG9hZGluZyIsIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImRpdiIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();