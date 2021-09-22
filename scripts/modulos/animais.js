export default class Animais {
  constructor(animais, observerTarget, observerClass) {
    this.getAnimais = document.querySelectorAll(animais);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.handleObserver = this.handleObserver.bind(this);
  }
  // const getAnimais = document.querySelectorAll("[data-animais]");

  static incrementaNumero(numero) {
    const valor = +numero.innerText;
    let contador = 0;
    const media = Math.floor(valor / 100);

    const intervalo = setInterval(() => {
      contador += media;
      numero.innerText = contador;
      if (contador > valor) {
        numero.innerText = valor;
        clearInterval(intervalo);
      }
    }, 45 * Math.random());
  }

  animaAnimais() {
    this.getAnimais.forEach((item) => this.constructor.incrementaNumero(item));
  }

  handleObserver(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaAnimais();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observerTarget, {
      attributes: true,
    });
  }

  init() {
    if (this.getAnimais && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
