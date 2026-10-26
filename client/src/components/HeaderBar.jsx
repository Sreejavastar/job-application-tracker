import { useState } from "react";
import { Search, UserRound, Bell } from 'lucide-react';

function header() {
    const name = "Sreeja";
    return(
    <div className="TopHeaderSection">
    <div className="LeftLogo">
        <h2><span className="orangeHiglight">A</span>pply<span className="orangeHiglight">Q</span>uest</h2>
    </div>
    <div className="RightHead">
        <span id="searchSpace">
            <Search size={18} color="black" strokeWidth={1} />
            <input type="search" name="searchSol" id="SearchspaceHead" placeholder="Type Your Search Here"/>
        </span>
        <span id="bellNotify">
            <span id="bellIcon">
                <Bell size={18} color="black" strokeWidth={2}/>
            </span>
        </span>
        <span id="ProfileInfo">
            <span className="welcomeTxt">Welcome <span>{name}</span></span>
            <span className="profileDESC">
                <UserRound  size={18} color="white" strokeWidth={1.5}/>
            </span>
        </span>
    </div>
    </div>
    );
}

export default header;
