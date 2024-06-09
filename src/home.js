import leftContainerImage from "./picture.png";
import rightContainerImage from "./vietnamese_chef.jpg";
import middleContainerImage from "./restaurant.jpg";

export default function homePageLoading() {
  const mainContainer = document.getElementById("content");

  mainContainer.innerHTML = "";

  const contentContainer = document.createElement("div");
  contentContainer.className = "home-page-container";
  contentContainer.id = "home-page-container";

  const leftContainer = document.createElement("div");
  leftContainer.id = "left-container";
  leftContainer.className = "left-container";
  const leftHomeImage = document.createElement("img");
  leftHomeImage.src = leftContainerImage;
  const leftHomeButton = document.createElement("button");
  leftHomeButton.className = "overlay-button left-overlay-btn";
  leftHomeButton.id = "left-overlay-btn";
  leftHomeButton.textContent = "Menu";
  leftContainer.appendChild(leftHomeImage);
  leftContainer.appendChild(leftHomeButton);

  const middleContainer = document.createElement("div");
  middleContainer.className = "image-blur middle-container";
  middleContainer.id = "middle-container";
  const middleHomeImage = document.createElement("img");
  middleHomeImage.src = middleContainerImage;
  const middleHomeButton = document.createElement("button");
  middleHomeButton.className = "overlay-button middle-overlay-btn";
  middleHomeButton.id = "middle-overlay-btn";
  middleHomeButton.textContent = "Location";
  middleContainer.appendChild(middleHomeImage);
  middleContainer.appendChild(middleHomeButton);

  const rightContainer = document.createElement("div");
  rightContainer.className = "right-container";
  rightContainer.id = "right-container";
  const rightHomeImage = document.createElement("img");
  rightHomeImage.src = rightContainerImage;
  const rightHomeButton = document.createElement("button");
  rightHomeButton.className = "overlay-button right-overlay-btn";
  rightHomeButton.id = "right-overlay-btn";
  rightHomeButton.textContent = "About";
  rightContainer.appendChild(rightHomeImage);
  rightContainer.appendChild(rightHomeButton);

  contentContainer.appendChild(leftContainer);
  contentContainer.appendChild(middleContainer);
  contentContainer.appendChild(rightContainer);

  mainContainer.appendChild(contentContainer);
}
