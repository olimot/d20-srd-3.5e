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
  const navref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
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

      const onclick = e => {
        if (!e.target || !navref.current) return;
        let parent = e.target.parentElement;

        while (parent) {
          if (parent === navref.current) return;
          parent = parent.parentElement;
        }

        setMenuActive(false);
      };

      window.addEventListener('click', onclick);
      return () => window.removeEventListener('click', onclick);
    } else if (window.innerWidth >= 660 && !layout.classList.contains(showDrawerCn)) {
      layout.classList.remove('layout--ready');
      setMenuActive(true);
    }

    return () => {};
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
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: "SRD 3.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        ref: navref,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "GitHub"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 65,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.documentView, 'layout__wrap'),
      dangerouslySetInnerHTML: {
        __html: docHTML
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(DocumentView, "HajYu9ZlwDVxLC+00dc5piYsd6o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiZmlsZW5hbWUiLCJodG1sIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJ1c2VTdGF0ZSIsImRvY0hUTUwiLCJzcGxpdCIsInVybFJlIiwiUmVnRXhwIiwicmVwbGFjZSIsImhlYWRpbmdzIiwiYW5jaG9ycyIsImZpbHRlciIsImkiLCJ0ZXN0IiwibmF2cmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2hvd0RyYXdlckNuIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJhd2VyIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwiY3VycmVudCIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJ0b2MiLCJtYXAiLCJoZWFkaW5nIiwiaHJlZiIsInBvcCIsImhudW0iLCJ0ZXh0Q29udGVudCIsImRvY3VtZW50VmlldyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE0RDtBQUFBOztBQUMvRSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sR0FBR0MsT0FBSCxJQUFjSixJQUFJLENBQUNLLEtBQUwsQ0FBVyx5QkFB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O0FBdUVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uZWJmNGE5ZWM1MjNmZjU4NGFhOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vLi4vZGF0YS9hbmNob3JzLmpzb24nO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgZmlsZW5hbWUsIGh0bWwgfTogeyBmaWxlbmFtZTogc3RyaW5nOyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFssIGRvY0hUTUxdID0gaHRtbC5zcGxpdCgvPGJvZHlbXjw+XSo+fDxcXC9ib2R5Pi9naSk7XG4gIGNvbnN0IHVybFJlID0gbmV3IFJlZ0V4cChgXiR7ZmlsZW5hbWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdfS9nLCAnXFxcXCQmJyl9XFxcXC5odG1sYCk7XG4gIGNvbnN0IGhlYWRpbmdzID0gYW5jaG9ycy5maWx0ZXIoaSA9PiB1cmxSZS50ZXN0KGkuZmlsZW5hbWUpKTtcblxuICBjb25zdCBuYXZyZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3dEcmF3ZXJDbiA9IGBsYXlvdXQtLWZpeGVkLWRyYXdlcmA7XG4gICAgY29uc3QgbGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dCcpO1xuICAgIGNvbnN0IGRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQ+bmF2JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFkcmF3ZXIgfHwgIWxheW91dCkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tcmVhZHknKSwgMTYpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDY2MCAmJiBsYXlvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKHNob3dEcmF3ZXJDbikpIHtcbiAgICAgIGxheW91dC5jbGFzc0xpc3QucmVtb3ZlKCdsYXlvdXQtLXJlYWR5Jyk7XG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgIGxheW91dC5jbGFzc0xpc3QucmVtb3ZlKHNob3dEcmF3ZXJDbik7XG4gICAgICBjb25zdCBvbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldCB8fCAhbmF2cmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgbGV0IHBhcmVudCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgaWYgKHBhcmVudCA9PT0gbmF2cmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDY2MCAmJiAhbGF5b3V0LmNsYXNzTGlzdC5jb250YWlucyhzaG93RHJhd2VyQ24pKSB7XG4gICAgICBsYXlvdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGF5b3V0LS1yZWFkeScpO1xuICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5b3V0IGxheW91dC0tc2l0ZS1oZWFkZXIgbGF5b3V0LS1yZWFkeScsIG1lbnVBY3RpdmUgJiYgJ2xheW91dC0tZml4ZWQtZHJhd2VyJyl9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1tZW51XCIgb25DbGljaz17KCkgPT4gc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSl9PlxuICAgICAgICAgIE5hdmlnYXRlIHRoaXMgcGFnZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPlNSRCAzLjU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2IHJlZj17bmF2cmVmfT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkdpdEh1YjwvYT57JyAnfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50b2N9PlxuICAgICAgICB7aGVhZGluZ3MubWFwKGhlYWRpbmcgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgIyR7aGVhZGluZy5ocmVmLnNwbGl0KCcjJykucG9wKCl9YH1cbiAgICAgICAgICAgIGtleT17aGVhZGluZy5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbYGFuY2hvci0ke2hlYWRpbmcuaG51bX1gXX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjYwKSBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRpbmcudGV4dENvbnRlbnR9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmRvY3VtZW50VmlldywgJ2xheW91dF9fd3JhcCcpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRvY0hUTUwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=