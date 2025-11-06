import React from "react";
import "./style.css";
import Container from "../../shared/ui/container";
import But from "../../shared/ui/button";
function Sign() {
    return (
        <div className='Sign'>
            <Container className='contsign'>
                <p className="new">Newsletter Signup</p>
                    <input type="email" className="email" placeholder="test@youremail.com" />
                    <But className="signup">SIGNUP</But>
            </Container>
        </div>
    );
}
export default Sign;