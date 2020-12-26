import FriendContainer from "./FriendContainer.js";
import InputWrapper from "./InputWrapper.js";
import { getCurrentUser, getDataFromDocs } from "../utilities.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
        * {
            background-color: #f1f1f2;
        }
        
        #wrapper {
          height: 100vh;
          background-color: #f1f1f2;

        }

        #title {
            padding: 15px;
            font-family: Arial;
            font-weight: bold;
            font-size: 20px; 
            text-align: center;
            border-bottom: 1px solid #cccccc;
        }

        #search-friend-form {
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cccccc;
                
        }

        #search-friend-btn {
            border: 1px solid #cccccc;
            background-color: #1995ad;
            padding: 0px 10px;
            height: 40px;
            width: 100px;
            border-radius: 5px;
            color: white;
        }

        #search-friend-input {
            width: calc(100% - 100px - 15px);
        }

    </style>
    <div id="wrapper">
      <div id="title">
      Friends
      </div>
      <form id="search-friend-form">
        <input-wrapper id="search-friend-input" label="" type="text" error=""></input-wrapper>
        <button id="search-friend-btn">Search</button>    
      </form>
      <div id="friend-list">
      </div>
    </div>    

`;

export default class FriendList extends HTMLElement {
  constructor(data) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$friendList = this.shadowRoot.getElementById("friend-list");

    this.$searchFriendInput = this.shadowRoot.getElementById("search-friend-input");
    this.$searchFriendForm = this.shadowRoot.getElementById("search-friend-form");

    this.setAttribute("data", JSON.stringify(data));
  }

  connectedCallback() {
    this.$searchFriendForm.onsubmit = async (event) => {
      event.preventDefault();

      let keyword = this.$searchFriendInput.value();

      let isPassed = InputWrapper.validate(this.$searchFriendInput, (value) => value != "", "Enter a friend name");

      if (isPassed) {
        let data = await this.searchFriendByName(keyword);
        this.setAttribute("data", JSON.stringify(data));
      }
    };
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "data") {
      let friendsData = JSON.parse(newValue);
      this.$friendList.innerHTML = "";
      for (let friendData of friendsData) {
        let $friendContainer = new FriendContainer(
          friendData.id,
          friendData.name,
          friendData.email,
          friendData.isFriend
        );
        this.$friendList.appendChild($friendContainer);
      }
    }
  }

  async searchFriendByName(name) {
    // Get users with matched "name"
    let result = await firebase.firestore().collection("users").where("name", "==", name).get();

    let data = getDataFromDocs(result.docs);

    // Check if found users are friends with current user
    for (let friendData of data) {
      let currentUser = getCurrentUser();

      // Get all friends of current user
      result = await firebase
        .firestore()
        .collection("friends")
        .where("relation", "array-contains", currentUser.id)
        .get();

      let existFriends = getDataFromDocs(result.docs);

      // Compare search results with above friends
      for (let friendData of data) {
        let exist = existFriends.find(function (existFriend) {
          let relation = existFriend.relation;
          return relation[0] == friendData.id || relation[1] == friendData.id;
        });

        friendData.isFriend = exist ? true : false;
      }
    }
    return data;
  }
}

window.customElements.define("friend-list", FriendList);
