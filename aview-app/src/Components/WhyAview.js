import "../Styles/WhyAview.css";
import React, {useState, useEffect} from "react";
   function WhyAview(){
        return(
            <whyAview class='why'>
                <header className="whenWork">When You <span class = 'textStyle'>Work With Aview</span></header>
                <header className="box1OutLine"></header>
                <header className="infoBox"></header>
                <header className="FandE">Fast & Easy</header>
                <header className="FEdesc">AVIEW guarantees a 24-hour turnaround on subtitles and 48 hours on dubbed content.</header>
                <header className="calenderImg"></header>
                <header className="whyRect2"></header>
                <header className="whyRect3"></header>
                <header className="accurate">Accurate</header>
                <header className="accDesc">We will ensure that our translations are accurate no matter the content.</header>
                <header className="flexible">Flexible</header>
                <header className="flexDesc">We offer a personalized payment plan and tailor our process to your needs.</header>
                <header className="handImg"></header>
                <header className="checklist"></header>
            </whyAview>



        );

    }


export default WhyAview;