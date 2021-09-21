/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/modulos/animacao-scroll.js":
/*!********************************************!*\
  !*** ./scripts/modulos/animacao-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacaoAoScrollar)\n/* harmony export */ });\nfunction animacaoAoScrollar() {\n  const sections = document.querySelectorAll(\"[data-scroll]\");\n  function scrollEventSections() {\n    sections.forEach((item) => {\n      const windowMetade = window.innerHeight * 0.6;\n      const positionItemTop = item.getBoundingClientRect().top;\n      const isSectionVisible = positionItemTop - windowMetade < 0;\n      if (isSectionVisible) {\n        item.classList.add(\"ativo\");\n      } else if (item.classList.contains(\"ativo\")) {\n        item.classList.remove(\"ativo\");\n      }\n    });\n  }\n  if (sections.length) {\n    scrollEventSections();\n\n    window.addEventListener(\"scroll\", scrollEventSections);\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/animacao-scroll.js?");

/***/ }),

/***/ "./scripts/modulos/animais.js":
/*!************************************!*\
  !*** ./scripts/modulos/animais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animais)\n/* harmony export */ });\nfunction animais() {\r\n  const getAnimais = document.querySelectorAll(\"[data-animais]\");\r\n\r\n  function animaAnimais() {\r\n    getAnimais.forEach((item) => {\r\n      const valor = +item.innerText;\r\n      let contador = 0;\r\n      const media = Math.floor(valor / 100);\r\n\r\n      const intervalo = setInterval(() => {\r\n        contador += media;\r\n        item.innerText = contador;\r\n        if (contador > valor) {\r\n          item.innerText = valor;\r\n          clearInterval(intervalo);\r\n        }\r\n      }, 45 * Math.random());\r\n    });\r\n  }\r\n  let observer;\r\n  function handleObserver(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      observer.disconnect();\r\n      animaAnimais();\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleObserver);\r\n\r\n  const getSectionAnimais = document.querySelector(\".animais\");\r\n\r\n  observer.observe(getSectionAnimais, {\r\n    attributes: true,\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/animais.js?");

/***/ }),

/***/ "./scripts/modulos/fetchAnimais.js":
/*!*****************************************!*\
  !*** ./scripts/modulos/fetchAnimais.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animais_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animais.js */ \"./scripts/modulos/animais.js\");\n\r\n\r\nfunction fetchAnimais() {\r\n  function createAnimal(animal) {\r\n    const createDiv = document.createElement(\"div\");\r\n    createDiv.classList.add(\"animais\");\r\n    createDiv.innerHTML = `<h3>${animal.specie}</h3><span data-animais>${animal.quantidade}</span>`;\r\n    return createDiv;\r\n  }\r\n  async function getUrl(url) {\r\n    const respostaUrl = await fetch(url);\r\n    const dadosUrl = await respostaUrl.json();\r\n    const getGridAnimal = document.querySelector(\".grid-animais\");\r\n    dadosUrl.forEach((animal) => {\r\n      const elementoAnimal = createAnimal(animal);\r\n      getGridAnimal.appendChild(elementoAnimal);\r\n    });\r\n    (0,_animais_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n  getUrl(\"./../../assets/api/animais.json\");\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/fetchAnimais.js?");

/***/ }),

/***/ "./scripts/modulos/fetchBtc.js":
/*!*************************************!*\
  !*** ./scripts/modulos/fetchBtc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nfunction fetchBtc() {\r\n  async function getBtc() {\r\n    const getResponse = await fetch(\"https://blockchain.info/ticker\");\r\n    const getDados = await getResponse.json();\r\n    const getBtcInHtml = document.querySelector(\".btc-price\");\r\n\r\n    getBtcInHtml.innerText = (100 / getDados.BRL.sell).toFixed(4);\r\n  }\r\n  getBtc();\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/fetchBtc.js?");

/***/ }),

