import MenuBar from "../Components/MenuBar";
import React, {useState, useEffect} from "react";
import TranslatorsBg from "../Components/TranslatorsPage/TranslatorsBg";
import Card from "../Components/card";
import calImg from '../img/Saly-42.png'
import handImg from "../img/Saly-31.png";
import "../Styles/TranslatorsPage/TranslatorsPage.css"
function TranslatorsPage() {


    return (
        <div className="translators">
            <Card src={handImg} alt="hand image" header="header" desc="description" />
            <Card src={handImg} alt="hand image" header="header" desc="description" />
            <Card src={handImg} alt="hand image" header="header" desc="description" />

        </div>
    )
}

export default TranslatorsPage;