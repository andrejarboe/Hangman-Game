// Coose a theme
// use key event to listen for letters a player might type
// use onkeyup event listening

// create loop for arry
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

for (i = 0; i < word.length; i++) {
    $("#word-one").append("<span>_</span>");
    // append a new ____space everytime the loop runs

}

$(document).ready(function () {
    var word = "apple pie";
    var placeholder = [];

    // add dashes to the screen
    function addDashes() {
        for (i = 0; i < word.length; i++) {
            $("#word").append("<strong>_</strong>");
        }
    }

    //check letter
    function checkLetter(word, letter) {
        console.log("word arr is: " + word.split(""));
        // use charAt to check letters
        for (i = 0; i < word.length; i++) {
            if (word.charAt(i) === letter) {
                // console.log("letter matches!!!!!");
                placeholder[i] = letter;
                // console.log(placeholder);
            } else {
                // console.log("letter does not match");
                // console.log(placeholder);
            }
        }
        console.log(placeholder);        
    }

    //make placeholder arr
    //hold word
    function wordHolder(word) {
        for(i=0; i< word.length; i++){
            placeholder.push("_");
        }

        console.log("placeholder arr: "+placeholder);
    }

    wordHolder(word);

    //listen for user key press
    $(document).on("keyup", function (event) {
        if (event.which >= 65 && event.which <= 90) {
            console.log(event.key);
            checkLetter(word, event.key);
        }

    });

    console.log("The word is: " + word);
    console.log("the lenght of the word is: " + word.length);
    addDashes();



});


// listen for letters
// make word an array
// make place holder as long as wordArray
// compare guess to wordArry and add correct letters to placeholder
