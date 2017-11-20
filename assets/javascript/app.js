// listen for letters
// make word an array
// make place holder array as long as wordArray
// compare guess to wordArry and add correct letters to placeholder

$(document).ready(function () {
    /* Global variables 
     ******************************************/
    var wordList = ["apple pie", "peach pie", "cherry pie"];

    /* Functions
     *******************************************************
     */

    function randomWord() {
        var index = Math.floor(Math.random() * wordList.length);
        var word = wordList[index];
        var placeholder = [];

        console.log(word);
        makePlaceholder(word, placeholder);
        keyPress(word, placeholder);
    }

    //make placeholder arr in th background
    function makePlaceholder(word, placeholder){
        for (i = 0; i < word.length; i++) {
            placeholder.push(" ");
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
            }

        });
    }

    //compare keypress to word
    function compareLetters(word, letter, placeholder) {
        for (i = 0; i < word.length; i++) {
            if (word.charAt(i) === letter) {
                placeholder[i] = letter;
                console.log("letter matches!!!!!");                
            } 
        }

        console.log(placeholder);
    }


    /* Running code
     *****************************************************************/
    randomWord();

});