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
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductItem = ()=>{\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(`/api/avo/${id}`).then((response)=>response.json()).then((data)=>{\n            setProduct(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Product: \",\n            product.name,\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/product/[id].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUV4QyxNQUFNSSxjQUFjLElBQU07SUFHeEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFZLEdBQUdKLCtDQUFRQTtJQUV2QyxNQUFNLEVBQUVLLE9BQU8sRUFBRUMsR0FBRSxFQUFFLEdBQUMsR0FBR0wsc0RBQVNBO0lBRWxDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLE9BQU9DLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRUYsR0FBRyxDQUFDLEVBQzVCRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDWlIsV0FBV1E7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUNILHFCQUNFLDhEQUFDQzs7WUFBSTtZQUFXVixRQUFRVyxJQUFJO1lBQUU7Ozs7Ozs7QUFFbEM7QUFFQSxpRUFBZVosV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanM/ZjY4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBQcm9kdWN0SXRlbSA9ICgpID0+IHtcbiAgXG5cbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3QgXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgeyBxdWVyeTogeyBpZCB9fSA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmZldGNoKGAvYXBpL2F2by8ke2lkfWApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UHJvZHVjdChkYXRhKVxuICAgIH0pXG59LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlByb2R1Y3Q6IHsgcHJvZHVjdC5uYW1lIH0gPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtOyAgICAgICAgICAgICAgICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwicXVlcnkiLCJpZCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkaXYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].js"));
module.exports = __webpack_exports__;

})();