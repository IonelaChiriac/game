let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizzard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = Math.floor(Math.random() * 5); 
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizzard";
    if (letter === "k") return "Spock";   
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rl":
    case "rs":
    case "pr":
    case "pk":
    case "sp":
    case "sl":
    case "lp":
    case "lk":
    case "ks":
    case "kr":
        win(userChoice, computerChoice);
        break;

    case "lr":
    case "sr":
    case "rp":
    case "kp":
    case "ps":
    case "ls":
    case "pl":
    case "kl":
    case "sk":
    case "rk":
        lose(userChoice, computerChoice);
        break;

    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "kk":
        draw(userChoice, computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
    lizzard_div.addEventListener('click',() => game("l"));
    spock_div.addEventListener('click',() => game("k")); 
}

main();

/*
Rock crushes Lizard
Rock crushes Scissors
Paper covers Rock
Paper Disproves Spock
Scissors cuts Paper
Scissors decapitates Lizard
Lizard eats Paper
Lizard poisons Spock
Spock smashes Scissors
Spock vaporizes Rock
*/