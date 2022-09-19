

let computerChoice = "";
let userChoice = "";
let roundResult;
let counterHuman = 0;
let counterComputer = 0;


let playerSelection;
console.log(playerSelection);

/////////COMPUTER CHOICE
////////////////////////////////

function getComputerChoice(){
   let randomNumber =  Math.floor(Math.random()*3);
   

   //console.log(randomNumber);

   if(randomNumber === 1){
    console.log("rock");

    computerChoice ="rock";
    return computerChoice;
    

   }
   else if(randomNumber === 2){
    console.log("paper");
    computerChoice ="paper";
    return computerChoice;
   }

   else{
    console.log("scissors");
    computerChoice ="scissors";
    return computerChoice;
    
   }


}

//getComputerChoice();



function playRound(playerSelection,computerSelection){

    

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock" 
    || playerSelection.toLowerCase() == "paper" && computerSelection == "paper" 
    || playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){

        roundResult = "Tie! Try Again!";

        console.log(roundResult);
       
        return roundResult;
        
    }

    else if (
    playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" 
    || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" 
    || playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ) {

        roundResult = "Congrats! You won!";
        console.log(roundResult);
        return roundResult;


    }

    else if (
    playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" 
    || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors" 
    || playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {

        roundResult = "You got bested! Better luck next time!";
        console.log(roundResult);
        return roundResult;
    }

    else {
        console.log("Something Strange Is Going On!")
    }

}



playRound(userChoice,computerChoice);


function game(){

    

    for( let i = 0; i < 5; i++){

        userChoice = prompt("Make your choice");
        console.log(userChoice);

        computerChoice = getComputerChoice();
        console.log(computerChoice);

        playRound(userChoice,computerChoice);  

        if (roundResult == "Congrats! You won!") {
            counterHuman ++;

            console.log(counterHuman);
        }


        else if( roundResult == "You got bested! Better luck next time!") {
            counterComputer ++;
            console.log(counterComputer);
        }

        else{
            
        }

    }

    if (counterHuman > counterComputer) {
        console.log("You won the game!");
    }

    else if(counterHuman < counterComputer){
        console.log("That was close, but you lost the game !");
        
    }

    else if(counterHuman == counterComputer){
        console.log("It's time for a rematch!");
    }

else{
    return;
}
}



game();