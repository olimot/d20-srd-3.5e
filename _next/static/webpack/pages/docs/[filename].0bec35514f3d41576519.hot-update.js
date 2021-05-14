webpackHotUpdate_N_E("pages/docs/[filename]",{

/***/ "./src/components/Layout/buildTOC.ts":
/*!*******************************************!*\
  !*** ./src/components/Layout/buildTOC.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _data_anchors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/anchors.json */ "./data/anchors.json");
var _data_anchors_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/anchors.json */ "./data/anchors.json", 1);


const recurseToBuildTOC = (tocItem, current) => {
  if (tocItem.anchor.hnum < current.hnum) return [{
    anchor: tocItem.anchor,
    children: tocItem.children.length ? [...tocItem.children.slice(0, tocItem.children.length - 1), ...recurseToBuildTOC(tocItem.children[tocItem.children.length - 1], current)] : [{
      anchor: current,
      children: []
    }]
  }];
  return [tocItem, {
    anchor: current,
    children: []
  }];
};

const buildTOC = filename => {
  console.log(filename);
  const filtered = _data_anchors_json__WEBPACK_IMPORTED_MODULE_0__.filter(anchor => anchor.filename === filename);
  return filtered.reduce((toc, current) => {
    if (toc.length === 0) return [{
      anchor: current,
      children: []
    }];
    return [...toc.slice(0, toc.length - 1), ...recurseToBuildTOC(toc[toc.length - 1], current)];
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (buildTOC);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2J1aWxkVE9DLnRzIl0sIm5hbWVzIjpbInJlY3Vyc2VUb0J1aWxkVE9DIiwidG9jSXRlbSIsImN1cnJlbnQiLCJhbmNob3IiLCJobnVtIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzbGljZSIsImJ1aWxkVE9DIiwiZmlsZW5hbWUiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWQiLCJhbmNob3JzIiwiZmlsdGVyIiwicmVkdWNlIiwidG9jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQ0MsT0FBRCxFQUE2QkMsT0FBN0IsS0FBaUY7QUFDekcsTUFBSUQsT0FBTyxDQUFDRSxNQUFSLENBQWVDLElBQWYsR0FBc0JGLE9BQU8sQ0FBQ0UsSUFBbEMsRUFDRSxPQUFPLENBQ0w7QUFDRUQsVUFBTSxFQUFFRixPQUFPLENBQUNFLE1BRGxCO0FBRUVFLFlBQVEsRUFBRUosT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxNQUFqQixHQUNOLENBQ0UsR0FBR0wsT0FBTyxDQUFDSSxRQUFSLENBQWlCRSxLQUFqQixDQUF1QixDQUF2QixFQUEwQk4sT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxNQUFqQixHQUEwQixDQUFwRCxDQURMLEVBRUUsR0FBR04saUJBQWlCLENBQUNDLE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkosT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxNQUFqQixHQUEwQixDQUEzQyxDQUFELEVBQWdESixPQUFoRCxDQUZ0QixDQURNLEdBS04sQ0FBQztBQUFFQyxZQUFNLEVBQUVELE9BQVY7QUFBbUJHLGNBQVEsRUFBRTtBQUE3QixLQUFEO0FBUE4sR0FESyxDQUFQO0FBV0YsU0FBTyxDQUFDSixPQUFELEVBQVU7QUFBRUUsVUFBTSxFQUFFRCxPQUFWO0FBQW1CRyxZQUFRLEVBQUU7QUFBN0IsR0FBVixDQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsTUFBTUcsUUFBUSxHQUFJQyxRQUFELElBQXNCO0FBQ3JDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFFBQU1HLFFBQVEsR0FBR0MsK0NBQU8sQ0FBQ0MsTUFBUixDQUFlWCxNQUFNLElBQUlBLE1BQU0sQ0FBQ00sUUFBUCxLQUFvQkEsUUFBN0MsQ0FBakI7QUFDQSxTQUFPRyxRQUFRLENBQUNHLE1BQVQsQ0FBZ0IsQ0FBQ0MsR0FBRCxFQUFNZCxPQUFOLEtBQWtCO0FBQ3ZDLFFBQUljLEdBQUcsQ0FBQ1YsTUFBSixLQUFlLENBQW5CLEVBQXNCLE9BQU8sQ0FBQztBQUFFSCxZQUFNLEVBQUVELE9BQVY7QUFBbUJHLGNBQVEsRUFBRTtBQUE3QixLQUFELENBQVA7QUFDdEIsV0FBTyxDQUFDLEdBQUdXLEdBQUcsQ0FBQ1QsS0FBSixDQUFVLENBQVYsRUFBYVMsR0FBRyxDQUFDVixNQUFKLEdBQWEsQ0FBMUIsQ0FBSixFQUFrQyxHQUFHTixpQkFBaUIsQ0FBQ2dCLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDVixNQUFKLEdBQWEsQ0FBZCxDQUFKLEVBQXNCSixPQUF0QixDQUF0RCxDQUFQO0FBQ0QsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlELENBUEQ7O0FBU2VNLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvW2ZpbGVuYW1lXS4wYmVjMzU1MTRmM2Q0MTU3NjUxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vLi4vZGF0YS9hbmNob3JzLmpzb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cnVjdHVyZWRUb2NJdGVtIHtcbiAgYW5jaG9yOiB0eXBlb2YgYW5jaG9yc1swXTtcbiAgY2hpbGRyZW46IFN0cnVjdHVyZWRUb2NJdGVtW107XG59XG5cbmNvbnN0IHJlY3Vyc2VUb0J1aWxkVE9DID0gKHRvY0l0ZW06IFN0cnVjdHVyZWRUb2NJdGVtLCBjdXJyZW50OiB0eXBlb2YgYW5jaG9yc1swXSk6IFN0cnVjdHVyZWRUb2NJdGVtW10gPT4ge1xuICBpZiAodG9jSXRlbS5hbmNob3IuaG51bSA8IGN1cnJlbnQuaG51bSlcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBhbmNob3I6IHRvY0l0ZW0uYW5jaG9yLFxuICAgICAgICBjaGlsZHJlbjogdG9jSXRlbS5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgLi4udG9jSXRlbS5jaGlsZHJlbi5zbGljZSgwLCB0b2NJdGVtLmNoaWxkcmVuLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgICAuLi5yZWN1cnNlVG9CdWlsZFRPQyh0b2NJdGVtLmNoaWxkcmVuW3RvY0l0ZW0uY2hpbGRyZW4ubGVuZ3RoIC0gMV0sIGN1cnJlbnQpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW3sgYW5jaG9yOiBjdXJyZW50LCBjaGlsZHJlbjogW10gfV0sXG4gICAgICB9LFxuICAgIF0gYXMgU3RydWN0dXJlZFRvY0l0ZW1bXTtcbiAgcmV0dXJuIFt0b2NJdGVtLCB7IGFuY2hvcjogY3VycmVudCwgY2hpbGRyZW46IFtdIH1dIGFzIFN0cnVjdHVyZWRUb2NJdGVtW107XG59O1xuXG5jb25zdCBidWlsZFRPQyA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKGZpbGVuYW1lKTtcbiAgY29uc3QgZmlsdGVyZWQgPSBhbmNob3JzLmZpbHRlcihhbmNob3IgPT4gYW5jaG9yLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XG4gIHJldHVybiBmaWx0ZXJlZC5yZWR1Y2UoKHRvYywgY3VycmVudCkgPT4ge1xuICAgIGlmICh0b2MubGVuZ3RoID09PSAwKSByZXR1cm4gW3sgYW5jaG9yOiBjdXJyZW50LCBjaGlsZHJlbjogW10gfV07XG4gICAgcmV0dXJuIFsuLi50b2Muc2xpY2UoMCwgdG9jLmxlbmd0aCAtIDEpLCAuLi5yZWN1cnNlVG9CdWlsZFRPQyh0b2NbdG9jLmxlbmd0aCAtIDFdLCBjdXJyZW50KV07XG4gIH0sIFtdIGFzIFN0cnVjdHVyZWRUb2NJdGVtW10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRUT0M7XG4iXSwic291cmNlUm9vdCI6IiJ9