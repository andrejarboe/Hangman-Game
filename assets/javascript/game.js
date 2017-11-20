// Coose a theme
// use key event to listen for letters a player might type
// use onkeyup event listening

// create loop for arry
// compare array to letter guessed

// press any key to get started




// number of guesses for user
// create a var for guessses
// set the var to 12(optional)
// if the player misses a letter, decress by 1.

// display letters user guesses

// create a var for the word
// display a dash, for each lettr
// use .lenght to check the lenght of the word
// create a for loop that puts as many dashes as there are letters


$(document).ready(function () {
    var word = "pie";
    var placeholder = [];

    // log wins
    // create var wins 
    // set wins to 0
    var wins = 0;
    // if player wins increment by 1
    var playerWins = function () {
        wins++;
        console.log("you won " + wins + " time(s)!");
    }

    // add dashes to the screen
    function addDashes() {
        for (i = 0; i < word.length; i++) {
            // append a new ____space everytime the loop runs

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
        for (i = 0; i < word.length; i++) {
            placeholder.push(" ");
        }

        console.log("placeholder arr: " + placeholder);
        console.log("placeholder typeof: " + typeof placeholder);
        

    }

    //compare place holder to word
    function checkWin(userWord, theWord) {
        theWord = word.split("");

        console.log("checking wins");
        console.log("placeholder is: " + placeholder);
        console.log("typeof is: " + typeof placeholder);
        console.log("word is: " + word.split(""));
        console.log("typeof is: " + word.split(""));

        if (userWord.join("") === theWord.join("")) {
            playerWins();
        } else {
            console.log("did not win");
        }
    }

    wordHolder(word);

    //listen for user key press
    $(document).on("keyup", function (event) {
        if (event.which >= 65 && event.which <= 90) {
            console.log(event.key);
            checkLetter(word, event.key);
            checkWin(placeholder, word);
            console.log("placeholder is: " + placeholder);
            console.log("word is: " + word.split(""));

        }

    });

    console.log("The word is: " + word);
    console.log("the lenght of the word is: " + word.length);
    addDashes();

});


// listen for letters
// make word an array
// make place holder array as long as wordArray
// compare guess to wordArry and add correct letters to placeholder