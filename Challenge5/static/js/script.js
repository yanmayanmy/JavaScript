document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);



let blackjackGame = {
    'you' : {'scoreSpan' : '#your-score', 'cardDiv' : '#your-card', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-score', 'cardDiv' : '#dealer-card', 'score' : 0},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');

function blackjackHit(){
    showCard(DEALER);
}

function showCard(activePlayer){
    let cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'card')
    cardImg.src = 'static/images/Q.png';
    document.querySelector(activePlayer['cardDiv']).appendChild(cardImg);
    hitSound.play();   
}