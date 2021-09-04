export default function animais() {
    const getAnimais = document.querySelectorAll('[data-animais]')

    function animaAnimais() {

        getAnimais.forEach((item) => {
            const valor = +item.innerText;
            let contador = 0;
            const media = Math.floor(valor / 100);

            const intervalo = setInterval(() => {
                contador += media;
                item.innerText = contador;
                if (contador > valor) {
                    item.innerText = valor
                    clearInterval(intervalo)
                }

            }, 25 * Math.random());
        });
    }

    function handleObserver(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect()
            animaAnimais();
        }

    }

    const getSectionAnimais = document.querySelector('.animais');
    const observer = new MutationObserver(handleObserver);

    observer.observe(getSectionAnimais, {
        attributes: true
    });
}