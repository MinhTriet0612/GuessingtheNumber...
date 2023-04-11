// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Triet dep trai";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// console.log((document.querySelector(".guess").value = 23));
var secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
var highScore = 0;
var score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const value = document.querySelector(".guess").value;
  if (!value) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (value == secretNumber) {
    document.querySelector(".message").textContent = "Correct Answer!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".score").textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (value > secretNumber) {
    if (score <= 0) {
      document.querySelector(".message").textContent = "You Are Loser";
    } else {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (value < secretNumber) {
    if (score <= 0) {
      document.querySelector(".message").textContent = "You Are Loser";
    } else {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = null;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  console.log(secretNumber);
});
console.log(secretNumber);
