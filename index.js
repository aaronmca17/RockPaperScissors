function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    // const computerChoice = getComputerChoice(); // Generate computer choice first
    // console.log("Computer chose:", computerChoice); // Log computer's choice for testing

    const choice = prompt(`Pick Rock, Paper or Scissors:`).toLowerCase(); // Convert input to lowercase

    if (choice === computerChoice) {
        alert("It was a tie!");
    } else if (
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "rock" && computerChoice === "scissors") ||
        (choice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound() {
    
}