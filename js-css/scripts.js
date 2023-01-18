function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * options.length);
    return(options[random]);
}

function singlernd(playerSelection) {
    if (playerSelection.toLowerCase() == getComputerChoice()) {
        return 'tie!';
    } else if (playerSelection.toLowerCase() == 'rock') {
        return 'Worked!';
    }
}

console.log(singlernd(ROcK));

/* psuedocode
is playerchoice equal to computerchoice? > yes = tie no = continue*/
