const hamburgerIcon = document.querySelector(".header__nav-icon");
const mobileMenu = document.querySelector(".header__overlay");
const closeBtn = document.querySelector(".header__overlay-closebtn");

hamburgerIcon.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);

function toggleMenu() {
  mobileMenu.classList.add("open");
  document.body.style.overflowY = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  document.body.style.overflowY = "visible";
}
