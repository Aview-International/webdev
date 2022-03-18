import "../Styles/contentCreator.css";
import React, {useState, useEffect} from "react";
   function ContentCreator(){
        return(
            <contentCreator class='content'>
                <header className="creatorTitle"><span className="titleStyle">Content Creators</span> We Have Worked With</header>
                <header className="loganPaul">Logan Paul</header>
                <header className="lpLogo"></header>
                <header className="ninja">Ninja</header>
                <header className="ninjaLogo"></header>
                <header className="fouseyName">FouseyTube</header>
                <header className="fouseyLogo"></header>
                <header className = "aspLogo"></header>
                <header className = "aspTxt">Active Self Protection</header>
                <header className="ytLogo"></header>
                <header className="ytTxt">Yes Theory</header>
                <header className="mrLogo"></header>
                <header className="mrTxt">Mark Rober</header>
                
            </contentCreator>



        );

    }


export default ContentCreator;