// const 
// let 
// function 


function calculate(num1, num2, operator) {
    let result = 0
    if (operator === '+') {
        result = num1 + num2
    } else if (operator === '-') {
        result = num1 - num2
    } else if (operator === '*') {
        result = num1 * num2
    } else if (operator === '/') {
        result = num1 / num2
    }

    return result
}

const result1 = calculate(10, 20, '+')

const result2 = calculate(10, 20, '-')

const result3 = calculate(result1, result2, '*')

console.log(result1, result2, result3)


const div = document.getElementById('result')

console.log(div)