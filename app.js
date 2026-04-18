// variables used to track user-score and computer-score 
let userScore = 0;
let comScore = 0;

//to select which choice is clicked  so all choices are accessed
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // to show the win lose or draw we need to print in msg-container so it has to be accessed first

const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

//to genereate random comuter choice this fun is written
const generateCompChoice = () => {
    //rock paper scissors to select these store it in an array
    const options = ["rock","paper", "scissor"];  //random generation of string is not possible so it treats index id array as num 
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("draw game");
    msg.innerText = "draw game. play again";
    msg.style.backgroundColor = "orange";
};

//to showwinner
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        compscorepara.innerText = comScore;
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate com choice
    const compChoice = generateCompChoice();
    console.log("comp choice = ", compChoice);

// to check user comp chioce
    if(userChoice === compChoice){
        //draw game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

//to track click event enent listner is added on div
choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
