import "../Styles/contentCreator.css";
import React, { useState, useEffect } from "react";
import lpLogo from "../img/loganPaulLogo.png";
import nLogo from "../img/ninjaLogo.png";
import sLogo from "../img/image34.png";
import wIfLogo from "../img/image35.png";
import yesLogo from "../img/yesTheory.png";
import markLogo from "../img/image32.png";
import contentCreator from "../img/ContentCreator.png";

function ContentCreator() {
  return (
    <div>
      <div className="contentCreator-Container">
        <div className="creatorTitle">
          <img src={contentCreator} alt="contentCreator" />
        </div>

        <div className="creators">
          <div className="creator-row">
            <div className="col">
              <header className="lpLogo">
                <img src={lpLogo} alt="lpLogo" />
              </header>
              <h4>Logan Paul</h4>
            </div>

            <div className="col">
              <header className="ninjaLogo">
                <img src={nLogo} alt="ninjaLogo" />
              </header>
              <h4>Ninja</h4>
            </div>

            <div className="col">
              <header className="saudLogo">
                <img src={sLogo} alt="saudLogo" />
              </header>
              <h4>Saud Brothers</h4>
            </div>            
          </div>
          <div className="creator-row">
            <div className="col">
              <header className="lpLogo">
                <img src={wIfLogo} alt="lpLogo" />
              </header>
              <h4>What If</h4>
            </div>

            <div className="col">
              <header className="ninjaLogo">
                <img src={yesLogo} alt="ninjaLogo" />
              </header>
              <h4>Yes Theory</h4>

            </div>

            <div className="col">
              <header className="saudLogo">
                <img src={markLogo} alt="saudLogo" />
              </header>
              <h4>Mark Rober</h4>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCreator;
