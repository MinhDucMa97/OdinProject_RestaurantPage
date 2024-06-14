export default function menuPageLoading() {
	const menuSelection = [
		{ name: "Beef Tenderloin Steak Salad", price: "$15.50" },
		{ name: "Pho Special", price: "$17.50" },
		{ name: "Grilled Pork Chop & Grilled Shrimp Rice Plate", price: "$17.95" },
	];

	const mainContainer = document.getElementById("content");

	mainContainer.innerHTML = "";

	const menuPageContainer = document.createElement("div");
	menuPageContainer.className = "menu_page_container";
	menuPageContainer.id = "menu_page_container";

	const menuHeader = document.createElement("h1");
	menuHeader.className = "menu-header";
	menuHeader.id = "menu-header";
	menuHeader.textContent = "Menu";
	menuPageContainer.appendChild(menuHeader);

	const menuContent = document.createElement("div");
	menuContent.className = "menu-content";
	menuContent.id = "menu-content";
	menuPageContainer.appendChild(menuContent);

	mainContainer.appendChild(menuPageContainer);
}
