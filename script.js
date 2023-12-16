const choices = document.querySelector(".choices");
const choice = document.querySelectorAll(".choice");
const result = document.querySelector(".result-container");
const triangle = document.querySelector(".triangle");
const playAgainButton = document.querySelector(".play-again-button");
const resetGameButton = document.querySelector(".reset-game-button");

let message = document.querySelector(".msg");
let playerScoreText = document.querySelector("#player-score");
let compScoreText = document.querySelector("#comp-score");

let playerScore = 0;
let compScore = 0;

const showWinner = () => {
  result.style.display = "flex";
  choices.style.display = "none";
  triangle.style.display = "none";
}

const playAgain = () => {
  result.style.display = "none";
  choices.style.display = "flex";
  triangle.style.display = "block";
}

const resetGame = () => {
  playerScore = 0;
  playerScoreText.textContent = playerScore;
  compScore = 0;
  compScoreText.textContent = compScore;
  playAgain();
}

const drawGame = () => {
  let playerChoiceImg = document.getElementById("player-choice-img");
  let compChoiceImg = document.getElementById("comp-choice-img");
  playerChoiceImg.style.border = "0.75rem solid #007FFF"
  compChoiceImg.style.border = "0.75rem solid #007FFF"
  message.textContent = "GAME DRAW";
  showWinner();
}

const playerWins = () => {
  let playerChoiceImg = document.getElementById("player-choice-img");
  let compChoiceImg = document.getElementById("comp-choice-img");
  playerChoiceImg.style.border = "0.75rem solid #32de84"
  compChoiceImg.style.border = "0.75rem solid #EE204D"
  playerScore++;
  playerScoreText.textContent = playerScore;
  message.textContent = "PLAYER WON";
  playerChoiceImg.style.borderRadius = "50%"
  showWinner();
}

const computerWins = () => {
  let playerChoiceImg = document.getElementById("player-choice-img");
  let compChoiceImg = document.getElementById("comp-choice-img");
  playerChoiceImg.style.border = "0.75rem solid #EE204D"
  compChoiceImg.style.border = "0.75rem solid #32de84"
  compScore++;
  compScoreText.textContent = compScore;
  message.textContent = "COMPUTER WON";
  showWinner();
}

const computerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 10) % 3;

  return options[randomIndex];
}

const calculateResult = (computerChoice, userChoice) => {
  const compChoice = computerChoice();

  if (userChoice === compChoice) { 
    // draw
    if (userChoice === "rock") {
      document.getElementById("player").src = "images/rock.svg";
      document.getElementById("computer").src = "images/rock.svg";
    }
    else if (userChoice === "paper") {
      document.getElementById("player").src = "images/paper.svg";
      document.getElementById("computer").src = "images/paper.svg";
    }
    else {
      document.getElementById("player").src = "images/scissor.svg";
      document.getElementById("computer").src = "images/scissor.svg";
    }

    drawGame();
  }
  else {
    if (userChoice === "rock") {
      document.getElementById("player").src = "images/rock.svg";
      if (compChoice === "paper") {
        document.getElementById("computer").src = "images/paper.svg";
        computerWins();
      }
      else {
        document.getElementById("computer").src = "images/scissor.svg";
        playerWins();
      }
    }
    else if (userChoice === "paper") {
      document.getElementById("player").src = "images/paper.svg";
      if (compChoice === "rock") {
        document.getElementById("computer").src = "images/rock.svg";
        playerWins();
      }
      else {
        document.getElementById("computer").src = "images/scissor.svg";
        computerWins();
      }
    }
    else {
      document.getElementById("player").src = "images/scissor.svg";
      if (compChoice === "rock") {
        document.getElementById("computer").src = "images/rock.svg";
        computerWins();
      }
      else {
        document.getElementById("computer").src = "images/paper.svg";
        playerWins();
      }
    }
  }
}

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    calculateResult(computerChoice, userChoice);
  });
});

playAgainButton.addEventListener("click", () => {
  playAgain();
});

resetGameButton.addEventListener("click", () => {
  resetGame();
});