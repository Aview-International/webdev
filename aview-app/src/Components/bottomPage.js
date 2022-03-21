import "../Styles/bottomPage.css";
import React from "react";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
function BottomPage(){
    return(
        <bottomPage class = 'pageBot'>
            <header className="aviewLogo"></header>
            <header className="ytIcon">
                <YouTubeIcon size = 'large' sx={
                    { 
                        fontSize: 50,
                        color: "white",
                        width: "60px",
                        height: "60px"
                    }}>

                </YouTubeIcon>
            </header>
            <header className="liIcon">
                <LinkedInIcon sx={
                    {
                        fontSize: 50,
                        color: "white",
                        height: "50px",
                        width: "50px"
                    }}>

                </LinkedInIcon>
            </header>

            <header className='creator1But'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
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
                    fontSize: '24px',
                    lineHeight: '30px',
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
                    fontSize: '24px',
                    lineHeight: '30px',
                    textTransform: 'none',
                    color: '#FFFFFF'

                 }}onClick={()=>{window.location.reload(false);}} disableRipple>
                    About
                </Button>
            </header>

            <header className='ContactBut'>
                <Button href="#text-buttons" style={{
 
                    // fontFamily: 'Overpass',
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
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
                    fontSize: '24px',
                    lineHeight: '30px',
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