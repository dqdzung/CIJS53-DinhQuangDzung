import { getCurrentUser, getDataFromDoc, getDataFromDocs } from "../utilities.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <style>
      #chat-screen {
        display: flex;
        justify-content: space-between;
      }

      friend-list {
        width: 30%;
        height: 100vh;
      }

      chat-container {
        width: 69%;
        height: 100vh;
      }

    </style>
    <div id="chat-screen">
      <friend-list></friend-list>
      <chat-container></chat-container>
    </div>
 
`;

export default class ChatScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$friendList = this.shadowRoot.querySelector("friend-list");
    this.$chatContainer = this.shadowRoot.querySelector("chat-container");
  }

  async connectedCallback() {
    let friendsData = await this.loadFriends();
    // console.log(friendsData);
    this.$friendList.setAttribute("data", JSON.stringify(friendsData));
  }

  async loadFriends() {
    let currentUser = getCurrentUser();
    let result = await firebase
      .firestore()
      .collection("friends")
      .where("relation", "array-contains", currentUser.id)
      .get();

    let existFriends = getDataFromDocs(result.docs);
    let friendsData = [];
    for (let existFriend of existFriends) {
      let relation = existFriend.relation;

      let friendId = "";
      if (relation[0] == currentUser.id) {
        friendId = relation[1];
      } else if (relation[1] == currentUser.id) {
        friendId = relation[0];
      }
      let result = await firebase.firestore().collection("users").doc(friendId).get();
      let friendData = getDataFromDoc(result);
      friendData.isFriend = true;

      friendsData.push(friendData);
    }
    return friendsData;
  }
}

window.customElements.define("chat-screen", ChatScreen);
