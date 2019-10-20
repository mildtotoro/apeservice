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
      } = this.props; // let gallery = [];

      let gallery = [];

      for (let i = 1; i <= imgLength; i++) {
        const imgPath = assetPrefix + "/static/assets/showcase/".concat(projectFolderName, "/") + i + '.jpg';
        gallery.push({
          imgPath
        }); // gallery.push(<div key={"showcase" + projectFolderName} className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>);
        // gallery = <div key={"showcase" + projectFolderName} className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>;
      } // console.log({ gallery })


      return gallery;
    });
  }

  render() {
    const settings = {
      // className: "center",
      dots: true,
      variableWidth: true,
      infinite: true,
      // centerPadding: "0px",
      // slidesToShow: 3,
      speed: 300,
      autoplay: true,
      arrows: false,
      // slidesToScroll: 3
      responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: false,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          variableWidth: false,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }]
    };
    const {
      projectName,
      subtitle,
      content,
      projectFolderName,
      imgLength
    } = this.props;
    let gallery = [];

    for (let i = 1; i <= imgLength; i++) {
      const imgPath = assetPrefix + "/static/assets/showcase/".concat(projectFolderName, "/") + i + '.jpg';
      gallery.push(imgPath);
    }

    console.log({
      gallery
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col py-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, projectName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      className: "mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, subtitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, content, this.props.children)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col-12 mb-5 px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, gallery.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), gallery.map(img => {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: "showcase" + img,
        className: "border text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        style: {
          maxHeight: '300px'
        },
        key: img,
        className: "img-fluid",
        src: img,
        alt: projectFolderName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    })) : null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowCase);

/***/ })

})
//# sourceMappingURL=thai-nissei.js.e237f3dea39893852a3c.hot-update.js.map