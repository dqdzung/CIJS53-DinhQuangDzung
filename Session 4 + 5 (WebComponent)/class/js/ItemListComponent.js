import ItemContainer from "./ItemContainerComponent.js";

const $template = document.createElement("template");
$template.innerHTML =
  /*html*/
  `<div id="item-list">
      </div>`;

export default class ItemList extends HTMLElement {
  constructor(data) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$itemList = this.shadowRoot.getElementById("item-list");
    this.setAttribute("data", JSON.stringify(data));
  }
  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(JSON.parse(newValue));

    if (attrName == "data") {
      let data = JSON.parse(newValue);
      for (let item of data) {
        let $itemContainer = new ItemContainer();
        $itemContainer.setAttribute("image", item.image);
        $itemContainer.setAttribute("price", item.price);
        $itemContainer.setAttribute("description", item.description);
        $itemContainer.setAttribute("address", item.address);
        this.$itemList.appendChild($itemContainer);
      }
    }
  }
}

window.customElements.define("item-list", ItemList);