/***/ "./scripts/modulos/horarioFuncionamento.js":
/*!*************************************************!*\
  !*** ./scripts/modulos/horarioFuncionamento.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ horarioFuncionamento)\n/* harmony export */ });\nfunction horarioFuncionamento() {\r\n  const getHora = document.querySelector(\"[data-semana]\");\r\n  const semana = getHora.dataset.semana.split(\",\").map(Number);\r\n  const horario = getHora.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaSemana =\r\n    semana.indexOf(dataAgora.getDay()) > 0 &&\r\n    semana.indexOf(dataAgora.getDay()) <= 5;\r\n  const horarioSemana =\r\n    dataAgora.getHours() > horario[0] && dataAgora.getHours() <= horario[1];\r\n  if (diaSemana && horarioSemana) {\r\n    getHora.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/horarioFuncionamento.js?");

/***/ }),

/***/ "./scripts/modulos/lista-dt.js":
/*!*************************************!*\
  !*** ./scripts/modulos/lista-dt.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(dtList) {\n    this.dtList = document.querySelectorAll(dtList);\n    this.activeClass = \"ativo\";\n  }\n\n  tabDtEvent(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  eventAccordion() {\n    this.dtList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.tabDtEvent(item));\n    });\n  }\n\n  // Iniciar a função\n  init() {\n    if (this.dtList.length) {\n      // Inicia o primeiro elemento com a classe ativar\n      this.tabDtEvent(this.dtList[0]);\n      this.eventAccordion();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/lista-dt.js?");

/***/ }),

/***/ "./scripts/modulos/menu-dropdown.js":
/*!******************************************!*\
  !*** ./scripts/modulos/menu-dropdown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuDropdown)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./scripts/modulos/outSideClick.js\");\n\r\n\r\nfunction menuDropdown() {\r\n  const getMenu = document.querySelectorAll(\"[data-show-menu]\");\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  getMenu.forEach((item) => {\r\n    [\"click\", \"touchstart\"].forEach((menuClick) => {\r\n      item.addEventListener(menuClick, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/menu-dropdown.js?");

/***/ }),

/***/ "./scripts/modulos/menu-mobile.js":
/*!****************************************!*\
  !*** ./scripts/modulos/menu-mobile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./scripts/modulos/outSideClick.js\");\n\r\n\r\nfunction menuMobile(){\r\n    const getMenuMobile = document.querySelector(\"[data-menu='lista']\");\r\n    const getButtonMobile = document.querySelector(\"[data-menu='button'\");\r\n    const eventos = ['click','touchstart'];\r\n\r\n    function activeMenu(){\r\n       getMenuMobile.classList.add('ativo')\r\n       getButtonMobile.classList.add('ativo')\r\n\r\n       ;(0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getMenuMobile,eventos,() => {\r\n        getMenuMobile.classList.remove('ativo')\r\n        getButtonMobile.classList.remove('ativo')\r\n       })\r\n    }\r\n    eventos.forEach(evento => getButtonMobile.addEventListener(evento,activeMenu))\r\n\r\n}\n\n//# sourceURL=webpack://javascript/./scripts/modulos/menu-mobile.js?");

/***/ }),

/***/ "./scripts/modulos/menu.js":
/*!*********************************!*\
  !*** ./scripts/modulos/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabMenuActive)\n/* harmony export */ });\nfunction tabMenuActive() {\r\n  const getMenuLi = document.querySelectorAll(\"[data-tab-menu] li\");\r\n  const getMenuContent = document.querySelectorAll(\r\n    \"[data-tab-content] section\"\r\n  );\r\n\r\n  function tabAtivo(index) {\r\n    getMenuContent.forEach((item) => {\r\n      item.classList.remove(\"ativo\");\r\n    });\r\n    const datasetName = getMenuContent[index].dataset.anime;\r\n    getMenuContent[index].classList.add(\"ativo\", datasetName);\r\n  }\r\n\r\n  if (getMenuLi.length && getMenuContent.length) {\r\n    getMenuContent[0].classList.add(\"ativo\");\r\n\r\n    getMenuLi.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        tabAtivo(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/menu.js?");

/***/ }),

