webpackHotUpdate_N_E("pages/docs/[filename]",{

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
  const lastPath = decodeURIComponent(router.asPath.split('#')[0].split('/').pop() || '');
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
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: [currentGroupName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.currentGroupName,
            children: currentGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), currentMenuName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
              lineNumber: 98,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.mainWrap,
      children: [toc.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.toc, isTOCVisible === true && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.tocVisible, isTOCVisible === false && _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.tocHidden),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: toc.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_TocItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
            item: item
          }, item.anchor.href, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.main),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.sidebar,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.searchForm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
              lineNumber: 137,
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
                    lineNumber: 142,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 23
                }, undefined)
              }, page.href, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYXN0UGF0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwiZmlsZW5hbWUiLCJ0b2MiLCJidWlsZFRPQyIsImlzU2lkZWJhclZpc2libGUiLCJzZXRTaWRlYmFyVmlzaWJsZSIsInVzZVN0YXRlIiwiaXNUT0NWaXNpYmxlIiwic2V0VE9DVmlzaWJsZSIsInRleHRDb250ZW50IiwiY3VycmVudE1lbnVOYW1lIiwiZ3JvdXBOYW1lIiwiY3VycmVudEdyb3VwTmFtZSIsImRvY3VtZW50R3JvdXBzIiwiZmxhdE1hcCIsImEiLCJwYWdlcyIsIm1hcCIsImIiLCJmaW5kIiwiaHJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkaXNzbWlzc1RPQyIsImUiLCJjdXJzb3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlcyIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJibG9jayIsImJsb2NrSW5pdCIsImJsb2NrV2l0aFNpZGViYXIiLCJsZW5ndGgiLCJibG9ja1dpdGhvdXRUT0MiLCJwYWdlQ29udHJvbHMiLCJ0b2dnbGVUT0MiLCJtYWluV3JhcCIsInRvY1Zpc2libGUiLCJ0b2NIaWRkZW4iLCJpdGVtIiwiYW5jaG9yIiwibWFpbiIsInNpZGViYXIiLCJzZWFyY2hGb3JtIiwiZ3JvdXBMaXN0IiwiZ3JvdXAiLCJwYWdlIiwiaW5Hcm91cExpc3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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QUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBUytCLEtBQUssQ0FBQ3hDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdIRCxDQTlJRDs7R0FBTW5CLE07VUFDV0cscUQ7OztLQURYSCxNO0FBZ0pOQSxNQUFNLENBQUM4RCxZQUFQLEdBQXNCO0FBQUU3RCxVQUFRLEVBQUU4RDtBQUFaLENBQXRCO0FBRWUvRCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uNDU4Mzk4MDIwNzllMjY5ODdhNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkb2N1bWVudEdyb3VwcyBmcm9tICcuLi8uLi8uLi9kYXRhL2RvY3VtZW50LWdyb3Vwcy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxhc3RQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIHJvdXRlci5hc1BhdGhcbiAgICAgIC5zcGxpdCgnIycpWzBdXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLnBvcCgpIHx8ICcnLFxuICApO1xuICBjb25zdCBmaWxlbmFtZSA9IGAke2xhc3RQYXRofS5odG1sYDtcbiAgY29uc3QgdG9jID0gYnVpbGRUT0MoZmlsZW5hbWUpO1xuICBjb25zdCBbaXNTaWRlYmFyVmlzaWJsZSwgc2V0U2lkZWJhclZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNUT0NWaXNpYmxlLCBzZXRUT0NWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyB0ZXh0Q29udGVudDogY3VycmVudE1lbnVOYW1lLCBncm91cE5hbWU6IGN1cnJlbnRHcm91cE5hbWUgfSA9XG4gICAgZG9jdW1lbnRHcm91cHMuZmxhdE1hcChhID0+IGEucGFnZXMubWFwKGIgPT4gKHsgLi4uYiwgZ3JvdXBOYW1lOiBhLmdyb3VwTmFtZSB9KSkpLmZpbmQoYSA9PiBhLmhyZWYgPT09IGZpbGVuYW1lKSB8fFxuICAgIHt9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2lkZWJhclZpc2libGUod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNUT0NWaXNpYmxlKSByZXR1cm4gKCkgPT4ge307XG4gICAgY29uc3QgZGlzc21pc3NUT0MgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGN1cnNvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghY3Vyc29yPy5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnRvYykpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7Y3VycmVudE1lbnVOYW1lICYmIGAgLSAke2N1cnJlbnRNZW51TmFtZX1gfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250cm9sc30+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJWaXNpYmxlKCFpc1NpZGViYXJWaXNpYmxlKX0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxMlwiIHgyPVwiMjFcIiB5Mj1cIjEyXCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMThcIiB4Mj1cIjIxXCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDI+XG4gICAgICAgICAge2N1cnJlbnRHcm91cE5hbWUgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEdyb3VwTmFtZX0+e2N1cnJlbnRHcm91cE5hbWV9PC9zcGFuPiAveycgJ31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2N1cnJlbnRNZW51TmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVUT0N9IG9uQ2xpY2s9eygpID0+IHNldFRPQ1Zpc2libGUoIWlzVE9DVmlzaWJsZSl9PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxMFwiIHgyPVwiN1wiIHkyPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjZcIiB4Mj1cIjNcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE0XCIgeDI9XCIzXCIgeTI9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMThcIiB4Mj1cIjdcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXB9PlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBzdHlsZXMudG9jLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IHRydWUgJiYgc3R5bGVzLnRvY1Zpc2libGUsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gZmFsc2UgJiYgc3R5bGVzLnRvY0hpZGRlbixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkluIFRoaXMgQXJ0aWNsZTwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0b2MubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxUb2NJdGVtIGtleT17aXRlbS5hbmNob3IuaHJlZn0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICl9XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbil9PntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlJldmlzZWQgKHYuMy41KSBTeXN0ZW0gUmVmZXJlbmNlIERvY3VtZW50PC9MaW5rPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBMaXN0fT5cbiAgICAgICAgICB7ZG9jdW1lbnRHcm91cHMubWFwKGdyb3VwID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2dyb3VwLmdyb3VwTmFtZX0+XG4gICAgICAgICAgICAgIDxkZXRhaWxzIG9wZW49eyEhZ3JvdXAucGFnZXMuZmluZChwYWdlID0+IHBhZ2UuaHJlZiA9PT0gZmlsZW5hbWUpfT5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT57Z3JvdXAuZ3JvdXBOYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5Hcm91cExpc3R9PlxuICAgICAgICAgICAgICAgICAge2dyb3VwLnBhZ2VzLm1hcChwYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvY3MvJHtwYWdlLmhyZWYuc3BsaXQoJy4nKVswXX1gfSBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGZpbGVuYW1lID09PSBwYWdlLmhyZWYgJiYgJ2FjdGl2ZScpfT57cGFnZS50ZXh0Q29udGVudH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHsgY2hpbGRyZW46IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9