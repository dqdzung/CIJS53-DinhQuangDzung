import { getAPI, shuffleArray } from "../utilities.js";

const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
        <button id="answer"></button>
`;

export default class AnswerWrapper extends HTMLElement {
  constructor(content, correct) {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$answer = this.shadowRoot.getElementById("answer");

    this.setAttribute("content", content);
    this.setAttribute("correct", correct);
  }

  static get observedAttributes() {
    return ["content", "correct"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "content") {
      this.$answer.innerHTML = newValue;
    }
  }

  connectedCallback() {
    this.$answer.onclick = function () {
        let $input = document.getElementById("input");
        $input.value = this.innerHTML;
    };
  }
}

window.customElements.define("answer-wrapper", AnswerWrapper);
