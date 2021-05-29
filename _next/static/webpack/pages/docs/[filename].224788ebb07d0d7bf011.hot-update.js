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
        Object.assign(tocItem.dataset, {
          ir: `${entry.intersectionRatio}`
        });

        if (entry.intersectionRatio > 0) {
          tocItem.classList.add('active');
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
    }, {
      threshold: 56 * 2 / window.innerHeight
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
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2NJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YXNldCIsImlyIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsInRocmVzaG9sZCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2VjdGlvbiIsIm9ic2VydmUiLCJkaXNjb25uZWN0Iiwic3R5bGVzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0M7QUFBQTs7QUFDbkRDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUNmQyxPQUFPLElBQUk7QUFDVEEsYUFBTyxDQUFDQyxPQUFSLENBQWdCQyxLQUFLLElBQUk7QUFDdkIsY0FBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixJQUExQixDQUFYO0FBQ0EsY0FBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBMkMsd0JBQXVCTCxFQUFHLElBQXJFLENBQWhCO0FBQ0EsWUFBSSxDQUFDRyxPQUFMLEVBQWM7QUFDZEcsY0FBTSxDQUFDQyxNQUFQLENBQWNKLE9BQU8sQ0FBQ0ssT0FBdEIsRUFBK0I7QUFBRUMsWUFBRSxFQUFHLEdBQUVWLEtBQUssQ0FBQ1csaUJBQWtCO0FBQWpDLFNBQS9COztBQUNBLFlBQUlYLEtBQUssQ0FBQ1csaUJBQU4sR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JQLGlCQUFPLENBQUNRLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0QsU0FGRCxNQUVPVCxPQUFPLENBQUNRLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO0FBQ1IsT0FSRDtBQVVBVCxjQUFRLENBQUNVLGdCQUFULENBQTJCLGVBQTNCLEVBQTJDaEIsT0FBM0MsQ0FBbURpQixPQUFPLElBQUk7QUFDNUQsY0FBTUMsT0FBTyxHQUFHRCxPQUFoQjtBQUNBLGNBQU1FLFNBQVMsR0FBRyxDQUFDLENBQUNELE9BQU8sQ0FBQ1gsYUFBUixDQUFzQixVQUF0QixDQUFwQjs7QUFDQSxZQUFJLENBQUNZLFNBQUQsSUFBY0QsT0FBTyxDQUFDRSxJQUF0QixJQUE4QkYsT0FBTyxDQUFDUixPQUFSLENBQWdCVyxnQkFBbEQsRUFBb0U7QUFDbEVILGlCQUFPLENBQUNFLElBQVIsR0FBZSxLQUFmO0FBQ0EsaUJBQU9GLE9BQU8sQ0FBQ1IsT0FBUixDQUFnQlcsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUYsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsSUFBMUIsRUFBZ0M7QUFDOUJGLGlCQUFPLENBQUNFLElBQVIsR0FBZSxJQUFmO0FBQ0FGLGlCQUFPLENBQUNSLE9BQVIsQ0FBZ0JXLGdCQUFoQixHQUFtQyxNQUFuQztBQUNEO0FBQ0YsT0FYRDtBQVlELEtBeEJjLEVBeUJmO0FBQUVDLGVBQVMsRUFBRyxLQUFLLENBQU4sR0FBV0MsTUFBTSxDQUFDQztBQUEvQixLQXpCZSxDQUFqQixDQURjLENBNkJkOztBQUNBbEIsWUFBUSxDQUFDVSxnQkFBVCxDQUEwQixhQUExQixFQUF5Q2hCLE9BQXpDLENBQWlEeUIsT0FBTyxJQUFJO0FBQzFENUIsY0FBUSxDQUFDNkIsT0FBVCxDQUFpQkQsT0FBakI7QUFDRCxLQUZEO0FBR0EsV0FBTyxNQUFNNUIsUUFBUSxDQUFDOEIsVUFBVCxFQUFiO0FBQ0QsR0FsQ1EsRUFrQ04sQ0FBQ2hDLElBQUQsQ0FsQ00sQ0FBVCxDQURtRCxDQXFDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUVpQywyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFbEM7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQXZDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQXlDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uMjI0Nzg4ZWJiMDdkMGQ3YmYwMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgY29uc3QgdG9jSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KGBhc2lkZSBhW2RhdGEtdG9jLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICBpZiAoIXRvY0l0ZW0pIHJldHVybjtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRvY0l0ZW0uZGF0YXNldCwgeyBpcjogYCR7ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW99YCB9KTtcbiAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgICB0b2NJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB0b2NJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBhc2lkZSBkZXRhaWxzYCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZWxlbWVudCBhcyBIVE1MRGV0YWlsc0VsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgICAgaWYgKCFoYXNBY3RpdmUgJiYgZGV0YWlscy5vcGVuICYmIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyKSB7XG4gICAgICAgICAgICBkZXRhaWxzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0FjdGl2ZSAmJiAhZGV0YWlscy5vcGVuKSB7XG4gICAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIgPSAndHJ1ZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogKDU2ICogMikgLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSxcbiAgICApO1xuXG4gICAgLy8gVHJhY2sgYWxsIHNlY3Rpb25zIHRoYXQgaGF2ZSBhbiBgaWRgIGFwcGxpZWRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==