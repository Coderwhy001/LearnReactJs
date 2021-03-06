webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/useStats.js":
/*!***************************!*\
  !*** ./utils/useStats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 //共享状态的useState 方法 rect hooks

function useStats(url) {
  // console.log(url);
  // from input 双向绑定新写法 
  // react 很多写法都淘汰了
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1]; // 加载ajax loading


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      error = _useState3[0],
      setError = _useState3[1]; // 封装state 的处理
  // react hooks 还有什么函数，可以在订阅了useState的
  // 组件 挂载上去后， 立即执行？ mounted() 
  // useEffect 相当于生命周期函数， 
  // state + lifecycle  -> react hooks  重要性
  // 独立到一个模块


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //  console.log('mounted'); 
    function fectchData() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fectchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (res) {
                return res.json();
              })["catch"](function (err) {
                setError(err);
              }));

            case 3:
              data = _context.sent;
              console.log(data);
              setStats(data);
              setLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fectchData();
  }, [url]);
  return {
    stats: stats,
    loading: loading,
    error: error
  };
}

/***/ })

})
//# sourceMappingURL=index.js.64fa7a6ff333611e23ec.hot-update.js.map