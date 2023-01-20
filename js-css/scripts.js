// Random Option Function Declaration
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * options.length);
    return(options[random]);
}

// Single Round Function, Plays through one round.
function singlernd(playerSelection) {
    let computerChoice = getComputerChoice();
    let playerSelect = playerSelection.toLowerCase();
    console.log(playerSelect)
    // Dealing With Tie Condition
    if (playerSelect == computerChoice) {
        return 'tie ';
    // Sorting all possible conditions
    } else if (playerSelect == "rock"){
        if (computerChoice = "scissors") {
            return 'win ';
        }
        if (computerChoice = "paper") {
            return 'loss ';
        }

    } else if (playerSelect == "paper"){
        if (computerChoice = "rock") {
            return 'win ';
        }
        if (computerChoice = "scissors") {
            return 'loss ';
        }

    } else if (playerSelect == "scissors"){
        if (computerChoice = "paper") {
            return 'win ';
        }
        if (computerChoice = "rock") {
            return 'loss ';
        }

    }
}

// Creating Rock Paper Container, Including Container Class
const rockPaperContainer = document.createElement('div')
rockPaperContainer.classList.add("rockPaperContainer")
// Creating Leaderboard Container
const leaderboardContainer = document.createElement('div')
leaderboardContainer.classList.add("leaderboardContainer")
// Creating Buttons 
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.textContent = 'R'
paperButton.textContent = 'P'
scissorsButton.textContent = 'S'
// Create Functions To Pass Button Conditions
function buttonSelection(Item, RPS) {
    let initrndResults = singlernd(Item);
    rndResults = initrndResults.substring(0,2)
    let divLeaderboard = document.createElement('div')
    divLeaderboard.classList.add("leaderboardOption")
    divLeaderboard.textContent = initrndResults
    leaderboardContainer.appendChild(divLeaderboard)
}
rockButton.addEventListener('click', function() {buttonSelection("Rock", rockButton)})
paperButton.addEventListener('click', function() {buttonSelection("Paper", paperButton)})
scissorsButton.addEventListener('click', function() {buttonSelection("Scissors", scissorsButton)})

// Append Buttons To Container
rockPaperContainer.appendChild(rockButton)
rockPaperContainer.appendChild(paperButton)
rockPaperContainer.appendChild(scissorsButton)
//Appending Container to Body
document.body.appendChild(rockPaperContainer)
rockPaperContainer.appendChild(leaderboardContainer)

/* psuedocode
is playerchoice equal to computerchoice? > yes = tie no = continue*/
