import beefSalad from "./vietnamese-beef-salad.jpg";
import phoSpecial from "./pho-special.jpeg";
import ricePlate from "./porkchop-rice-plate.jpg";
import bunBoHue from "./bun-bo-hue.jpg";
import tapiocaNoodleSoup from "./tapioca-noodle-soup.jpg";
import { CardContent } from "@mui/material";

export default function menuPageLoading() {
  const menuSelection = [
    { name: "Beef Tenderloin Steak Salad", price: "$15.50", image: beefSalad },
    { name: "Pho Special", price: "$17.50", image: phoSpecial },
    {
      name: "Grilled Pork Chop & Grilled Shrimp Rice Plate",
      price: "$17.95",
      image: ricePlate,
    },
    {
      name: "Vegan Bun Bo Hue",
      price: "$16.50",
      image: bunBoHue,
    },
    {
      name: "Vietnamese Crab & Shrimp Tapioca Noodle Soup",
      price: "$16.50",
      image: tapiocaNoodleSoup,
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

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    const itemName = document.createElement("p");
    itemName.className = "item-name";
    itemName.textContent = item.name;
    const itemPrice = document.createElement("p");
    itemPrice.className = "item-price";
    itemPrice.textContent = item.price;
    cardContent.appendChild(itemName, itemPrice);

    cardContainer.appendChild(itemImage);
    cardContainer.appendChild(cardContent);

    menuContent.appendChild(cardContainer);
  });

  menuPageContainer.appendChild(menuContent);

  mainContainer.appendChild(menuPageContainer);
}
