const overlay = document?.querySelector(".overlay");

const menuSearch = document?.querySelector(".header-search");
const menuCatalog = document?.querySelector(".header-catalog");

const buttonSearch = document?.querySelector(".header__search-btn");
const buttonCatalog = document?.querySelector(".menu__link--catalog");
const burger = document?.querySelector(".hamburger-lines");

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("overlay--visible")) {
    menuSearch.classList.remove("header-search--visible");
    overlay.classList.remove("overlay--visible");
    buttonSearch.classList.remove("header__search-btn--active");
    buttonCatalog.classList.remove("menu__link--catalog__active");
    menuCatalog.classList.remove("header-catalog--visible");
    burger.classList.remove("hamburger-lines--active");
  }
});
