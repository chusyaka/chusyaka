import React from "react";
import "./style.css";

function Story() {
    return (
        <div className="story">
            <p className="h1">OUR STORY</p>
            <img className="line" src="/line.png" alt="line" />
            <img className="deliver" src="/deliver.png" alt="deliver" />
            <img className="manage" src="/manage.png" alt="manage" />
            <img className="plan" src="/plan.png" alt="plan" />
                <p className="founted">
                    Founded in 2011 by John Mathew <br /> Smith, Konstruct has become the <br /> number one construction management firm
                </p>
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br /> diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam erat. Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br /> laoreet dolore magna aliquam erat.
                </p>
        </div>
    );
}
export default Story;