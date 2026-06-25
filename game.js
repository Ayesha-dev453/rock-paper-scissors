let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gamedraw = () =>{
  msg.innerText = "Game was draw.play again!";
  msg.style.backgroundColor = "#081b31";
}

const gencompchoice = ()  =>{
  const options = ["rock","paper","scissors"];
  const ranIdx = Math.floor(Math.random()*3);
  return options[ranIdx];
}
const showwinner = (userWin)=>{
  if(userWin){
  userscore++;
  userscorepara.innerText = userscore;
  msg.innerText = "you win";
  msg.style.backgroundColor = "green";
  }else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = "you lose";
    msg.style.backgroundColor = "red";
  }
}

const playgame = (userchoice)=>{
  console.log("user choice =",userchoice);
  const compChoice = gencompchoice();
  console.log("comp choice = ",compChoice);
  if(userchoice===compChoice){
    gamedraw();
    }
    else{
      let userWin = "true";
      if(userchoice === "rock"){
        userWin = compChoice=== "paper" ? false: true;
      }else if(userchoice === "paper"){
       userWin =  compChoice === "scissors" ? false: true;
      }else{
        userWin = compChoice === "rock"? false: true;
      }
      showwinner(userWin,);
    }
  };

choices.forEach((choice)=>{
  console.log(choices);
  choice.addEventListener("click", ()=>{
   const userchoice = choice.getAttribute("id"); 
   console.log("choice was clicked",userchoice);
   playgame(userchoice);
  })
})
