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
      },
      onClick: () => {
        if (menuActive) setMenuActive(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJ1c2VTdGF0ZSIsImRvY0hUTUwiLCJzcGxpdCIsInVybFJlIiwiUmVnRXhwIiwicmVwbGFjZSIsImhlYWRpbmdzIiwiYW5jaG9ycyIsImZpbHRlciIsImkiLCJ0ZXN0IiwidXNlRWZmZWN0Iiwic2hvd0RyYXdlckNuIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhd2VyIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ0b2MiLCJtYXAiLCJoZWFkaW5nIiwiaHJlZiIsInBvcCIsImhudW0iLCJ0ZXh0Q29udGVudCIsImRvY3VtZW50VmlldyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sR0FBR0MsT0FBSCxJQUFjSixJQUFJLENBQUNLLEtBQUwsQ0FBVyx5QkFBWCxDQUFwQjtBQUNBLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVksSUFBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCLHNCQUFqQixFQUF5QyxNQUF6QyxDQUFpRCxTQUFoRSxDQUFkO0FBQ0EsUUFB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QUNDLElBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUE2QkU7QUFDRSxlQUFTLEVBQUVMLGlEQUFVLENBQUNDLGdFQUFNLENBQUNRLFlBQVIsRUFBc0IsY0FBdEIsQ0FEdkI7QUFFRSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVqQztBQUFWLE9BRjNCO0FBR0UsYUFBTyxFQUFFLE1BQU07QUFDYixZQUFJSCxVQUFKLEVBQWdCQyxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ2pCO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1Q0QsQ0E3REQ7O0dBQU1KLFk7O0tBQUFBLFk7QUErRFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS5iYmJmMjAwNTU5ZTFlZjRmMDFlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vLi4vZGF0YS9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgZmlsZW5hbWUsIGh0bWwgfTogeyBmaWxlbmFtZTogc3RyaW5nOyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFssIGRvY0hUTUxdID0gaHRtbC5zcGxpdCgvPGJvZHlbXjw+XSo+fDxcXC9ib2R5Pi9naSk7XG4gIGNvbnN0IHVybFJlID0gbmV3IFJlZ0V4cChgXiR7ZmlsZW5hbWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdfS9nLCAnXFxcXCQmJyl9XFxcXC5odG1sYCk7XG4gIGNvbnN0IGhlYWRpbmdzID0gYW5jaG9ycy5maWx0ZXIoaSA9PiB1cmxSZS50ZXN0KGkuZmlsZW5hbWUpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3dEcmF3ZXJDbiA9IGBsYXlvdXQtLWZpeGVkLWRyYXdlcmA7XG4gICAgY29uc3QgbGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dCcpO1xuICAgIGNvbnN0IGRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQ+bmF2JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFkcmF3ZXIgfHwgIWxheW91dCkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tcmVhZHknKSwgMTYpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDY2MCAmJiBsYXlvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKHNob3dEcmF3ZXJDbikpIHtcbiAgICAgIGxheW91dC5jbGFzc0xpc3QucmVtb3ZlKCdsYXlvdXQtLXJlYWR5Jyk7XG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgIGxheW91dC5jbGFzc0xpc3QucmVtb3ZlKHNob3dEcmF3ZXJDbik7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2NjAgJiYgIWxheW91dC5jbGFzc0xpc3QuY29udGFpbnMoc2hvd0RyYXdlckNuKSkge1xuICAgICAgbGF5b3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC0tcmVhZHknKTtcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5b3V0IGxheW91dC0tc2l0ZS1oZWFkZXIgbGF5b3V0LS1yZWFkeScsIG1lbnVBY3RpdmUgJiYgJ2xheW91dC0tZml4ZWQtZHJhd2VyJyl9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1tZW51XCIgb25DbGljaz17KCkgPT4gc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSl9PlxuICAgICAgICAgIE5hdmlnYXRlIHRoaXMgcGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlNSRCAzLjU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+R2l0SHViPC9hPnsnICd9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRvY30+XG4gICAgICAgIHtoZWFkaW5ncy5tYXAoaGVhZGluZyA9PiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2AjJHtoZWFkaW5nLmhyZWYuc3BsaXQoJyMnKS5wb3AoKX1gfVxuICAgICAgICAgICAga2V5PXtoZWFkaW5nLmhyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYW5jaG9yLSR7aGVhZGluZy5obnVtfWBdfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2NjApIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGluZy50ZXh0Q29udGVudH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZG9jdW1lbnRWaWV3LCAnbGF5b3V0X193cmFwJyl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZG9jSFRNTCB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKG1lbnVBY3RpdmUpIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=