self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_next_srd_v3_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _anchors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../anchors.json */ "./src/anchors.json");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.module.scss */ "./src/components/App/App.module.scss");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\next\\srd-v3.5\\src\\components\\App\\App.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projects_next_srd_v3_5_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const documentGroups = _anchors_json__WEBPACK_IMPORTED_MODULE_5__.filter(a => a.level === 1).reduce((prev, current) => {
  const groupIndex = prev.findIndex(group => group.groupName === current.groupName);
  if (groupIndex === -1) return [...prev, {
    groupName: current.groupName,
    pages: [current]
  }];
  const pageIndex = prev[groupIndex].pages.findIndex(page => page.pageName === current.pageName);
  if (pageIndex !== -1) return prev;
  return [...prev.slice(0, groupIndex), _objectSpread(_objectSpread({}, prev[groupIndex]), {}, {
    pages: [...prev[groupIndex].pages, current]
  }), ...prev.slice(groupIndex + 1)];
}, []);

const App = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().app), 'layout'),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().appwrap), 'layout__wrap'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),
        children: "Revised (v.3.5) System Reference Document"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "The System Reference Document is a comprehensive toolbox consisting of rules, races, classes, feats, skills, various systems, spells, magic items, and monsters compatible with the d20 System version of Dungeons & Dragons and various other roleplaying games from Wizards of the Coast. You may consider this material Open Game Content under the Open Game License, and may use, modify, and distribute it."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Github:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://github.com/olimot/srd-v3.5",
          children: "https://github.com/olimot/srd-v3.5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 18
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), "Original Documents:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "http://www.wizards.com/default.asp?x=d20/article/srd35",
          children: "http://www.wizards.com/default.asp?x=d20/article/srd35"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), " (archive: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://archive.org/details/dnd35srd",
          children: "https://archive.org/details/dnd35srd"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 28
        }, undefined), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_App_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableOfContents),
        children: documentGroups.map(group => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: group.groupName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: group.pages.map(page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: `/docs/${page.basename}`,
                  prefetch: false,
                  children: page.pageName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 23
                }, undefined)
              }, page.basename, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, undefined)]
          }, group.groupName, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC50c3giXSwibmFtZXMiOlsiZG9jdW1lbnRHcm91cHMiLCJhbmNob3JzIiwiYSIsImxldmVsIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJncm91cEluZGV4IiwiZmluZEluZGV4IiwiZ3JvdXAiLCJncm91cE5hbWUiLCJwYWdlcyIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYWdlTmFtZSIsInNsaWNlIiwiQXBwIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIm1hcCIsImJhc2VuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsaURBQUEsQ0FDYkMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLEtBQUYsS0FBWSxDQURKLEVBRXBCQyxNQUZvQixDQUViLENBQUNDLElBQUQsRUFBT0MsT0FBUCxLQUFtQjtBQUN6QixRQUFNQyxVQUFVLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsU0FBTixLQUFvQkosT0FBTyxDQUFDSSxTQUFwRCxDQUFuQjtBQUNBLE1BQUlILFVBQVUsS0FBSyxDQUFDLENBQXBCLEVBQXVCLE9BQU8sQ0FBQyxHQUFHRixJQUFKLEVBQVU7QUFBRUssYUFBUyxFQUFFSixPQUFPLENBQUNJLFNBQXJCO0FBQWdDQyxTQUFLLEVBQUUsQ0FBQ0wsT0FBRDtBQUF2QyxHQUFWLENBQVA7QUFDdkIsUUFBTU0sU0FBUyxHQUFHUCxJQUFJLENBQUNFLFVBQUQsQ0FBSixDQUFpQkksS0FBakIsQ0FBdUJILFNBQXZCLENBQWlDSyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsUUFBTCxLQUFrQlIsT0FBTyxDQUFDUSxRQUFuRSxDQUFsQjtBQUNBLE1BQUlGLFNBQVMsS0FBSyxDQUFDLENBQW5CLEVBQXNCLE9BQU9QLElBQVA7QUFDdEIsU0FBTyxDQUNMLEdBQUdBLElBQUksQ0FBQ1UsS0FBTCxDQUFXLENBQVgsRUFBY1IsVUFBZCxDQURFLGtDQUVBRixJQUFJLENBQUNFLFVBQUQsQ0FGSjtBQUVrQkksU0FBSyxFQUFFLENBQUMsR0FBR04sSUFBSSxDQUFDRSxVQUFELENBQUosQ0FBaUJJLEtBQXJCLEVBQTRCTCxPQUE1QjtBQUZ6QixNQUdMLEdBQUdELElBQUksQ0FBQ1UsS0FBTCxDQUFXUixVQUFVLEdBQUcsQ0FBeEIsQ0FIRSxDQUFQO0FBS0QsQ0Fab0IsRUFZbEIsRUFaa0IsQ0FBdkI7O0FBY0EsTUFBTVMsR0FBRyxHQUFHLE1BQU07QUFDaEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLENBQUNDLDZEQUFELEVBQWEsUUFBYixDQUExQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxpREFBVSxDQUFDQyxpRUFBRCxFQUFpQixjQUFqQixDQUExQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVFFO0FBQUEsMkNBQ1M7QUFBRyxjQUFJLEVBQUMsb0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFQsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLHlCQUdzQixHQUh0QixlQUlFO0FBQUcsY0FBSSxFQUFDLHdEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRiw4QkFPbUI7QUFBRyxjQUFJLEVBQUMsc0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWlCRTtBQUFLLGlCQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGtCQUNHbEIsY0FBYyxDQUFDbUIsR0FBZixDQUFtQlYsS0FBSyxJQUFJO0FBQzNCLDhCQUNFO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0EsS0FBSyxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLHdCQUNHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWVEsR0FBWixDQUFnQk4sSUFBSSxpQkFDbkI7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUcsU0FBUUEsSUFBSSxDQUFDTyxRQUFTLEVBQW5DO0FBQXNDLDBCQUFRLEVBQUUsS0FBaEQ7QUFBQSw0QkFDR1AsSUFBSSxDQUFDQztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0QsSUFBSSxDQUFDTyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsYUFBVVgsS0FBSyxDQUFDQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBY0QsU0FmQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdDRCxDQXpDRDs7S0FBTU0sRztBQTJDTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZmJhNTU4OTYyN2IyMDcwNjNiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhbmNob3JzIGZyb20gJy4uLy4uL2FuY2hvcnMuanNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLm1vZHVsZS5zY3NzJztcblxuY29uc3QgZG9jdW1lbnRHcm91cHMgPSBhbmNob3JzXG4gIC5maWx0ZXIoYSA9PiBhLmxldmVsID09PSAxKVxuICAucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJbmRleCA9IHByZXYuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmdyb3VwTmFtZSA9PT0gY3VycmVudC5ncm91cE5hbWUpO1xuICAgIGlmIChncm91cEluZGV4ID09PSAtMSkgcmV0dXJuIFsuLi5wcmV2LCB7IGdyb3VwTmFtZTogY3VycmVudC5ncm91cE5hbWUsIHBhZ2VzOiBbY3VycmVudF0gfV07XG4gICAgY29uc3QgcGFnZUluZGV4ID0gcHJldltncm91cEluZGV4XS5wYWdlcy5maW5kSW5kZXgocGFnZSA9PiBwYWdlLnBhZ2VOYW1lID09PSBjdXJyZW50LnBhZ2VOYW1lKTtcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkgcmV0dXJuIHByZXY7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnByZXYuc2xpY2UoMCwgZ3JvdXBJbmRleCksXG4gICAgICB7IC4uLnByZXZbZ3JvdXBJbmRleF0sIHBhZ2VzOiBbLi4ucHJldltncm91cEluZGV4XS5wYWdlcywgY3VycmVudF0gfSxcbiAgICAgIC4uLnByZXYuc2xpY2UoZ3JvdXBJbmRleCArIDEpLFxuICAgIF07XG4gIH0sIFtdIGFzIHsgZ3JvdXBOYW1lOiBzdHJpbmc7IHBhZ2VzOiB0eXBlb2YgYW5jaG9ycyB9W10pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmFwcCwgJ2xheW91dCcpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hcHB3cmFwLCAnbGF5b3V0X193cmFwJyl9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5SZXZpc2VkICh2LjMuNSkgU3lzdGVtIFJlZmVyZW5jZSBEb2N1bWVudDwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBTeXN0ZW0gUmVmZXJlbmNlIERvY3VtZW50IGlzIGEgY29tcHJlaGVuc2l2ZSB0b29sYm94IGNvbnNpc3Rpbmcgb2YgcnVsZXMsIHJhY2VzLCBjbGFzc2VzLCBmZWF0cywgc2tpbGxzLFxuICAgICAgICAgIHZhcmlvdXMgc3lzdGVtcywgc3BlbGxzLCBtYWdpYyBpdGVtcywgYW5kIG1vbnN0ZXJzIGNvbXBhdGlibGUgd2l0aCB0aGUgZDIwIFN5c3RlbSB2ZXJzaW9uIG9mIER1bmdlb25zICZcbiAgICAgICAgICBEcmFnb25zIGFuZCB2YXJpb3VzIG90aGVyIHJvbGVwbGF5aW5nIGdhbWVzIGZyb20gV2l6YXJkcyBvZiB0aGUgQ29hc3QuIFlvdSBtYXkgY29uc2lkZXIgdGhpcyBtYXRlcmlhbCBPcGVuXG4gICAgICAgICAgR2FtZSBDb250ZW50IHVuZGVyIHRoZSBPcGVuIEdhbWUgTGljZW5zZSwgYW5kIG1heSB1c2UsIG1vZGlmeSwgYW5kIGRpc3RyaWJ1dGUgaXQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR2l0aHViOjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb2xpbW90L3NyZC12My41XCI+aHR0cHM6Ly9naXRodWIuY29tL29saW1vdC9zcmQtdjMuNTwvYT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBPcmlnaW5hbCBEb2N1bWVudHM6eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy53aXphcmRzLmNvbS9kZWZhdWx0LmFzcD94PWQyMC9hcnRpY2xlL3NyZDM1XCI+XG4gICAgICAgICAgICBodHRwOi8vd3d3LndpemFyZHMuY29tL2RlZmF1bHQuYXNwP3g9ZDIwL2FydGljbGUvc3JkMzVcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGJyIC8+IChhcmNoaXZlOiA8YSBocmVmPVwiaHR0cHM6Ly9hcmNoaXZlLm9yZy9kZXRhaWxzL2RuZDM1c3JkXCI+aHR0cHM6Ly9hcmNoaXZlLm9yZy9kZXRhaWxzL2RuZDM1c3JkPC9hPilcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlT2ZDb250ZW50c30+XG4gICAgICAgICAge2RvY3VtZW50R3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAuZ3JvdXBOYW1lfT5cbiAgICAgICAgICAgICAgICA8aDM+e2dyb3VwLmdyb3VwTmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtncm91cC5wYWdlcy5tYXAocGFnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2UuYmFzZW5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhZ2UuYmFzZW5hbWV9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLnBhZ2VOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=