import '../Styles/Landing.css';
import React, {useState, useEffect} from "react";
import Background from "../Components/Background.js";
import MenuBar from '../Components/MenuBar.js';
import StatsBox from '../Components/StatsBox.js';
import Logo from '/Volumes/Samsung_T5/webdev/aview-app/src/logowhite.png';
import TopText from '../Components/TopText';
const baseURL = "http://localhost:3000";

function Landing(){
    return(
        <div>

            <Background></Background>
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <MenuBar/>
            <StatsBox/>
            <TopText/>
        </div>

        
    );
}
export default Landing;