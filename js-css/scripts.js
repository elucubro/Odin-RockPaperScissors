// Picks random string object from array
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * options.length);
    return(options[random]);
}

// This function plays out one round
// psudeocode
// is playerchoice equal to computerchoice? | yes = tie | no = continue

function singlernd(playerSelection) {
    if (playerSelection.toLowerCase() == getComputerChoice()) {
        return 'tie!-00';
// This is spaced strangely because when we split the string later to find out the win   
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (getComputerChoice() == 'paper') {
            return 'loss-RP';
        } else if (getComputerChoice() == 'scissors') {
            return 'win!-RS';
        }
    } else if (playerSelection.toLowerCase() == 'paper') 
        if (getComputerChoice() == 'scissors') {
            return 'loss-PS';
        } else if (getComputerChoice() == 'rock') {
            return 'win!-PR';
    } else if (playerSelection.toLowerCase() == 'scissors') 
        if (getComputerChoice() == 'rock') {
            return 'loss-SR';
        } else if (getComputerChoice() == 'paper') {
            return 'win!-SP';
    } else {
        return 'ERROR';
    }}

// declaring container
const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.style.backgroundColor = "white";

// Declaring individual button nodes
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')

// Adding event listeners to buttons
rock.addEventListener("click", function() {singlernd('Rock'); });
paper.addEventListener("click", function() {singlernd('Paper'); });
scissors.addEventListener("click", function() {singlernd('Scissors'); });

//Use DOM method to create a DIV element and change based on winner
function game(winDefinition) {
    // this seperates the first 3 letters of the string r.g "loss-SR" to "los"
    let victoryVar = winDefinition.substring(0,2);
    const winDiv = document.createElement('div');
    const winHone = document.createElement('h3');
    winHone.textContent = winDefinition
    winDiv.appendChild(winHone);
    winHone.style.color = 'black';
};

game('win');







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
