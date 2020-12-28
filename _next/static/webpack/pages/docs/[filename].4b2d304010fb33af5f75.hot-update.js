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

    const onclick = e => {
      if (window.innerWidth < mobileWidth) {
        if (!e.target || !navref.current || !headerref.current) return;
        let parent = e.target.parentElement;

        while (parent) {
          if (parent === navref.current || parent === headerref.current) return;
          parent = parent.parentElement;
        }

        setMenuActive(false);
      }
    };

    window.addEventListener('click', onclick);
    return () => window.removeEventListener('click', onclick);
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
        }, undefined)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibGF5b3V0UmVhZHkiLCJzZXRMYXlvdXRSZWFkeSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJkb2NIVE1MIiwic3BsaXQiLCJodG1sRmlsZW5hbWUiLCJoZWFkZXJyZWYiLCJ1c2VSZWYiLCJuYXZyZWYiLCJ1c2VFZmZlY3QiLCJtb2JpbGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRUaW1lb3V0Iiwib25jbGljayIsImUiLCJ0YXJnZXQiLCJjdXJyZW50IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsInRvYyIsImFuY2hvcnMiLCJmaWx0ZXIiLCJhIiwibWFwIiwiaGVhZGluZyIsImhyZWYiLCJyZXBsYWNlIiwiaG51bSIsInRleHRDb250ZW50IiwiZG9jdW1lbnRWaWV3IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQVUsS0FBVixDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBVSxLQUFWLENBQTVDO0FBQ0EsUUFBTSxHQUFHRyxPQUFILElBQWNOLElBQUksQ0FBQ08sS0FB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RSxpQkFBUyxFQUFFUixnRUFBTSxDQUFFLFVBQVNNLE9BQU8sQ0FBQ0csSUFBSyxFQUF4QixDQUhuQjtBQUlFLGVBQU8sRUFBRSxNQUFNO0FBQ2IsY0FBSXJCLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUF4QixFQUE2QlYsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUM5QixTQU5IO0FBQUEsa0JBUUcyQixPQUFPLENBQUNJO0FBUlgsU0FFT0osT0FBTyxDQUFDQyxJQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQWdDRTtBQUFLLGVBQVMsRUFBRVIsaURBQVUsQ0FBQ0MsZ0VBQU0sQ0FBQ1csWUFBUixFQUFzQixjQUF0QixDQUExQjtBQUFpRSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVoQztBQUFWO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0NELENBaEVEOztHQUFNUixZOztLQUFBQSxZO0FBa0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uNGIyZDMwNDAxMGZiMzNhZjVmNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uLy4uL2RhdGEvYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGZpbGVuYW1lLCBodG1sIH06IHsgZmlsZW5hbWU6IHN0cmluZzsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2xheW91dFJlYWR5LCBzZXRMYXlvdXRSZWFkeV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgWywgZG9jSFRNTF0gPSBodG1sLnNwbGl0KC88Ym9keVtePD5dKj58PFxcL2JvZHk+L2dpKTtcbiAgY29uc3QgaHRtbEZpbGVuYW1lID0gYCR7ZmlsZW5hbWV9Lmh0bWxgO1xuXG4gIGNvbnN0IGhlYWRlcnJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBuYXZyZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDExMjY7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IG1vYmlsZVdpZHRoKSBzZXRNZW51QWN0aXZlKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TGF5b3V0UmVhZHkodHJ1ZSksIDE2KTtcblxuICAgIGNvbnN0IG9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbW9iaWxlV2lkdGgpIHtcbiAgICAgICAgaWYgKCFlLnRhcmdldCB8fCAhbmF2cmVmLmN1cnJlbnQgfHwgIWhlYWRlcnJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxldCBwYXJlbnQgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQgPT09IG5hdnJlZi5jdXJyZW50IHx8IHBhcmVudCA9PT0gaGVhZGVycmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheW91dCcsIGxheW91dFJlYWR5ICYmICdsYXlvdXQtLXJlYWR5JywgbWVudUFjdGl2ZSAmJiAnbGF5b3V0LS1maXhlZC1kcmF3ZXInKX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntmaWxlbmFtZX0gLSBTUkQzLjU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciByZWY9e2hlYWRlcnJlZn0+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tbWVudVwiIG9uQ2xpY2s9eygpID0+IHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpfT5cbiAgICAgICAgICBOYXZpZ2F0ZSB0aGlzIHBhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxuYXYgcmVmPXtuYXZyZWZ9PlxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL29saW1vdC9zcmQtdjMuNVwiPkdpdEh1YjwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudG9jfT5cbiAgICAgICAge2FuY2hvcnNcbiAgICAgICAgICAuZmlsdGVyKGEgPT4gYS5maWxlbmFtZSA9PT0gaHRtbEZpbGVuYW1lKVxuICAgICAgICAgIC5tYXAoaGVhZGluZyA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtoZWFkaW5nLmhyZWYucmVwbGFjZSgvXFwuaHRtbC8sICcnKX1cbiAgICAgICAgICAgICAga2V5PXtoZWFkaW5nLmhyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BhbmNob3ItJHtoZWFkaW5nLmhudW19YF19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2NjApIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aGVhZGluZy50ZXh0Q29udGVudH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmRvY3VtZW50VmlldywgJ2xheW91dF9fd3JhcCcpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRvY0hUTUwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=