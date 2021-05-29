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
      document.querySelectorAll(`aside a.active[data-toc-id]`).forEach(e => e !== tocLinkElements[0] && e.classList.remove('active'));
      tocLinkElements[0].classList.add('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRWaWV3L0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiaHRtbCIsInVzZUVmZmVjdCIsIm9uU2Nyb2xsIiwidG9jTGlua3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInRvY0lkIiwiZGlzdGFuY2VUb1RvcCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXN0VG9Ub3AiLCJzb3J0IiwiYSIsImIiLCJmb3JFYWNoIiwiZSIsInRvY0xpbmtFbGVtZW50cyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRldGFpbHMiLCJoYXNBY3RpdmUiLCJxdWVyeVNlbGVjdG9yIiwib3BlbiIsIm9wZW5lZEJ5T2JzZXJ2ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdDO0FBQUE7O0FBQ25EQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixZQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLGdCQUFULENBQXVDLHNCQUF2QyxDQUFYLEVBQTJFQyxPQUFPLElBQUk7QUFDckcsY0FBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0JGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsS0FBeEMsQ0FBaEI7QUFDQSxjQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUNwQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixPQUFPLENBQUNTLFNBQXpCLEdBQXFDLEVBQXJDLEdBQTJDVCxPQUFPLENBQUNVLFFBQVIsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFxQ0MsWUFEM0QsQ0FBdEI7QUFHQUMsY0FBTSxDQUFDQyxNQUFQLENBQWNkLE9BQU8sQ0FBQ0csT0FBdEIsRUFBK0I7QUFBRUU7QUFBRixTQUEvQjtBQUNBLGVBQU87QUFBRUwsaUJBQUY7QUFBV2UsbUJBQVMsRUFBRVY7QUFBdEIsU0FBUDtBQUNELE9BUGdCLENBQWpCO0FBUUFWLGNBQVEsQ0FBQ3FCLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDRixTQUFGLEdBQWNHLENBQUMsQ0FBQ0gsU0FBeEM7QUFDQWpCLGNBQVEsQ0FDTEMsZ0JBREgsQ0FDcUIsNkJBRHJCLEVBRUdvQixPQUZILENBRVdDLENBQUMsSUFBSUEsQ0FBQyxLQUFLQyxlQUFlLENBQUMsQ0FBRCxDQUFyQixJQUE0QkQsQ0FBQyxDQUFDRSxTQUFGLENBQVlDLE1BQVosQ0FBbUIsUUFBbkIsQ0FGNUM7QUFHQUYscUJBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJDLFNBQW5CLENBQTZCRSxHQUE3QixDQUFpQyxRQUFqQztBQUVBMUIsY0FBUSxDQUFDQyxnQkFBVCxDQUEyQixlQUEzQixFQUEyQ29CLE9BQTNDLENBQW1EbkIsT0FBTyxJQUFJO0FBQzVELGNBQU15QixPQUFPLEdBQUd6QixPQUFoQjtBQUNBLGNBQU0wQixTQUFTLEdBQUcsQ0FBQyxDQUFDRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0IsVUFBdEIsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDRCxTQUFELElBQWNELE9BQU8sQ0FBQ0csSUFBdEIsSUFBOEJILE9BQU8sQ0FBQ3RCLE9BQVIsQ0FBZ0IwQixnQkFBbEQsRUFBb0U7QUFDbEVKLGlCQUFPLENBQUNHLElBQVIsR0FBZSxLQUFmO0FBQ0EsaUJBQU9ILE9BQU8sQ0FBQ3RCLE9BQVIsQ0FBZ0IwQixnQkFBdkI7QUFDRDs7QUFDRCxZQUFJSCxTQUFTLElBQUksQ0FBQ0QsT0FBTyxDQUFDRyxJQUExQixFQUFnQztBQUM5QkgsaUJBQU8sQ0FBQ0csSUFBUixHQUFlLElBQWY7QUFDQUgsaUJBQU8sQ0FBQ3RCLE9BQVIsQ0FBZ0IwQixnQkFBaEIsR0FBbUMsTUFBbkM7QUFDRDtBQUNGLE9BWEQ7QUFZRCxLQTNCRDs7QUE0QkFyQixVQUFNLENBQUNzQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3BDLFFBQWxDO0FBQ0EsV0FBTyxNQUFNYyxNQUFNLENBQUN1QixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ3JDLFFBQXJDLENBQWI7QUFDRCxHQS9CUSxFQStCTixDQUFDRixJQUFELENBL0JNLENBQVQsQ0FEbUQsQ0FrQ25EOztBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFFd0MsMkVBQWhCO0FBQWlDLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRXpDO0FBQVY7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FwQ0Q7O0dBQU1ELFk7O0tBQUFBLFk7QUFzQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLmEzYTMyMWE1NGNjZWZjZTI2MTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RvY3VtZW50Vmlldy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9ICh7IGh0bWwgfTogeyBodG1sOiBzdHJpbmcgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9jTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdhc2lkZSBhW2RhdGEtdG9jLWlkXScpLCBlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuZGF0YXNldC50b2NJZCEpITtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RvcCA9IE1hdGguYWJzKFxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxZIC0gc2VjdGlvbi5vZmZzZXRUb3AgKyA1NiArIChzZWN0aW9uLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50KS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCB7IGRpc3RhbmNlVG9Ub3AgfSk7XG4gICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGRpc3RUb1RvcDogZGlzdGFuY2VUb1RvcCB9O1xuICAgICAgfSk7XG4gICAgICB0b2NMaW5rcy5zb3J0KChhLCBiKSA9PiBhLmRpc3RUb1RvcCAtIGIuZGlzdFRvVG9wKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBhc2lkZSBhLmFjdGl2ZVtkYXRhLXRvYy1pZF1gKVxuICAgICAgICAuZm9yRWFjaChlID0+IGUgIT09IHRvY0xpbmtFbGVtZW50c1swXSAmJiBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgIHRvY0xpbmtFbGVtZW50c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYXNpZGUgZGV0YWlsc2ApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBlbGVtZW50IGFzIEhUTUxEZXRhaWxzRWxlbWVudDtcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlID0gISFkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2EuYWN0aXZlJyk7XG4gICAgICAgIGlmICghaGFzQWN0aXZlICYmIGRldGFpbHMub3BlbiAmJiBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcikge1xuICAgICAgICAgIGRldGFpbHMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBkZXRhaWxzLmRhdGFzZXQub3BlbmVkQnlPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQWN0aXZlICYmICFkZXRhaWxzLm9wZW4pIHtcbiAgICAgICAgICBkZXRhaWxzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIGRldGFpbHMuZGF0YXNldC5vcGVuZWRCeU9ic2VydmVyID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gIH0sIFtodG1sXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==