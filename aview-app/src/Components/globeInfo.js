import "../Styles/globeInfo.css";
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import globe from '../img/Saly-44.png'
import globeHeader from "../img/globeHeader.svg";

   function GlobeInfo(){
        return(
        <div>
            <div className="globeInfoContainer">
                <div className="text">
                    <img src={globeHeader} alt="" />
                    <p>AVIEW hand picks the best translators and voice actors for your content. We cater our approach to each individual creator and their brand. Our team is ready to help you gain a AVIEW on your competition.</p>
                </div>

                <div className="globe">    
                    <img src={globe} alt="" />
                </div>
            </div>
        </div>

        );

    }


export default GlobeInfo;