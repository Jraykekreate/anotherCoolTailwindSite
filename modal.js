const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const menuChildren = document.querySelectorAll("#menu a");
let pageProp = document.documentElement;
function relmotion() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  if (scrollPosition >= windowHeight + 40) {
    menuChildren.forEach((child) => {
      child.classList.add("text-5xl");
      child.style.filter = "blur(5px)";
      menu.classList.add("gap-10");
      child.classList.remove("space-y-3");
      child.style.pointerEvents = "none";
    });
  } else {
    menuChildren.forEach((child) => {
      child.style.filter = "none";
      child.classList.remove("text-5xl");
      child.classList.remove("blur-sm");
      child.style.pointerEvents = "auto";
    });
  }
}
window.addEventListener("scroll", relmotion);

function coolBackground() {}

button.addEventListener("click", navToggle);
function navToggle() {
  button.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
