import {
  buttonsListType,
  buttonList,
  buttonGrid,
  newsList,
  newsCards,
} from "../_vars.js";

if (buttonsListType) {
  buttonsListType.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttonsListType.forEach((btn) => {
        btn.classList.remove("list-type__btn--active");
      });

      if (!button.classList.contains("list-type__btn--active")) {
        button.classList.add("list-type__btn--active");
      }
    });
  });
}

if (buttonList) {
  buttonList.addEventListener("click", () => {
    newsList.classList.remove("news-page__list--grid");

    newsCards.forEach((card) => {
      card.classList.add("news-card--list");
    });
  });
}

if (buttonGrid) {
  buttonGrid.addEventListener("click", () => {
    newsList.classList.add("news-page__list--grid");

    newsCards.forEach((card) => {
      card.classList.remove("news-card--list");
    });
  });
}
