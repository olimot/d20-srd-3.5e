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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXN0VG9Ub3AiLCJzb3J0IiwiYSIsImIiLCJmb3JFYWNoIiwiZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwib3BlbiIsIm9wZW5lZEJ5T2JzZXJ2ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixZQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLGdCQUFULENBQXVDLHNCQUF2QyxDQUFYLEVBQTJFQyxPQUFPLElBQUk7QUFDckcsY0FBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0JGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsS0FBeEMsQ0FBaEI7QUFDQSxjQUFNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sT0FBTyxDQUFDTyxTQUF6QixHQUFxQyxFQUEzRDtBQUVBQyxjQUFNLENBQUNDLE1BQVAsQ0FBY1YsT0FBTyxDQUFDRyxPQUF0QixFQUErQjtBQUFFRTtBQUFGLFNBQS9CO0FBQ0EsZUFBTztBQUFFTCxpQkFBRjtBQUFXVyxtQkFBUyxFQUFFTjtBQUF0QixTQUFQO0FBQ0QsT0FOZ0IsQ0FBakI7QUFPQVYsY0FBUSxDQUFDaUIsSUFBVCxDQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUNGLFNBQUYsR0FBY0csQ0FBQyxDQUFDSCxTQUF4QztBQUNBYixjQUFRLENBQ0xDLGdCQURILENBQ3FCLDZCQURyQixFQUVHZ0IsT0FGSCxDQUVXQyxDQUFDLElBQUlBLENBQUMsS0FBS3JCLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUssT0FBbEIsSUFBNkJnQixDQUFDLENBQUNDLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixRQUFuQixDQUY3QztBQUdBdkIsY0FBUSxDQUFDLENBQUQsQ0FBUixDQUFZSyxPQUFaLENBQW9CaUIsU0FBcEIsQ0FBOEJFLEdBQTlCLENBQWtDLFFBQWxDO0FBRUFyQixjQUFRLENBQUNDLGdCQUFULENBQTJCLGVBQTNCLEVBQTJDZ0IsT0FBM0MsQ0FBbURmLE9BQU8sSUFBSTtBQUM1RCxjQUFNb0IsT0FBTyxHQUFHcEIsT0FBaEI7QUFDQSxjQUFNcUIsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCLFVBQXRCLENBQXBCOztBQUNBLFlBQUksQ0FBQ0QsU0FBRCxJQUFjRCxPQUFPLENBQUNHLElBQXRCLElBQThCSCxPQUFPLENBQUNqQixPQUFSLENBQWdCcUIsZ0JBQWxELEVBQW9FO0FBQ2xFSixpQkFBTyxDQUFDRyxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPSCxPQUFPLENBQUNqQixPQUFSLENBQWdCcUIsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUgsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0csSUFBMUIsRUFBZ0M7QUFDOUJILGlCQUFPLENBQUNHLElBQVIsR0FBZSxJQUFmO0FBQ0FILGlCQUFPLENBQUNqQixPQUFSLENBQWdCcUIsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0ExQkQ7O0FBMkJBbEIsVUFBTSxDQUFDbUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MvQixRQUFsQztBQUNBLFdBQU8sTUFBTVksTUFBTSxDQUFDb0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNoQyxRQUFyQyxDQUFiO0FBQ0QsR0E5QlEsRUE4Qk4sQ0FBQ0YsSUFBRCxDQTlCTSxDQUFULENBRG1ELENBaUNuRDs7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRW1DLDJFQUFoQjtBQUFpQywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVwQztBQUFWO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBbkNEOztHQUFNRCxZOztLQUFBQSxZO0FBcUNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS4zYjg3NjhhZjlkNWQ1Mjk0NzVmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBodG1sIH06IHsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvY0xpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignYXNpZGUgYVtkYXRhLXRvYy1pZF0nKSwgZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmRhdGFzZXQudG9jSWQhKSE7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSB3aW5kb3cuc2Nyb2xsWSAtIHNlY3Rpb24ub2Zmc2V0VG9wIC0gNTY7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LmRhdGFzZXQsIHsgZGlzdGFuY2VUb1RvcCB9KTtcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgZGlzdFRvVG9wOiBkaXN0YW5jZVRvVG9wIH07XG4gICAgICB9KTtcbiAgICAgIHRvY0xpbmtzLnNvcnQoKGEsIGIpID0+IGEuZGlzdFRvVG9wIC0gYi5kaXN0VG9Ub3ApO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGEuYWN0aXZlW2RhdGEtdG9jLWlkXWApXG4gICAgICAgIC5mb3JFYWNoKGUgPT4gZSAhPT0gdG9jTGlua3NbMF0uZWxlbWVudCAmJiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIHRvY0xpbmtzWzBdLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGRldGFpbHNgKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudCBhcyBIVE1MRGV0YWlsc0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9ICEhZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdhLmFjdGl2ZScpO1xuICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkZXRhaWxzLm9wZW4gJiYgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIpIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZGV0YWlscy5vcGVuKSB7XG4gICAgICAgICAgZGV0YWlscy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlciA9ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICB9LCBbaHRtbF0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=