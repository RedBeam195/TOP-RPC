let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
};
let playerScore = 0;
let machineScore = 0;
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You win, rock beats scissors");
      playerScore+=1;
    } else if (computerSelection === "paper") {
      console.log("You lose, paper wins rock");
      machineScore+=1;
    } else {
      console.log("Tie");
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You lose, scissors beats paper");
      machineScore+=1;
    } else if (computerSelection === "rock") {
      console.log("You win, paper wins rock");
      playerScore+=1;
    } else {
      console.log("Tie");
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You lose, rock beats scissors");
      machineScore+=1;
    } else if (computerSelection === "paper") {
      console.log("You win, scissors wins paper");
      playerScore+=1;
    } else {
      console.log("Tie");
    }
  }
};

let startRound = () => {
  playRound(prompt("Rock,Paper,Scissors").toLowerCase(), getComputerChoice());
};

let game = ()=>{
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();

    if(playerScore>machineScore){
        console.log("The winner is the player");
        console.log(`With a score of ${playerScore}`);
        playerScore = 0;
        machineScore = 0;
    }else{
        console.log("The winner is the computer");
        console.log(`With a score of ${machineScore}`);
        playerScore = 0;
        machineScore = 0;
    }
}
