const buttonColors = document.querySelectorAll(".btn");
const gamePattern=[];

function nextSequence(){
    return Math.floor(Math.random()*4);
}

randomChosenColor=buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

$(randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
if($(randomChosenColor).hasClass("green")){
    var audio=new Audio('./sounds/green.mp3');
    audio.play();
}else{
    var audio=new Audio('./sounds/green.mp3');
    audio.play();
}




