// Creating Rock Paper Container, Including Container Class
const rockPaperContainer = document.createElement('div')
rockPaperContainer.classList.add("rockPaperContainer")
document.body.appendChild(rockPaperContainer)

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
    if (playerSelect == computerChoice) {
        return 'tie! ';
    } else if (playerSelect == "rock"){
        if (computerChoice = "scissors") {
            return 'win! ';
        }
        if (computerChoice = "paper") {
            return 'loss! ';
        }

    } else if (playerSelect == "paper"){
        if (computerChoice = "rock") {
            return 'win! ';
        }
        if (computerChoice = "scissors") {
            return 'loss! ';
        }

    } else if (playerSelect == "scissors"){
        if (computerChoice = "paper") {
            return 'win! ';
        }
        if (computerChoice = "rock") {
            return 'loss! ';
        }

    }
}


/* psuedocode
is playerchoice equal to computerchoice? > yes = tie no = continue*/
