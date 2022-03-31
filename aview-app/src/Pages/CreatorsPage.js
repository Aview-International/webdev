import MenuBar from "../Components/MenuBar";
import "../Styles/CreatorsPage/CreatorsPage.css";
import React, {useState, useEffect} from "react";
import CreatorsBg from "../Components/CreatorsPage/CreatorsBg";

function CreatorsPage() {

    return (
        <div>
            <MenuBar />
            <CreatorsBg />
        </div>
    )
}

export default CreatorsPage;