$(document).ready(function() {
    // all custom jQuery will go here


//DEFIFINIG VARIABLES


var wins = 0;
var loss = 0;
//var yourScore = []; this makes each value appear consecutively
//this makes your score to add up
var yourScore = 0;
var fourNumbers = []
//Setting wins and losses to 0
$("#wins").text(wins);
$("#loss").text(loss);

//this will be the number to match by the user
var numbersToMatch = Math.floor((Math.random() * 120) + 19);
console.log(numbersToMatch);
$("#number-to-match").text(numbersToMatch);


///villain
var villain = ["assets/images/villain-1.jpg",
                "assets/images/villain-2.jpg",
                "assets/images/villain-3.jpg",
                "assets/images/villain-4.jpg"
            ];




function selectVillain(){
    var randomVillain = villain[Math.floor(Math.random()*villain.length)]


    console.log(randomVillain)

   $("#villain-display").attr("src", randomVillain );
 
}

selectVillain();

//this are the four possible variables that will be assign randomly 
//to each crystal
function numbersScore (){
    for ( var i = 0; i < 4; i+=1){
        var num = Math.floor(Math.random() * 12 + 1);
        fourNumbers.push(num)
        console.log(num);
    }
}
numbersScore();
console.log(numbersScore);
//var numberOptions = [];
///var crystalNumbers = numbersScore[Math.floor(Math.random() * 12)];
//for (var i = 0; i < 4; i++) {
//    console.log(i);

//}

//function to reset all values and create new numbers and 
function resetAll(){
    numbersToMatch = Math.floor((Math.random() * 110) + 19);
    fourNumbers = [];
    numbersScore();
    yourScore = 0;
    $("#number-to-match").text(numbersToMatch);
    alert("Brave traveler, the values have change! Good luck!")
    selectVillain();
}



//The Game Score changes the value on the "your Score", decides wins and loses and
//includes the reset all function once you win or lose.
function theGameScore(){
    $("#yourScore").text(yourScore)
    
    if (yourScore === numbersToMatch) {
     
     
    $("#wins").text(wins+=1);
    alert("You win!! " + wins );
    resetAll();
    }
    else if (yourScore >= numbersToMatch) {
    
    $("#loss").text(loss+=1);
    alert("You lose!! ");
    resetAll();
     }

}


//ON CLICK FUNCTION FOR THE CRYSTALS
$("#first").on("click", function(){

    yourScore += fourNumbers[0];
    theGameScore();
 
})

$("#second").on("click", function(){

    yourScore += fourNumbers[1];

    theGameScore();
})

$("#third").on("click", function(){

    yourScore += fourNumbers[2];

    theGameScore();
})

$("#fourth").on("click", function(){

    yourScore += fourNumbers[3];
    
    theGameScore();
    
})







});