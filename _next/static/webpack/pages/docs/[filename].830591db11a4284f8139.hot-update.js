self["webpackHotUpdate_N_E"]("pages/docs/[filename]",{

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
      }, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uTGlua0NsaWNrIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNzbWlzc1RPQyIsImN1cnNvciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGVzIiwicGFyZW50RWxlbWVudCIsImNsYXNzTmFtZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiZmlsZW5hbWUiLCJpZCIsInNlYXJjaEZvcm0iLCJmaW5kIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBQSxDQUNiQyxDQUFDLElB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S0FBOUQ7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUUyQixpREFBVSxDQUFDOUIsUUFBUSxLQUFLUCxJQUFJLENBQUNPLFFBQWxCLElBQThCLFFBQS9CLENBQXhCO0FBQUEsOEJBQW1FUCxJQUFJLENBQUNDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNELElBQUksQ0FBQ08sUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTWCxLQUFLLENBQUNDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1IRCxDQTlKRDs7R0FBTU0sTTtVQUNXRyxrRDs7O0tBRFhILE07QUFnS05BLE1BQU0sQ0FBQzBDLFlBQVAsR0FBc0I7QUFBRXpDLFVBQVEsRUFBRTBDO0FBQVosQ0FBdEI7QUFFQSwrREFBZTNDLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjgzMDU5MWRiMTFhNDI4NGY4MTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgYnVpbGRUT0MgZnJvbSAnLi9idWlsZFRPQyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBUb2NJdGVtIGZyb20gJy4vVG9jSXRlbSc7XG5cbmNvbnN0IGRvY3VtZW50R3JvdXBzID0gYW5jaG9yc1xuICAuZmlsdGVyKGEgPT4gYS5sZXZlbCA9PT0gMSlcbiAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwSW5kZXggPSBwcmV2LmZpbmRJbmRleChncm91cCA9PiBncm91cC5ncm91cE5hbWUgPT09IGN1cnJlbnQuZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXBJbmRleCA9PT0gLTEpIHJldHVybiBbLi4ucHJldiwgeyBncm91cE5hbWU6IGN1cnJlbnQuZ3JvdXBOYW1lLCBwYWdlczogW2N1cnJlbnRdIH1dO1xuICAgIGNvbnN0IHBhZ2VJbmRleCA9IHByZXZbZ3JvdXBJbmRleF0ucGFnZXMuZmluZEluZGV4KHBhZ2UgPT4gcGFnZS5wYWdlTmFtZSA9PT0gY3VycmVudC5wYWdlTmFtZSk7XG4gICAgaWYgKHBhZ2VJbmRleCAhPT0gLTEpIHJldHVybiBwcmV2O1xuICAgIHJldHVybiBbXG4gICAgICAuLi5wcmV2LnNsaWNlKDAsIGdyb3VwSW5kZXgpLFxuICAgICAgeyAuLi5wcmV2W2dyb3VwSW5kZXhdLCBwYWdlczogWy4uLnByZXZbZ3JvdXBJbmRleF0ucGFnZXMsIGN1cnJlbnRdIH0sXG4gICAgICAuLi5wcmV2LnNsaWNlKGdyb3VwSW5kZXggKyAxKSxcbiAgICBdO1xuICB9LCBbXSBhcyB7IGdyb3VwTmFtZTogc3RyaW5nOyBwYWdlczogdHlwZW9mIGFuY2hvcnMgfVtdKTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IGFueSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBiYXNlbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICByb3V0ZXIuYXNQYXRoXG4gICAgICAuc3BsaXQoJyMnKVswXVxuICAgICAgLnNwbGl0KCcvJylcbiAgICAgIC5wb3AoKSB8fCAnJyxcbiAgKTtcbiAgY29uc3QgdG9jID0gYnVpbGRUT0MoYmFzZW5hbWUpO1xuICBjb25zdCBbaXNTaWRlYmFyVmlzaWJsZSwgc2V0U2lkZWJhclZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNUT0NWaXNpYmxlLCBzZXRUT0NWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBwYWdlTmFtZSwgZ3JvdXBOYW1lOiBwYWdlR3JvdXBOYW1lIH0gPVxuICAgIGFuY2hvcnMuZmluZChhbmNob3IgPT4gYW5jaG9yLmxldmVsID09PSAxICYmIGFuY2hvci5iYXNlbmFtZSA9PT0gYmFzZW5hbWUpIHx8IHt9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2lkZWJhclZpc2libGUod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCk7XG4gICAgY29uc3Qgb25MaW5rQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdBJyB8fCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSByZXR1cm47XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2lkZWJhclZpc2libGUoZmFsc2UpO1xuICAgICAgICBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkxpbmtDbGljayk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTGlua0NsaWNrKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUgJiYgIWlzU2lkZWJhclZpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpc1NpZGViYXJWaXNpYmxlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5zaWRlYmFyKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVE9DVmlzaWJsZSkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGUsIGlzU2lkZWJhclZpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7cGFnZU5hbWUgJiYgYCAtICR7cGFnZU5hbWV9YH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSl9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtwYWdlR3JvdXBOYW1lICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRHcm91cE5hbWV9PntwYWdlR3JvdXBOYW1lfTwvc3Bhbj4gL3snICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYWdlTmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVUT0N9IG9uQ2xpY2s9eygpID0+IHNldFRPQ1Zpc2libGUoIWlzVE9DVmlzaWJsZSl9PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxMFwiIHgyPVwiN1wiIHkyPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjZcIiB4Mj1cIjNcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE0XCIgeDI9XCIzXCIgeTI9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMThcIiB4Mj1cIjdcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXB9PlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBzdHlsZXMudG9jLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IHRydWUgJiYgc3R5bGVzLnRvY1Zpc2libGUsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gZmFsc2UgJiYgc3R5bGVzLnRvY0hpZGRlbixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmF3LWh0bWwvJHtiYXNlbmFtZX0uaHRtbGB9Pih2aWV3IHVuc3R5bGVkKTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj5JbiBUaGlzIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dG9jLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2Ake2l0ZW0uYW5jaG9yLmZpbGVuYW1lfSR7aXRlbS5hbmNob3IuaWR9YH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICl9XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbil9PntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlJldmlzZWQgKHYuMy41KSBTeXN0ZW0gUmVmZXJlbmNlIERvY3VtZW50PC9MaW5rPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBMaXN0fT5cbiAgICAgICAgICB7ZG9jdW1lbnRHcm91cHMubWFwKGdyb3VwID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2dyb3VwLmdyb3VwTmFtZX0+XG4gICAgICAgICAgICAgIDxkZXRhaWxzIG9wZW49eyEhZ3JvdXAucGFnZXMuZmluZChwYWdlID0+IHBhZ2UuYmFzZW5hbWUgPT09IGJhc2VuYW1lKX0+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+e2dyb3VwLmdyb3VwTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluR3JvdXBMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UuYmFzZW5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhZ2UuYmFzZW5hbWUuc3BsaXQoJy4nKVswXX1gfSBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJhc2VuYW1lID09PSBwYWdlLmJhc2VuYW1lICYmICdhY3RpdmUnKX0+e3BhZ2UucGFnZU5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7IGNoaWxkcmVuOiB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==