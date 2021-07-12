
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
  
    animatePress(userChosenColour);
  });

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColour);
  }

  //Sound to Button Clicks
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

 // Animations to User Clicks 
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }