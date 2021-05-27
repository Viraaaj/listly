(function() {
var exports = {};
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 5020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7619);
/* harmony import */ var _styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2__);





const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const paths = data.map(person => {
    return {
      params: {
        id: person.id.toString()
      }
    };
  });
  return {
    // paths: paths
    paths,
    //we can use like this also cause names are same
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await response.json();
  return {
    props: {
      person: data
    }
  };
}; // we are running this function 10 times here as we have 10 ids and context object is used
// as argument as id is attached to context.

const Details = ({
  person
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Listly | User Info"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "UserInfo",
        content: "UserInfo"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (_styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
        children: person.name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2___default().id),
        children: "Email: " + person.email
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2___default().id),
        children: "Website: " + person.website
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_styles_Id_module_css__WEBPACK_IMPORTED_MODULE_2___default().id),
        children: "City: " + person.address.city
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ 7619:
/***/ (function(module) {

// Exports
module.exports = {
	"name": "Id_name__OVGxh",
	"id": "Id_id__2pIAZ"
};


/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5020));
module.exports = __webpack_exports__;

})();