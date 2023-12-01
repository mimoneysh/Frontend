alert("Welcome to simon..!\nRemember flashing pattern to score.");
var gamePattern =[];
var buttonColours =["red", "blue", "green", "yellow"];
var userClikedPattern=[];


var started = false;

var level=0;


$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level: "+level);
    nextSequence();
    started=true;
  } 
})

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]=== userClikedPattern[currentLevel]){
    console.log("Success");
    if(userClikedPattern.length===gamePattern.length){
      setTimeout(function(){nextSequence();},1000);
    }
  }else{
    console.log("wrong");
    $("body").addClass("game-over");
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
      
      
    },200);


    startOver()
  }

}

function startOver()
{
  level=0;
  gamePattern=[];
  started = false;
}


$(".btn").click(function(){
      var userChosenColour=$(this).attr("id");
      userClikedPattern.push(userChosenColour)
      playSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userClikedPattern.length-1);
  });
  

function nextSequence(){

  userClikedPattern=[];
    level++;
    $("#level-title").text("Level: "+level);


    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColor).removeClass("pressed");
  }, 100);

}