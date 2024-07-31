const buttonCatalog = document?.querySelector(".menu__link--catalog");
const burger = document?.querySelector(".hamburger-lines");
const menuCatalog = document?.querySelector(".header-catalog");
const body = document?.querySelector(".page__body");
const overlay = document?.querySelector(".overlay");

buttonCatalog.addEventListener("click", () => {
  buttonCatalog.classList.toggle("menu__link--catalog__active");
  burger.classList.toggle("hamburger-lines--active");

  if (buttonCatalog.classList.contains("menu__link--catalog__active")) {
    menuCatalog.classList.add("header-catalog--visible");
    overlay.classList.add("overlay--visible");
    body.classList.add("page__body--no-scroll");
  } else {
    menuCatalog.classList.remove("header-catalog--visible");
    body.classList.remove("page__body--no-scroll");
    overlay.classList.remove("overlay--visible");
  }
});
