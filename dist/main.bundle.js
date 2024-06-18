"use strict";
(self["webpackChunkodinproject_restaurantpage"] = self["webpackChunkodinproject_restaurantpage"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./vietnam_background_image.jpg */ "./src/vietnam_background_image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html,
body {
	height: 100%;
	overflow: auto;
	font-family: sans-serif;
	color: #333333;
}

header {
	background-color: #dce9c4;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.2rem;
}

header > div > #logo-img {
	object-fit: cover;
	border-radius: 50%;
	width: 100%;
	height: 4.5rem;
	cursor: pointer;
}

header > nav {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}

header > nav > button {
	font-weight: 600;
	text-transform: uppercase;
	background-color: #dce9c4;
	padding: 0.55rem 2rem;
	border: none;
	letter-spacing: 0.2rem;
	cursor: pointer;
}

header > nav > button:hover {
	color: rgba(0, 0, 0, 0.3);
}

#content {
	height: calc(100vh - 4.9rem);
}

#content > #home-page-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 2rem;
	height: 100%;
	width: 100%;
	gap: 1rem;
	min-height: 100%;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

#content > #home-page-container > * {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	position: relative;
}

#left-container img,
#middle-container img,
#right-container img {
	display: block;
	object-fit: cover;
	object-position: center;
	max-width: 80%;
	max-height: 100%;
	border-radius: 2rem;
	animation: 2s raiseUp;
}

#left-container img:hover,
#middle-container img:hover,
#right-container img:hover {
	filter: blur(0.8px);
}

#left-container button,
#middle-container button,
#right-container button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 0.6rem 1rem;
	background-color: hsl(80, 23%, 90%);
	color: black;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	font-weight: 400;
	font-size: 0.8rem;
	text-transform: uppercase;
	opacity: 0;
	transition: opacity 0.8s ease;
}

#content > #home-page-container > *:hover .overlay-button {
	opacity: 1;
}

@media (max-width: 768px) {
	#content > #home-page-container > * {
		flex-basis: 100%;
		height: auto;
	}
}

@keyframes raiseUp {
	from {
		opacity: 0;
		transform: translateY(70%);
	}
	to {
		opacity: 1;
		transform: translateY(0%);
	}
}

.menu-page-container {
	background-color: rgb(232, 230, 230);
}

.menu-content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	justify-items: center;
	grid-gap: 1.5rem;
	align-items: start;
	padding: 0 2rem;
}

.menu-page-container > .menu-header {
	text-transform: uppercase;
	text-align: start;
	padding: 1.5rem;
}

.menu-content > .menu-item {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	align-items: center;
	border: 0.2px solid #ccc;
	max-width: 250px;
	width: 100%;
	height: 100%;
	transition: all 0.2s ease-in-out;
}

.menu-content > .menu-item:hover {
	transform: scale(1.05);
	box-shadow: 0 7px 5px -5px rgb(0 0 0 / 0.2);
}

.menu-item > .menu-item-image {
	max-width: 100%;
	height: auto;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	object-position: center;
}

.menu-item > .card-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 1rem 0.25rem;
	gap: 0.25rem;
	background-color: white;
	flex: 1;
}

