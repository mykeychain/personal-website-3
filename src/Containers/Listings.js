import React from "react";
import "../Styles/Listings.css";
import Section from "../Components/Section";

function Listings() {
    return (
        <div className="listings">
            <Section title="Work Experience" numCards={1} />
            <Section title="Projects" numCards={4} />
        </div>
    );
};

export default Listings;
