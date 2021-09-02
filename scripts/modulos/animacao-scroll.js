export default function animacaoAoScrollar() {
    const sections = document.querySelectorAll("[data-scroll]");
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
