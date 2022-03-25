import '../Styles/Landing.css';
import React from "react";
import Background from "../Components/Background.js";
import MenuBar from '../Components/MenuBar.js';
import Logo from '../img/logowhite.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import translatorPic from '../img/translator.png'
import logo3 from '../img/logowhite3.svg'
import computerImg from '../img/computer.png'
import image28 from '../img/image28.png'
import yesT from '../img/ytLogo.png'
import asp from '../img/image29.png'
import fousey from '../img/fouseyLogo.png'
import ninja from '../img/image27.png'
import logan from '../img/90d611537ead32a4f10d8489a2031001-removebg-preview1.png'
import checklist from '../img/Saly-26.png'
import hands from '../img/Saly-31.png'
import cal from '../img/Saly-42.png'
import globe from '../img/Saly-44.png'
import sw1 from '../img/doodle-51.png'
import sw2 from '../img/doodle-41.png'
import phone from '../img/Saly-24.png'



const baseURL = "http://localhost:3000";

function Landing(){
    let navigate = useNavigate(); 
    const aboutRoute = () =>{ 
    let path = '/about' 
    navigate(path);
    }
    return(
        <div>

            <Background></Background>
            <header className='logo'> <img src={Logo} className="Landing-logo" alt="logo" ></img></header>
            <MenuBar/>
            <header className="rect1"></header>
            <header className="rect2"></header> 
            <header className="stat1">500M+</header>   
            <p className="stat1under">International Creator Views</p>
            <header className="stat2">15M+</header>   
            <p className="stat2under">Lorem ipsum</p>
            <header className="stat3">10M+</header>   
            <p className="stat3under">Lorem ipsum</p>
            <header className="headLine">Translation and Transcribing </header>
            <p className="description">
                Connect with us today to gain AVIEW on your competitors.            
            </p>
            <header className="contactUs">
                <Button variant = "contained" style={{

                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "60px",
                    width: "200px",
                    textTransform: 'none',
                    color: "#FFFFFF",
                    background: "linear-gradient(93.07deg, #73BCFF 0.64%, #FE3688 102.01%)",
                    borderRadius: "50px"
                }}>Contact Us</Button>
            </header>
            <header className="learnMore">
                <Button href="#text-buttons" style={{
                    textDecoration: 'underline',
                    fontWeight: 500,
                    fontSize: "24px",
                    textTransform: 'none',
                    lineHeight: "30px",                    
                    color: "#FFFFFF"
               }}> Learn More
                </Button>
            </header>
            <header className="swirl1"><img src={sw1} alt="swirl1" /></header>
            <header className="swirl2"><img src={sw2} alt="swirl2" /></header>
            <header className = 'phoneImage'><img src={phone} alt="phoneImage" /></header>    
            <header className="text1"> 
                    You Create.<br></br>
                   <span className="text2">We Translate.</span> 
                 </header>
                <header className="globe1"><img src={globe} alt="globe1" /></header>
                <header className="bodyText">
                    AVIEW will satisfy all your translation needs. Want subtitle translations? Dubbing? Services for short-form content? Don’t worry AVIEW has everything you need. Just contact us today and get everything done fast so you can do what you do best.
                </header>
                <header className="lMoreBut">
                
                    <Button href="#text-buttons" style={{
                        textDecoration: 'underline',
                        fontWeight: 500,
                        fontWeight: 'medium',
                        fontSize: "24px",
                        textTransform: 'none',
                        lineHeight: "30px",                    
                        color: "#FFFFFF"
                    }}> Learn More
                    </Button>
           
                </header>
                <header className="whenWork">When You <span class = 'textStyle'>Work With Aview</span></header>
                <header className="infoBox"></header>
                <header className="FandE">Fast & Easy</header>
                <header className="FEdesc">AVIEW guarantees a 24-hour turnaround on subtitles and 48 hours on dubbed content.</header>
                <header className="calenderImg"><img src={cal} alt="calenderImg" /></header>
                <header className="whyRect2"></header>
                <header className="whyRect3"></header>
                <header className="accurate">Accurate</header>
                <header className="accDesc">We will ensure that our translations are accurate no matter the content.</header>
                <header className="flexible">Flexible</header>
                <header className="flexDesc">We offer a personalized payment plan and tailor our process to your needs.</header>
                <header className="handImg"><img src={hands} alt="handImg" /></header>
                <header className="checklist"><img src={checklist} alt="checklist" /></header>
                <header className="creatorTitle"><span className="titleStyle">Content Creators</span> We Have Worked With</header>
                <header className="loganPaul">Logan Paul</header>
                <header className="lpLogo"><img src={logan} alt="lpLogo" /></header>
                <header className="ninja">Ninja</header>
                <header className="ninjaLogo"><img src={ninja} alt="ninjaLogo" /></header>
                <header className="fouseyName">FouseyTube</header>
                <header className="fouseyLogo"><img src={fousey} alt="fouseyLogo" /></header>
                <header className = "aspLogo"><img src={asp} alt="aspLogo" /></header>
                <header className = "aspTxt">Active Self Protection</header>
                <header className="ytLogo"><img src={yesT} alt="ytLogo" /></header>
                <header className="ytTxt">Yes Theory</header>
                <header className="mrLogo"><img src={image28} alt="mrLogo" /></header>
                <header className="mrTxt">Mark Rober</header>
                <header className="genTitle">Generate AVIEW</header>
                <header className="expAudience">Expand your Audience</header>
                <header className="expDesc">Choosing not to expand your content to reach international viewers is a missed opportunity. AVIEW can help. Contact us today! </header>
                <header className="compImg"><img src={computerImg} alt="compImg" /></header>
                <header className="gStarted">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "30px",
                        width: "210px",
                        height: "60px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"
                    }}>Get Started</Button>
                </header>
                <header className="becomeT">
                    <Button variant = "contained" style={{

                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "30px",
                        width: "295px",
                        height: "60px",
                        textTransform: 'none',
                        color: "#FFFFFF",
                        background: "linear-gradient(91.99deg, #73BCFF 0.81%, #DE2F77 102.62%)",
                        borderRadius: "50px"

                    }}>Become a Translator</Button>
                </header>
                <header className="translatorHeadline">Subtitling Jobs</header>
                <header className="translatorDesc">Are you looking for a subtitling job? Apply today and join the team.</header>
                <header className="translatorImg"><img src={translatorPic} alt="translatorImg" /></header>
                <header className="aviewLogo"><img src={logo3} alt="aviewLogo" /></header>
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

                 }}onClick={aboutRoute} disableRipple>
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
        </div>

        
    );
}
export default Landing;