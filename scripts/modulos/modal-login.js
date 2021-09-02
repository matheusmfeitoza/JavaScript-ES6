export default function modalLogin(){
    const getLogin = document.querySelector('[data-modal="login"]')
    const getModal = document.querySelector('[data-modal="section-modal"]')
    const closeModal = document.querySelector('[data-modal="btn-close"]')
if(getModal && getLogin && closeModal){ 
        function modalAction(event){
        event.preventDefault();
        getModal.classList.add('ativo')
        }

        function closeModalEvent(event){
            event.preventDefault()
            getModal.classList.remove('ativo');
        }
        function clickForaModal(event){
            if(event.target === this){
                closeModalEvent(event);
            }
        }

        getLogin.addEventListener('click',modalAction);
        closeModal.addEventListener('click',closeModalEvent);
        getModal.addEventListener('click',clickForaModal);
    }
}