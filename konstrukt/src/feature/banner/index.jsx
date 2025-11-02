import React from "react";
import "./style.css";
function Bunner() {
    return(
        <div className="divban">
            <div className="ban">
            <img className="banner" src="/img.png" alt="header" />
            <img className="log" src="/projeco-logo.png" alt="" />
            <p className="partner">PARTNER WITH KONSTUCT</p>
            <p className="an">An award-winning construction management firm</p>
            <p className="scroll">SCROLL DOWN</p>
            </div>
            <div className="menu">
                <img className="logo" src="/projeco-logo-black.png" alt="logo" />
            <ul className="ul">
                <li className="li">HOME</li>
                <li className="li">ABOUT</li>
                <li className="li">SERVICES</li>
                <li className="li">WORK</li>
                <li className="li">CONTACT</li>
            </ul>
            </div>
        </div>
    );
}
export default Bunner;