import noUiSlider from "nouislider";
import {
  filterRangeSlider,
  inputs,
  inputFirst,
  inputSecond,
  openFilterBtn,
  filterElement,
  closeFilterBtn,
  overlay,
} from "../_vars.js";

if (openFilterBtn) {
  openFilterBtn.addEventListener("click", () => {
    filterElement.classList.add("catalog__filter--active");
  });

  closeFilterBtn.addEventListener("click", () => {
    filterElement.classList.remove("catalog__filter--active");
  });
}

noUiSlider.create(filterRangeSlider, {
  start: [0, 20000000],
  step: 1000,
  range: {
    min: [0],
    max: [20000000],
  },
  format: {
    to: (v) => v | 0,
    from: (v) => v | 0,
  },
});

filterRangeSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];
});

inputFirst.addEventListener("change", function () {
  console.log(this.value);

  filterRangeSlider.noUiSlider.set([this.value, null]);
});

inputSecond.addEventListener("change", function () {
  filterRangeSlider.noUiSlider.set([null, this.value]);
});
