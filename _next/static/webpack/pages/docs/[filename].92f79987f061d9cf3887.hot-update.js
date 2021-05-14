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
  const lastPath = decodeURIComponent(router.asPath.split('/').pop() || '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsYXN0UGF0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwiZmlsZW5hbWUiLCJ0b2MiLCJidWlsZFRPQyIsImlzU2lkZWJhclZpc2libGUiLCJzZXRTaWRlYmFyVmlzaWJsZSIsInVzZVN0YXRlIiwiaXNUT0NWaXNpYmxlIiwic2V0VE9DVmlzaWJsZSIsInRleHRDb250ZW50IiwiY3VycmVudE1lbnVOYW1lIiwiZ3JvdXBOYW1lIiwiY3VycmVudEdyb3VwTmFtZSIsImRvY3VtZW50R3JvdXBzIiwiZmxhdE1hcCIsImEiLCJwYWdlcyIsIm1hcCIsImIiLCJmaW5kIiwiaHJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkaXNzbWlzc1RPQyIsImUiLCJjdXJzb3IiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlcyIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJibG9jayIsImJsb2NrSW5pdCIsImJsb2NrV2l0aFNpZGViYXIiLCJsZW5ndGgiLCJibG9ja1dpdGhvdXRUT0MiLCJwYWdlQ29udHJvbHMiLCJ0b2dnbGVUT0MiLCJtYWluV3JhcCIsInRvY1Zpc2libGUiLCJ0b2NIaWRkZW4iLCJpdGVtIiwiYW5jaG9yIiwibWFpbiIsInNpZGViYXIiLCJzZWFyY2hGb3JtIiwiZ3JvdXBMaXN0IiwiZ3JvdXAiLCJwYWdlIiwiaW5Hcm91cExpc3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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QUE7QUFBQTtBQUFBO0FBREYsV0FBUytCLEtBQUssQ0FBQ3hDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdIRCxDQXpJRDs7R0FBTW5CLE07VUFDV0cscUQ7OztLQURYSCxNO0FBMklOQSxNQUFNLENBQUM4RCxZQUFQLEdBQXNCO0FBQUU3RCxVQUFRLEVBQUU4RDtBQUFaLENBQXRCO0FBRWUvRCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uOTJmNzk5ODdmMDYxZDljZjM4ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkb2N1bWVudEdyb3VwcyBmcm9tICcuLi8uLi8uLi9kYXRhL2RvY3VtZW50LWdyb3Vwcy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxhc3RQYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHJvdXRlci5hc1BhdGguc3BsaXQoJy8nKS5wb3AoKSB8fCAnJyk7XG4gIGNvbnN0IGZpbGVuYW1lID0gYCR7bGFzdFBhdGh9Lmh0bWxgO1xuICBjb25zdCB0b2MgPSBidWlsZFRPQyhmaWxlbmFtZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1RPQ1Zpc2libGUsIHNldFRPQ1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHRleHRDb250ZW50OiBjdXJyZW50TWVudU5hbWUsIGdyb3VwTmFtZTogY3VycmVudEdyb3VwTmFtZSB9ID1cbiAgICBkb2N1bWVudEdyb3Vwcy5mbGF0TWFwKGEgPT4gYS5wYWdlcy5tYXAoYiA9PiAoeyAuLi5iLCBncm91cE5hbWU6IGEuZ3JvdXBOYW1lIH0pKSkuZmluZChhID0+IGEuaHJlZiA9PT0gZmlsZW5hbWUpIHx8XG4gICAge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaWRlYmFyVmlzaWJsZSh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHdoaWxlIChjdXJzb3IgJiYgIWN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnRvYykpIGN1cnNvciA9IGN1cnNvci5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCFjdXJzb3I/LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMudG9jKSkgc2V0VE9DVmlzaWJsZShmYWxzZSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgfSwgW2lzVE9DVmlzaWJsZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgc3R5bGVzLmJsb2NrLFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlID09PSBudWxsICYmIHN0eWxlcy5ibG9ja0luaXQsXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgJiYgc3R5bGVzLmJsb2NrV2l0aFNpZGViYXIsXG4gICAgICAgIHRvYy5sZW5ndGggPT09IDAgJiYgc3R5bGVzLmJsb2NrV2l0aG91dFRPQyxcbiAgICAgICl9XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT52My41IFNSRHtjdXJyZW50TWVudU5hbWUgJiYgYCAtICR7Y3VycmVudE1lbnVOYW1lfWB9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRyb2xzfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7Y3VycmVudEdyb3VwTmFtZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50R3JvdXBOYW1lfT57Y3VycmVudEdyb3VwTmFtZX08L3NwYW4+IC97JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y3VycmVudE1lbnVOYW1lfVxuICAgICAgICA8L2gyPlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVRPQ30gb25DbGljaz17KCkgPT4gc2V0VE9DVmlzaWJsZSghaXNUT0NWaXNpYmxlKX0+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjEwXCIgeDI9XCI3XCIgeTI9XCIxMFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiNlwiIHgyPVwiM1wiIHkyPVwiNlwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTRcIiB4Mj1cIjNcIiB5Mj1cIjE0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxOFwiIHgyPVwiN1wiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluV3JhcH0+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgIHN0eWxlcy50b2MsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gdHJ1ZSAmJiBzdHlsZXMudG9jVmlzaWJsZSxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSBmYWxzZSAmJiBzdHlsZXMudG9jSGlkZGVuLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+SW4gVGhpcyBBcnRpY2xlPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3RvYy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvY0l0ZW0ga2V5PXtpdGVtLmFuY2hvci5ocmVmfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgKX1cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluKX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+UmV2aXNlZCAodi4zLjUpIFN5c3RlbSBSZWZlcmVuY2UgRG9jdW1lbnQ8L0xpbms+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cExpc3R9PlxuICAgICAgICAgIHtkb2N1bWVudEdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17Z3JvdXAuZ3JvdXBOYW1lfT5cbiAgICAgICAgICAgICAgPGRldGFpbHMgb3Blbj17ISFncm91cC5wYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5ocmVmID09PSBmaWxlbmFtZSl9PlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pntncm91cC5ncm91cE5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbkdyb3VwTGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Z3JvdXAucGFnZXMubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhZ2UuaHJlZi5zcGxpdCgnLicpWzBdfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZmlsZW5hbWUgPT09IHBhZ2UuaHJlZiAmJiAnYWN0aXZlJyl9PntwYWdlLnRleHRDb250ZW50fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0geyBjaGlsZHJlbjogdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=