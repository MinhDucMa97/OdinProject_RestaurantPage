import "./style.css";
import Logo from "./logo.jpg";
import homePageLoading from "./home.js";

homePageLoading();

const logoImage = document.getElementById("logo-img");
logoImage.src = Logo;
logoImage.addEventListener("click", homePageLoading);

document.addEventListener("DOMContentLoaded", () => {});
