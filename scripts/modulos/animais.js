export default function animais() {
  const getAnimais = document.querySelectorAll("[data-animais]");

  function animaAnimais() {
    getAnimais.forEach((item) => {
      const valor = +item.innerText;
      let contador = 0;
      const media = Math.floor(valor / 100);

      const intervalo = setInterval(() => {
        contador += media;
        item.innerText = contador;
        if (contador > valor) {
          item.innerText = valor;
          clearInterval(intervalo);
        }
      }, 45 * Math.random());
    });
  }
  let observer;
  function handleObserver(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaAnimais();
    }
  }
  observer = new MutationObserver(handleObserver);

  const getSectionAnimais = document.querySelector(".animais");

  observer.observe(getSectionAnimais, {
    attributes: true,
  });
}
