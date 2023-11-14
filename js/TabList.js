import Scroll from "./Scroll.js";

export class TabList {
  /**
   * 
   * @param {HTMLElement} tabsContainer 
   */
  constructor(tabsContainer) {
    this.tabsContainer = tabsContainer;
    this.tabs = this.tabsContainer.querySelectorAll(".dropdown__tab");
    this.tabsPanes = document.querySelectorAll(".dropdown__pane");

    this.switchTab = this.switchTab.bind(this);
    this.tabs.forEach((tab) => tab.addEventListener("click", this.switchTab));
  }

  switchTab(e) {
    const currentTab = e.currentTarget;
    const paneId = currentTab.dataset.pane;
    const currentPane = document.getElementById(paneId);

    this.tabs.forEach((tab) => tab.classList.remove("active"));
    this.tabsPanes.forEach((pane) => pane.classList.remove("active"));
    currentTab.classList.add("active");
    currentPane.classList.add("active");

    // This solution is needed to reinit vertical scroll after tab's content switch.
    Scroll.verticalScrollInit(".dropdown__tab-content");
  }
}
