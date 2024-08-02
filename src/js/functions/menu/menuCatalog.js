import {
  buttonCatalog,
  buttonServices,
  buttonSearch,
  menuCatalog,
  menuServices,
  menuSearch,
  burger,
  body,
  overlay,
} from "../../_vars.js";

if (buttonCatalog) {
  buttonCatalog.addEventListener("click", () => {
    buttonCatalog.classList.toggle("menu__link--catalog__active");
    burger.classList.toggle("hamburger-lines--active");

    if (buttonCatalog.classList.contains("menu__link--catalog__active")) {
      menuCatalog.classList.add("header-catalog--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");

      if (menuSearch.classList.contains("header-search--visible")) {
        menuSearch.classList.remove("header-search--visible");
        buttonSearch.classList.remove("header__search-btn--active");
      }

      if (menuServices.classList.contains("header-services--visible")) {
        menuServices.classList.remove("header-services--visible");
        buttonServices.classList.remove("menu__link--services__active");
      }
    } else {
      menuCatalog.classList.remove("header-catalog--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
