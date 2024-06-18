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
/* harmony import */ var _bun_bo_hue_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bun-bo-hue.jpg */ "./src/bun-bo-hue.jpg");
/* harmony import */ var _banh_canh_cua_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banh-canh-cua.jpg */ "./src/banh-canh-cua.jpg");
/* harmony import */ var _bun_rieu_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bun-rieu.jpg */ "./src/bun-rieu.jpg");
/* harmony import */ var _bun_dau_mam_tom_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bun-dau-mam-tom.jpg */ "./src/bun-dau-mam-tom.jpg");








function menuPageLoading() {
	const menuSelection = [
		{ name: "Beef Tenderloin Steak Salad", price: "$15.50", image: _vietnamese_beef_salad_jpg__WEBPACK_IMPORTED_MODULE_0__ },
		{ name: "Pho Special", price: "$17.50", image: _pho_special_jpeg__WEBPACK_IMPORTED_MODULE_1__ },
		{
			name: "Grilled Pork Chop & Grilled Shrimp Rice Plate",
			price: "$17.95",
			image: _porkchop_rice_plate_jpg__WEBPACK_IMPORTED_MODULE_2__,
		},
		{
			name: "Vegan Bun Bo Hue",
			price: "$16.50",
			image: _bun_bo_hue_jpg__WEBPACK_IMPORTED_MODULE_3__,
		},
		{
			name: "Vietnamese Crab & Shrimp Tapioca Noodle Soup",
			price: "$16.50",
			image: _banh_canh_cua_jpg__WEBPACK_IMPORTED_MODULE_4__,
		},
		{
			name: "Vietnamese Carb, Pork & Tomato Noodle Soup",
			price: "$16.50",
			image: _bun_rieu_jpg__WEBPACK_IMPORTED_MODULE_5__,
		},
		{
			name: "Rice Vermicelli With Fried Tofu & Shrimp Sauce",
			price: "$20",
			image: _bun_dau_mam_tom_jpg__WEBPACK_IMPORTED_MODULE_6__,
		},
	];

	const mainContainer = document.getElementById("content");

	mainContainer.innerHTML = "";

	const menuPageContainer = document.createElement("div");
	menuPageContainer.className = "menu-page-container";
	menuPageContainer.id = "menu-page-container";

	const menuHeader = document.createElement("h1");
	menuHeader.className = "menu-header";
	menuHeader.id = "menu-header";
	menuHeader.textContent = "Menu";
	menuPageContainer.appendChild(menuHeader);

	const menuContent = document.createElement("div");
	menuContent.className = "menu-content";
	menuContent.id = "menu-content";

	menuSelection.forEach((item) => {
		const cardContainer = document.createElement("div");
		cardContainer.className = "menu-item";

		const itemImage = document.createElement("img");
		itemImage.src = item.image;
		itemImage.className = "menu-item-image";

		const cardContent = document.createElement("div");
		cardContent.className = "card-content";
		const itemName = document.createElement("p");
		itemName.className = "item-name";
		itemName.textContent = item.name;
		const itemPrice = document.createElement("p");
		itemPrice.className = "item-price";
		itemPrice.textContent = item.price;
		cardContent.appendChild(itemName);
		cardContent.appendChild(itemPrice);

		cardContainer.appendChild(itemImage);
		cardContainer.appendChild(cardContent);

		menuContent.appendChild(cardContainer);
	});

	menuPageContainer.appendChild(menuContent);

	mainContainer.appendChild(menuPageContainer);
}


/***/ }),

/***/ "./src/banh-canh-cua.jpg":
/*!*******************************!*\
  !*** ./src/banh-canh-cua.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0bd886fdb78db4a0089.jpg";

/***/ }),

/***/ "./src/bun-bo-hue.jpg":
/*!****************************!*\
  !*** ./src/bun-bo-hue.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd59408a43f2bc836723.jpg";

/***/ }),

/***/ "./src/bun-dau-mam-tom.jpg":
/*!*********************************!*\
  !*** ./src/bun-dau-mam-tom.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0d720c81839f0ae4a5c.jpg";

/***/ }),

