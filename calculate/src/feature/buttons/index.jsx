import React from 'react';
import "./style.css";
const CalculatorButton = ({ value, onClick, className = '' }) => {
  return (
    <button 
      className={`calculator-button ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};
export default CalculatorButton;