.menu-item > .card-content > .item-name,
.menu-item > .card-content > .item-price {
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 450;
	text-align: left;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;CACT,sBAAsB;AACvB;;AAEA;;CAEC,YAAY;CACZ,cAAc;CACd,uBAAuB;CACvB,cAAc;AACf;;AAEA;CACC,yBAAyB;CACzB,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,WAAW;CACX,cAAc;CACd,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,gBAAgB;CAChB,yBAAyB;CACzB,yBAAyB;CACzB,qBAAqB;CACrB,YAAY;CACZ,sBAAsB;CACtB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,WAAW;CACX,SAAS;CACT,gBAAgB;CAChB,yDAAuD;CACvD,sBAAsB;CACtB,2BAA2B;CAC3B,4BAA4B;CAC5B,4BAA4B;AAC7B;;AAEA;CACC,OAAO;CACP,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;AACnB;;AAEA;;;CAGC,cAAc;CACd,iBAAiB;CACjB,uBAAuB;CACvB,cAAc;CACd,gBAAgB;CAChB,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;;;CAGC,mBAAmB;AACpB;;AAEA;;;CAGC,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,oBAAoB;CACpB,mCAAmC;CACnC,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,gBAAgB;CAChB,iBAAiB;CACjB,yBAAyB;CACzB,UAAU;CACV,6BAA6B;AAC9B;;AAEA;CACC,UAAU;AACX;;AAEA;CACC;EACC,gBAAgB;EAChB,YAAY;CACb;AACD;;AAEA;CACC;EACC,UAAU;EACV,0BAA0B;CAC3B;CACA;EACC,UAAU;EACV,yBAAyB;CAC1B;AACD;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,aAAa;CACb,2DAA2D;CAC3D,qBAAqB;CACrB,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,yBAAyB;CACzB,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,mBAAmB;CACnB,wBAAwB;CACxB,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,gCAAgC;AACjC;;AAEA;CACC,sBAAsB;CACtB,2CAA2C;AAC5C;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,mBAAmB;CACnB,iBAAiB;CACjB,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,WAAW;CACX,qBAAqB;CACrB,YAAY;CACZ,uBAAuB;CACvB,OAAO;AACR;;AAEA;;CAEC,yBAAyB;CACzB,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;AACjB","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\toverflow: auto;\r\n\tfont-family: sans-serif;\r\n\tcolor: #333333;\r\n}\r\n\r\nheader {\r\n\tbackground-color: #dce9c4;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 0.2rem;\r\n}\r\n\r\nheader > div > #logo-img {\r\n\tobject-fit: cover;\r\n\tborder-radius: 50%;\r\n\twidth: 100%;\r\n\theight: 4.5rem;\r\n\tcursor: pointer;\r\n}\r\n\r\nheader > nav {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tgap: 1rem;\r\n}\r\n\r\nheader > nav > button {\r\n\tfont-weight: 600;\r\n\ttext-transform: uppercase;\r\n\tbackground-color: #dce9c4;\r\n\tpadding: 0.55rem 2rem;\r\n\tborder: none;\r\n\tletter-spacing: 0.2rem;\r\n\tcursor: pointer;\r\n}\r\n\r\nheader > nav > button:hover {\r\n\tcolor: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#content {\r\n\theight: calc(100vh - 4.9rem);\r\n}\r\n\r\n#content > #home-page-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\tpadding: 2rem;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tgap: 1rem;\r\n\tmin-height: 100%;\r\n\tbackground-image: url(\"./vietnam_background_image.jpg\");\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-attachment: fixed;\r\n}\r\n\r\n#content > #home-page-container > * {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n#left-container img,\r\n#middle-container img,\r\n#right-container img {\r\n\tdisplay: block;\r\n\tobject-fit: cover;\r\n\tobject-position: center;\r\n\tmax-width: 80%;\r\n\tmax-height: 100%;\r\n\tborder-radius: 2rem;\r\n\tanimation: 2s raiseUp;\r\n}\r\n\r\n#left-container img:hover,\r\n#middle-container img:hover,\r\n#right-container img:hover {\r\n\tfilter: blur(0.8px);\r\n}\r\n\r\n#left-container button,\r\n#middle-container button,\r\n#right-container button {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tpadding: 0.6rem 1rem;\r\n\tbackground-color: hsl(80, 23%, 90%);\r\n\tcolor: black;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n\tfont-weight: 400;\r\n\tfont-size: 0.8rem;\r\n\ttext-transform: uppercase;\r\n\topacity: 0;\r\n\ttransition: opacity 0.8s ease;\r\n}\r\n\r\n#content > #home-page-container > *:hover .overlay-button {\r\n\topacity: 1;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\t#content > #home-page-container > * {\r\n\t\tflex-basis: 100%;\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n@keyframes raiseUp {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(70%);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0%);\r\n\t}\r\n}\r\n\r\n.menu-page-container {\r\n\tbackground-color: rgb(232, 230, 230);\r\n}\r\n\r\n.menu-content {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n\tjustify-items: center;\r\n\tgrid-gap: 1.5rem;\r\n\talign-items: start;\r\n\tpadding: 0 2rem;\r\n}\r\n\r\n.menu-page-container > .menu-header {\r\n\ttext-transform: uppercase;\r\n\ttext-align: start;\r\n\tpadding: 1.5rem;\r\n}\r\n\r\n.menu-content > .menu-item {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tcursor: pointer;\r\n\talign-items: center;\r\n\tborder: 0.2px solid #ccc;\r\n\tmax-width: 250px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n\r\n.menu-content > .menu-item:hover {\r\n\ttransform: scale(1.05);\r\n\tbox-shadow: 0 7px 5px -5px rgb(0 0 0 / 0.2);\r\n}\r\n\r\n.menu-item > .menu-item-image {\r\n\tmax-width: 100%;\r\n\theight: auto;\r\n\taspect-ratio: 1 / 1;\r\n\tobject-fit: cover;\r\n\tobject-position: center;\r\n}\r\n\r\n.menu-item > .card-content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\tpadding: 1rem 0.25rem;\r\n\tgap: 0.25rem;\r\n\tbackground-color: white;\r\n\tflex: 1;\r\n}\r\n\r\n.menu-item > .card-content > .item-name,\r\n.menu-item > .card-content > .item-price {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 0.8rem;\r\n\tfont-weight: 450;\r\n\ttext-align: left;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPageLoading)
/* harmony export */ });
/* harmony import */ var _restaurant_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-about.jpg */ "./src/restaurant-about.jpg");


