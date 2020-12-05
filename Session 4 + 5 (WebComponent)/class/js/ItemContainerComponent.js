const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
        #item-container{
            width: 200px;
        }
        #image {
            width: 200px;
        }
        #address, #price {
            font-weight: bold;
        }
        #description {
            font-style: italic;
        }
    </style>
    <div id="item-container">
        <img id="image" src="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png" alt="Doge">
        <div id="price">10 &#8363;</div>
        <div id="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div id="address">Hanoi</div>
    </div> 
`;

export default class ItemContainer extends HTMLElement {
  constructor(image, price, description, address) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.setAttribute("image", image);
    this.setAttribute("price", price);
    this.setAttribute("description", description);
    this.setAttribute("address", address);
  }
  // định nghĩa những thuộc tính ảnh hưởng đến nội dung
  static get observedAttributes() {
    return ["image", "price", "description", "address"];
  }

  // được chạy khi giá trị thuộc tính thay đổi
  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(attrName + "=" + newValue);
    switch (attrName) {
      case "image":
        this.shadowRoot.getElementById("image").src = newValue;
        break;
      case "price":
        this.shadowRoot.getElementById("price").innerHTML = newValue + "&#8363";
        break;
      case "description":
        this.shadowRoot.getElementById("description").innerHTML = newValue;
        break;
      case "address":
        this.shadowRoot.getElementById("address").innerHTML = newValue;
        break;
    }
  }
}

window.customElements.define("item-container", ItemContainer);
