import pageBackground from "./restaurant-about.jpg";

export default function aboutPageLoading() {
	const mainContainer = document.getElementById("content");

	mainContainer.innerHTML = "";

	const aboutPageContainer = document.createElement("div");
	aboutPageContainer.className = "about-page-container";
	aboutPageContainer.id = "about-page-container";
	aboutPageContainer.style.backgroundImage = `url(${pageBackground})`;

	mainContainer.appendChild(aboutPageContainer);
}
