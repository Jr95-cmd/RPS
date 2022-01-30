console.log("hello world!")

/*this function is based on an array of three parameters, using 
 the */
function computerPlay(move)
{
    
let val = ["Rock","Paper","Scissors"]
    const randomVal= Math.floor(Math.random()*val.length)
    console.log(val[randomVal]);
}