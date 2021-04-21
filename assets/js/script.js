"use strict";

// main game container to prevent global variables

const game = () => {
  // main elements

  const title = document.getElementById("title");
  const gameRules = document.getElementById("game-rules");
  const playButton = document.getElementById("play");
  const playAgain = document.querySelector(".play-again");
  const gameSection = document.getElementById("game");
  const toggleRules = document.querySelector(".toggle-rules");
  const modalWindow = document.querySelector(".rules-modal");
  const modalClose = document.querySelector(".close-modal");
  const modalHeader = document.getElementById("modal-header");
  const modalList = document.querySelector(".modal ul");
  const modalParagraph = document.querySelector(".modal p");
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  const winner = document.querySelector(".winner");
  const options = document.querySelectorAll(".options button");
  const bothHands = document.querySelectorAll(".hands img");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  let compScore = 0;
  let myScore = 0;

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
  });

  // Close rules modal and unblur background

  modalClose.addEventListener("click", () => {
    modalWindow.classList.add("hide");
    toggleRules.classList.remove("hide");
  });

  // Display play again button and modal

  const displayRematch = function (player) {
    modalWindow.classList.remove("hide");
    modalList.classList.add("hide");
    playAgain.classList.remove("hide");
    toggleRules.classList.add("hide");
    modalParagraph.classList.add("hide");
    modalHeader.textContent = `${player} wins!`;

    playAgain.addEventListener("click", () => {
      modalWindow.classList.add("hide");
      winner.textContent = "Pick your hand";
      modalHeader.textContent = "Rules";
      toggleRules.classList.remove("hide");
      modalParagraph.classList.remove("hide");
      modalList.classList.remove("hide");
      playAgain.classList.add("hide");
    });
  };

  // Reset both hands to rock

  const resetHands = () => {
    playAgain.addEventListener("click", function () {
      bothHands.forEach((hand) => {
        hand.src = "./assets/images/rock.png";
      });
    });
  };

  // Reset points and restart game

  const resetPoints = function () {
    playAgain.addEventListener("click", () => {
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    });
  };

  // start match
  function playMatch() {
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
    playerScore.textContent = myScore;
    computerScore.textContent = compScore;

    if (myScore === 5) {
      resetPoints();
      displayRematch("Player");
      resetHands();
    } else if (compScore === 5) {
      resetPoints();
      displayRematch("Computer");
      resetHands();
    }
  };

  const checkHands = (playerChoice, computerChoice) => {
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
};
game();
