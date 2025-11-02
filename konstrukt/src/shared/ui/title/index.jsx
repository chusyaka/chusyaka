import React from "react";
import "./style.css";

function Title({ children, align }) {
    return (
    <div className={`title title_${align}`}>
        <h2 className="h2">{children}</h2>
        <div className="title__line" />
    </div>
    );  
}

export default Title;