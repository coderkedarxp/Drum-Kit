// We don't want this function to trigger as soon as the event listener is added hence we didn't used the gotclicked()
// So in that case, instead of calling our function as we would with the parentheses we're passing in the name of the function as an input.So that means that we're waiting for this click event to happen before we call the handleClick function.

// it means on getting click event then call the gotclicked function
// querySelector selects only first element

// document.querySelector("button").addEventListener("click",gotclicked);

// function gotclicked()
// {
//     alert("Clicked");
// }

// instead of upper code we can also use some anonymous function

// document.querySelector("button").addEventListener("click", function () {
//   alert("Clicked");
// });

// Above code was for a single button and now we want a loop which will work for all buttons

// var numberofDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberofDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("Clicked");
//   });
// }
//   now to know which button is pressed we use 'this' keyword

// Detecting button press

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    
  });
}

// Detecting keypress

document.addEventListener("keypress",function(e){
  makeSound(e.key);
})

function makeSound(key) {

  switch (key) {
      case "a":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

      case "s":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

      case "d":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

      case "f":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
}
// we passed the parameter e to get to know which event triggered the event listener


// NOTE: theory behind  obj creation 
  // function Audio (fileLocation) {
  //   this.fileLocation = fileLocation;
  //   this.play = function(){
      // tap into file hardware 
      // check the file at fileLocation exists
      // check the file at fileLocation file is a sound file
      // Play the file at fileLocation
  //   }
  // }

//   var audio = new Audio ("./sounds/tom-1.mp3");
//     audio.play();
