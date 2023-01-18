function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * options.length);
    return(options[random]);
}








function singlernd(playerSelection) {
    if (playerSelection.toLowerCase() == getComputerChoice()) {
        return 'tie!';
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (getComputerChoice() == 'paper') {
            return 'loss! RP';
        } else if (getComputerChoice() == 'scissors') {
            return 'win! RS';
        }
    } else if (playerSelection.toLowerCase() == 'paper') 
        if (getComputerChoice() == 'scissors') {
            return 'loss! PS';
        } else if (getComputerChoice() == 'rock') {
            return 'win! PR';
    } else if (playerSelection.toLowerCase() == 'scissors') 
        if (getComputerChoice() == 'rock') {
            return 'loss! SR';
        } else if (getComputerChoice() == 'paper') {
            return 'win! SP';
    } else {
        return 'ERROR';
    }}

// declaring functions
const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.style.backgroundColor = "white";

// Declaring individual button nodes
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')


// Adding event listeners to buttons
rock.addEventListener("click", function(){ singlernd('Rock'); });
paper.addEventListener("click", function() {singlernd('Paper'); });
scissors.addEventListener("click", function() {singlernd('Scissors'); });





/* psuedocode
function Vround() {
    singlernd()
    singlernd()
    singlernd()
    singlernd()
    singlernd() }

singlernd('ROcK');
singlernd('SciSSors');
singlernd('PaPeR');

is playerchoice equal to computerchoice? > yes = tie no = continue*/
