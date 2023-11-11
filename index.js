import { Dropdowns } from "./js/dropDowns.js";

window.addEventListener("DOMContentLoaded", () => {
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  checkBoxes.forEach((el) => {
    el.checked = false;
  });

  new Dropdowns(".dropdown").init();
});
