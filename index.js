// function to make sound play with mouse
for ( var i=0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick(){
      var buttonInnerHTML = this.innerHTML;  
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }

}

// keyboard detection event
document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});


// function to make sound play with keyboard or mouse
function makeSound(text){
    switch (text) {
        case 'w':
            var audio = new Audio ("sounds/tom-1.mp3");
              audio.play();
            break;
        case 'a':
                var audio = new Audio ("sounds/tom-2.mp3");
                  audio.play();
            break;
         case 's':
                    var audio = new Audio ("sounds/tom-3.mp3");
                      audio.play();
             break;
         case "d":
                var audio = new Audio ("sounds/tom-4.mp3");
                  audio.play();
             break;
        case "j":
                var audio = new Audio ("sounds/kick-bass.mp3");
                  audio.play();
             break;
        case "k":
                var audio = new Audio ("sounds/snare.mp3");
                  audio.play();
             break;
        case "l":
                var audio = new Audio ("sounds/crash.mp3");
                  audio.play();
             break;
    
     
        default:
            console.log(buttonInnerHTML);
            break;
     }
}
// animating the buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
    
}