import { CheckBoxes } from "./checkBoxes.js";
import { Tabs } from "./tabs.js";
import Scroll from "./scroll.js";

export class Dropdown {
  /**
   * 
   * @param {HTMLElement} dropEl 
   */
  constructor(dropEl) {
    this.dropdown = dropEl;
    this.toggleBtn = this.dropdown.querySelector(".dropdown__toggle");
    this.dropdownContent = this.dropdown.querySelector(".dropdown__body");
    this.tabsContainer = this.dropdown.querySelector(".dropdown__tabs");

    this.clickHandler = this.clickHandler.bind(this);
    this.dropdown.addEventListener("click", this.clickHandler);

    new CheckBoxes(this.dropdown);
    new Tabs(this.tabsContainer);
  }

  clickHandler(e) {
    if (e.target.parentNode !== this.toggleBtn && e.target !== this.toggleBtn) return;

    this.dropdown.classList.toggle('open');
    Scroll
          .verticalScrollInit(".dropdown__tab-content");
  }
}
