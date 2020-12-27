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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_anchors_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/anchors.json */ "./data/anchors.json");
var _data_anchors_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/anchors.json */ "./data/anchors.json", 1);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchForm */ "./src/components/SearchForm/index.ts");
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DocumentView.module.scss */ "./src/components/DocumentView/DocumentView.module.scss");
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6__);


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
    0: menuActive,
    1: setMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [, docHTML] = html.split(/<body[^<>]*>|<\/body>/gi);
  const urlRe = new RegExp(`^${filename.replace(/[.*+?^${}()|[\]\\]}/g, '\\$&')}\\.html`);
  const headings = _data_anchors_json__WEBPACK_IMPORTED_MODULE_4__.filter(i => urlRe.test(i.filename));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const showDrawerCn = `layout--fixed-drawer`;
    const layout = document.querySelector('.layout');
    const drawer = document.querySelector('.layout>nav');
    if (!drawer || !layout) return;
    setTimeout(() => layout.classList.add('layout--ready'), 16);

    if (window.innerWidth < 660 && layout.classList.contains(showDrawerCn)) {
      layout.classList.remove('layout--ready');
      setMenuActive(false);
      layout.classList.remove(showDrawerCn);
    } else if (window.innerWidth >= 660 && !layout.classList.contains(showDrawerCn)) {
      layout.classList.remove('layout--ready');
      setMenuActive(true);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout layout--site-header layout--ready', menuActive && 'layout--fixed-drawer'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "icon icon--menu",
        onClick: () => setMenuActive(!menuActive),
        children: "Navigate this page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: "SRD 3.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.toc,
      children: headings.map(heading => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `#${heading.href.split('#').pop()}`,
        className: _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a[`anchor-${heading.hnum}`],
        onClick: () => {
          if (window.innerWidth < 660) setMenuActive(false);
        },
        children: heading.textContent
      }, heading.href, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.documentView, 'layout__wrap'),
      dangerouslySetInnerHTML: {
        __html: docHTML
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_s(DocumentView, "ay9nuoieIZMokx5BN1MwnTsJpzM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJ1c2VTdGF0ZSIsImRvY0hUTUwiLCJzcGxpdCIsInVybFJlIiwiUmVnRXhwIiwicmVwbGFjZSIsImhlYWRpbmdzIiwiYW5jaG9ycyIsImZpbHRlciIsImkiLCJ0ZXN0IiwidXNlRWZmZWN0Iiwic2hvd0RyYXdlckNuIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhd2VyIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ0b2MiLCJtYXAiLCJoZWFkaW5nIiwiaHJlZiIsInBvcCIsImhudW0iLCJ0ZXh0Q29udGVudCIsImRvY3VtZW50VmlldyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sR0FBR0MsT0FBSCxJQUFjSixJQUFJLENBQUNLLEtBQUwsQ0FBVyx5QkFBWCxDQUFwQjtBQUNBLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVksSUFBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCLHNCQUFqQixFQUF5QyxNQUF6QyxDQUFpRCxTQUFoRSxDQUFkO0FBQ0EsUUFB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QUNDLElBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUE2QkU7QUFBSyxlQUFTLEVBQUVMLGlEQUFVLENBQUNDLGdFQUFNLENBQUNRLFlBQVIsRUFBc0IsY0FBdEIsQ0FBMUI7QUFBaUUsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFakM7QUFBVjtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlDRCxDQXZERDs7R0FBTU4sWTs7S0FBQUEsWTtBQXlEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjAxNDZmMTQzODE1Njc5NjJlMWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi8uLi9kYXRhL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuLi9TZWFyY2hGb3JtJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBmaWxlbmFtZSwgaHRtbCB9OiB7IGZpbGVuYW1lOiBzdHJpbmc7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWywgZG9jSFRNTF0gPSBodG1sLnNwbGl0KC88Ym9keVtePD5dKj58PFxcL2JvZHk+L2dpKTtcbiAgY29uc3QgdXJsUmUgPSBuZXcgUmVnRXhwKGBeJHtmaWxlbmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF19L2csICdcXFxcJCYnKX1cXFxcLmh0bWxgKTtcbiAgY29uc3QgaGVhZGluZ3MgPSBhbmNob3JzLmZpbHRlcihpID0+IHVybFJlLnRlc3QoaS5maWxlbmFtZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvd0RyYXdlckNuID0gYGxheW91dC0tZml4ZWQtZHJhd2VyYDtcbiAgICBjb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0Jyk7XG4gICAgY29uc3QgZHJhd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dD5uYXYnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWRyYXdlciB8fCAhbGF5b3V0KSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS1yZWFkeScpLCAxNik7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjYwICYmIGxheW91dC5jbGFzc0xpc3QuY29udGFpbnMoc2hvd0RyYXdlckNuKSkge1xuICAgICAgbGF5b3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC0tcmVhZHknKTtcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgbGF5b3V0LmNsYXNzTGlzdC5yZW1vdmUoc2hvd0RyYXdlckNuKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDY2MCAmJiAhbGF5b3V0LmNsYXNzTGlzdC5jb250YWlucyhzaG93RHJhd2VyQ24pKSB7XG4gICAgICBsYXlvdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGF5b3V0LS1yZWFkeScpO1xuICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXlvdXQgbGF5b3V0LS1zaXRlLWhlYWRlciBsYXlvdXQtLXJlYWR5JywgbWVudUFjdGl2ZSAmJiAnbGF5b3V0LS1maXhlZC1kcmF3ZXInKX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpY29uIGljb24tLW1lbnVcIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51QWN0aXZlKCFtZW51QWN0aXZlKX0+XG4gICAgICAgICAgTmF2aWdhdGUgdGhpcyBwYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+U1JEIDMuNTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5HaXRIdWI8L2E+eycgJ31cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudG9jfT5cbiAgICAgICAge2hlYWRpbmdzLm1hcChoZWFkaW5nID0+IChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YCMke2hlYWRpbmcuaHJlZi5zcGxpdCgnIycpLnBvcCgpfWB9XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmcuaHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2BhbmNob3ItJHtoZWFkaW5nLmhudW19YF19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDY2MCkgc2V0TWVudUFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkaW5nLnRleHRDb250ZW50fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5kb2N1bWVudFZpZXcsICdsYXlvdXRfX3dyYXAnKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkb2NIVE1MIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9