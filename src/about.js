import pageBackground from "./restaurant-about.jpg";

export default function aboutPageLoading() {
	const mainContainer = document.getElementById("content");

	mainContainer.innerHTML = "";

	const aboutPageContainer = document.createElement("div");
	aboutPageContainer.className = "about-page-container";
	aboutPageContainer.id = "about-page-container";

	const aboutPageIamge = document.createElement("div");
	aboutPageIamge.className = "about-page-image";
	aboutPageIamge.style.backgroundImage = `url(${pageBackground})`;
	aboutPageContainer.appendChild(aboutPageIamge);

	const overlayText = document.createElement("div");
	overlayText.className = "overlay-text";
	overlayText.id = "overlay-text";
	overlayText.textContent =
		"Welcome to Xich Lo, where the vibrant flavors of Vietnam come alive! Our family-owned restaurant offers an authentic culinary journey, featuring traditional dishes crafted with the freshest ingredients and time-honored recipes. From our fragrant pho to our savory bánh mì, each bite is a celebration of Vietnamese culture and cuisine. Join us for a warm and inviting dining experience that will transport your taste buds straight to the bustling streets of Saigon.";
	aboutPageContainer.appendChild(overlayText);

	mainContainer.appendChild(aboutPageContainer);
}
