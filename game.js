var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];
const gamePattern=[];

function animatePress(color){
    $("#" + color).addClass("pressed");

    setTimeout(function () {
        $("#" + color).removeClass("pressed");
      }, 100);
}
function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}
function clickHandler(){
    userClickedPattern.push($(this).attr("id"));
    playSound($(this).attr("id"));
    animatePress($(this).attr("id"));
    
}
function nextSequence(){
    return Math.floor(Math.random()*4);
}

randomChosenColor=buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

$(".btn").click(clickHandler);