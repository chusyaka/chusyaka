import React, { useState } from 'react';
import CalculatorButton from '../buttons';
import './style.css';

function Calculate() {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const inputNumber = (num) => {
    if (waitingForSecondValue) {
      setDisplay(String(num));
      setWaitingForSecondValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const result = calculate(firstValue, inputValue, operator);
      setDisplay(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const calculate = (first, second, operator) => {
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      default:
        return second;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);
    
    if (firstValue !== null && operator) {
      const result = calculate(firstValue, inputValue, operator);
      setDisplay(String(result));
      setFirstValue(null);
      setOperator(null);
      setWaitingForSecondValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      
      <div className="buttons">
        <div className="row">
          <CalculatorButton value="7" onClick={inputNumber} />
          <CalculatorButton value="8" onClick={inputNumber} />
          <CalculatorButton value="9" onClick={inputNumber} />
          <CalculatorButton value="/" onClick={inputOperator} />
        </div>
        
        <div className="row">
          <CalculatorButton value="4" onClick={inputNumber} />
          <CalculatorButton value="5" onClick={inputNumber} />
          <CalculatorButton value="6" onClick={inputNumber} />
          <CalculatorButton value="*" onClick={inputOperator} />
        </div>
        
        <div className="row">
          <CalculatorButton value="1" onClick={inputNumber} />
          <CalculatorButton value="2" onClick={inputNumber} />
          <CalculatorButton value="3" onClick={inputNumber} />
          <CalculatorButton value="-" onClick={inputOperator} />
        </div>
        
        <div className="row">
          <CalculatorButton value="0" onClick={inputNumber} />
          <CalculatorButton value="C" onClick={clear} />
          <CalculatorButton value="=" onClick={handleEquals} />
          <CalculatorButton value="+" onClick={inputOperator} />
        </div>
      </div>
    </div>
  );
}

export default Calculate;
