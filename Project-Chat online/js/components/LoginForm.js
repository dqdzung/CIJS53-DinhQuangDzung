import InputWrapper from "./InputWrapper.js";
import { getDataFromDoc, validateEmail } from "../utilities.js";
import { saveCurrentUser } from "../utilities.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../Project-Chat online/css/login-form.css"/>
    <form id="login-form">
        <h2>Login</h2>
        <input-wrapper id="email" label="Email" type="email" error="" value=""></input-wrapper>        
        <input-wrapper id="password" label="Password" type="password" error="" value=""></input-wrapper>     
        <button id="login-btn">Login</button>

        <div id="to-register">Don't have an account? <b><a href="#!/sign-up">Register</a></b>
        </div>

    </form>
`;

export default class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$form = this.shadowRoot.getElementById("login-form");
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
  }

  connectedCallback() {
    this.$form.onsubmit = async (event) => {
      event.preventDefault();
      let email = this.$email.value();
      let password = this.$password.value();

      let isPassed =
        InputWrapper.validate(this.$email, (value) => value != "", "Enter a valid email") &
        InputWrapper.validate(this.$password, (value) => value != "", "Enter a valid password");

      if (isPassed) {
        let result = await firebase
          .firestore()
          .collection("users")
          .where("email", "==", email)
          .where("password", "==", CryptoJS.MD5(password).toString())
          .get();

        if (result.empty) {
          alert("Incorrect email or password!");
        } else {
          // alert("Logging in!");
          saveCurrentUser(getDataFromDoc(result.docs[0]));
          router.navigate("/chat/0");
        }
      }
    };
  }
}

window.customElements.define("login-form", LoginForm);
