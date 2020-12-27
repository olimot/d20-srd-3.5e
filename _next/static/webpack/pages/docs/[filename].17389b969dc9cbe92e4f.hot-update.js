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
  const headerref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const navref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const showDrawerCn = `layout--fixed-drawer`;
    const layout = document.querySelector('.layout');
    const drawer = document.querySelector('.layout>nav');
    if (!drawer || !layout) return () => {};
    setTimeout(() => layout.classList.add('layout--ready'), 16);

    if (window.innerWidth < 660) {
      if (layout.classList.contains(showDrawerCn)) {
        layout.classList.remove('layout--ready');
        setMenuActive(false);
        layout.classList.remove(showDrawerCn);
      }

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

    if (window.innerWidth >= 660 && !layout.classList.contains(showDrawerCn)) {
      layout.classList.remove('layout--ready');
      setMenuActive(true);
    }

    return () => {};
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('layout layout--site-header layout--ready', menuActive && 'layout--fixed-drawer'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      ref: headerref,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "icon icon--menu",
        onClick: () => setMenuActive(!menuActive),
        children: "Navigate this page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: "SRD 3.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        ref: navref,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 69,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.documentView, 'layout__wrap'),
      dangerouslySetInnerHTML: {
        __html: docHTML
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

_s(DocumentView, "irn9d4zLCBwqNyYrBG3Ahqz0+9E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJ1c2VTdGF0ZSIsImRvY0hUTUwiLCJzcGxpdCIsInVybFJlIiwiUmVnRXhwIiwicmVwbGFjZSIsImhlYWRpbmdzIiwiYW5jaG9ycyIsImZpbHRlciIsImkiLCJ0ZXN0IiwiaGVhZGVycmVmIiwidXNlUmVmIiwibmF2cmVmIiwidXNlRWZmZWN0Iiwic2hvd0RyYXdlckNuIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhd2VyIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwiY3VycmVudCIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ0b2MiLCJtYXAiLCJoZWFkaW5nIiwiaHJlZiIsInBvcCIsImhudW0iLCJ0ZXh0Q29udGVudCIsImRvY3VtZW50VmlldyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sR0FBR0MsT0FBSCxJQUFjSixJQUFJLENBQUNLLEtB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QUFVLENBQUNDLGdFQUFNLENBQUNRLFlBQVIsRUFBc0IsY0FBdEIsQ0FBMUI7QUFBaUUsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFNUM7QUFBVjtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlDRCxDQXpFRDs7R0FBTU4sWTs7S0FBQUEsWTtBQTJFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjE3Mzg5Yjk2OWRjOWNiZTkyZTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uLy4uL2RhdGEvYW5jaG9ycy5qc29uJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL1NlYXJjaEZvcm0nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGZpbGVuYW1lLCBodG1sIH06IHsgZmlsZW5hbWU6IHN0cmluZzsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbLCBkb2NIVE1MXSA9IGh0bWwuc3BsaXQoLzxib2R5W148Pl0qPnw8XFwvYm9keT4vZ2kpO1xuICBjb25zdCB1cmxSZSA9IG5ldyBSZWdFeHAoYF4ke2ZpbGVuYW1lLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXX0vZywgJ1xcXFwkJicpfVxcXFwuaHRtbGApO1xuICBjb25zdCBoZWFkaW5ncyA9IGFuY2hvcnMuZmlsdGVyKGkgPT4gdXJsUmUudGVzdChpLmZpbGVuYW1lKSk7XG5cbiAgY29uc3QgaGVhZGVycmVmID0gdXNlUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IG5hdnJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3dEcmF3ZXJDbiA9IGBsYXlvdXQtLWZpeGVkLWRyYXdlcmA7XG4gICAgY29uc3QgbGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dCcpO1xuICAgIGNvbnN0IGRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQ+bmF2JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFkcmF3ZXIgfHwgIWxheW91dCkgcmV0dXJuICgpID0+IHt9O1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tcmVhZHknKSwgMTYpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDY2MCkge1xuICAgICAgaWYgKGxheW91dC5jbGFzc0xpc3QuY29udGFpbnMoc2hvd0RyYXdlckNuKSkge1xuICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGF5b3V0LS1yZWFkeScpO1xuICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5yZW1vdmUoc2hvd0RyYXdlckNuKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0IHx8ICFuYXZyZWYuY3VycmVudCB8fCAhaGVhZGVycmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgbGV0IHBhcmVudCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgaWYgKHBhcmVudCA9PT0gbmF2cmVmLmN1cnJlbnQgfHwgcGFyZW50ID09PSBoZWFkZXJyZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2NjAgJiYgIWxheW91dC5jbGFzc0xpc3QuY29udGFpbnMoc2hvd0RyYXdlckNuKSkge1xuICAgICAgbGF5b3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC0tcmVhZHknKTtcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xheW91dCBsYXlvdXQtLXNpdGUtaGVhZGVyIGxheW91dC0tcmVhZHknLCBtZW51QWN0aXZlICYmICdsYXlvdXQtLWZpeGVkLWRyYXdlcicpfT5cbiAgICAgIDxoZWFkZXIgcmVmPXtoZWFkZXJyZWZ9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpY29uIGljb24tLW1lbnVcIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51QWN0aXZlKCFtZW51QWN0aXZlKX0+XG4gICAgICAgICAgTmF2aWdhdGUgdGhpcyBwYWdlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+U1JEIDMuNTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuYXYgcmVmPXtuYXZyZWZ9PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+R2l0SHViPC9hPnsnICd9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRvY30+XG4gICAgICAgIHtoZWFkaW5ncy5tYXAoaGVhZGluZyA9PiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2AjJHtoZWFkaW5nLmhyZWYuc3BsaXQoJyMnKS5wb3AoKX1gfVxuICAgICAgICAgICAga2V5PXtoZWFkaW5nLmhyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tgYW5jaG9yLSR7aGVhZGluZy5obnVtfWBdfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2NjApIHNldE1lbnVBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGluZy50ZXh0Q29udGVudH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZG9jdW1lbnRWaWV3LCAnbGF5b3V0X193cmFwJyl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZG9jSFRNTCB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==