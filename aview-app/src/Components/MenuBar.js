import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import "../Styles/MenuBar.css";
import Button from '@mui/material/Button';
import React from "react";
import outline from "/Volumes/Samsung_T5/webdev/aview-app/src/Rectangle-67.svg"


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
                <Button href="#text-buttons" style={{
 
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
            <header className='contactRect'> <img src={outline} className="outline" alt="contactRect" ></img></header>

            <header className='contactBut'>
                <Button href="#text-buttons" style={{
                    width: '200px',
                    borderRadius: '0px',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',

                    color: '#ffffff',
                    textTransform: 'none',                                     
                 }}onClick={()=>{window.location.reload(false);}}disableRipple>
                    Contact Us
                </Button>
            </header> 
            

        </menuBar>


    );
}

export default MenuBar;