import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import "../Styles/MenuBar.css";
import Button from '@mui/material/Button';
import React from "react";
import { fontStyle } from '@mui/system';


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
            <header className='contactBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }} >
                    Contact Us
                </Button>
            </header> 
            <header className='contactBorder'></header>

        </menuBar>


    );
}

export default MenuBar;