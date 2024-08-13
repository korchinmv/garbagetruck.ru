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
const selectMenu = document?.querySelector(".select-menu");
const selectBtn = selectMenu?.querySelector(".select-menu__btn");
const selectBtnWrapper = selectMenu?.querySelector(".select-menu__btn-wrapper");
const selectArrayOptions = selectMenu?.querySelectorAll(".select-menu__option");
const buttonsListType = document?.querySelectorAll(".list-type__btn");
const buttonList = document?.querySelector(".btn-list");
const buttonGrid = document?.querySelector(".btn-grid");
const newsList = document?.querySelector(".news-page__list");
const newsCards = document?.querySelectorAll(".news-card");

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
  selectMenu,
  selectBtn,
  selectBtnWrapper,
  selectArrayOptions,
  buttonsListType,
  buttonList,
  buttonGrid,
  newsList,
  newsCards,
};
