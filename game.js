/*this function is based on an array of three parameters, using 
 the floor method from the math class to retrieve a number less than or equal to another number 
 which was selected based on the random method of the math class based on a number between 1 and 0 normally
 but when paired with "*" it gets the random number based on the lenght of the array*/
function computerPlay(move)
{
    
let val = ["rock","paper","scissors"]
    const randomVal= Math.floor(Math.random()*val.length)
    let compMove=val[randomVal];
    return compMove;
}

//function to check if game has ended

function endGame()
{
    const uElement=document.getElementById("user");
    const cElement=document.getElementById("computer");
    
    if (uElement.textContent==5||cElement.textContent==5){
        if(uElement.textContent>cElement.textContent){
            alert("game over you win, your score: "+yourScore + " computer score: " + compScore);
        }
        else{
            alert("game over you lose, your score: "+ yourScore + " computer score: " + compScore);
        }
        //reload  page after game ends 
        location.reload(); 
    }
    
}

// score variable should be defined outisde of function in order to be update accordingly
let yourScore=0;
let compScore=0;
/*function to to play the rock paper scissors game*/
function play(playerSelection,computerSelection)
{
    //let userMove = prompt("Select your move: rock,paper,or scissors","You must make a mvoe")
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);  
    computerSelection=computerPlay();
    let compSelection=computerSelection;
    console.log(computerSelection);
    let status="";
   
    let winMatch="You win !"
    let loseMatch="You lose"
    let drawGame="Draw!"
    
    
    if (compSelection === "rock" && playerSelection === "paper" || playerSelection==="rock" && compSelection==="scissors" || playerSelection==="scissors" && compSelection ==="paper")
    {
        yourScore+=1;
        const uScore = document.querySelector('#userScore')
        const pScore= document.querySelector('#user');
        pScore.textContent=yourScore;
        uScore.appendChild(pScore);
        status="Winner!"; 
        window.alert(playerSelection+" beats "+computerSelection+", "+status);
        
        
    }
    else if(compSelection === "rock" && playerSelection === "rock" || compSelection==="scissors" && playerSelection==="scissors" || compSelection==="paper" && playerSelection==="paper")
    {
        yourScore=yourScore;
        compScore=compScore;
        status="Draw, No winner!";
        window.alert(status);
        
    }
    else if (compSelection === "rock" && playerSelection === "scissors" || compSelection==="scissors" && playerSelection==="paper" || compSelection==="paper" && playerSelection==="rock")
    {
        compScore+=1;
        const com = document.querySelector('#computerScore')
        const comScore= document.querySelector('#computer');
        comScore.textContent=compScore;
        com.appendChild(comScore);
        status="Loser!"
        window.alert(compSelection+" beats "+playerSelection+", "+status);
        
        
    }

    setTimeout(endGame,250);
}
  

/*Game function*/

/*function game(start,trial)
{ start=1;
    let yourScore=0;
    let compScore=0;
    for (start=1;start<=5;start++)
    {
        pstatus=play();

        if(pstatus==="Winner")
        {
        yourScore+=1
        console.log("Your score is ,",yourScore, "Computer score is", compScore);
        }

        else if(pstatus==="Loser")
        {
        compScore+=1
        console.log("Your score is ",yourScore, ", Computer score is ",compScore,);
        }

        else if(pstatus==="Draw")
        {
        yourScore=yourScore;
        compScore=compScore;
        console.log("Your score is ",yourScore,", Computer score is ",compScore);
        }

    }
    if (yourScore>compScore){
        console.log("You are the victor");
    }
    else if(yourScore==compScore){
        console.log ("Tie!")
    }
    else if(yourScore<compScore)
    {
        console.log("Computer is the victor!")
    }
   
}*/

const btn= document.querySelector('#btnR');
btn.addEventListener('click', () => {
    play("rock");
      
});

const btnP= document.querySelector('#btnP');
btnP.addEventListener('click', () => {
    play("paper");
    
    
});

const btnS= document.querySelector('#btnS');
btnS.addEventListener('click', () => {
    play("scissors");
    
});

//disabling image drage effect
document.getElementById('logo').setAttribute('draggable',false);
document.getElementById('btnS').setAttribute('draggable',false);
document.getElementById('btnP').setAttribute('draggable',false);
document.getElementById('btnR').setAttribute('draggable',false);






   