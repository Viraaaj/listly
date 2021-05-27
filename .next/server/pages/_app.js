(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5159:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Navbar.js





const Navbar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "logo",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/logo.png",
        width: 80,
        height: 80
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/about",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "About"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/lists",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Listing"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/abc",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "404 page"
      })
    })]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.js


const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Copyright 2021 Listly"
    })
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "content",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout); // anything nested inside Layout component in App.js is children
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp); // component here is content of all pages and we are wrapping it in Layout so that
// footer and navbar will be shown in each and every page.

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,675], function() { return __webpack_exec__(5159); });
module.exports = __webpack_exports__;

})();