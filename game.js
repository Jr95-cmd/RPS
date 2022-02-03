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
    if (compSelection === "rock" && player === "paper" || player==="rock" && compSelection==="scissors" || player==="scissors" && compSelection ==="paper"){
        console.log("You win! ", player ," beats ", compSelection)
        }
    else if(compSelection === "rock" && player === "rock" || compSelection==="scissors" && player==="scissors" || compSelection==="paper" && player==="paper"){
    console.log("Draw!")
    }
    else if (compSelection === "rock" && player === "scissors" || compSelection==="scissors" && player==="paper" || compSelection==="paper" && player==="rock"){
    console.log("You lose ", compSelection, " beats ", player)
    }
}

/*Game function*/
function game(start)
{ start=1;
    for (start=1;start<=5;start++){
    play();
    }

}
