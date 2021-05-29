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
      const crossedElements = [];
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const tocItem = document.querySelector(`aside a[data-toc-id="${id}"]`);
        if (!tocItem) return;
        Object.assign(tocItem.dataset, {
          ir: `${entry.intersectionRatio}`
        });
        if (entry.intersectionRatio > 0) crossedElements.push(tocItem);
      });
      crossedElements.sort((a, b) => document.getElementById(a.dataset.tocId).offsetTop - document.getElementById(b.dataset.tocId).offsetTop);
      crossedElements[0].classList.add('active');
      crossedElements.slice(1).forEach(e => e.classList.remove('active'));
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
      rootMargin: '-56px 0px -56px 0px'
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
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY3Jvc3NlZEVsZW1lbnRzIiwiZm9yRWFjaCIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2NJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YXNldCIsImlyIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2NJZCIsIm9mZnNldFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInNsaWNlIiwiZSIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsIm9wZW4iLCJvcGVuZWRCeU9ic2VydmVyIiwicm9vdE1hcmdpbiIsInNlY3Rpb24iLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FDZkMsT0FBTyxJQUFJO0FBQ1QsWUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0FELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQkMsS0FBSyxJQUFJO0FBQ3ZCLGNBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFlBQWIsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLGNBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQTJDLHdCQUF1QkwsRUFBRyxJQUFyRSxDQUFoQjtBQUNBLFlBQUksQ0FBQ0csT0FBTCxFQUFjO0FBQ2RHLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjSixPQUFPLENBQUNLLE9BQXRCLEVBQStCO0FBQUVDLFlBQUUsRUFBRyxHQUFFVixLQUFLLENBQUNXLGlCQUFrQjtBQUFqQyxTQUEvQjtBQUNBLFlBQUlYLEtBQUssQ0FBQ1csaUJBQU4sR0FBMEIsQ0FBOUIsRUFBaUNiLGVBQWUsQ0FBQ2MsSUFBaEIsQ0FBcUJSLE9BQXJCO0FBQ2xDLE9BTkQ7QUFRQU4scUJBQWUsQ0FBQ2UsSUFBaEIsQ0FDRSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FDRVYsUUFBUSxDQUFDVyxjQUFULENBQXdCRixDQUFDLENBQUNMLE9BQUYsQ0FBVVEsS0FBbEMsRUFBMkNDLFNBQTNDLEdBQXVEYixRQUFRLENBQUNXLGNBQVQsQ0FBd0JELENBQUMsQ0FBQ04sT0FBRixDQUFVUSxLQUFsQyxFQUEyQ0MsU0FGdEc7QUFJQXBCLHFCQUFlLENBQUMsQ0FBRCxDQUFmLENBQW1CcUIsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLFFBQWpDO0FBQ0F0QixxQkFBZSxDQUFDdUIsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUJ0QixPQUF6QixDQUFpQ3VCLENBQUMsSUFBSUEsQ0FBQyxDQUFDSCxTQUFGLENBQVlJLE1BQVosQ0FBbUIsUUFBbkIsQ0FBdEM7QUFFQWxCLGNBQVEsQ0FBQ21CLGdCQUFULENBQTJCLGVBQTNCLEVBQTJDekIsT0FBM0MsQ0FBbUQwQixPQUFPLElBQUk7QUFDNUQsY0FBTUMsT0FBTyxHQUFHRCxPQUFoQjtBQUNBLGNBQU1FLFNBQVMsR0FBRyxDQUFDLENBQUNELE9BQU8sQ0FBQ3BCLGFBQVIsQ0FBc0IsVUFBdEIsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDcUIsU0FBRCxJQUFjRCxPQUFPLENBQUNFLElBQXRCLElBQThCRixPQUFPLENBQUNqQixPQUFSLENBQWdCb0IsZ0JBQWxELEVBQW9FO0FBQ2xFSCxpQkFBTyxDQUFDRSxJQUFSLEdBQWUsS0FBZjtBQUNBLGlCQUFPRixPQUFPLENBQUNqQixPQUFSLENBQWdCb0IsZ0JBQXZCO0FBQ0Q7O0FBQ0QsWUFBSUYsU0FBUyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsSUFBMUIsRUFBZ0M7QUFDOUJGLGlCQUFPLENBQUNFLElBQVIsR0FBZSxJQUFmO0FBQ0FGLGlCQUFPLENBQUNqQixPQUFSLENBQWdCb0IsZ0JBQWhCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVhEO0FBWUQsS0E5QmMsRUErQmY7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBL0JlLENBQWpCLENBRGMsQ0FtQ2Q7O0FBQ0F6QixZQUFRLENBQUNtQixnQkFBVCxDQUEwQixhQUExQixFQUF5Q3pCLE9BQXpDLENBQWlEZ0MsT0FBTyxJQUFJO0FBQzFEcEMsY0FBUSxDQUFDcUMsT0FBVCxDQUFpQkQsT0FBakI7QUFDRCxLQUZEO0FBR0EsV0FBTyxNQUFNcEMsUUFBUSxDQUFDc0MsVUFBVCxFQUFiO0FBQ0QsR0F4Q1EsRUF3Q04sQ0FBQ3hDLElBQUQsQ0F4Q00sQ0FBVCxDQURtRCxDQTJDbkQ7O0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUV5QywyRUFBaEI7QUFBaUMsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFMUM7QUFBVjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQTdDRDs7R0FBTUQsWTs7S0FBQUEsWTtBQStDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL1tmaWxlbmFtZV0uYjM2NjA4NDlmMjE3NjZmYzk4ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRG9jdW1lbnRWaWV3Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRG9jdW1lbnRWaWV3ID0gKHsgaHRtbCB9OiB7IGh0bWw6IHN0cmluZyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgY29uc3QgY3Jvc3NlZEVsZW1lbnRzID0gW10gYXMgSFRNTEFuY2hvckVsZW1lbnRbXTtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgY29uc3QgdG9jSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KGBhc2lkZSBhW2RhdGEtdG9jLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICBpZiAoIXRvY0l0ZW0pIHJldHVybjtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRvY0l0ZW0uZGF0YXNldCwgeyBpcjogYCR7ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW99YCB9KTtcbiAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSBjcm9zc2VkRWxlbWVudHMucHVzaCh0b2NJdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3Jvc3NlZEVsZW1lbnRzLnNvcnQoXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhLmRhdGFzZXQudG9jSWQhKSEub2Zmc2V0VG9wIC0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYi5kYXRhc2V0LnRvY0lkISkhLm9mZnNldFRvcCxcbiAgICAgICAgKTtcbiAgICAgICAgY3Jvc3NlZEVsZW1lbnRzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBjcm9zc2VkRWxlbWVudHMuc2xpY2UoMSkuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGFzaWRlIGRldGFpbHNgKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgICBjb25zdCBoYXNBY3RpdmUgPSAhIWRldGFpbHMucXVlcnlTZWxlY3RvcignYS5hY3RpdmUnKTtcbiAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkZXRhaWxzLm9wZW4gJiYgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZGVsZXRlIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICAgIGRldGFpbHMub3BlbiA9IHRydWU7XG4gICAgICAgICAgICBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlciA9ICd0cnVlJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgcm9vdE1hcmdpbjogJy01NnB4IDBweCAtNTZweCAwcHgnIH0sXG4gICAgKTtcblxuICAgIC8vIFRyYWNrIGFsbCBzZWN0aW9ucyB0aGF0IGhhdmUgYW4gYGlkYCBhcHBsaWVkXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbltpZF0nKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbaHRtbF0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnR9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=