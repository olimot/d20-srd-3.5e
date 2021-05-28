self["webpackHotUpdate_N_E"]("pages/docs/[filename]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_next_srd_v3_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _anchors_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../anchors.json */ "./src/anchors.json");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SearchForm */ "./src/components/SearchForm/index.ts");
/* harmony import */ var _buildTOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildTOC */ "./src/components/Layout/buildTOC.ts");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TocItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TocItem */ "./src/components/Layout/TocItem.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\Layout\\Layout.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projects_next_srd_v3_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











const documentGroups = _anchors_json__WEBPACK_IMPORTED_MODULE_7__.filter(a => a.level === 1).reduce((prev, current) => {
  const groupIndex = prev.findIndex(group => group.groupName === current.groupName);
  if (groupIndex === -1) return [...prev, {
    groupName: current.groupName,
    pages: [current]
  }];
  const pageIndex = prev[groupIndex].pages.findIndex(page => page.pageName === current.pageName);
  if (pageIndex !== -1) return prev;
  return [...prev.slice(0, groupIndex), _objectSpread(_objectSpread({}, prev[groupIndex]), {}, {
    pages: [...prev[groupIndex].pages, current]
  }), ...prev.slice(groupIndex + 1)];
}, []);

const Layout = ({
  children
}) => {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const basename = decodeURIComponent(router.asPath.split('#')[0].split('/').pop() || '');
  const toc = (0,_buildTOC__WEBPACK_IMPORTED_MODULE_9__.default)(basename);
  const {
    0: isSidebarVisible,
    1: setSidebarVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: isTOCVisible,
    1: setTOCVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    pageName,
    groupName: pageGroupName
  } = _anchors_json__WEBPACK_IMPORTED_MODULE_7__.find(anchor => anchor.level === 1 && anchor.basename === basename) || {};
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setSidebarVisible(window.innerWidth >= 1024);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!isTOCVisible && !isSidebarVisible) return () => {};

    const dissmissTOC = e => {
      let cursor = e.target;

      if (isSidebarVisible && window.innerWidth < 1024) {
        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar))) cursor = cursor.parentElement;

        if (!cursor) setSidebarVisible(false);
      } else if (isTOCVisible) {
        while (cursor && !cursor.classList.contains((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc))) cursor = cursor.parentElement;

        if (!cursor) setTOCVisible(false);
      }
    };

    window.addEventListener('click', dissmissTOC);
    return () => window.removeEventListener('click', dissmissTOC);
  }, [isTOCVisible, isSidebarVisible]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().block), isSidebarVisible === null && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockInit), isSidebarVisible && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithSidebar), toc.length === 0 && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().blockWithoutTOC)),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["v3.5 SRD", pageName && ` - ${pageName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().pageControls),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: () => setSidebarVisible(!isSidebarVisible),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          preserveAspectRatio: "xMidYMid meet",
          height: "1em",
          width: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toggleTOC),
        onClick: () => setTOCVisible(!isTOCVisible),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          preserveAspectRatio: "xMidYMid meet",
          height: "1em",
          width: "1em",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "10",
              x2: "7",
              y2: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().mainWrap),
      children: [toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc), isTOCVisible === true && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocVisible), isTOCVisible === false && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocHidden)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, item.anchor.basename, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().groupList),
        children: documentGroups.map(group => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("details", {
            open: !!group.pages.find(page => page.basename === basename),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("summary", {
              children: group.groupName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().inGroupList),
              children: group.pages.map(page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: `/docs/${page.basename.split('.')[0]}`,
                  prefetch: false,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(basename === page.basename && 'active'),
                    children: page.pageName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

_s(Layout, "HnIImLeAJjEAndn6K2lCotoo4H4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Layout;
Layout.defaultProps = {
  children: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJkb2N1bWVudEdyb3VwcyIsImFuY2hvcnMiLCJhIiwibGV2ZWwiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImdyb3VwSW5kZXgiLCJmaW5kSW5kZXgiLCJncm91cCIsImdyb3VwTmFtZSIsInBhZ2VzIiwicGFnZUluZGV4IiwicGFnZSIsInBhZ2VOYW1lIiwic2xpY2UiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImJhc2VuYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXNQYXRoIiwic3BsaXQiLCJwb3AiLCJ0b2MiLCJidWlsZFRPQyIsImlzU2lkZWJhclZpc2libGUiLCJzZXRTaWRlYmFyVmlzaWJsZSIsInVzZVN0YXRlIiwiaXNUT0NWaXNpYmxlIiwic2V0VE9DVmlzaWJsZSIsInBhZ2VHcm91cE5hbWUiLCJhbmNob3IiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGlzc21pc3NUT0MiLCJlIiwiY3Vyc29yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsInNlYXJjaEZvcm0iLCJmaW5kIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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TSxNO1VBQ1dHLGtEOzs7S0FEWEgsTTtBQW1KTkEsTUFBTSxDQUFDcUMsWUFBUCxHQUFzQjtBQUFFcEMsVUFBUSxFQUFFcUM7QUFBWixDQUF0QjtBQUVBLCtEQUFldEMsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uYTliM2ExMDBiNGIxYjNlMzQwYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9TZWFyY2hGb3JtJztcbmltcG9ydCBidWlsZFRPQyBmcm9tICcuL2J1aWxkVE9DJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRvY0l0ZW0gZnJvbSAnLi9Ub2NJdGVtJztcblxuY29uc3QgZG9jdW1lbnRHcm91cHMgPSBhbmNob3JzXG4gIC5maWx0ZXIoYSA9PiBhLmxldmVsID09PSAxKVxuICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJbmRleCA9IHByZXYuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmdyb3VwTmFtZSA9PT0gY3VycmVudC5ncm91cE5hbWUpO1xuICAgIGlmIChncm91cEluZGV4ID09PSAtMSkgcmV0dXJuIFsuLi5wcmV2LCB7IGdyb3VwTmFtZTogY3VycmVudC5ncm91cE5hbWUsIHBhZ2VzOiBbY3VycmVudF0gfV07XG4gICAgY29uc3QgcGFnZUluZGV4ID0gcHJldltncm91cEluZGV4XS5wYWdlcy5maW5kSW5kZXgocGFnZSA9PiBwYWdlLnBhZ2VOYW1lID09PSBjdXJyZW50LnBhZ2VOYW1lKTtcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkgcmV0dXJuIHByZXY7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnByZXYuc2xpY2UoMCwgZ3JvdXBJbmRleCksXG4gICAgICB7IC4uLnByZXZbZ3JvdXBJbmRleF0sIHBhZ2VzOiBbLi4ucHJldltncm91cEluZGV4XS5wYWdlcywgY3VycmVudF0gfSxcbiAgICAgIC4uLnByZXYuc2xpY2UoZ3JvdXBJbmRleCArIDEpLFxuICAgIF07XG4gIH0sIFtdIGFzIHsgZ3JvdXBOYW1lOiBzdHJpbmc7IHBhZ2VzOiB0eXBlb2YgYW5jaG9ycyB9W10pO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJhc2VuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIHJvdXRlci5hc1BhdGhcbiAgICAgIC5zcGxpdCgnIycpWzBdXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLnBvcCgpIHx8ICcnLFxuICApO1xuICBjb25zdCB0b2MgPSBidWlsZFRPQyhiYXNlbmFtZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1RPQ1Zpc2libGUsIHNldFRPQ1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHBhZ2VOYW1lLCBncm91cE5hbWU6IHBhZ2VHcm91cE5hbWUgfSA9XG4gICAgYW5jaG9ycy5maW5kKGFuY2hvciA9PiBhbmNob3IubGV2ZWwgPT09IDEgJiYgYW5jaG9yLmJhc2VuYW1lID09PSBiYXNlbmFtZSkgfHwge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaWRlYmFyVmlzaWJsZSh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUgJiYgIWlzU2lkZWJhclZpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpc1NpZGViYXJWaXNpYmxlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5zaWRlYmFyKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVE9DVmlzaWJsZSkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGUsIGlzU2lkZWJhclZpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7cGFnZU5hbWUgJiYgYCAtICR7cGFnZU5hbWV9YH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSl9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtwYWdlR3JvdXBOYW1lICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRHcm91cE5hbWV9PntwYWdlR3JvdXBOYW1lfTwvc3Bhbj4gL3snICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYWdlTmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVUT0N9IG9uQ2xpY2s9eygpID0+IHNldFRPQ1Zpc2libGUoIWlzVE9DVmlzaWJsZSl9PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxMFwiIHgyPVwiN1wiIHkyPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjZcIiB4Mj1cIjNcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE0XCIgeDI9XCIzXCIgeTI9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMThcIiB4Mj1cIjdcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXB9PlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBzdHlsZXMudG9jLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IHRydWUgJiYgc3R5bGVzLnRvY1Zpc2libGUsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gZmFsc2UgJiYgc3R5bGVzLnRvY0hpZGRlbixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkluIFRoaXMgQXJ0aWNsZTwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0b2MubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxUb2NJdGVtIGtleT17aXRlbS5hbmNob3IuYmFzZW5hbWV9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4pfT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SZXZpc2VkICh2LjMuNSkgU3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwTGlzdH0+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXshIWdyb3VwLnBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLmJhc2VuYW1lID09PSBiYXNlbmFtZSl9PlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pntncm91cC5ncm91cE5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbkdyb3VwTGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Z3JvdXAucGFnZXMubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlLmJhc2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvY3MvJHtwYWdlLmJhc2VuYW1lLnNwbGl0KCcuJylbMF19YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhiYXNlbmFtZSA9PT0gcGFnZS5iYXNlbmFtZSAmJiAnYWN0aXZlJyl9PntwYWdlLnBhZ2VOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0geyBjaGlsZHJlbjogdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=