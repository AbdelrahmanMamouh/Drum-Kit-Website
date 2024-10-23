
// Method 1
// var buttons = document.querySelectorAll(".drum")
// buttons.forEach((button) => button.addEventListener("click", function() {
//     alert("I got clicked");
// }))

// Method 2
// var buttons = document.querySelectorAll(".drum")
// buttons.forEach((button) => button.addEventListener("click", clicked))
// function clicked() {
//     alert("I got clicked");
// }










var button = document.querySelectorAll(".drum")
button.forEach((button) => button.addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
        case "w":
            var wDrum = new Audio("sounds/tom-1.mp3");
            wDrum.play();
            break;

        case "a":
            var aDrum = new Audio("sounds/tom-2.mp3");
            aDrum.play();
            break 
        
        case "s":
            var sDrum = new Audio("sounds/tom-3.mp3");
            sDrum.play();
            break
    
        case "d":
            var dDrum = new Audio("sounds/tom-4.mp3");
            dDrum.play();
            break

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break
    
        default:
            break;
    }
}))


