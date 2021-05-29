self["webpackHotUpdate_N_E"]("pages/index",{

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

    const onLinkClick = e => {
      const target = e.target;
      if (target.tagName !== 'A' || window.innerWidth >= 1024) return;
      setTimeout(() => {
        setSidebarVisible(false);
        setTOCVisible(false);
      }, 33);
    };

    window.addEventListener('click', onLinkClick);
    return () => window.removeEventListener('click', onLinkClick);
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
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
              lineNumber: 96,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
              lineNumber: 125,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().mainWrap),
      children: [toc.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().toc), isTOCVisible === true && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocVisible), isTOCVisible === false && (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tocHidden)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/raw-html/${basename}.html`,
            children: "(view unstyled)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, `${item.anchor.filename}${item.anchor.id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
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
              lineNumber: 167,
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
                    lineNumber: 172,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uTGlua0NsaWNrIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNzbWlzc1RPQyIsImN1cnNvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGVzIiwicGFyZW50RWxlbWVudCIsImNsYXNzTmFtZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiZmlsZW5hbWUiLCJpZCIsInNlYXJjaEZvcm0iLCJmaW5kIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBQSxDQUNiQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZLENBREosRUFFcEJDLE1BRm9CLENBRWIsQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLEtBQW1CO0FBQ3pCLFFBQU1DLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxTQUFMLENBQWVDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxTQUFOLEtBQW9CSixPQUFPLENBQUNJLFNBQXBELENBQW5CO0FBQ0EsTUFBSUgsVUFBVSxLQUFLLENBQUMsQ0FBcEIsRUFBdUIsT0FBTyxDQUFDLEdBQUdGLElBQUosRUFBVTtBQUFFSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ0ksU0FBckI7QUFBZ0NDLFNBQUssRUFBRSxDQUFDTCxPQUFEO0FBQXZDLEdBQVYsQ0FBUDtBQUN2QixRQUFNTSxTQUFTLEdBQUdQLElBQUksQ0FBQ0UsVUFBRCxDQUFKLENBQWlCSSxLQUFqQixDQUF1QkgsU0FBdkIsQ0FBaUNLLElBQUksSUFBSUEsSUFBSSxDQUFDQyxRQUFMLEtBQWtCUixPQUFPLENBQUNRLFFBQW5FLENBQWxCO0FBQ0EsTUFBSUYsU0FBUyxLQUFLLENBQUMsQ0FBbkIsRUFBc0IsT0FBT1AsSUFBUDtBQUN0QixTQUFPLENBQ0wsR0FBR0EsSUFBSSxDQUFDVSxLQUFMLENBQVcsQ0FBWCxFQUFjUixVQUFkLENBREUsa0NBRUFGLElBQUksQ0FBQ0UsVUFBRCxDQUZKO0FBRWtCSSxTQUFLLEVBQUUsQ0FBQyxHQUFHTixJQUFJLENBQUNFLFVBQUQsQ0FBSixDQUFpQkksS0FBckIsRUFBNEJMLE9BQTVCO0FBRnpCLE1BR0wsR0FBR0QsSUFBSSxDQUFDVSxLQUFMLENBQVdSLFVBQVUsR0FBRyxDQUF4QixDQUhFLENBQVA7QUFLRCxDQVpvQixFQVlsQixFQVprQixDQUF2Qjs7QUFjQSxNQUFNUyxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBc0M7QUFBQTs7QUFDbkQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0Msa0JBQWtCLENBQ2pDSCxNQUFNLENBQUNJLE1BQVAsQ0FDR0MsS0FESCxDQUNTLEdBRFQsRUFDYyxDQURkLEVBRUdBLEtBRkgsQ0FFUyxHQUZULEVBR0dDLEdBSEgsTUFHWSxFQUpxQixDQUFuQztBQU1BLFFBQU1DLEdBQUcsR0FBR0Msa0RBQVEsQ0FBQ04sUUFBRCxDQUFwQjtBQUNBLFFBQU07QUFBQSxPQUFDTyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUF3Q0MsK0NBQVEsQ0FBaUIsSUFBakIsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBZ0NGLCtDQUFRLENBQWlCLElBQWpCLENBQTlDO0FBQ0EsUUFBTTtBQUFFZixZQUFGO0FBQVlKLGFBQVMsRUFBRXNCO0FBQXZCLE1BQ0ovQiwrQ0FBQSxDQUFhZ0MsTUFBTSxJQUFJQSxNQUFNLENBQUM5QixLQUFQLEtBQWlCLENBQWpCLElBQXNCOEIsTUFBTSxDQUFDYixRQUFQLEtBQW9CQSxRQUFqRSxLQUE4RSxFQURoRjtBQUdBYyxrREFBUyxDQUFDLE1BQU07QUFDZE4scUJBQWlCLENBQUNPLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQixJQUF0QixDQUFqQjs7QUFDQSxVQUFNQyxXQUFXLEdBQUlDLENBQUQsSUFBbUI7QUFDckMsWUFBTUMsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQWpCO0FBQ0EsVUFBSUEsTUFBTSxDQUFDQyxPQUFQLEtBQW1CLEdBQW5CLElBQTBCTCxNQUFNLENBQUNDLFVBQVAsSUFBcUIsSUFBbkQsRUFBeUQ7QUFDekRLLGdCQUFVLENBQUMsTUFBTTtBQUNmYix5QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FHLHFCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsT0FIUyxFQUdQLEVBSE8sQ0FBVjtBQUlELEtBUEQ7O0FBUUFJLFVBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNMLFdBQWpDO0FBQ0EsV0FBTyxNQUFNRixNQUFNLENBQUNRLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DTixXQUFwQyxDQUFiO0FBQ0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBSCxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNKLFlBQUQsSUFBaUIsQ0FBQ0gsZ0JBQXRCLEVBQXdDLE9BQU8sTUFBTSxDQUFFLENBQWY7O0FBQ3hDLFVBQU1pQixXQUFXLEdBQUlOLENBQUQsSUFBbUI7QUFDckMsVUFBSU8sTUFBMEIsR0FBR1AsQ0FBQyxDQUFDQyxNQUFuQzs7QUFDQSxVQUFJWixnQkFBZ0IsSUFBSVEsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQTVDLEVBQWtEO0FBQ2hELGVBQU9TLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxxRUFBMUIsQ0FBbEIsRUFBNkRILE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxhQUFoQjs7QUFDN0QsWUFBSSxDQUFDSixNQUFMLEVBQWFqQixpQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ2QsT0FIRCxNQUdPLElBQUlFLFlBQUosRUFBa0I7QUFDdkIsZUFBT2UsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLGlFQUExQixDQUFsQixFQUF5REgsTUFBTSxHQUFHQSxNQUFNLENBQUNJLGFBQWhCOztBQUN6RCxZQUFJLENBQUNKLE1BQUwsRUFBYWQsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNkO0FBQ0YsS0FURDs7QUFVQUksVUFBTSxDQUFDTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0UsV0FBakM7QUFDQSxXQUFPLE1BQU1ULE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NDLFdBQXBDLENBQWI7QUFDRCxHQWRRLEVBY04sQ0FBQ2QsWUFBRCxFQUFlSCxnQkFBZixDQWRNLENBQVQ7QUFlQSxzQkFDRTtBQUNFLGFBQVMsRUFBRXVCLGlEQUFVLENBQ25CRixtRUFEbUIsRUFFbkJyQixnQkFBZ0IsS0FBSyxJQUFyQixJQUE2QnFCLHVFQUZWLEVBR25CckIsZ0JBQWdCLElBQUlxQiw4RUFIRCxFQUluQnZCLEdBQUcsQ0FBQzBCLE1BQUosS0FBZSxDQUFmLElBQW9CSCw2RUFKRCxDQUR2QjtBQUFBLDRCQVFFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSwrQkFBZ0JsQyxRQUFRLElBQUssTUFBS0EsUUFBUyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBV0U7QUFBSyxlQUFTLEVBQUVrQywwRUFBaEI7QUFBQSw4QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxNQUFNcEIsaUJBQWlCLENBQUMsQ0FBQ0QsZ0JBQUYsQ0FBdEQ7QUFBQSwrQkFDRTtBQUNFLDZCQUFtQixFQUFDLGVBRHRCO0FBRUUsZ0JBQU0sRUFBQyxLQUZUO0FBR0UsZUFBSyxFQUFDLEtBSFI7QUFJRSxjQUFJLEVBQUMsTUFKUDtBQUtFLGVBQUssRUFBQyw0QkFMUjtBQU1FLGlCQUFPLEVBQUMsV0FOVjtBQU9FLHFCQUFXLEVBQUMsR0FQZDtBQVFFLHVCQUFhLEVBQUMsT0FSaEI7QUFTRSx3QkFBYyxFQUFDLE9BVGpCO0FBVUUsZ0JBQU0sRUFBQyxjQVZUO0FBQUEsaUNBWUU7QUFBQSxvQ0FDRTtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLGdCQUFFLEVBQUMsSUFBaEI7QUFBcUIsZ0JBQUUsRUFBQyxJQUF4QjtBQUE2QixnQkFBRSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLGdCQUFFLEVBQUMsR0FBaEI7QUFBb0IsZ0JBQUUsRUFBQyxJQUF2QjtBQUE0QixnQkFBRSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLGdCQUFFLEVBQUMsSUFBaEI7QUFBcUIsZ0JBQUUsRUFBQyxJQUF4QjtBQUE2QixnQkFBRSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFxQkU7QUFBQSxtQkFDR0ssYUFBYSxpQkFDWjtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBRWdCLDhFQUFqQjtBQUFBLHNCQUEyQ2hCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsUUFDcUUsR0FEckU7QUFBQSx3QkFGSixFQU1HbEIsUUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGLEVBNkJHVyxHQUFHLENBQUMwQixNQUFKLEdBQWEsQ0FBYixpQkFDQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUVILHVFQUFqQztBQUFtRCxlQUFPLEVBQUUsTUFBTWpCLGFBQWEsQ0FBQyxDQUFDRCxZQUFGLENBQS9FO0FBQUEsK0JBQ0U7QUFDRSw2QkFBbUIsRUFBQyxlQUR0QjtBQUVFLGdCQUFNLEVBQUMsS0FGVDtBQUdFLGVBQUssRUFBQyxLQUhSO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxlQUFLLEVBQUMsNEJBTFI7QUFNRSxpQkFBTyxFQUFDLFdBTlY7QUFPRSxxQkFBVyxFQUFDLEdBUGQ7QUFRRSx1QkFBYSxFQUFDLE9BUmhCO0FBU0Usd0JBQWMsRUFBQyxPQVRqQjtBQVVFLGdCQUFNLEVBQUMsY0FWVDtBQUFBLGlDQVlFO0FBQUEsb0NBQ0U7QUFBTSxnQkFBRSxFQUFDLElBQVQ7QUFBYyxnQkFBRSxFQUFDLElBQWpCO0FBQXNCLGdCQUFFLEVBQUMsR0FBekI7QUFBNkIsZ0JBQUUsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBTSxnQkFBRSxFQUFDLElBQVQ7QUFBYyxnQkFBRSxFQUFDLEdBQWpCO0FBQXFCLGdCQUFFLEVBQUMsR0FBeEI7QUFBNEIsZ0JBQUUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBTSxnQkFBRSxFQUFDLElBQVQ7QUFBYyxnQkFBRSxFQUFDLElBQWpCO0FBQXNCLGdCQUFFLEVBQUMsR0FBekI7QUFBNkIsZ0JBQUUsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBSUU7QUFBTSxnQkFBRSxFQUFDLElBQVQ7QUFBYyxnQkFBRSxFQUFDLElBQWpCO0FBQXNCLGdCQUFFLEVBQUMsR0FBekI7QUFBNkIsZ0JBQUUsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFnRUU7QUFBSyxlQUFTLEVBQUVrQixzRUFBaEI7QUFBQSxpQkFDR3ZCLEdBQUcsQ0FBQzBCLE1BQUosR0FBYSxDQUFiLGlCQUNDO0FBQ0UsaUJBQVMsRUFBRUQsaURBQVUsQ0FDbkJGLGlFQURtQixFQUVuQmxCLFlBQVksS0FBSyxJQUFqQixJQUF5QmtCLHdFQUZOLEVBR25CbEIsWUFBWSxLQUFLLEtBQWpCLElBQTBCa0IsdUVBSFAsQ0FEdkI7QUFBQSxnQ0FPRTtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRyxhQUFZNUIsUUFBUyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFO0FBQUEsb0JBQ0dLLEdBQUcsQ0FBQzJCLEdBQUosQ0FBUUMsSUFBSSxpQkFDWCw4REFBQyw4Q0FBRDtBQUEwRCxnQkFBSSxFQUFFQTtBQUFoRSxhQUFlLEdBQUVBLElBQUksQ0FBQ3BCLE1BQUwsQ0FBWXFCLFFBQVMsR0FBRUQsSUFBSSxDQUFDcEIsTUFBTCxDQUFZc0IsRUFBRyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFvQkU7QUFBTSxpQkFBUyxFQUFFTCxpREFBVSxDQUFDRixrRUFBRCxDQUEzQjtBQUFBLGtCQUEyQy9CO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoRUYsZUFzRkU7QUFBSyxlQUFTLEVBQUUrQixxRUFBaEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFLDhEQUFDLGdEQUFEO0FBQVksbUJBQVMsRUFBRUEsd0VBQWlCUTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFBSSxpQkFBUyxFQUFFUix1RUFBZjtBQUFBLGtCQUNHaEQsY0FBYyxDQUFDb0QsR0FBZixDQUFtQjNDLEtBQUssaUJBQ3ZCO0FBQUEsaUNBQ0U7QUFBUyxnQkFBSSxFQUFFLENBQUMsQ0FBQ0EsS0FBSyxDQUFDRSxLQUFOLENBQVk4QyxJQUFaLENBQWlCNUMsSUFBSSxJQUFJQSxJQUFJLENBQUNPLFFBQUwsS0FBa0JBLFFBQTNDLENBQWpCO0FBQUEsb0NBQ0U7QUFBQSx3QkFBVVgsS0FBSyxDQUFDQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSSx1QkFBUyxFQUFFc0MseUVBQWY7QUFBQSx3QkFDR3ZDLEtBQUssQ0FBQ0UsS0FBTixDQUFZeUMsR0FBWixDQUFnQnZDLElBQUksaUJBQ25CO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFHLFNBQVFBLElBQUksQ0FBQ08sUUFBTCxDQUFjRyxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQTRCLEVBQWpEO0FBQW9ELDBCQUFRLEVBQUUsS0FBOUQ7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUUyQixpREFBVSxDQUFDOUIsUUFBUSxLQUFLUCxJQUFJLENBQUNPLFFBQWxCLElBQThCLFFBQS9CLENBQXhCO0FBQUEsOEJBQW1FUCxJQUFJLENBQUNDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNELElBQUksQ0FBQ08sUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTWCxLQUFLLENBQUNDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1IRCxDQTlKRDs7R0FBTU0sTTtVQUNXRyxrRDs7O0tBRFhILE07QUFnS05BLE1BQU0sQ0FBQzBDLFlBQVAsR0FBc0I7QUFBRXpDLFVBQVEsRUFBRTBDO0FBQVosQ0FBdEI7QUFFQSwrREFBZTNDLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM2ZDc1NDE5ODg5MjJkNTgyYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9TZWFyY2hGb3JtJztcbmltcG9ydCBidWlsZFRPQyBmcm9tICcuL2J1aWxkVE9DJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRvY0l0ZW0gZnJvbSAnLi9Ub2NJdGVtJztcblxuY29uc3QgZG9jdW1lbnRHcm91cHMgPSBhbmNob3JzXG4gIC5maWx0ZXIoYSA9PiBhLmxldmVsID09PSAxKVxuICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJbmRleCA9IHByZXYuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmdyb3VwTmFtZSA9PT0gY3VycmVudC5ncm91cE5hbWUpO1xuICAgIGlmIChncm91cEluZGV4ID09PSAtMSkgcmV0dXJuIFsuLi5wcmV2LCB7IGdyb3VwTmFtZTogY3VycmVudC5ncm91cE5hbWUsIHBhZ2VzOiBbY3VycmVudF0gfV07XG4gICAgY29uc3QgcGFnZUluZGV4ID0gcHJldltncm91cEluZGV4XS5wYWdlcy5maW5kSW5kZXgocGFnZSA9PiBwYWdlLnBhZ2VOYW1lID09PSBjdXJyZW50LnBhZ2VOYW1lKTtcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkgcmV0dXJuIHByZXY7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnByZXYuc2xpY2UoMCwgZ3JvdXBJbmRleCksXG4gICAgICB7IC4uLnByZXZbZ3JvdXBJbmRleF0sIHBhZ2VzOiBbLi4ucHJldltncm91cEluZGV4XS5wYWdlcywgY3VycmVudF0gfSxcbiAgICAgIC4uLnByZXYuc2xpY2UoZ3JvdXBJbmRleCArIDEpLFxuICAgIF07XG4gIH0sIFtdIGFzIHsgZ3JvdXBOYW1lOiBzdHJpbmc7IHBhZ2VzOiB0eXBlb2YgYW5jaG9ycyB9W10pO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJhc2VuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIHJvdXRlci5hc1BhdGhcbiAgICAgIC5zcGxpdCgnIycpWzBdXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLnBvcCgpIHx8ICcnLFxuICApO1xuICBjb25zdCB0b2MgPSBidWlsZFRPQyhiYXNlbmFtZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1RPQ1Zpc2libGUsIHNldFRPQ1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHBhZ2VOYW1lLCBncm91cE5hbWU6IHBhZ2VHcm91cE5hbWUgfSA9XG4gICAgYW5jaG9ycy5maW5kKGFuY2hvciA9PiBhbmNob3IubGV2ZWwgPT09IDEgJiYgYW5jaG9yLmJhc2VuYW1lID09PSBiYXNlbmFtZSkgfHwge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaWRlYmFyVmlzaWJsZSh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KTtcbiAgICBjb25zdCBvbkxpbmtDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8IHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHJldHVybjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfSwgMzMpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25MaW5rQ2xpY2spO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkxpbmtDbGljayk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNUT0NWaXNpYmxlICYmICFpc1NpZGViYXJWaXNpYmxlKSByZXR1cm4gKCkgPT4ge307XG4gICAgY29uc3QgZGlzc21pc3NUT0MgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGN1cnNvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaXNTaWRlYmFyVmlzaWJsZSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgd2hpbGUgKGN1cnNvciAmJiAhY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMuc2lkZWJhcikpIGN1cnNvciA9IGN1cnNvci5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoIWN1cnNvcikgc2V0U2lkZWJhclZpc2libGUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChpc1RPQ1Zpc2libGUpIHtcbiAgICAgICAgd2hpbGUgKGN1cnNvciAmJiAhY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMudG9jKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICB9LCBbaXNUT0NWaXNpYmxlLCBpc1NpZGViYXJWaXNpYmxlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBzdHlsZXMuYmxvY2ssXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgPT09IG51bGwgJiYgc3R5bGVzLmJsb2NrSW5pdCxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSAmJiBzdHlsZXMuYmxvY2tXaXRoU2lkZWJhcixcbiAgICAgICAgdG9jLmxlbmd0aCA9PT0gMCAmJiBzdHlsZXMuYmxvY2tXaXRob3V0VE9DLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnYzLjUgU1JEe3BhZ2VOYW1lICYmIGAgLSAke3BhZ2VOYW1lfWB9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRyb2xzfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7cGFnZUdyb3VwTmFtZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50R3JvdXBOYW1lfT57cGFnZUdyb3VwTmFtZX08L3NwYW4+IC97JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZU5hbWV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlVE9DfSBvbkNsaWNrPXsoKSA9PiBzZXRUT0NWaXNpYmxlKCFpc1RPQ1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTBcIiB4Mj1cIjdcIiB5Mj1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCI2XCIgeDI9XCIzXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxNFwiIHgyPVwiM1wiIHkyPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE4XCIgeDI9XCI3XCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwfT5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgc3R5bGVzLnRvYyxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSB0cnVlICYmIHN0eWxlcy50b2NWaXNpYmxlLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IGZhbHNlICYmIHN0eWxlcy50b2NIaWRkZW4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jhdy1odG1sLyR7YmFzZW5hbWV9Lmh0bWxgfT4odmlldyB1bnN0eWxlZCk8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDI+SW4gVGhpcyBBcnRpY2xlPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3RvYy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvY0l0ZW0ga2V5PXtgJHtpdGVtLmFuY2hvci5maWxlbmFtZX0ke2l0ZW0uYW5jaG9yLmlkfWB9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4pfT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SZXZpc2VkICh2LjMuNSkgU3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwTGlzdH0+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXshIWdyb3VwLnBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLmJhc2VuYW1lID09PSBiYXNlbmFtZSl9PlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pntncm91cC5ncm91cE5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbkdyb3VwTGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Z3JvdXAucGFnZXMubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlLmJhc2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvY3MvJHtwYWdlLmJhc2VuYW1lLnNwbGl0KCcuJylbMF19YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhiYXNlbmFtZSA9PT0gcGFnZS5iYXNlbmFtZSAmJiAnYWN0aXZlJyl9PntwYWdlLnBhZ2VOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0geyBjaGlsZHJlbjogdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=