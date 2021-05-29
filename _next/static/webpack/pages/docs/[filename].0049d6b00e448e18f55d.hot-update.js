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
      rootMargin: '56px 0'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2NJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YXNldCIsImlyIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJvcGVuIiwib3BlbmVkQnlPYnNlcnZlciIsInJvb3RNYXJnaW4iLCJzZWN0aW9uIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJzdHlsZXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQztBQUFBOztBQUNuREMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQ2ZDLE9BQU8sSUFBSTtBQUNUQSxhQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQUssSUFBSTtBQUN2QixjQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxZQUFiLENBQTBCLElBQTFCLENBQVg7QUFDQSxjQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUEyQyx3QkFBdUJMLEVBQUcsSUFBckUsQ0FBaEI7QUFDQSxZQUFJLENBQUNHLE9BQUwsRUFBYztBQUNkRyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osT0FBTyxDQUFDSyxPQUF0QixFQUErQjtBQUFFQyxZQUFFLEVBQUcsR0FBRVYsS0FBSyxDQUFDVyxpQkFBa0I7QUFBakMsU0FBL0I7O0FBQ0EsWUFBSVgsS0FBSyxDQUFDVyxpQkFBTixHQUEwQixDQUE5QixFQUFpQztBQUMvQlAsaUJBQU8sQ0FBQ1EsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRCxTQUZELE1BRU9ULE9BQU8sQ0FBQ1EsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsUUFBekI7QUFDUixPQVJEO0FBVUFULGNBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMkIsZUFBM0IsRUFBMkNoQixPQUEzQyxDQUFtRGlCLE9BQU8sSUFBSTtBQUM1RCxjQUFNQyxPQUFPLEdBQUdELE9BQWhCO0FBQ0EsY0FBTUUsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDWCxhQUFSLENBQXNCLFVBQXRCLENBQXBCOztBQUNBLFlBQUksQ0FBQ1ksU0FBRCxJQUFjRCxPQUFPLENBQUNFLElBQXRCLElBQThCRixPQUFPLENBQUNSLE9BQVIsQ0FBZ0JXLGdCQUFsRCxFQUFvRTtBQUNsRUgsaUJBQU8sQ0FBQ0UsSUFBUixHQUFlLEtBQWY7QUFDQSxpQkFBT0YsT0FBTyxDQUFDUixPQUFSLENBQWdCVyxnQkFBdkI7QUFDRDs7QUFDRCxZQUFJRixTQUFTLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxJQUExQixFQUFnQztBQUM5QkYsaUJBQU8sQ0FBQ0UsSUFBUixHQUFlLElBQWY7QUFDQUYsaUJBQU8sQ0FBQ1IsT0FBUixDQUFnQlcsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0F4QmMsRUF5QmY7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBekJlLENBQWpCLENBRGMsQ0E2QmQ7O0FBQ0FoQixZQUFRLENBQUNVLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDaEIsT0FBekMsQ0FBaUR1QixPQUFPLElBQUk7QUFDMUQxQixjQUFRLENBQUMyQixPQUFULENBQWlCRCxPQUFqQjtBQUNELEtBRkQ7QUFHQSxXQUFPLE1BQU0xQixRQUFRLENBQUM0QixVQUFULEVBQWI7QUFDRCxHQWxDUSxFQWtDTixDQUFDOUIsSUFBRCxDQWxDTSxDQUFULENBRG1ELENBcUNuRDs7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRStCLDJFQUFoQjtBQUFpQywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVoQztBQUFWO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBdkNEOztHQUFNRCxZOztLQUFBQSxZO0FBeUNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS4wMDQ5ZDZiMDBlNDQ4ZTE4ZjU1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBodG1sIH06IHsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICBjb25zdCB0b2NJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oYGFzaWRlIGFbZGF0YS10b2MtaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgIGlmICghdG9jSXRlbSkgcmV0dXJuO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odG9jSXRlbS5kYXRhc2V0LCB7IGlyOiBgJHtlbnRyeS5pbnRlcnNlY3Rpb25SYXRpb31gIH0pO1xuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICAgIHRvY0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIHRvY0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGRldGFpbHNgKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgICBjb25zdCBoYXNBY3RpdmUgPSAhIWRldGFpbHMucXVlcnlTZWxlY3RvcignYS5hY3RpdmUnKTtcbiAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkZXRhaWxzLm9wZW4gJiYgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZGVsZXRlIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICAgIGRldGFpbHMub3BlbiA9IHRydWU7XG4gICAgICAgICAgICBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlciA9ICd0cnVlJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgcm9vdE1hcmdpbjogJzU2cHggMCcgfSxcbiAgICApO1xuXG4gICAgLy8gVHJhY2sgYWxsIHNlY3Rpb25zIHRoYXQgaGF2ZSBhbiBgaWRgIGFwcGxpZWRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==