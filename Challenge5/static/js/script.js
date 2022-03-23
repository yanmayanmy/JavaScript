document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);



let blackjackGame = {
    'you' : {'scoreSpan' : '#your-score', 'cardDiv' : '#your-card', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-score', 'cardDiv' : '#dealer-card', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap' : {'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 10, 'Q' : 10, 'K' : 10, 'A' : [1, 11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');

function blackjackHit(){
    let card = randCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
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
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'card');
        cardImg.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['cardDiv']).appendChild(cardImg);
        // hitSound.play();   
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