// HTML Template
const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
    #side-menu {
        margin: 0;
        padding: 0;
        background-color: #f1f1f1;
        width: 200px;
    }
    #side-menu li {
        list-style: none;
        height: 40px;
        line-height: 20px;
        padding: 10px;
        border-bottom: solid #fafafa
    }

    #side-menu a {
        text-decoration: none;
        

    }
    </style>
    <ul id = "side-menu">
        <li><a href="./index.html">Index</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact-us.html">Contact Us</a></li>
    </ul>
`;

export default class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
  }
}

window.customElements.define("side-menu", SideMenu);
