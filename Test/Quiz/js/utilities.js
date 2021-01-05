export async function getAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  const result = data.results;
  return result;
}

export async function getQuestion() {
  const url = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple";
  let response = await getAPI(url);
  let data = JSON.stringify(response[0]);
  return data;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
