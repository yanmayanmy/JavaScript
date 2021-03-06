///////////////////
// Game settings
///////////////////
let blackjackGame = {
    'you' : {'scoreSpan' : '#your-score', 'cardDiv' : '#your-card', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-score', 'cardDiv' : '#dealer-card', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap' : {'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 10, 'Q' : 10, 'K' : 10, 'A' : [1, 11]},
    'isStand' : false,
}

let scoreBox = {
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
}

// Player Obj
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// Sounds
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const loseSound = new Audio('static/sounds/aww.mp3');

// Adding events to the buttons
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

///////////////////
// Functions
///////////////////
function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function blackjackDeal(){
    let yourCard = document.querySelector('.flex-box-blackjack-row-1').querySelectorAll('img');
    
    // Removing all the cards.
    for (let i = 0; i < yourCard.length; i++) {
        yourCard[i].remove();
    }

    //Reset the score board.
    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#your-score').textContent = 0;
    document.querySelector('#dealer-score').textContent = 0;
    document.querySelector('#your-score').style.color = 'rgb(211, 211, 211)';
    document.querySelector('#dealer-score').style.color = 'rgb(211, 211, 211)';
    document.querySelector('#game-result').textContent = "Let's Play.";

    document.querySelector('#blackjack-hit-button').style.display = ''; 
    document.querySelector('#blackjack-stand-button').style.display = '';
    document.querySelector('#blackjack-deal-button').style.display = 'none';

    blackjackGame['isStand'] = false;
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'card');
        cardImg.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['cardDiv']).appendChild(cardImg);
        hitSound.play();   
    }
}

// Pick a random card which corresponds to the name of the image file.
function randCard(){
    let randInt =  Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randInt];
}

function updateScore(card, activePlayer){
    if(card === 'A'){
        if(activePlayer['score'] >= 10){
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]; //Add 1
        }else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]; //Add 10
        }
    }else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = '#FF0F26';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 17){
        let card = randCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(500);
    }

    showResult(computeWinner());
}

function computeWinner(){
    let winner;

    if(YOU['score'] <=  21){
        if (DEALER['score'] > 21 || DEALER['score'] < YOU['score']) {
            winner = YOU;
        }else if(YOU['score'] < DEALER['score']){
            winner = DEALER;
        }else if(YOU['score'] === DEALER['score']){
            winner = null;
        }
    }else if(DEALER['score'] <= 21){
        winner = DEALER;
    }else{
        winner = null;
    }

    return winner;
}

function showResult(winner){
    switch (winner) {
        case YOU:
            resultMessage = 'You won!';
            scoreBox['wins'] += 1;
            winSound.play();
            break;
        case DEALER:
            resultMessage = 'You loss...';
            scoreBox['losses'] += 1;
            loseSound.play();
            break;
        case null:
            resultMessage = 'Draw.';
            scoreBox['draws'] += 1;
            break;
    }

    document.querySelector('#score-box-wins').textContent = scoreBox['wins'];
    document.querySelector('#score-box-losses').textContent = scoreBox['losses'];
    document.querySelector('#score-box-draws').textContent = scoreBox['draws'];
    document.querySelector('#game-result').textContent = resultMessage;
    
    document.querySelector('#blackjack-hit-button').style.display = 'none'; 
    document.querySelector('#blackjack-stand-button').style.display = 'none';   
    document.querySelector('#blackjack-deal-button').style.display = '';   
}