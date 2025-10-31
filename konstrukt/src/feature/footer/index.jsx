import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="footer">
            <div className="comp">
                <p className="company">COMPANY</p>
                <img className="footerlogo" src="/projeco-logo (1).png" alt="logo" />
                <p className="elit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
            </div>
            <div className="links">
                <p className="link">LINKS</p>
                <div className="pere">
                <div className="links1">
                <ul className="ull">
                    <li className="lin">HOME</li>
                    <li className="lin">ABOUT</li>
                    <li className="lin">SERVICES</li>
                    <li className="lin">PROJECTS</li>
                    <li className="lin">CONTACT US</li>
                    </ul>
                    </div>
                    <div className="links2">
                        <ul>
                    <li className="lin">FAQ</li>
                    <li className="lin">TERMS</li>
                    <li className="lin">CAREERS</li>
                    </ul>
                    </div>
                    <div className="links3">
                    <ul>
                    <li className="lin">BLOG</li>
                    <li className="lin">PARTNERS</li>
                    <li className="lin">NEWS</li>
                </ul>
                </div>
                </div>
            </div>
            <div className="contact-us">
                <p className="pcont">CONTACT US</p>
                <p className="baker">213 Baker Street Oriel City Kounty 7000 KNW,<br /> Kountry Name <br /><br />  +23 994 233 4022 <br /><br /> info@konstruct.com</p>
            </div>
            <div className="soc">
                <img className="socimg" src="socials.png" alt="soc" />
            </div>
            <div className="niz">
                <p className="copy">© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
            </div>
        </div>
    );
}
export default Footer;