$(document).ready(function() {
    // all custom jQuery will go here


//DEFIFINIG VARIABLES


var wins = 0;
var loss = 0;
//var yourScore = []; this makes each value appear consecutively

//this makes your score to add up
var yourScore = 0;
var fourNumbers = [];


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



//this will be the number to match by the user
var numbersToMatch = [];

function nToMatch(){
    var toMatch = Math.floor((Math.random() * 120) + 19);
    numbersToMatch.push(toMatch);

}
nToMatch();
console.log(nToMatch);

$("#number-to-match").text(numbersToMatch);



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
//Setting wins and losses to 0
$("#wins").text(wins);
$("#loss").text(loss);


//numbersScore assigns the value to each crystal


for ( var i = 0; i < fourNumbers.length; i++){
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/KittenProgression-Darling-week5.jpg");

    imageCrystal.attr("data-crystalvalue", fourNumbers[i]);
    
    $("#crystals").append(imageCrystal);
}


//ON CLICK FUNCTION FOR THE CRYSTALS
$(".crystal-image").on("click", function() {

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

yourScore += crystalValue;
$("#yourScore").text(yourScore)
console.log(crystalValue);


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
});

function resetAll(){
    toMatch = Math.floor((Math.random() * 100) + 19);
    fourNumbers = [];
    numbersScore();
    yourScore = 0;
}

resetAll();



});
