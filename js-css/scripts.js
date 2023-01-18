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
    let computerchoice = getComputerChoice()
    if (playerSelection.toLowerCase() == computerchoice) {
        return 'tie!-00';
// This is spaced strangely because when we split the string later to find out the win   
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (computerchoice == 'paper') {
            return 'loss-RP';
        } else if (computerchoice == 'scissors') {
            return 'win!-RS';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerchoice == 'scissors') {
            return 'loss-PS';
        } else if (computerchoice == 'rock') {
            return 'win!-PR';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerchoice == 'rock') {
            return 'loss-SR';
        } else if (computerchoice == 'paper') {
            return 'win!-SP';
        }
    } else {
        console.log(playerSelection);
        console.log(computerchoice);
    }
    console.log(playerSelection)}


// declaring container
const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.style.backgroundColor = "white";

// Declaring individual button nodes
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')

// Adding event listeners to buttons
let rockEvent = singlernd('Rock');
let paperEvent = singlernd('Paper');
let scissorsEvent = singlernd('Scissors');

rock.addEventListener("click", function() {game(singlernd('Rock')); });
paper.addEventListener("click", function() {game(singlernd('Paper')); });
scissors.addEventListener("click", function() {game(singlernd('Scissors')); });

//Use DOM method to create a DIV element and change based on winner
const winDiv = document.createElement('div');
const winHone = document.createElement('h3');

function game(winDefinition) {
    // this seperates the first 3 letters of the string r.g "loss-SR" to "los"
    let victoryVar = winDefinition.substring(0,2);
    winHone.textContent = winDefinition
    document.body.appendChild(winDiv);
    winDiv.appendChild(winHone);
    winHone.style.color = 'black';
    
};









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
