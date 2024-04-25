import React from "react";
import GeneralText from "../Components/GeneralText";
import { ReactComponent as Stamp } from "../stamp.svg";
import "../Styles/GeneralInfo.css";

function GeneralInfo() {
    return (
        <div className="general-info">
            <div className="headshot-container">
                <img src={require("../headshot.JPG")} alt="headshot" className="headshot" />
                {/* <div className="decoration top"/> */}
                {/* <div className="decoration bottom"/> */}
                <Stamp className="decoration-stamp"/>
            </div>
            <GeneralText />
        </div>
    );
};

export default GeneralInfo;
