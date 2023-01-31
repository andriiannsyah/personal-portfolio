const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("active");
  if (true) {
    navMenu.classList.toggle("active");
    console.log(navMenu);
  }
});
