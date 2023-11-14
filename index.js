import { Dropdowns } from "./js/DropDowns.js";
import Scroll from "./js/Scroll.js";

window.addEventListener("DOMContentLoaded", () => {
  // This solution is needed to reset active checkboxes after reloading the page in Firefox.
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  checkBoxes.forEach((el) => {
    el.checked = false;
  });

  new Dropdowns(".dropdown").init();
  Scroll
        .horizontalScrollInit(".dropdown__active-list")
        .horizontalScrollInit(".dropdown__tabs")
});
