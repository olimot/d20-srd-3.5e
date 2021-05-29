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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const tocItem = document.querySelector(`aside a[data-toc-id="${id}"]`);
        if (!tocItem) return;

        if (entry.intersectionRatio > 0) {
          tocItem.classList.add('active');
          Object.assign(tocItem.dataset, {
            ir: `${entry.intersectionRatio}`
          });
        } else tocItem.classList.remove('active');
      });
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
    }); // Track all sections that have an `id` applied

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2NJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhc2V0IiwiaXIiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsInNlY3Rpb24iLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE9BQU8sSUFBSTtBQUNuREEsYUFBTyxDQUFDQyxPQUFSLENBQWdCQyxLQUFLLElBQUk7QUFDdkIsY0FBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixJQUExQixDQUFYO0FBQ0EsY0FBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBMkMsd0JBQXVCTCxFQUFHLElBQXJFLENBQWhCO0FBQ0EsWUFBSSxDQUFDRyxPQUFMLEVBQWM7O0FBQ2QsWUFBSUosS0FBSyxDQUFDTyxpQkFBTixHQUEwQixDQUE5QixFQUFpQztBQUMvQkgsaUJBQU8sQ0FBQ0ksU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQUMsZ0JBQU0sQ0FBQ0MsTUFBUCxDQUFjUCxPQUFPLENBQUNRLE9BQXRCLEVBQStCO0FBQUVDLGNBQUUsRUFBRyxHQUFFYixLQUFLLENBQUNPLGlCQUFrQjtBQUFqQyxXQUEvQjtBQUNELFNBSEQsTUFHT0gsT0FBTyxDQUFDSSxTQUFSLENBQWtCTSxNQUFsQixDQUF5QixRQUF6QjtBQUNSLE9BUkQ7QUFVQVQsY0FBUSxDQUFDVSxnQkFBVCxDQUEyQixlQUEzQixFQUEyQ2hCLE9BQTNDLENBQW1EaUIsT0FBTyxJQUFJO0FBQzVELGNBQU1DLE9BQU8sR0FBR0QsT0FBaEI7QUFDQSxjQUFNRSxTQUFTLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNYLGFBQVIsQ0FBc0IsVUFBdEIsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDWSxTQUFELElBQWNELE9BQU8sQ0FBQ0UsSUFBdEIsSUFBOEJGLE9BQU8sQ0FBQ0wsT0FBUixDQUFnQlEsZ0JBQWxELEVBQW9FO0FBQ2xFSCxpQkFBTyxDQUFDRSxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPRixPQUFPLENBQUNMLE9BQVIsQ0FBZ0JRLGdCQUF2QjtBQUNEOztBQUNELFlBQUlGLFNBQVMsSUFBSSxDQUFDRCxPQUFPLENBQUNFLElBQTFCLEVBQWdDO0FBQzlCRixpQkFBTyxDQUFDRSxJQUFSLEdBQWUsSUFBZjtBQUNBRixpQkFBTyxDQUFDTCxPQUFSLENBQWdCUSxnQkFBaEIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRCxLQXZCZ0IsQ0FBakIsQ0FEYyxDQTBCZDs7QUFDQWYsWUFBUSxDQUFDVSxnQkFBVCxDQUEwQixhQUExQixFQUF5Q2hCLE9BQXpDLENBQWlEc0IsT0FBTyxJQUFJO0FBQzFEekIsY0FBUSxDQUFDMEIsT0FBVCxDQUFpQkQsT0FBakI7QUFDRCxLQUZEO0FBR0EsV0FBTyxNQUFNekIsUUFBUSxDQUFDMkIsVUFBVCxFQUFiO0FBQ0QsR0EvQlEsRUErQk4sQ0FBQzdCLElBQUQsQ0EvQk0sQ0FBVCxDQURtRCxDQWtDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUU4QiwyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFL0I7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQXBDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXNDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uOWQ2OGYyMTcyNjQ1OTIwYmE1YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGNvbnN0IHRvY0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxBbmNob3JFbGVtZW50PihgYXNpZGUgYVtkYXRhLXRvYy1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgIGlmICghdG9jSXRlbSkgcmV0dXJuO1xuICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgdG9jSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRvY0l0ZW0uZGF0YXNldCwgeyBpcjogYCR7ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW99YCB9KTtcbiAgICAgICAgfSBlbHNlIHRvY0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRyYWNrIGFsbCBzZWN0aW9ucyB0aGF0IGhhdmUgYW4gYGlkYCBhcHBsaWVkXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbltpZF0nKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbaHRtbF0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=