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
        <nav class="navbar">
            <a class="logo"><img src={Logo} alt="freeCodeCamp logo"/></a>
            <div class="link-container">
                <ul class="nav-links">
                    <li class="nav-item"><a href="#">Curriculum</a></li>
                    <li class="nav-item"><a href="#">Forum</a></li>
                    <li class="nav-item"><a href="#">News</a></li>
                    <li class="nav-item"><a href="#">Sign in</a></li>
                </ul>
            </div>
            <ul class="contact-us">
                <li><a>Contact Us</a></li>
            </ul>
  </nav>
    )
};

export default MenuBar;