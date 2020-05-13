let displayValue = '';
() => display.textContent = displayValue;

const display = document.querySelector("#inputDisplay");
const calcNumbers = document.querySelectorAll('.number');
const calcOperators = document.querySelectorAll('.operator');
let chosenOperator = '';
const calcEquals = document.querySelector('#equals');
const calcClear = document.querySelector('#clear');
let storedNumber = '';

// basics arithmetic functions
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

// function to be called upon later to choose which function to perform based on 
// chosen operator
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

// clears all values. attached to clear button
calcClear.addEventListener('click', (e) => {
    displayValue= '';
    display.textContent = '';
    chosenOperator = '';
    storedNumber = '';
});

// chooses the appropriate operator based on the id of the button clicked
// stores the value previously on the screen to the variable storedNumber 
calcOperators.forEach((button) => {
    button.addEventListener('click', (e) => {
        chosenOperator = button.id;
        storedNumber = displayValue;
        display.textContent = '';
    });
});

// does nothing if there is no chosen operator.
// runs the function and displays the text in the display
calcEquals.addEventListener('click', () => {
   if (!chosenOperator) return;
    display.textContent = operator(chosenOperator, parseInt(storedNumber), parseInt(displayValue));
//  display.textContent = storedNumber;
    displayValue = display.textContent;
    chosenOperator = '';
});


calcNumbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        // if (chosenOperator){
            // storedNumber = operator(chosenOperator, parseInt(storedNumber), parseInt(displayValue));
            // chosenOperator = '';
            // display.textContent = button.id;
            // displayValue = display.textContent;
            // return;
        // }
        display.textContent += button.id;
        displayValue = display.textContent;
            
        });
});


