import "../Styles/MenuBar.css";
import Button from '@mui/material/Button';
import React from "react";
import box from "../img/Rectangle-67.svg"


function MenuBar(){
    return(
        <menuBar class = 'bar'>
            <header className='homeBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    Home
                </Button>
            </header>
            <header className='creatorBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}disableRipple>
                    Creators
                </Button>
            </header>
            <header className='translatorBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}>
                    Translators
                </Button>
            </header> 
            <header className='aboutBut'>
                <Button variant = 'text' href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}>
                    About
                </Button>
            </header>
            {/* <header className="contactRect"></header> */}
            <header className='contactRect'> <img src={box} className="box1" alt="contactRect" ></img></header>

            <header className='contactBut'>
                <Button variant = "text" href="#text-buttons" sx={{
                    width: '200px',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    color: '#ffffff',
                    textTransform: 'none'  

                 }}onClick={()=>{window.location.reload(false);}}disableRipple disableFocusRipple>
                    Contact Us
                </Button>
            </header> 

        </menuBar>


    );
}

export default MenuBar;