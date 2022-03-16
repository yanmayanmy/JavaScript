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
    console.log();

    rpsFrontEnd(humanHand, cpHand, message);

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
        return {"message" : "Draw", "color" : "gray"};
    }else{
        return {"message" : "You lost...", "color" : "red"};
    }
}

function rpsFrontEnd(humanHand, cpHand, finalMessage){
    rpsImageDatabase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src,
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanHandImage = document.createElement('img');
    var cpHandImage = document.createElement('img');
    humanHandImage.setAttribute('src', rpsImageDatabase[humanHand]);
    cpHandImage.setAttribute('src', rpsImageDatabase[cpHand]);

    var message = document.createElement('h2');
    message.innerHTML = finalMessage['message'];
    message.setAttribute('style', 'color :' + finalMessage['color'] + ';' ); 



    // console.log(humanHandImage)
    // console.log(cpHandImage)


    var humanDiv = document.createElement('div');
    var cpDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.append(humanHandImage);
    cpDiv.append(cpHandImage);
    messageDiv.append(message);

    document.getElementById("rps-img-box").append(humanDiv);
    document.getElementById("rps-img-box").append(messageDiv);
    document.getElementById("rps-img-box").append(cpDiv);
}