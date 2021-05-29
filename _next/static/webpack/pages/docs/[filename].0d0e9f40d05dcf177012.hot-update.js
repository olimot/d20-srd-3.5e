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
        const distanceToTop = Math.abs(window.scrollY - section.offsetTop + 56 + section.children[0].offsetHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXN0VG9Ub3AiLCJzb3J0IiwiYSIsImIiLCJmb3JFYWNoIiwiZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwib3BlbiIsIm9wZW5lZEJ5T2JzZXJ2ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixZQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLGdCQUFULENBQXVDLHNCQUF2QyxDQUFYLEVBQTJFQyxPQUFPLElBQUk7QUFDckcsY0FBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0JGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsS0FBeEMsQ0FBaEI7QUFDQSxjQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUNwQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixPQUFPLENBQUNTLFNBQXpCLEdBQXFDLEVBQXJDLEdBQTJDVCxPQUFPLENBQUNVLFFBQVIsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFxQ0MsWUFEM0QsQ0FBdEI7QUFHQUMsY0FBTSxDQUFDQyxNQUFQLENBQWNkLE9BQU8sQ0FBQ0csT0FBdEIsRUFBK0I7QUFBRUU7QUFBRixTQUEvQjtBQUNBLGVBQU87QUFBRUwsaUJBQUY7QUFBV2UsbUJBQVMsRUFBRVY7QUFBdEIsU0FBUDtBQUNELE9BUGdCLENBQWpCO0FBUUFWLGNBQVEsQ0FBQ3FCLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDRixTQUFGLEdBQWNHLENBQUMsQ0FBQ0gsU0FBeEM7QUFDQWpCLGNBQVEsQ0FDTEMsZ0JBREgsQ0FDcUIsNkJBRHJCLEVBRUdvQixPQUZILENBRVdDLENBQUMsSUFBSUEsQ0FBQyxLQUFLekIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSyxPQUFsQixJQUE2Qm9CLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CLENBRjdDO0FBR0EzQixjQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlLLE9BQVosQ0FBb0JxQixTQUFwQixDQUE4QkUsR0FBOUIsQ0FBa0MsUUFBbEM7QUFFQXpCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsZUFBM0IsRUFBMkNvQixPQUEzQyxDQUFtRG5CLE9BQU8sSUFBSTtBQUM1RCxjQUFNd0IsT0FBTyxHQUFHeEIsT0FBaEI7QUFDQSxjQUFNeUIsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLFVBQXRCLENBQXBCOztBQUNBLFlBQUksQ0FBQ0QsU0FBRCxJQUFjRCxPQUFPLENBQUNHLElBQXRCLElBQThCSCxPQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQWxELEVBQW9FO0FBQ2xFSixpQkFBTyxDQUFDRyxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPSCxPQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUgsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBMUIsRUFBZ0M7QUFDOUJILGlCQUFPLENBQUNHLElBQVIsR0FBZSxJQUFmO0FBQ0FILGlCQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0EzQkQ7O0FBNEJBcEIsVUFBTSxDQUFDcUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NuQyxRQUFsQztBQUNBLFdBQU8sTUFBTWMsTUFBTSxDQUFDc0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNwQyxRQUFyQyxDQUFiO0FBQ0QsR0EvQlEsRUErQk4sQ0FBQ0YsSUFBRCxDQS9CTSxDQUFULENBRG1ELENBa0NuRDs7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRXVDLDJFQUFoQjtBQUFpQywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUV4QztBQUFWO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBcENEOztHQUFNRCxZOztLQUFBQSxZO0FBc0NOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS4wZDBlOWY0MGQwNWRjZjE3NzAxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBodG1sIH06IHsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvY0xpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignYXNpZGUgYVtkYXRhLXRvYy1pZF0nKSwgZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmRhdGFzZXQudG9jSWQhKSE7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSBNYXRoLmFicyhcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSAtIHNlY3Rpb24ub2Zmc2V0VG9wICsgNTYgKyAoc2VjdGlvbi5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudCkub2Zmc2V0SGVpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgeyBkaXN0YW5jZVRvVG9wIH0pO1xuICAgICAgICByZXR1cm4geyBlbGVtZW50LCBkaXN0VG9Ub3A6IGRpc3RhbmNlVG9Ub3AgfTtcbiAgICAgIH0pO1xuICAgICAgdG9jTGlua3Muc29ydCgoYSwgYikgPT4gYS5kaXN0VG9Ub3AgLSBiLmRpc3RUb1RvcCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgYS5hY3RpdmVbZGF0YS10b2MtaWRdYClcbiAgICAgICAgLmZvckVhY2goZSA9PiBlICE9PSB0b2NMaW5rc1swXS5lbGVtZW50ICYmIGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgdG9jTGlua3NbMF0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==