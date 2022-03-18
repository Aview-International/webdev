import '../Styles/Landing.css';
import React, {useState, useEffect} from "react";
import Background from "../Components/Background.js";
import MenuBar from '../Components/MenuBar.js';
import StatsBox from '../Components/StatsBox.js';
import Logo from '../logowhite.png';
import TopText from '../Components/TopText';
import Graphics from '../Components/Graphics';
import GlobeInfo from '../Components/globeInfo';
import WhyAview from '../Components/WhyAview';
const baseURL = "http://localhost:3000";

function Landing(){
    return(
        <div>

            <Background></Background>
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <MenuBar/>
            <StatsBox/>
            <TopText/>
            <Graphics/>
            <GlobeInfo/>
            <WhyAview/>
        </div>

        
    );
}
export default Landing;