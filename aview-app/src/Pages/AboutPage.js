import '../Styles/AboutPage.css';
import React, {useState, useEffect} from "react";
import Background from "../Components/Background.js";
import MenuBar from '../Components/MenuBar.js';
import Logo from '../img/logowhite.png';


function AboutPage() {
    return (
        <div>
            <Background></Background>
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <MenuBar></MenuBar>
        </div>
    );
}

export default AboutPage;