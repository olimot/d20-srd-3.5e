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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoRm9ybS9TZWFyY2hGb3JtLnRzeCJdLCJuYW1lcyI6WyJzdWdnZXN0aW9uUG9vbCIsImFuY2hvcnMiLCJtYXAiLCJpdGVtIiwiaHJlZiIsInJlcGxhY2UiLCJTZWFyY2hGb3JtIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImlkeCIsInJvdXRlciIsInVzZVJvdXRlciIsInN1Z2dlc3Rpb25PblN0YXJ0Iiwic3VnZ2VzdGlvbk9uUmVzdCIsInNlYXJjaFN0YXJ0UmUiLCJSZWdFeHAiLCJzZWFyY2hSZXN0UmUiLCJyZWR1Y2UiLCJzc3MiLCJzcnMiLCJ0ZXN0IiwidGV4dENvbnRlbnQiLCJzdWdnZXN0aW9uIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImxlbmd0aCIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic3R5bGVzIiwic2VhcmNoRm9ybSIsInNlYXJjaEJveCIsImNsYXNzTmFtZXMiLCJhdXRvY21wbExheWVyIiwiYWN0aXZlIiwiYXV0b2NtcGxJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLGNBQWdDLEdBQUdDLCtDQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxvQ0FDcERBLElBRG9EO0FBRXZEQyxNQUFJLEVBQUcsU0FBUUQsSUFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkIsRUFBN0IsQ0FBaUM7QUFGTyxFQUFoQixDQUF6Qzs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUFBOztBQUN2QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsT0FBRyxFQUFFLENBQUM7QUFBbkIsR0FBRCxDQUFwQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFJLENBQUNDLGlCQUFELEVBQW9CQyxnQkFBcEIsSUFBd0MsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUE1Qzs7QUFDQSxNQUFJUixNQUFNLENBQUNHLEtBQVgsRUFBa0I7QUFDaEIsVUFBTU0sYUFBYSxHQUFHLElBQUlDLE1BQUosQ0FBWSxJQUFHVixNQUFNLENBQUNHLEtBQVAsQ0FBYUwsT0FBYixDQUFxQixzQkFBckIsRUFBNkMsTUFBN0MsQ0FBcUQsRUFBcEUsRUFBdUUsSUFBdkUsQ0FBdEI7QUFDQSxVQUFNYSxZQUFZLEdBQUcsSUFBSUQsTUFBSixDQUFXVixNQUFNLENBQUNHLEtBQVAsQ0FBYUwsT0FBYixDQUFxQixxQkFBckIsRUFBNEMsTUFBNUMsQ0FBWCxFQUFnRSxJQUFoRSxDQUFyQjtBQUNBLEtBQUNTLGlCQUFELEVBQW9CQyxnQkFBcEIsSUFBd0NmLGNBQWMsQ0FBQ21CLE1BQWYsQ0FDdEMsQ0FBQyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sQ0FBRCxFQUFhbEIsSUFBYixLQUFzQjtBQUNwQixVQUFJYSxhQUFhLENBQUNNLElBQWQsQ0FBbUJuQixJQUFJLENBQUNvQixXQUF4QixDQUFKLEVBQTBDLE9BQU8sQ0FBQyxDQUFDLEdBQUdILEdBQUosRUFBU2pCLElBQVQsQ0FBRCxFQUFpQmtCLEdBQWpCLENBQVA7QUFDMUMsVUFBSUgsWUFBWSxDQUFDSSxJQUFiLENBQWtCbkIsSUFBSSxDQUFDb0IsV0FBdkIsQ0FBSixFQUF5QyxPQUFPLENBQUNILEdBQUQsRUFBTSxDQUFDLEdBQUdDLEdBQUosRUFBU2xCLElBQVQsQ0FBTixDQUFQO0FBQ3pDLGFBQU8sQ0FBQ2lCLEdBQUQsRUFBTUMsR0FBTixDQUFQO0FBQ0QsS0FMcUMsRUFNdEMsQ0FBQyxFQUFELEVBQUssRUFBTCxDQU5zQyxDQUF4QztBQVFEOztBQUNELFFBQU1HLFVBQVUsR0FBRyxDQUFDLEdBQUdWLGlCQUFKLEVBQXVCLEdBQUdDLGdCQUExQixDQUFuQjtBQUVBLFFBQU1VLEdBQUcsR0FBR0Msb0RBQU0sQ0FBeUIsSUFBekIsQ0FBbEI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUYsR0FBRyxDQUFDRyxPQUFKLElBQWVKLFVBQVUsQ0FBQ0ssTUFBOUIsRUFBc0M7QUFDcEMsWUFBTUMsT0FBTyxHQUFJQyxDQUFELElBQW1CO0FBQ2pDLFlBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxNQUFQLEVBQWU7QUFDZixZQUFJQyxNQUFNLEdBQUlGLENBQUMsQ0FBQ0MsTUFBSCxDQUFzQkUsYUFBbkM7O0FBQ0EsZUFBT0QsTUFBUCxFQUFlO0FBQ2IsY0FBSUEsTUFBTSxLQUFLUixHQUFHLENBQUNHLE9BQW5CLEVBQTRCO0FBQzVCSyxnQkFBTSxHQUFHQSxNQUFNLENBQUNDLGFBQWhCO0FBQ0Q7O0FBQ0QxQixpQkFBUyxDQUFDO0FBQUVFLGVBQUssRUFBRSxFQUFUO0FBQWFDLGFBQUcsRUFBRSxDQUFDO0FBQW5CLFNBQUQsQ0FBVDtBQUNELE9BUkQ7O0FBU0F3QixZQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDTixPQUFqQztBQUNBLGFBQU8sTUFBTUssTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ1AsT0FBcEMsQ0FBYjtBQUNEOztBQUNELFdBQU8sTUFBTSxDQUFFLENBQWY7QUFDRCxHQWZRLEVBZU4sQ0FBQ04sVUFBVSxDQUFDSyxNQUFaLENBZk0sQ0FBVDtBQWdCQSxzQkFDRTtBQUNFLFVBQU0sRUFBQyxLQURUO0FBRUUsVUFBTSxFQUFDLEVBRlQ7QUFHRSxZQUFRLEVBQUVFLENBQUMsSUFBSTtBQUNiQSxPQUFDLENBQUNPLGNBQUY7QUFDQSxVQUFJZCxVQUFVLENBQUNLLE1BQWYsRUFBdUJqQixNQUFNLENBQUMyQixJQUFQLENBQVlmLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY3BCLElBQTFCO0FBQ3ZCSSxlQUFTLENBQUM7QUFBRUUsYUFBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBRyxFQUFFLENBQUM7QUFBbkIsT0FBRCxDQUFUO0FBQ0QsS0FQSDtBQVFFLE9BQUcsRUFBRWMsR0FSUDtBQUFBLDJCQVVFO0FBQUcsZUFBUyxFQUFFZSw4REFBTSxDQUFDQyxVQUFyQjtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsU0FBeEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxxQkFBVyxFQUFDLGlCQUhkO0FBSUUsZUFBSyxFQUFFbkMsTUFBTSxDQUFDRyxLQUpoQjtBQUtFLGtCQUFRLEVBQUVxQixDQUFDLElBQUl2QixTQUFTLENBQUM7QUFBRUUsaUJBQUssRUFBRXFCLENBQUMsQ0FBQ0MsTUFBRixDQUFTdEIsS0FBbEI7QUFBeUJDLGVBQUcsRUFBRSxDQUFDO0FBQS9CLFdBQUQ7QUFMMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQU0sbUJBQVMsRUFBRWdDLGlEQUFVLENBQUNILDhEQUFNLENBQUNJLGFBQVIsRUFBdUJwQixVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FBcEIsSUFBeUJXLDhEQUFNLENBQUNLLE1BQXZELENBQTNCO0FBQUEsb0JBQ0dyQixVQUFVLENBQUN0QixHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPUSxHQUFQLGtCQUNkLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRVIsSUFBSSxDQUFDQyxJQUFqQjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBRXVDLGlEQUFVLENBQUNILDhEQUFNLENBQUNNLFlBQVIsRUFBc0JuQyxHQUFHLEtBQUssQ0FBUixJQUFhNkIsOERBQU0sQ0FBQ0ssTUFBMUMsQ0FEdkI7QUFFRSxxQkFBTyxFQUFFLE1BQU1yQyxTQUFTLENBQUM7QUFBRUUscUJBQUssRUFBRSxFQUFUO0FBQWFDLG1CQUFHLEVBQUUsQ0FBQztBQUFuQixlQUFELENBRjFCO0FBQUEsd0JBSUdSLElBQUksQ0FBQ29CO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQTRCcEIsSUFBSSxDQUFDQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFzQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUNELENBekVEOztHQUFNRSxVO1VBRVdPLHFEOzs7S0FGWFAsVTtBQTJFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZlNGRiMjJiNWMzZWE0ZGM4OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsanN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFuY2hvcnMgZnJvbSAnLi4vLi4vLi4vZGF0YS9hbmNob3JzLmpzb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEZvcm0ubW9kdWxlLnNjc3MnO1xuXG50eXBlIFN1Z2dlc3Rpb25JdGVtID0geyBpZDogc3RyaW5nOyBobnVtOiBudW1iZXI7IGhyZWY6IHN0cmluZzsgdGV4dENvbnRlbnQ6IHN0cmluZyB9O1xuXG5jb25zdCBzdWdnZXN0aW9uUG9vbDogU3VnZ2VzdGlvbkl0ZW1bXSA9IGFuY2hvcnMubWFwKGl0ZW0gPT4gKHtcbiAgLi4uaXRlbSxcbiAgaHJlZjogYC9kb2NzLyR7aXRlbS5ocmVmLnJlcGxhY2UoL1xcLmh0bWwvZywgJycpfWAsXG59KSk7XG5cbmNvbnN0IFNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh7IHZhbHVlOiAnJywgaWR4OiAtMSB9KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgbGV0IFtzdWdnZXN0aW9uT25TdGFydCwgc3VnZ2VzdGlvbk9uUmVzdF0gPSBbW10sIFtdXSBhcyBTdWdnZXN0aW9uSXRlbVtdW107XG4gIGlmIChzZWFyY2gudmFsdWUpIHtcbiAgICBjb25zdCBzZWFyY2hTdGFydFJlID0gbmV3IFJlZ0V4cChgXiR7c2VhcmNoLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXX0vZywgJ1xcXFwkJicpfWAsICdnaScpO1xuICAgIGNvbnN0IHNlYXJjaFJlc3RSZSA9IG5ldyBSZWdFeHAoc2VhcmNoLnZhbHVlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyksICdnaScpO1xuICAgIFtzdWdnZXN0aW9uT25TdGFydCwgc3VnZ2VzdGlvbk9uUmVzdF0gPSBzdWdnZXN0aW9uUG9vbC5yZWR1Y2UoXG4gICAgICAoW3Nzcywgc3JzXSwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VhcmNoU3RhcnRSZS50ZXN0KGl0ZW0udGV4dENvbnRlbnQpKSByZXR1cm4gW1suLi5zc3MsIGl0ZW1dLCBzcnNdO1xuICAgICAgICBpZiAoc2VhcmNoUmVzdFJlLnRlc3QoaXRlbS50ZXh0Q29udGVudCkpIHJldHVybiBbc3NzLCBbLi4uc3JzLCBpdGVtXV07XG4gICAgICAgIHJldHVybiBbc3NzLCBzcnNdO1xuICAgICAgfSxcbiAgICAgIFtbXSwgW11dIGFzIFN1Z2dlc3Rpb25JdGVtW11bXSxcbiAgICApO1xuICB9XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBbLi4uc3VnZ2VzdGlvbk9uU3RhcnQsIC4uLnN1Z2dlc3Rpb25PblJlc3RdO1xuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgc3VnZ2VzdGlvbi5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIWUudGFyZ2V0KSByZXR1cm47XG4gICAgICAgIGxldCBwYXJlbnQgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgIGlmIChwYXJlbnQgPT09IHJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2VhcmNoKHsgdmFsdWU6ICcnLCBpZHg6IC0xIH0pO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtzdWdnZXN0aW9uLmxlbmd0aF0pO1xuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBtZXRob2Q9XCJHRVRcIlxuICAgICAgYWN0aW9uPVwiXCJcbiAgICAgIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc3VnZ2VzdGlvbi5sZW5ndGgpIHJvdXRlci5wdXNoKHN1Z2dlc3Rpb25bMF0uaHJlZik7XG4gICAgICAgIHNldFNlYXJjaCh7IHZhbHVlOiAnJywgaWR4OiAtMSB9KTtcbiAgICAgIH19XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQm94fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZWFkaW5nc1wiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLCBpZHg6IC0xIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hdXRvY21wbExheWVyLCBzdWdnZXN0aW9uLmxlbmd0aCA+IDAgJiYgc3R5bGVzLmFjdGl2ZSl9PlxuICAgICAgICAgICAge3N1Z2dlc3Rpb24ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfSBrZXk9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYXV0b2NtcGxJdGVtLCBpZHggPT09IDAgJiYgc3R5bGVzLmFjdGl2ZSl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goeyB2YWx1ZTogJycsIGlkeDogLTEgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dENvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==