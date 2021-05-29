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
      const tocLinks = Array.from(document.querySelectorAll('aside a[data-toc-id]'), element => {
        const section = document.getElementById(element.dataset.tocId);
        const distanceToTop = window.scrollY - section.offsetTop + 56;
        return {
          element,
          distToTop: distanceToTop
        };
      });
      tocLinks.sort((a, b) => Math.abs(a.distToTop) - Math.abs(b.distToTop));
      const theActive = tocLinks.find(({
        distToTop
      }) => distToTop > 0) || tocLinks[0];
      document.querySelectorAll(`aside a.active[data-toc-id]`).forEach(e => e !== theActive.element && e.classList.remove('active'));
      theActive.element.classList.add('active');
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
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [html]); // eslint-disable-next-line react/no-danger

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_DocumentView_module_scss__WEBPACK_IMPORTED_MODULE_2___default().document),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJkaXN0VG9Ub3AiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwiYWJzIiwidGhlQWN0aXZlIiwiZmluZCIsImZvckVhY2giLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFlBQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBdUMsc0JBQXZDLENBQVgsRUFBMkVDLE9BQU8sSUFBSTtBQUNyRyxjQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxLQUF4QyxDQUFoQjtBQUNBLGNBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixPQUFPLENBQUNPLFNBQXpCLEdBQXFDLEVBQTNEO0FBQ0EsZUFBTztBQUFFUixpQkFBRjtBQUFXUyxtQkFBUyxFQUFFSjtBQUF0QixTQUFQO0FBQ0QsT0FKZ0IsQ0FBakI7QUFLQVYsY0FBUSxDQUFDZSxJQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxDQUFDLENBQUNGLFNBQVgsSUFBd0JJLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixDQUFDLENBQUNILFNBQVgsQ0FBaEQ7QUFDQSxZQUFNTSxTQUFTLEdBQUdwQixRQUFRLENBQUNxQixJQUFULENBQWMsQ0FBQztBQUFFUDtBQUFGLE9BQUQsS0FBbUJBLFNBQVMsR0FBRyxDQUE3QyxLQUFtRGQsUUFBUSxDQUFDLENBQUQsQ0FBN0U7QUFDQUcsY0FBUSxDQUNMQyxnQkFESCxDQUNxQiw2QkFEckIsRUFFR2tCLE9BRkgsQ0FFV0MsQ0FBQyxJQUFJQSxDQUFDLEtBQUtILFNBQVMsQ0FBQ2YsT0FBaEIsSUFBMkJrQixDQUFDLENBQUNDLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQixDQUYzQztBQUdBTCxlQUFTLENBQUNmLE9BQVYsQ0FBa0JtQixTQUFsQixDQUE0QkUsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFFQXZCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsZUFBM0IsRUFBMkNrQixPQUEzQyxDQUFtRGpCLE9BQU8sSUFBSTtBQUM1RCxjQUFNc0IsT0FBTyxHQUFHdEIsT0FBaEI7QUFDQSxjQUFNdUIsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLFVBQXRCLENBQXBCOztBQUNBLFlBQUksQ0FBQ0QsU0FBRCxJQUFjRCxPQUFPLENBQUNHLElBQXRCLElBQThCSCxPQUFPLENBQUNuQixPQUFSLENBQWdCdUIsZ0JBQWxELEVBQW9FO0FBQ2xFSixpQkFBTyxDQUFDRyxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPSCxPQUFPLENBQUNuQixPQUFSLENBQWdCdUIsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUgsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBMUIsRUFBZ0M7QUFDOUJILGlCQUFPLENBQUNHLElBQVIsR0FBZSxJQUFmO0FBQ0FILGlCQUFPLENBQUNuQixPQUFSLENBQWdCdUIsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0F6QkQ7O0FBMEJBcEIsVUFBTSxDQUFDcUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NqQyxRQUFsQztBQUNBQSxZQUFRO0FBQ1IsV0FBTyxNQUFNWSxNQUFNLENBQUNzQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2xDLFFBQXJDLENBQWI7QUFDRCxHQTlCUSxFQThCTixDQUFDRixJQUFELENBOUJNLENBQVQsQ0FEbUQsQ0FpQ25EOztBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFFcUMsMkVBQWhCO0FBQWlDLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRXRDO0FBQVY7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FuQ0Q7O0dBQU1ELFk7O0tBQUFBLFk7QUFxQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLjcwOGVkNjU1OTVjNTFiNDAyNzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGh0bWwgfTogeyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9jTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdhc2lkZSBhW2RhdGEtdG9jLWlkXScpLCBlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuZGF0YXNldC50b2NJZCEpITtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RvcCA9IHdpbmRvdy5zY3JvbGxZIC0gc2VjdGlvbi5vZmZzZXRUb3AgKyA1NjtcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZGlzdFRvVG9wOiBkaXN0YW5jZVRvVG9wIH07XG4gICAgICB9KTtcbiAgICAgIHRvY0xpbmtzLnNvcnQoKGEsIGIpID0+IE1hdGguYWJzKGEuZGlzdFRvVG9wKSAtIE1hdGguYWJzKGIuZGlzdFRvVG9wKSk7XG4gICAgICBjb25zdCB0aGVBY3RpdmUgPSB0b2NMaW5rcy5maW5kKCh7IGRpc3RUb1RvcCB9KSA9PiBkaXN0VG9Ub3AgPiAwKSB8fCB0b2NMaW5rc1swXTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBhc2lkZSBhLmFjdGl2ZVtkYXRhLXRvYy1pZF1gKVxuICAgICAgICAuZm9yRWFjaChlID0+IGUgIT09IHRoZUFjdGl2ZS5lbGVtZW50ICYmIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgdGhlQWN0aXZlLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGRldGFpbHNgKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudCBhcyBIVE1MRGV0YWlsc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9ICEhZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdhLmFjdGl2ZScpO1xuICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkZXRhaWxzLm9wZW4gJiYgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIpIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZGV0YWlscy5vcGVuKSB7XG4gICAgICAgICAgZGV0YWlscy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlciA9ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgIG9uU2Nyb2xsKCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==