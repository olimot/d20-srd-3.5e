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
        const distanceToTop = window.scrollY - section.offsetTop - 56;
        Object.assign(element.dataset, {
          distanceToTop
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXN0VG9Ub3AiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwiYWJzIiwidGhlQWN0aXZlIiwiZmluZCIsImZvckVhY2giLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFlBQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBdUMsc0JBQXZDLENBQVgsRUFBMkVDLE9BQU8sSUFBSTtBQUNyRyxjQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxLQUF4QyxDQUFoQjtBQUNBLGNBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixPQUFPLENBQUNPLFNBQXpCLEdBQXFDLEVBQTNEO0FBQ0FDLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjVixPQUFPLENBQUNHLE9BQXRCLEVBQStCO0FBQUVFO0FBQUYsU0FBL0I7QUFDQSxlQUFPO0FBQUVMLGlCQUFGO0FBQVdXLG1CQUFTLEVBQUVOO0FBQXRCLFNBQVA7QUFDRCxPQUxnQixDQUFqQjtBQU1BVixjQUFRLENBQUNpQixJQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxDQUFDLENBQUNGLFNBQVgsSUFBd0JJLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixDQUFDLENBQUNILFNBQVgsQ0FBaEQ7QUFDQSxZQUFNTSxTQUFTLEdBQUd0QixRQUFRLENBQUN1QixJQUFULENBQWMsQ0FBQztBQUFFUDtBQUFGLE9BQUQsS0FBbUJBLFNBQVMsR0FBRyxDQUE3QyxLQUFtRGhCLFFBQVEsQ0FBQyxDQUFELENBQTdFO0FBQ0FHLGNBQVEsQ0FDTEMsZ0JBREgsQ0FDcUIsNkJBRHJCLEVBRUdvQixPQUZILENBRVdDLENBQUMsSUFBSUEsQ0FBQyxLQUFLSCxTQUFTLENBQUNqQixPQUFoQixJQUEyQm9CLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxNQUFaLENBQW1CLFFBQW5CLENBRjNDO0FBR0FMLGVBQVMsQ0FBQ2pCLE9BQVYsQ0FBa0JxQixTQUFsQixDQUE0QkUsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFFQXpCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsZUFBM0IsRUFBMkNvQixPQUEzQyxDQUFtRG5CLE9BQU8sSUFBSTtBQUM1RCxjQUFNd0IsT0FBTyxHQUFHeEIsT0FBaEI7QUFDQSxjQUFNeUIsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLFVBQXRCLENBQXBCOztBQUNBLFlBQUksQ0FBQ0QsU0FBRCxJQUFjRCxPQUFPLENBQUNHLElBQXRCLElBQThCSCxPQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQWxELEVBQW9FO0FBQ2xFSixpQkFBTyxDQUFDRyxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPSCxPQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUgsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBMUIsRUFBZ0M7QUFDOUJILGlCQUFPLENBQUNHLElBQVIsR0FBZSxJQUFmO0FBQ0FILGlCQUFPLENBQUNyQixPQUFSLENBQWdCeUIsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0ExQkQ7O0FBMkJBdEIsVUFBTSxDQUFDdUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NuQyxRQUFsQztBQUNBLFdBQU8sTUFBTVksTUFBTSxDQUFDd0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNwQyxRQUFyQyxDQUFiO0FBQ0QsR0E5QlEsRUE4Qk4sQ0FBQ0YsSUFBRCxDQTlCTSxDQUFULENBRG1ELENBaUNuRDs7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRXVDLDJFQUFoQjtBQUFpQywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUV4QztBQUFWO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBbkNEOztHQUFNRCxZOztLQUFBQSxZO0FBcUNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS5kOGMxNzY0MTE5ZDA3MDRhMmMyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBodG1sIH06IHsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvY0xpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignYXNpZGUgYVtkYXRhLXRvYy1pZF0nKSwgZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmRhdGFzZXQudG9jSWQhKSE7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSB3aW5kb3cuc2Nyb2xsWSAtIHNlY3Rpb24ub2Zmc2V0VG9wIC0gNTY7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCB7IGRpc3RhbmNlVG9Ub3AgfSk7XG4gICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGRpc3RUb1RvcDogZGlzdGFuY2VUb1RvcCB9O1xuICAgICAgfSk7XG4gICAgICB0b2NMaW5rcy5zb3J0KChhLCBiKSA9PiBNYXRoLmFicyhhLmRpc3RUb1RvcCkgLSBNYXRoLmFicyhiLmRpc3RUb1RvcCkpO1xuICAgICAgY29uc3QgdGhlQWN0aXZlID0gdG9jTGlua3MuZmluZCgoeyBkaXN0VG9Ub3AgfSkgPT4gZGlzdFRvVG9wID4gMCkgfHwgdG9jTGlua3NbMF07XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgYS5hY3RpdmVbZGF0YS10b2MtaWRdYClcbiAgICAgICAgLmZvckVhY2goZSA9PiBlICE9PSB0aGVBY3RpdmUuZWxlbWVudCAmJiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIHRoZUFjdGl2ZS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBhc2lkZSBkZXRhaWxzYCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnQgYXMgSFRNTERldGFpbHNFbGVtZW50O1xuICAgICAgICBjb25zdCBoYXNBY3RpdmUgPSAhIWRldGFpbHMucXVlcnlTZWxlY3RvcignYS5hY3RpdmUnKTtcbiAgICAgICAgaWYgKCFoYXNBY3RpdmUgJiYgZGV0YWlscy5vcGVuICYmIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyKSB7XG4gICAgICAgICAgZGV0YWlscy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWRldGFpbHMub3Blbikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IHRydWU7XG4gICAgICAgICAgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIgPSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgfSwgW2h0bWxdKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvY3VtZW50fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9