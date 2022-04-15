import "../Styles/Landing.css";
import React, { useState, useEffect } from "react";
import Background from "../Components/Background.js";
import MenuBar from "../Components/MenuBar.js";
import StatsBox from "../Components/StatsBox.js";
import TopText from "../Components/TopText";
import Graphics from "../Components/Graphics";
import GlobeInfo from "../Components/globeInfo";
import WhyAview from "../Components/WhyAview";
import ContentCreator from "../Components/contentCreator";
import GenAview from "../Components/genAview";
import BottomPage from "../Components/bottomPage";
import BreadAndButter from "../Components/BreadAndButter";
import Faq from "../Components/Faq";
const baseURL = "http://localhost:3000";

function Landing() {
  return (
    <div>
      {/* <Background></Background> */}
      <MenuBar />
      <TopText />
      <Graphics />
      <StatsBox />

      <GlobeInfo />
      <WhyAview />
      <BreadAndButter />
      <ContentCreator/>
      <GenAview />
      <Faq />
      <BottomPage/>
    </div>
  );
}
export default Landing;
