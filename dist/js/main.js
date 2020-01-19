const headerNav = document.querySelector(".header-nav");
const mobileToggle = document.querySelector(".toggle-nav");
const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
const navList = document.querySelector(".nav-list");
const header = document.querySelector(".main-menu");
//const categoryDropdowns = document.querySelectorAll(".product-dropdown");


function toggleNav() {
    headerNav.classList.toggle("nav-active");
    mobileToggle.children[1].classList.toggle("turn-cross-1");
    mobileToggle.children[2].classList.toggle("invisible");
    mobileToggle.children[3].classList.toggle("turn-cross-3");
    if(mobileToggle.getAttribute("aria-expanded") === "false"
    && navList.getAttribute("aria-hidden") === "true") {
        mobileToggle.setAttribute("aria-expanded", "true");
        navList.setAttribute("aria-hidden", "false");
    } else {
        mobileToggle.setAttribute("aria-expanded", "false");
        navList.setAttribute("aria-hidden", "true");
    }
    
}
mobileToggle.addEventListener("click", toggleNav);

function toggleDropdown(){
    const dropdown =  event.target.nextElementSibling;
    dropdown.classList.toggle("show");
    if(dropdown.getAttribute("aria-hidden") === "true") {
        navList.setAttribute("aria-hidden", "false");
    } else {
        navList.setAttribute("aria-hidden", "true");
    }
}

dropdownToggle.forEach(function(toggle) {
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("focusout", toggleDropdown);
});

function toggle(){
    window.scrollY > 80 ? 
    header.classList.add("scroll-header") :
    header.classList.remove("scroll-header");
}

window.addEventListener("scroll", toggle, {passive: true});
window.addEventListener("touchmove", toggle, {passive: true});

//import SlimSelect from 'slim-select'

new SlimSelect({
  select: '.p-sort',
});

new SlimSelect({
    select: '.p-show',
  });

  var slider = document.getElementById("price-slider");
  var output = document.getElementById("price");
  output.textContent += slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.textContent = this.value;
  }

// function switchLi(oldTab, chosenTab) {
//     chosenTab.focus();
//     //chosenTab.setAttribute("aria-selected", "true");
//     chosenTab.classList.toggle("selected");
//     //oldTab.setAttribute("aria-selected", 'false');
//     oldTab.classList.toggle("selected");
//     let index = Array.prototype.indexOf.call(categoryDropdowns,chosenTab);
//     let oldIndex = Array.prototype.indexOf.call(categoryDropdowns,oldTab);
//     // panels[oldIndex].classList.toggle("active");
//     // panels[oldIndex].setAttribute("aria-hidden", "true");
//     // panels[index].classList.toggle("active");
//     // panels[index].setAttribute("aria-hidden", "false");
// }

// categoryDropdowns.forEach(function(Li, i) {
    
//     Li.addEventListener('keydown', e => { 
//         Li.focus(); 
//         let index = Array.prototype.indexOf.call(categoryDropdowns, e.currentTarget);
//         console.log(index);
//         let dir = e.which === 38 ? index - 1 
//                 : e.which === 40 ? index + 1 
//                 : e.which === 27 ? 'escape' : null;

//         if (dir !== null) {
//             e.preventDefault();
//             dir === 'escape' ? Li.blur() 
//                 : categoryDropdowns[dir] ? switchLi(e.currentTarget, categoryDropdowns[dir]) 
//                 : void 0;
//         }
//     });

// });