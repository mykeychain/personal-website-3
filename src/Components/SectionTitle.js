import React from "react";
import "../Styles/SectionTitle.css";

function SectionTitle(props) {
    return (
        <div className="section-title">
            {props.title.toUpperCase()}
        </div>
    );
};

export default SectionTitle;
