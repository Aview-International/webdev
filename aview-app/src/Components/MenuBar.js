import "../Styles/MenuBar.css";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import React from "react";
import box from "../img/Rectangle-67.svg";
import Logo from "../img/logowhite3.svg";



function MenuBar(){
    let navigate = useNavigate(); 
    const aboutRoute = () =>{ 
    let path = '/about' 
    navigate(path);
    }

    const creatorsRoute = () =>{ 
        let path = '/creators' 
        navigate(path);
    }

    const translatorsRoute = () =>{ 
        let path = '/translators' 
        navigate(path);
    }

    const homeRoute = () =>{ 
        let path = '/' 
        navigate(path);
    }



    return(
        <menuBar class = 'bar'>
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <header className='homeBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={homeRoute} disableRipple>
                    Home
                </Button>
            </header>
            <header className='creatorBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }} onClick={creatorsRoute} disableRipple>
                    Creators
                </Button>
            </header>
            <header className='translatorBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }} onClick={translatorsRoute} disableRipple>
                    Translators
                </Button>
            </header> 
            <header className='aboutBut'>
                <Button variant = 'text' style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '22px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }} onClick={aboutRoute}>
                    About
                </Button>
            </header>
            {/* <header className="contactRect"></header> */}
            <header className='contactRect'> <img src={box} className="box1" alt="contactRect" ></img></header>

            <header className='contactBut'>
                <Button variant = "text" href="#text-buttons" sx={{
                    width: '200px',
                    fontWeight: 500,
                    fontSize: '18px',
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