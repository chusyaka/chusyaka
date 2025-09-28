let num1 = '';
let num2 = '';
let operator = null;
let result = null;

let display = document.getElementById('display');
document.addEventListener('keydown', vvod);
function vvod() {
        const key = event.key;

    if (key >= '0' && key <= '9') {
        but(key);
    }
    else if (key == '+' || key == '-' || key == "*" || key == "/") {
        setOperation(key);
    }
    else if (key == '.') {
        but('.');
    }
    else if (key == 'Enter' || key == '=') {
        event.preventDefault();
        calculate();
    }
    else if (key == 'Escape' || key == 'Delete') {
        clearDisplay();
    }
    else if (key == 'C' || key == 'c') {
        clearDisplay();
    }
}

function but(value) {
    display.value += value;
    
    if (operator === null) {
        num1 += value;
    } else {
        num2 += value;
    }
}

function clearDisplay() {
    display.value = '';
    num1 = '';
    num2 = '';
    operator = null;
}

function setOperation(value) {
    if (operator !== null && num2 !== '') {
        calculate();
    }
    
    display.value += value;
    operator = value;
}

function calculate() {
    if (num1 === '' ||  num2 === '' ||  operator === null) {
        return; 
    }
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
                result = number1 / number2;
            break;
    }
    
    display.value = result;

    num1 = result.toString();
    num2 = '';
    operator = null;
}