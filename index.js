// alert('HEy boby why are in my lappi!')
for(var i=0;i<=7;i++){
document.querySelectorAll("button")[i].addEventListener("click",bob);
function bob(){
    var but=this.innerHTML;
    makesound(but);
    animation(but);
    // this.style.color ="black"; 
};  


document.addEventListener("keypress",function(A){
    makesound(A.key);
    animation(A.key);
});

function makesound(key){
    switch(key)
    {
        case "a":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "s":
                var audio1=new Audio("sounds/tom-2.mp3");
                audio1.play();
                break;
                case "d":
            var audio2=new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;
            case "f":
            var audio3=new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;
            case "j":
            var audio4=new Audio("sounds/snare.mp3");
            audio4.play();
            break;
            case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

    }
}


function animation(b)
{
    var activebt=document.querySelector("."+b);
    activebt.classList.add("pressed");
    setTimeout(function(){
        activebt.classList.remove("pressed");
    },150)
}





}