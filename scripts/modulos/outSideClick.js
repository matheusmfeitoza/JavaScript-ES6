export default function outClick(element,events,callback){
    const getHtml = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)){
        events.forEach(userEvent =>{
           setTimeout(()=>{getHtml.addEventListener(userEvent,handleClickOut)},100) ;
        })
        element.setAttribute(outside,'');
    }
    function handleClickOut(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside)
            events.forEach(userEvent =>{
                getHtml.removeEventListener(userEvent,handleClickOut);
            })
            callback();
        }
    }
}
