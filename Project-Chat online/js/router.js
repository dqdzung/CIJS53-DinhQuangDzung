var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/sign-up", function () {
    document.getElementById("app").innerHTML = "<registration-form></registration-form>";
  })
  .resolve();

router
  .on("/sign-in", function () {
    document.getElementById("app").innerHTML = "<login-form></login-form>";
  })
  .resolve();

router
  .on("/chat", function () {
    document.getElementById("app").innerHTML = "<h1>This is the Chat page</h1>";
  })
  .resolve();

window.router = router;
