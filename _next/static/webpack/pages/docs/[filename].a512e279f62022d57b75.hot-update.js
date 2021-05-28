self["webpackHotUpdate_N_E"]("pages/docs/[filename]",{

/***/ "./src/components/Layout/TocItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/Layout/TocItem.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\Layout\\TocItem.tsx";


const TocLink = ({
  item
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
  href: item.anchor.hash,
  "data-toc-id": item.anchor.id,
  children: item.anchor.label
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

_c = TocLink;

const TocList = ({
  item
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
  children: item.children.map(child =>
  /*#__PURE__*/
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocItem, {
    item: child
  }, `${child.anchor.filename}${child.anchor.id}`, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, undefined))
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined);

_c2 = TocList;

const TocItem = ({
  item
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: item.children.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("details", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("summary", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocLink, {
          item: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocList, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocLink, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocList, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_c3 = TocItem;
/* harmony default export */ __webpack_exports__["default"] = (TocItem);

var _c, _c2, _c3;

$RefreshReg$(_c, "TocLink");
$RefreshReg$(_c2, "TocList");
$RefreshReg$(_c3, "TocItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RvY0l0ZW0udHN4Il0sIm5hbWVzIjpbIlRvY0xpbmsiLCJpdGVtIiwiYW5jaG9yIiwiaGFzaCIsImlkIiwibGFiZWwiLCJUb2NMaXN0IiwiY2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImZpbGVuYW1lIiwiVG9jSXRlbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNkO0FBQUcsTUFBSSxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBckI7QUFBMkIsaUJBQWFGLElBQUksQ0FBQ0MsTUFBTCxDQUFZRSxFQUFwRDtBQUFBLFlBQ0dILElBQUksQ0FBQ0MsTUFBTCxDQUFZRztBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7S0FBTUwsTzs7QUFNTixNQUFNTSxPQUFPLEdBQUcsQ0FBQztBQUFFTDtBQUFGLENBQUQsa0JBQ2Q7QUFBQSxZQUNHQSxJQUFJLENBQUNNLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkMsS0FBSztBQUFBO0FBQ3RCO0FBQ0EsZ0VBQUMsT0FBRDtBQUE0RCxRQUFJLEVBQUVBO0FBQWxFLEtBQWUsR0FBRUEsS0FBSyxDQUFDUCxNQUFOLENBQWFRLFFBQVMsR0FBRUQsS0FBSyxDQUFDUCxNQUFOLENBQWFFLEVBQUcsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztNQUFNRSxPOztBQVNOLE1BQU1LLE9BQU8sR0FBRyxDQUFDO0FBQUVWO0FBQUYsQ0FBRCxLQUEyQztBQUN6RCxzQkFDRTtBQUFBLGNBQ0dBLElBQUksQ0FBQ00sUUFBTCxDQUFjSyxNQUFkLEdBQXVCLENBQXZCLGdCQUNDO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRSw4REFBQyxPQUFEO0FBQVMsY0FBSSxFQUFFWDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsT0FBRDtBQUFTLFlBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFRQztBQUFBLDhCQUNFLDhEQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBbEJEOztNQUFNVSxPO0FBb0JOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS5hNTEyZTI3OWY2MjAyMmQ1N2I3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0cnVjdHVyZWRUb2NJdGVtIH0gZnJvbSAnLi9idWlsZFRPQyc7XG5cbmNvbnN0IFRvY0xpbmsgPSAoeyBpdGVtIH06IHsgaXRlbTogU3RydWN0dXJlZFRvY0l0ZW0gfSkgPT4gKFxuICA8YSBocmVmPXtpdGVtLmFuY2hvci5oYXNofSBkYXRhLXRvYy1pZD17aXRlbS5hbmNob3IuaWR9PlxuICAgIHtpdGVtLmFuY2hvci5sYWJlbH1cbiAgPC9hPlxuKTtcblxuY29uc3QgVG9jTGlzdCA9ICh7IGl0ZW0gfTogeyBpdGVtOiBTdHJ1Y3R1cmVkVG9jSXRlbSB9KSA9PiAoXG4gIDx1bD5cbiAgICB7aXRlbS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgPFRvY0l0ZW0ga2V5PXtgJHtjaGlsZC5hbmNob3IuZmlsZW5hbWV9JHtjaGlsZC5hbmNob3IuaWR9YH0gaXRlbT17Y2hpbGR9IC8+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBUb2NJdGVtID0gKHsgaXRlbSB9OiB7IGl0ZW06IFN0cnVjdHVyZWRUb2NJdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5cbiAgICAgICAgICAgIDxUb2NMaW5rIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgIDxUb2NMaXN0IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRvY0xpbmsgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICA8VG9jTGlzdCBpdGVtPXtpdGVtfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvY0l0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9