export default function initialScrollSuave() {
  const getInternalLinks = document.querySelectorAll('[data-menu] a[href^="#"');
  function scrollSuaveSections(event) {
    event.preventDefault();
    const getHref = event.currentTarget.getAttribute("href");
    const section = document.querySelector(getHref);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (getInternalLinks.length) {
    getInternalLinks.forEach((link) => {
      link.addEventListener("click", scrollSuaveSections);
    });
  }
}
