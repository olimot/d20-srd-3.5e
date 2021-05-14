webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Layout/TocItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/Layout/TocItem.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\Layout\\TocItem.tsx";



const TocLink = ({
  item
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: `/docs/${item.anchor.href.replace(/\.html/, '')}`,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    "data-toc-id": item.anchor.href.split('#').pop(),
    children: item.anchor.textContent
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

_c = TocLink;

const TocList = ({
  item
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
  children: item.children.map(child =>
  /*#__PURE__*/
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TocItem, {
    item: child
  }, child.anchor.href, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined))
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

_c2 = TocList;

const TocItem = ({
  item
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: item.children.length > 0 && item.anchor.hnum !== 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("details", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("summary", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TocLink, {
          item: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TocList, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TocLink, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TocList, {
        item: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RvY0l0ZW0udHN4Il0sIm5hbWVzIjpbIlRvY0xpbmsiLCJpdGVtIiwiYW5jaG9yIiwiaHJlZiIsInJlcGxhY2UiLCJzcGxpdCIsInBvcCIsInRleHRDb250ZW50IiwiVG9jTGlzdCIsImNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJUb2NJdGVtIiwibGVuZ3RoIiwiaG51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDZCxxRUFBQyxnREFBRDtBQUFNLE1BQUksRUFBRyxTQUFRQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsT0FBakIsQ0FBeUIsUUFBekIsRUFBbUMsRUFBbkMsQ0FBdUMsRUFBNUQ7QUFBQSx5QkFDRTtBQUFHLG1CQUFhSCxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkUsS0FBakIsQ0FBdUIsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWhCO0FBQUEsY0FBb0RMLElBQUksQ0FBQ0MsTUFBTCxDQUFZSztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNUCxPOztBQU1OLE1BQU1RLE9BQU8sR0FBRyxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxrQkFDZDtBQUFBLFlBQ0dBLElBQUksQ0FBQ1EsUUFBTCxDQUFjQyxHQUFkLENBQWtCQyxLQUFLO0FBQUE7QUFDdEI7QUFDQSx1RUFBQyxPQUFEO0FBQWlDLFFBQUksRUFBRUE7QUFBdkMsS0FBY0EsS0FBSyxDQUFDVCxNQUFOLENBQWFDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7TUFBTUssTzs7QUFTTixNQUFNSSxPQUFPLEdBQUcsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBMkM7QUFDekQsc0JBQ0U7QUFBQSxjQUNHQSxJQUFJLENBQUNRLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixDQUF2QixJQUE0QlosSUFBSSxDQUFDQyxNQUFMLENBQVlZLElBQVosS0FBcUIsQ0FBakQsZ0JBQ0M7QUFBQSw4QkFDRTtBQUFBLCtCQUNFLHFFQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUViO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyxPQUFEO0FBQVMsWUFBSSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQVFDO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUFTLFlBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsT0FBRDtBQUFTLFlBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FsQkQ7O01BQU1XLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0YmIxN2QyNjBmNGZhZTU0MGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0cnVjdHVyZWRUb2NJdGVtIH0gZnJvbSAnLi9idWlsZFRPQyc7XG5cbmNvbnN0IFRvY0xpbmsgPSAoeyBpdGVtIH06IHsgaXRlbTogU3RydWN0dXJlZFRvY0l0ZW0gfSkgPT4gKFxuICA8TGluayBocmVmPXtgL2RvY3MvJHtpdGVtLmFuY2hvci5ocmVmLnJlcGxhY2UoL1xcLmh0bWwvLCAnJyl9YH0+XG4gICAgPGEgZGF0YS10b2MtaWQ9e2l0ZW0uYW5jaG9yLmhyZWYuc3BsaXQoJyMnKS5wb3AoKX0+e2l0ZW0uYW5jaG9yLnRleHRDb250ZW50fTwvYT5cbiAgPC9MaW5rPlxuKTtcblxuY29uc3QgVG9jTGlzdCA9ICh7IGl0ZW0gfTogeyBpdGVtOiBTdHJ1Y3R1cmVkVG9jSXRlbSB9KSA9PiAoXG4gIDx1bD5cbiAgICB7aXRlbS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgPFRvY0l0ZW0ga2V5PXtjaGlsZC5hbmNob3IuaHJlZn0gaXRlbT17Y2hpbGR9IC8+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBUb2NJdGVtID0gKHsgaXRlbSB9OiB7IGl0ZW06IFN0cnVjdHVyZWRUb2NJdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIGl0ZW0uYW5jaG9yLmhudW0gIT09IDEgPyAoXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PlxuICAgICAgICAgICAgPFRvY0xpbmsgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgPFRvY0xpc3QgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8VG9jTGluayBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgIDxUb2NMaXN0IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9jSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=