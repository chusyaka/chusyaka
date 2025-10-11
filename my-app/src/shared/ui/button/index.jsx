import React from "react";
import "./style.css";

function Button({ type, children, onClick, className }) {
  return <button className={className} type={type} onClick={onClick}>{children}</button>;
}

export default Button;