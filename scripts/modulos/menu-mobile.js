import outSideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(buttonMobile, menuMobile, eventos) {
    this.getMenuMobile = document.querySelector(menuMobile);
    this.getButtonMobile = document.querySelector(buttonMobile);

    if (eventos === undefined) this.eventos = ["click", "touchstart"];
    else this.eventos = eventos;

    this.classe = "ativo";
    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu() {
    if (this.getButtonMobile.classList.contains(this.classe)) {
      this.getMenuMobile.classList.remove(this.classe);
      this.getButtonMobile.classList.remove(this.classe);
    } else {
      this.getMenuMobile.classList.add(this.classe);
      this.getButtonMobile.classList.add(this.classe);
    }

    outSideClick(this.getMenuMobile, this.eventos, () => {
      this.getMenuMobile.classList.remove(this.classe);
      this.getButtonMobile.classList.remove(this.classe);
    });
  }

  ativaEventos() {
    this.eventos.forEach((evento) =>
      this.getButtonMobile.addEventListener(evento, this.activeMenu)
    );
  }

  init() {
    this.ativaEventos();
    return this;
  }
}
