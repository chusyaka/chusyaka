import React from "react";
import "./style.css";
import Container from "../../shared/ui/container";
import TextFooter from "../../shared/ui/textfooter";

function Footer() {
    return (
        <div className='footer'>
            <Container className="contfoot">
                <div className="foot1">
                    <div className="text1">
                    <TextFooter weight="w400">COMPANY</TextFooter>
                    </div>
                    <img className="logofoot" src="/projeco-logo.png" alt="logo" />
                    <div className="text2">
                    <TextFooter>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh <br /> euismod tincidunt ut laoreet dolore <br /> magna aliquam erat.</TextFooter>
                    </div>
                    </div>
                <div className="foot2">
                    <div className="text3">
                    <TextFooter weight="w400">LINKS</TextFooter>
                    </div>
                    <ul className="ul3">
                        <li className="li3"><TextFooter weight="w600">HOME</TextFooter></li>
                        <li className="li3"><TextFooter weight="w600">ABOUT</TextFooter></li>
                        <li className="li3"><TextFooter weight="w600">SERVICES</TextFooter></li>
                        <li className="li3"><TextFooter weight="w600">PROJECTS</TextFooter></li>
                        <li className="li3"><TextFooter weight="w600">CONTACT US</TextFooter></li>
                    </ul>
                    </div>
                    <div className="foot3">
                        <ul className="ul3">
                            <li className="li4"><TextFooter weight="w600">FAQ</TextFooter></li>
                            <li className="li4"><TextFooter weight="w600">TERMS</TextFooter></li>
                            <li className="li4"><TextFooter weight="w600">CAREERS</TextFooter></li>
                        </ul>
                    </div>
                    <div className="foot4">
                        <ul className="ul3">
                            <li className="li5"><TextFooter weight="w600">BLOG</TextFooter></li>
                            <li className="li5"><TextFooter weight="w600">PARTNERS</TextFooter></li>
                            <li className="li5"><TextFooter weight="w600">NEWS</TextFooter></li>
                        </ul>
                    </div>
                    <div className="foot5">
                        <div className="text4"><TextFooter weight="w400">CONTACT US</TextFooter></div>
                        <div className="text5"><TextFooter weight="w400">213 Baker Street <br /> Oriel City Kounty <br /> 7000 KNW, <br /> Kountry Name <br /><br /> +23 994 233 4022 <br /><br /> info@konstruct.com</TextFooter></div>
                    </div>
                    <div className="foot6">
                        <img src="/socials.png" alt="soc" />
                    </div>
                </Container>
        </div>
    );
}
export default Footer;
