import beefSalad from "./vietnamese-beef-salad.jpg";
import phoSpecial from "./pho-special.jpeg";
import ricePlate from "./porkchop-rice-plate.jpg";

export default function menuPageLoading() {
  const menuSelection = [
    { name: "Beef Tenderloin Steak Salad", price: "$15.50", image: beefSalad },
    { name: "Pho Special", price: "$17.50", image: phoSpecial },
    {
      name: "Grilled Pork Chop & Grilled Shrimp Rice Plate",
      price: "$17.95",
      image: ricePlate,
    },
  ];

  const mainContainer = document.getElementById("content");

  mainContainer.innerHTML = "";

  const menuPageContainer = document.createElement("div");
  menuPageContainer.className = "menu-page-container";
  menuPageContainer.id = "menu-page-container";

  const menuHeader = document.createElement("h1");
  menuHeader.className = "menu-header";
  menuHeader.id = "menu-header";
  menuHeader.textContent = "Menu";
  menuPageContainer.appendChild(menuHeader);

  const menuContent = document.createElement("div");
  menuContent.className = "menu-content";
  menuContent.id = "menu-content";

  menuSelection.forEach((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "menu-item";

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.className = "menu-item-image";

    const itemName = document.createElement("h3");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    const itemPrice = document.createElement("h4");
    itemPrice.className = "item-price";
    itemPrice.textContent = item.price;

    cardContainer.appendChild(itemImage);
    cardContainer.appendChild(itemName);
    cardContainer.appendChild(itemPrice);
    menuContent.appendChild(cardContainer);
  });

  menuPageContainer.appendChild(menuContent);

  mainContainer.appendChild(menuPageContainer);
}