/***/ "./src/bun-rieu.jpg":
/*!**************************!*\
  !*** ./src/bun-rieu.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33e86fdc723a26e630d5.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDUjtBQUNNO0FBQ1Y7QUFDWTtBQUNmO0FBQ1k7QUFDakQ7QUFDZTtBQUNmO0FBQ0EsSUFBSSw2REFBNkQsdURBQVMsRUFBRTtBQUM1RSxJQUFJLDZDQUE2Qyw4Q0FBVSxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQVM7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNENBQVE7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQWlCO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFPO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFZO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVlZlNhbGFkIGZyb20gXCIuL3ZpZXRuYW1lc2UtYmVlZi1zYWxhZC5qcGdcIjtcclxuaW1wb3J0IHBob1NwZWNpYWwgZnJvbSBcIi4vcGhvLXNwZWNpYWwuanBlZ1wiO1xyXG5pbXBvcnQgcmljZVBsYXRlIGZyb20gXCIuL3BvcmtjaG9wLXJpY2UtcGxhdGUuanBnXCI7XHJcbmltcG9ydCBidW5Cb0h1ZSBmcm9tIFwiLi9idW4tYm8taHVlLmpwZ1wiO1xyXG5pbXBvcnQgdGFwaW9jYU5vb2RsZVNvdXAgZnJvbSBcIi4vYmFuaC1jYW5oLWN1YS5qcGdcIjtcclxuaW1wb3J0IGJ1blJpZXUgZnJvbSBcIi4vYnVuLXJpZXUuanBnXCI7XHJcbmltcG9ydCBidW5EYXVNYW1Ub20gZnJvbSBcIi4vYnVuLWRhdS1tYW0tdG9tLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkaW5nKCkge1xyXG5cdGNvbnN0IG1lbnVTZWxlY3Rpb24gPSBbXHJcblx0XHR7IG5hbWU6IFwiQmVlZiBUZW5kZXJsb2luIFN0ZWFrIFNhbGFkXCIsIHByaWNlOiBcIiQxNS41MFwiLCBpbWFnZTogYmVlZlNhbGFkIH0sXHJcblx0XHR7IG5hbWU6IFwiUGhvIFNwZWNpYWxcIiwgcHJpY2U6IFwiJDE3LjUwXCIsIGltYWdlOiBwaG9TcGVjaWFsIH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiR3JpbGxlZCBQb3JrIENob3AgJiBHcmlsbGVkIFNocmltcCBSaWNlIFBsYXRlXCIsXHJcblx0XHRcdHByaWNlOiBcIiQxNy45NVwiLFxyXG5cdFx0XHRpbWFnZTogcmljZVBsYXRlLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJWZWdhbiBCdW4gQm8gSHVlXCIsXHJcblx0XHRcdHByaWNlOiBcIiQxNi41MFwiLFxyXG5cdFx0XHRpbWFnZTogYnVuQm9IdWUsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIlZpZXRuYW1lc2UgQ3JhYiAmIFNocmltcCBUYXBpb2NhIE5vb2RsZSBTb3VwXCIsXHJcblx0XHRcdHByaWNlOiBcIiQxNi41MFwiLFxyXG5cdFx0XHRpbWFnZTogdGFwaW9jYU5vb2RsZVNvdXAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIlZpZXRuYW1lc2UgQ2FyYiwgUG9yayAmIFRvbWF0byBOb29kbGUgU291cFwiLFxyXG5cdFx0XHRwcmljZTogXCIkMTYuNTBcIixcclxuXHRcdFx0aW1hZ2U6IGJ1blJpZXUsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIlJpY2UgVmVybWljZWxsaSBXaXRoIEZyaWVkIFRvZnUgJiBTaHJpbXAgU2F1Y2VcIixcclxuXHRcdFx0cHJpY2U6IFwiJDIwXCIsXHJcblx0XHRcdGltYWdlOiBidW5EYXVNYW1Ub20sXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG5cdG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0Y29uc3QgbWVudVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG1lbnVQYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1wYWdlLWNvbnRhaW5lclwiO1xyXG5cdG1lbnVQYWdlQ29udGFpbmVyLmlkID0gXCJtZW51LXBhZ2UtY29udGFpbmVyXCI7XHJcblxyXG5cdGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0bWVudUhlYWRlci5jbGFzc05hbWUgPSBcIm1lbnUtaGVhZGVyXCI7XHJcblx0bWVudUhlYWRlci5pZCA9IFwibWVudS1oZWFkZXJcIjtcclxuXHRtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblx0bWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcblxyXG5cdGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRtZW51Q29udGVudC5jbGFzc05hbWUgPSBcIm1lbnUtY29udGVudFwiO1xyXG5cdG1lbnVDb250ZW50LmlkID0gXCJtZW51LWNvbnRlbnRcIjtcclxuXHJcblx0bWVudVNlbGVjdGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGNhcmRDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcclxuXHJcblx0XHRjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdFx0aXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XHJcblx0XHRpdGVtSW1hZ2UuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW0taW1hZ2VcIjtcclxuXHJcblx0XHRjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRjYXJkQ29udGVudC5jbGFzc05hbWUgPSBcImNhcmQtY29udGVudFwiO1xyXG5cdFx0Y29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRcdGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiaXRlbS1uYW1lXCI7XHJcblx0XHRpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuXHRcdGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdFx0aXRlbVByaWNlLmNsYXNzTmFtZSA9IFwiaXRlbS1wcmljZVwiO1xyXG5cdFx0aXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuXHRcdGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuXHRcdGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcblxyXG5cdFx0Y2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG5cdFx0Y2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG5cdFx0bWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblx0fSk7XHJcblxyXG5cdG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcclxuXHJcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51UGFnZUNvbnRhaW5lcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9