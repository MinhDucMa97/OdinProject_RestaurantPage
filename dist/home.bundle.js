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
/* harmony import */ var _vietnamese_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vietnamese_chef.jpg */ "./src/vietnamese_chef.jpg");



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

	const middleContainer = document.createElement("div");
	middleContainer.className = "middle-container";
	middleContainer.id = "middle-contaier";
	const middleHomeImage = document.createElement("img");

	const rightContainer = document.createElement("div");
	rightContainer.className = "right-container";
	rightContainer.id = "right-container";
	const rightHomeImage = document.createElement("img");
	rightHomeImage.src = _vietnamese_chef_jpg__WEBPACK_IMPORTED_MODULE_1__;
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

/***/ "./src/vietnamese_chef.jpg":
/*!*********************************!*\
  !*** ./src/vietnamese_chef.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5f26fa590f12666e0ea.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZWZ0Q29udGFpbmVySW1hZ2UgZnJvbSBcIi4vbWFpbl9wYWdlX2ltYWdlLnBuZ1wiO1xyXG5pbXBvcnQgcmlnaHRDb250YWluZXJJbWFnZSBmcm9tIFwiLi92aWV0bmFtZXNlX2NoZWYuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZUxvYWRpbmcoKSB7XHJcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcblx0bWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaG9tZS1wYWdlLWNvbnRhaW5lclwiO1xyXG5cdGNvbnRlbnRDb250YWluZXIuaWQgPSBcImhvbWUtcGFnZS1jb250YWluZXJcIjtcclxuXHJcblx0Y29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGVmdENvbnRhaW5lci5pZCA9IFwibGVmdC1jb250YWluZXJcIjtcclxuXHRsZWZ0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGVmdC1jb250YWluZXJcIjtcclxuXHRjb25zdCBsZWZ0SG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRsZWZ0SG9tZUltYWdlLnNyYyA9IGxlZnRDb250YWluZXJJbWFnZTtcclxuXHRsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIb21lSW1hZ2UpO1xyXG5cclxuXHRjb25zdCBtaWRkbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG1pZGRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1pZGRsZS1jb250YWluZXJcIjtcclxuXHRtaWRkbGVDb250YWluZXIuaWQgPSBcIm1pZGRsZS1jb250YWllclwiO1xyXG5cdGNvbnN0IG1pZGRsZUhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG5cdGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRyaWdodENvbnRhaW5lci5jbGFzc05hbWUgPSBcInJpZ2h0LWNvbnRhaW5lclwiO1xyXG5cdHJpZ2h0Q29udGFpbmVyLmlkID0gXCJyaWdodC1jb250YWluZXJcIjtcclxuXHRjb25zdCByaWdodEhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0cmlnaHRIb21lSW1hZ2Uuc3JjID0gcmlnaHRDb250YWluZXJJbWFnZTtcclxuXHRyaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEhvbWVJbWFnZSk7XHJcblxyXG5cdGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XHJcblx0Y29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcik7XHJcblxyXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9