export default class TabNav {
  constructor(menuLi, menuConteudo) {
    this.menuLi = document.querySelectorAll(menuLi);
    this.menuConteudo = document.querySelectorAll(menuConteudo);
  }

  tabAtivo(index) {
    this.menuConteudo.forEach((item) => {
      item.classList.remove("ativo");
    });
    const datasetName = this.menuConteudo[index].dataset.anime;
    this.menuConteudo[index].classList.add("ativo", datasetName);
  }

  eventTabMenu() {
    this.menuConteudo[0].classList.add("ativo");

    this.menuLi.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.tabAtivo(index);
      });
    });
  }

  init() {
    if (this.menuLi.length && this.menuConteudo.length) {
      this.eventTabMenu();
    }
  }
}
