alert("Welcome to simon..!\nRemember flashing pattern to score.");
var gamePattern =[];
var buttonColours =["red", "blue", "green", "yellow"];

var randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);

var randomChosenColour = buttonColours[randomNumber];
console.log(randomChosenColour);

gamePattern.push(randomChosenColour);
