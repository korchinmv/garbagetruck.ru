const body = document?.querySelector(".page__body");
const burger = document?.querySelector(".hamburger-lines");
const overlay = document?.querySelector(".overlay");
const buttonSearch = document?.querySelector(".header__search-btn");
const buttonCatalog = document?.querySelector(".menu__link--catalog");
const buttonServices = document?.querySelector(".menu__link--services");
const menuSearch = document?.querySelector(".header-search");
const menuCatalog = document?.querySelector(".header-catalog");
const menuServices = document?.querySelector(".header-services");
const mobileMenu = document?.querySelector(".mobile-menu");
const burgerButton = document?.querySelector(".hamburger-lines--mobile-menu");
const dropdown = document?.querySelectorAll(".dropdown");

export {
  menuSearch,
  menuCatalog,
  menuServices,
  buttonSearch,
  buttonCatalog,
  buttonServices,
  mobileMenu,
  burgerButton,
  overlay,
  burger,
  body,
  dropdown,
};
