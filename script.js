let userChoice = undefined;

const rock = document.querySelector('#rock-btn');
const paper = document.querySelector('#paper-btn');
const scissors = document.querySelector('#scissors-btn');

rock.addEventListener('click', () => { userChoice = 'R'; playGame(userChoice); });
paper.addEventListener('click', () => { userChoice = 'P'; playGame(userChoice); });
scissors.addEventListener('click', () => { userChoice = 'S'; playGame(userChoice); });

let matches = 0;
let wins = 0;
let losses = 0;

function playGame(userChoice) {
    let computerChoice = getComputerChoice();

    let resultText = playRound(userChoice, computerChoice);

    const resultDiv = document.querySelector('#result');

    const result = document.createElement('p');
    result.textContent = resultText;
    if(matches == 0)
        resultDiv.innerHTML = "";

    if(resultText.slice(0, 8) == "You win!") {
        wins++;
        result.style.color = "#04AA6D";
    } else if(resultText.slice(0, 9) == "You lose!") {
        losses++;
        result.style.color = "#f44336";
    }
    matches++;

    resultDiv.appendChild(result);

    if(wins == 5 || losses == 5) {
        setTimeout(() => { resetGame(resultDiv) }, 400);
    }
}

function resetGame(resultDiv) {
    resultDiv.innerHTML = ""
    const final = document.createElement('p');

    if(wins > losses) {
        final.textContent = "End of game. YOU WON!";
        final.style.color = "#04AA6D";
    } else {
        final.textContent = "End of game. You lost.";
        final.style.color = "#f44336";
    }
    final.style.fontSize = "2em";
    resultDiv.appendChild(final);

    const stats = document.createElement('p');
    stats.textContent = `You have played ${matches}, won ${wins} and lost ${losses}!`;
    stats.style.fontSize = "1.2em";
    resultDiv.appendChild(stats);

    matches = 0;
    wins = 0;
    losses = 0;
}

function playRound(userChoice, computerChoice) {
    if(userChoice == "R") {
        if(computerChoice == "Rock") {
            return ("Draw! The computer also played Rock");
        } else if(computerChoice == "Paper") {
            return ("You lose! Paper beats Rock");
        } else { // scissors
            return ("You win! Rock beats Scissors");
        }
    }

    if(userChoice == "P") {
        if(computerChoice == "Rock") {
            return ("You win! Paper beats Rock");
        } else if(computerChoice == "Paper") {
            return ("Draw! The computer also played Paper");
        } else { // scissors
            return ("You lose! Scissors beats Paper");
        }
    }

    if(userChoice == "S") {
        if(computerChoice == "Rock") {
            return ("You lose! Rock beats Scissors");
        } else if(computerChoice == "Paper") {
            return ("You win! Scissors beats Paper");
        } else { // scissors
            return ("Draw! The computer also played Scissors");
        }
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    let play = undefined;

    if(choice == 0) {
        play = "Rock";
    } else if(choice == 1) {
        play = "Paper";
    } else {
        play = "Scissors";
    }

    // console.log(`The computer chose ${play}`);

    return play;
}
