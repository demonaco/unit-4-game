//Variables
var crystal = {
    green: {
        name: "green",
        value: 0
    },
    white: {
        name: "white",
        value: 0
    },
    purple: {
        name: "purple",
        value: 0
    },
    pink: {
        name: "pink",
        value: 0
    }

}

var currentScore = 0
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var commenceGame = function() {
    var currentScore = 0;

    var targetScore = getRandom(19, 120);

    crystal.green.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);

    //change html to reflect scores
$("#totalScore").html(currentScore)
$("#targetScore").html(targetScore)

console.log(crystal.green.value)
console.log(crystal.white.value)
console.log(targetScore)

}


//clicks on crystals
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    $("yourScore").html(currentScore);
    console.log(currentScore)
}

var checkWin = function(){
    if (currentScore > targetScore) {
        alert('You lost');
        lossCount++;

        $("#lossCount").html(lossCount)
    } else if (currentScore == targetScore) {
        alert("You won!");
        winCount++;
        $("#winCount").html(winCount)
    }
}

//event listeners

commenceGame();

$("#green").on("click", function() {
    alert("clicked Green");
    addValues(crystal.one);
    console.log(event)
});

$("#white").click(function() {
    event.preventDefault()
    addValues(crystal.two);
})

$("#purple").click(function() {
    event.preventDefault()
    addValues(crystal.three);
})

$("#pink").click(function() {
    event.preventDefault()
    addValues(crystal.four);

})



$("#scoreBox").html(currentScore)
$("#computerNumber").html(targetScore)






// //let's get the window ready & have the number to add up to appear when the window is loaded
// $(window).ready(function computerValue() {

//     var computerNumber = "";
//     var random = Math.floor(Math.random() * scoreArray.length);
//     console.log(random);
//     var computerNumber = computerNumber + random;

//     $("#computerNumber").text(computerNumber);
//     console.log(computerNumber);

//     // The .on method for click actions below should start a function that similiarly assigns a random number associated with the button and displays it on the #setScore div. 
// // We do this for each button

// $("#crystal1").on("click", function () {
//     var userScore1 = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length + 1);
//     console.log(randomInt);
//     userScore1 = userScore1 + randomInt;
    

//     $("#setScore").text(userScore1);
//     console.log(userScore1);

// });

// $("#crystal2").on("click", function() {
//     var userScore2 = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length + 1);
//     console.log(randomInt);
//     userScore2 = userScore2 + randomInt;


//     $("#setScore").html(userScore2);
//     console.log(userScore2);

// });

// $("#crystal3").on("click", function () {
//     var userScore3 = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length + 1);
//     console.log(randomInt);
//     userScore3 = userScore3 + randomInt;


//     $("#setScore").text(userScore3);
//     console.log(userScore3);

// });

// $("#crystal4").on("click", function () {
//     var userScore4 = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length + 1);
//     console.log(randomInt);
//     userScore4 = userScore4 + randomInt;

//     $("#setScore").text(userScore4);
//     console.log(userScore4);

//     //  now that each button is clickable, we should have a way to have each button hold it's own, random value. When that button is pressed, only that value will output. The user should be able to press any combination of the four buttons to display text or html on the #setScore div.

// // Let's write an if statement that compares the total score to the computers score so that the wins or losses can be determined

// if ($("#setScore").text ==  $("#computerNumber").text){
//    alert("you won!");
//    wins.text++ }
// if ($("#setScore") > "computerNumber"){
//     losses.text++}

// if (wins.text++ || losses.text++) {
//     computerNumber = 0;
//     userScore = 0;
// }
// });

// // 
// });

// //set up global array options for computer choice + user options
// var scoreArray = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
// var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// //set up our global variables
// var wins = 0;
// var losses = 0;
// var computerNumber;
// var userScore;
// var randomInt;
// var userScore1;
// var userScore2;
// var userScore3;
// var userScore4;
// var capturedCrystal1;
// var capturedCrystal2;
// var capturedCrystal3;
// var capturedCrystal4;