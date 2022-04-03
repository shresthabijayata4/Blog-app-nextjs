webpackHotUpdate_N_E("pages/blogs/[blogid]",{

/***/ "./pages/blogs/[blogid].js":
/*!*********************************!*\
  !*** ./pages/blogs/[blogid].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blogpage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/home/bijayata/Downloads/nextjs-firebase-blog-app/pages/blogs/[blogid].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction blogpage(_ref) {\n  _s();\n\n  var _this = this;\n\n  var blog = _ref.blog,\n      user = _ref.user,\n      allComments = _ref.allComments;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      myComment = _useState[0],\n      setMyComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allComments),\n      allCommentsBlog = _useState2[0],\n      setAllComments = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var blogid = router.query.blogid;\n\n  var makeCommet = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var commentQuery;\n      return _home_bijayata_Downloads_nextjs_firebase_blog_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _firebase__WEBPACK_IMPORTED_MODULE_5__[\"db\"].collection('blogs').doc(blogid).collection('comments').add({\n                text: myComment,\n                name: user.displayName\n              });\n\n            case 2:\n              _context.next = 4;\n              return _firebase__WEBPACK_IMPORTED_MODULE_5__[\"db\"].collection('blogs').doc(blogid).collection('comments').get();\n\n            case 4:\n              commentQuery = _context.sent;\n              setAllComments(commentQuery.docs.map(function (docSnap) {\n                return docSnap.data();\n              }));\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function makeCommet() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3461060680\" + \" \" + \"container center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"jsx-3461060680\",\n      children: blog.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      className: \"jsx-3461060680\",\n      children: [\"Created On - \", new Date(blog.createdAt).toDateString()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: blog.imageUrl,\n      alt: blog.title,\n      className: \"jsx-3461060680\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"jsx-3461060680\",\n      children: blog.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3461060680\" + \" \" + \"input-field\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          placeholder: \"add a comment\",\n          value: myComment,\n          onChange: function onChange(e) {\n            return setMyComment(e.target.value);\n          },\n          className: \"jsx-3461060680\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return makeCommet();\n        },\n        className: \"jsx-3461060680\" + \" \" + \"btn #0d47a1 blue darken-4\",\n        children: \"Make comment\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"jsx-3461060680\",\n      children: \"please login to make comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n      className: \"jsx-3461060680\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3461060680\" + \" \" + \"left-align\",\n      children: allCommentsBlog.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n          className: \"jsx-3461060680\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"jsx-3461060680\",\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 48\n          }, _this), \" \", item.text]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 28\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"3461060680\",\n      children: \"span{font-weight:500;}body{color:orange;}img{width:100%;max-width:500px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpamF5YXRhL0Rvd25sb2Fkcy9uZXh0anMtZmlyZWJhc2UtYmxvZy1hcHAvcGFnZXMvYmxvZ3MvW2Jsb2dpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RpQixBQUdvQyxBQUlwQixBQUVlLFdBQ0ssRUFIbkIsR0FIQSxXQU9BIiwiZmlsZSI6Ii9ob21lL2JpamF5YXRhL0Rvd25sb2Fkcy9uZXh0anMtZmlyZWJhc2UtYmxvZy1hcHAvcGFnZXMvYmxvZ3MvW2Jsb2dpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7ZGJ9IGZyb20gJy4uLy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ3BhZ2Uoe2Jsb2csdXNlcixhbGxDb21tZW50c30pIHtcblxuICAgICBjb25zdCBbbXlDb21tZW50LHNldE15Q29tbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICAgY29uc3QgW2FsbENvbW1lbnRzQmxvZyxzZXRBbGxDb21tZW50c10gPSB1c2VTdGF0ZShhbGxDb21tZW50cylcbiAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgY29uc3QgeyBibG9naWQgfSA9IHJvdXRlci5xdWVyeVxuICAgICBjb25zdCBtYWtlQ29tbWV0ID0gYXN5bmMgKCk9PntcbiAgICAgICBcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5jb2xsZWN0aW9uKCdjb21tZW50cycpLmFkZCh7XG4gICAgICAgICAgICAgdGV4dDpteUNvbW1lbnQsXG4gICAgICAgICAgICAgbmFtZTp1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICB9KVxuICAgICAgICBjb25zdCBjb21tZW50UXVlcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnRzJykuZ2V0KClcbiAgICAgICAgc2V0QWxsQ29tbWVudHMoY29tbWVudFF1ZXJ5LmRvY3MubWFwKGRvY1NuYXA9PmRvY1NuYXAuZGF0YSgpKSlcblxuICAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDI+e2Jsb2cudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxoNT5DcmVhdGVkIE9uIC0ge25ldyBEYXRlKGJsb2cuY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX08L2g1PlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1hZ2VVcmx9IGFsdD17YmxvZy50aXRsZX0gLz5cbiAgICAgICAgICAgIDxwPntibG9nLmJvZHl9PC9wPlxuXG4gICAgICAgICAgICB7dXNlcj9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgYSBjb21tZW50XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e215Q29tbWVudH0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TXlDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAjMGQ0N2ExIGJsdWUgZGFya2VuLTRcIiBvbkNsaWNrPXsoKT0+bWFrZUNvbW1ldCgpfT5NYWtlIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgOjxoMz5wbGVhc2UgbG9naW4gdG8gbWFrZSBjb21tZW50czwvaDM+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduXCI+XG5cbiAgICAgICAgICAgICAgICB7YWxsQ29tbWVudHNCbG9nLm1hcChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDYga2V5PXtpdGVtLm5hbWV9PjxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPiB7aXRlbS50ZXh0fTwvaDY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOm9yYW5nZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e2Jsb2dpZH19KSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9ICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmdldCgpXG4gICAgIGNvbnN0IGFsbENvbW1ldHNTbmFwID0gYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5jb2xsZWN0aW9uKCdjb21tZW50cycpLmdldCgpXG5cbiAgICBjb25zdCBhbGxDb21tZW50cyA9ICBhbGxDb21tZXRzU25hcC5kb2NzLm1hcChjb21Eb2NTbmFwPT5jb21Eb2NTbmFwLmRhdGEoKSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBibG9nOntcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LmRhdGEoKSxcbiAgICAgICAgICAgICAgY3JlYXRlZEF0OnJlc3VsdC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsbENvbW1lbnRzXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG5cblxuXG4iXX0= */\\n/*@ sourceURL=/home/bijayata/Downloads/nextjs-firebase-blog-app/pages/blogs/[blogid].js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(blogpage, \"vhHpJmdZ5g/cIHh60SVFpZxEsTc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW2Jsb2dpZF0uanM/ZDM1OCJdLCJuYW1lcyI6WyJibG9ncGFnZSIsImJsb2ciLCJ1c2VyIiwiYWxsQ29tbWVudHMiLCJ1c2VTdGF0ZSIsIm15Q29tbWVudCIsInNldE15Q29tbWVudCIsImFsbENvbW1lbnRzQmxvZyIsInNldEFsbENvbW1lbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmxvZ2lkIiwicXVlcnkiLCJtYWtlQ29tbWV0IiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiYWRkIiwidGV4dCIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImdldCIsImNvbW1lbnRRdWVyeSIsImRvY3MiLCJtYXAiLCJkb2NTbmFwIiwiZGF0YSIsInRpdGxlIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvRGF0ZVN0cmluZyIsImltYWdlVXJsIiwiYm9keSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxRQUFULE9BQTJDO0FBQUE7O0FBQUE7O0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQUEsa0JBRXBCQyxzREFBUSxDQUFDLEVBQUQsQ0FGWTtBQUFBLE1BRTlDQyxTQUY4QztBQUFBLE1BRXBDQyxZQUZvQzs7QUFBQSxtQkFHWkYsc0RBQVEsQ0FBQ0QsV0FBRCxDQUhJO0FBQUEsTUFHOUNJLGVBSDhDO0FBQUEsTUFHOUJDLGNBSDhCOztBQUlyRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSnFELE1BSzdDQyxNQUw2QyxHQUtsQ0YsTUFBTSxDQUFDRyxLQUwyQixDQUs3Q0QsTUFMNkM7O0FBTXJELE1BQU1FLFVBQVU7QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFB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Q29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7ZGJ9IGZyb20gJy4uLy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ3BhZ2Uoe2Jsb2csdXNlcixhbGxDb21tZW50c30pIHtcblxuICAgICBjb25zdCBbbXlDb21tZW50LHNldE15Q29tbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICAgY29uc3QgW2FsbENvbW1lbnRzQmxvZyxzZXRBbGxDb21tZW50c10gPSB1c2VTdGF0ZShhbGxDb21tZW50cylcbiAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgY29uc3QgeyBibG9naWQgfSA9IHJvdXRlci5xdWVyeVxuICAgICBjb25zdCBtYWtlQ29tbWV0ID0gYXN5bmMgKCk9PntcbiAgICAgICBcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5jb2xsZWN0aW9uKCdjb21tZW50cycpLmFkZCh7XG4gICAgICAgICAgICAgdGV4dDpteUNvbW1lbnQsXG4gICAgICAgICAgICAgbmFtZTp1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICB9KVxuICAgICAgICBjb25zdCBjb21tZW50UXVlcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnRzJykuZ2V0KClcbiAgICAgICAgc2V0QWxsQ29tbWVudHMoY29tbWVudFF1ZXJ5LmRvY3MubWFwKGRvY1NuYXA9PmRvY1NuYXAuZGF0YSgpKSlcblxuICAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDI+e2Jsb2cudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxoNT5DcmVhdGVkIE9uIC0ge25ldyBEYXRlKGJsb2cuY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX08L2g1PlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1hZ2VVcmx9IGFsdD17YmxvZy50aXRsZX0gLz5cbiAgICAgICAgICAgIDxwPntibG9nLmJvZHl9PC9wPlxuXG4gICAgICAgICAgICB7dXNlcj9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgYSBjb21tZW50XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e215Q29tbWVudH0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TXlDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAjMGQ0N2ExIGJsdWUgZGFya2VuLTRcIiBvbkNsaWNrPXsoKT0+bWFrZUNvbW1ldCgpfT5NYWtlIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgOjxoMz5wbGVhc2UgbG9naW4gdG8gbWFrZSBjb21tZW50czwvaDM+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFsaWduXCI+XG5cbiAgICAgICAgICAgICAgICB7YWxsQ29tbWVudHNCbG9nLm1hcChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDYga2V5PXtpdGVtLm5hbWV9PjxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPiB7aXRlbS50ZXh0fTwvaDY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOm9yYW5nZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo1MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e2Jsb2dpZH19KSB7XG4gICAgIGNvbnN0IHJlc3VsdCA9ICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmdldCgpXG4gICAgIGNvbnN0IGFsbENvbW1ldHNTbmFwID0gYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5jb2xsZWN0aW9uKCdjb21tZW50cycpLmdldCgpXG5cbiAgICBjb25zdCBhbGxDb21tZW50cyA9ICBhbGxDb21tZXRzU25hcC5kb2NzLm1hcChjb21Eb2NTbmFwPT5jb21Eb2NTbmFwLmRhdGEoKSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBibG9nOntcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LmRhdGEoKSxcbiAgICAgICAgICAgICAgY3JlYXRlZEF0OnJlc3VsdC5kYXRhKCkuY3JlYXRlZEF0LnRvTWlsbGlzKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsbENvbW1lbnRzXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/[blogid].js\n");

/***/ })

})