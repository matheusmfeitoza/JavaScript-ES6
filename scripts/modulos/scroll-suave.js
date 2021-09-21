export default class ScrollSuave {
  constructor(link, option) {
    this.links = document.querySelectorAll(link);
    if (option === undefined) {
      this.option = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.option = option;
    }
    this.scrollSuaveSections = this.scrollSuaveSections.bind(this);
  }

  scrollSuaveSections(event) {
    event.preventDefault();
    const getHref = event.currentTarget.getAttribute("href");
    const section = document.querySelector(getHref);
    section.scrollIntoView(this.option);
  }

  addLinkEvent() {
    this.links.forEach((link) => {
      link.addEventListener("click", this.scrollSuaveSections);
    });
  }

  init() {
    if (this.links.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
