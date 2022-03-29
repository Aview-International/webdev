import React, {useState, useEffect} from "react";
import MenuBar from '../Components/MenuBar.js';
import Logo from '../img/logowhite.png';
import AboutAview from '../Components/AboutPage/AboutAview.js'
import OurStory from "../Components/AboutPage/OurStory.js";
import MeetTheTeam from "../Components/AboutPage/MeetTheTeam.js";
import Careers from "../Components/AboutPage/Careers.js";
import OurMission from "../Components/AboutPage/OurMission.js";
import Footer from "../Components/AboutPage/Footer.js";
import AboutBackground from "../Components/AboutPage/AboutBackground.js";

function AboutPage() {
    return (
        <div>
            <AboutBackground />
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <MenuBar/>
            <AboutAview/>
            <OurStory/>
            <OurMission/>
            <MeetTheTeam/>
            <Careers/>
            <Footer/>

        </div>
    );
}

export default AboutPage;