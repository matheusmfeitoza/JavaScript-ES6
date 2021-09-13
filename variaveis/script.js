class Buttom {
  constructor(text, backgroud) {
    this.text = text;
    this.backgroud = backgroud;
  }
  get element() {
    const type = this._elementType || "button";
    const newBtn = document.createElement(type);
    newBtn.innerText = this.text;
    newBtn.style.background = this.backgroud;
    return newBtn;
  }
  set element(type) {
    this._elementType = type;
  }
}
const botao = new Buttom("Compre agora", "blue");
document.body.appendChild(botao.element);
