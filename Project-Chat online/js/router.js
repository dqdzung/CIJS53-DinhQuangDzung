import ChatScreen from "./screen/ChatScreen.js";
import { getCurrentUser } from "./utilities.js";
let $app = document.getElementById("app");

var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/sign-up", function () {
    $app.innerHTML = "<registration-form></registration-form>";
  })
  .resolve();

router
  .on("/sign-in", function () {
    $app.innerHTML = "<login-form></login-form>";
  })
  .resolve();

// router
//   .on("/chat/:id", async function (params) {
// let currentUser = getCurrentUser();
// if (currentUser == null) {
//   router.navigate("/sign-in");
//   return;
// }

// $app.innerHTML = "";
// let $chatScreen = new ChatScreen();
// $app.appendChild($chatScreen);

//   let friendsData = await $chatScreen.loadFriends();
//   if (friendsData.length < 1) {
//     return;
//   }
//   let firstFriend = friendsData[0];

//   if (params.id == 0) {
//     router.navigate("/chat/" + firstFriend.id);
//     return;
//   }

//   let $chatContainer = $chatScreen.shadowRoot.querySelector("chat-container");
//   console.log($chatContainer);
//   $chatContainer.setAttribute("current-chat", params.id);
// })
// .resolve();

router
  .on(
    "/chat/:id",
    async function (params) {
      let $chatScreen = document.querySelector("chat-screen");
      if ($chatScreen == null) {
        $chatScreen = new ChatScreen();
        $app.innerHTML = "";
        $app.appendChild($chatScreen);
      }

      let friendsData = await $chatScreen.loadFriends();
      if (friendsData.length < 1) {
        return;
      }
      let firstFriend = friendsData[0];

      if (params.id == 0) {
        router.navigate("/chat/" + firstFriend.id);
        return;
      }
      let $chatContainer = $chatScreen.shadowRoot.querySelector("chat-container");
      $chatContainer.setAttribute("current-chat", params.id);
    },
    {
      before(done, params) {
        let currentUser = getCurrentUser();
        if (currentUser == null) {
          router.navigate("/sign-in");
          return;
        }

        console.log("before");
        done();
      },
    }
  )
  .resolve();

window.router = router;
