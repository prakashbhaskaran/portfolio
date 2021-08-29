let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let cursor = document.querySelector(".cursor");

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailerror = document.querySelector(".emailerror");
const uname = document.querySelector("#name");
const unameerror = document.querySelector(".unameerror");
const text = document.querySelector("#text");
const gracias = document.querySelector(".gracias");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailchange() && namechange()) {
    const data = {
      username: uname.value,
      email: email.value,
      text: text.value,
    };
    form.style.display = "none";
    gracias.style.display = "block";
  }
});

function emailchange() {
  if (
    email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailerror.innerHTML = "";
    return true;
  } else {
    emailerror.innerHTML = "Invalid email";
  }
}

function namechange() {
  if (uname.value.length < 6) {
    unameerror.innerHTML = "Name must be greater than or equal to 6 characters";
  } else if (
    uname.value.match(/[^\w\s]/gi) ||
    uname.value.match(/\d+/) ||
    !uname.value.match(/^\S*$/)
  ) {
    unameerror.innerHTML = "No special characters or numbers or whitespaces ";
  } else {
    unameerror.innerHTML = "";
    return true;
  }
}
