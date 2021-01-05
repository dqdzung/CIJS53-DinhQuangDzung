import { getQuestion } from "./utilities.js";
import QuizWrapper from "./components/QuizWrapper.js";

const $app = document.getElementById("app");
const $main = document.getElementById("main");
const $startBtn = document.getElementById("start-btn");
const $endBtn = document.getElementById("end-btn");
const $submitBtn = document.getElementById("submit-btn");
const $input = document.getElementById("input");
const $score = document.getElementById("score");

let score = 0;

async function renderQuestion() {
  let data = await getQuestion();
  let $quiz = new QuizWrapper(data);
  $main.innerHTML = "";
  $main.appendChild($quiz);
}

$startBtn.addEventListener("click", function () {
  renderQuestion();
  $app.style.display = "flex";
  $startBtn.style.display = "none";  
});

$endBtn.addEventListener("click", function () {
  $app.innerHTML = "";
  $app.innerHTML = `Quiz ended! Your score is: ${score}!`;
});

$submitBtn.addEventListener("click", async function () {
  const data = JSON.parse($main.firstElementChild.getAttribute("data"));
  if ($input.value == data.correct_answer) {
    alert("correct!");
    score += 10;
  } else {
    alert("wrong!");
  }
  renderQuestion();
  $input.value = "";
  $score.innerHTML = `${score}`;  
});
