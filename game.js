console.log("hello world!")

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

/*function to to play the rock paper scissors game*/
function play(playerSelection,computerSelection)
{
    
    let player = playerSelection.toLowerCase();
    console.log(player);  
    computerSelection=computerPlay();
    let compSelection=computerSelection;
    console.log(computerSelection);
    let status="";
   
    let winMatch="You win !"
    let loseMatch="You lose"
    let drawGame="Draw!"
    
    if (compSelection === "rock" && player === "paper" || player==="rock" && compSelection==="scissors" || player==="scissors" && compSelection ==="paper")
    {
        status="Winner"; 
        console.log (player,"beats ",computerSelection);
     }
    else if(compSelection === "rock" && player === "rock" || compSelection==="scissors" && player==="scissors" || compSelection==="paper" && player==="paper")
    {
        status="Draw";
        console.log (status);
        
    }
    else if (compSelection === "rock" && player === "scissors" || compSelection==="scissors" && player==="paper" || compSelection==="paper" && player==="rock")
    {
        status="Loser"
        console.log(compSelection, " beats ", player)
    
        
    }
        return status
  
     
}

/*Game function*/

function game(start,trial)
{ start=1;
    let yourScore=0;
    let compScore=0;
    /*play("rock");*/
   
    
    for (start=1;start<=5;start++)
    {
        pstatus=play("rock");

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
   
}


   