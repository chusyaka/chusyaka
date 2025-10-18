import React, { useState } from "react";
import "./style.css";

function Calculate() {
    const [display, setDisplay] = useState("0");
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);

    const inputNum = (num) => {
        if (waitingForNewValue) {
            setDisplay(String(num));
            setWaitingForNewValue(false);
        } else {
            setDisplay(display === "0" ? String(num) : display + num);
        }
    };

    const inputDot = () => {
        if (waitingForNewValue) {
            setDisplay("0.");
            setWaitingForNewValue(false);
            return;
        }

        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    const clear = () => {
        setDisplay("0");
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForNewValue(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case "+":
                return firstValue + secondValue;
            case "-":
                return firstValue - secondValue;
            case "*":
                return firstValue * secondValue;
            case "/":
                return firstValue / secondValue;
            default:
                return secondValue;
        }
    };

    const equals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = calculate(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForNewValue(true);
        }
    };

    const but = (e) => {
        const value = e.target.textContent;
        
        if (value === ".") {
            inputDot();
        } else {
            inputNum(value);
        }
    };

    const opertator = (e) => {
        const value = e.target.textContent;
        performOperation(value);
    };

    const eq = () => {
        equals();
    };

    return (
        <div className="vse">
            <input 
                type="text" 
                value={display} 
                className="display" 
                readOnly 
            />
            <div className="blockCalc">
                <button onClick={but} className="but">1</button>
                <button onClick={but} className="but">2</button>
                <button onClick={but} className="but">3</button>
                <button onClick={opertator} className="but">+</button>
                
                <button onClick={but} className="but">4</button>
                <button onClick={but} className="but">5</button>
                <button onClick={but} className="but">6</button>
                <button onClick={opertator} className="but">-</button>
                
                <button onClick={but} className="but">7</button>
                <button onClick={but} className="but">8</button>
                <button onClick={but} className="but">9</button>
                <button onClick={opertator} className="but">*</button>
                
                <button onClick={but} className="but">0</button>
                <button onClick={but} className="but">.</button>
                <button onClick={eq} className="but">=</button>
                <button onClick={opertator} className="but">/</button>
                
                <button onClick={clear} className="clear">C</button>
            </div>
        </div>
    );
}

export default Calculate;