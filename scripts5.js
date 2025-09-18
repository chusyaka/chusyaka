let num1 = null;
let num2 = null;
let result = null;

let display = document.getElementById('display');
       
        function but(value) {
            display.value += value;
        }
        
        function clearDisplay() {
           display.value = '';
        }
        function setOperation(value) {
            display.value += value;
        }

        function calculate() {
            
            switch(setOperation) {
                case"+":
                result = num1 + num2;
                console.log("сумма" + result)
                break;
                case"-":
                result = num1 - num2;
                break;
                case"*":
                result = num1 * num2;
                break;
                case"/":
                result = num1 / num2;
                break;
            }
            display.value = result
        }
        
