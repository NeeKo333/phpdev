import { Dropdown } from "./DropDown.js";

// This class is needed for cases where you add more than one dropdown.
export class Dropdowns {
  constructor(dropDownSelector) {
    this.dropDowns = document.querySelectorAll(dropDownSelector);
  }

  init() {
    this.dropDowns.forEach((dropDown) => new Dropdown(dropDown));
  }
}
