import "../Styles/Graphics.css";
import React, {useState, useEffect} from "react";
import phone from '../img/Saly-24.png'
import sw1 from '../img/doodle-51.png'
import sw2 from '../img/doodle-41.png'

   function graphic(){
        return(
            <graphic class='Graphics'>
                <header className="swirl1"><img src={sw1} alt="phoneImage" /></header>
                <header className="swirl2"><img src={sw2} alt="phoneImage" /></header>
                <header className = 'phoneImage'> <img src={phone} alt="phoneImage" /></header>    

            </graphic>


        );

    }


export default graphic;