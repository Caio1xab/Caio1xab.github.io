const mobileBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
