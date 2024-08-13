import {
  selectMenu,
  selectBtn,
  selectArrayOptions,
  selectBtnWrapper,
} from "../_vars.js";

selectBtnWrapper.addEventListener("click", () =>
  selectMenu.classList.toggle("select-menu--active")
);

selectArrayOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectBtn.innerText = option.innerText;
    selectMenu.classList.remove("select-menu--active");
  });
});
