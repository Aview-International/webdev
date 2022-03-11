import '../Styles/Landing.css';
import React, {useState, useEffect} from "react";
import Background from "./Background.js";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Logo from '/Volumes/Samsung_T5/webdev/aview-app/src/logowhite.png';
import Stack from '@mui/material/Stack';
const baseURL = "http://localhost:3000";

function Landing(){
    return(
        <div>

            <Background></Background>
            <div className='Landing'>
                <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
             </div>
            

        </div>

        
    );
}
export default Landing;