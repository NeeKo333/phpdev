
export class CheckBoxList {
  /**
   * 
   * @param {HTMLCollection} checkBoxes 
   * @param {ActiveList} activeListInstance 
   */
  constructor(checkBoxes, activeListInstance) {
    this.checkBoxes = checkBoxes;
    this.activeList = activeListInstance;

    this.checkBoxHandler = this.checkBoxHandler.bind(this);
    this.checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener("change", this.checkBoxHandler);
    });

  }

  checkBoxHandler(e) {
    const checkBox = e.currentTarget
    const label = checkBox.parentNode.querySelector("label");

    if (checkBox.checked) {
      this.activeList.addFilter({ text: label.textContent, parentId: checkBox.id });
    } else {
      this.activeList.removeFilter(checkBox.id);
    }
  }
}
