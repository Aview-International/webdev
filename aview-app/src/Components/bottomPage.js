import "../Styles/bottomPage.css";
import React from "react";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {useNavigate} from "react-router-dom";
import logo from '../img/logowhite3.svg'

function BottomPage(){
    let navigate = useNavigate(); 
    const aboutRoute = () =>{ 
    let path = '/about' 
    navigate(path);
    }
    return(
        <bottomPage class = 'pageBot'>
            <header className="aviewLogo"><img src={logo}alt="aviewLogo" /></header>
            <header className="ytIcon">
                <YouTubeIcon size = 'large' sx={
                    {

                        color: "white",
                        width: "149.01px",
                        height: "50px"
                    }}>

                </YouTubeIcon>
            </header>
            <header className="liIcon">
                <LinkedInIcon sx={
                    {
                        color: "white",
                        height: "40px",
                        width: "40px"
                    }}>

                </LinkedInIcon>
            </header>

            <header className='creator1But'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '23px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    Creators
                </Button>
            </header>
            <header className='translator1But'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '23px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    Translators
                </Button>
            </header>
            <header className='about1But'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '23px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={aboutRoute} disableRipple>
                    About
                </Button>
            </header>

            <header className='ContactBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '23px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    Contact
                </Button>
            </header>

            <header className='careerBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '23px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    Careers
                </Button>
            </header>
            
            <header className="line"></header>
        </bottomPage>
    );


}
export default BottomPage;