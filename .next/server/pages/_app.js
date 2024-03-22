(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/Context.js
var Context = __webpack_require__(5056);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/layout/DoraHead.js


const DoraHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Dora - Personal React Portfolio Template"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                type: "text/css",
                rel: "stylesheet",
                href: "plugin/swiper/swiper-bundle.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                type: "text/css",
                rel: "stylesheet",
                href: "fonts/fontawesome/css/all.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                type: "text/css",
                rel: "stylesheet",
                href: "plugin/magnific-popup/magnific-popup.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                type: "text/css",
                rel: "stylesheet",
                href: "plugin/animate.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                type: "text/css",
                rel: "stylesheet",
                href: "css/style.css"
            })
        ]
    });
};
/* harmony default export */ const layout_DoraHead = (DoraHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Context/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_DoraHead, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [56], () => (__webpack_exec__(4846)));
module.exports = __webpack_exports__;

})();