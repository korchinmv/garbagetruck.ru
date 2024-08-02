import {
  buttonServices,
  menuServices,
  menuCatalog,
  burger,
  buttonCatalog,
  menuSearch,
  buttonSearch,
  overlay,
  body,
} from "../../_vars.js";

if (buttonServices) {
  buttonServices.addEventListener("click", () => {
    buttonServices.classList.toggle("menu__link--services__active");

    if (buttonServices.classList.contains("menu__link--services__active")) {
      menuServices.classList.add("header-services--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");

      if (menuCatalog.classList.contains("header-catalog--visible")) {
        console.log(123);
        menuCatalog.classList.remove("header-catalog--visible");
        burger.classList.remove("hamburger-lines--active");
        buttonCatalog.classList.remove("menu__link--catalog__active");
      }

      if (menuSearch.classList.contains("header-search--visible")) {
        menuSearch.classList.remove("header-search--visible");
        buttonSearch.classList.remove("header__search-btn--active");
      }
    } else {
      menuServices.classList.remove("header-services--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
