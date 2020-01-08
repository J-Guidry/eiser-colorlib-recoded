const headerNav = document.querySelector(".header-nav");
const mobileToggle = document.querySelector(".toggle-nav");
const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
const navList = document.querySelector(".nav-list");

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
});