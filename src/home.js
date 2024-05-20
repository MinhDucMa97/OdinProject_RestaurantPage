import mainPageImage from "./main_page_image.png";

export function homePageLoading() {
	const contentContainer = document.createElement("div");
	contentContainer.className = "home-page-container";

	const leftContainer = document.createElement("div");
	const pageImage = document.createElement("img");
	pageImage.src = mainPageImage;
	leftContainer.className = "left-container";
	leftContainer.appendChild(pageImage);

	const rightContainer = document.createElement("div");
	rightContainer.className = "right-container";

	contentContainer.appendChild(leftContainer, rightContainer);
}
