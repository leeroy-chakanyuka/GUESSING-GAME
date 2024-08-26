"use strict";

// if guess == ans ; message == correct; (wrong : too high || wrong ; too low)

let ans = Math.trunc(Math.random() * 20) + 1;
console.log(ans);
let highScore = 0;
let score = Number(document.querySelector(".score").textContent); //init score to 20 :

console.log(score);

document.querySelector(".again").addEventListener("click", reset);
document.querySelector(".check").addEventListener("click", compInputAndAns);

function compInputAndAns() {
  let attempt = Number(document.querySelector(".guess").value); //get users guess
  /* if (attempt === 0) {
    document.querySelector(".message").textContent = "Nothing Entered";
  } else */
  if (attempt >= 1 && attempt <= 20) {
    //checks that its in the correct range

    //in case : win
    if (attempt === ans) {
      if (score > 0) {
        //ensures you're not out of tries
        document.querySelector(".message").textContent =
          " You got it right 🐱‍🏍! ";
        if (score > highScore) highScore = score;
        else {
          highScore = highScore;
        }
      } else {
        document.querySelector(".message").textContent = "You lose 💔";
        reset;
      }
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector("body").style.backgroundColor = "#4bf748"; // changes the color to green!

      //in case : too high
    } else if (attempt > ans) {
      if (score > 0) {
        //ensures you're not out of tries
        document.querySelector(".message").textContent =
          "Wrong, too high. Please try again 🚀 ";
        score--;
      } else {
        document.querySelector(".message").textContent = "You lose 💔";
        reset;
      }

      //in case : too high
    } else if (attempt < ans) {
      if (score > 0) {
        //ensures you're not out of tries
        document.querySelector(".message").textContent =
          "Wrong, too low. Please try again ⛏ ";
        score--;
      } else {
        document.querySelector(".message").textContent = "You lose 💔";
        reset;
      }
    }
  } else {
    //also accounts for the case that nothing is entered, falsy value would be 0;
    document.querySelector(".message").textContent = "Invalid number 🚫";
  }
  document.querySelector(".score").textContent = score;
}

//Function for when you want to go again!
function reset() {
  ans = Math.trunc(Math.random() * 20) + 1; // new game new number
  console.log(ans); // || to test
  let checker = Number(document.querySelector(".guess").textContent);
  console.log(checker);
  document.querySelector(".score").textContent = 20; //resets counter
  if (checker != 0) {
    if (highScore > score)
      document.querySelector(".highscore").textContent = highScore;
    else document.querySelector(".highscore").textContent = score;
  }

  document.querySelector(".message").textContent = " Start guessing.... "; // resets message
  document.querySelector("body").style.backgroundColor = "#222"; //resets BG

  score = 20; //resets score to 20
}

/* function checkScore() {
  let check = Number(document.querySelector(".score").textContent);
  if (check <= 0) {
    document.querySelector(".message").textContent = "Out of tries! 😢";
  }
}
 */
//-------------------------------------------

/* function houseKeep() {
  const ans = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".number").textContent = ans; // displays the answer for testing !!
  let score = Number(document.querySelector(".score").textContent);
} */
//------------------------------------------

/* if (check= <= 0) {
      document.querySelector(".message").textContent = "Out of tries! 😢";
    } */
