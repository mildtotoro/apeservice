webpackHotUpdate("static/development/pages/showcase/kasetsart-university-sriracha.js",{

/***/ "./components/layouts/ShowCase.js":
/*!****************************************!*\
  !*** ./components/layouts/ShowCase.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/apple/Desktop/work/apeservice/components/layouts/ShowCase.js";

const assetPrefix =  false ? undefined : '';

class ShowCase extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gellery", () => {
      const {
        projectFolderName,
        imgLength
      } = this.props;
      let gallery = [];

      for (let i = 1; i <= imgLength; i++) {
        const imgPath = assetPrefix + "/static/assets/showcase/".concat(projectFolderName, "/") + i + '.jpg';
        gallery.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12 col-md-6 col-lg-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "img-fluid",
          key: imgPath,
          src: imgPath,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
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
    const {
      projectName,
      subtitle,
      content
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col py-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, projectName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, content, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row no-gutters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.gellery()))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowCase);

/***/ })

})
//# sourceMappingURL=kasetsart-university-sriracha.js.d343350553cd41f676ea.hot-update.js.map