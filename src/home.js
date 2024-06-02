import leftContainerImage from "./main_page_image.png";
import rightContainerImage from "./right_container_image.jpg";

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

  const rightContainer = document.createElement("div");
  rightContainer.className = "right-container";
  rightContainer.id = "right-container";
  const rightHomeImage = document.createElement("img");
  rightHomeImage.src = rightContainerImage;
  rightContainer.appendChild(rightHomeImage);

  contentContainer.appendChild(leftContainer);
  contentContainer.appendChild(rightContainer);

  mainContainer.appendChild(contentContainer);
}