function aboutPageLoading() {
	const mainContainer = document.getElementById("content");

	mainContainer.innerHTML = "";

	const aboutPageContainer = document.createElement("div");
	aboutPageContainer.className = "about-page-container";
	aboutPageContainer.id = "about-page-container";
	aboutPageContainer.style.backgroundImage = `url(${_restaurant_about_jpg__WEBPACK_IMPORTED_MODULE_0__})`;

	mainContainer.appendChild(aboutPageContainer);
}


/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.jpg */ "./src/logo.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const logoImage = document.getElementById("logo-img");
logoImage.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_1__;
logoImage.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

const headerButtons = document.querySelectorAll(".header-btn");
console.log(headerButtons);

function handleClick(event) {
	if (event.target.classList.contains("menuBtn")) {
		(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
	} else if (event.target.classList.contains("homeBtn")) {
		(0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
	} else if (event.target.classList.contains("aboutBtn")) {
		(0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
	}
}

headerButtons.forEach((button) => {
	button.addEventListener("click", handleClick);
});


/***/ }),

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

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80d4f0f3f85a127a80be.jpg";

/***/ }),

/***/ "./src/pho-special.jpeg":
/*!******************************!*\
  !*** ./src/pho-special.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "919a1402aefe78e8cf58.jpeg";

/***/ }),

/***/ "./src/picture.png":
/*!*************************!*\
  !*** ./src/picture.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4487c913591f33184d5f.png";

/***/ }),

/***/ "./src/porkchop-rice-plate.jpg":
/*!*************************************!*\
  !*** ./src/porkchop-rice-plate.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "489304302865107badc6.jpg";

/***/ }),

/***/ "./src/restaurant-about.jpg":
/*!**********************************!*\
  !*** ./src/restaurant-about.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ca908355385077493f2.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9506e5da02454d38f699.jpg";

/***/ }),

/***/ "./src/vietnam_background_image.jpg":
/*!******************************************!*\
  !*** ./src/vietnam_background_image.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc4f1dd66b01f53a4e8.jpg";

/***/ }),

