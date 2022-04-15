import "../Styles/genAview.css";
import React, {useState, useEffect} from "react";
import computer from '../img/Saly-10.png'
import translator from '../img/Saly-6.png'
import generateAview from "../img/generateAview.png"
   function GenAview(){
        return(
            <div className="generateAview-container">
                <div className="header-container">
                    <img src={generateAview} alt="" />
                </div>

                <div className="row-container">
                        <img src={computer} />
                        <div className="gen-col">
                            <h3>Expand your Audience</h3>
                            <p>Choosing not to expand your content to reach international viewers is a missed opportunity. AVIEW can help. Contact us today!</p>
                        </div>
                </div>

                <div className="row-container-2">
                        <img src={translator} />
                        <div className="gen-col">
                            <h3>Subtitling Jobs</h3>
                            <p>Are you looking for a subtitling job? Apply today and join the team. </p>
                        </div>
                </div>


            </div>



        );

    }


export default GenAview;