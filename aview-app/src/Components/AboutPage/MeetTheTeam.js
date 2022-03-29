import "../../Styles/AboutPage/MeetTheTeam.css"
import React from "react"
import border from "../../img/AboutPage/meetTeamborder.svg";
import teamImg from "../../img/AboutPage/teamImg1.svg";

export default function MeetTheTeam() {
    return (
        <div>
            <header className="meetTeamText">Meet The Team</header>

            {/* teamImgs not displaying properly, getting cut off by the box border */}

            <header className="teamImg1"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect1"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName">Lorem Ipsum</header>
            <header className="teamMemberRole">Lorem Ipsum</header>

            <header className="teamImg2"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect2"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName2">Lorem Ipsum</header>
            <header className="teamMemberRole2">Lorem Ipsum</header>

            <header className="teamImg3"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect3"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName3">Lorem Ipsum</header>
            <header className="teamMemberRole3">Lorem Ipsum</header>

            <header className="teamImg4"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect4"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName4">Lorem Ipsum</header>
            <header className="teamMemberRole4">Lorem Ipsum</header>

            <header className="teamImg5"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect5"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName5">Lorem Ipsum</header>
            <header className="teamMemberRole5">Lorem Ipsum</header>

            <header className="teamImg6"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect6"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName6">Lorem Ipsum</header>
            <header className="teamMemberRole6">Lorem Ipsum</header>

            <header className="teamImg7"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect7"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName7">Lorem Ipsum</header>
            <header className="teamMemberRole7">Lorem Ipsum</header>

            <header className="teamImg8"> <img src={teamImg} alt="Team memger img"></img> </header>
            <header className="teamRect8"> <img src={border} alt="border"></img> </header>
            <header className="teamMemberName8">Lorem Ipsum</header>
            <header className="teamMemberRole8">Lorem Ipsum</header>
            

        </div>
    )
}