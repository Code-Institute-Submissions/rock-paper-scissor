"use strict";

// main game container to prevent global variables

const game = () => {
  // main elements

  const title = document.getElementById("title");
  const gameRules = document.getElementById("game-rules");
  const playButton = document.getElementById("play");
  const gameSection = document.getElementById("game");

  // Hide main page and show game page
  playButton.addEventListener("click", startGame);
  function startGame() {
    playButton.classList.add("hide");
    gameRules.classList.add("hide");
    title.classList.add("hide");
    gameSection.classList.remove("hide");
  }
};

game();
