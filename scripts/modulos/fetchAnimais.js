import Animais from "./animais.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("animais");
    createDiv.innerHTML = `<h3>${animal.specie}</h3><span data-animais>${animal.quantidade}</span>`;
    return createDiv;
  }

  async function getUrl() {
    const respostaUrl = await fetch(url);
    const dadosUrl = await respostaUrl.json();
    const getGridAnimal = document.querySelector(target);
    dadosUrl.forEach((animal) => {
      const elementoAnimal = createAnimal(animal);
      getGridAnimal.appendChild(elementoAnimal);
    });
    const animais = new Animais("[data-animais]", ".animais", "ativo");
    animais.init();
  }

  return getUrl();
}
