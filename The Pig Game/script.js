'use strict';


// Selecting elements

let scores, roundScore, activePlayer;



// Starting conditions
function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
 }

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
    
    // Generate Random Number
    let dice = Math.floor(Math.random()*6) + 1;

    // Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update the round score, if the rolled number was not a 1.
    if(dice !== 1) {
        //Add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').style.display = 'none';
    }
    else{
        nextPlayer();
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {

    // Add Current score to Global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if(scores[activePlayer] >= 20 ) {
        document.querySelector('#name--' + activePlayer).textContent = 'WINNER!';
    }
    else {
        // Next Player
        nextPlayer();
    }
 });

 function nextPlayer() {
     //Next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current--0').textContent = '0';
     document.getElementById('current--1').textContent = '0';

     document.querySelector('.dice').style.display = 'none';
 }

 document.querySelector('.btn--new').addEventListener('click', init);

