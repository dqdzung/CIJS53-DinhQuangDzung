import MessageContainer from "./MessageContainer.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <style>
        #message-list {
            padding: 15px;
            overflow-y: scroll;
            height: 100%;
        }
    </style>
    <div id="message-list">
    </div>
`;

export default class MessageList extends HTMLElement {
  constructor(data) {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$messageList = this.shadowRoot.getElementById("message-list");

    this.setAttribute("data", JSON.stringify(data));
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "data") {
        let data = JSON.parse(newValue);
        this.$messageList.innerHTML = "";
        for (let messageData of data) {
            let $message = new MessageContainer(messageData.content, messageData.owned, messageData.dateModified);
            this.$messageList.appendChild($message);
        }
    }
  }
}

window.customElements.define("message-list", MessageList);
