const thumbnails = document.querySelectorAll(".thumbnail");
const increaseArrow = document.querySelector(".increase");
const decreaseArrow = document.querySelector(".decrease");
const quantity = document.querySelector(".quantity-input");
const tablinks = document.querySelector(".tab-links");
const tabs = tablinks.querySelectorAll("a");
const panels = document.querySelectorAll(".panel");

const slider = tns({
    container: ".image-carousel",
    items: 1,
    slideBy: "page",
    //mouseDrag: true,
    swipeAngle: false,
    autoplay: true,
    speed: 400,
    controls: false,
    navContainer: "#carousel-thumbnails",
    navPosition: "top",
    navAsThumbnails: true
});


thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function(event){
    
    thumbnails.forEach(function(thumb) {
      if(thumb.classList.contains("thumb-indicator")) {
        thumb.classList.toggle("thumb-indicator");
      }
    });

    thumbnail.classList.toggle("thumb-indicator");
  });
});

increaseArrow.addEventListener("click", ()=> quantity.value++);
decreaseArrow.addEventListener("click", ()=> {
  if(quantity.value > 0){
    quantity.value--;
  }
});

// activate panels and change aria attributes when switching tabs
function switchTab(oldTab, chosenTab) {
  chosenTab.focus();
  chosenTab.setAttribute("aria-selected", "true");
  chosenTab.classList.toggle("tab-active");
  oldTab.setAttribute("aria-selected", 'false');
  oldTab.classList.toggle("tab-active");
  let index = Array.prototype.indexOf.call(tabs,chosenTab);
  let oldIndex = Array.prototype.indexOf.call(tabs,oldTab);
  panels[oldIndex].classList.toggle("panel-active");
  panels[oldIndex].setAttribute("aria-hidden", "true");
  panels[index].classList.toggle("panel-active");
  panels[index].setAttribute("aria-hidden", "false");
}

// add click and keyboard event listeners to tabs
tabs.forEach(function(tab, i) {
  tab.addEventListener("click", function(event) {
      event.preventDefault();
      const currentlySelectedTab = document.querySelector('[aria-selected="true"]');
      const newlySelectedTab = event.currentTarget;
      if (currentlySelectedTab !== newlySelectedTab) {
          switchTab(currentlySelectedTab, newlySelectedTab);
      }
  });
  
  tab.addEventListener('keydown', e => {  
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      let dir = e.which === 37 ? index - 1 
              : e.which === 39 ? index + 1 
              : e.which === 40 ? 'down' : null;

      if (dir !== null) {
          e.preventDefault();
          dir === 'down' ? panels[i].focus() 
              : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) 
              : void 0;
      }
  });

});