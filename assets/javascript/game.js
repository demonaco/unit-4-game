
// //set up array options for computer choice + user options
// var scoreArray = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120]
// var userOptions = [1,2,3,4,5,6,7,8,9,10,11,12] 

// //set up our global variables
// var wins = 0
// var losses = 0
// var computerNumber; 
// var userScore = 0

//let's get the window ready & have the number to add up to appear when the window is loaded
$(window).ready(function computerValue() {

    var computerNumber = "";
    var random = Math.floor(Math.random() * scoreArray.length);
    console.log(random);
    var computerNumber = computerNumber + random;

    $("#computerNumber").text(computerNumber);
    console.log(computerNumber);

    // The .on method for click actions below should start a function that similiarly assigns a random number associated with the button and displays it on the #setScore div. 
// We do this for each button

$("#crystal1").on("click", function() {
    var userScore = "";
    var randomInt = Math.floor(Math.random() * userOptions.length);
    console.log(randomInt);
    userScore = userScore + randomInt;


    $("#setScore").html(userScore);
    console.log(userScore);

});

$("#crystal2").on("click", function() {
    var userScore = "";
    var randomInt = Math.floor(Math.random() * userOptions.length);
    console.log(randomInt);
    userScore = userScore + randomInt;


    $("#setScore").text(userScore);
    console.log(userScore);

});

$("#crystal3").on("click", function () {
    var userScore = "";
    var randomInt = Math.floor(Math.random() * userOptions.length);
    console.log(randomInt);
    userScore = userScore + randomInt;


    $("#setScore").text(userScore);
    console.log(userScore);

});

$("#crystal4").on("click", function () {
    var userScore = "";
    var randomInt = Math.floor(Math.random() * userOptions.length);
    console.log(randomInt);
    userScore = userScore + randomInt;


    $("#setScore").text(userScore);
    console.log(userScore);

});
});

// The .on method for click actions below should start a function that similiarly assigns a random number associated with the button and displays it on the #setScore div. 
// We do this for each button

// $("#crystal1").on("click", function() {
//     var userScore = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length);
//     console.log(randomInt);
//     userScore = userScore + randomInt;


//     $("#setScore").html(userScore);
//     console.log(userScore);

// });

// $("#crystal2").on("click", function() {
//     var userScore = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length);
//     console.log(randomInt);
//     userScore = userScore + randomInt;


//     $("#setScore").text(userScore);
//     console.log(userScore);

// });

// $("#crystal3").on("click", function () {
//     var userScore = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length);
//     console.log(randomInt);
//     userScore = userScore + randomInt;


//     $("#setScore").text(userScore);
//     console.log(userScore);

// });

// $("#crystal4").on("click", function () {
//     var userScore = "";
//     var randomInt = Math.floor(Math.random() * userOptions.length);
//     console.log(randomInt);
//     userScore = userScore + randomInt;


//     $("#setScore").text(userScore);
//     console.log(userScore);

// });

//next we will add up the values of the buttons clicked




//set up array options for computer choice + user options
var scoreArray = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//set up our global variables
var wins = 0
var losses = 0
var computerNumber;
var userScore;
var randomInt;
var userScore1;
var userScore2;
var userScore3;
var userScore4;