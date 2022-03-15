function rpsGame(yourChoice){

    var humanHand, cpHand, final_result;
    humanHand = yourChoice.id;
    cpHand = intToHand(generateRandInt());
    final_result = judge(humanHand, cpHand);
    message = finalMessage(final_result)
    console.log(humanHand);
    console.log(cpHand);
    console.log(final_result);
    console.log(message);

}

function generateRandInt(){
    var randNum = Math.floor(Math.random() * 3);
    return randNum;
}

function intToHand(intNum) {
    return ['rock', 'paper', 'scissors'][intNum];
}

function intToResult(intNum) {
    return ['Winner', 'Draw', 'Loser'][intNum];
}

function judge(humanHand, cpHand){
    rpsJudgement = {
        "rock" : {"scissors" : 1, "rock" : 0.5, "paper" : 0},
        "paper" : {"rock" : 1, "paper" : 0.5, "scissors" : 0},
        "scissors" : {"paper" : 1, "scissors" : 0.5, "rock" : 0},
    }
    
    yourScore = rpsJudgement[humanHand][cpHand];
    cpScore = rpsJudgement[cpHand][humanHand];
    
    return [yourScore, cpScore];
}

function finalMessage([yourScore, cpScore]){
    if(yourScore === 1){
        return {"message" : "You won!!", "color" : "blue"};
    }else if(yourScore === 0.5){
        return {"message" : "Draw", "color" : "yellow"};
    }else{
        return {"message" : "You lost...", "color" : "red"};
    }
}