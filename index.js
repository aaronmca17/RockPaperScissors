// create array of options
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // generate random choice
    const randomString = Math.floor(Math.random() * options.length);
    return options[randomString];
}

function getHumanChoice() {
    // Converts all input to lowercase
    const choice = prompt(`Pick Rock, Paper or Scissors:`).toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`You tied! You both picked ${computerChoice}!`); // tie
    } else if (
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`); // win
        humanScore++;
    } else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        alert(`Round ${i+1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert(`Final Scores are: You ${humanScore} : Computer ${computerScore}.`);
}

playGame();
