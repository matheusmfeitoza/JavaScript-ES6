export default class AnimacaoAoScrollar {
  constructor(seletor) {
    this.sections = document.querySelectorAll(seletor);
    this.windowHeight = window.innerHeight * 0.6;
    this.animarAoScrollar = this.animarAoScrollar.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const distancia = section.offsetTop;
      return {
        element: section,
        distancia: Math.floor(distancia - this.windowHeight),
      };
    });
  }

  animarAoScrollar() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.distancia) {
        item.element.classList.add("ativo");
      }
      // } else if (item.element.classList.contains("ativo")) {
      //   item.element.classList.remove("ativo");
      // }
    });
  }

  init() {
    this.getDistance();
    this.animarAoScrollar();
    // this.scrollEventSections();
    window.addEventListener("scroll", this.animarAoScrollar);
    return this;
  }
}