/***/ "./src/vietnamese-beef-salad.jpg":
/*!***************************************!*\
  !*** ./src/vietnamese-beef-salad.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7f1277aae1c6de638c.jpg";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0s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Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCbUQ7QUFDUjtBQUNNO0FBQ1Y7QUFDWTtBQUNmO0FBQ1k7QUFDakQ7QUFDZTtBQUNmO0FBQ0EsSUFBSSw2REFBNkQsdURBQVMsRUFBRTtBQUM1RSxJQUFJLDZDQUE2Qyw4Q0FBVSxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQVM7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNENBQVE7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQWlCO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBDQUFPO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFZO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdF9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3RfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi92aWV0bmFtX2JhY2tncm91bmRfaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZTljNDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMC4ycmVtO1xyXG59XHJcblxyXG5oZWFkZXIgPiBkaXYgPiAjbG9nby1pbWcge1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDQuNXJlbTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciA+IG5hdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGdhcDogMXJlbTtcclxufVxyXG5cclxuaGVhZGVyID4gbmF2ID4gYnV0dG9uIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZTljNDtcclxuXHRwYWRkaW5nOiAwLjU1cmVtIDJyZW07XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oZWFkZXIgPiBuYXYgPiBidXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0LjlyZW0pO1xyXG59XHJcblxyXG4jY29udGVudCA+ICNob21lLXBhZ2UtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGdhcDogMXJlbTtcclxuXHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNjb250ZW50ID4gI2hvbWUtcGFnZS1jb250YWluZXIgPiAqIHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVmdC1jb250YWluZXIgaW1nLFxyXG4jbWlkZGxlLWNvbnRhaW5lciBpbWcsXHJcbiNyaWdodC1jb250YWluZXIgaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuXHRtYXgtd2lkdGg6IDgwJTtcclxuXHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJyZW07XHJcblx0YW5pbWF0aW9uOiAycyByYWlzZVVwO1xyXG59XHJcblxyXG4jbGVmdC1jb250YWluZXIgaW1nOmhvdmVyLFxyXG4jbWlkZGxlLWNvbnRhaW5lciBpbWc6aG92ZXIsXHJcbiNyaWdodC1jb250YWluZXIgaW1nOmhvdmVyIHtcclxuXHRmaWx0ZXI6IGJsdXIoMC44cHgpO1xyXG59XHJcblxyXG4jbGVmdC1jb250YWluZXIgYnV0dG9uLFxyXG4jbWlkZGxlLWNvbnRhaW5lciBidXR0b24sXHJcbiNyaWdodC1jb250YWluZXIgYnV0dG9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCg4MCwgMjMlLCA5MCUpO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZTtcclxufVxyXG5cclxuI2NvbnRlbnQgPiAjaG9tZS1wYWdlLWNvbnRhaW5lciA+ICo6aG92ZXIgLm92ZXJsYXktYnV0dG9uIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHQjY29udGVudCA+ICNob21lLXBhZ2UtY29udGFpbmVyID4gKiB7XHJcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByYWlzZVVwIHtcclxuXHRmcm9tIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcblx0fVxyXG59XHJcblxyXG4ubWVudS1wYWdlLWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMwLCAyMzApO1xyXG59XHJcblxyXG4ubWVudS1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHRncmlkLWdhcDogMS41cmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHRwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuXHJcbi5tZW51LXBhZ2UtY29udGFpbmVyID4gLm1lbnUtaGVhZGVyIHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cdHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLm1lbnUtY29udGVudCA+IC5tZW51LWl0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXI6IDAuMnB4IHNvbGlkICNjY2M7XHJcblx0bWF4LXdpZHRoOiAyNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRlbnQgPiAubWVudS1pdGVtOmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdGJveC1zaGFkb3c6IDAgN3B4IDVweCAtNXB4IHJnYigwIDAgMCAvIDAuMik7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0gPiAubWVudS1pdGVtLWltYWdlIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0b2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0gPiAuY2FyZC1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMXJlbSAwLjI1cmVtO1xyXG5cdGdhcDogMC4yNXJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4ubWVudS1pdGVtID4gLmNhcmQtY29udGVudCA+IC5pdGVtLW5hbWUsXHJcbi5tZW51LWl0ZW0gPiAuY2FyZC1jb250ZW50ID4gLml0ZW0tcHJpY2Uge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAwLjhyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQ1MDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGFBQWE7Q0FDYixZQUFZO0NBQ1osV0FBVztDQUNYLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIseURBQXVEO0NBQ3ZELHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBOzs7Q0FHQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7QUFDdEI7O0FBRUE7OztDQUdDLG1CQUFtQjtBQUNwQjs7QUFFQTs7O0NBR0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsZ0NBQWdDO0NBQ2hDLG9CQUFvQjtDQUNwQixtQ0FBbUM7Q0FDbkMsWUFBWTtDQUNaLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDViw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0MsVUFBVTtFQUNWLHlCQUF5QjtDQUMxQjtBQUNEOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJEQUEyRDtDQUMzRCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLFlBQVk7Q0FDWixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixPQUFPO0FBQ1I7O0FBRUE7O0NBRUMseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiAjMzMzMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkY2U5YzQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gZGl2ID4gI2xvZ28taW1nIHtcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiA0LjVyZW07XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBuYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IG5hdiA+IGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkY2U5YzQ7XFxyXFxuXFx0cGFkZGluZzogMC41NXJlbSAycmVtO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gbmF2ID4gYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC45cmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgPiAjaG9tZS1wYWdlLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRwYWRkaW5nOiAycmVtO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vdmlldG5hbV9iYWNrZ3JvdW5kX2ltYWdlLmpwZ1xcXCIpO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgPiAjaG9tZS1wYWdlLWNvbnRhaW5lciA+ICoge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWNvbnRhaW5lciBpbWcsXFxyXFxuI21pZGRsZS1jb250YWluZXIgaW1nLFxcclxcbiNyaWdodC1jb250YWluZXIgaW1nIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRtYXgtd2lkdGg6IDgwJTtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuXFx0YW5pbWF0aW9uOiAycyByYWlzZVVwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1jb250YWluZXIgaW1nOmhvdmVyLFxcclxcbiNtaWRkbGUtY29udGFpbmVyIGltZzpob3ZlcixcXHJcXG4jcmlnaHQtY29udGFpbmVyIGltZzpob3ZlciB7XFxyXFxuXFx0ZmlsdGVyOiBibHVyKDAuOHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY29udGFpbmVyIGJ1dHRvbixcXHJcXG4jbWlkZGxlLWNvbnRhaW5lciBidXR0b24sXFxyXFxuI3JpZ2h0LWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRsZWZ0OiA1MCU7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0cGFkZGluZzogMC42cmVtIDFyZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDgwLCAyMyUsIDkwJSk7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCA+ICNob21lLXBhZ2UtY29udGFpbmVyID4gKjpob3ZlciAub3ZlcmxheS1idXR0b24ge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcdCNjb250ZW50ID4gI2hvbWUtcGFnZS1jb250YWluZXIgPiAqIHtcXHJcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmFpc2VVcCB7XFxyXFxuXFx0ZnJvbSB7XFxyXFxuXFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcXHJcXG5cXHR9XFxyXFxuXFx0dG8ge1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5tZW51LXBhZ2UtY29udGFpbmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzAsIDIzMCk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcblxcdGdyaWQtZ2FwOiAxLjVyZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcblxcdHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtcGFnZS1jb250YWluZXIgPiAubWVudS1oZWFkZXIge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuXFx0cGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250ZW50ID4gLm1lbnUtaXRlbSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlcjogMC4ycHggc29saWQgI2NjYztcXHJcXG5cXHRtYXgtd2lkdGg6IDI1MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGVudCA+IC5tZW51LWl0ZW06aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCA3cHggNXB4IC01cHggcmdiKDAgMCAwIC8gMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSA+IC5tZW51LWl0ZW0taW1hZ2Uge1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSA+IC5jYXJkLWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtIDAuMjVyZW07XFxyXFxuXFx0Z2FwOiAwLjI1cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gPiAuY2FyZC1jb250ZW50ID4gLml0ZW0tbmFtZSxcXHJcXG4ubWVudS1pdGVtID4gLmNhcmQtY29udGVudCA+IC5pdGVtLXByaWNlIHtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0NTA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBhZ2VCYWNrZ3JvdW5kIGZyb20gXCIuL3Jlc3RhdXJhbnQtYWJvdXQuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFBhZ2VMb2FkaW5nKCkge1xyXG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG5cdG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblx0Y29uc3QgYWJvdXRQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRhYm91dFBhZ2VDb250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1wYWdlLWNvbnRhaW5lclwiO1xyXG5cdGFib3V0UGFnZUNvbnRhaW5lci5pZCA9IFwiYWJvdXQtcGFnZS1jb250YWluZXJcIjtcclxuXHRhYm91dFBhZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BhZ2VCYWNrZ3JvdW5kfSlgO1xyXG5cclxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0UGFnZUNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IGxlZnRDb250YWluZXJJbWFnZSBmcm9tIFwiLi9waWN0dXJlLnBuZ1wiO1xyXG5pbXBvcnQgcmlnaHRDb250YWluZXJJbWFnZSBmcm9tIFwiLi92aWV0bmFtZXNlX2NoZWYuanBnXCI7XHJcbmltcG9ydCBtaWRkbGVDb250YWluZXJJbWFnZSBmcm9tIFwiLi9yZXN0YXVyYW50LmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkaW5nKCkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWUtcGFnZS1jb250YWluZXJcIjtcclxuICBjb250ZW50Q29udGFpbmVyLmlkID0gXCJob21lLXBhZ2UtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxlZnRDb250YWluZXIuaWQgPSBcImxlZnQtY29udGFpbmVyXCI7XHJcbiAgbGVmdENvbnRhaW5lci5jbGFzc05hbWUgPSBcImxlZnQtY29udGFpbmVyXCI7XHJcbiAgY29uc3QgbGVmdEhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbGVmdEhvbWVJbWFnZS5zcmMgPSBsZWZ0Q29udGFpbmVySW1hZ2U7XHJcbiAgY29uc3QgbGVmdEhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGxlZnRIb21lQnV0dG9uLmNsYXNzTmFtZSA9IFwib3ZlcmxheS1idXR0b24gbGVmdC1vdmVybGF5LWJ0blwiO1xyXG4gIGxlZnRIb21lQnV0dG9uLmlkID0gXCJsZWZ0LW92ZXJsYXktYnRuXCI7XHJcbiAgbGVmdEhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRIb21lSW1hZ2UpO1xyXG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEhvbWVCdXR0b24pO1xyXG5cclxuICBjb25zdCBtaWRkbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pZGRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImltYWdlLWJsdXIgbWlkZGxlLWNvbnRhaW5lclwiO1xyXG4gIG1pZGRsZUNvbnRhaW5lci5pZCA9IFwibWlkZGxlLWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IG1pZGRsZUhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbWlkZGxlSG9tZUltYWdlLnNyYyA9IG1pZGRsZUNvbnRhaW5lckltYWdlO1xyXG4gIGNvbnN0IG1pZGRsZUhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIG1pZGRsZUhvbWVCdXR0b24uY2xhc3NOYW1lID0gXCJvdmVybGF5LWJ1dHRvbiBtaWRkbGUtb3ZlcmxheS1idG5cIjtcclxuICBtaWRkbGVIb21lQnV0dG9uLmlkID0gXCJtaWRkbGUtb3ZlcmxheS1idG5cIjtcclxuICBtaWRkbGVIb21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gIG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVIb21lSW1hZ2UpO1xyXG4gIG1pZGRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaWRkbGVIb21lQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJpZ2h0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicmlnaHQtY29udGFpbmVyXCI7XHJcbiAgcmlnaHRDb250YWluZXIuaWQgPSBcInJpZ2h0LWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IHJpZ2h0SG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICByaWdodEhvbWVJbWFnZS5zcmMgPSByaWdodENvbnRhaW5lckltYWdlO1xyXG4gIGNvbnN0IHJpZ2h0SG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcmlnaHRIb21lQnV0dG9uLmNsYXNzTmFtZSA9IFwib3ZlcmxheS1idXR0b24gcmlnaHQtb3ZlcmxheS1idG5cIjtcclxuICByaWdodEhvbWVCdXR0b24uaWQgPSBcInJpZ2h0LW92ZXJsYXktYnRuXCI7XHJcbiAgcmlnaHRIb21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG4gIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0SG9tZUltYWdlKTtcclxuICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEhvbWVCdXR0b24pO1xyXG5cclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlQ29udGFpbmVyKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcclxuXHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvLmpwZ1wiO1xyXG5pbXBvcnQgaG9tZVBhZ2VMb2FkaW5nIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IG1lbnVQYWdlTG9hZGluZyBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBhYm91dFBhZ2VMb2FkaW5nIGZyb20gXCIuL2Fib3V0LmpzXCI7XHJcblxyXG5ob21lUGFnZUxvYWRpbmcoKTtcclxuXHJcbmNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nby1pbWdcIik7XHJcbmxvZ29JbWFnZS5zcmMgPSBMb2dvO1xyXG5sb2dvSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVQYWdlTG9hZGluZyk7XHJcblxyXG5jb25zdCBoZWFkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnRuXCIpO1xyXG5jb25zb2xlLmxvZyhoZWFkZXJCdXR0b25zKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcblx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51QnRuXCIpKSB7XHJcblx0XHRtZW51UGFnZUxvYWRpbmcoKTtcclxuXHR9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob21lQnRuXCIpKSB7XHJcblx0XHRob21lUGFnZUxvYWRpbmcoKTtcclxuXHR9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhYm91dEJ0blwiKSkge1xyXG5cdFx0YWJvdXRQYWdlTG9hZGluZygpO1xyXG5cdH1cclxufVxyXG5cclxuaGVhZGVyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxufSk7XHJcbiIsImltcG9ydCBiZWVmU2FsYWQgZnJvbSBcIi4vdmlldG5hbWVzZS1iZWVmLXNhbGFkLmpwZ1wiO1xyXG5pbXBvcnQgcGhvU3BlY2lhbCBmcm9tIFwiLi9waG8tc3BlY2lhbC5qcGVnXCI7XHJcbmltcG9ydCByaWNlUGxhdGUgZnJvbSBcIi4vcG9ya2Nob3AtcmljZS1wbGF0ZS5qcGdcIjtcclxuaW1wb3J0IGJ1bkJvSHVlIGZyb20gXCIuL2J1bi1iby1odWUuanBnXCI7XHJcbmltcG9ydCB0YXBpb2NhTm9vZGxlU291cCBmcm9tIFwiLi9iYW5oLWNhbmgtY3VhLmpwZ1wiO1xyXG5pbXBvcnQgYnVuUmlldSBmcm9tIFwiLi9idW4tcmlldS5qcGdcIjtcclxuaW1wb3J0IGJ1bkRhdU1hbVRvbSBmcm9tIFwiLi9idW4tZGF1LW1hbS10b20uanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZUxvYWRpbmcoKSB7XHJcblx0Y29uc3QgbWVudVNlbGVjdGlvbiA9IFtcclxuXHRcdHsgbmFtZTogXCJCZWVmIFRlbmRlcmxvaW4gU3RlYWsgU2FsYWRcIiwgcHJpY2U6IFwiJDE1LjUwXCIsIGltYWdlOiBiZWVmU2FsYWQgfSxcclxuXHRcdHsgbmFtZTogXCJQaG8gU3BlY2lhbFwiLCBwcmljZTogXCIkMTcuNTBcIiwgaW1hZ2U6IHBob1NwZWNpYWwgfSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogXCJHcmlsbGVkIFBvcmsgQ2hvcCAmIEdyaWxsZWQgU2hyaW1wIFJpY2UgUGxhdGVcIixcclxuXHRcdFx0cHJpY2U6IFwiJDE3Ljk1XCIsXHJcblx0XHRcdGltYWdlOiByaWNlUGxhdGUsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiBcIlZlZ2FuIEJ1biBCbyBIdWVcIixcclxuXHRcdFx0cHJpY2U6IFwiJDE2LjUwXCIsXHJcblx0XHRcdGltYWdlOiBidW5Cb0h1ZSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiVmlldG5hbWVzZSBDcmFiICYgU2hyaW1wIFRhcGlvY2EgTm9vZGxlIFNvdXBcIixcclxuXHRcdFx0cHJpY2U6IFwiJDE2LjUwXCIsXHJcblx0XHRcdGltYWdlOiB0YXBpb2NhTm9vZGxlU291cCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiVmlldG5hbWVzZSBDYXJiLCBQb3JrICYgVG9tYXRvIE5vb2RsZSBTb3VwXCIsXHJcblx0XHRcdHByaWNlOiBcIiQxNi41MFwiLFxyXG5cdFx0XHRpbWFnZTogYnVuUmlldSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IFwiUmljZSBWZXJtaWNlbGxpIFdpdGggRnJpZWQgVG9mdSAmIFNocmltcCBTYXVjZVwiLFxyXG5cdFx0XHRwcmljZTogXCIkMjBcIixcclxuXHRcdFx0aW1hZ2U6IGJ1bkRhdU1hbVRvbSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcblx0bWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRjb25zdCBtZW51UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bWVudVBhZ2VDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LXBhZ2UtY29udGFpbmVyXCI7XHJcblx0bWVudVBhZ2VDb250YWluZXIuaWQgPSBcIm1lbnUtcGFnZS1jb250YWluZXJcIjtcclxuXHJcblx0Y29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHRtZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwibWVudS1oZWFkZXJcIjtcclxuXHRtZW51SGVhZGVyLmlkID0gXCJtZW51LWhlYWRlclwiO1xyXG5cdG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHRtZW51UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxuXHJcblx0Y29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG1lbnVDb250ZW50LmNsYXNzTmFtZSA9IFwibWVudS1jb250ZW50XCI7XHJcblx0bWVudUNvbnRlbnQuaWQgPSBcIm1lbnUtY29udGVudFwiO1xyXG5cclxuXHRtZW51U2VsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0Y2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0XHRpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcclxuXHRcdGl0ZW1JbWFnZS5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbS1pbWFnZVwiO1xyXG5cclxuXHRcdGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGNhcmRDb250ZW50LmNsYXNzTmFtZSA9IFwiY2FyZC1jb250ZW50XCI7XHJcblx0XHRjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdFx0aXRlbU5hbWUuY2xhc3NOYW1lID0gXCJpdGVtLW5hbWVcIjtcclxuXHRcdGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG5cdFx0Y29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0XHRpdGVtUHJpY2UuY2xhc3NOYW1lID0gXCJpdGVtLXByaWNlXCI7XHJcblx0XHRpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG5cdFx0Y2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG5cdFx0Y2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuXHJcblx0XHRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcblx0XHRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcblx0XHRtZW51Q29udGVudC5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuXHR9KTtcclxuXHJcblx0bWVudVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xyXG5cclxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlQ29udGFpbmVyKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=