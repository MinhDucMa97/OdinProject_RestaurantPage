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
  leftContainer.appendChild(leftHomeImage);

  const middleContainer = document.createElement("div");
  middleContainer.className = "middle-container";
  middleContainer.id = "middle-container";
  const middleHomeImage = document.createElement("img");
  middleHomeImage.src = middleContainerImage;
  middleContainer.appendChild(middleHomeImage);

  const rightContainer = document.createElement("div");
  rightContainer.className = "right-container";
  rightContainer.id = "right-container";
  const rightHomeImage = document.createElement("img");
  rightHomeImage.src = rightContainerImage;
  rightContainer.appendChild(rightHomeImage);

  contentContainer.appendChild(leftContainer);
  contentContainer.appendChild(middleContainer);
  contentContainer.appendChild(rightContainer);

  mainContainer.appendChild(contentContainer);
}
