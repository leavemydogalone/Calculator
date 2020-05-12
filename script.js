function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operator (operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
            
    }
}
let displayValue = '';
() => display.textContent = displayValue;

const display = document.querySelector("#inputDisplay");
const calcNumbers = document.querySelectorAll('.number');
const calcOperators = document.querySelectorAll('.operator');
let chosenOperator = '';
const calcEquals = document.querySelector('#equals');
const calcClear = document.querySelector('#clear');
let storedNumber = '';


calcClear.addEventListener('click', (e) => {
    displayValue= '';
    display.textContent = '';
    chosenOperator = '';
    storedNumber = '';
});

calcOperators.forEach((button) => {
    button.addEventListener('click', (e) => {
        chosenOperator = button.id;
        storedNumber = displayValue;
        display.textContent = '';
    });
});

calcEquals.addEventListener('click', () => {
   display.textContent = operator(chosenOperator, parseInt(storedNumber), parseInt(displayValue));
   displayValue = display.textContent;
   chosenOperator = '';
});


calcNumbers.forEach((button) => {
    button.addEventListener('click', (e) => {
            display.textContent += button.id;
            displayValue = display.textContent;
            if (chosenOperator){
                storedNumber = operator(chosenOperator, parseInt(storedNumber), parseInt(displayValue));
                chosenOperator = '';
            }
        });
});
// add a check to see if there is an oprator and it will clear the display and store
// the previous value as storedNumber


//     displayValue = operator(button.id, parseInt(displayValue), 3);
//     display.textContent = displayValue;
// chosenOperator = '';