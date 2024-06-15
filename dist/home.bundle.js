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
/* harmony import */ var _picture_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture.png */ "./src/picture.png");
/* harmony import */ var _vietnamese_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vietnamese_chef.jpg */ "./src/vietnamese_chef.jpg");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");




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
  leftHomeImage.src = _picture_png__WEBPACK_IMPORTED_MODULE_0__;
  const leftHomeButton = document.createElement("button");
  leftHomeButton.className = "overlay-button left-overlay-btn";
  leftHomeButton.id = "left-overlay-btn";
  leftHomeButton.textContent = "Menu";
  leftContainer.appendChild(leftHomeImage);
  leftContainer.appendChild(leftHomeButton);

  const middleContainer = document.createElement("div");
  middleContainer.className = "image-blur middle-container";
  middleContainer.id = "middle-container";
  const middleHomeImage = document.createElement("img");
  middleHomeImage.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__;
  const middleHomeButton = document.createElement("button");
  middleHomeButton.className = "overlay-button middle-overlay-btn";
  middleHomeButton.id = "middle-overlay-btn";
  middleHomeButton.textContent = "Location";
  middleContainer.appendChild(middleHomeImage);
  middleContainer.appendChild(middleHomeButton);

  const rightContainer = document.createElement("div");
  rightContainer.className = "right-container";
  rightContainer.id = "right-container";
  const rightHomeImage = document.createElement("img");
  rightHomeImage.src = _vietnamese_chef_jpg__WEBPACK_IMPORTED_MODULE_1__;
  const rightHomeButton = document.createElement("button");
  rightHomeButton.className = "overlay-button right-overlay-btn";
  rightHomeButton.id = "right-overlay-btn";
  rightHomeButton.textContent = "About";
  rightContainer.appendChild(rightHomeImage);
  rightContainer.appendChild(rightHomeButton);

  contentContainer.appendChild(leftContainer);
  contentContainer.appendChild(middleContainer);
  contentContainer.appendChild(rightContainer);

  mainContainer.appendChild(contentContainer);
}


/***/ }),

/***/ "./src/picture.png":
/*!*************************!*\
  !*** ./src/picture.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4487c913591f33184d5f.png";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9506e5da02454d38f699.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNTO0FBQ0o7QUFDcEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5Q0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsZWZ0Q29udGFpbmVySW1hZ2UgZnJvbSBcIi4vcGljdHVyZS5wbmdcIjtcclxuaW1wb3J0IHJpZ2h0Q29udGFpbmVySW1hZ2UgZnJvbSBcIi4vdmlldG5hbWVzZV9jaGVmLmpwZ1wiO1xyXG5pbXBvcnQgbWlkZGxlQ29udGFpbmVySW1hZ2UgZnJvbSBcIi4vcmVzdGF1cmFudC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlTG9hZGluZygpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lLXBhZ2UtY29udGFpbmVyXCI7XHJcbiAgY29udGVudENvbnRhaW5lci5pZCA9IFwiaG9tZS1wYWdlLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZWZ0Q29udGFpbmVyLmlkID0gXCJsZWZ0LWNvbnRhaW5lclwiO1xyXG4gIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJsZWZ0LWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IGxlZnRIb21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxlZnRIb21lSW1hZ2Uuc3JjID0gbGVmdENvbnRhaW5lckltYWdlO1xyXG4gIGNvbnN0IGxlZnRIb21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBsZWZ0SG9tZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm92ZXJsYXktYnV0dG9uIGxlZnQtb3ZlcmxheS1idG5cIjtcclxuICBsZWZ0SG9tZUJ1dHRvbi5pZCA9IFwibGVmdC1vdmVybGF5LWJ0blwiO1xyXG4gIGxlZnRIb21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0SG9tZUltYWdlKTtcclxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIb21lQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgbWlkZGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1ibHVyIG1pZGRsZS1jb250YWluZXJcIjtcclxuICBtaWRkbGVDb250YWluZXIuaWQgPSBcIm1pZGRsZS1jb250YWluZXJcIjtcclxuICBjb25zdCBtaWRkbGVIb21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1pZGRsZUhvbWVJbWFnZS5zcmMgPSBtaWRkbGVDb250YWluZXJJbWFnZTtcclxuICBjb25zdCBtaWRkbGVIb21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtaWRkbGVIb21lQnV0dG9uLmNsYXNzTmFtZSA9IFwib3ZlcmxheS1idXR0b24gbWlkZGxlLW92ZXJsYXktYnRuXCI7XHJcbiAgbWlkZGxlSG9tZUJ1dHRvbi5pZCA9IFwibWlkZGxlLW92ZXJsYXktYnRuXCI7XHJcbiAgbWlkZGxlSG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICBtaWRkbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlSG9tZUltYWdlKTtcclxuICBtaWRkbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlSG9tZUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByaWdodENvbnRhaW5lci5jbGFzc05hbWUgPSBcInJpZ2h0LWNvbnRhaW5lclwiO1xyXG4gIHJpZ2h0Q29udGFpbmVyLmlkID0gXCJyaWdodC1jb250YWluZXJcIjtcclxuICBjb25zdCByaWdodEhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgcmlnaHRIb21lSW1hZ2Uuc3JjID0gcmlnaHRDb250YWluZXJJbWFnZTtcclxuICBjb25zdCByaWdodEhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJpZ2h0SG9tZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm92ZXJsYXktYnV0dG9uIHJpZ2h0LW92ZXJsYXktYnRuXCI7XHJcbiAgcmlnaHRIb21lQnV0dG9uLmlkID0gXCJyaWdodC1vdmVybGF5LWJ0blwiO1xyXG4gIHJpZ2h0SG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEhvbWVJbWFnZSk7XHJcbiAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRIb21lQnV0dG9uKTtcclxuXHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZUNvbnRhaW5lcik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcik7XHJcblxyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9