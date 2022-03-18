import "../Styles/globeInfo.css";
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
   function GlobeInfo(){
        return(
            <background class='globe'>
                <header className="text1"> 
                    You Create.<br></br>
                   <span className="text2">We Translate.</span> 
                 </header>
                <header className="globe1"></header>
                <header className="bodyText">
                    AVIEW will satisfy all your translation needs. Want subtitle translations? Dubbing? Services for short-form content? Don’t worry AVIEW has everything you need. Just contact us today and get everything done fast so you can do what you do best.
                </header>
                <header className="lMoreBut">
                
                    <Button href="#text-buttons" style={{
                        textDecoration: 'underline',
                        fontWeight: 500,
                        fontWeight: 'medium',
                        fontSize: "24px",
                        textTransform: 'none',
                        lineHeight: "30px",                    
                        color: "#FFFFFF"
                    }}> Learn More
                    </Button>
           
                </header>
            </background>


        );

    }


export default GlobeInfo;