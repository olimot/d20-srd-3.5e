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
          distanceToTop
        };
      });
      tocLinks.sort((a, b) => Math.abs(a.distanceToTop) - Math.abs(b.distanceToTop));
      const theActive = tocLinks.find(({
        distanceToTop
      }) => distanceToTop > 0) || tocLinks[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwiYWJzIiwidGhlQWN0aXZlIiwiZmluZCIsImZvckVhY2giLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFlBQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBdUMsc0JBQXZDLENBQVgsRUFBMkVDLE9BQU8sSUFBSTtBQUNyRyxjQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxLQUF4QyxDQUFoQjtBQUNBLGNBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixPQUFPLENBQUNPLFNBQXpCLEdBQXFDLEVBQTNEO0FBQ0EsZUFBTztBQUFFUixpQkFBRjtBQUFXSztBQUFYLFNBQVA7QUFDRCxPQUpnQixDQUFqQjtBQUtBVixjQUFRLENBQUNjLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUMsSUFBSSxDQUFDQyxHQUFMLENBQVNILENBQUMsQ0FBQ0wsYUFBWCxJQUE0Qk8sSUFBSSxDQUFDQyxHQUFMLENBQVNGLENBQUMsQ0FBQ04sYUFBWCxDQUFwRDtBQUNBLFlBQU1TLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ29CLElBQVQsQ0FBYyxDQUFDO0FBQUVWO0FBQUYsT0FBRCxLQUF1QkEsYUFBYSxHQUFHLENBQXJELEtBQTJEVixRQUFRLENBQUMsQ0FBRCxDQUFyRjtBQUNBRyxjQUFRLENBQ0xDLGdCQURILENBQ3FCLDZCQURyQixFQUVHaUIsT0FGSCxDQUVXQyxDQUFDLElBQUlBLENBQUMsS0FBS0gsU0FBUyxDQUFDZCxPQUFoQixJQUEyQmlCLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CLENBRjNDO0FBR0FMLGVBQVMsQ0FBQ2QsT0FBVixDQUFrQmtCLFNBQWxCLENBQTRCRSxHQUE1QixDQUFnQyxRQUFoQztBQUVBdEIsY0FBUSxDQUFDQyxnQkFBVCxDQUEyQixlQUEzQixFQUEyQ2lCLE9BQTNDLENBQW1EaEIsT0FBTyxJQUFJO0FBQzVELGNBQU1xQixPQUFPLEdBQUdyQixPQUFoQjtBQUNBLGNBQU1zQixTQUFTLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0IsVUFBdEIsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDRCxTQUFELElBQWNELE9BQU8sQ0FBQ0csSUFBdEIsSUFBOEJILE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBbEQsRUFBb0U7QUFDbEVKLGlCQUFPLENBQUNHLElBQVIsR0FBZSxLQUFmO0FBQ0EsaUJBQU9ILE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBdkI7QUFDRDs7QUFDRCxZQUFJSCxTQUFTLElBQUksQ0FBQ0QsT0FBTyxDQUFDRyxJQUExQixFQUFnQztBQUM5QkgsaUJBQU8sQ0FBQ0csSUFBUixHQUFlLElBQWY7QUFDQUgsaUJBQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBaEIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRCxLQXpCRDs7QUEwQkFuQixVQUFNLENBQUNvQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2hDLFFBQWxDO0FBQ0FBLFlBQVE7QUFDUixXQUFPLE1BQU1ZLE1BQU0sQ0FBQ3FCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDakMsUUFBckMsQ0FBYjtBQUNELEdBOUJRLEVBOEJOLENBQUNGLElBQUQsQ0E5Qk0sQ0FBVCxDQURtRCxDQWlDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVvQywyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFckM7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQW5DRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXFDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uYTEyMDM1Y2RhNmU5MDQyMzJmNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0b2NMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2FzaWRlIGFbZGF0YS10b2MtaWRdJyksIGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5kYXRhc2V0LnRvY0lkISkhO1xuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVG9wID0gd2luZG93LnNjcm9sbFkgLSBzZWN0aW9uLm9mZnNldFRvcCArIDU2O1xuICAgICAgICByZXR1cm4geyBlbGVtZW50LCBkaXN0YW5jZVRvVG9wIH07XG4gICAgICB9KTtcbiAgICAgIHRvY0xpbmtzLnNvcnQoKGEsIGIpID0+IE1hdGguYWJzKGEuZGlzdGFuY2VUb1RvcCkgLSBNYXRoLmFicyhiLmRpc3RhbmNlVG9Ub3ApKTtcbiAgICAgIGNvbnN0IHRoZUFjdGl2ZSA9IHRvY0xpbmtzLmZpbmQoKHsgZGlzdGFuY2VUb1RvcCB9KSA9PiBkaXN0YW5jZVRvVG9wID4gMCkgfHwgdG9jTGlua3NbMF07XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgYS5hY3RpdmVbZGF0YS10b2MtaWRdYClcbiAgICAgICAgLmZvckVhY2goZSA9PiBlICE9PSB0aGVBY3RpdmUuZWxlbWVudCAmJiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIHRoZUFjdGl2ZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBhc2lkZSBkZXRhaWxzYCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnQgYXMgSFRNTERldGFpbHNFbGVtZW50O1xuICAgICAgICBjb25zdCBoYXNBY3RpdmUgPSAhIWRldGFpbHMucXVlcnlTZWxlY3RvcignYS5hY3RpdmUnKTtcbiAgICAgICAgaWYgKCFoYXNBY3RpdmUgJiYgZGV0YWlscy5vcGVuICYmIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyKSB7XG4gICAgICAgICAgZGV0YWlscy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWRldGFpbHMub3Blbikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IHRydWU7XG4gICAgICAgICAgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIgPSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICBvblNjcm9sbCgpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICB9LCBbaHRtbF0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=