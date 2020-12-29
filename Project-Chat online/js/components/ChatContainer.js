import { getCurrentUser, getDataFromDoc, getDataFromDocs } from "../utilities.js";

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

  static get observedAttributes() {
    return ["current-chat"];
  }

  connectedCallback() {
    //   this.$messageList.setAttribute("data", JSON.stringify(fakeMessageList));
    this.$sendMessageForm.onsubmit = (event) => {
      event.preventDefault();
      let content = this.$messageContent.value();
      if (content != "") {
        this.sendMessage(content);
        this.$messageContent.value("");
      } else {
        alert("Type a message!");
      }
    };
  }

  async attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "current-chat") {
      console.log("You're chatting with " + newValue);

      let friendInfo = await this.loadFriendInfo();
      this.$chatInfo.innerHTML = friendInfo.name;
      this.loadMessages();
    }
  }

  async loadFriendInfo() {
    let friendId = this.getAttribute("current-chat");
    let result = await firebase.firestore().collection("users").doc(friendId).get();
    return getDataFromDoc(result);
  }

  loadMessages() {
    let currentUser = getCurrentUser();
    let friendId = this.getAttribute("current-chat");
    firebase
      .firestore()
      .collection("messages")
      .where("owner", "in", [currentUser.id, friendId])
      .onSnapshot((result) => {
        let rawData = getDataFromDocs(result.docs);
        let messagesData = rawData.filter((messageData) => {
          return messageData.receiver == currentUser.id || messageData.receiver == friendId;
        });

        console.log(messagesData);

        this.$messageList.setAttribute("data", JSON.stringify(messagesData));
      });
  }

  async sendMessage(content) {
    let currentUser = getCurrentUser();
    await firebase
      .firestore()
      .collection("messages")
      .add({
        content: content,
        dateModified: new Date().toISOString(),
        owner: currentUser.id,
        receiver: this.getAttribute("current-chat"),
      });
  }
}

window.customElements.define("chat-container", ChatContainer);
