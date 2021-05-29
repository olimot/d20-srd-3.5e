self["webpackHotUpdate_N_E"]("pages/docs/[filename]",{

/***/ "./src/components/DocumentView/DocumentView.tsx":
/*!******************************************************!*\
  !*** ./src/components/DocumentView/DocumentView.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocumentView.module.scss */ "./src/components/DocumentView/DocumentView.module.scss");
/* harmony import */ var _DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\DocumentView\\DocumentView.tsx",
    _s = $RefreshSig$();




const DocumentView = ({
  html
}) => {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const onScroll = () => {
      const tocLinkElements = Array.from(document.querySelectorAll('aside a[data-toc-id]'));
      tocLinkElements.sort((a, b) => {
        const aSection = document.getElementById(a.dataset.tocId);
        const bSection = document.getElementById(b.dataset.tocId);
        const aDistToTop = Math.abs(window.scrollY - aSection.offsetTop + 56 + aSection.children[0].offsetHeight);
        const bDistToTop = Math.abs(window.scrollY - bSection.offsetTop + 56 + bSection.children[0].offsetHeight);
        return aDistToTop - bDistToTop;
      });
      document.querySelectorAll(`aside a.active[data-toc-id]`).forEach(e => e !== tocLinkElements[0] && e.classList.remove('active'));
      tocLinkElements[0].classList.add('active');
      document.querySelectorAll(`aside details`).forEach(element => {
        const details = element;
        const hasActive = !!details.querySelector('a.active');

        if (!hasActive && details.open && details.dataset.openedByObserver) {
          details.open = false;
          delete details.dataset.openedByObserver;
        }

        if (hasActive && !details.open) {
          details.open = true;
          details.dataset.openedByObserver = 'true';
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [html]); // eslint-disable-next-line react/no-danger

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_2___default().document),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 10
  }, undefined);
};

_s(DocumentView, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua0VsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29ydCIsImEiLCJiIiwiYVNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsImRhdGFzZXQiLCJ0b2NJZCIsImJTZWN0aW9uIiwiYURpc3RUb1RvcCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJiRGlzdFRvVG9wIiwiZm9yRWFjaCIsImUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlbGVtZW50IiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFlBQU1DLGVBQWUsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBdUMsc0JBQXZDLENBQVgsQ0FBeEI7QUFDQUoscUJBQWUsQ0FBQ0ssSUFBaEIsQ0FBcUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDN0IsY0FBTUMsUUFBUSxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0JILENBQUMsQ0FBQ0ksT0FBRixDQUFVQyxLQUFsQyxDQUFqQjtBQUNBLGNBQU1DLFFBQVEsR0FBR1QsUUFBUSxDQUFDTSxjQUFULENBQXdCRixDQUFDLENBQUNHLE9BQUYsQ0FBVUMsS0FBbEMsQ0FBakI7QUFDQSxjQUFNRSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUNqQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxRQUFRLENBQUNVLFNBQTFCLEdBQXNDLEVBQXRDLEdBQTRDVixRQUFRLENBQUNXLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBRCxDQUFzQ0MsWUFEaEUsQ0FBbkI7QUFHQSxjQUFNQyxVQUFVLEdBQUdQLElBQUksQ0FBQ0MsR0FBTCxDQUNqQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxRQUFRLENBQUNNLFNBQTFCLEdBQXNDLEVBQXRDLEdBQTRDTixRQUFRLENBQUNPLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBRCxDQUFzQ0MsWUFEaEUsQ0FBbkI7QUFHQSxlQUFPUCxVQUFVLEdBQUdRLFVBQXBCO0FBQ0QsT0FWRDtBQVlBbEIsY0FBUSxDQUNMQyxnQkFESCxDQUNxQiw2QkFEckIsRUFFR2tCLE9BRkgsQ0FFV0MsQ0FBQyxJQUFJQSxDQUFDLEtBQUt2QixlQUFlLENBQUMsQ0FBRCxDQUFyQixJQUE0QnVCLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CLENBRjVDO0FBR0F6QixxQkFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQndCLFNBQW5CLENBQTZCRSxHQUE3QixDQUFpQyxRQUFqQztBQUVBdkIsY0FBUSxDQUFDQyxnQkFBVCxDQUEyQixlQUEzQixFQUEyQ2tCLE9BQTNDLENBQW1ESyxPQUFPLElBQUk7QUFDNUQsY0FBTUMsT0FBTyxHQUFHRCxPQUFoQjtBQUNBLGNBQU1FLFNBQVMsR0FBRyxDQUFDLENBQUNELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQixVQUF0QixDQUFwQjs7QUFDQSxZQUFJLENBQUNELFNBQUQsSUFBY0QsT0FBTyxDQUFDRyxJQUF0QixJQUE4QkgsT0FBTyxDQUFDbEIsT0FBUixDQUFnQnNCLGdCQUFsRCxFQUFvRTtBQUNsRUosaUJBQU8sQ0FBQ0csSUFBUixHQUFlLEtBQWY7QUFDQSxpQkFBT0gsT0FBTyxDQUFDbEIsT0FBUixDQUFnQnNCLGdCQUF2QjtBQUNEOztBQUNELFlBQUlILFNBQVMsSUFBSSxDQUFDRCxPQUFPLENBQUNHLElBQTFCLEVBQWdDO0FBQzlCSCxpQkFBTyxDQUFDRyxJQUFSLEdBQWUsSUFBZjtBQUNBSCxpQkFBTyxDQUFDbEIsT0FBUixDQUFnQnNCLGdCQUFoQixHQUFtQyxNQUFuQztBQUNEO0FBQ0YsT0FYRDtBQVlELEtBL0JEOztBQWdDQWhCLFVBQU0sQ0FBQ2lCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDbEMsUUFBbEM7QUFDQSxXQUFPLE1BQU1pQixNQUFNLENBQUNrQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ25DLFFBQXJDLENBQWI7QUFDRCxHQW5DUSxFQW1DTixDQUFDRixJQUFELENBbkNNLENBQVQsQ0FEbUQsQ0FzQ25EOztBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFFc0MsMkVBQWhCO0FBQWlDLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRXZDO0FBQVY7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0F4Q0Q7O0dBQU1ELFk7O0tBQUFBLFk7QUEwQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjIxNmQxMWM5MWY2MDM1N2U5ZDQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGh0bWwgfTogeyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9jTGlua0VsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignYXNpZGUgYVtkYXRhLXRvYy1pZF0nKSk7XG4gICAgICB0b2NMaW5rRWxlbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEuZGF0YXNldC50b2NJZCEpITtcbiAgICAgICAgY29uc3QgYlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmRhdGFzZXQudG9jSWQhKSE7XG4gICAgICAgIGNvbnN0IGFEaXN0VG9Ub3AgPSBNYXRoLmFicyhcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSAtIGFTZWN0aW9uLm9mZnNldFRvcCArIDU2ICsgKGFTZWN0aW9uLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJEaXN0VG9Ub3AgPSBNYXRoLmFicyhcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSAtIGJTZWN0aW9uLm9mZnNldFRvcCArIDU2ICsgKGJTZWN0aW9uLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhRGlzdFRvVG9wIC0gYkRpc3RUb1RvcDtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgYS5hY3RpdmVbZGF0YS10b2MtaWRdYClcbiAgICAgICAgLmZvckVhY2goZSA9PiBlICE9PSB0b2NMaW5rRWxlbWVudHNbMF0gJiYgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICB0b2NMaW5rRWxlbWVudHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGRldGFpbHNgKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudCBhcyBIVE1MRGV0YWlsc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9ICEhZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdhLmFjdGl2ZScpO1xuICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkZXRhaWxzLm9wZW4gJiYgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIpIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZGV0YWlscy5vcGVuKSB7XG4gICAgICAgICAgZGV0YWlscy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlciA9ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICB9LCBbaHRtbF0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=