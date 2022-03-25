import styles from "../../styles/Background.module.css";
import React, {useState, useEffect} from "react";
export default function Background(){
        return(
            <background className='Landing'>
                <header className = {styles.LandingBackground}></header>
                <header className={styles.blob1}></header>
                <header className={styles.blob2}></header>
                <header className={styles.blob3}></header>
                <header className={styles.blob4}></header>         
            </background>


        );

    }
