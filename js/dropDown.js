import { CheckBoxList } from "./CheckBoxList.js";
import { TabList } from "./TabList.js";
import { ActiveList } from "./ActiveList.js";
import Scroll from "./Scroll.js";

export class Dropdown {
  /**
   * 
   * @param {HTMLElement} dropEl 
   */
  constructor(dropEl) {
    this.dropdown = dropEl;
    this.toggleBtn = this.dropdown.querySelector(".dropdown__toggle");
    this.dropdownContent = this.dropdown.querySelector(".dropdown__body");
    this.countContainer = this.dropdown.querySelector('.dropdown__count');
    this.tabsContainer = this.dropdown.querySelector(".dropdown__tabs");
    this.activeListContainer = this.dropdown.querySelector(".dropdown__active-list");
    this.checkBoxes = this.dropdown.querySelectorAll(".dropdown__item input");

    this.clickHandler = this.clickHandler.bind(this);
    this.dropdown.addEventListener("click", this.clickHandler);

    new TabList(this.tabsContainer);
    this.activeList = new ActiveList(this.dropdown, this.activeListContainer, this.countContainer);
    new CheckBoxList(this.checkBoxes, this.activeList);
   
  }

  clickHandler(e) {
    if (e.target.parentNode !== this.toggleBtn && e.target !== this.toggleBtn) return;

    this.dropdown.classList.toggle('open');
    Scroll.verticalScrollInit(".dropdown__tab-content");
  }
}
