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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJlZm9yZVBvcFN0YXRlIiwiZGlzc21pc3NUT0MiLCJlIiwiY3Vyc29yIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWVzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImZpbGVuYW1lIiwiaWQiLCJzZWFyY2hGb3JtIiwiZmluZCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsaURBQUEsQ0FDYkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEtBQUYs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O0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTWCxLQUFLLENBQUNDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1IRCxDQTFKRDs7R0FBTU0sTTtVQUNXRyxrRDs7O0tBRFhILE07QUE0Sk5BLE1BQU0sQ0FBQ3dDLFlBQVAsR0FBc0I7QUFBRXZDLFVBQVEsRUFBRXdDO0FBQVosQ0FBdEI7QUFFQSwrREFBZXpDLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLmE4NmFlMzk1ZjM1Nzc2MGU3Yjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgYnVpbGRUT0MgZnJvbSAnLi9idWlsZFRPQyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBUb2NJdGVtIGZyb20gJy4vVG9jSXRlbSc7XG5cbmNvbnN0IGRvY3VtZW50R3JvdXBzID0gYW5jaG9yc1xuICAuZmlsdGVyKGEgPT4gYS5sZXZlbCA9PT0gMSlcbiAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwSW5kZXggPSBwcmV2LmZpbmRJbmRleChncm91cCA9PiBncm91cC5ncm91cE5hbWUgPT09IGN1cnJlbnQuZ3JvdXBOYW1lKTtcbiAgICBpZiAoZ3JvdXBJbmRleCA9PT0gLTEpIHJldHVybiBbLi4ucHJldiwgeyBncm91cE5hbWU6IGN1cnJlbnQuZ3JvdXBOYW1lLCBwYWdlczogW2N1cnJlbnRdIH1dO1xuICAgIGNvbnN0IHBhZ2VJbmRleCA9IHByZXZbZ3JvdXBJbmRleF0ucGFnZXMuZmluZEluZGV4KHBhZ2UgPT4gcGFnZS5wYWdlTmFtZSA9PT0gY3VycmVudC5wYWdlTmFtZSk7XG4gICAgaWYgKHBhZ2VJbmRleCAhPT0gLTEpIHJldHVybiBwcmV2O1xuICAgIHJldHVybiBbXG4gICAgICAuLi5wcmV2LnNsaWNlKDAsIGdyb3VwSW5kZXgpLFxuICAgICAgeyAuLi5wcmV2W2dyb3VwSW5kZXhdLCBwYWdlczogWy4uLnByZXZbZ3JvdXBJbmRleF0ucGFnZXMsIGN1cnJlbnRdIH0sXG4gICAgICAuLi5wcmV2LnNsaWNlKGdyb3VwSW5kZXggKyAxKSxcbiAgICBdO1xuICB9LCBbXSBhcyB7IGdyb3VwTmFtZTogc3RyaW5nOyBwYWdlczogdHlwZW9mIGFuY2hvcnMgfVtdKTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IGFueSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBiYXNlbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICByb3V0ZXIuYXNQYXRoXG4gICAgICAuc3BsaXQoJyMnKVswXVxuICAgICAgLnNwbGl0KCcvJylcbiAgICAgIC5wb3AoKSB8fCAnJyxcbiAgKTtcbiAgY29uc3QgdG9jID0gYnVpbGRUT0MoYmFzZW5hbWUpO1xuICBjb25zdCBbaXNTaWRlYmFyVmlzaWJsZSwgc2V0U2lkZWJhclZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNUT0NWaXNpYmxlLCBzZXRUT0NWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBwYWdlTmFtZSwgZ3JvdXBOYW1lOiBwYWdlR3JvdXBOYW1lIH0gPVxuICAgIGFuY2hvcnMuZmluZChhbmNob3IgPT4gYW5jaG9yLmxldmVsID09PSAxICYmIGFuY2hvci5iYXNlbmFtZSA9PT0gYmFzZW5hbWUpIHx8IHt9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2lkZWJhclZpc2libGUod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCk7XG4gICAgcm91dGVyLmJlZm9yZVBvcFN0YXRlKCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSByZXR1cm4gdHJ1ZTtcbiAgICAgIHNldFNpZGViYXJWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNUT0NWaXNpYmxlICYmICFpc1NpZGViYXJWaXNpYmxlKSByZXR1cm4gKCkgPT4ge307XG4gICAgY29uc3QgZGlzc21pc3NUT0MgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGN1cnNvcjogSFRNTEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaXNTaWRlYmFyVmlzaWJsZSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgd2hpbGUgKGN1cnNvciAmJiAhY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMuc2lkZWJhcikpIGN1cnNvciA9IGN1cnNvci5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoIWN1cnNvcikgc2V0U2lkZWJhclZpc2libGUoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChpc1RPQ1Zpc2libGUpIHtcbiAgICAgICAgd2hpbGUgKGN1cnNvciAmJiAhY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMudG9jKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRUT0NWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3NtaXNzVE9DKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICB9LCBbaXNUT0NWaXNpYmxlLCBpc1NpZGViYXJWaXNpYmxlXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBzdHlsZXMuYmxvY2ssXG4gICAgICAgIGlzU2lkZWJhclZpc2libGUgPT09IG51bGwgJiYgc3R5bGVzLmJsb2NrSW5pdCxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSAmJiBzdHlsZXMuYmxvY2tXaXRoU2lkZWJhcixcbiAgICAgICAgdG9jLmxlbmd0aCA9PT0gMCAmJiBzdHlsZXMuYmxvY2tXaXRob3V0VE9DLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnYzLjUgU1JEe3BhZ2VOYW1lICYmIGAgLSAke3BhZ2VOYW1lfWB9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRyb2xzfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZWJhclZpc2libGUoIWlzU2lkZWJhclZpc2libGUpfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7cGFnZUdyb3VwTmFtZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50R3JvdXBOYW1lfT57cGFnZUdyb3VwTmFtZX08L3NwYW4+IC97JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFnZU5hbWV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlVE9DfSBvbkNsaWNrPXsoKSA9PiBzZXRUT0NWaXNpYmxlKCFpc1RPQ1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMTBcIiB4Mj1cIjdcIiB5Mj1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCI2XCIgeDI9XCIzXCIgeTI9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxNFwiIHgyPVwiM1wiIHkyPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE4XCIgeDI9XCI3XCIgeTI9XCIxOFwiIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5XcmFwfT5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgc3R5bGVzLnRvYyxcbiAgICAgICAgICAgICAgaXNUT0NWaXNpYmxlID09PSB0cnVlICYmIHN0eWxlcy50b2NWaXNpYmxlLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IGZhbHNlICYmIHN0eWxlcy50b2NIaWRkZW4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jhdy1odG1sLyR7YmFzZW5hbWV9Lmh0bWxgfT4odmlldyB1bnN0eWxlZCk8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDI+SW4gVGhpcyBBcnRpY2xlPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3RvYy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvY0l0ZW0ga2V5PXtgJHtpdGVtLmFuY2hvci5maWxlbmFtZX0ke2l0ZW0uYW5jaG9yLmlkfWB9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1haW4pfT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SZXZpc2VkICh2LjMuNSkgU3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvTGluaz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwTGlzdH0+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcChncm91cCA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtncm91cC5ncm91cE5hbWV9PlxuICAgICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXshIWdyb3VwLnBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLmJhc2VuYW1lID09PSBiYXNlbmFtZSl9PlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pntncm91cC5ncm91cE5hbWV9PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pbkdyb3VwTGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Z3JvdXAucGFnZXMubWFwKHBhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlLmJhc2VuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RvY3MvJHtwYWdlLmJhc2VuYW1lLnNwbGl0KCcuJylbMF19YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhiYXNlbmFtZSA9PT0gcGFnZS5iYXNlbmFtZSAmJiAnYWN0aXZlJyl9PntwYWdlLnBhZ2VOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0geyBjaGlsZHJlbjogdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=