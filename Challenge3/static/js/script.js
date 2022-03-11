function rpsGame(yourChoice){

    var humanHand, cpHand, final_result;
    humanHand = yourChoice.id;
    cpHand = generateCpHand();
    console.log(humanHand, cpHand);
    final_result = judge(humanHand, cpHand);

    console.log(final_result);

}

function generateCpHand(){

    var randNum = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randNum];
}

function judge(humanHand, cpHand){
    var result;

    if(humanHand == cpHand){
        result = "Tie";    
    }else if ((humanHand == "rock" && cpHand == "scissors") || (humanHand == "paper" && cpHand == "rock") || (humanHand == "scissors" && cpHand == "paper")) {
        result = "You win";
    }else {
        result = "You lose";
    }

    return result;
}