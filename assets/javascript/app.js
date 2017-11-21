// listen for letters
// make word an array
// make place holder array as long as wordArray
// compare guess to wordArry and add correct letters to placeholder

$(document).ready(function () {
    /* Global variables 
     ******************************************/
    var wordList = [
        "apple", "peach", "cherry", "banana", "pumkin",
        "chess", "blackberry", "mince", "rhubarb", "buttermilk"
    ];
    var index = Math.floor(Math.random() * wordList.length);
    var wins = 0;
    var placeholder = [];



    /* Functions
     ********************************************************/
    function randomWord(placeholder) {
        var word = wordList[index];
        console.log(word);
        console.log("placeholder=[] is: " + placeholder);

        makePlaceholder(word, placeholder);
        console.log("placeholder is: " + placeholder);
        console.log("word is: " + word);
        createDashes(word, placeholder);
        keyPress(word, placeholder);
    }

    //make placeholder arr in th background
    function makePlaceholder(word, placeholder) {
        console.log("makePlaceholder: " + placeholder);
        for (i = 0; i < word.length; i++) {
            placeholder.push("_");
        }
    }

    //listen for key pressed
    function keyPress(word, placeholder) {
        $(document).on("keyup", function (event) {
            if (event.which >= 65 && event.which <= 90) {
                console.log(event.key);
                console.log("word is: " + word.split(""));
                var letter = event.key;
                compareLetters(word, letter, placeholder);
                checkWin(word);
            }

        });
    }

    //compare keypress to word
    function compareLetters(word, letter, placeholder) {
        for (i = 0; i < word.length; i++) {
            if (word.charAt(i) === letter) {
                placeholder[i] = letter;
                $("#word").html(placeholder.join(" "));
            } else {
                $("#gussed").append(letter);
            }
        }

        console.log(placeholder);
    }

    //chcek wins
    function checkWin(word) {
        if (placeholder.join("") === word.split("").join("")) {
            wins++;
            console.log("you win " + wins + " time(s)!!!");
            $("#wins").html('<h2>Wins: ' + wins + '</h2>');
            console.log("Placeholder[] is: " + placeholder);
            newGame();
        } else {
            console.log("did not win.");
        }
    }

    function createDashes(word, placeholder) {
        for (i = 0; i < word.length; i++) {
            // append a new ____space everytime the loop runs
            $("#word").html("<span>" + placeholder.join(" ") + "</sapan>");
        }


    }

    function newGame() {
        $("#gussed").text("");
        placeholder = [];
        index = Math.floor(Math.random() * wordList.length);

        randomWord(placeholder);

    }



    /* Running code
     *****************************************************************/
    newGame();
});