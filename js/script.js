// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
var computerChoice;
var userChoice;
var winner;

//based on if randomNumber is greater than .6666, if randomNumber is less than .6666 but greater than .3333 else 
var randomNumber = Math.random()

//GLOBAL VARIABLES
/* global $ */
$('#shoot').click(function() {
   var userChoice = $('#input').val()
    $('#userChoice').text(userChoice)

    if (randomNumber > .66666 ) {
        $("#computerChoices").text("scissors");
    }
    else if (randomNumber > .3333 ) {
        $("#computerChoices").text("rock");
    }
    else if (randomNumber > .1111) {
        $()
    }
});



// DOCUMENT READY FUNCTION BELOW

