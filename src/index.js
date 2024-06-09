import "./style.css";
import Logo from "./logo.jpg";
import homePageLoading from "./home.js";
import menuPageLoading from "./menu.js";

homePageLoading();

const logoImage = document.getElementById("logo-img");
logoImage.src = Logo;
logoImage.addEventListener("click", homePageLoading);

const headerButtons = document.querySelectorAll(".header-btn");
console.log(headerButtons);

function handleClick(event) {
  if (event.target.classList.contains("menuBtn")) {
    menuPageLoading();
  } else if (event.target.classList.contains("homeBtn")) {
    homePageLoading();
  } else if (event.target.classList.contains("aboutBtn")) {
    alert("Page is on building process");
  }
}

headerButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
