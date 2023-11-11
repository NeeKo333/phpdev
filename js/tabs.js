import Scroll from "./scroll.js";

export class Tabs {
  constructor(tabsContainer) {
    this.tabsContainer = tabsContainer;
    this.tabs = this.tabsContainer.querySelectorAll(".dropdown__tab");
    this.tabsContent = document.querySelector(".dropdown__tab-content");
    this.tabsPanes = this.tabsContent.querySelectorAll(".dropdown__pane");

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

    Scroll.verticalScrollInit(".dropdown__tab-content");
  }
}
