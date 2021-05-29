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
        const distanceToTop = window.scrollY - section.offsetTop;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwiYWJzIiwidGhlQWN0aXZlIiwiZmluZCIsImZvckVhY2giLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFlBQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBdUMsc0JBQXZDLENBQVgsRUFBMkVDLE9BQU8sSUFBSTtBQUNyRyxjQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxLQUF4QyxDQUFoQjtBQUNBLGNBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixPQUFPLENBQUNPLFNBQS9DO0FBQ0EsZUFBTztBQUFFUixpQkFBRjtBQUFXSztBQUFYLFNBQVA7QUFDRCxPQUpnQixDQUFqQjtBQUtBVixjQUFRLENBQUNjLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUMsSUFBSSxDQUFDQyxHQUFMLENBQVNILENBQUMsQ0FBQ0wsYUFBWCxJQUE0Qk8sSUFBSSxDQUFDQyxHQUFMLENBQVNGLENBQUMsQ0FBQ04sYUFBWCxDQUFwRDtBQUNBLFlBQU1TLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ29CLElBQVQsQ0FBYyxDQUFDO0FBQUVWO0FBQUYsT0FBRCxLQUF1QkEsYUFBYSxHQUFHLENBQXJELEtBQTJEVixRQUFRLENBQUMsQ0FBRCxDQUFyRjtBQUNBRyxjQUFRLENBQ0xDLGdCQURILENBQ3FCLDZCQURyQixFQUVHaUIsT0FGSCxDQUVXQyxDQUFDLElBQUlBLENBQUMsS0FBS0gsU0FBUyxDQUFDZCxPQUFoQixJQUEyQmlCLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CLENBRjNDO0FBR0FMLGVBQVMsQ0FBQ2QsT0FBVixDQUFrQmtCLFNBQWxCLENBQTRCRSxHQUE1QixDQUFnQyxRQUFoQztBQUVBdEIsY0FBUSxDQUFDQyxnQkFBVCxDQUEyQixlQUEzQixFQUEyQ2lCLE9BQTNDLENBQW1EaEIsT0FBTyxJQUFJO0FBQzVELGNBQU1xQixPQUFPLEdBQUdyQixPQUFoQjtBQUNBLGNBQU1zQixTQUFTLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0IsVUFBdEIsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDRCxTQUFELElBQWNELE9BQU8sQ0FBQ0csSUFBdEIsSUFBOEJILE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBbEQsRUFBb0U7QUFDbEVKLGlCQUFPLENBQUNHLElBQVIsR0FBZSxLQUFmO0FBQ0EsaUJBQU9ILE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBdkI7QUFDRDs7QUFDRCxZQUFJSCxTQUFTLElBQUksQ0FBQ0QsT0FBTyxDQUFDRyxJQUExQixFQUFnQztBQUM5QkgsaUJBQU8sQ0FBQ0csSUFBUixHQUFlLElBQWY7QUFDQUgsaUJBQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JzQixnQkFBaEIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRCxLQXpCRDs7QUEwQkFuQixVQUFNLENBQUNvQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ2hDLFFBQWxDO0FBQ0FBLFlBQVE7QUFDUixXQUFPLE1BQU1ZLE1BQU0sQ0FBQ3FCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDakMsUUFBckMsQ0FBYjtBQUNELEdBOUJRLEVBOEJOLENBQUNGLElBQUQsQ0E5Qk0sQ0FBVCxDQURtRCxDQWlDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVvQywyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFckM7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQW5DRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXFDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uMzgzOTRjZDQyNjEwNDFmMTBlOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0b2NMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2FzaWRlIGFbZGF0YS10b2MtaWRdJyksIGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5kYXRhc2V0LnRvY0lkISkhO1xuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVG9wID0gd2luZG93LnNjcm9sbFkgLSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZGlzdGFuY2VUb1RvcCB9O1xuICAgICAgfSk7XG4gICAgICB0b2NMaW5rcy5zb3J0KChhLCBiKSA9PiBNYXRoLmFicyhhLmRpc3RhbmNlVG9Ub3ApIC0gTWF0aC5hYnMoYi5kaXN0YW5jZVRvVG9wKSk7XG4gICAgICBjb25zdCB0aGVBY3RpdmUgPSB0b2NMaW5rcy5maW5kKCh7IGRpc3RhbmNlVG9Ub3AgfSkgPT4gZGlzdGFuY2VUb1RvcCA+IDApIHx8IHRvY0xpbmtzWzBdO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGEuYWN0aXZlW2RhdGEtdG9jLWlkXWApXG4gICAgICAgIC5mb3JFYWNoKGUgPT4gZSAhPT0gdGhlQWN0aXZlLmVsZW1lbnQgJiYgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICB0aGVBY3RpdmUuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgb25TY3JvbGwoKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgfSwgW2h0bWxdKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvY3VtZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9