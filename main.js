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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoAoScrollar)\n/* harmony export */ });\nclass AnimacaoAoScrollar {\r\n  constructor(seletor) {\r\n    this.sections = document.querySelectorAll(seletor);\r\n    this.windowHeight = window.innerHeight * 0.6;\r\n    this.animarAoScrollar = this.animarAoScrollar.bind(this);\r\n  }\r\n\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const distancia = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        distancia: Math.floor(distancia - this.windowHeight),\r\n      };\r\n    });\r\n  }\r\n\r\n  animarAoScrollar() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.distancia) {\r\n        item.element.classList.add(\"ativo\");\r\n      } else if (item.element.classList.contains(\"ativo\")) {\r\n        item.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.getDistance();\r\n    this.animarAoScrollar();\r\n    // this.scrollEventSections();\r\n    window.addEventListener(\"scroll\", this.animarAoScrollar);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/animacao-scroll.js?");

/***/ }),

/***/ "./scripts/modulos/animais.js":
/*!************************************!*\
  !*** ./scripts/modulos/animais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animais)\n/* harmony export */ });\nclass Animais {\r\n  constructor(animais, observerTarget, observerClass) {\r\n    this.getAnimais = document.querySelectorAll(animais);\r\n    this.observerClass = observerClass;\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.handleObserver = this.handleObserver.bind(this);\r\n  }\r\n  // const getAnimais = document.querySelectorAll(\"[data-animais]\");\r\n\r\n  static incrementaNumero(numero) {\r\n    const valor = +numero.innerText;\r\n    let contador = 0;\r\n    const media = Math.floor(valor / 100);\r\n\r\n    const intervalo = setInterval(() => {\r\n      contador += media;\r\n      numero.innerText = contador;\r\n      if (contador > valor) {\r\n        numero.innerText = valor;\r\n        clearInterval(intervalo);\r\n      }\r\n    }, 45 * Math.random());\r\n  }\r\n\r\n  animaAnimais() {\r\n    this.getAnimais.forEach((item) => this.constructor.incrementaNumero(item));\r\n  }\r\n\r\n  handleObserver(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaAnimais();\r\n    }\r\n  }\r\n\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleObserver);\r\n    this.observer.observe(this.observerTarget, {\r\n      attributes: true,\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.getAnimais && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/animais.js?");

/***/ }),

/***/ "./scripts/modulos/fetchAnimais.js":
/*!*****************************************!*\
  !*** ./scripts/modulos/fetchAnimais.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animais_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animais.js */ \"./scripts/modulos/animais.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  function createAnimal(animal) {\r\n    const createDiv = document.createElement(\"div\");\r\n    createDiv.classList.add(\"animais\");\r\n    createDiv.innerHTML = `<h3>${animal.specie}</h3><span data-animais>${animal.quantidade}</span>`;\r\n    return createDiv;\r\n  }\r\n\r\n  async function getUrl() {\r\n    const respostaUrl = await fetch(url);\r\n    const dadosUrl = await respostaUrl.json();\r\n    const getGridAnimal = document.querySelector(target);\r\n    dadosUrl.forEach((animal) => {\r\n      const elementoAnimal = createAnimal(animal);\r\n      getGridAnimal.appendChild(elementoAnimal);\r\n    });\r\n    const animais = new _animais_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-animais]\", \".animais\", \"ativo\");\r\n    animais.init();\r\n  }\r\n\r\n  return getUrl();\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/fetchAnimais.js?");

/***/ }),

/***/ "./scripts/modulos/fetchBtc.js":
/*!*************************************!*\
  !*** ./scripts/modulos/fetchBtc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nfunction fetchBtc(url, seletor) {\r\n  async function getBtc() {\r\n    try {\r\n      const getResponse = await fetch(url);\r\n      const getDados = await getResponse.json();\r\n      const getBtcInHtml = document.querySelector(seletor);\r\n\r\n      getBtcInHtml.innerText = (100 / getDados.BRL.sell).toFixed(4);\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  return getBtc();\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/fetchBtc.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(dtList) {\r\n    this.dtList = document.querySelectorAll(dtList);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  tabDtEvent(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  eventAccordion() {\r\n    this.dtList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.tabDtEvent(item));\r\n    });\r\n  }\r\n\r\n  // Iniciar a função\r\n  init() {\r\n    if (this.dtList.length) {\r\n      // Inicia o primeiro elemento com a classe ativar\r\n      this.tabDtEvent(this.dtList[0]);\r\n      this.eventAccordion();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/lista-dt.js?");

/***/ }),

