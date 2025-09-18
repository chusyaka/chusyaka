let num1 = '';
let num2 = '';
let operator = null;
let result = null;

let display = document.getElementById('display');

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
}
