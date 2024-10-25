let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // if the number is valid guess -a,b,c
  //negative value - -1, -5
  //number in range- 8797y798
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // if the value is correct, low or high
  if (guess === randomNum) {
    displayMessage(`You gussed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOOOO Low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOOOO High`);
  }
}

function displayGuess(guess) {
  // clean value for next value
  // update array

  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // disply the messege send by checkguess function and it will interact directly with DOM
  // empty user input value
  // guesses remaining
  //inner HTML
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    StartOver.removeChild(p);
    playGame = true;
  });
}
