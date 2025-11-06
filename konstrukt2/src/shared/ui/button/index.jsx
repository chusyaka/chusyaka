import React from "react";
import "./style.css";

function But({children, className}) {
    return (
        <div>
            <button className={`But ${className}`}>{children}</button>
        </div>
    );
}

export default But;