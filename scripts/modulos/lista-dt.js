export default function tabDtListActive() {
    const getDtFaqList = document.querySelectorAll("[data-faq-list] dt");
    if (getDtFaqList.length) {
      getDtFaqList[0].classList.add("ativo");
      getDtFaqList[0].nextElementSibling.classList.add("ativo");
  
      function tabDtEvent() {
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");
      }
  
      getDtFaqList.forEach((item) => {
        item.addEventListener("click", tabDtEvent);
      });
    }
  }
