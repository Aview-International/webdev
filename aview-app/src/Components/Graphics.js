import "../Styles/Graphics.css";
import React, {useState, useEffect} from "react";
import phone from '../img/Saly-24.svg'
import sw1 from '../img/doodle-51.svg'
import sw2 from '../img/doodle-41.svg'

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