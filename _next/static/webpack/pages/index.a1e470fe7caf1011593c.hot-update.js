webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _data_document_groups_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/document-groups.json */ "./data/document-groups.json");
var _data_document_groups_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/document-groups.json */ "./data/document-groups.json", 1);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SearchForm */ "./src/components/SearchForm/index.ts");
/* harmony import */ var _buildTOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildTOC */ "./src/components/Layout/buildTOC.ts");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TocItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TocItem */ "./src/components/Layout/TocItem.tsx");




var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\Layout\\Layout.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












const Layout = ({
  children
}) => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const lastPath = decodeURIComponent((router.asPath.match(/\/([^#]*)(#.*)?/) || [])[1] || '');
  const filename = `${lastPath}.html`;
  const toc = Object(_buildTOC__WEBPACK_IMPORTED_MODULE_9__["default"])(filename);
  const {
    0: isSidebarVisible,
    1: setSidebarVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null);
  const {
    0: isTOCVisible,
    1: setTOCVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null);
  const {
    textContent: currentMenuName,
    groupName: currentGroupName
  } = _data_document_groups_json__WEBPACK_IMPORTED_MODULE_7__.flatMap(a => a.pages.map(b => _objectSpread(_objectSpread({}, b), {}, {
    groupName: a.groupName
  }))).find(a => a.href === filename) || {};
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    setSidebarVisible(window.innerWidth >= 1024);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (!isTOCVisible) return () => {};

    const dissmissTOC = e => {
      var _cursor;

      let cursor = e.target;

      while (cursor && !cursor.classList.contains(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.toc)) cursor = cursor.parentElement;

      if (!((_cursor = cursor) === null || _cursor === void 0 ? void 0 : _cursor.classList.contains(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.toc))) setTOCVisible(false);
    };

    window.addEventListener('click', dissmissTOC);
    return () => window.removeEventListener('click', dissmissTOC);
  }, [isTOCVisible]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.block, isSidebarVisible === null && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.blockInit, isSidebarVisible && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.blockWithSidebar, toc.length === 0 && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.blockWithoutTOC),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: ["v3.5 SRD", currentMenuName && ` - ${currentMenuName}`]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.pageControls,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "button",
        onClick: () => setSidebarVisible(!isSidebarVisible),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: [currentGroupName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.currentGroupName,
            children: currentGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), currentMenuName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), toc.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "button",
        className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.toggleTOC,
        onClick: () => setTOCVisible(!isTOCVisible),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "10",
              x2: "7",
              y2: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.mainWrap,
      children: [toc.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.toc, isTOCVisible === true && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.tocVisible, isTOCVisible === false && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.tocHidden),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: toc.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_TocItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: item
          }, item.anchor.href, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.main),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.sidebar,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.searchForm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.groupList,
        children: _data_document_groups_json__WEBPACK_IMPORTED_MODULE_7__.map(group => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("details", {
            open: !!group.pages.find(page => page.href === filename),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("summary", {
              children: group.groupName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
              className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.inGroupList,
              children: group.pages.map(page => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: `/docs/${page.href.split('.')[0]}`,
                  prefetch: false,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(filename === page.href && 'active'),
                    children: page.textContent
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 23
                }, undefined)
              }, page.href, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

_s(Layout, "HnIImLeAJjEAndn6K2lCotoo4H4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYXN0UGF0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsIm1hdGNoIiwiZmlsZW5hbWUiLCJ0b2MiLCJidWlsZFRPQyIsImlzU2lkZWJhclZpc2libGUiLCJzZXRTaWRlYmFyVmlzaWJsZSIsInVzZVN0YXRlIiwiaXNUT0NWaXNpYmxlIiwic2V0VE9DVmlzaWJsZSIsInRleHRDb250ZW50IiwiY3VycmVudE1lbnVOYW1lIiwiZ3JvdXBOYW1lIiwiY3VycmVudEdyb3VwTmFtZSIsImRvY3VtZW50R3JvdXBzIiwiZmxhdE1hcCIsImEiLCJwYWdlcyIsIm1hcCIsImIiLCJmaW5kIiwiaHJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkaXNzbWlzc1RPQyIsImUiLCJjdXJzb3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlcyIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJibG9jayIsImJsb2NrSW5pdCIsImJsb2NrV2l0aFNpZGViYXIiLCJsZW5ndGgiLCJibG9ja1dpdGhvdXRUT0MiLCJwYWdlQ29udHJvbHMiLCJ0b2dnbGVUT0MiLCJtYWluV3JhcCIsInRvY1Zpc2libGUiLCJ0b2NIaWRkZW4iLCJpdGVtIiwiYW5jaG9yIiwibWFpbiIsInNpZGViYXIiLCJzZWFyY2hGb3JtIiwiZ3JvdXBMaXN0IiwiZ3JvdXAiLCJwYWdlIiwiaW5Hcm91cExpc3QiLCJzcGxpdCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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LHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVMrQixLQUFLLENBQUN4QyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnSEQsQ0F6SUQ7O0dBQU1sQixNO1VBQ1dHLHFEOzs7S0FEWEgsTTtBQTJJTkEsTUFBTSxDQUFDOEQsWUFBUCxHQUFzQjtBQUFFN0QsVUFBUSxFQUFFOEQ7QUFBWixDQUF0QjtBQUVlL0QscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFlNDcwZmU3Y2FmMTAxMTU5M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkb2N1bWVudEdyb3VwcyBmcm9tICcuLi8uLi8uLi9kYXRhL2RvY3VtZW50LWdyb3Vwcy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxhc3RQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KChyb3V0ZXIuYXNQYXRoLm1hdGNoKC9cXC8oW14jXSopKCMuKik/LykgfHwgW10pWzFdIHx8ICcnKTtcbiAgY29uc3QgZmlsZW5hbWUgPSBgJHtsYXN0UGF0aH0uaHRtbGA7XG4gIGNvbnN0IHRvYyA9IGJ1aWxkVE9DKGZpbGVuYW1lKTtcbiAgY29uc3QgW2lzU2lkZWJhclZpc2libGUsIHNldFNpZGViYXJWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzVE9DVmlzaWJsZSwgc2V0VE9DVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgdGV4dENvbnRlbnQ6IGN1cnJlbnRNZW51TmFtZSwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0gPVxuICAgIGRvY3VtZW50R3JvdXBzLmZsYXRNYXAoYSA9PiBhLnBhZ2VzLm1hcChiID0+ICh7IC4uLmIsIGdyb3VwTmFtZTogYS5ncm91cE5hbWUgfSkpKS5maW5kKGEgPT4gYS5ocmVmID09PSBmaWxlbmFtZSkgfHxcbiAgICB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpZGViYXJWaXNpYmxlKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzVE9DVmlzaWJsZSkgcmV0dXJuICgpID0+IHt9O1xuICAgIGNvbnN0IGRpc3NtaXNzVE9DID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGxldCBjdXJzb3I6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgd2hpbGUgKGN1cnNvciAmJiAhY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMudG9jKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAoIWN1cnNvcj8uY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICB9LCBbaXNUT0NWaXNpYmxlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBzdHlsZXMuYmxvY2ssXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgPT09IG51bGwgJiYgc3R5bGVzLmJsb2NrSW5pdCxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSAmJiBzdHlsZXMuYmxvY2tXaXRoU2lkZWJhcixcbiAgICAgICAgdG9jLmxlbmd0aCA9PT0gMCAmJiBzdHlsZXMuYmxvY2tXaXRob3V0VE9DLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnYzLjUgU1JEe2N1cnJlbnRNZW51TmFtZSAmJiBgIC0gJHtjdXJyZW50TWVudU5hbWV9YH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSl9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtjdXJyZW50R3JvdXBOYW1lICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRHcm91cE5hbWV9PntjdXJyZW50R3JvdXBOYW1lfTwvc3Bhbj4gL3snICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjdXJyZW50TWVudU5hbWV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlVE9DfSBvbkNsaWNrPXsoKSA9PiBzZXRUT0NWaXNpYmxlKCFpc1RPQ1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTBcIiB4Mj1cIjdcIiB5Mj1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCI2XCIgeDI9XCIzXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxNFwiIHgyPVwiM1wiIHkyPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE4XCIgeDI9XCI3XCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwfT5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgc3R5bGVzLnRvYyxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSB0cnVlICYmIHN0eWxlcy50b2NWaXNpYmxlLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IGZhbHNlICYmIHN0eWxlcy50b2NIaWRkZW4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5JbiBUaGlzIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dG9jLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2l0ZW0uYW5jaG9yLmhyZWZ9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4pfT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SZXZpc2VkICh2LjMuNSkgU3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwTGlzdH0+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXshIWdyb3VwLnBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLmhyZWYgPT09IGZpbGVuYW1lKX0+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+e2dyb3VwLmdyb3VwTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluR3JvdXBMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kb2NzLyR7cGFnZS5ocmVmLnNwbGl0KCcuJylbMF19YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhmaWxlbmFtZSA9PT0gcGFnZS5ocmVmICYmICdhY3RpdmUnKX0+e3BhZ2UudGV4dENvbnRlbnR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7IGNoaWxkcmVuOiB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==