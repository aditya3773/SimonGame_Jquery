var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];
const gamePattern=[];
let level=0;
let gameStarted=false;
let position=0;

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

    if($(this).attr("id")==gamePattern[position]){
        position++;
        console.log(gamePattern);
         if(position==(level)){
            setTimeout(nextSequence,1000);
            position=0;
            userClickedPattern=[];
        }
    }else{
        position=0;
        playSound("wrong");
        $(document.body).addClass("game-over");
    }
    
}
function checkNextSequence(){
    if(gameStarted==false){
        nextSequence();
    }
}
function nextSequence(){
    
    level+=1;
    var next= Math.floor(Math.random()*4);
    randomChosenColor=buttonColors[next];
    gamePattern.push(randomChosenColor);
    $("#level-title").text("Level:"+level);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gameStarted=true;
    console.log(gamePattern);

}

$(document).keypress(checkNextSequence);


$(".btn").click(clickHandler);