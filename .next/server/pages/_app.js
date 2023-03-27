(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__(8158);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./store/Cart.tsx
var Cart = __webpack_require__(5324);
;// CONCATENATED MODULE: ./components/Navbar/ShoppingCart.tsx



const ShoppingCart = ({ cartCount , name  })=>{
    const showCartCount = ()=>{
        if (!cartCount) {
            return `(0)`;
        }
        if (cartCount > 9) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "(9",
                    /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                        children: "+"
                    }),
                    ")"
                ]
            });
        }
        return `(${cartCount})`;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-934684e760d8ad77" + " " + "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-934684e760d8ad77" + " " + "text",
                children: [
                    ` ${name} `,
                    showCartCount()
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "934684e760d8ad77",
                children: ".container.jsx-934684e760d8ad77{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.text.jsx-934684e760d8ad77{margin-left:.5rem}.text.jsx-934684e760d8ad77 span.jsx-934684e760d8ad77{font-size:smaller}"
            })
        ]
    });
};
/* harmony default export */ const Navbar_ShoppingCart = (ShoppingCart);

;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx








const Navbar = ()=>{
    const { pathname  } = (0,router_.useRouter)();
    const { count: cartCount  } = (0,Cart/* useCart */.jD)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        size: "huge",
        secondary: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                text: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                            title: "Inicio | Todos los productos",
                            children: "Avo Store"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Menu, {
                        position: "right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cart",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                                title: "Carrito",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_ShoppingCart, {
                                    cartCount: cartCount,
                                    name: "Cart"
                                })
                            })
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "7ac6c0120c169f52",
                children: ".ui.menu.huge{background-color:#104c34}.ui.menu .item{color:#ffff;font-size:17px}"
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer/Footer.tsx





const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
        vertical: true,
        as: "footer",
        style: {
            padding: "4em 0em",
            marginTop: "3em",
            borderTop: "1px solid #f2f2f2"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                text: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
                        stackable: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            content: "Nosotros"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "Conoce m\xe1s"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            content: "Servicios"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Todos los productos"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 7,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            children: "Hecho por"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-6808d52a5ad79573",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://itsluismario.com/",
                                                className: "jsx-6808d52a5ad79573",
                                                children: "itsluismario.com"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List, {
                                            horizontal: true,
                                            style: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                    icon: "twitter",
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://twitter.com/itsluismario",
                                                        className: "jsx-6808d52a5ad79573",
                                                        children: "Twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                    icon: "github",
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://github.com/itsluismario/next-js",
                                                        className: "jsx-6808d52a5ad79573",
                                                        children: "GitHub"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-6808d52a5ad79573" + " " + "colophon",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-6808d52a5ad79573" + " " + "colophon-entry",
                                children: [
                                    "Icons made by",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.flaticon.com/authors/freepik",
                                        title: "Freepik",
                                        className: "jsx-6808d52a5ad79573",
                                        children: "Freepik"
                                    }),
                                    " from ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.flaticon.com/",
                                        title: "Flaticon",
                                        className: "jsx-6808d52a5ad79573",
                                        children: "www.flaticon.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-6808d52a5ad79573" + " " + "colophon-entry",
                                children: [
                                    "Avocado images taken from",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.californiaavocado.com/avocado101/avocado-varieties",
                                        title: "California Avocado",
                                        className: "jsx-6808d52a5ad79573" + " " + "acnor",
                                        children: "Avocado 101"
                                    }),
                                    " at ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.californiaavocado.com",
                                        title: "Flaticon",
                                        className: "jsx-6808d52a5ad79573",
                                        children: "California Avocado"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6808d52a5ad79573",
                children: ".colophon.jsx-6808d52a5ad79573{text-align:center;margin-top:3.2rem;font-size:.8rem}.colophon-entry.jsx-6808d52a5ad79573{color:grey;margin-bottom:0}"
            })
        ]
    });


;// CONCATENATED MODULE: ./components/Layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                as: "main",
                text: true,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Cart/* CartProvider */.Zl, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 8158:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,324], () => (__webpack_exec__(8694)));
module.exports = __webpack_exports__;

})();