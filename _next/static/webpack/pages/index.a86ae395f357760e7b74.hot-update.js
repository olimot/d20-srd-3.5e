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
    router.beforePopState(() => {
      if (window.innerWidth >= 1024) return true;
      setSidebarVisible(false);
      setTOCVisible(false);
      return true;
    });
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
        lineNumber: 75,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
              lineNumber: 121,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
            lineNumber: 140,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, `${item.anchor.filename}${item.anchor.id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
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
              lineNumber: 163,
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
                    lineNumber: 168,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJlZm9yZVBvcFN0YXRlIiwiZGlzc21pc3NUT0MiLCJlIiwiY3Vyc29yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImZpbGVuYW1lIiwiaWQiLCJzZWFyY2hGb3JtIiwiZmluZCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsaURBQUEsQ0FDYkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEtBQUYs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O0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTWCxLQUFLLENBQUNDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1IRCxDQTFKRDs7R0FBTU0sTTtVQUNXRyxrRDs7O0tBRFhILE07QUE0Sk5BLE1BQU0sQ0FBQ3dDLFlBQVAsR0FBc0I7QUFBRXZDLFVBQVEsRUFBRXdDO0FBQVosQ0FBdEI7QUFFQSwrREFBZXpDLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTg2YWUzOTVmMzU3NzYwZTdiNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9TZWFyY2hGb3JtJztcbmltcG9ydCBidWlsZFRPQyBmcm9tICcuL2J1aWxkVE9DJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRvY0l0ZW0gZnJvbSAnLi9Ub2NJdGVtJztcblxuY29uc3QgZG9jdW1lbnRHcm91cHMgPSBhbmNob3JzXG4gIC5maWx0ZXIoYSA9PiBhLmxldmVsID09PSAxKVxuICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJbmRleCA9IHByZXYuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmdyb3VwTmFtZSA9PT0gY3VycmVudC5ncm91cE5hbWUpO1xuICAgIGlmIChncm91cEluZGV4ID09PSAtMSkgcmV0dXJuIFsuLi5wcmV2LCB7IGdyb3VwTmFtZTogY3VycmVudC5ncm91cE5hbWUsIHBhZ2VzOiBbY3VycmVudF0gfV07XG4gICAgY29uc3QgcGFnZUluZGV4ID0gcHJldltncm91cEluZGV4XS5wYWdlcy5maW5kSW5kZXgocGFnZSA9PiBwYWdlLnBhZ2VOYW1lID09PSBjdXJyZW50LnBhZ2VOYW1lKTtcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkgcmV0dXJuIHByZXY7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnByZXYuc2xpY2UoMCwgZ3JvdXBJbmRleCksXG4gICAgICB7IC4uLnByZXZbZ3JvdXBJbmRleF0sIHBhZ2VzOiBbLi4ucHJldltncm91cEluZGV4XS5wYWdlcywgY3VycmVudF0gfSxcbiAgICAgIC4uLnByZXYuc2xpY2UoZ3JvdXBJbmRleCArIDEpLFxuICAgIF07XG4gIH0sIFtdIGFzIHsgZ3JvdXBOYW1lOiBzdHJpbmc7IHBhZ2VzOiB0eXBlb2YgYW5jaG9ycyB9W10pO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuPzogYW55IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJhc2VuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIHJvdXRlci5hc1BhdGhcbiAgICAgIC5zcGxpdCgnIycpWzBdXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLnBvcCgpIHx8ICcnLFxuICApO1xuICBjb25zdCB0b2MgPSBidWlsZFRPQyhiYXNlbmFtZSk7XG4gIGNvbnN0IFtpc1NpZGViYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1RPQ1Zpc2libGUsIHNldFRPQ1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHBhZ2VOYW1lLCBncm91cE5hbWU6IHBhZ2VHcm91cE5hbWUgfSA9XG4gICAgYW5jaG9ycy5maW5kKGFuY2hvciA9PiBhbmNob3IubGV2ZWwgPT09IDEgJiYgYW5jaG9yLmJhc2VuYW1lID09PSBiYXNlbmFtZSkgfHwge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaWRlYmFyVmlzaWJsZSh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KTtcbiAgICByb3V0ZXIuYmVmb3JlUG9wU3RhdGUoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHJldHVybiB0cnVlO1xuICAgICAgc2V0U2lkZWJhclZpc2libGUoZmFsc2UpO1xuICAgICAgc2V0VE9DVmlzaWJsZShmYWxzZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUgJiYgIWlzU2lkZWJhclZpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpc1NpZGViYXJWaXNpYmxlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5zaWRlYmFyKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVE9DVmlzaWJsZSkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGUsIGlzU2lkZWJhclZpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7cGFnZU5hbWUgJiYgYCAtICR7cGFnZU5hbWV9YH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSl9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtwYWdlR3JvdXBOYW1lICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRHcm91cE5hbWV9PntwYWdlR3JvdXBOYW1lfTwvc3Bhbj4gL3snICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYWdlTmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVUT0N9IG9uQ2xpY2s9eygpID0+IHNldFRPQ1Zpc2libGUoIWlzVE9DVmlzaWJsZSl9PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxMFwiIHgyPVwiN1wiIHkyPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjZcIiB4Mj1cIjNcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE0XCIgeDI9XCIzXCIgeTI9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMThcIiB4Mj1cIjdcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXB9PlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBzdHlsZXMudG9jLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IHRydWUgJiYgc3R5bGVzLnRvY1Zpc2libGUsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gZmFsc2UgJiYgc3R5bGVzLnRvY0hpZGRlbixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmF3LWh0bWwvJHtiYXNlbmFtZX0uaHRtbGB9Pih2aWV3IHVuc3R5bGVkKTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj5JbiBUaGlzIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dG9jLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2Ake2l0ZW0uYW5jaG9yLmZpbGVuYW1lfSR7aXRlbS5hbmNob3IuaWR9YH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICl9XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbil9PntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlJldmlzZWQgKHYuMy41KSBTeXN0ZW0gUmVmZXJlbmNlIERvY3VtZW50PC9MaW5rPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBMaXN0fT5cbiAgICAgICAgICB7ZG9jdW1lbnRHcm91cHMubWFwKGdyb3VwID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2dyb3VwLmdyb3VwTmFtZX0+XG4gICAgICAgICAgICAgIDxkZXRhaWxzIG9wZW49eyEhZ3JvdXAucGFnZXMuZmluZChwYWdlID0+IHBhZ2UuYmFzZW5hbWUgPT09IGJhc2VuYW1lKX0+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+e2dyb3VwLmdyb3VwTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluR3JvdXBMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UuYmFzZW5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhZ2UuYmFzZW5hbWUuc3BsaXQoJy4nKVswXX1gfSBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJhc2VuYW1lID09PSBwYWdlLmJhc2VuYW1lICYmICdhY3RpdmUnKX0+e3BhZ2UucGFnZU5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7IGNoaWxkcmVuOiB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==