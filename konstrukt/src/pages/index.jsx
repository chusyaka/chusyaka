import React from "react";
import Bunner from "../feature/banner";
import Story from "../feature/story";
import Our from "../feature/our";
import Banner2 from "../feature/banner2";
import Footer from "../feature/footer";

function Header() {
    return(
        <div>
        <Bunner />
        <Story />
        <Our />
        <Banner2 />
        <Footer />
        </div>
    );
}
export default Header;