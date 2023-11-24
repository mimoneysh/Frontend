//alert("Welcome to simon..!\nRemember flashing pattern to score.");
var gamePattern =[];
var buttonColours =["red", "blue", "green", "yellow"];

var randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber);

var randomChosenColour = buttonColours[randomNumber];
console.log(randomChosenColour);

//var audio = $(selectButton.play());
$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();


// gamePattern.push(randomChosenColour);
// var selectButton =$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

