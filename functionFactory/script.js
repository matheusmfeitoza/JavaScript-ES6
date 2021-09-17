function $$(pretenders) {
  const elements = document.querySelectorAll(pretenders);

  function hide() {
    elements.forEach((item) => {
      item.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach((item) => {
      item.style.display = "initial";
    });
    return this;
  }
  function on(evento, callback) {
    elements.forEach((item) => {
      item.addEventListener(evento, callback);
    });
    return this;
  }
  function addClass(classe) {
    elements.forEach((item) => {
      item.classList.add(classe);
    });
    return this;
  }

  function removeClass(classe) {
    elements.forEach((item) => {
      item.classList.remove(classe);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const buttons = $$("button");
buttons.hide().show();

function handleClick(event) {
  buttons.addClass("active");
  console.log(event.target);
}

buttons.on("click", handleClick);
