import "../Styles/genAview.css";
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
   function GenAview(){
        return(
            <genAview class='gen'>
                <header className="genTitle">Generate AVIEW</header>
                <header className="expAudience">Expand your Audience</header>
                <header className="expDesc">Choosing not to expand your content to reach international viewers is a missed opportunity. AVIEW can help. Contact us today! </header>
                <header className="compImg"></header>
                <header className="gStarted">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "30px",
                        width: "210px",
                        height: "60px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"
                    }}>Get Started</Button>
                </header>
                <header className="becomeT">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "30px",
                        width: "295px",
                        height: "60px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"

                    }}>Become a Translator</Button>
                </header>
                <header className="translatorHeadline">Subtitling Jobs</header>
                <header className="translatorDesc">Are you looking for a subtitling job? Apply today and join the team.</header>
                <header className="translatorImg"></header>
            </genAview>



        );

    }


export default GenAview;