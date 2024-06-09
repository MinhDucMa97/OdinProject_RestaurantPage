export default function menuPageLoading() {
  const mainContainer = document.getElementById("content");

  const menuPageContainer = document.createElement("div");
  menuPageContainer.className = "menu_page_container";
  menuPageContainer.id = "menu_page_container";

  mainContainer.appendChild(menuPageContainer);
}
