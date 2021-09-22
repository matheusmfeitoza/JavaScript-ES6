import Animais from "./animais.js";

export default function fetchAnimais() {
  function createAnimal(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("animais");
    createDiv.innerHTML = `<h3>${animal.specie}</h3><span data-animais>${animal.quantidade}</span>`;
    return createDiv;
  }
  async function getUrl(url) {
    const respostaUrl = await fetch(url);
    const dadosUrl = await respostaUrl.json();
    const getGridAnimal = document.querySelector(".grid-animais");
    dadosUrl.forEach((animal) => {
      const elementoAnimal = createAnimal(animal);
      getGridAnimal.appendChild(elementoAnimal);
    });
    const animais = new Animais("[data-animais]", ".animais", "ativo");
    animais.init();
  }

  getUrl("./../../assets/api/animais.json");
}
