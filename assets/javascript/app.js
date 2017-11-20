// listen for letters
// make word an array
// make place holder array as long as wordArray
// compare guess to wordArry and add correct letters to placeholder

$(document).ready(function () {
    /* Global variables 
     ******************************************/
    var wordList = ["apple_pie", "peach_pie", "cherry_pie"];
    var wins = 0;
    var placeholder =[];

    /* Functions
     ********************************************************/
    function randomWord() {
        var index = Math.floor(Math.random() * wordList.length);
        var word = wordList[index];
        
        placeholder = [];

        console.log(word);
        makePlaceholder(word, placeholder);
        createDashes(word);        
        keyPress(word, placeholder);
    }

    //make placeholder arr in th background
    function makePlaceholder(word, placeholder){
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
                checkWin(word, placeholder);
            }

        });
    }

    //compare keypress to word
    function compareLetters(word, letter, placeholder) {
        var screen;
        for (i = 0; i < word.length; i++) {
            if (word.charAt(i) === letter) {
                placeholder[i] = letter;
                $("#word").html(placeholder.join(" "));
                console.log("letter matches!!!!!");                
            } 
        }

        console.log(placeholder);
    }

    //chcek wins
    function checkWin(word, placeholder){
        if(placeholder.join("") === word.split("").join("")){
            wins++;
            console.log("you win " +wins+ " time(s)!!!");            
            $("#wins").html('<h2>Wins: '+wins+'</h2>');
            placeholder = [];
            resetGame(placeholder);
        }else{
            console.log("did not win.");
        }
    }

    function createDashes(word){
        for (i = 0; i < word.length; i++) {
            // append a new ____space everytime the loop runs
            $("#word").html("<span>" +placeholder.join(" ")+ "</sapan>");
        }
    }

    function resetGame(placeholder){
        randomWord(placeholder);
    }


    /* Running code
     *****************************************************************/
    randomWord(placeholder);

});