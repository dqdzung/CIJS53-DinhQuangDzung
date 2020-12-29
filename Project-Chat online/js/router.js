import ChatScreen from "./screen/ChatScreen.js";
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

router
  .on("/chat/:id", function (params) {
    $app.innerHTML = "";

    let $chatScreen = new ChatScreen();

    let $chatContainer = $chatScreen.shadowRoot.querySelector("chat-container");
    console.log($chatContainer);
    $chatContainer.setAttribute("current-chat", params.id);

    $app.appendChild($chatScreen);
  })
  .resolve();

window.router = router;
