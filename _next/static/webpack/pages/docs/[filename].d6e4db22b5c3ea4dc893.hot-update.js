webpackHotUpdate_N_E("pages/docs/[filename]",{

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
          placeholder: "Search headings",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLnRzeCJdLCJuYW1lcyI6WyJzdWdnZXN0aW9uUG9vbCIsImFuY2hvcnMiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInJlcGxhY2UiLCJTZWFyY2hGb3JtIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImlkeCIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Z2dlc3Rpb25PblN0YXJ0Iiwic3VnZ2VzdGlvbk9uUmVzdCIsInNlYXJjaFN0YXJ0UmUiLCJSZWdFeHAiLCJzZWFyY2hSZXN0UmUiLCJyZWR1Y2UiLCJzc3MiLCJzcnMiLCJ0ZXN0IiwidGV4dENvbnRlbnQiLCJzdWdnZXN0aW9uIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImxlbmd0aCIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic3R5bGVzIiwic2VhcmNoRm9ybSIsInNlYXJjaEJveCIsImNsYXNzTmFtZXMiLCJhdXRvY21wbExheWVyIiwiYWN0aXZlIiwiYXV0b2NtcGxJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLGNBQWdDLEdBQUdDLCtDQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxvQ0FDcERBLElBRG9EO0FBRXZEQyxNQUFJLEVBQUcsU0FBUUQsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0IsQ0FBaUM7QUFGTyxFQUFoQixDQUF6Qzs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUFBOztB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LEVBQUUsQ0FBQztBQUFuQixlQUFELENBRjFCO0FBQUEsd0JBSUdSLElBQUksQ0FBQ29CO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQTRCcEIsSUFBSSxDQUFDQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFzQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUNELENBekVEOztHQUFNRSxVO1VBRVdPLHFEOzs7S0FGWFAsVTtBQTJFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9bZmlsZW5hbWVdLmQ2ZTRkYjIyYjVjM2VhNGRjODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzLGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uLy4uL2RhdGEvYW5jaG9ycy5qc29uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hGb3JtLm1vZHVsZS5zY3NzJztcblxudHlwZSBTdWdnZXN0aW9uSXRlbSA9IHsgaWQ6IHN0cmluZzsgaG51bTogbnVtYmVyOyBocmVmOiBzdHJpbmc7IHRleHRDb250ZW50OiBzdHJpbmcgfTtcblxuY29uc3Qgc3VnZ2VzdGlvblBvb2w6IFN1Z2dlc3Rpb25JdGVtW10gPSBhbmNob3JzLm1hcChpdGVtID0+ICh7XG4gIC4uLml0ZW0sXG4gIGhyZWY6IGAvZG9jcy8ke2l0ZW0uaHJlZi5yZXBsYWNlKC9cXC5odG1sL2csICcnKX1gLFxufSkpO1xuXG5jb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoeyB2YWx1ZTogJycsIGlkeDogLTEgfSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGxldCBbc3VnZ2VzdGlvbk9uU3RhcnQsIHN1Z2dlc3Rpb25PblJlc3RdID0gW1tdLCBbXV0gYXMgU3VnZ2VzdGlvbkl0ZW1bXVtdO1xuICBpZiAoc2VhcmNoLnZhbHVlKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhcnRSZSA9IG5ldyBSZWdFeHAoYF4ke3NlYXJjaC52YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF19L2csICdcXFxcJCYnKX1gLCAnZ2knKTtcbiAgICBjb25zdCBzZWFyY2hSZXN0UmUgPSBuZXcgUmVnRXhwKHNlYXJjaC52YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpLCAnZ2knKTtcbiAgICBbc3VnZ2VzdGlvbk9uU3RhcnQsIHN1Z2dlc3Rpb25PblJlc3RdID0gc3VnZ2VzdGlvblBvb2wucmVkdWNlKFxuICAgICAgKFtzc3MsIHNyc10sIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHNlYXJjaFN0YXJ0UmUudGVzdChpdGVtLnRleHRDb250ZW50KSkgcmV0dXJuIFtbLi4uc3NzLCBpdGVtXSwgc3JzXTtcbiAgICAgICAgaWYgKHNlYXJjaFJlc3RSZS50ZXN0KGl0ZW0udGV4dENvbnRlbnQpKSByZXR1cm4gW3NzcywgWy4uLnNycywgaXRlbV1dO1xuICAgICAgICByZXR1cm4gW3Nzcywgc3JzXTtcbiAgICAgIH0sXG4gICAgICBbW10sIFtdXSBhcyBTdWdnZXN0aW9uSXRlbVtdW10sXG4gICAgKTtcbiAgfVxuICBjb25zdCBzdWdnZXN0aW9uID0gWy4uLnN1Z2dlc3Rpb25PblN0YXJ0LCAuLi5zdWdnZXN0aW9uT25SZXN0XTtcblxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlZi5jdXJyZW50ICYmIHN1Z2dlc3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldCkgcmV0dXJuO1xuICAgICAgICBsZXQgcGFyZW50ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50ID09PSByZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHNldFNlYXJjaCh7IHZhbHVlOiAnJywgaWR4OiAtMSB9KTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbc3VnZ2VzdGlvbi5sZW5ndGhdKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgbWV0aG9kPVwiR0VUXCJcbiAgICAgIGFjdGlvbj1cIlwiXG4gICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHN1Z2dlc3Rpb24ubGVuZ3RoKSByb3V0ZXIucHVzaChzdWdnZXN0aW9uWzBdLmhyZWYpO1xuICAgICAgICBzZXRTZWFyY2goeyB2YWx1ZTogJycsIGlkeDogLTEgfSk7XG4gICAgICB9fVxuICAgICAgcmVmPXtyZWZ9XG4gICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoRm9ybX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVhZGluZ3NcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaC52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaCh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSwgaWR4OiAtMSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYXV0b2NtcGxMYXllciwgc3VnZ2VzdGlvbi5sZW5ndGggPiAwICYmIHN0eWxlcy5hY3RpdmUpfT5cbiAgICAgICAgICAgIHtzdWdnZXN0aW9uLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0ga2V5PXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmF1dG9jbXBsSXRlbSwgaWR4ID09PSAwICYmIHN0eWxlcy5hY3RpdmUpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoKHsgdmFsdWU6ICcnLCBpZHg6IC0xIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHRDb250ZW50fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICA8L3A+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=