document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);



let blackjackGame = {
    'you' : {'scoreSpan' : '#your-score', 'cardDiv' : '#your-card', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-score', 'cardDiv' : '#dealer-card', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');

function blackjackHit(){
    showCard(YOU);
}

function blackjackDeal(){
    let yourCard = document.querySelector('.flex-box-blackjack-row-1').querySelectorAll('img');
    
    // Removing all the cards.
    for (let i = 0; i < yourCard.length; i++) {
        yourCard[i].remove();
    }
}

function showCard(activePlayer){
    let cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'card');
    cardImg.src = randCardImg();
    document.querySelector(activePlayer['cardDiv']).appendChild(cardImg);
    // hitSound.play();   
}


function randCardImg(){
    let randInt =  Math.floor(Math.random() * 13);
    return `static/images/${blackjackGame['cards'][randInt]}.png`;
}

