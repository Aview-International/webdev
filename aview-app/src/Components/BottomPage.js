import "../Styles/BottomPage.css";
import React from "react";
import logo from "../img/logowhite3.svg";
import youtubeLogo from "../img/youtubeLogo.png";

function BottomPage(){
    return(
        <div className="footer">
            <div className="aviewLogo">
                <img src={logo} alt="Aview logo" />
            </div>
            <div className="socialLogos">
                <img src={youtubeLogo} alt="youtube logo"/>
                <img src={youtubeLogo} alt="linkedin logo" />
            </div>
        </div>
    );


}
export default BottomPage;