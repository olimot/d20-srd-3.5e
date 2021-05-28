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
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TocLink, {
      item: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1RvY0l0ZW0udHN4Il0sIm5hbWVzIjpbIlRvY0xpbmsiLCJpdGVtIiwiYW5jaG9yIiwiaGFzaCIsImlkIiwibGFiZWwiLCJUb2NMaXN0IiwiY2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImZpbGVuYW1lIiwiVG9jSXRlbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ2Q7QUFBRyxNQUFJLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxJQUFyQjtBQUEyQixpQkFBYUYsSUFBSSxDQUFDQyxNQUFMLENBQVlFLEVBQXBEO0FBQUEsWUFDR0gsSUFBSSxDQUFDQyxNQUFMLENBQVlHO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNTCxPOztBQU1OLE1BQU1NLE9BQU8sR0FBRyxDQUFDO0FBQUVMO0FBQUYsQ0FBRCxrQkFDZDtBQUFBLFlBQ0dBLElBQUksQ0FBQ00sUUFBTCxDQUFjQyxHQUFkLENBQWtCQyxLQUFLO0FBQUE7QUFDdEI7QUFDQSxnRUFBQyxPQUFEO0FBQTRELFFBQUksRUFBRUE7QUFBbEUsS0FBZSxHQUFFQSxLQUFLLENBQUNQLE1BQU4sQ0FBYVEsUUFBUyxHQUFFRCxLQUFLLENBQUNQLE1BQU4sQ0FBYUUsRUFBRyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O01BQU1FLE87O0FBU04sTUFBTUssT0FBTyxHQUFHLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQTJDO0FBQ3pELHNCQUNFO0FBQUEsY0FDR0EsSUFBSSxDQUFDTSxRQUFMLENBQWNLLE1BQWQsR0FBdUIsQ0FBdkIsZ0JBQ0M7QUFBQSw4QkFDRTtBQUFBLCtCQUNFLDhEQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUVYO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxPQUFEO0FBQVMsWUFBSSxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQVFDLDhEQUFDLE9BQUQ7QUFBUyxVQUFJLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBZkQ7O01BQU1VLE87QUFpQk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjUwYzNlMzZjY2M1ZDFkMzg3OTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlZFRvY0l0ZW0gfSBmcm9tICcuL2J1aWxkVE9DJztcblxuY29uc3QgVG9jTGluayA9ICh7IGl0ZW0gfTogeyBpdGVtOiBTdHJ1Y3R1cmVkVG9jSXRlbSB9KSA9PiAoXG4gIDxhIGhyZWY9e2l0ZW0uYW5jaG9yLmhhc2h9IGRhdGEtdG9jLWlkPXtpdGVtLmFuY2hvci5pZH0+XG4gICAge2l0ZW0uYW5jaG9yLmxhYmVsfVxuICA8L2E+XG4pO1xuXG5jb25zdCBUb2NMaXN0ID0gKHsgaXRlbSB9OiB7IGl0ZW06IFN0cnVjdHVyZWRUb2NJdGVtIH0pID0+IChcbiAgPHVsPlxuICAgIHtpdGVtLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICA8VG9jSXRlbSBrZXk9e2Ake2NoaWxkLmFuY2hvci5maWxlbmFtZX0ke2NoaWxkLmFuY2hvci5pZH1gfSBpdGVtPXtjaGlsZH0gLz5cbiAgICApKX1cbiAgPC91bD5cbik7XG5cbmNvbnN0IFRvY0l0ZW0gPSAoeyBpdGVtIH06IHsgaXRlbTogU3RydWN0dXJlZFRvY0l0ZW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PlxuICAgICAgICAgICAgPFRvY0xpbmsgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgPFRvY0xpc3QgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgKSA6IChcbiAgICAgICAgPFRvY0xpbmsgaXRlbT17aXRlbX0gLz5cbiAgICAgICl9XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvY0l0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9