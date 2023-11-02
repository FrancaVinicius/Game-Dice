// Player 1.

// Generate a random number between 1 and 6 to player's 1 dice. 
var randomNumberPlayer1Dice = Math.floor(Math.random() * 6) + 1;

// Generate a random side between 1 and 6 to playe's 1 dice (using concatenação). 

var randomSidePlayer1Dice = "dice" + randomNumberPlayer1Dice + ".png";

// Changing "png" atribute value ("img1"), to randomize dice slide.

var randomImageAtributePlayer1 = "Archive/images/" + randomSidePlayer1Dice;

// Selecting the image to player's 1. 

var imagePlayer1 = document.querySelector(".img1");

// Setting the atribute value ("img1") to player's 1.

imagePlayer1.setAttribute("src", randomImageAtributePlayer1);   

// Player 2.

// Generate a random number between 1 and 6 to player's 1 dice. 
var randomNumberPlayer2Dice = Math.floor(Math.random() * 6) + 1;

// Generate a random side between 1 and 6 to playe's 2 dice (using concatenação). 

var randomSidePlayer2Dice = "dice" + randomNumberPlayer2Dice + ".png";

// Changing "png" atribute value ("img2"), to randomize dice slide.

var randomImageAtributePlayer2 = "Archive/images/" + randomSidePlayer2Dice;

// Selecting the image to player's 2. 

var imagePlayer2 = document.querySelector(".img2");

// Setting the atribute value ("img1") to player's 2.

imagePlayer2.setAttribute("src", randomImageAtributePlayer2); 

// Game condittions. 

if (randomNumberPlayer1Dice > randomNumberPlayer2Dice){
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins!!!🏆";
} else if(randomNumberPlayer1Dice < randomNumberPlayer2Dice){
    document.querySelector("h1").innerHTML = "🏆Player 2 Wins!!!🏆";
} else{
    document.querySelector("h1").innerHTML = "Draw... 🧐 Try Again";
}