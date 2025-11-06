import React from "react";
import "./style.css";
import Title from "../../shared/ui/title";
import Container from "../../shared/ui/container";
import But from "../../shared/ui/button";
import Text13 from "../../shared/ui/text";

function Our() {
    return (
        <Container>

            <div className="our">
                <Title align="left">OUR CAPABILITIES</Title>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <But className="all">ALL SERVICES</But>
            </div>

            <div className="bitMap">
                <div className="bitMap__sevice">
                    <img className="bitimg" src="/bitmap.png" alt="" />
                    <p className="proj">PROJECT AND CONSTRUCTION MANAGEMENT</p>
                    <Text13 className="projtext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</Text13>
                </div>
                <div className="bitMap__sevice">
                <img className="bitimg" src="/bitmap (1).png" alt="" />
                    <p className="proj">STRUCTURE AUDIT AND MAINTENANCE</p>
                    <Text13 className="projtext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</Text13>
                </div>
                <div className="bitMap__sevice">
                    <img className="bitimg" src="/bitmap (2).png" alt="" />
                    <p className="proj">FACTORY CONSTRUCTION AND MODELING</p>
                    <Text13 className="projtext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</Text13> 
                </div>            
            </div>


        </Container>
    );
}
export default Our;