const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <style>
        * {
            font-family: Arial;            
        }
        
        #chat-container {
            background-color:#f1f1f2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }

        #chat-info {
            font-size: 20px;
            padding: 15px;
            border-bottom: solid 1px #cccccc;
            font-weight: bold;
        }

        #send-message-form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            
        }

        #message-content {
            width: calc(100% - 100px - 20px);
        }

        #send-message-btn {
            height: 40px;
            width: 100px;
            border: 1px solid #1995ad;
            background-color: #1995ad;
            border-radius: 5px;
            color: white;
        }

        message-list {
            height: calc(100% - 65px - 90px);
        }

    </style>
    <div id="chat-container">
        <div id="chat-info">Ng Van A</div>
        <message-list></message-list>
        <form id="send-message-form">
            <input-wrapper id="message-content" type="text" label="" error=""></input-wrapper>
            <button id="send-message-btn">Send</button>
        </form>
    </div>
`;

let fakeMessageList = [
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
  { content: "hello", owned: true, dateModified: "2020/12/26" },
  { content: "chao xin", owned: false, dateModified: "2020/12/26" },
  { content: "bonjour", owned: true, dateModified: "2020/12/26" },
  { content: "konochiwa", owned: false, dateModified: "2020/12/26" },
];

export default class ChatContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$chatInfo = this.shadowRoot.getElementById("chat-info");
    this.$messageList = this.shadowRoot.querySelector("message-list");
    this.$sendMessageForm = this.shadowRoot.getElementById("send-message-form");
    this.$messageContent = this.shadowRoot.getElementById("message-content");
  }

  connectedCallback() {
      this.$messageList.setAttribute("data", JSON.stringify(fakeMessageList));
  }
}

window.customElements.define("chat-container", ChatContainer);
