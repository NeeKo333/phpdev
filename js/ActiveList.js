export class ActiveList {
  /**
   * 
   * @param {HTMLElement} dropdown 
   * @param {HTMLElement} activeListContainer 
   * @param {HTMLElement} countContainer 
   */
    constructor(dropdown, activeListContainer, countContainer) {
        this.dropdown = dropdown;
        this.activeList = activeListContainer;
        this.activeListArray = [];
        this.countContainer = countContainer;
        this.template = document.querySelector('.template');

        this.removeFilterFromList = this.removeFilterFromList.bind(this);
        this.activeList.addEventListener("click", this.removeFilterFromList);
    }

      removeFilterFromList(e) {
        if (e.target.classList.contains("close-icon")) {
          const parentNode = e.target.closest(".active-list-item");
          const id = parentNode.dataset.parentid;
          this.removeFilter(id);
        }
      }
    
      addFilter(filter) {
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
        const container = this.template.cloneNode(true);
        container.classList.remove('template')
        container.dataset.parentid = id;
        container.insertAdjacentText('afterbegin', text)
        return container;
      }
    
      updateCount() {
        if(this.activeListArray.length) {
            this.countContainer.classList.add('show');
            this.dropdown.classList.add('filled');
        } else {
            this.countContainer.classList.remove('show');
            this.dropdown.classList.remove('filled');
        }
      
        this.countContainer.textContent = this.activeListArray.length
      }
}

