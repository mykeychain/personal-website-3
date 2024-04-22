import React from "react";
import GeneralTitle from "../Components/GeneralTitle";
import "../Styles/General.css";
import GeneralInfo from "./GeneralInfo";

function General() {
    return (
        <div className="general-container">
            <GeneralTitle />
            <GeneralInfo />
        </div>
    );
};

export default General;
