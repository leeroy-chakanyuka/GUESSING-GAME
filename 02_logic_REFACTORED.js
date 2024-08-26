"use strict";

// if guess == ans ; message == correct; (wrong : too high || wrong ; too low)

let ans = Math.trunc(Math.random() * 20) + 1;
console.log(ans); // test
let highScore = 0;
let score = Number(document.querySelector(".score").textContent); //init score to 20 :

console.log(score);

document.querySelector(".again").addEventListener("click", reset);
document.querySelector(".check").addEventListener("click", compInputAndAns);

function compInputAndAns() {
  let attempt = Number(document.querySelector(".guess").value); //get users guess

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
        displayMessage("You lose 💔");
        reset;
      }
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector("body").style.backgroundColor = "#4bf748"; // changes the color to green!

      //in case : wrong
    } else if (attempt !== ans) {
      if (attempt >= 1 && attempt <= 20) {
        //checks range
        // too high
        attempt > ans
          ? displayMessage("Wrong, too high. Please try again 🚀 ")
          : displayMessage("Wrong, too low. Please try again ⛏ ");
        //ternary operator ends here
        score--;
      } else {
        displayMessage("You lose 💔");
        reset;
      }
    }
  } else {
    //also accounts for the case that nothing is entered, falsy value would be 0;
    displayMessage("Invalid number 🚫");
  }
  document.querySelector(".score").textContent = score;
}

//---------------------------------------------------------------------------------------------------------------

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
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

  displayMessage(" Start guessing.... "); // resets message
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
