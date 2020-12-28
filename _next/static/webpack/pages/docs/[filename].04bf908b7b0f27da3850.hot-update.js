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
  const htmlFilename = `${filename}.html`;
  const headerref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const navref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const mobileWidth = 1126;
    if (window.innerWidth >= mobileWidth) setMenuActive(true);
    setTimeout(() => setLayoutReady(true), 16);

    if (window.innerWidth < mobileWidth) {
      const onclick = e => {
        if (!e.target || !navref.current || !headerref.current) return;
        let parent = e.target.parentElement;

        while (parent) {
          if (parent === navref.current || parent === headerref.current) return;
          parent = parent.parentElement;
        }

        setMenuActive(false);
      };

      window.addEventListener('click', onclick);
      return () => window.removeEventListener('click', onclick);
    }

    return () => {};
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout', layoutReady && 'layout--ready', menuActive && 'layout--fixed-drawer'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [filename, " - SRD3.5"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        ref: navref,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://github.com/olimot/srd-v3.5",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.toc,
      children: _data_anchors_json__WEBPACK_IMPORTED_MODULE_5__.filter(a => a.filename === htmlFilename).map(heading => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: heading.href.replace(/\.html/, ''),
        className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a[`anchor-${heading.hnum}`],
        onClick: () => {
          if (window.innerWidth < 660) setMenuActive(false);
        },
        children: heading.textContent
      }, heading.href, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.documentView, 'layout__wrap'),
      dangerouslySetInnerHTML: {
        __html: docHTML
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibGF5b3V0UmVhZHkiLCJzZXRMYXlvdXRSZWFkeSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJkb2NIVE1MIiwic3BsaXQiLCJodG1sRmlsZW5hbWUiLCJoZWFkZXJyZWYiLCJ1c2VSZWYiLCJuYXZyZWYiLCJ1c2VFZmZlY3QiLCJtb2JpbGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRUaW1lb3V0Iiwib25jbGljayIsImUiLCJ0YXJnZXQiLCJjdXJyZW50IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInRvYyIsImFuY2hvcnMiLCJmaWx0ZXIiLCJhIiwibWFwIiwiaGVhZGluZyIsImhyZWYiLCJyZXBsYWNlIiwiaG51bSIsInRleHRDb250ZW50IiwiZG9jdW1lbnRWaWV3IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQVUsS0FBVixDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBVSxLQUFWLENBQTVDO0FBQ0EsUUFBTSxHQUFHRyxPQUFILElBQWNOLElBQUksQ0FBQ08sS0FB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LE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsRUFBL0IsQ0FEUjtBQUdFLGlCQUFTLEVBQUVSLGdFQUFNLENBQUUsVUFBU00sT0FBTyxDQUFDRyxJQUFLLEVBQXhCLENBSG5CO0FBSUUsZUFBTyxFQUFFLE1BQU07QUFDYixjQUFJckIsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCVixhQUFhLENBQUMsS0FBRCxDQUFiO0FBQzlCLFNBTkg7QUFBQSxrQkFRRzJCLE9BQU8sQ0FBQ0k7QUFSWCxTQUVPSixPQUFPLENBQUNDLElBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLGVBZ0NFO0FBQUssZUFBUyxFQUFFUixpREFBVSxDQUFDQyxnRUFBTSxDQUFDVyxZQUFSLEVBQXNCLGNBQXRCLENBQTFCO0FBQWlFLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRWhDO0FBQVY7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQ0QsQ0FoRUQ7O0dBQU1SLFk7O0tBQUFBLFk7QUFrRVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS4wNGJmOTA4YjdiMGYyN2RhMzg1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vLi4vZGF0YS9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgZmlsZW5hbWUsIGh0bWwgfTogeyBmaWxlbmFtZTogc3RyaW5nOyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBbbGF5b3V0UmVhZHksIHNldExheW91dFJlYWR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbLCBkb2NIVE1MXSA9IGh0bWwuc3BsaXQoLzxib2R5W148Pl0qPnw8XFwvYm9keT4vZ2kpO1xuICBjb25zdCBodG1sRmlsZW5hbWUgPSBgJHtmaWxlbmFtZX0uaHRtbGA7XG5cbiAgY29uc3QgaGVhZGVycmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IG5hdnJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gMTEyNjtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbW9iaWxlV2lkdGgpIHNldE1lbnVBY3RpdmUodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRMYXlvdXRSZWFkeSh0cnVlKSwgMTYpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1vYmlsZVdpZHRoKSB7XG4gICAgICBjb25zdCBvbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldCB8fCAhbmF2cmVmLmN1cnJlbnQgfHwgIWhlYWRlcnJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxldCBwYXJlbnQgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQgPT09IG5hdnJlZi5jdXJyZW50IHx8IHBhcmVudCA9PT0gaGVhZGVycmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5b3V0JywgbGF5b3V0UmVhZHkgJiYgJ2xheW91dC0tcmVhZHknLCBtZW51QWN0aXZlICYmICdsYXlvdXQtLWZpeGVkLWRyYXdlcicpfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2ZpbGVuYW1lfSAtIFNSRDMuNTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIHJlZj17aGVhZGVycmVmfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1tZW51XCIgb25DbGljaz17KCkgPT4gc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSl9PlxuICAgICAgICAgIE5hdmlnYXRlIHRoaXMgcGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG5hdiByZWY9e25hdnJlZn0+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb2xpbW90L3NyZC12My41XCI+R2l0SHViPC9hPnsnICd9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRvY30+XG4gICAgICAgIHthbmNob3JzXG4gICAgICAgICAgLmZpbHRlcihhID0+IGEuZmlsZW5hbWUgPT09IGh0bWxGaWxlbmFtZSlcbiAgICAgICAgICAubWFwKGhlYWRpbmcgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17aGVhZGluZy5ocmVmLnJlcGxhY2UoL1xcLmh0bWwvLCAnJyl9XG4gICAgICAgICAgICAgIGtleT17aGVhZGluZy5ocmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYW5jaG9yLSR7aGVhZGluZy5obnVtfWBdfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjYwKSBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2hlYWRpbmcudGV4dENvbnRlbnR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5kb2N1bWVudFZpZXcsICdsYXlvdXRfX3dyYXAnKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkb2NIVE1MIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9