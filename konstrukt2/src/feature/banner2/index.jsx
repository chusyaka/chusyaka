import React from "react";
import "./style.css";
import Container from "../../shared/ui/container";
import But from "../../shared/ui/button";
function Bunner2() {
    return (
<div className="bg">
    <Container className="contbun">
        <div>
        <p className="want">Want to build <br /> something amazing?</p>
        <But className="getin">GET IN TOUCH</But>
        </div>
    </Container>
</div>
    );
}

export default Bunner2;