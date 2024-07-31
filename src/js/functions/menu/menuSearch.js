const buttonSearch = document?.querySelector(".header__search-btn");
const menuSearch = document?.querySelector(".header-search");
const body = document?.querySelector(".page__body");
const overlay = document?.querySelector(".overlay");

buttonSearch.addEventListener("click", () => {
  buttonSearch.classList.toggle("header__search-btn--active");

  if (buttonSearch.classList.contains("header__search-btn--active")) {
    menuSearch.classList.add("header-search--visible");
    overlay.classList.add("overlay--visible");
    body.classList.add("page__body--no-scroll");
  } else {
    menuSearch.classList.remove("header-search--visible");
    body.classList.remove("page__body--no-scroll");
    overlay.classList.remove("overlay--visible");
  }
});
