import "../Styles/StatsBox.css";
import React from "react";

function StatsBox(){
    return(
        <statsBox class = 'statBox'>
            <header className="rect1"></header>
            <header className="rect2"></header> 
            <header className="stat1">500M+</header>   
            <p className="stat1under">International Creator Views</p>
            <header className="stat2">15+</header>   
            <p className="stat2under">Languages </p>
            <header className="stat3">100M+</header>   
            <p className="stat3under">Our Creators' Subscribers</p>
        </statsBox>




    );


}
export default StatsBox;