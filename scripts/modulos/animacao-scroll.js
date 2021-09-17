export default function animacaoAoScrollar() {
  const sections = document.querySelectorAll("[data-scroll]");
  function scrollEventSections() {
    sections.forEach((item) => {
      const windowMetade = window.innerHeight * 0.6;
      const positionItemTop = item.getBoundingClientRect().top;
      const isSectionVisible = positionItemTop - windowMetade < 0;
      if (isSectionVisible) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    scrollEventSections();

    window.addEventListener("scroll", scrollEventSections);
  }
}
