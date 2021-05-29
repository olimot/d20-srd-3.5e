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
      console.log(e.target, window.innerWidth >= 1024);
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
        lineNumber: 74,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
              lineNumber: 91,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [pageGroupName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().currentGroupName),
            children: pageGroupName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, undefined), " /", ' ']
        }, void 0, true), pageName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
              lineNumber: 120,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "6",
              x2: "3",
              y2: "6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "14",
              x2: "3",
              y2: "14"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("line", {
              x1: "21",
              y1: "18",
              x2: "7",
              y2: "18"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
            lineNumber: 139,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "In This Article"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: toc.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TocItem__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: item
          }, `${item.anchor.filename}${item.anchor.id}`, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sidebar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchForm)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: "Revised (v.3.5) System Reference Document"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
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
              lineNumber: 162,
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
                    lineNumber: 167,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, undefined)
        }, group.groupName, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlbmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImFzUGF0aCIsInNwbGl0IiwicG9wIiwidG9jIiwiYnVpbGRUT0MiLCJpc1NpZGViYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJ1c2VTdGF0ZSIsImlzVE9DVmlzaWJsZSIsInNldFRPQ1Zpc2libGUiLCJwYWdlR3JvdXBOYW1lIiwiYW5jaG9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uTGlua0NsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3NtaXNzVE9DIiwiY3Vyc29yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZXMiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NOYW1lcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJmaWxlbmFtZSIsImlkIiwic2VhcmNoRm9ybSIsImZpbmQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGlEQUFBLENBQ2JDLENBQUMsSUFBSUEsQ0FB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QTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTRCxJQUFJLENBQUNPLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU1gsS0FBSyxDQUFDQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtSEQsQ0F6SkQ7O0dBQU1NLE07VUFDV0csa0Q7OztLQURYSCxNO0FBMkpOQSxNQUFNLENBQUMwQyxZQUFQLEdBQXNCO0FBQUV6QyxVQUFRLEVBQUUwQztBQUFaLENBQXRCO0FBRUEsK0RBQWUzQyxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS45YzU1NDAwZjAwOTEyMTEyNzA3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IGJ1aWxkVE9DIGZyb20gJy4vYnVpbGRUT0MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgVG9jSXRlbSBmcm9tICcuL1RvY0l0ZW0nO1xuXG5jb25zdCBkb2N1bWVudEdyb3VwcyA9IGFuY2hvcnNcbiAgLmZpbHRlcihhID0+IGEubGV2ZWwgPT09IDEpXG4gIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCBncm91cEluZGV4ID0gcHJldi5maW5kSW5kZXgoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBOYW1lID09PSBjdXJyZW50Lmdyb3VwTmFtZSk7XG4gICAgaWYgKGdyb3VwSW5kZXggPT09IC0xKSByZXR1cm4gWy4uLnByZXYsIHsgZ3JvdXBOYW1lOiBjdXJyZW50Lmdyb3VwTmFtZSwgcGFnZXM6IFtjdXJyZW50XSB9XTtcbiAgICBjb25zdCBwYWdlSW5kZXggPSBwcmV2W2dyb3VwSW5kZXhdLnBhZ2VzLmZpbmRJbmRleChwYWdlID0+IHBhZ2UucGFnZU5hbWUgPT09IGN1cnJlbnQucGFnZU5hbWUpO1xuICAgIGlmIChwYWdlSW5kZXggIT09IC0xKSByZXR1cm4gcHJldjtcbiAgICByZXR1cm4gW1xuICAgICAgLi4ucHJldi5zbGljZSgwLCBncm91cEluZGV4KSxcbiAgICAgIHsgLi4ucHJldltncm91cEluZGV4XSwgcGFnZXM6IFsuLi5wcmV2W2dyb3VwSW5kZXhdLnBhZ2VzLCBjdXJyZW50XSB9LFxuICAgICAgLi4ucHJldi5zbGljZShncm91cEluZGV4ICsgMSksXG4gICAgXTtcbiAgfSwgW10gYXMgeyBncm91cE5hbWU6IHN0cmluZzsgcGFnZXM6IHR5cGVvZiBhbmNob3JzIH1bXSk7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBhbnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYmFzZW5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgcm91dGVyLmFzUGF0aFxuICAgICAgLnNwbGl0KCcjJylbMF1cbiAgICAgIC5zcGxpdCgnLycpXG4gICAgICAucG9wKCkgfHwgJycsXG4gICk7XG4gIGNvbnN0IHRvYyA9IGJ1aWxkVE9DKGJhc2VuYW1lKTtcbiAgY29uc3QgW2lzU2lkZWJhclZpc2libGUsIHNldFNpZGViYXJWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzVE9DVmlzaWJsZSwgc2V0VE9DVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgcGFnZU5hbWUsIGdyb3VwTmFtZTogcGFnZUdyb3VwTmFtZSB9ID1cbiAgICBhbmNob3JzLmZpbmQoYW5jaG9yID0+IGFuY2hvci5sZXZlbCA9PT0gMSAmJiBhbmNob3IuYmFzZW5hbWUgPT09IGJhc2VuYW1lKSB8fCB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNpZGViYXJWaXNpYmxlKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpO1xuICAgIGNvbnN0IG9uTGlua0NsaWNrID0gZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCwgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkxpbmtDbGljayk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTGlua0NsaWNrKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1RPQ1Zpc2libGUgJiYgIWlzU2lkZWJhclZpc2libGUpIHJldHVybiAoKSA9PiB7fTtcbiAgICBjb25zdCBkaXNzbWlzc1RPQyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgY3Vyc29yOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpc1NpZGViYXJWaXNpYmxlICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5zaWRlYmFyKSkgY3Vyc29yID0gY3Vyc29yLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmICghY3Vyc29yKSBzZXRTaWRlYmFyVmlzaWJsZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVE9DVmlzaWJsZSkge1xuICAgICAgICB3aGlsZSAoY3Vyc29yICYmICFjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy50b2MpKSBjdXJzb3IgPSBjdXJzb3IucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFjdXJzb3IpIHNldFRPQ1Zpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzc21pc3NUT0MpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNzbWlzc1RPQyk7XG4gIH0sIFtpc1RPQ1Zpc2libGUsIGlzU2lkZWJhclZpc2libGVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5ibG9jayxcbiAgICAgICAgaXNTaWRlYmFyVmlzaWJsZSA9PT0gbnVsbCAmJiBzdHlsZXMuYmxvY2tJbml0LFxuICAgICAgICBpc1NpZGViYXJWaXNpYmxlICYmIHN0eWxlcy5ibG9ja1dpdGhTaWRlYmFyLFxuICAgICAgICB0b2MubGVuZ3RoID09PSAwICYmIHN0eWxlcy5ibG9ja1dpdGhvdXRUT0MsXG4gICAgICApfVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+djMuNSBTUkR7cGFnZU5hbWUgJiYgYCAtICR7cGFnZU5hbWV9YH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyVmlzaWJsZSghaXNTaWRlYmFyVmlzaWJsZSl9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiIC8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMjFcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHtwYWdlR3JvdXBOYW1lICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRHcm91cE5hbWV9PntwYWdlR3JvdXBOYW1lfTwvc3Bhbj4gL3snICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYWdlTmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RvYy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVUT0N9IG9uQ2xpY2s9eygpID0+IHNldFRPQ1Zpc2libGUoIWlzVE9DVmlzaWJsZSl9PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIxMFwiIHgyPVwiN1wiIHkyPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjZcIiB4Mj1cIjNcIiB5Mj1cIjZcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjE0XCIgeDI9XCIzXCIgeTI9XCIxNFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiMThcIiB4Mj1cIjdcIiB5Mj1cIjE4XCIgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbldyYXB9PlxuICAgICAgICB7dG9jLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBzdHlsZXMudG9jLFxuICAgICAgICAgICAgICBpc1RPQ1Zpc2libGUgPT09IHRydWUgJiYgc3R5bGVzLnRvY1Zpc2libGUsXG4gICAgICAgICAgICAgIGlzVE9DVmlzaWJsZSA9PT0gZmFsc2UgJiYgc3R5bGVzLnRvY0hpZGRlbixcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmF3LWh0bWwvJHtiYXNlbmFtZX0uaHRtbGB9Pih2aWV3IHVuc3R5bGVkKTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMj5JbiBUaGlzIEFydGljbGU8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dG9jLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8VG9jSXRlbSBrZXk9e2Ake2l0ZW0uYW5jaG9yLmZpbGVuYW1lfSR7aXRlbS5hbmNob3IuaWR9YH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICl9XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbil9PntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlJldmlzZWQgKHYuMy41KSBTeXN0ZW0gUmVmZXJlbmNlIERvY3VtZW50PC9MaW5rPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBMaXN0fT5cbiAgICAgICAgICB7ZG9jdW1lbnRHcm91cHMubWFwKGdyb3VwID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2dyb3VwLmdyb3VwTmFtZX0+XG4gICAgICAgICAgICAgIDxkZXRhaWxzIG9wZW49eyEhZ3JvdXAucGFnZXMuZmluZChwYWdlID0+IHBhZ2UuYmFzZW5hbWUgPT09IGJhc2VuYW1lKX0+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+e2dyb3VwLmdyb3VwTmFtZX08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmluR3JvdXBMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UuYmFzZW5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhZ2UuYmFzZW5hbWUuc3BsaXQoJy4nKVswXX1gfSBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGJhc2VuYW1lID09PSBwYWdlLmJhc2VuYW1lICYmICdhY3RpdmUnKX0+e3BhZ2UucGFnZU5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7IGNoaWxkcmVuOiB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==