webpackHotUpdate("static/development/pages/showcase/thai-nissei.js",{

/***/ "./components/layouts/ShowCase.js":
/*!****************************************!*\
  !*** ./components/layouts/ShowCase.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/apple/Desktop/work/apeservice/components/layouts/ShowCase.js";


const assetPrefix =  false ? undefined : '';

class ShowCase extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "gellery", () => {
      const {
        projectFolderName,
        imgLength
      } = this.props;
      let gallery = [];

      for (let i = 1; i <= imgLength; i++) {
        const imgPath = assetPrefix + "/static/assets/showcase/".concat(projectFolderName, "/") + i + '.jpg';
        gallery.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "col-12 col-md-6 col-lg-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          className: "img-fluid",
          key: imgPath,
          src: imgPath,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        })));
      }

      console.log({
        gallery
      });
      return gallery;
    });
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      autoplay: true,
      arrows: false // slidesToScroll: 1

    };
    const {
      projectName,
      subtitle,
      content
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col py-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, projectName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, subtitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, content, this.props.children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), this.gellery()))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowCase);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=thai-nissei.js.1ce607528502044aa493.hot-update.js.map