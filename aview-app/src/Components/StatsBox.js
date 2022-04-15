import "../Styles/StatsBox.css";
import React from "react";
import stat1 from "../img/stat1.svg";
import stat2 from "../img/stat2.svg";
import stat3 from "../img/stat3.svg";

function StatsBox(){
    return(
        <div>
            <div className="statscontainer">
                <div className="bordercontainer">
                <div className="stats">
                    <header><img src={stat1} alt="" ></img></header>
                    <p>International Creator Views</p>
                </div>
                <div className="stats">    
                    <header><img src={stat2} alt="" ></img></header>
                    <p>Languages</p>
                </div>
                <div className="stats">    
                    <header><img src={stat3} alt="" ></img></header>
                    <p>International Gained Subscribers</p>
                </div>
                </div>
            </div>
        </div>
        




    );


}
export default StatsBox;

{/* <div className="stat-item"><img src={stat1} alt="" ></img></div>
                        <div className="stat-item"><img src={stat2} alt="" ></img></div>
                        <div className="stat-item"><img src={stat3} alt="" ></img></div> */}