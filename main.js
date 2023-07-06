let bool;
let op;
let num1;
let num2;
let result;
let displayValue;
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

    // Check if pressed button is a number and save it as displayValue if so
    if (!["+", "-", "*", "/","=", "CLR"].includes(pressedButton)) {
            display.innerText += pressedButton;
            displayValue = display.innerText;
    }

    if (["+", "-", "*", "/"].includes(pressedButton) && num1 == undefined) {
        op = pressedButton;
        num1 = parseInt(displayValue);
        displayValue = undefined;
        display.innerText = "";
    }

    if (pressedButton === "=") {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        display.innerText = result;
    }

    if (["+", "-", "*", "/"].includes(pressedButton) && num1 !== undefined && num2 !== undefined) {
        op = pressedButton;
        num1 = result;
        bool = true;
        displayValue = undefined;
        display.innerText = "";
    }

    if (pressedButton === "=" && bool == true) {
        num2 = parseInt(displayValue);
        result = operate(num1,num2,op);
        display.innerText = result;
    }


    // Clear by klick on CLR
    if (pressedButton === "CLR") {
        display.innerText = "";
        displayValue = undefined;
        num1 = undefined;
        num2 = undefined;
    }

});