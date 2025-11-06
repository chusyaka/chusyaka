import React from "react";
import Bunner from "../feature/banner";
import Story from "../feature/story";
import Our from "../feature/our";
import Bunner2 from "../feature/banner2";
import Sign from "../feature/sign";
import Footer from "../feature/footer";
import Niz from "../feature/niz";

function Header() {
    return(
        <div>
        <Bunner />
        <Story />
        <Our />
        <Bunner2 />
        <Sign />
        <Footer />
        <Niz />
        </div>
    );
}
export default Header;