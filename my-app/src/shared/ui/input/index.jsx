import React from "react";
import "./style.css";

function Input({ type, placeholder, onChange, className }) {
  return <input className={className} type={type} placeholder={placeholder} onChange={onChange} />;
}

export default Input;