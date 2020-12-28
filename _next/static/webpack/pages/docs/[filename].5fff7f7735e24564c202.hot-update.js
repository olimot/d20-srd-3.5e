webpackHotUpdate_N_E("pages/docs/[filename]",{

/***/ "./src/components/DocumentView/DocumentView.tsx":
/*!******************************************************!*\
  !*** ./src/components/DocumentView/DocumentView.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_anchors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/anchors.json */ "./data/anchors.json");
var _data_anchors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/anchors.json */ "./data/anchors.json", 1);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchForm */ "./src/components/SearchForm/index.ts");
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DocumentView.module.scss */ "./src/components/DocumentView/DocumentView.module.scss");
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\Projects\\ts\\srd-v3.5\\src\\components\\DocumentView\\DocumentView.tsx",
    _s = $RefreshSig$();

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/no-danger */








const DocumentView = ({
  filename,
  html
}) => {
  _s();

  const {
    0: layoutReady,
    1: setLayoutReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: menuActive,
    1: setMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [, docHTML] = html.split(/<body[^<>]*>|<\/body>/gi);
  const urlRe = new RegExp(`^${filename.replace(/[.*+?^${}()|[\]\\]}/g, '\\$&')}\\.html`);
  const headings = _data_anchors_json__WEBPACK_IMPORTED_MODULE_5__.filter(i => urlRe.test(i.filename));
  const headerref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const navref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (window.innerWidth >= 600) setMenuActive(true);
    setTimeout(() => setLayoutReady(true), 16);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout layout--site-header', layoutReady && 'layout--ready', menuActive && 'layout--fixed-drawer'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [filename, " - SRD3.5"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      ref: headerref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "icon icon--menu",
        onClick: () => setMenuActive(!menuActive),
        children: "Navigate this page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: "SRD 3.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        ref: navref,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/olimot/srd-v3.5",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.toc,
      children: headings.map((heading, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        id: i === 0 ? 'this-page-nav' : undefined,
        href: `#${heading.href.split('#').pop()}`,
        className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a[`anchor-${heading.hnum}`],
        onClick: () => {
          if (window.innerWidth < 660) setMenuActive(false);
        },
        children: heading.textContent
      }, heading.href, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.documentView, 'layout__wrap'),
      dangerouslySetInnerHTML: {
        __html: docHTML
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

_s(DocumentView, "6e4tp8rb45uDyB69T8Ng3+Y+Hxw=");

_c = DocumentView;
/* harmony default export */ __webpack_exports__["default"] = (DocumentView);

var _c;

$RefreshReg$(_c, "DocumentView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibGF5b3V0UmVhZHkiLCJzZXRMYXlvdXRSZWFkeSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJkb2NIVE1MIiwic3BsaXQiLCJ1cmxSZSIsIlJlZ0V4cCIsInJlcGxhY2UiLCJoZWFkaW5ncyIsImFuY2hvcnMiLCJmaWx0ZXIiLCJpIiwidGVzdCIsImhlYWRlcnJlZiIsInVzZVJlZiIsIm5hdnJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRUaW1lb3V0IiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInRvYyIsIm1hcCIsImhlYWRpbmciLCJ1bmRlZmluZWQiLCJocmVmIiwicG9wIiwiaG51bSIsInRleHRDb250ZW50IiwiZG9jdW1lbnRWaWV3IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQVUsS0FBVixDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBVSxLQUFWLENBQTVDO0FBQ0EsUUFBTSxHQUFHRyxPQUFILElBQWNOLElBQUksQ0FBQ08sS0FBTCxDQUFXLHlCQUFYLENBQXBCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBWSxJQUFHVixRQUFRLENBQUNXLE9B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QTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUNELENBbkREOztHQUFNUixZOztLQUFBQSxZO0FBcURTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uNWZmZjdmNzczNWUyNDU2NGMyMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uLy4uL2RhdGEvYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGZpbGVuYW1lLCBodG1sIH06IHsgZmlsZW5hbWU6IHN0cmluZzsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2xheW91dFJlYWR5LCBzZXRMYXlvdXRSZWFkeV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgWywgZG9jSFRNTF0gPSBodG1sLnNwbGl0KC88Ym9keVtePD5dKj58PFxcL2JvZHk+L2dpKTtcbiAgY29uc3QgdXJsUmUgPSBuZXcgUmVnRXhwKGBeJHtmaWxlbmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF19L2csICdcXFxcJCYnKX1cXFxcLmh0bWxgKTtcbiAgY29uc3QgaGVhZGluZ3MgPSBhbmNob3JzLmZpbHRlcihpID0+IHVybFJlLnRlc3QoaS5maWxlbmFtZSkpO1xuXG4gIGNvbnN0IGhlYWRlcnJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBuYXZyZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNjAwKSBzZXRNZW51QWN0aXZlKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TGF5b3V0UmVhZHkodHJ1ZSksIDE2KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheW91dCBsYXlvdXQtLXNpdGUtaGVhZGVyJywgbGF5b3V0UmVhZHkgJiYgJ2xheW91dC0tcmVhZHknLCBtZW51QWN0aXZlICYmICdsYXlvdXQtLWZpeGVkLWRyYXdlcicpfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2ZpbGVuYW1lfSAtIFNSRDMuNTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIHJlZj17aGVhZGVycmVmfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1tZW51XCIgb25DbGljaz17KCkgPT4gc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSl9PlxuICAgICAgICAgIE5hdmlnYXRlIHRoaXMgcGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlNSRCAzLjU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IHJlZj17bmF2cmVmfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL29saW1vdC9zcmQtdjMuNVwiPkdpdEh1YjwvYT57JyAnfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50b2N9PlxuICAgICAgICB7aGVhZGluZ3MubWFwKChoZWFkaW5nLCBpKSA9PiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGlkPXtpID09PSAwID8gJ3RoaXMtcGFnZS1uYXYnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgaHJlZj17YCMke2hlYWRpbmcuaHJlZi5zcGxpdCgnIycpLnBvcCgpfWB9XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmcuaHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BhbmNob3ItJHtoZWFkaW5nLmhudW19YF19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDY2MCkgc2V0TWVudUFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkaW5nLnRleHRDb250ZW50fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5kb2N1bWVudFZpZXcsICdsYXlvdXRfX3dyYXAnKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkb2NIVE1MIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9