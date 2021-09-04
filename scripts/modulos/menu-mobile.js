import outSideClick from './outSideClick.js';

export default function menuMobile(){
    const getMenuMobile = document.querySelector("[data-menu='lista']");
    const getButtonMobile = document.querySelector("[data-menu='button'");
    const eventos = ['click','touchstart'];

    function activeMenu(){
       getMenuMobile.classList.add('ativo')
       getButtonMobile.classList.add('ativo')

       outSideClick(getMenuMobile,eventos,() => {
        getMenuMobile.classList.remove('ativo')
        getButtonMobile.classList.remove('ativo')
       })
    }
    eventos.forEach(evento => getButtonMobile.addEventListener(evento,activeMenu))

}