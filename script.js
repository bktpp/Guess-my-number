"use strict";
const secretNum = () => Math.trunc(Math.random() * 20 + 1);

let myNum = secretNum();
let startingScore = 20;
let highScore = 0;

const checkBtn = document.querySelector(".check");
const hintMsg = document.querySelector(".message");
const displayedScore = document.querySelector(".score");
const displayedHighScore = document.querySelector(".highscore");
const bgColor = document.querySelector("body");
const mysteryNum = document.querySelector(".number");
const playAgain = document.querySelector(".again");
const guessBox = document.querySelector(".guess");

playAgain.addEventListener("click", function () {
  bgColor.style.backgroundColor = "#222";
  hintMsg.textContent = "Start guessing";
  mysteryNum.textContent = "?";
  displayedScore.textContent = "20";
  guessBox.value = "";
  checkBtn.addEventListener("click", startCheck);
  startingScore = 20;
});

const startCheck = function () {
  const userGuess = document.querySelector(".guess").value;
  const guessToNum = Number(userGuess);
  checkGuess(guessToNum, myNum);
  console.log("secret number", myNum);
  console.log("user number", guessToNum);
};

checkBtn.addEventListener("click", startCheck);

const removecheckBtnListener = () =>
  checkBtn.removeEventListener("click", startCheck);

function checkGuess(userNum, randomNum) {
  let score = startingScore;
  if (userNum === randomNum) {
    if (score > highScore) {
      highScore = score;
      displayedHighScore.textContent = `${highScore}`;
    }
    hintMsg.textContent = "Congrats! You got it!";
    removecheckBtnListener();
    bgColor.style.backgroundColor = "green";
    mysteryNum.textContent = `${randomNum}`;
    myNum = secretNum();
  } else {
    startingScore--;
    displayedScore.textContent = `${startingScore}`;
    if (userNum < randomNum) {
      if (startingScore === 0) {
        hintMsg.textContent = "Game over =(";
        removecheckBtnListener();
        return;
      }
      hintMsg.textContent = "Too low, try again.";
    } else {
      if (startingScore === 0) {
        hintMsg.textContent = "Game over =(";
        removecheckBtnListener();
        return;
      }
      hintMsg.textContent = "Too high. try again.";
    }
  }
}
