import "../Styles/TopText.css";
import React from "react";
import Button from '@mui/material/Button';

function TopText(){
    return(
        <topText class = 'topText'>
            <header className="headLine">Translation and Transcribing </header>
            <p className="description">
                Connect with us today to gain AVIEW on your competitors.            
            </p>
            <header className="contactUs">
                <Button variant = "contained" style={{

                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "60px",
                    width: "200px",
                    textTransform: 'none',
                    color: "#FFFFFF",
                    background: "linear-gradient(93.07deg, #73BCFF 0.64%, #FE3688 102.01%)",
                    borderRadius: "50px"
                }}>Contact Us</Button>
            </header>
            <header className="learnMore">
                <Button href="#text-buttons" style={{
                    textDecoration: 'underline',
                    fontWeight: 500,
                    fontSize: "24px",
                    textTransform: 'none',
                    lineHeight: "30px",                    
                    color: "#FFFFFF"
               }}> Learn More
                </Button>
            </header>
        </topText>




    );


}
export default TopText;