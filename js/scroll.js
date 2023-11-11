class Scroll {
  constructor() {
    this.currentListenerClb = null;
  }

  horizontalScrollInit(scrollSelector) {
    const scrollContainer = document.querySelector(scrollSelector);

    if (scrollContainer) {
      let mouseDown = false;
      let startX;
      let scrollLeftScroll;
      const scrollSpeed = 1.5;

      scrollContainer.addEventListener("mousedown", (e) => {
        mouseDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeftScroll = scrollContainer.scrollLeft;
      });

      scrollContainer.addEventListener("mousemove", (e) => {
        if (!mouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * scrollSpeed;
        scrollContainer.scrollLeft = scrollLeftScroll - walk;
      });

      scrollContainer.addEventListener("mouseup", () => {
        mouseDown = false;
      });

      scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      });
    }

    return this;
  }

  verticalScrollInit(scrollSelector) {
    const scrollContainer = document.querySelector(scrollSelector);
    const body = scrollContainer.closest(".dropdown__body");

    if(scrollContainer.scrollHeight === scrollContainer.clientHeight) {
        body.classList.add("end");
    } else {
        body.classList.remove("end");
    }
  
    const clb = () => {
      if (scrollContainer.scrollHeight < scrollContainer.scrollTop + scrollContainer.clientHeight + 20) {
        body.classList.add("end");
      } else {
        body.classList.remove("end");
      }
    };

    if (this.currentListenerClb) {
      scrollContainer.removeEventListener("scroll", this.currentListenerClb);
    }

    this.currentListenerClb = clb;
    scrollContainer.addEventListener("scroll", clb);

    return this;
  }
}

export default new Scroll();
