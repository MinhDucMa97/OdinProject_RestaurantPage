import "./style.css";
import Logo from "./logo.jpg";
import homePageLoading from "./home.js";
import menuPageLoading from "./menu.js";
import aboutPageLoading from "./about.js";

homePageLoading();

const logoImage = document.getElementById("logo-img");
logoImage.src = Logo;
logoImage.addEventListener("click", homePageLoading);

const headerButtons = document.querySelectorAll(".header-btn");

function handleClick(event) {
	if (event.target.classList.contains("menuBtn")) {
		menuPageLoading();
	} else if (event.target.classList.contains("homeBtn")) {
		homePageLoading();
	} else if (event.target.classList.contains("aboutBtn")) {
		aboutPageLoading();
	}
}

headerButtons.forEach((button) => {
	button.addEventListener("click", handleClick);
});
