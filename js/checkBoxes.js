export class CheckBoxes {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.dropdownItems = this.dropdown.querySelectorAll(".dropdown__item");
    this.activeList = this.dropdown.querySelector(".dropdown__active-list");
    this.activeListArray = [];
    this.countContainer = this.dropdown.querySelector(".dropdown__count");

    this.checkBoxHandler = this.checkBoxHandler.bind(this);
    this.dropdownItems.forEach((item) => {
      item.addEventListener("change", this.checkBoxHandler);
    });

    this.removeFilterFromList = this.removeFilterFromList.bind(this);
    this.activeList.addEventListener("click", this.removeFilterFromList);
  }

  checkBoxHandler(e) {
    const checkBox = e.currentTarget.querySelector("input[type='checkbox']");
    const label = e.currentTarget.querySelector("label");

    if (checkBox.checked) {
      this.addFilterToList({ text: label.textContent, parentId: checkBox.id });
    } else {
      this.removeFilter(checkBox.id);
    }
  }

  removeFilterFromList(e) {
    if (e.target.classList.contains("close-icon")) {
      const parentNode = e.target.closest(".active-list-item");
      const id = parentNode.dataset.parentid;
      this.removeFilter(id);
    }
  }

  addFilterToList(filter) {
    const newItem = this.buildActiveListNode(filter.text, filter.parentId);
    this.activeList.appendChild(newItem);
    this.activeListArray.push(filter.parentId);
    this.updateCount();
  }

  removeFilter(id) {
    const targetNode = this.activeList.querySelector(`[data-parentid=${id}]`);
    const checkBox = document.getElementById(id);

    targetNode.remove();
    checkBox.checked = false;
    this.activeListArray = this.activeListArray.filter(el => el !== id);
    this.updateCount();
  }

  buildActiveListNode(text, id) {
    const container = document.createElement("div");
    const closeIcon = document.createElement("img");

    closeIcon.src = "./assets/Close.svg";
    closeIcon.classList.add("close-icon");

    container.classList.add("active-list-item");
    container.dataset.parentid = id;
    container.textContent = text;
    container.appendChild(closeIcon);
    return container;
  }

  updateCount() {
    if(this.activeListArray.length) {
      this.countContainer.classList.add('show')
      this.dropdown.classList.add('filled')
    } else {
      this.countContainer.classList.remove('show');
      this.dropdown.classList.remove('filled')
    }
     
           
          

    this.countContainer.textContent = this.activeListArray.length
  }
}
