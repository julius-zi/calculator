let bool;
let op;
let num1;
let num2;
let result;
let displayValue;
let numReady = false;
let infoDisplayValue;

const display = document.querySelector('.display span');
const infoDisplay = document.querySelector('.infoDisplay span');
const wrapper = document.querySelector('.buttons');


function add(num1,num2) {return num1 + num2;}
function substract(num1,num2) {if(num2 == 0) {return "ERROR"} return num1 - num2;}
function multiply(num1,num2) {return num1 * num2;}
function divide(num1,num2) {return num1 / num2;}


function operate(num1,num2,op) {

    let operations = {
        '+' : add(num1,num2),
        '-' : substract(num1,num2),
        '*' : multiply(num1,num2),
        '/' : divide(num1,num2),
    };

    return operations[op]
}


wrapper.addEventListener('click', (event) => {

    // Check if user clicks on a button
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) return;
    let pressedButton = event.target.innerText; 

    // Check if pressed button is a number and append it to displayValue if so
    if (!["+", "-", "*", "/","=", "CLR"].includes(pressedButton)) {
        display.innerText += pressedButton;
        displayValue = display.innerText;
        numReady = true;
    }

    // Perform an operation if one is selected and there is a previous number and operation and a new number has been entered
    if (["+", "-", "*", "/"].includes(pressedButton) && num1 !== undefined && displayValue !== undefined && op !== undefined && numReady) {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        infoDisplay.innerText = `${result} ${pressedButton}`; // Show current operation in infoDisplay
        num1 = result;
        display.innerText = ""; // Clear display until final result needs to be shown
        displayValue = undefined;
        op = pressedButton;
        numReady = false;
    } 
    // Store operator and operand
    else if (["+", "-", "*", "/"].includes(pressedButton) && num1 === undefined && displayValue !== undefined) {
        op = pressedButton;
        num1 = parseInt(displayValue);
        infoDisplay.innerText = `${num1} ${op}`; // Show current operation in infoDisplay
        display.innerText = ""; // Clear display until final result needs to be shown
        displayValue = undefined;
        numReady = false;
    }

    if (pressedButton === "=" && num1 !== undefined && op !== undefined && displayValue !== undefined) {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        display.innerText = result;
        infoDisplay.innerText = ""; // Clear infoDisplay after final result is shown
        num1 = result;
        displayValue = undefined;
        op = undefined;
    }

    // Clear by click on CLR
    if (pressedButton === "CLR") {
        display.innerText = "";
        infoDisplay.innerText = "";
        displayValue = undefined;
        num1 = undefined;
        num2 = undefined;
        op = undefined;
        numReady = false;
    }

});