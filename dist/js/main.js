const headerNav = document.querySelector(".header-nav");
const mobileToggle = document.querySelector(".toggle-nav");

function toggleNav() {
    headerNav.classList.toggle("nav-active");
    mobileToggle.children[0].classList.toggle("turn-cross-1");
    mobileToggle.children[1].classList.toggle("invisible");
    mobileToggle.children[2].classList.toggle("turn-cross-3");
}
mobileToggle.addEventListener("click", toggleNav);