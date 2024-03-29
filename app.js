let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock, paper, scissors

}

const drawGame = () => {
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor = "gray";
}

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin) {
         userScore++;
         userScorePara.innerText = userScore;
         msg.innerText = `You Win! `;
         msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! `;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //Generate Computer Choice -> modular
    const compChoice = GenCompChoice();

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice, compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    })
});