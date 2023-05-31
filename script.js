let x = getComputerChoice();
console.log(x);

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);

    let play = undefined;

    if(choice == 0) {
        play = "Rock";
    } else if(choice == 1) {
        play = "Paper";
    } else {
        play = "Scissors";
    }

    return play;
}