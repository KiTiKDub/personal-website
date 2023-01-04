const buttons = document.querySelectorAll("[data-slider-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sliderButton === "nextone" ? 1 : -1
    const items = button.closest("[data-slider]").querySelector("[data-items]")

    const activeItems =  items.querySelector("[data-active]");
    let newIndex = [...items.children].indexOf(activeItems) + offset

    if(newIndex < 0) newIndex = items.children.length - 1
    if(newIndex >= items.children.length) newIndex = 0;

    items.children[newIndex].dataset.active = true
    delete activeItems.dataset.active
  })
})