/***/ "./scripts/modulos/menu-dropdown.js":
/*!******************************************!*\
  !*** ./scripts/modulos/menu-dropdown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuDropdown)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./scripts/modulos/outSideClick.js\");\n\r\n\r\nclass MenuDropdown {\r\n  constructor(menu, events) {\r\n    this.menu = document.querySelectorAll(menu);\r\n    if (events === undefined) this.events = [\"click\", \"touchstart\"];\r\n    else this.events = events;\r\n    this.handleClick = this.handleClick.bind(this);\r\n  }\r\n\r\n  // Função de CallBack: Previne o padrão e adiciona a classe ativo\r\n  handleClick(evento) {\r\n    evento.preventDefault();\r\n    const element = evento.currentTarget;\r\n    element.classList.add(\"ativo\");\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  // Função de evento: Percorre primeiramente no item e depois para cada evento de click ou touch add um event listener com cada evento chamando o CallBack\r\n  eventoClickMenu() {\r\n    this.menu.forEach((item) => {\r\n      this.events.forEach((menuClick) => {\r\n        item.addEventListener(menuClick, this.handleClick);\r\n      });\r\n    });\r\n  }\r\n\r\n  // Função para iniciar a classe.\r\n  init() {\r\n    this.eventoClickMenu();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/menu-dropdown.js?");

/***/ }),

/***/ "./scripts/modulos/menu-mobile.js":
/*!****************************************!*\
  !*** ./scripts/modulos/menu-mobile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./scripts/modulos/outSideClick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(buttonMobile, menuMobile, eventos) {\r\n    this.getMenuMobile = document.querySelector(menuMobile);\r\n    this.getButtonMobile = document.querySelector(buttonMobile);\r\n\r\n    if (eventos === undefined) this.eventos = [\"click\", \"touchstart\"];\r\n    else this.eventos = eventos;\r\n\r\n    this.classe = \"ativo\";\r\n    this.activeMenu = this.activeMenu.bind(this);\r\n  }\r\n\r\n  activeMenu() {\r\n    if (this.getButtonMobile.classList.contains(this.classe)) {\r\n      this.getMenuMobile.classList.remove(this.classe);\r\n      this.getButtonMobile.classList.remove(this.classe);\r\n    } else {\r\n      this.getMenuMobile.classList.add(this.classe);\r\n      this.getButtonMobile.classList.add(this.classe);\r\n    }\r\n\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.getMenuMobile, this.eventos, () => {\r\n      this.getMenuMobile.classList.remove(this.classe);\r\n      this.getButtonMobile.classList.remove(this.classe);\r\n    });\r\n  }\r\n\r\n  ativaEventos() {\r\n    this.eventos.forEach((evento) =>\r\n      this.getButtonMobile.addEventListener(evento, this.activeMenu)\r\n    );\r\n  }\r\n\r\n  init() {\r\n    this.ativaEventos();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/menu-mobile.js?");

/***/ }),

