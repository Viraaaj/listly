(function() {
var exports = {};
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 9602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ lists; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/Head"
var Head_ = __webpack_require__(8165);
var Head_default = /*#__PURE__*/__webpack_require__.n(Head_);
;// CONCATENATED MODULE: external "next/Link"
var Link_namespaceObject = require("next/Link");;
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: ./styles/Lists.module.css
var Lists_module = __webpack_require__(6310);
var Lists_module_default = /*#__PURE__*/__webpack_require__.n(Lists_module);
;// CONCATENATED MODULE: ./pages/lists/index.js






const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      people: data
    }
  };
};

const Lists = ({
  people
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Listly | Lists"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "Lists",
        content: "Lists"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "users",
        children: "All users"
      }), people.map(person => /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
        href: "/lists/" + person.id,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Lists_module_default()).personInfo,
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: person.name
          })
        })
      }, person.id))]
    })]
  });
};

/* harmony default export */ var lists = (Lists); // if we go to /lists then this file will be shown in browser

/***/ }),

/***/ 6310:
/***/ (function(module) {

// Exports
module.exports = {
	"personInfo": "Lists_personInfo__2RtgC"
};


/***/ }),

/***/ 8165:
/***/ (function(module) {

"use strict";
module.exports = require("next/Head");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9602));
module.exports = __webpack_exports__;

})();