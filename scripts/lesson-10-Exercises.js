//10c
const test = document.querySelector('.js-button');
console.log(test.classList.contains('js-button'));

//10d
function buttonToggle() {
  const gamingButton = document.querySelector('.js-gaming-button');

  if (!gamingButton.classList.contains('is-toggled')) {
    gamingButton.classList.add('is-toggled')
  } else if (gamingButton.classList.contains('is-toggled')) {
    gamingButton.classList.remove('is-toggled')
  }
}

//10e
function buttonIsToggled() {
  const toggledButton = document.querySelector('.js-button-toggle');


  if (!toggledButton.classList.contains('button-is-toggled')) {
    toggledButton.classList.add('button-is-toggled')
  } else if (toggledButton.classList.contains('button-is-toggled')) {
    toggledButton.classList.remove('button-is-toggled')
  }
}

function buttonIsToggledTwo() {
  const toggledButtonTwo = document.querySelector('.js-button-toggle-two');

  if (!toggledButtonTwo.classList.contains('button-is-toggled')) {
    toggledButtonTwo.classList.add('button-is-toggled')
  } else if (toggledButtonTwo.classList.contains('button-is-toggled')) {
    toggledButtonTwo.classList.remove('button-is-toggled')
  }
}

function buttonIsToggledThree() {
  const toggledButtonThree = document.querySelector('.js-button-toggle-three');

  if (!toggledButtonThree.classList.contains('button-is-toggled')) {
    toggledButtonThree.classList.add('button-is-toggled')
  } else if (toggledButtonThree.classList.contains('button-is-toggled')) {
    toggledButtonThree.classList.remove('button-is-toggled')
  }
}