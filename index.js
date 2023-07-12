let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You win, rock beats scissors");
    } else if (computerSelection === "paper") {
      console.log("You lose, paper wins rock");
    } else {
      console.log("Tie");
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You lose, scissors beats paper");
    } else if (computerSelection === "rock") {
      console.log("You win, paper wins rock");
    } else {
      console.log("Tie");
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You lose, rock beats scissors");
    } else if (computerSelection === "paper") {
      console.log("You win, scissors wins paper");
    } else {
      console.log("Tie");
    }
  }
};

let startRound = () => {
  playRound(prompt("Rock,Paper,Scissors").toLowerCase(), getComputerChoice());
};
