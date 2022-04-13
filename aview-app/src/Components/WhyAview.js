import "../Styles/WhyAview.css";
import React, { useState, useEffect } from "react";
import calImg from "../img/Saly-42.png";
import hand from "../img/Saly-31.png";
import clist from "../img/Saly-26.png";
import whyWeLead from "../img/whyWeLead.svg";
import Card from "../Components/card";
import handImg from "../img/Saly-31.png";

function WhyAview() {
  return (
    <div className="translators">
      <div className="translators">
        <Card
          src={handImg}
          alt="hand image"
          header="header"
          desc="description"
        />
        <Card
          src={handImg}
          alt="hand image"
          header="header"
          desc="description"
        />
        <Card
          src={handImg}
          alt="hand image"
          header="header"
          desc="description"
        />
      </div>
    </div>
  );
}

export default WhyAview;

{
  /* header text */
}
{
  /* <div className="textContainer">
<header className="textHeader"><img src={whyWeLead} alt="" /></header>
<p className="textDesc">AVIEW focuses on making our services 100% catered to our creators. Whether <br/>you need subtitles, dubbing, or shorts, AVIEW will help you along your journey.</p>
</div> */
}

{
  /* {todo: center all boxes/items using css flexbox} */
}

{
  /* <div>
<header className="infoBox"></header>
<header className="FandE">Fast & Easy</header>
<header className="FEdesc">AVIEW guarantees a 24-hour turnaround on subtitles and 48 hours on dubbed content.</header>
<header className="calenderImg"><img src={calImg} alt="calenderImg"/ ></header>
</div>

<div>
<header className="whyRect2"></header>
<header className="flexible">Flexible</header>
<header className="flexDesc">We offer a personalized payment plan and tailor our process to your needs.</header>
<header className="handImg"><img src={hand}  alt="handImg" /></header>
</div>

<div>
<header className="whyRect3"></header>
<header className="accurate">Accurate</header>
<header className="accDesc">We will ensure that our translations are accurate no matter the content.</header>
<header className="checklist"><img src={clist}  alt="checklist"/ ></header>
</div> */
}
