let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
};
let playerScore = 0;
let machineScore = 0;

let playerChoice = "";
let gameFinished = false;

let updateDisplay = (playerImg, machineImg) => {
  let playerIcon = document.querySelector("#player-image");
  let machineIcon = document.querySelector("#machine-image");

  if (playerImg != "nothing") {
    playerIcon.setAttribute("src", `./img/${playerImg}.png`);
    if (machineImg != "nothing") {
      machineIcon.setAttribute("src", `./img/${machineImg}.png`);
    }
  } else {
    playerIcon.removeAttribute("src");
    machineIcon.removeAttribute("src");
  }
}

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You win, rock beats scissors");
      playerScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);

    } else if (computerSelection === "paper") {
      console.log("You lose, paper wins rock");
      machineScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);


    } else {
      console.log("Tie");
      updateDisplay(playerSelection, computerSelection);
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You lose, scissors beats paper");
      machineScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);


    } else if (computerSelection === "rock") {
      console.log("You win, paper wins rock");
      playerScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);


    } else {
      console.log("Tie");
      updateDisplay(playerSelection, computerSelection);

    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You lose, rock beats scissors");
      machineScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);


    } else if (computerSelection === "paper") {
      console.log("You win, scissors wins paper");
      playerScore += 1;
      updateScore()
      updateDisplay(playerSelection, computerSelection);


    } else {
      console.log("Tie");
      updateDisplay(playerSelection, computerSelection);

    }
  }
};

let updateScore = () => {
  let playerDisplay = document.querySelector("#player-score span");
  let machineDisplay = document.querySelector("#machine-score span");

  playerDisplay.textContent = playerScore;
  machineDisplay.textContent = machineScore;
}

let game = () => {
  let controller = document.querySelector(".controller");
  let buttons = controller.childNodes;
  document.querySelector("#player-score").style.color = "white";
  document.querySelector("#machine-score").style.color = "white";
  playerScore = 0;
  machineScore = 0;
  updateScore();
  updateDisplay("nothing", "nothing");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.textContent;
      if (playerScore != 5 && machineScore != 5) {
        playRound(playerChoice.toLowerCase(), getComputerChoice());
      }
      else {
        if (playerScore > machineScore) {
          document.querySelector("#player-score").style.color = "Green";
        } else {
          document.querySelector("#machine-score").style.color = "Green";
        }
        return undefined;
      }
    })
  })
  if (playerScore >= 5 || machineScore >= 5) {
    if (playerScore > machineScore) {
      playerScore = 0;
      machineScore = 0;
    } else {
      playerScore = 0;
      machineScore = 0;
    }
  }
}

let startBtn = document.querySelector("#start")

startBtn.addEventListener("click", () => {
  game();
})