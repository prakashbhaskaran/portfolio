let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let cursor = document.querySelector(".cursor");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
