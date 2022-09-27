// document.querySelector('drum').addEventListener('click', function () {
//   alert("What's up y'all");
// });

// Detecting Button Press
let selectAllButtons = document.querySelectorAll('.drum');

for (i of selectAllButtons) {
  i.addEventListener('click', function () {
    // alert("What's up y'all");

    // console.log(this.innerHTML);
    // this.style.color = 'white';

    let soundValue = this.innerHTML;
    makeSound(soundValue);

    buttonAnimation(soundValue);
  });
}

// let audio = new Audio('./sounds/crash.mp3')
// audio.play()

// or

// let totalNumberOfButtons = selectAllButtons.length;

// for (var i = 0; i < totalNumberOfButtons; i++) {
//   document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//     // alert('I got clicked');

//         console.log(this);
//   });
// }

// Detecting Keyboard Press
let myKey = document.addEventListener('keydown', function (event) {
  // alert("key was pressed")

  makeSound(event.key);

  buttonAnimation(event.key);
});

// console.log(myKey);

function makeSound(key) {
  switch (key) {
    case 'w':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log('That was unexpected');
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  console.log(activeButton);

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);

  console.log(activeButton);
}
