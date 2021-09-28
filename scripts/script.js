import TabNav from "./modulos/tabNav.js";
import Accordion from "./modulos/lista-dt.js";
import ScrollSuave from "./modulos/scroll-suave.js";
import AnimacaoAoScrollar from "./modulos/animacao-scroll.js";
import ModalLogin from "./modulos/modal-login.js";
import MenuDropdown from "./modulos/menu-dropdown.js";
import MenuMobile from "./modulos/menu-mobile";
import HorarioFuncionamento from "./modulos/horarioFuncionamento.js";
import fetchAnimais from "./modulos/fetchAnimais.js";
import fetchBtc from "./modulos/fetchBtc.js";

const scrollSuave = new ScrollSuave('[data-menu] a[href^="#"');

scrollSuave.init();

const accordion = new Accordion("[data-faq-list] dt");

accordion.init();

const tabNav = new TabNav("[data-tab-menu] li", "[data-tab-content] section");
tabNav.init();

const modalLogin = new ModalLogin(
  '[data-modal="login"]',
  '[data-modal="section-modal"]',
  '[data-modal="btn-close"]'
);
modalLogin.init();

const animacaoAoScrollar = new AnimacaoAoScrollar("[data-scroll]");
animacaoAoScrollar.init();

const menuDropdown = new MenuDropdown("[data-show-menu]");
menuDropdown.init();

const menuMobile = new MenuMobile("[data-menu='button'", "[data-menu='lista']");
menuMobile.init();

const horariodeFuncionamento = new HorarioFuncionamento("[data-semana]");
horariodeFuncionamento.init();

fetchAnimais(
  "https://matheusmfeitoza.github.io/JavaScript-ES6/assets/api/animais.json",
  ".grid-animais"
);
fetchBtc("https://blockchain.info/ticker", ".btc-price");
