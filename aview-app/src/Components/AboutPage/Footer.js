import React from "react";
import "../../Styles/AboutPage/footer.css";
import line from "../../img/AboutPage/line.svg";
import footerLogo from "../../img/AboutPage/footerLogo.svg";
import ytFooter from "../../img/AboutPage/youtubeFooter.svg";
import liFooter from "../../img/AboutPage/linkedinFooter.svg";

export default function Footer() {
    return (
        <div>
            <header className="line"><img src={line} alt="line"></img></header>
            <header className="footerLogo"><img src={footerLogo} alt="footerLogo"></img></header>
            <header className="youtubeFooter"><img src={ytFooter} alt="Youtube logo"></img></header>
            
            {/* linkedIn logo placement incorrect, too far up the page */}
            <header className="linkedInFooter"><img src={liFooter} alt="LinkedIn logo"></img></header>
            <header className="creatorsFooter">Creators</header>
            <header className="translatorsFooter">Translators</header>
            <header className="aboutFooter">About</header>
            <header className="contactFooter">Contact</header>
            <header className="careersFooter">Careers</header>
        </div>
    )
}