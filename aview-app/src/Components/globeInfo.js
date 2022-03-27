import "../Styles/globeInfo.css";
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import globe from '../img/Saly-44.png'
   function GlobeInfo(){
        return(
            <background class='globe'>
                <header className="text1">What We Do</header>
                <header className="globe1"><img src={globe} alt="globe1" /></header>
                <header className="bodyText">
                Many translation services depend on AI and machine learning. The problem with this is technology is not yet ready to understand the complexity of language. That’s why AVIEW has a human approach. AVIEW has a team of translators and transcribers covering over 15 languages. Try us today and gain AVIEW on your competition.                </header>
                <header className="lMoreBut">
                
                    <Button href="#text-buttons" style={{
                        width: 120,
                        textDecoration: 'underline',
                        fontWeight: 500,
                        fontWeight: 'medium',
                        fontSize: "18px",
                        textTransform: 'none',
                        lineHeight: "23px",                    
                        color: "#FFFFFF"
                    }}> Learn More
                    </Button>
           
                </header>
            </background>


        );

    }


export default GlobeInfo;