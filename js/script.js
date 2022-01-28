const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

function appendNumber(number) {
  if (currentOperand.textContent === '0' && number !== '.')
    currentOperand.textContent = currentOperand.textContent.substring(1);
  if (currentOperand.textContent === '0' && number === '0') return;
  if (number === '.' && currentOperand.textContent.includes('.')) return;
  if (currentOperand.textContent.length < 20) {
    currentOperand.textContent += number;
  }
}

function deleteNumber() {
  if (currentOperand.textContent !== '0')
    currentOperand.textContent = currentOperand.textContent
      .toString()
      .slice(0, -1);
}

function clear() {
  previousOperand.textContent = '';
  currentOperand.textContent = '0';
}

function updateDisplay() {}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
deleteButton.addEventListener('click', deleteNumber);
allClearButton.addEventListener('click', clear);
