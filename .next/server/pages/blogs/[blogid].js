module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blogs/[blogid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: auth, db, storage, serverTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverTimestamp\", function() { return serverTimestamp; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBC1dvsRSRU6yYWW9L5vRkGJa5lWsP76gU\",\n  authDomain: \"nextjsblog-24dca.firebaseapp.com\",\n  projectId: \"nextjsblog-24dca\",\n  storageBucket: \"nextjsblog-24dca.appspot.com\",\n  messagingSenderId: \"662913361053\",\n  appId: \"1:662913361053:web:d81f25d8a688f3d7c2a074\",\n  measurementId: \"G-DYFBL9Q21T\"\n};\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\nconst auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\nconst db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();\nconst storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();\nconst serverTimestamp = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore.FieldValue.serverTimestamp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcz8yYWRjIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZGIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwic2VydmVyVGltZXN0YW1wIiwiRmllbGRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUsa0NBRk87QUFHbkJDLFdBQVMsRUFBRSxrQkFIUTtBQUluQkMsZUFBYSxFQUFFLDhCQUpJO0FBS25CQyxtQkFBaUIsRUFBRSxjQUxBO0FBTW5CQyxPQUFLLEVBQUUsMkNBTlk7QUFPbkJDLGVBQWEsRUFBRTtBQVBJLENBQXJCO0FBVUEsSUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCRixtREFBUSxDQUFDRyxhQUFULENBQXVCWCxjQUF2QjtBQUMzQixNQUFNWSxJQUFJLEdBQUdKLG1EQUFRLENBQUNJLElBQVQsRUFBYjtBQUNBLE1BQU1DLEVBQUUsR0FBR0wsbURBQVEsQ0FBQ00sU0FBVCxFQUFYO0FBQ0EsTUFBTUMsT0FBTyxHQUFHUCxtREFBUSxDQUFDTyxPQUFULEVBQWhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHUixtREFBUSxDQUFDTSxTQUFULENBQW1CRyxVQUFuQixDQUE4QkQsZUFBdEQiLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QkMxZHZzUlNSVTZ5WVdXOUw1dlJrR0phNWxXc1A3NmdVXCIsXG4gIGF1dGhEb21haW46IFwibmV4dGpzYmxvZy0yNGRjYS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm5leHRqc2Jsb2ctMjRkY2FcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXh0anNibG9nLTI0ZGNhLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY2MjkxMzM2MTA1M1wiLFxuICBhcHBJZDogXCIxOjY2MjkxMzM2MTA1Mzp3ZWI6ZDgxZjI1ZDhhNjg4ZjNkN2MyYTA3NFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctRFlGQkw5UTIxVFwiXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHNlcnZlclRpbWVzdGFtcCA9IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcDtcblxuZXhwb3J0IHsgYXV0aCwgZGIsIHN0b3JhZ2UsIHNlcnZlclRpbWVzdGFtcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/blogs/[blogid].js":
/*!*********************************!*\
  !*** ./pages/blogs/[blogid].js ***!
  \*********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return blogpage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/bijayata/Downloads/nextjs-firebase-blog-app/pages/blogs/[blogid].js\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction blogpage({\n  blog,\n  user,\n  allComments\n}) {\n  const {\n    0: myComment,\n    1: setMyComment\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: allCommentsBlog,\n    1: setAllComments\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(allComments);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const {\n    blogid\n  } = router.query;\n\n  const makeCommet = async () => {\n    await _firebase__WEBPACK_IMPORTED_MODULE_3__[\"db\"].collection('blogs').doc(blogid).collection('comments').add({\n      text: myComment,\n      name: user.displayName\n    });\n    const commentQuery = await _firebase__WEBPACK_IMPORTED_MODULE_3__[\"db\"].collection('blogs').doc(blogid).collection('comments').get();\n    setAllComments(commentQuery.docs.map(docSnap => docSnap.data()));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3461060680\" + \" \" + \"container center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"jsx-3461060680\",\n      children: blog.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      className: \"jsx-3461060680\",\n      children: [\"Created On - \", new Date(blog.createdAt).toDateString()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: blog.imageUrl,\n      alt: blog.title,\n      className: \"jsx-3461060680\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"jsx-3461060680\",\n      children: blog.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3461060680\" + \" \" + \"input-field\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          placeholder: \"add a comment\",\n          value: myComment,\n          onChange: e => setMyComment(e.target.value),\n          className: \"jsx-3461060680\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => makeCommet(),\n        className: \"jsx-3461060680\" + \" \" + \"btn #fb8c00 orange darken-1\",\n        children: \"Make comment\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"jsx-3461060680\",\n      children: \"please login to make comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n      className: \"jsx-3461060680\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3461060680\" + \" \" + \"left-align\",\n      children: allCommentsBlog.map(item => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n          className: \"jsx-3461060680\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"jsx-3461060680\",\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 48\n          }, this), \" \", item.text]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 28\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3461060680\",\n      children: \"span{font-weight:500;}body{color:orange;}img{width:100%;max-width:500px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JpamF5YXRhL0Rvd25sb2Fkcy9uZXh0anMtZmlyZWJhc2UtYmxvZy1hcHAvcGFnZXMvYmxvZ3MvW2Jsb2dpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RpQixBQUdvQyxBQUlwQixBQUVlLFdBQ0ssRUFIbkIsR0FIQSxXQU9BIiwiZmlsZSI6Ii9ob21lL2JpamF5YXRhL0Rvd25sb2Fkcy9uZXh0anMtZmlyZWJhc2UtYmxvZy1hcHAvcGFnZXMvYmxvZ3MvW2Jsb2dpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7ZGJ9IGZyb20gJy4uLy4uL2ZpcmViYXNlJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvZ3BhZ2Uoe2Jsb2csdXNlcixhbGxDb21tZW50c30pIHtcblxuICAgICBjb25zdCBbbXlDb21tZW50LHNldE15Q29tbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICAgY29uc3QgW2FsbENvbW1lbnRzQmxvZyxzZXRBbGxDb21tZW50c10gPSB1c2VTdGF0ZShhbGxDb21tZW50cylcbiAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgY29uc3QgeyBibG9naWQgfSA9IHJvdXRlci5xdWVyeVxuICAgICBjb25zdCBtYWtlQ29tbWV0ID0gYXN5bmMgKCk9PntcbiAgICAgICBcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5jb2xsZWN0aW9uKCdjb21tZW50cycpLmFkZCh7XG4gICAgICAgICAgICAgdGV4dDpteUNvbW1lbnQsXG4gICAgICAgICAgICAgbmFtZTp1c2VyLmRpc3BsYXlOYW1lXG4gICAgICAgICB9KVxuICAgICAgICBjb25zdCBjb21tZW50UXVlcnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnRzJykuZ2V0KClcbiAgICAgICAgc2V0QWxsQ29tbWVudHMoY29tbWVudFF1ZXJ5LmRvY3MubWFwKGRvY1NuYXA9PmRvY1NuYXAuZGF0YSgpKSlcblxuICAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDI+e2Jsb2cudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxoNT5DcmVhdGVkIE9uIC0ge25ldyBEYXRlKGJsb2cuY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKX08L2g1PlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1hZ2VVcmx9IGFsdD17YmxvZy50aXRsZX0gLz5cbiAgICAgICAgICAgIDxwPntibG9nLmJvZHl9PC9wPlxuXG4gICAgICAgICAgICB7dXNlcj9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgYSBjb21tZW50XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e215Q29tbWVudH0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TXlDb21tZW50KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biAjZmI4YzAwIG9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpPT5tYWtlQ29tbWV0KCl9Pk1ha2UgY29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA6PGgzPnBsZWFzZSBsb2dpbiB0byBtYWtlIGNvbW1lbnRzPC9oMz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtYWxpZ25cIj5cblxuICAgICAgICAgICAgICAgIHthbGxDb21tZW50c0Jsb2cubWFwKGl0ZW09PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoNiBrZXk9e2l0ZW0ubmFtZX0+PHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IHtpdGVtLnRleHR9PC9oNj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6b3JhbmdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtczp7YmxvZ2lkfX0pIHtcbiAgICAgY29uc3QgcmVzdWx0ID0gIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Jsb2dzJykuZG9jKGJsb2dpZCkuZ2V0KClcbiAgICAgY29uc3QgYWxsQ29tbWV0c1NuYXAgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnRzJykuZ2V0KClcblxuICAgIGNvbnN0IGFsbENvbW1lbnRzID0gIGFsbENvbW1ldHNTbmFwLmRvY3MubWFwKGNvbURvY1NuYXA9PmNvbURvY1NuYXAuZGF0YSgpKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgIGJsb2c6e1xuICAgICAgICAgICAgICAuLi5yZXN1bHQuZGF0YSgpLFxuICAgICAgICAgICAgICBjcmVhdGVkQXQ6cmVzdWx0LmRhdGEoKS5jcmVhdGVkQXQudG9NaWxsaXMoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxsQ29tbWVudHNcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cblxuXG5cbiJdfQ== */\\n/*@ sourceURL=/home/bijayata/Downloads/nextjs-firebase-blog-app/pages/blogs/[blogid].js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\nasync function getServerSideProps({\n  params: {\n    blogid\n  }\n}) {\n  const result = await _firebase__WEBPACK_IMPORTED_MODULE_3__[\"db\"].collection('blogs').doc(blogid).get();\n  const allCommetsSnap = await _firebase__WEBPACK_IMPORTED_MODULE_3__[\"db\"].collection('blogs').doc(blogid).collection('comments').get();\n  const allComments = allCommetsSnap.docs.map(comDocSnap => comDocSnap.data());\n  return {\n    props: {\n      blog: _objectSpread(_objectSpread({}, result.data()), {}, {\n        createdAt: result.data().createdAt.toMillis()\n      }),\n      allComments\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ncy9bYmxvZ2lkXS5qcz9kMzU4Il0sIm5hbWVzIjpbImJsb2dwYWdlIiwiYmxvZyIsInVzZXIiLCJhbGxDb21tZW50cyIsIm15Q29tbWVudCIsInNldE15Q29tbWVudCIsInVzZVN0YXRlIiwiYWxsQ29tbWVudHNCbG9nIiwic2V0QWxsQ29tbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJibG9naWQiLCJxdWVyeSIsIm1ha2VDb21tZXQiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJhZGQiLCJ0ZXh0IiwibmFtZSIsImRpc3BsYXlOYW1lIiwiY29tbWVudFF1ZXJ5IiwiZ2V0IiwiZG9jcyIsIm1hcCIsImRvY1NuYXAiLCJkYXRhIiwidGl0bGUiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIiwiaW1hZ2VVcmwiLCJib2R5IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXRlbSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlc3VsdCIsImFsbENvbW1ldHNTbmFwIiwiY29tRG9jU25hcCIsInByb3BzIiwidG9NaWxsaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsUUFBVCxDQUFrQjtBQUFDQyxNQUFEO0FBQU1DLE1BQU47QUFBV0M7QUFBWCxDQUFsQixFQUEyQztBQUVyRCxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMkJDLHNEQUFRLENBQUMsRUFBRCxDQUF6QztBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQW1DRixzREFBUSxDQUFDSCxXQUFELENBQWpEO0FBQ0EsUUFBTU0sTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhRixNQUFNLENBQUNHLEtBQTFCOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxZQUFVO0FBRTFC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R0FBdkIsQ0FBMkJMLE1BQTNCLEVBQW1DSSxVQUFuQyxDQUE4QyxVQUE5QyxFQUEwRE8sR0FBMUQsRUFBN0I7QUFFRCxRQUFNbkIsV0FBVyxHQUFJcUMsY0FBYyxDQUFDakIsSUFBZixDQUFvQkMsR0FBcEIsQ0FBd0JpQixVQUFVLElBQUVBLFVBQVUsQ0FBQ2YsSUFBWCxFQUFwQyxDQUFyQjtBQUNBLFNBQU87QUFDTGdCLFNBQUssRUFBRTtBQUNIekMsVUFBSSxrQ0FDR3NDLE1BQU0sQ0FBQ2IsSUFBUCxFQURIO0FBRUFHLGlCQUFTLEVBQUNVLE1BQU0sQ0FBQ2IsSUFBUCxHQUFjRyxTQUFkLENBQXdCYyxRQUF4QjtBQUZWLFFBREQ7QUFLSHhDO0FBTEc7QUFERixHQUFQO0FBU0QiLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9bYmxvZ2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtkYn0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9ncGFnZSh7YmxvZyx1c2VyLGFsbENvbW1lbnRzfSkge1xuXG4gICAgIGNvbnN0IFtteUNvbW1lbnQsc2V0TXlDb21tZW50XSA9IHVzZVN0YXRlKCcnKVxuICAgICBjb25zdCBbYWxsQ29tbWVudHNCbG9nLHNldEFsbENvbW1lbnRzXSA9IHVzZVN0YXRlKGFsbENvbW1lbnRzKVxuICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICBjb25zdCB7IGJsb2dpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgIGNvbnN0IG1ha2VDb21tZXQgPSBhc3luYyAoKT0+e1xuICAgICAgIFxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdibG9ncycpLmRvYyhibG9naWQpLmNvbGxlY3Rpb24oJ2NvbW1lbnRzJykuYWRkKHtcbiAgICAgICAgICAgICB0ZXh0Om15Q29tbWVudCxcbiAgICAgICAgICAgICBuYW1lOnVzZXIuZGlzcGxheU5hbWVcbiAgICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGNvbW1lbnRRdWVyeSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Jsb2dzJykuZG9jKGJsb2dpZCkuY29sbGVjdGlvbignY29tbWVudHMnKS5nZXQoKVxuICAgICAgICBzZXRBbGxDb21tZW50cyhjb21tZW50UXVlcnkuZG9jcy5tYXAoZG9jU25hcD0+ZG9jU25hcC5kYXRhKCkpKVxuXG4gICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMj57YmxvZy50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGg1PkNyZWF0ZWQgT24gLSB7bmV3IERhdGUoYmxvZy5jcmVhdGVkQXQpLnRvRGF0ZVN0cmluZygpfTwvaDU+XG4gICAgICAgICAgICA8aW1nIHNyYz17YmxvZy5pbWFnZVVybH0gYWx0PXtibG9nLnRpdGxlfSAvPlxuICAgICAgICAgICAgPHA+e2Jsb2cuYm9keX08L3A+XG5cbiAgICAgICAgICAgIHt1c2VyP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZCBhIGNvbW1lbnRcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17bXlDb21tZW50fSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRNeUNvbW1lbnQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuICNmYjhjMDAgb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9Pm1ha2VDb21tZXQoKX0+TWFrZSBjb21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDo8aDM+cGxlYXNlIGxvZ2luIHRvIG1ha2UgY29tbWVudHM8L2gzPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1hbGlnblwiPlxuXG4gICAgICAgICAgICAgICAge2FsbENvbW1lbnRzQmxvZy5tYXAoaXRlbT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGg2IGtleT17aXRlbS5uYW1lfT48c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj4ge2l0ZW0udGV4dH08L2g2PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpvcmFuZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zOntibG9naWR9fSkge1xuICAgICBjb25zdCByZXN1bHQgPSAgYXdhaXQgZGIuY29sbGVjdGlvbignYmxvZ3MnKS5kb2MoYmxvZ2lkKS5nZXQoKVxuICAgICBjb25zdCBhbGxDb21tZXRzU25hcCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2Jsb2dzJykuZG9jKGJsb2dpZCkuY29sbGVjdGlvbignY29tbWVudHMnKS5nZXQoKVxuXG4gICAgY29uc3QgYWxsQ29tbWVudHMgPSAgYWxsQ29tbWV0c1NuYXAuZG9jcy5tYXAoY29tRG9jU25hcD0+Y29tRG9jU25hcC5kYXRhKCkpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYmxvZzp7XG4gICAgICAgICAgICAgIC4uLnJlc3VsdC5kYXRhKCksXG4gICAgICAgICAgICAgIGNyZWF0ZWRBdDpyZXN1bHQuZGF0YSgpLmNyZWF0ZWRBdC50b01pbGxpcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGxDb21tZW50c1xuICAgICAgfSxcbiAgICB9XG4gIH1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/[blogid].js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });