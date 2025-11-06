import React from "react";
import "./style.css";

function Text13({children, className}) {
    return(
        <div className={`Text ${className}`}>{children}</div>
    );
}
export default Text13;