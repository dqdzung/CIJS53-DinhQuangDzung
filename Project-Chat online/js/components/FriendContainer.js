import { getCurrentUser } from "../utilities.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
        * {
            font-family: Arial;
        }

        #friend-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #cccccc;
        }
        #friend-email {
          font-size: 13px;
        }
        
    </style>

    <div id="friend-container">
    <div id="friend-info">        
      <div id="friend-name">Dzung</div>
      <div id="friend-email">someemail@gmail.com</div>
    </div>
    <button id="add-friend-btn">+</button>
    </div>

`;

export default class FriendContainer extends HTMLElement {
  constructor(id, name, email, isFriend) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$friendName = this.shadowRoot.getElementById("friend-name");
    this.$friendEmail = this.shadowRoot.getElementById("friend-email");
    this.$addFriendBtn = this.shadowRoot.getElementById("add-friend-btn");
    this.id = id;

    this.setAttribute("name", name);
    this.setAttribute("email", email);
    this.setAttribute("is-friend", isFriend);
  }

  static get observedAttributes() {
    return ["id", "name", "email", "is-friend"];
  }

  connectedCallback() {
    this.onclick = () => {
      console.log("Direct to chat with " + this.getAttribute("name"));
      router.navigate("/chat/" + this.id);
    }

    this.$addFriendBtn.onclick = async () => {
      this.$addFriendBtn.disabled = true;
      await this.addFriend(this.id);
      this.$addFriendBtn.style.display = "none";
    };
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "name") {
      this.$friendName.innerHTML = newValue;
    } else if (attrName == "email") {
      this.$friendEmail.innerHTML = newValue;
    } else if (attrName == "is-friend") {
      if (newValue == "true") {
        this.$addFriendBtn.style.display = "none";
      } else if (newValue == "false") {
        this.$addFriendBtn.style.display = "block";
      }
    }
  }

  async addFriend(userId) {
    let currentUser = getCurrentUser();
    await firebase
      .firestore()
      .collection("friends")
      .add({
        relation: [currentUser.id, userId],
      });
  }
}

window.customElements.define("friend-container", FriendContainer);
