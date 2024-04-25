import React from "react";
import "../Styles/SectionTitle.css";

function SectionTitle(props) {
    return (
        <div className="section-title-container">
            <div className="section-title">
                {props.title.toUpperCase()}
            </div>
            <div className="section-decoration" />
        </div>
    );
};

export default SectionTitle;
