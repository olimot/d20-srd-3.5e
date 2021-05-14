webpackHotUpdate_N_E("pages/docs/[filename]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RvY0l0ZW0udHN4Il0sIm5hbWVzIjpbIlRvY0xpbmsiLCJpdGVtIiwiYW5jaG9yIiwiaHJlZiIsInJlcGxhY2UiLCJzcGxpdCIsInBvcCIsInRleHRDb250ZW50IiwiVG9jTGlzdCIsImNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJUb2NJdGVtIiwibGVuZ3RoIiwiaG51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDZCxxRUFBQyxnREFBRDtBQUFNLE1BQUksRUFBRyxTQUFRQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkMsT0FBakIsQ0FBeUIsUUFBekIsRUFBbUMsRUFBbkMsQ0FBdUMsRUFBNUQ7QUFBQSx5QkFDRTtBQUFHLG1CQUFhSCxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkUsS0FBakIsQ0FBdUIsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWhCO0FBQUEsY0FBb0RMLElBQUksQ0FBQ0MsTUFBTCxDQUFZSztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNUCxPOztBQU1OLE1BQU1RLE9BQU8sR0FBRyxDQUFDO0FBQUVQO0FBQUYsQ0FBRCxrQkFDZDtBQUFBLFlBQ0dBLElBQUksQ0FBQ1EsUUFBTCxDQUFjQyxHQUFkLENBQWtCQyxLQUFLO0FBQUE7QUFDdEI7QUFDQSx1RUFBQyxPQUFEO0FBQWlDLFFBQUksRUFBRUE7QUFBdkMsS0FBY0EsS0FBSyxDQUFDVCxNQUFOLENBQWFDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7TUFBTUssTzs7QUFTTixNQUFNSSxPQUFPLEdBQUcsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBMkM7QUFDekQsc0JBQ0U7QUFBQSxjQUNHQSxJQUFJLENBQUNRLFFBQUwsQ0FBY0ksTUFBZCxHQUF1QixDQUF2QixJQUE0QlosSUFBSSxDQUFDQyxNQUFMLENBQVlZLElBQVosS0FBcUIsQ0FBakQsZ0JBQ0M7QUFBQSw4QkFDRTtBQUFBLCtCQUNFLHFFQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUViO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyxPQUFEO0FBQVMsWUFBSSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQVFDO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUFTLFlBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsT0FBRDtBQUFTLFlBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FsQkQ7O01BQU1XLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS43NGJiMTdkMjYwZjRmYWU1NDBjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVkVG9jSXRlbSB9IGZyb20gJy4vYnVpbGRUT0MnO1xuXG5jb25zdCBUb2NMaW5rID0gKHsgaXRlbSB9OiB7IGl0ZW06IFN0cnVjdHVyZWRUb2NJdGVtIH0pID0+IChcbiAgPExpbmsgaHJlZj17YC9kb2NzLyR7aXRlbS5hbmNob3IuaHJlZi5yZXBsYWNlKC9cXC5odG1sLywgJycpfWB9PlxuICAgIDxhIGRhdGEtdG9jLWlkPXtpdGVtLmFuY2hvci5ocmVmLnNwbGl0KCcjJykucG9wKCl9PntpdGVtLmFuY2hvci50ZXh0Q29udGVudH08L2E+XG4gIDwvTGluaz5cbik7XG5cbmNvbnN0IFRvY0xpc3QgPSAoeyBpdGVtIH06IHsgaXRlbTogU3RydWN0dXJlZFRvY0l0ZW0gfSkgPT4gKFxuICA8dWw+XG4gICAge2l0ZW0uY2hpbGRyZW4ubWFwKGNoaWxkID0+IChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIDxUb2NJdGVtIGtleT17Y2hpbGQuYW5jaG9yLmhyZWZ9IGl0ZW09e2NoaWxkfSAvPlxuICAgICkpfVxuICA8L3VsPlxuKTtcblxuY29uc3QgVG9jSXRlbSA9ICh7IGl0ZW0gfTogeyBpdGVtOiBTdHJ1Y3R1cmVkVG9jSXRlbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiBpdGVtLmFuY2hvci5obnVtICE9PSAxID8gKFxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5cbiAgICAgICAgICAgIDxUb2NMaW5rIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgIDxUb2NMaXN0IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRvY0xpbmsgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICA8VG9jTGlzdCBpdGVtPXtpdGVtfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvY0l0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9