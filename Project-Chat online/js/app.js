import "./router.js";
import {getCurrentUser, getDataFromDocs} from "./utilities.js";

import InputWrapper from "./components/InputWrapper.js";
import RegistrationForm from "./components/RegistrationForm.js";
import LoginForm from "./components/LoginForm.js";
import FriendContainer from "./components/FriendContainer.js";
import FriendList from "./components/FriendList.js";
import ChatContainer from "./components/ChatContainer.js";
import MessageContainer from "./components/MessageContainer.js";
import MessageList from "./components/MessageList.js";

import ChatScreen from "./screen/ChatScreen.js";

// function realtimeUpdate() {
//     let currentUser = getCurrentUser();
//     firebase.firestore().collection("messages").where("owner", "==", currentUser.id).onSnapshot((result) => {
//         console.log(getDataFromDocs(result.docs));
//     });
// }

// realtimeUpdate();