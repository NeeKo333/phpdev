import { Dropdown } from "./dropDown.js";

export class Dropdowns {
  constructor(dropDownSelector) {
    this.dropDowns = document.querySelectorAll(dropDownSelector);
  }

  init() {
    this.dropDowns.forEach((dropDown) => new Dropdown(dropDown));
  }
}
