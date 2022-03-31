import MenuBar from "../Components/MenuBar";
import React, {useState, useEffect} from "react";
import TranslatorsBg from "../Components/TranslatorsPage/TranslatorsBg";

function TranslatorsPage() {

    return (
        <div>
            <MenuBar />
            <TranslatorsBg />
        </div>
    )
}

export default TranslatorsPage;