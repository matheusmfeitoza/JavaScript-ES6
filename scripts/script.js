import tabMenuActive from "./modulos/menu.js";
import Accordion from "./modulos/lista-dt.js";
import ScrollSuave from "./modulos/scroll-suave.js";
import animacaoAoScrollar from "./modulos/animacao-scroll.js";
import modalLogin from "./modulos/modal-login.js";
import menuDropdown from "./modulos/menu-dropdown.js";
import menuMobile from "./modulos/menu-mobile.js";
import horarioFuncionamento from "./modulos/horarioFuncionamento.js";
import fetchAnimais from "./modulos/fetchAnimais.js";
import fetchBtc from "./modulos/fetchBtc.js";

const scrollSuave = new ScrollSuave('[data-menu] a[href^="#"');

scrollSuave.init();

const accordion = new Accordion("[data-faq-list] dt");

accordion.init();

tabMenuActive();
animacaoAoScrollar();
modalLogin();
menuDropdown();
menuMobile();
horarioFuncionamento();
fetchAnimais();
fetchBtc();
