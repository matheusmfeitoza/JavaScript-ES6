import animais from "./animais.js";

export default function fetchAnimais() {
  async function getUrl(url) {
    const respostaUrl = await fetch(url);
    const dadosUrl = await respostaUrl.json();
    const getGridAnimal = document.querySelector(".grid-animais");
    dadosUrl.forEach((animal) => {
      const elementoAnimal = createAnimal(animal);
      getGridAnimal.appendChild(elementoAnimal);
    });
    animais();
  }
  function createAnimal(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("animais");
    createDiv.innerHTML = `<h3>${animal.specie}</h3><span data-animais>${animal.quantidade}</span>`;
    return createDiv;
  }
  getUrl("./../../assets/api/animais.json");
}
