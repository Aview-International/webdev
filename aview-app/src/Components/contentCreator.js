import "../Styles/contentCreator.css";
import React, {useState, useEffect} from "react";
import lpLogo from '../img/loganPaulLogo.png'
import nLogo from '../img/ninjaLogo.png'
import sLogo from '../img/image34.png'
import wIfLogo from '../img/image35.png'
import yesLogo from '../img/yesTheory.png'
import markLogo from '../img/image32.png'

   function ContentCreator(){
        return(
            <contentCreator class='content'>
                <header className="creatorTitle"><span className="titleStyle">Content Creators</span> We've Worked With</header>

                <header className="loganPaul">Logan Paul</header>
                <header className="lpLogo"><img src={lpLogo}alt="lpLogo" /></header>

                <header className="ninja">Ninja</header>
                <header className="ninjaLogo"><img src={nLogo}alt="ninjaLogo" /></header>

                
                <header className="saudLogo"><img src={sLogo}alt="saudLogo" /></header>
                <header className="saudName">Saud Brothers</header>

                <header className = "wiName">What If</header>
                <header className = "wiLogo"><img src={wIfLogo}alt="wiLogo" /></header>
                

                <header className="ytLogo"><img src={yesLogo}alt="ytLogo" /></header>
                <header className="ytTxt">Yes Theory</header>

                <header className="mrLogo"><img src={markLogo} alt="mrLogo" /></header>
                <header className="mrTxt">Mark Rober</header>
                
            </contentCreator>



        );

    }


export default ContentCreator;