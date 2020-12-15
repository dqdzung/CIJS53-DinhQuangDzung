import InputWrapper from "./InputWrapper.js";
import { validateEmail } from "../utilities.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../Project-Chat online/css/registration-form.css"/>
    <form id="registration-form">
        <h2>Register</h2>
        <input-wrapper id="email" label="Email" type="email" error="" value=""></input-wrapper>
        <input-wrapper id="name" label="Name" type="text" error="" value=""></input-wrapper>
        <input-wrapper id="password" label="Password" type="password" error="" value=""></input-wrapper>
        <input-wrapper id="password-confirmation" label="Password confirmation" type="password" error="" value=""></input-wrapper>
        <button id="register-btn">Register</button>

        <div id="to-login">Have an account? <b><a href="#">Login</a></b>
        </div>

    </form>
`;

export default class RegistrationForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$form = this.shadowRoot.getElementById("registration-form");
    this.$email = this.shadowRoot.getElementById("email");
    this.$name = this.shadowRoot.getElementById("name");
    this.$password = this.shadowRoot.getElementById("password");
    this.$passwordConfirmation = this.shadowRoot.getElementById("password-confirmation");
  }

  connectedCallback() {
    this.$form.onsubmit = async (event) => {
      event.preventDefault();
      let email = this.$email.value();
      let name = this.$name.value();
      let password = this.$password.value();
      let passwordConfirmation = this.$passwordConfirmation.value();

      // if (email == "") {
      //   this.$email.error("Please enter a valid email");
      // }
      // else {
      //   this.$email.error("");
      // }

      let isPassed =
        (InputWrapper.validate(this.$email, (value) => value != "", "Enter a valid email") &&
          InputWrapper.validate(this.$email, (value) => validateEmail(value), "Invalid email")) &
        InputWrapper.validate(this.$name, (value) => value != "", "Enter a valid name") &
        InputWrapper.validate(this.$password, (value) => value != "", "Enter a valid password") &
        (InputWrapper.validate(this.$passwordConfirmation, (value) => value != "", "Re-enter your password") &&
          InputWrapper.validate(this.$passwordConfirmation, (value) => value == password, "Password doesn't match"));

      if (isPassed) {
        let result = await firebase.firestore().collection("users").where("email", "==", email).get();

        if (result.empty) {
          firebase
            .firestore()
            .collection("users")
            .add({
              name: name,
              email: email,
              password: CryptoJS.MD5(password).toString(),
            });
          console.log("Registered!");
        } else {
          alert("Email already been used!");
          console.log("Failed!");
        }
      }
    };
  }
}

window.customElements.define("registration-form", RegistrationForm);
