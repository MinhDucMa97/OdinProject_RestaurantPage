import mainPageImage from "./main_page_image.png";

export default function homePageLoading() {
	const mainContainer = document.getElementById("content");

	const contentContainer = document.createElement("div");
	contentContainer.className = "home-page-container";
	contentContainer.id = "home-page-container";

	const leftContainer = document.createElement("div");
	leftContainer.id = "left-container";
	leftContainer.className = "left-container";
	const pageImage = document.createElement("img");
	pageImage.src = mainPageImage;
	leftContainer.appendChild(pageImage);

	const rightContainer = document.createElement("div");
	rightContainer.className = "right-container";
	rightContainer.id = "right-container";

	contentContainer.appendChild(leftContainer);
	contentContainer.appendChild(rightContainer);

	mainContainer.appendChild(contentContainer);
}
