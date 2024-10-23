
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

var wDrum = new Audio("sounds/tom-1.mp3");

var button = document.querySelectorAll(".drum")
button.forEach((button) => button.addEventListener("click", function () {
    wDrum.play();
}))