/***/ "./scripts/modulos/modal-login.js":
/*!****************************************!*\
  !*** ./scripts/modulos/modal-login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModalLogin)\n/* harmony export */ });\nclass ModalLogin {\n  constructor(login, modal, closeModal) {\n    this.getLogin = document.querySelector(login);\n    this.getModal = document.querySelector(modal);\n    this.closeModal = document.querySelector(closeModal);\n    this.activeEvent = \"ativo\";\n    this.clickModalActive = this.clickModalActive.bind(this);\n    this.clickForaModal = this.clickForaModal.bind(this);\n  }\n\n  // Adiciona a classe ativo / remove classe ativo\n  modalAction() {\n    this.getModal.classList.toggle(this.activeEvent);\n  }\n\n  // Ativa o evendo de toggle\n  clickModalActive(event) {\n    event.preventDefault();\n    this.modalAction();\n  }\n\n  // Remove a classe ativo com click fora\n  clickForaModal(event) {\n    if (event.target === this.getModal) {\n      this.modalAction();\n    }\n  }\n\n  // Chamada dos eventos\n  callEvents() {\n    this.getLogin.addEventListener(\"click\", this.clickModalActive);\n    this.closeModal.addEventListener(\"click\", this.clickModalActive);\n    this.getModal.addEventListener(\"click\", this.clickForaModal);\n  }\n\n  init() {\n    this.callEvents();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/modal-login.js?");

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

/***/ "./scripts/modulos/tabNav.js":
/*!***********************************!*\
  !*** ./scripts/modulos/tabNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menuLi, menuConteudo) {\r\n    this.menuLi = document.querySelectorAll(menuLi);\r\n    this.menuConteudo = document.querySelectorAll(menuConteudo);\r\n  }\r\n\r\n  tabAtivo(index) {\r\n    this.menuConteudo.forEach((item) => {\r\n      item.classList.remove(\"ativo\");\r\n    });\r\n    const datasetName = this.menuConteudo[index].dataset.anime;\r\n    this.menuConteudo[index].classList.add(\"ativo\", datasetName);\r\n  }\r\n\r\n  eventTabMenu() {\r\n    this.menuConteudo[0].classList.add(\"ativo\");\r\n\r\n    this.menuLi.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        this.tabAtivo(index);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuLi.length && this.menuConteudo.length) {\r\n      this.eventTabMenu();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript/./scripts/modulos/tabNav.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_tabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/tabNav.js */ \"./scripts/modulos/tabNav.js\");\n/* harmony import */ var _modulos_lista_dt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/lista-dt.js */ \"./scripts/modulos/lista-dt.js\");\n/* harmony import */ var _modulos_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/scroll-suave.js */ \"./scripts/modulos/scroll-suave.js\");\n/* harmony import */ var _modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/animacao-scroll.js */ \"./scripts/modulos/animacao-scroll.js\");\n/* harmony import */ var _modulos_modal_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/modal-login.js */ \"./scripts/modulos/modal-login.js\");\n/* harmony import */ var _modulos_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/menu-dropdown.js */ \"./scripts/modulos/menu-dropdown.js\");\n/* harmony import */ var _modulos_menu_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/menu-mobile */ \"./scripts/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/horarioFuncionamento.js */ \"./scripts/modulos/horarioFuncionamento.js\");\n/* harmony import */ var _modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/fetchAnimais.js */ \"./scripts/modulos/fetchAnimais.js\");\n/* harmony import */ var _modulos_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/fetchBtc.js */ \"./scripts/modulos/fetchBtc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modulos_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-menu] a[href^=\"#\"');\r\n\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modulos_lista_dt_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-faq-list] dt\");\r\n\r\naccordion.init();\r\n\r\nconst tabNav = new _modulos_tabNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-tab-menu] li\", \"[data-tab-content] section\");\r\ntabNav.init();\r\n\r\nconst modalLogin = new _modulos_modal_login_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  '[data-modal=\"login\"]',\r\n  '[data-modal=\"section-modal\"]',\r\n  '[data-modal=\"btn-close\"]'\r\n);\r\nmodalLogin.init();\r\n\r\nconst animacaoAoScrollar = new _modulos_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-scroll]\");\r\nanimacaoAoScrollar.init();\r\n\r\nconst menuDropdown = new _modulos_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-show-menu]\");\r\nmenuDropdown.init();\r\n\r\nconst menuMobile = new _modulos_menu_mobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-menu='button'\", \"[data-menu='lista']\");\r\nmenuMobile.init();\r\n\r\n(0,_modulos_horarioFuncionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modulos_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"./../assets/api/animais.json\", \".grid-animais\");\r\n(0,_modulos_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-price\");\r\n\n\n//# sourceURL=webpack://javascript/./scripts/script.js?");

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