/***/ "./scripts/modulos/modal-login.js":
/*!****************************************!*\
  !*** ./scripts/modulos/modal-login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modalLogin)\n/* harmony export */ });\nfunction modalLogin() {\r\n  const getLogin = document.querySelector('[data-modal=\"login\"]');\r\n  const getModal = document.querySelector('[data-modal=\"section-modal\"]');\r\n  const closeModal = document.querySelector('[data-modal=\"btn-close\"]');\r\n  function modalAction(event) {\r\n    event.preventDefault();\r\n    getModal.classList.add(\"ativo\");\r\n  }\r\n\r\n  function closeModalEvent(event) {\r\n    event.preventDefault();\r\n    getModal.classList.remove(\"ativo\");\r\n  }\r\n  function clickForaModal(event) {\r\n    if (event.target === this) {\r\n      closeModalEvent(event);\r\n    }\r\n  }\r\n  if (getModal && getLogin && closeModal) {\r\n    getLogin.addEventListener(\"click\", modalAction);\r\n    closeModal.addEventListener(\"click\", closeModalEvent);\r\n    getModal.addEventListener(\"click\", clickForaModal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/modal-login.js?");

/***/ }),

/***/ "./scripts/modulos/outSideClick.js":
/*!*****************************************!*\
  !*** ./scripts/modulos/outSideClick.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outClick)\n/* harmony export */ });\nfunction outClick(element, events, callback) {\r\n  const getHtml = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  function handleClickOut(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        getHtml.removeEventListener(userEvent, handleClickOut);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        getHtml.addEventListener(userEvent, handleClickOut);\r\n      }, 100);\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/outSideClick.js?");

/***/ }),

/***/ "./scripts/modulos/scroll-suave.js":
/*!*****************************************!*\
  !*** ./scripts/modulos/scroll-suave.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(link, option) {\r\n    this.links = document.querySelectorAll(link);\r\n    if (option === undefined) {\r\n      this.option = {\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      };\r\n    } else {\r\n      this.option = option;\r\n    }\r\n    this.scrollSuaveSections = this.scrollSuaveSections.bind(this);\r\n  }\r\n\r\n  scrollSuaveSections(event) {\r\n    event.preventDefault();\r\n    const getHref = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(getHref);\r\n    section.scrollIntoView(this.option);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.links.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollSuaveSections);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.links.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/scroll-suave.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/menu.js */ \"./scripts/modulos/menu.js\");\n/* harmony import */ var _modulos_lista_dt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/lista-dt.js */ \"./scripts/modulos/lista-dt.js\");\n/* harmony import */ var _modulos_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/scroll-suave.js */ \"./scripts/modulos/scroll-suave.js\");\n/* harmony import */ var _modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/animacao-scroll.js */ \"./scripts/modulos/animacao-scroll.js\");\n/* harmony import */ var _modulos_modal_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/modal-login.js */ \"./scripts/modulos/modal-login.js\");\n/* harmony import */ var _modulos_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/menu-dropdown.js */ \"./scripts/modulos/menu-dropdown.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./scripts/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/horarioFuncionamento.js */ \"./scripts/modulos/horarioFuncionamento.js\");\n/* harmony import */ var _modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/fetchAnimais.js */ \"./scripts/modulos/fetchAnimais.js\");\n/* harmony import */ var _modulos_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/fetchBtc.js */ \"./scripts/modulos/fetchBtc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modulos_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu] a[href^=\"#\"');\r\n\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modulos_lista_dt_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-faq-list] dt\");\r\n\r\naccordion.init();\r\n\r\n(0,_modulos_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modulos_modal_login_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modulos_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modulos_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modulos_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://javascript/./scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/script.js");
/******/ 	
/******/ })()
;