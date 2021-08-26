function tabMenuActive() {
  const getMenuLi = document.querySelectorAll(".js-tabMenu li");
  const getMenuContent = document.querySelectorAll(".js-tabContent section");

  if (getMenuLi.length && getMenuContent.length) {
    getMenuContent[0].classList.add("ativo");

    function tabAtivo(index) {
      getMenuContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      getMenuContent[index].classList.add("ativo");
    }

    getMenuLi.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabAtivo(index);
      });
    });
  }
}
tabMenuActive();

function tabDtListActive() {
  const getDtFaqList = document.querySelectorAll(".js-faq-list dt");
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
tabDtListActive();

function initialScrollSuave() {
  const getInternalLinks = document.querySelectorAll('.js-menu a[href^="#"');
  if (getInternalLinks.length) {
    function scrollSuaveSections(event) {
      event.preventDefault();
      const getHref = event.currentTarget.getAttribute("href");
      const section = document.querySelector(getHref);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    getInternalLinks.forEach((link) => {
      link.addEventListener("click", scrollSuaveSections);
    });
  }
}
initialScrollSuave();

function animacaoAoScrollar() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function scrollEventSections() {
      sections.forEach((item) => {
        const positionItemTop = item.getBoundingClientRect().top;
        const isSectionVisible = (positionItemTop - windowMetade) < 0;
        if (isSectionVisible) {
          item.classList.add("ativo");
        }
      });
    }

    scrollEventSections();

    window.addEventListener("scroll", scrollEventSections);
  }
}
animacaoAoScrollar();
