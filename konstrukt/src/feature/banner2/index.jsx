import React from "react";
import "./style.css";

function Banner2() {
    return(
<div className="ban2">
    <img className="banner2" src="/under.png" alt="get" />
    <p className="want">Want to build <br /> something amazing?</p>
        <button className="but">
    </button>
    <div className="sign">
        <div className="otpr"></div>
        <p className="new">Newsletter Signup</p>
        <input className="input" type="mail" placeholder="test@youremail.com" />
        <button className="signup">SIGNUP</button>
    </div>
</div>
    );
}
export default Banner2;