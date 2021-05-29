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

      if (crossedElements.length) {
        crossedElements[0].classList.add('active');
        crossedElements.slice(1).forEach(e => e.classList.remove('active'));
      }

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
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY3Jvc3NlZEVsZW1lbnRzIiwiZm9yRWFjaCIsImVudHJ5IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2NJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YXNldCIsImlyIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2NJZCIsIm9mZnNldFRvcCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInNsaWNlIiwiZSIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiZGV0YWlscyIsImhhc0FjdGl2ZSIsIm9wZW4iLCJvcGVuZWRCeU9ic2VydmVyIiwicm9vdE1hcmdpbiIsInNlY3Rpb24iLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FDZkMsT0FBTyxJQUFJO0FBQ1QsWUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0FELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQkMsS0FBSyxJQUFJO0FBQ3ZCLGNBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFlBQWIsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLGNBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQTJDLHdCQUF1QkwsRUFBRyxJQUFyRSxDQUFoQjtBQUNBLFlBQUksQ0FBQ0csT0FBTCxFQUFjO0FBQ2RHLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjSixPQUFPLENBQUNLLE9BQXRCLEVBQStCO0FBQUVDLFlBQUUsRUFBRyxHQUFFVixLQUFLLENBQUNXLGlCQUFrQjtBQUFqQyxTQUEvQjtBQUNBLFlBQUlYLEtBQUssQ0FBQ1csaUJBQU4sR0FBMEIsQ0FBOUIsRUFBaUNiLGVBQWUsQ0FBQ2MsSUFBaEIsQ0FBcUJSLE9BQXJCO0FBQ2xDLE9BTkQ7QUFRQU4scUJBQWUsQ0FBQ2UsSUFBaEIsQ0FDRSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FDRVYsUUFBUSxDQUFDVyxjQUFULENBQXdCRixDQUFDLENBQUNMLE9BQUYsQ0FBVVEsS0FBbEMsRUFBMkNDLFNBQTNDLEdBQXVEYixRQUFRLENBQUNXLGNBQVQsQ0FBd0JELENBQUMsQ0FBQ04sT0FBRixDQUFVUSxLQUFsQyxFQUEyQ0MsU0FGdEc7O0FBSUEsVUFBSXBCLGVBQWUsQ0FBQ3FCLE1BQXBCLEVBQTRCO0FBQzFCckIsdUJBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJzQixTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsUUFBakM7QUFDQXZCLHVCQUFlLENBQUN3QixLQUFoQixDQUFzQixDQUF0QixFQUF5QnZCLE9BQXpCLENBQWlDd0IsQ0FBQyxJQUFJQSxDQUFDLENBQUNILFNBQUYsQ0FBWUksTUFBWixDQUFtQixRQUFuQixDQUF0QztBQUNEOztBQUVEbkIsY0FBUSxDQUFDb0IsZ0JBQVQsQ0FBMkIsZUFBM0IsRUFBMkMxQixPQUEzQyxDQUFtRDJCLE9BQU8sSUFBSTtBQUM1RCxjQUFNQyxPQUFPLEdBQUdELE9BQWhCO0FBQ0EsY0FBTUUsU0FBUyxHQUFHLENBQUMsQ0FBQ0QsT0FBTyxDQUFDckIsYUFBUixDQUFzQixVQUF0QixDQUFwQjs7QUFDQSxZQUFJLENBQUNzQixTQUFELElBQWNELE9BQU8sQ0FBQ0UsSUFBdEIsSUFBOEJGLE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JxQixnQkFBbEQsRUFBb0U7QUFDbEVILGlCQUFPLENBQUNFLElBQVIsR0FBZSxLQUFmO0FBQ0EsaUJBQU9GLE9BQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JxQixnQkFBdkI7QUFDRDs7QUFDRCxZQUFJRixTQUFTLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxJQUExQixFQUFnQztBQUM5QkYsaUJBQU8sQ0FBQ0UsSUFBUixHQUFlLElBQWY7QUFDQUYsaUJBQU8sQ0FBQ2xCLE9BQVIsQ0FBZ0JxQixnQkFBaEIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRCxLQWhDYyxFQWlDZjtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FqQ2UsQ0FBakIsQ0FEYyxDQXFDZDs7QUFDQTFCLFlBQVEsQ0FBQ29CLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDMUIsT0FBekMsQ0FBaURpQyxPQUFPLElBQUk7QUFDMURyQyxjQUFRLENBQUNzQyxPQUFULENBQWlCRCxPQUFqQjtBQUNELEtBRkQ7QUFHQSxXQUFPLE1BQU1yQyxRQUFRLENBQUN1QyxVQUFULEVBQWI7QUFDRCxHQTFDUSxFQTBDTixDQUFDekMsSUFBRCxDQTFDTSxDQUFULENBRG1ELENBNkNuRDs7QUFDQSxzQkFBTztBQUFLLGFBQVMsRUFBRTBDLDJFQUFoQjtBQUFpQywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUUzQztBQUFWO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBL0NEOztHQUFNRCxZOztLQUFBQSxZO0FBaUROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS5iMzdiMjg0Mjc5YmM5OGU4M2VlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Eb2N1bWVudFZpZXcubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEb2N1bWVudFZpZXcgPSAoeyBodG1sIH06IHsgaHRtbDogc3RyaW5nIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICBjb25zdCBjcm9zc2VkRWxlbWVudHMgPSBbXSBhcyBIVE1MQW5jaG9yRWxlbWVudFtdO1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICBjb25zdCB0b2NJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oYGFzaWRlIGFbZGF0YS10b2MtaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgIGlmICghdG9jSXRlbSkgcmV0dXJuO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odG9jSXRlbS5kYXRhc2V0LCB7IGlyOiBgJHtlbnRyeS5pbnRlcnNlY3Rpb25SYXRpb31gIH0pO1xuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIGNyb3NzZWRFbGVtZW50cy5wdXNoKHRvY0l0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjcm9zc2VkRWxlbWVudHMuc29ydChcbiAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEuZGF0YXNldC50b2NJZCEpIS5vZmZzZXRUb3AgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmRhdGFzZXQudG9jSWQhKSEub2Zmc2V0VG9wLFxuICAgICAgICApO1xuICAgICAgICBpZiAoY3Jvc3NlZEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGNyb3NzZWRFbGVtZW50c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjcm9zc2VkRWxlbWVudHMuc2xpY2UoMSkuZm9yRWFjaChlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGVsZW1lbnQgYXMgSFRNTERldGFpbHNFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IGhhc0FjdGl2ZSA9ICEhZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdhLmFjdGl2ZScpO1xuICAgICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgICAgZGV0YWlscy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkZWxldGUgZGV0YWlscy5kYXRhc2V0Lm9wZW5lZEJ5T2JzZXJ2ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNBY3RpdmUgJiYgIWRldGFpbHMub3Blbikge1xuICAgICAgICAgICAgZGV0YWlscy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgeyByb290TWFyZ2luOiAnLTU2cHggMHB4IC01NnB4IDBweCcgfSxcbiAgICApO1xuXG4gICAgLy8gVHJhY2sgYWxsIHNlY3Rpb25zIHRoYXQgaGF2ZSBhbiBgaWRgIGFwcGxpZWRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==