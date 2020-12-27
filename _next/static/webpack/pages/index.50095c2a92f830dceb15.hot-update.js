webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchForm/SearchForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/SearchForm/SearchForm.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_anchors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/anchors.json */ "./data/anchors.json");
var _data_anchors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/anchors.json */ "./data/anchors.json", 1);
/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchForm.module.scss */ "./src/components/SearchForm/SearchForm.module.scss");
/* harmony import */ var _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "D:\\Projects\\ts\\srd-v3.5\\src\\components\\SearchForm\\SearchForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */






const suggestionPool = _data_anchors_json__WEBPACK_IMPORTED_MODULE_6__.map(item => _objectSpread(_objectSpread({}, item), {}, {
  href: `/docs/${item.href.replace(/\.html/g, '')}`
}));

const SearchForm = () => {
  _s();

  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    value: '',
    idx: -1
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  let [suggestionOnStart, suggestionOnRest] = [[], []];

  if (search.value) {
    const searchStartRe = new RegExp(`^${search.value.replace(/[.*+?^${}()|[\]\\]}/g, '\\$&')}`, 'gi');
    const searchRestRe = new RegExp(search.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    [suggestionOnStart, suggestionOnRest] = suggestionPool.reduce(([sss, srs], item) => {
      if (searchStartRe.test(item.textContent)) return [[...sss, item], srs];
      if (searchRestRe.test(item.textContent)) return [sss, [...srs, item]];
      return [sss, srs];
    }, [[], []]);
  }

  const suggestion = [...suggestionOnStart, ...suggestionOnRest];
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (ref.current && suggestion.length) {
      const onclick = e => {
        if (!e.target) return;
        let parent = e.target.parentElement;

        while (parent) {
          if (parent === ref.current) return;
          parent = parent.parentElement;
        }

        setSearch({
          value: '',
          idx: -1
        });
      };

      window.addEventListener('click', onclick);
      return () => window.removeEventListener('click', onclick);
    }

    return () => {};
  }, [suggestion.length]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
    method: "GET",
    action: "",
    onSubmit: e => {
      e.preventDefault();
      if (suggestion.length) router.push(suggestion[0].href);
      setSearch({
        value: '',
        idx: -1
      });
    },
    ref: ref,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.searchForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.searchBox,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "search",
          name: "search",
          placeholder: "Search",
          value: search.value,
          onChange: e => setSearch({
            value: e.target.value,
            idx: -1
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocmplLayer, suggestion.length > 0 && _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active),
          children: suggestion.map((item, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: item.href,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocmplItem, idx === 0 && _SearchForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active),
              onClick: () => setSearch({
                value: '',
                idx: -1
              }),
              children: item.textContent
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)
          }, item.href, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Go"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

_s(SearchForm, "maNjvl38chLAUu79IUi+o0IQzkk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = SearchForm;
/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

var _c;

$RefreshReg$(_c, "SearchForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLnRzeCJdLCJuYW1lcyI6WyJzdWdnZXN0aW9uUG9vbCIsImFuY2hvcnMiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInJlcGxhY2UiLCJTZWFyY2hGb3JtIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImlkeCIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Z2dlc3Rpb25PblN0YXJ0Iiwic3VnZ2VzdGlvbk9uUmVzdCIsInNlYXJjaFN0YXJ0UmUiLCJSZWdFeHAiLCJzZWFyY2hSZXN0UmUiLCJyZWR1Y2UiLCJzc3MiLCJzcnMiLCJ0ZXN0IiwidGV4dENvbnRlbnQiLCJzdWdnZXN0aW9uIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImxlbmd0aCIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic3R5bGVzIiwic2VhcmNoRm9ybSIsInNlYXJjaEJveCIsImNsYXNzTmFtZXMiLCJhdXRvY21wbExheWVyIiwiYWN0aXZlIiwiYXV0b2NtcGxJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLGNBQWdDLEdBQUdDLCtDQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxvQ0FDcERBLElBRG9EO0FBRXZEQyxNQUFJLEVBQUcsU0FBUUQsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0IsQ0FBaUM7QUFGTyxFQUFoQixDQUF6Qzs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUFBOztB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RUFBRSxDQUFDO0FBQW5CLGVBQUQsQ0FGMUI7QUFBQSx3QkFJR1IsSUFBSSxDQUFDb0I7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBNEJwQixJQUFJLENBQUNDLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXNCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQ0QsQ0F6RUQ7O0dBQU1FLFU7VUFFV08scUQ7OztLQUZYUCxVO0FBMkVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDA5NWMyYTkyZjgzMGRjZWIxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyxqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYW5jaG9ycyBmcm9tICcuLi8uLi8uLi9kYXRhL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoRm9ybS5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgU3VnZ2VzdGlvbkl0ZW0gPSB7IGlkOiBzdHJpbmc7IGhudW06IG51bWJlcjsgaHJlZjogc3RyaW5nOyB0ZXh0Q29udGVudDogc3RyaW5nIH07XG5cbmNvbnN0IHN1Z2dlc3Rpb25Qb29sOiBTdWdnZXN0aW9uSXRlbVtdID0gYW5jaG9ycy5tYXAoaXRlbSA9PiAoe1xuICAuLi5pdGVtLFxuICBocmVmOiBgL2RvY3MvJHtpdGVtLmhyZWYucmVwbGFjZSgvXFwuaHRtbC9nLCAnJyl9YCxcbn0pKTtcblxuY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHsgdmFsdWU6ICcnLCBpZHg6IC0xIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBsZXQgW3N1Z2dlc3Rpb25PblN0YXJ0LCBzdWdnZXN0aW9uT25SZXN0XSA9IFtbXSwgW11dIGFzIFN1Z2dlc3Rpb25JdGVtW11bXTtcbiAgaWYgKHNlYXJjaC52YWx1ZSkge1xuICAgIGNvbnN0IHNlYXJjaFN0YXJ0UmUgPSBuZXcgUmVnRXhwKGBeJHtzZWFyY2gudmFsdWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdfS9nLCAnXFxcXCQmJyl9YCwgJ2dpJyk7XG4gICAgY29uc3Qgc2VhcmNoUmVzdFJlID0gbmV3IFJlZ0V4cChzZWFyY2gudmFsdWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSwgJ2dpJyk7XG4gICAgW3N1Z2dlc3Rpb25PblN0YXJ0LCBzdWdnZXN0aW9uT25SZXN0XSA9IHN1Z2dlc3Rpb25Qb29sLnJlZHVjZShcbiAgICAgIChbc3NzLCBzcnNdLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZWFyY2hTdGFydFJlLnRlc3QoaXRlbS50ZXh0Q29udGVudCkpIHJldHVybiBbWy4uLnNzcywgaXRlbV0sIHNyc107XG4gICAgICAgIGlmIChzZWFyY2hSZXN0UmUudGVzdChpdGVtLnRleHRDb250ZW50KSkgcmV0dXJuIFtzc3MsIFsuLi5zcnMsIGl0ZW1dXTtcbiAgICAgICAgcmV0dXJuIFtzc3MsIHNyc107XG4gICAgICB9LFxuICAgICAgW1tdLCBbXV0gYXMgU3VnZ2VzdGlvbkl0ZW1bXVtdLFxuICAgICk7XG4gIH1cbiAgY29uc3Qgc3VnZ2VzdGlvbiA9IFsuLi5zdWdnZXN0aW9uT25TdGFydCwgLi4uc3VnZ2VzdGlvbk9uUmVzdF07XG5cbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCAmJiBzdWdnZXN0aW9uLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQpIHJldHVybjtcbiAgICAgICAgbGV0IHBhcmVudCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgaWYgKHBhcmVudCA9PT0gcmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRTZWFyY2goeyB2YWx1ZTogJycsIGlkeDogLTEgfSk7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25jbGljayk7XG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25jbGljayk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW3N1Z2dlc3Rpb24ubGVuZ3RoXSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG1ldGhvZD1cIkdFVFwiXG4gICAgICBhY3Rpb249XCJcIlxuICAgICAgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzdWdnZXN0aW9uLmxlbmd0aCkgcm91dGVyLnB1c2goc3VnZ2VzdGlvblswXS5ocmVmKTtcbiAgICAgICAgc2V0U2VhcmNoKHsgdmFsdWU6ICcnLCBpZHg6IC0xIH0pO1xuICAgICAgfX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEZvcm19PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3h9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2goeyB2YWx1ZTogZS50YXJnZXQudmFsdWUsIGlkeDogLTEgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmF1dG9jbXBsTGF5ZXIsIHN1Z2dlc3Rpb24ubGVuZ3RoID4gMCAmJiBzdHlsZXMuYWN0aXZlKX0+XG4gICAgICAgICAgICB7c3VnZ2VzdGlvbi5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9IGtleT17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hdXRvY21wbEl0ZW0sIGlkeCA9PT0gMCAmJiBzdHlsZXMuYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaCh7IHZhbHVlOiAnJywgaWR4OiAtMSB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0Q29udGVudH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HbzwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9