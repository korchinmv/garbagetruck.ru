import {
  mobileMenu,
  burgerButton,
  overlay,
  body,
  dropdown,
} from "../../_vars.js";
import { getHeaderHeight } from "../../functions/header-height.js";

const dropdownArray = Array.prototype.slice.call(dropdown, 0);

if (dropdownArray) {
  dropdownArray.forEach((el) => {
    const button = el.querySelector('span[data-toggle="dropdown"]');
    const dropdownMenu = el.querySelector(".mobile-menu__dropdown-menu");

    if (button) {
      button.addEventListener("click", () => {
        if (!dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.add("show");
          dropdownMenu.classList.remove("hide");
        } else {
          dropdownMenu.classList.remove("show");
          dropdownMenu.classList.add("hide");
        }
      });
    }
  });
}

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu--active");
    burgerButton.classList.toggle("hamburger-lines--active");
  });
}

getHeaderHeight();
