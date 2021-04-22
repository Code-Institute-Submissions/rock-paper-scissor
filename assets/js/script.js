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
  const optionsContainer = document.querySelectorAll(".options button");
  const bothHands = document.querySelectorAll(".hands img");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  // Score counters
  let compScore = 0;
  let myScore = 0;

  // Hide main page and show game page
  playButton.addEventListener("click", startGame);

  // Hides the initial elements and shows the main game elements
  function startGame() {
    playButton.classList.add("hide");
    gameRules.classList.add("hide");
    title.classList.add("hide");
    gameSection.classList.remove("hide");
  }

  // Show rules modal
  toggleRules.addEventListener("click", function () {
    modalWindow.classList.remove("hide");
    toggleRules.classList.add("hide");
    modalClose.classList.remove("hide");
  });

  // Close rules modal
  modalClose.addEventListener("click", () => {
    modalWindow.classList.add("hide");
    toggleRules.classList.remove("hide");
  });

  // Disables the options buttons
  const disableOptions = () => {
    options.forEach((option) => {
      option.setAttribute("disabled", "disabled");
    });
  };

  // Enables the options buttons
  const enableOptions = () => {
    options.forEach((option) => {
      option.removeAttribute("disabled");
    });
  };

  // Display play again button, modal and reset hands image

  const displayRematch = function (player) {
    modalWindow.classList.remove("hide");
    modalList.classList.add("hide");
    playAgain.classList.remove("hide");
    toggleRules.classList.add("hide");
    modalParagraph.classList.add("hide");
    modalHeader.textContent = `${player} wins!`;
    modalClose.classList.add("hide");

    playAgain.addEventListener("click", () => {
      modalWindow.classList.add("hide");
      winner.textContent = "Pick your hand";
      modalHeader.textContent = "Rules";
      toggleRules.classList.remove("hide");
      modalParagraph.classList.remove("hide");
      modalList.classList.remove("hide");
      playAgain.classList.add("hide");
      bothHands.forEach((hand) => {
        hand.src = "./assets/images/rock.png";
      });
      resetPoints();
    });
  };

  // Reset points
  const resetPoints = function () {
    myScore = 0;
    compScore = 0;

    playerScore.textContent = myScore;
    computerScore.textContent = compScore;
  };

  // start match (credit to Dev ed on youtube)
  function playMatch() {
    bothHands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options ('Credit to Dev Ed on youtube for this snippet on line 115 to line 131)
    const computerOptions = ["rock", "paper", "scissors", "spock", "lizard"];

    options.forEach((option) => {
      //computer choices
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        playerHand.src = "./assets/images/rock.png";
        computerHand.src = "./assets/images/rock.png";
        disableOptions();

        // Execute animation, wait 2000ms then update hands images
        setTimeout(() => {
          checkHands(this.textContent, computerChoice);
          playerHand.src = `./assets/images/${this.textContent}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
          option.removeAttribute("disabled");
          enableOptions();
        }, 2000);

        // Adds animation to hands
        playerHand.style.animation = "shake-player 2s ease";
        computerHand.style.animation = "shake-computer 2s ease";
      });
    });
  }

  // Updates score to 0 if score reaches 5
  const scoreUpdate = () => {
    playerScore.textContent = myScore;
    computerScore.textContent = compScore;
    if (myScore === 5) {
      displayRematch("Player");
    } else if (compScore === 5) {
      displayRematch("Computer");
    }
  };

  // This function checks who has the winning hand
  // (idea taken from Dev ed on youtube, with my own added code)

  const checkHands = (playerChoice, computerChoice) => {
    // check for a draw
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a draw!";
      return;
    }

    // check for rock and adds score to winner
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
