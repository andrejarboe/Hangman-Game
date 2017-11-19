// Coose a theme
word = "apple";
// use key event to listen for letters a player might type
// use onkeyup event listening

//create loop for arry
// compare array to letter guessed

// press any key to get started

// log wins
// create var wins 
// set wins to 0
var wins = 0;
// if player wins increment by 1
var playerWins = function () {
    wins++;
}

// number of guesses for user
// create a var for guessses
// set the var to 12(optional)
// if the player misses a letter, decress by 1.

// display letters user guesses

// create a var for the word
// display a dash, for each lettr
// use .lenght to check the lenght of the word
// create a for loop that puts as many dashes as there are letters

for (i = 0; i < word.lenght; i++) {
    $("#word-one").append("<span>_</span>");
    // append a new ____space everytime the loop runs

}

$( document ).ready(function() {
    
});