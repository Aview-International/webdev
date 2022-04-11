import "../Styles/Graphics.css";
import React, {useState, useEffect} from "react";
import phone from '../img/Saly-24.png'
import sw1 from '../img/doodle-51.png'
import sw2 from '../img/doodle-41.png'

   function graphic(){
        return(
            <div>
                <div className="container">
                    <div className="phone">
                    <header>
                        <img src={phone} alt="" ></img>
                    </header>
                    </div>
                </div>
           
            </div>


        );

    }


export default graphic;