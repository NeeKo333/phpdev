import emiter from "./EventEmiter.js";

export class CheckBoxList {
  /**
   * 
   * @param {HTMLCollection} checkBoxes 
   */
  constructor(checkBoxes) {
    this.checkBoxes = checkBoxes;

    this.checkBoxHandler = this.checkBoxHandler.bind(this);
    this.checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener("change", this.checkBoxHandler);
    });

  }

  checkBoxHandler(e) {
    const checkBox = e.currentTarget
    const label = checkBox.parentNode.querySelector("label");

    if (checkBox.checked) {
      emiter.dispatch('addFilter', { text: label.textContent, parentId: checkBox.id })
    } else {
      emiter.dispatch('removeFilter', checkBox.id)
    }
  }
}
