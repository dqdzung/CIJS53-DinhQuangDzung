// Ex 1:
https://docs.google.com/document/d/1fPCF9HqexHVMy3czg8xqeccnSv9iJNaxeIQ_fGDXBXE/edit?usp=sharing

// Ex 2:
const randomArr = () => {
  const arr = [],
    LENGTH = 20;
  while (arr.length < LENGTH) {
    let x = Math.floor(Math.random() * 100 + 1);
    if (arr.indexOf(x) < 0) {
      arr.push(x);
    }
  }
  return arr;
};
const checkPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

// Ex 3:
const $answer = document.getElementById("answer"),
  $yes = document.getElementById("yes"),
  $no = document.getElementById("no");

const getRandom = () => {
  const randomX = Math.floor(Math.random() * window.innerWidth + 1),
    randomY = Math.floor(Math.random() * window.innerHeight + 1);
  return [randomX, randomY];
};
$no.style.opacity = 1;
$no.onmousemove = function () {
  $no.style.position = "sticky";
  const randomXY = getRandom();
  $no.style.right = randomXY[0] + "px";
  $no.style.top = randomXY[1] + "px";
  $no.style.opacity -= 0.1;
};
$yes.onclick = function () {
  alert("YES!");
};
