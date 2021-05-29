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
        const distanceToTop = Math.abs(window.scrollY - section.offsetTop - 56);
        Object.assign(element.dataset, {
          distanceToTop
        });
        return {
          element,
          distToTop: distanceToTop
        };
      });
      tocLinks.sort((a, b) => a.distToTop - b.distToTop);
      document.querySelectorAll(`aside a.active[data-toc-id]`).forEach(e => e !== tocLinks[0].element && e.classList.remove('active'));
      tocLinks[0].element.classList.add('active');
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
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwiT2JqZWN0IiwiYXNzaWduIiwiZGlzdFRvVG9wIiwic29ydCIsImEiLCJiIiwiZm9yRWFjaCIsImUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkZXRhaWxzIiwiaGFzQWN0aXZlIiwicXVlcnlTZWxlY3RvciIsIm9wZW4iLCJvcGVuZWRCeU9ic2VydmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQztBQUFBOztBQUNuREMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsWUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxnQkFBVCxDQUF1QyxzQkFBdkMsQ0FBWCxFQUEyRUMsT0FBTyxJQUFJO0FBQ3JHLGNBQU1DLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLEtBQXhDLENBQWhCO0FBQ0EsY0FBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FDcEJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsT0FBTyxDQUFDUyxTQUF6QixHQUFxQyxFQURqQixDQUF0QjtBQUdBQyxjQUFNLENBQUNDLE1BQVAsQ0FBY1osT0FBTyxDQUFDRyxPQUF0QixFQUErQjtBQUFFRTtBQUFGLFNBQS9CO0FBQ0EsZUFBTztBQUFFTCxpQkFBRjtBQUFXYSxtQkFBUyxFQUFFUjtBQUF0QixTQUFQO0FBQ0QsT0FQZ0IsQ0FBakI7QUFRQVYsY0FBUSxDQUFDbUIsSUFBVCxDQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUNGLFNBQUYsR0FBY0csQ0FBQyxDQUFDSCxTQUF4QztBQUNBZixjQUFRLENBQ0xDLGdCQURILENBQ3FCLDZCQURyQixFQUVHa0IsT0FGSCxDQUVXQyxDQUFDLElBQUlBLENBQUMsS0FBS3ZCLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUssT0FBbEIsSUFBNkJrQixDQUFDLENBQUNDLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQixDQUY3QztBQUdBekIsY0FBUSxDQUFDLENBQUQsQ0FBUixDQUFZSyxPQUFaLENBQW9CbUIsU0FBcEIsQ0FBOEJFLEdBQTlCLENBQWtDLFFBQWxDO0FBRUF2QixjQUFRLENBQUNDLGdCQUFULENBQTJCLGVBQTNCLEVBQTJDa0IsT0FBM0MsQ0FBbURqQixPQUFPLElBQUk7QUFDNUQsY0FBTXNCLE9BQU8sR0FBR3RCLE9BQWhCO0FBQ0EsY0FBTXVCLFNBQVMsR0FBRyxDQUFDLENBQUNELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQixVQUF0QixDQUFwQjs7QUFDQSxZQUFJLENBQUNELFNBQUQsSUFBY0QsT0FBTyxDQUFDRyxJQUF0QixJQUE4QkgsT0FBTyxDQUFDbkIsT0FBUixDQUFnQnVCLGdCQUFsRCxFQUFvRTtBQUNsRUosaUJBQU8sQ0FBQ0csSUFBUixHQUFlLEtBQWY7QUFDQSxpQkFBT0gsT0FBTyxDQUFDbkIsT0FBUixDQUFnQnVCLGdCQUF2QjtBQUNEOztBQUNELFlBQUlILFNBQVMsSUFBSSxDQUFDRCxPQUFPLENBQUNHLElBQTFCLEVBQWdDO0FBQzlCSCxpQkFBTyxDQUFDRyxJQUFSLEdBQWUsSUFBZjtBQUNBSCxpQkFBTyxDQUFDbkIsT0FBUixDQUFnQnVCLGdCQUFoQixHQUFtQyxNQUFuQztBQUNEO0FBQ0YsT0FYRDtBQVlELEtBM0JEOztBQTRCQWxCLFVBQU0sQ0FBQ21CLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDakMsUUFBbEM7QUFDQSxXQUFPLE1BQU1jLE1BQU0sQ0FBQ29CLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDbEMsUUFBckMsQ0FBYjtBQUNELEdBL0JRLEVBK0JOLENBQUNGLElBQUQsQ0EvQk0sQ0FBVCxDQURtRCxDQWtDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVxQywyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFdEM7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQXBDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXNDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uOWZiMzJkMGY4M2Y0NjIwNTY4MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0b2NMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2FzaWRlIGFbZGF0YS10b2MtaWRdJyksIGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5kYXRhc2V0LnRvY0lkISkhO1xuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVG9wID0gTWF0aC5hYnMoXG4gICAgICAgICAgd2luZG93LnNjcm9sbFkgLSBzZWN0aW9uLm9mZnNldFRvcCAtIDU2LFxuICAgICAgICApO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgeyBkaXN0YW5jZVRvVG9wIH0pO1xuICAgICAgICByZXR1cm4geyBlbGVtZW50LCBkaXN0VG9Ub3A6IGRpc3RhbmNlVG9Ub3AgfTtcbiAgICAgIH0pO1xuICAgICAgdG9jTGlua3Muc29ydCgoYSwgYikgPT4gYS5kaXN0VG9Ub3AgLSBiLmRpc3RUb1RvcCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgYS5hY3RpdmVbZGF0YS10b2MtaWRdYClcbiAgICAgICAgLmZvckVhY2goZSA9PiBlICE9PSB0b2NMaW5rc1swXS5lbGVtZW50ICYmIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgdG9jTGlua3NbMF0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==