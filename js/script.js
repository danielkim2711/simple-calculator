const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let screenReset = false;

function appendNumber(number) {
  if (currentOperand.textContent === '0' && number === '0') return;

  if (number === '.' && currentOperand.textContent.includes('.')) return;

  if (currentOperand.textContent === '0' && number !== '.')
    currentOperand.textContent = currentOperand.textContent.substring(1);

  if (currentOperand.textContent.length < 20)
    currentOperand.textContent += number;

  if (screenReset) {
    currentOperand.textContent = '';
    currentOperand.textContent += number;
    screenReset = false;
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

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function chooseOperation(operation) {
  if (
    previousOperand.textContent !== '' &&
    previousOperand.textContent.includes(operation)
  ) {
    evaluate();
  }
  firstOperand = currentOperand.textContent;
  currentOperation = operation;
  previousOperand.textContent = `${currentOperand.textContent} ${operation}`;
  screenReset = true;
}

function evaluate() {
  if (currentOperation === null || screenReset) return;
  if (currentOperation === '÷' && currentOperand.textContent === '0') {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperand.textContent;
  currentOperand.textContent = operate(currentOperation);
  previousOperand.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function operate(operation) {
  const prev = parseFloat(previousOperand.textContent);
  const current = parseFloat(currentOperand.textContent);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      return add(prev, current);
    case '-':
      return substract(prev, current);
    case '×':
      return multiply(prev, current);
    case '÷':
      if (current === 0 && prev === 0) return null;
      return divide(prev, current);
    default:
      return null;
  }
}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
operationButtons.forEach((button) =>
  button.addEventListener('click', () => chooseOperation(button.textContent))
);
deleteButton.addEventListener('click', deleteNumber);
allClearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', evaluate);
