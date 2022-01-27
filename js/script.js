const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

function appendNumber(number) {
  if (number === '.' && currentOperand.textContent.includes('.')) return;
  if (currentOperand.textContent.length < 20)
    return (currentOperand.textContent += number);
}

function deleteNumber() {
  currentOperand.textContent = currentOperand.textContent
    .toString()
    .slice(0, -1);
}

function clear() {
  previousOperand.textContent = '';
  currentOperand.textContent = '';
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
allClearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
