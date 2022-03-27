import "../Styles/WhyAview.css";
import React, {useState, useEffect} from "react";
import calImg from '../img/Saly-42.png'
import hand from '../img/Saly-31.png'
import clist from '../img/Saly-26.png'
   function WhyAview(){
        return(
            <whyAview class='why'>
                <header className="textStyle">Work With Aview</header>
                <header className="whenDesc">AVIEW focuses on making our services 100% catered to our creators. Whether <br/>you need subtitles, dubbing, or shorts, AVIEW will help you along your journey.</header>
                <header className="infoBox"></header>
                <header className="FandE">Fast & Easy</header>
                <header className="FEdesc">AVIEW guarantees a 24-hour turnaround on subtitles and 48 hours on dubbed content.</header>
                <header className="calenderImg"><img src={calImg} alt="calenderImg"/ ></header>
                <header className="whyRect2"></header>
                <header className="whyRect3"></header>
                <header className="accurate">Accurate</header>
                <header className="accDesc">We will ensure that our translations are accurate no matter the content.</header>
                <header className="flexible">Flexible</header>
                <header className="flexDesc">We offer a personalized payment plan and tailor our process to your needs.</header>
                <header className="handImg"><img src={hand}  alt="handImg" /></header>
                <header className="checklist"><img src={clist}  alt="checklist"/ ></header>
            </whyAview>



        );

    }


export default WhyAview;