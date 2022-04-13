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
        <nav className="navbar">
            <a className="logo"><img src={Logo} alt="AView Logo"/></a>
            {/* <div className="link-container">
                <ul className="nav-links">
                    <li className="nav-item"><a onClick={homeRoute}>Home</a></li>
                    <li className="nav-item"><a onClick={creatorsRoute}>Creators</a></li>
                    <li className="nav-item"><a onClick={translatorsRoute}>Translators</a></li>
                    <li className="nav-item"><a onClick={aboutRoute}>About</a></li>
                    <li className="nav-item"><a>Contact Us</a></li>
                </ul>
            </div> */}
  </nav>
    )
};

export default MenuBar;