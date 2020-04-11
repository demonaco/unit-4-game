$(document).ready(function() {
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

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var commenceGame = function() {
    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.green.value = getRandom(1, 12);
    crystal.white.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);

    //change html to reflect scores
$("#yourScore").html(currentScore)
$("#targetScore").html(targetScore)

console.log(crystal.green.value)
console.log(crystal.white.value)
console.log(targetScore)

}


//clicks on crystals
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();
    
    console.log(currentScore)
}

var checkWin = function() {

    if (currentScore > targetScore) {
        alert('You lost');
        lossCount++;

        $("#lossCount").html(lossCount)
        commenceGame(); 
    } else if (currentScore == targetScore) {
        alert("You won!");
        winCount++;
        $("#winCount").html(winCount)
       
        
    } 
}; 

//event listeners




$(document).on("click", "#green", function(){
    addValues(crystal.green);
});

$(document).on("click", "#white", function(){
    addValues(crystal.white);
});

$(document).on("click", "#purple", function(){
    addValues(crystal.purple);
});

$(document).on("click", "#pink", function(){
    addValues(crystal.pink);
});

commenceGame()
})

