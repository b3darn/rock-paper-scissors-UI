
function computerPlay() {
    let computerChoice = Math.floor(Math.random()*(3-1+1)+1);
    
    if (computerChoice === 1) {
        return "Rock";
    }
    else if (computerChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const computerSelection = computerPlay()
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let tieScore = document.querySelector('#tieScore');
let roundWinner;

function playRound(playerSelection, computerSelection){
        
        if (playerSelection === computerSelection) {
            console.log("Tie");
            roundWinner = "Tie";
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log("Player");
            roundWinner = "Player";
        }
        else if (computerSelection === "Rock" && playerSelection === "Scissors" || 
        computerSelection === "Paper" && playerSelection === "Rock" || 
        computerSelection === "Scissors" && playerSelection === "Paper") {
            console.log("Computer");
            roundWinner = "Computer";
        }
    }

let playerWins = 0;
let computerWins = 0;
let gameTies = 0;
let results = document.querySelector("#results");

function gameWinner() {

        if (roundWinner === "Tie") {
            gameTies += 1;
            tieScore.textContent = gameTies;
        }
        else if (roundWinner === "Player") {
            playerWins += 1;
            playerScore.textContent = playerWins;
        }
        else {
            computerWins += 1;
            computerScore.textContent = computerWins;
        }
    
    if ((playerWins + computerWins + gameTies) === 5) {
        const div = document.createElement('div');
        div.setAttribute("id", "resultsText");
        let resultsText = document.querySelector("#resultsText");
        if (playerWins > 2) {
            div.textContent = "You win!";
        }
        else if (computerWins > 2) {
        div.textContent = "You lose...";
        }
        else {
        div.textContent = "It's a tie!";
        }
    results.appendChild(div);
    }
}

function checkIfNewGame() {
    if ((playerWins + computerWins + gameTies) === 5) {
    playerWins = 0;
    playerScore.textContent= 0;
    computerWins = 0;
    computerScore.textContent = 0;
    gameTies = 0;
    tieScore.textContent = 0;
    results.removeChild(resultsText)
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
button.addEventListener('click', (e) => {
    checkIfNewGame();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(e.target.id, computerSelection);
    gameWinner();
});
});