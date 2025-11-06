import React from "react";
import "./style.css";

function TextFooter({children, weight}) {
    return(
        <div className={`TextFooter TextFooter_${weight}`}>{children}</div>
    );
}
export default TextFooter;