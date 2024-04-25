import React, { useContext } from "react";
import Section from "./Section";
import AppContext from "../utils/AppContext";
import OpenContext from "../utils/OpenContext";
import "../Styles/Listings.css";

function Listings() {
    const { appMode, setAppMode } = useContext(AppContext);
    const { resetOpenIds } = useContext(OpenContext);

    function onClick() {
        setAppMode("closed");
        resetOpenIds();
    };

    return (
        <div className="listings">
            <Section title="Work Experience" id="work-experience" numCards={1} />
            <Section title="Projects" id="projects" numCards={4} />
            <div className={`listing-overlay ${appMode === "open" ? "visible" : "hidden"}`} onClick={onClick}/>
        </div>
    );
};

export default Listings;
