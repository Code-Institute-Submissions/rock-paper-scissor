"use strict";

// main game container to prevent global variables

const game = () => {
  // main elements

  const title = document.getElementById("title");
  const gameRules = document.getElementById("game-rules");
  const playButton = document.getElementById("play");
  const gameSection = document.getElementById("game");

  let pScore = 0;
  let cScore = 0;

  // Hide main page and show game page

  playButton.addEventListener("click", startGame);
  function startGame() {
    playButton.classList.add("hide");
    gameRules.classList.add("hide");
    title.classList.add("hide");
    gameSection.classList.remove("hide");
  }
  // start match
  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // computer options
    const computerOptions = ["rock", "paper", "scissors", "spock", "lizard"];

    options.forEach((option) => {
      //computer choices
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        checkHands(this.textContent, computerChoice);
        playerHand.src = `./assets/images/${this.textContent}.png`;
        computerHand.src = `./assets/images/${computerChoice}.png`;
      });
    });
  }
  const scoreUpdate = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const checkHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    // check for a draw
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a draw!";
      return;
    }

    // check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Player wins";
        pScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        cScore += 1;
        scoreUpdate();
      }
    }

    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Computer wins";
        cScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Player wins";
        pScore += 1;
        scoreUpdate();
      }
    }
    // Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        winner.textContent = "Player wins";
        pScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        cScore += 1;
        scoreUpdate();
      }
    }
    // Check for spock
    if (playerChoice === "spock") {
      if (computerChoice === "scissors" || computerChoice === "rock") {
        winner.textContent = "player wins";
        pScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        cScore += 1;
        scoreUpdate();
      }
    }
    // Check for lizard
    if (playerChoice === "lizard") {
      if (computerChoice === "spock" || computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        cScore += 1;
        scoreUpdate();
      }
    }
  };
  playMatch();
};

game();
