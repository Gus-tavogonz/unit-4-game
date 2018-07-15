$(document).ready(function() {
    // all custom jQuery will go here


//DEFIFINIG VARIABLES


var wins = 0;
var loss = 0;
//var yourScore = []; this makes each value appear consecutively

//this makes your score to add up
var yourScore = 0;
var fourNumbers = []

var villain = ["../../images/villain-1.jpg", 
                "assets/images/villain-2.jpg",
                "assets/images/villain-3.jpg",
                "assets/images/villain-4.jpg"];


function selectVillain(){
   var randomVillain = Math.floor(Math.random() * villain.length);   
   $("#villain-display").html("<img src =" + randomVillain[j]);
 
}

selectVillain();




//this will be the number to match by the user
var numbersToMatch = [];

$("#number-to-match").text(numbersToMatch);
//Setting wins and losses to 0
$("#wins").text(wins);
$("#loss").text(loss);

//4 numbers to be chosen by the computer

function numbersScore (){
    for ( var i = 0; i < 4; i+=1){
        var num = Math.floor(Math.random() * 12 + 1);
        fourNumbers.push(num)
        console.log(num);
    }
}
numbersScore();
console.log(numbersScore);



//To Reset the Game!!!
function resetAll(){
    var numbersToMatch = Math.floor((Math.random()* 120) +25);
    fourNumbers = [];
    numbersScore();
    yourScore = 0;
}


$("#first").on("click", function(){
    var crystalValue = ($(this).attr(fourNumbers[0]));

    crystalValue = parseInt(crystalValue);
    
    yourScore += fourNumbers[0];
   
    if (yourScore === numbersToMatch) {
     resetAll();
     
    $("#wins").text(wins+=1);
    alert("You win!" + wins );
    }
    else if (yourScore >= numbersToMatch) {
    resetAll();
    $("#loss").text(loss+=1);
    alert("You lose!!");
     }
})

$("#second").on("click", function(){
    var crystalValue = ($(this).attr(fourNumbers[1]));

    crystalValue = parseInt(crystalValue);
    
    yourScore += fourNumbers[1];

    if (yourScore === numbersToMatch) {
     resetAll();
    $("#wins").text(wins+=1);
    alert("You win!" + wins );
    }
    else if (yourScore >= numbersToMatch) {
    resetAll();
    $("#loss").text(loss+=1);
    alert("You lose!!");
     }
})

$("#third").on("click", function(){
    var crystalValue = ($(this).attr(fourNumbers[2]));

    crystalValue = parseInt(crystalValue);
    
    yourScore += fourNumbers[2];
    if (yourScore === numbersToMatch) {
     resetAll();
    $("#wins").text(wins+=1);
    alert("You win!" + wins );
    }
    else if (yourScore >= numbersToMatch) {
    resetAll();
    $("#loss").text(loss+=1);
    alert("You lose!!");
     }
})

$("#fourth").on("click", function(){
    var crystalValue = ($(this).attr(fourNumbers[3]));

    crystalValue = parseInt(crystalValue);
    
    yourScore += fourNumbers[3];

    if (yourScore === numbersToMatch) {
     resetAll();
    $("#wins").text(wins+=1);
    alert("You win!" + wins );
    }
    else if (yourScore >= numbersToMatch) {
    resetAll();
    $("#loss").text(loss+=1);
    alert("You lose!!");
     }
})



});
