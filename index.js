// Ex 1:
console.log(`
( HI! )
    \\     ^__^
     \\_   (oo)\\_______
          (__)\\       )\\/\\
              ||----W |
              ||     ||
`);

//Backslash is an escape character

// Ex 2:
{
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
}
// use array filter

// Ex 3: Cho x = 0 hoặc 1. Không dùng điều kiện, in ra 1 nếu x = 0, in ra 0 nếu x = 1
// {
//   let x = Number(prompt("Input X"));
//   console.log(1 - x);

//   let a = [1, 0];
//   console.log(a[x]);
// }

// Ex 4: Cho x là 1 số. Chỉ dùng switch ... case, in ra màn hình
// Nếu x = 10, in ra A+
// Nếu x = 9, in ra A
// Nếu x = 8, in ra B+
// Nếu x = 7, in ra B
// Nếu x = 6, in ra C+
// Nếu x = 5, in ra C
// {
//   let x = Number(prompt("Input X"));

//   switch (x) {
//     case 10:
//       console.log("A+");
//       break;
//     case 9:
//       console.log("A");
//       break;
//     case 8:
//       console.log("B+");
//       break;
//     case 7:
//       console.log("B");
//       break;
//     case 6:
//       console.log("C+");
//       break;
//     case 5:
//       console.log("C");
//       break;
//   }
// }

// Ex 5:  Cho x là 1 số. Chỉ dùng switch ... case, in ra màn hình
// Nếu x > 10, in ra "Invalid"
// Nếu 9 <= x <= 10, in ra A+
// 8 <= x < 9, in ra A
// 7 <= x < 8, in ra B+
// {
//   let x = Number(prompt("Input X"));

//   switch (true) {
//     case x > 10:
//       console.log("Invalid");
//       break;
//     case x >= 9 && x < 10:
//       console.log("A+");
//       break;
//     case x >= 8 && x < 9:
//       console.log("A");
//       break;
//   }
// }

const $answer = document.getElementById("answer"),
  $yes = document.getElementById("yes"),
  $no = document.getElementById("no");

let counter = 0;
$no.onmouseover = function () {
  $answer.classList.toggle("reverse");
  counter++;
  if (counter > 5) {
    $answer.style.display = "none";
  }
};
