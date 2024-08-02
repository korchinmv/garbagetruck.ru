import {
  menuSearch,
  menuCatalog,
  menuServices,
  buttonSearch,
  buttonCatalog,
  buttonServices,
  overlay,
  burger,
  body,
  mobileMenu,
  burgerButton,
} from "../_vars.js";

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("overlay--visible")) {
    buttonCatalog.classList.remove("menu__link--catalog__active");
    buttonSearch.classList.remove("header__search-btn--active");
    buttonServices.classList.remove("menu__link--services__active");
    menuSearch.classList.remove("header-search--visible");
    menuCatalog.classList.remove("header-catalog--visible");
    menuServices.classList.remove("header-services--visible");
    burger.classList.remove("hamburger-lines--active");
    overlay.classList.remove("overlay--visible");
    body.classList.remove("page__body--no-scroll");

    //Скрываем моб. меню по клику на оверлей
    mobileMenu.classList.remove("mobile-menu--active");
    burgerButton.classList.remove("hamburger-lines--active");
  }
});
