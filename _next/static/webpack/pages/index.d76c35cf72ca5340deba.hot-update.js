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
      setSidebarVisible(false);
      setTOCVisible(false);
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
        lineNumber: 77,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
              lineNumber: 94,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
              lineNumber: 123,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
            lineNumber: 142,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, `${item.anchor.filename}${item.anchor.id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
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
              lineNumber: 165,
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
                    lineNumber: 170,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uTGlua0NsaWNrIiwiZSIsInRhcmdldCIsInRhZ05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3NtaXNzVE9DIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NOYW1lcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJmaWxlbmFtZSIsImlkIiwic2VhcmNoRm9ybSIsImZpbmQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGlEQUFBLENBQ2JDLENBQUMsSUFBSUEsQ0FBQyxDQUFD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SSxDQUFDTyxRQUFsQixJQUE4QixRQUEvQixDQUF4QjtBQUFBLDhCQUFtRVAsSUFBSSxDQUFDQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTRCxJQUFJLENBQUNPLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU1gsS0FBSyxDQUFDQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtSEQsQ0E1SkQ7O0dBQU1NLE07VUFDV0csa0Q7OztLQURYSCxNO0FBOEpOQSxNQUFNLENBQUN5QyxZQUFQLEdBQXNCO0FBQUV4QyxVQUFRLEVBQUV5QztBQUFaLENBQXRCO0FBRUEsK0RBQWUxQyxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3NmMzNWNmNzJjYTUzNDBkZWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgYnVpbGRUT0MgZnJvbSAnLi9idWlsZFRPQyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBUb2NJdGVtIGZyb20gJy4vVG9jSXRlbSc7XG5cbmNvbnN0IGRvY3VtZW50R3JvdXBzID0gYW5jaG9yc1xuICAuZmlsdGVyKGEgPT4gYS5sZXZlbCA9PT0gMSlcbiAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwSW5kZXggPSBwcmV2LmZpbmRJbmRleChncm91cCA9PiBncm91cC5ncm91cE5hbWUgPT09IGN1cnJlbnQuZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXBJbmRleCA9PT0gLTEpIHJldHVybiBbLi4ucHJldiwgeyBncm91cE5hbWU6IGN1cnJlbnQuZ3JvdXBOYW1lLCBwYWdlczogW2N1cnJlbnRdIH1dO1xuICAgIGNvbnN0IHBhZ2VJbmRleCA9IHByZXZbZ3JvdXBJbmRleF0ucGFnZXMuZmluZEluZGV4KHBhZ2UgPT4gcGFnZS5wYWdlTmFtZSA9PT0gY3VycmVudC5wYWdlTmFtZSk7XG4gICAgaWYgKHBhZ2VJbmRleCAhPT0gLTEpIHJldHVybiBwcmV2O1xuICAgIHJldHVybiBbXG4gICAgICAuLi5wcmV2LnNsaWNlKDAsIGdyb3VwSW5kZXgpLFxuICAgICAgeyAuLi5wcmV2W2dyb3VwSW5kZXhdLCBwYWdlczogWy4uLnByZXZbZ3JvdXBJbmRleF0ucGFnZXMsIGN1cnJlbnRdIH0sXG4gICAgICAuLi5wcmV2LnNsaWNlKGdyb3VwSW5kZXggKyAxKSxcbiAgICBdO1xuICB9LCBbXSBhcyB7IGdyb3VwTmFtZTogc3RyaW5nOyBwYWdlczogdHlwZW9mIGFuY2hvcnMgfVtdKTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IGFueSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBiYXNlbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICByb3V0ZXIuYXNQYXRoXG4gICAgICAuc3BsaXQoJyMnKVswXVxuICAgICAgLnNwbGl0KCcvJylcbiAgICAgIC5wb3AoKSB8fCAnJyxcbiAgKTtcbiAgY29uc3QgdG9jID0gYnVpbGRUT0MoYmFzZW5hbWUpO1xuICBjb25zdCBbaXNTaWRlYmFyVmlzaWJsZSwgc2V0U2lkZWJhclZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNUT0NWaXNpYmxlLCBzZXRUT0NWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBwYWdlTmFtZSwgZ3JvdXBOYW1lOiBwYWdlR3JvdXBOYW1lIH0gPVxuICAgIGFuY2hvcnMuZmluZChhbmNob3IgPT4gYW5jaG9yLmxldmVsID09PSAxICYmIGFuY2hvci5iYXNlbmFtZSA9PT0gYmFzZW5hbWUpIHx8IHt9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2lkZWJhclZpc2libGUod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCk7XG4gICAgY29uc3Qgb25MaW5rQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdBJyB8fCB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSByZXR1cm47XG4gICAgICBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTGlua0NsaWNrKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25MaW5rQ2xpY2spO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzVE9DVmlzaWJsZSAmJiAhaXNTaWRlYmFyVmlzaWJsZSkgcmV0dXJuICgpID0+IHt9O1xuICAgIGNvbnN0IGRpc3NtaXNzVE9DID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGxldCBjdXJzb3I6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGlzU2lkZWJhclZpc2libGUgJiYgd2luZG93LmlubmVyV2lkdGggPCAxMDI0KSB7XG4gICAgICAgIHdoaWxlIChjdXJzb3IgJiYgIWN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnNpZGViYXIpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFNpZGViYXJWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUT0NWaXNpYmxlKSB7XG4gICAgICAgIHdoaWxlIChjdXJzb3IgJiYgIWN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLnRvYykpIGN1cnNvciA9IGN1cnNvci5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoIWN1cnNvcikgc2V0VE9DVmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgfSwgW2lzVE9DVmlzaWJsZSwgaXNTaWRlYmFyVmlzaWJsZV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgc3R5bGVzLmJsb2NrLFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlID09PSBudWxsICYmIHN0eWxlcy5ibG9ja0luaXQsXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgJiYgc3R5bGVzLmJsb2NrV2l0aFNpZGViYXIsXG4gICAgICAgIHRvYy5sZW5ndGggPT09IDAgJiYgc3R5bGVzLmJsb2NrV2l0aG91dFRPQyxcbiAgICAgICl9XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT52My41IFNSRHtwYWdlTmFtZSAmJiBgIC0gJHtwYWdlTmFtZX1gfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250cm9sc30+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXJWaXNpYmxlKCFpc1NpZGViYXJWaXNpYmxlKX0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxMlwiIHgyPVwiMjFcIiB5Mj1cIjEyXCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMThcIiB4Mj1cIjIxXCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDI+XG4gICAgICAgICAge3BhZ2VHcm91cE5hbWUgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEdyb3VwTmFtZX0+e3BhZ2VHcm91cE5hbWV9PC9zcGFuPiAveycgJ31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3BhZ2VOYW1lfVxuICAgICAgICA8L2gyPlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVRPQ30gb25DbGljaz17KCkgPT4gc2V0VE9DVmlzaWJsZSghaXNUT0NWaXNpYmxlKX0+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjEwXCIgeDI9XCI3XCIgeTI9XCIxMFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiNlwiIHgyPVwiM1wiIHkyPVwiNlwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTRcIiB4Mj1cIjNcIiB5Mj1cIjE0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxOFwiIHgyPVwiN1wiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluV3JhcH0+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgIHN0eWxlcy50b2MsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gdHJ1ZSAmJiBzdHlsZXMudG9jVmlzaWJsZSxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSBmYWxzZSAmJiBzdHlsZXMudG9jSGlkZGVuLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yYXctaHRtbC8ke2Jhc2VuYW1lfS5odG1sYH0+KHZpZXcgdW5zdHlsZWQpPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyPkluIFRoaXMgQXJ0aWNsZTwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHt0b2MubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxUb2NJdGVtIGtleT17YCR7aXRlbS5hbmNob3IuZmlsZW5hbWV9JHtpdGVtLmFuY2hvci5pZH1gfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgKX1cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluKX0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+UmV2aXNlZCAodi4zLjUpIFN5c3RlbSBSZWZlcmVuY2UgRG9jdW1lbnQ8L0xpbms+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cExpc3R9PlxuICAgICAgICAgIHtkb2N1bWVudEdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17Z3JvdXAuZ3JvdXBOYW1lfT5cbiAgICAgICAgICAgICAgPGRldGFpbHMgb3Blbj17ISFncm91cC5wYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5iYXNlbmFtZSA9PT0gYmFzZW5hbWUpfT5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT57Z3JvdXAuZ3JvdXBOYW1lfTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaW5Hcm91cExpc3R9PlxuICAgICAgICAgICAgICAgICAge2dyb3VwLnBhZ2VzLm1hcChwYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5iYXNlbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kb2NzLyR7cGFnZS5iYXNlbmFtZS5zcGxpdCgnLicpWzBdfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYmFzZW5hbWUgPT09IHBhZ2UuYmFzZW5hbWUgJiYgJ2FjdGl2ZScpfT57cGFnZS5wYWdlTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHsgY2hpbGRyZW46IHVuZGVmaW5lZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9