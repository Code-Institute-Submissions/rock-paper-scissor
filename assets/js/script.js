"use strict";

// main game container to prevent global variables

const game = () => {
  // main elements

  const title = document.getElementById("title");
  const gameRules = document.getElementById("game-rules");
  const playButton = document.getElementById("play");
  const gameSection = document.getElementById("game");
  const toggleRules = document.querySelector(".toggle-rules");
  const modalWindow = document.querySelector(".rules-modal");
  const modalClose = document.querySelector(".close-modal");

  let myScore = 0;
  let compScore = 0;

  // Hide main page and show game page

  playButton.addEventListener("click", startGame);
  function startGame() {
    playButton.classList.add("hide");
    gameRules.classList.add("hide");
    title.classList.add("hide");
    gameSection.classList.remove("hide");
  }

  // Show rules modal and blur background

  toggleRules.addEventListener("click", function () {
    modalWindow.classList.remove("hide");
    toggleRules.classList.add("hide");
    gameSection.classList.add("blur");
  });

  // Close rules and unblur background

  modalClose.addEventListener("click", () => {
    modalWindow.classList.add("hide");
    toggleRules.classList.remove("hide");
    gameSection.classList.remove("blur");
  });

  // start match
  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const bothHands = document.querySelectorAll(".hands img");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    bothHands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options
    const computerOptions = ["rock", "paper", "scissors", "spock", "lizard"];

    options.forEach((option) => {
      //computer choices
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        playerHand.src = "./assets/images/rock.png";
        computerHand.src = "./assets/images/rock.png";

        setTimeout(() => {
          checkHands(this.textContent, computerChoice);
          playerHand.src = `./assets/images/${this.textContent}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shake-player 2s ease";
        computerHand.style.animation = "shake-computer 2s ease";
      });
    });
  }
  const scoreUpdate = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = myScore;
    computerScore.textContent = compScore;

    if (myScore === 5) {
      myScore = 0;
    } else if (compScore === 5) {
      compScore = 0;
    }
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
        myScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        compScore += 1;
        scoreUpdate();
      }
    }

    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Computer wins";
        compScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Player wins";
        myScore += 1;
        scoreUpdate();
      }
    }

    // Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        winner.textContent = "Player wins";
        myScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        compScore += 1;
        scoreUpdate();
      }
    }

    // Check for spock
    if (playerChoice === "spock") {
      if (computerChoice === "scissors" || computerChoice === "rock") {
        winner.textContent = "Player wins";
        myScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        compScore += 1;
        scoreUpdate();
      }
    }

    // Check for lizard
    if (playerChoice === "lizard") {
      if (computerChoice === "spock" || computerChoice === "paper") {
        winner.textContent = "Player wins";
        myScore += 1;
        scoreUpdate();
      } else {
        winner.textContent = "Computer wins";
        compScore += 1;
        scoreUpdate();
      }
    }
  };
  playMatch();
  resetScore();
};

game();
