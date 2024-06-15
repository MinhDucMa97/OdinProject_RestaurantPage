"use strict";
(self["webpackChunkodinproject_restaurantpage"] = self["webpackChunkodinproject_restaurantpage"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageLoading)
/* harmony export */ });
/* harmony import */ var _vietnamese_beef_salad_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vietnamese-beef-salad.jpg */ "./src/vietnamese-beef-salad.jpg");
/* harmony import */ var _pho_special_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pho-special.jpeg */ "./src/pho-special.jpeg");
/* harmony import */ var _porkchop_rice_plate_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./porkchop-rice-plate.jpg */ "./src/porkchop-rice-plate.jpg");




function menuPageLoading() {
  const menuSelection = [
    { name: "Beef Tenderloin Steak Salad", price: "$15.50", image: _vietnamese_beef_salad_jpg__WEBPACK_IMPORTED_MODULE_0__ },
    { name: "Pho Special", price: "$17.50", image: _pho_special_jpeg__WEBPACK_IMPORTED_MODULE_1__ },
    {
      name: "Grilled Pork Chop & Grilled Shrimp Rice Plate",
      price: "$17.95",
      image: _porkchop_rice_plate_jpg__WEBPACK_IMPORTED_MODULE_2__,
    },
  ];

  const mainContainer = document.getElementById("content");

  mainContainer.innerHTML = "";

  const menuPageContainer = document.createElement("div");
  menuPageContainer.className = "menu_page_container";
  menuPageContainer.id = "menu_page_container";

  const menuHeader = document.createElement("h1");
  menuHeader.className = "menu-header";
  menuHeader.id = "menu-header";
  menuHeader.textContent = "Menu";
  menuPageContainer.appendChild(menuHeader);

  const menuContent = document.createElement("div");
  menuContent.className = "menu-content";
  menuContent.id = "menu-content";

  menuSelection.forEach((item) => {
    const cardContainer = document.createComment("div");
    cardContainer.className = "menu-item";

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.className = "menu-item-image";

    const itemName = document.createElement("h3");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    const itemPrice = document.createElement("h4");
    itemPrice.className = "item-price";
    itemName.textContent = item.price;

    cardContainer.appendChild(itemImage);
    cardContainer.appendChild(itemName);
    cardContainer.appendChild(itemPrice);
    menuContent.appendChild(cardContainer);
  });

  menuPageContainer.appendChild(menuContent);

  mainContainer.appendChild(menuPageContainer);
}


/***/ }),

/***/ "./src/pho-special.jpeg":
/*!******************************!*\
  !*** ./src/pho-special.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "919a1402aefe78e8cf58.jpeg";

/***/ }),

/***/ "./src/porkchop-rice-plate.jpg":
/*!*************************************!*\
  !*** ./src/porkchop-rice-plate.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "489304302865107badc6.jpg";

/***/ }),

/***/ "./src/vietnamese-beef-salad.jpg":
/*!***************************************!*\
  !*** ./src/vietnamese-beef-salad.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7f1277aae1c6de638c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNSO0FBQ007QUFDbEQ7QUFDZTtBQUNmO0FBQ0EsTUFBTSw2REFBNkQsdURBQVMsRUFBRTtBQUM5RSxNQUFNLDZDQUE2Qyw4Q0FBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQVM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZWVmU2FsYWQgZnJvbSBcIi4vdmlldG5hbWVzZS1iZWVmLXNhbGFkLmpwZ1wiO1xyXG5pbXBvcnQgcGhvU3BlY2lhbCBmcm9tIFwiLi9waG8tc3BlY2lhbC5qcGVnXCI7XHJcbmltcG9ydCByaWNlUGxhdGUgZnJvbSBcIi4vcG9ya2Nob3AtcmljZS1wbGF0ZS5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlTG9hZGluZygpIHtcclxuICBjb25zdCBtZW51U2VsZWN0aW9uID0gW1xyXG4gICAgeyBuYW1lOiBcIkJlZWYgVGVuZGVybG9pbiBTdGVhayBTYWxhZFwiLCBwcmljZTogXCIkMTUuNTBcIiwgaW1hZ2U6IGJlZWZTYWxhZCB9LFxyXG4gICAgeyBuYW1lOiBcIlBobyBTcGVjaWFsXCIsIHByaWNlOiBcIiQxNy41MFwiLCBpbWFnZTogcGhvU3BlY2lhbCB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkdyaWxsZWQgUG9yayBDaG9wICYgR3JpbGxlZCBTaHJpbXAgUmljZSBQbGF0ZVwiLFxyXG4gICAgICBwcmljZTogXCIkMTcuOTVcIixcclxuICAgICAgaW1hZ2U6IHJpY2VQbGF0ZSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBtZW51UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudVBhZ2VDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51X3BhZ2VfY29udGFpbmVyXCI7XHJcbiAgbWVudVBhZ2VDb250YWluZXIuaWQgPSBcIm1lbnVfcGFnZV9jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBtZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwibWVudS1oZWFkZXJcIjtcclxuICBtZW51SGVhZGVyLmlkID0gXCJtZW51LWhlYWRlclwiO1xyXG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxuXHJcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250ZW50LmNsYXNzTmFtZSA9IFwibWVudS1jb250ZW50XCI7XHJcbiAgbWVudUNvbnRlbnQuaWQgPSBcIm1lbnUtY29udGVudFwiO1xyXG5cclxuICBtZW51U2VsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcclxuICAgIGl0ZW1JbWFnZS5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1pbWFnZVwiO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJpdGVtLW5hbWVcIjtcclxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc05hbWUgPSBcIml0ZW0tcHJpY2VcIjtcclxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG4gIH0pO1xyXG5cclxuICBtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XHJcblxyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudVBhZ2VDb250YWluZXIpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==