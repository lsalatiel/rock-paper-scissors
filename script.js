playGame();

function playGame() {
    let matches = 0;
    let wins = 0;
    let losses = 0;

    while(true) {
        let userChoice = prompt("Enter your choice [R - rock, P - paper, S - scissors, E - exit]: ");
        let computerChoice = getComputerChoice();
        
        userChoice = userChoice.toUpperCase();

        if(userChoice != "R" && userChoice != "P" && userChoice != "S" && userChoice != 'E') {
            console.log("Invalid choice. Try again.");
            continue;
        } else if(userChoice == 'E') {
            console.log("End of game.");

            if(wins > losses) {
                console.log("YOU WON!")
            } else if(wins < losses) {
                console.log("You lost.")
            } else {
                console.log("It's a DRAW.")
            }
            
            console.log(`You have played ${matches}, won ${wins} and lost ${losses}!`);
            break;
        }

        let result = playRound(userChoice, computerChoice);

        console.log(result);

        if(result.slice(0, 8) == "You win!") {
            wins++;
        } else if(result.slice(0, 9) == "You lose!") {
            losses++;
        }
        matches++;
    }
}

function playRound(userChoice, computerChoice) {
    if(userChoice == "R") {
        if(computerChoice == "Rock") {
            return ("Draw! The computer also played Rock");
        } else if(computerChoice == "Paper") {
            return ("You lose! Paper beats Rock");
        } else { // scissors
            return ("You win! Paper beats Rock");
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