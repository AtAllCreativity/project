/*  
1. Create a function to have a random numerical value representing "Rock, Paper or Scissor" for the computer.
2. inside the computer funtion use conditionals to attribute values to "Rock, Paper or Scissor".
3. create a player function then prompt the option for "Rock, Paper or Scissor"
4. create  a round function with player and computer function inside ex: function round(computer, player).
5. inside the round function do the conditionals to attribute who wins.

now that we have the function for the game itself, lets make this a 5 round game.

1. attribute values to computer and player score
2. loop (study further).
*/




function getComputerChoice() {
    const randomNumberComputer = Math.floor(Math.random() * 3);

    if (randomNumberComputer === 0) {
        return 'rock';
    } else if (randomNumberComputer === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function getPlayerChoice() {
    return prompt('Which one would you like to select?\nRock, Paper, or Scissor?');
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'rock') {
        return 'Draw';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose';
    } else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        return 'You win';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You win';
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        return 'Draw';
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        return 'You lose';
    } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        return 'You lose';
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
        return 'You win';
    } else {
        return 'Draw';
    }
}

let playerScore = 0;
let computerScore = 0;

for (let round = 1; round <= 5; round++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);
    console.log(`Round ${round}: Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${result}`);

    if (result === 'You win') {
        playerScore++;
    } else if (result === 'You lose') {
        computerScore++;
    }
}

if (playerScore > computerScore) {
    console.log('You win the game!');
} else if (computerScore > playerScore) {
    console.log('Computer wins the game.');
} else {
    console.log('The game ends in a draw.');
}