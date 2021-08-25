const getMenuLi = document.querySelectorAll('.js-tabMenu li');
const getMenuContent = document.querySelectorAll('.js-tabContent section');

if(getMenuLi.length && getMenuContent.length){
    getMenuContent[0].classList.add('ativo')

    function tabAtivo(index){
        getMenuContent.forEach((item)=>{
            item.classList.remove('ativo')
        })
        getMenuContent[index].classList.add('ativo')
    }

    getMenuLi.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            tabAtivo(index);
        })
    })
}