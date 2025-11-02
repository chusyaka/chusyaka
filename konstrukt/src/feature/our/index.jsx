import React from "react";
import "./style.css";

function Our() {
    return (
        <div>
            <div className="our">
                <p className="capa">
                    OUR CAPABILITIES
                    <img className="line2" src="/Line.png" alt="line" />
                </p>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <button className="all">ALL SERVICES</button>
            </div>
            <div className="bitmap">
                <div className="proj">
                <img className="bit1" src="/bitmap.png" alt="bitman" />
                <p className="projtext">PROJECT AND CONSTRUCTION MANAGEMENT</p>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                <div className="str">
                <img className="bit2" src="/bitmap (1).png" alt="bitman" />
                <p className="strtext">STRUCTURE AUDIT AND MAINTENANCE</p>
                <p className="dolor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                <div className="fact">
                <img className="bit3" src="/bitmap (2).png" alt="bitman" />
                <p className="facttext">FACTORY CONSTRUCTION AND MODELING</p>
                <p className="sit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
            </div>
        </div>
    );
}
export default Our;