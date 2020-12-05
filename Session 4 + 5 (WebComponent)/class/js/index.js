import SideMenu from "./SideMenuComponent.js";
import ItemContainer from "./ItemContainerComponent.js";
import ItemList from "./ItemListComponent.js";
import data from "./fakeData.js";

let $root = document.getElementById("root");
// console.log(JSON.stringify(data));

// $root.innerHTML = `<item-list data="${JSON.stringify(data)}"></item-list>`;

let $itemList = new ItemList(data);
// $itemList.setAttribute("data", JSON.stringify(data));
$root.appendChild($itemList);