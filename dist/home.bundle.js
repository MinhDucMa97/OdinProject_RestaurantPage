"use strict";
(self["webpackChunkodinproject_restaurantpage"] = self["webpackChunkodinproject_restaurantpage"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageLoading)
/* harmony export */ });
/* harmony import */ var _main_page_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page_image.png */ "./src/main_page_image.png");
/* harmony import */ var _right_container_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right_container_image.jpg */ "./src/right_container_image.jpg");



function homePageLoading() {
  const mainContainer = document.getElementById("content");

  mainContainer.innerHTML = "";

  const contentContainer = document.createElement("div");
  contentContainer.className = "home-page-container";
  contentContainer.id = "home-page-container";

  const leftContainer = document.createElement("div");
  leftContainer.id = "left-container";
  leftContainer.className = "left-container";
  const leftHomeImage = document.createElement("img");
  leftHomeImage.src = _main_page_image_png__WEBPACK_IMPORTED_MODULE_0__;
  leftContainer.appendChild(leftHomeImage);

  const rightContainer = document.createElement("div");
  rightContainer.className = "right-container";
  rightContainer.id = "right-container";
  const rightHomeImage = document.createElement("img");
  rightHomeImage.src = _right_container_image_jpg__WEBPACK_IMPORTED_MODULE_1__;
  rightContainer.appendChild(rightHomeImage);

  contentContainer.appendChild(leftContainer);
  contentContainer.appendChild(rightContainer);

  mainContainer.appendChild(contentContainer);
}


/***/ }),

/***/ "./src/main_page_image.png":
/*!*********************************!*\
  !*** ./src/main_page_image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f199e4e39806c030894.png";

/***/ }),

/***/ "./src/right_container_image.jpg":
/*!***************************************!*\
  !*** ./src/right_container_image.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d416a26f3cae3726e44.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ087QUFDOUQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxlZnRDb250YWluZXJJbWFnZSBmcm9tIFwiLi9tYWluX3BhZ2VfaW1hZ2UucG5nXCI7XHJcbmltcG9ydCByaWdodENvbnRhaW5lckltYWdlIGZyb20gXCIuL3JpZ2h0X2NvbnRhaW5lcl9pbWFnZS5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlTG9hZGluZygpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lLXBhZ2UtY29udGFpbmVyXCI7XHJcbiAgY29udGVudENvbnRhaW5lci5pZCA9IFwiaG9tZS1wYWdlLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZWZ0Q29udGFpbmVyLmlkID0gXCJsZWZ0LWNvbnRhaW5lclwiO1xyXG4gIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJsZWZ0LWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IGxlZnRIb21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxlZnRIb21lSW1hZ2Uuc3JjID0gbGVmdENvbnRhaW5lckltYWdlO1xyXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEhvbWVJbWFnZSk7XHJcblxyXG4gIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByaWdodENvbnRhaW5lci5jbGFzc05hbWUgPSBcInJpZ2h0LWNvbnRhaW5lclwiO1xyXG4gIHJpZ2h0Q29udGFpbmVyLmlkID0gXCJyaWdodC1jb250YWluZXJcIjtcclxuICBjb25zdCByaWdodEhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcmlnaHRIb21lSW1hZ2Uuc3JjID0gcmlnaHRDb250YWluZXJJbWFnZTtcclxuICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEhvbWVJbWFnZSk7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcik7XHJcblxyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9