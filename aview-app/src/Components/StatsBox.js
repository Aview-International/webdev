import "../Styles/StatsBox.css";
import React from "react";

function StatsBox(){
    return(
        <statsBox class = 'statBox'>
            <header className="rect1"></header>
            <header className="rect2"></header> 
            <header className="stat1">250M+</header>   
            <p className="stat1under">Lorem ipsum</p>
            <header className="stat2">15M+</header>   
            <p className="stat2under">Lorem ipsum</p>
            <header className="stat3">10M+</header>   
            <p className="stat3under">Lorem ipsum</p>
        </statsBox>




    );


}
export default StatsBox;