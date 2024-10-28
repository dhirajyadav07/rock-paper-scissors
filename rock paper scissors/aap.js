let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".item");
const msg=document.querySelector("#msg");
const myScore=document.querySelector("#myScore")
const cScore=document.querySelector("#cScore");
 const drawGame=()=>{
   msg.innerText="match draw! play again";
   msg.style.backgroundColor="yellow"; // change background
   msg.style.color="black";
 }
const showWinner=(userWin,userChoice,compChoice)=>{
    
    if(userWin){
        userScore++;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;          
        msg.style.backgroundColor="green"; // change background
        myScore.innerText=userScore;         // show score
    // console.log("You win");
    }
    else{
        compScore++;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;     
        msg.style.backgroundColor="red"; // change background
        cScore.innerText=compScore;      // show score
        // console.log("you lose");
    }
}

const genComputerChoice=()=>{
    // rock,paper,scissiors
    const options=["rock","paper","Scissor"]
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}


const playGame = (userChoice) => {
    // console.log("user choice= ", userChoice);
    
    // Generate computer choice
    const compChoice = genComputerChoice();
    // console.log("computer choice= ", compChoice);
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;

        switch (userChoice) {
            case "rock":
                userWin = compChoice=== "paper"?false:true;
                break;
            case "paper":
                userWin = compChoice === "Scissor"?false:true;
                break;
            case "Scissor":
                userWin = compChoice !== "rock";
                break;
           // Exit the function if the choice is invalid
        }

        showWinner(userWin,userChoice,compChoice);
    }
};




choice.forEach((item)=>{
    item.addEventListener("click",()=>{
        const userChoice=item.getAttribute("id");
      
       playGame(userChoice)
    });
});