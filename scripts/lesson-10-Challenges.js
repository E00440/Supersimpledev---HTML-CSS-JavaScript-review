
//10g
function buttonIsToggled(toggled) {
  const toggledButton = document.querySelector(toggled);


  if (!toggledButton.classList.contains('button-is-toggled')) {
    turnOffPreviousButton();    
    toggledButton.classList.add('button-is-toggled')
  } else {
    toggledButton.classList.remove('button-is-toggled')
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.button-is-toggled');
  if (previousButton) {
    previousButton.classList.remove('button-is-toggled');
  }
}


//10h
function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}
/* 
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  
  if (cost < 0) {
    cost = `Error: Cost cannot be less than $${0}`;
    document.querySelector('.js-total-cost').classList.add('less-than-zero');
  } else if (cost < 40 && cost >= 0) {
    cost += 10;
    document.querySelector('.js-total-cost').classList.remove('less-than-zero');
  }
  

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}
 */

//supersimpledev's method

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  // First, reset all previous messages.
  document.querySelector('.js-total-cost')
    .innerHTML = '';
  document.querySelector('.js-error-message')
    .innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0';
    // If we display an error, we can use return to
    // end this function immediately. This is called
    // an "early return" and it makes the code cleaner
    // because it reduces nesting / indents.
    return;
  }

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}