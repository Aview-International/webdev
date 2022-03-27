import "../Styles/genAview.css";
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import computer from '../img/Saly-10.png'
import translator from '../img/Saly-6.png'
   function GenAview(){
        return(
            <genAview class='gen'>
                <header className="genTitle">Generate AVIEW</header>
                <header className="expAudience">Expand your Audience</header>
                <header className="expDesc">Choosing not to expand your content to reach international viewers is a missed opportunity. AVIEW can help. Contact us today! </header>
                <header className="compImg"><img src={computer}alt="compImg" /></header>
                <header className="gStarted">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "22.79px",
                        width: "170px",
                        height: "50px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"
                    }}>Get Started</Button>
                </header>
                <header className="becomeT">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "22.79px",
                        width: "242px",
                        height: "50px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"

                    }}>Become a Translator</Button>
                </header>
                <header className="translatorHeadline">Subtitling Jobs</header>
                <header className="translatorDesc">Are you looking for a subtitling job? Apply today and join the team.</header>
                <header className="translatorImg"><img src={translator}alt="translatorImg" /></header>
            </genAview>



        );

    }


export default GenAview;