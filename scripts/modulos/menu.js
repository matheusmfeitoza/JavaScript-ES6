export default function tabMenuActive() {
    const getMenuLi = document.querySelectorAll("[data-tab-menu] li");
    const getMenuContent = document.querySelectorAll("[data-tab-content] section");
  
  
  
  
    if (getMenuLi.length && getMenuContent.length) {
      getMenuContent[0].classList.add("ativo");
  
      function tabAtivo(index) {
        getMenuContent.forEach((item) => {
          item.classList.remove("ativo");
        });
        const datasetName = getMenuContent[index].dataset.anime;
        getMenuContent[index].classList.add("ativo",datasetName);
      }
  
      getMenuLi.forEach((item, index) => {
        item.addEventListener("click", () => {
          tabAtivo(index);
        });
      });
    }
  }
