import React, { useContext, useState } from "react";
import {ReactComponent as Skull} from "../hd-skull.svg";
import AppContext from "../utils/AppContext";
import OpenContext from "../utils/OpenContext";
import "../Styles/ListingCard.css";

function ListingCard(props) {
    const { appMode, setAppMode } = useContext(AppContext);
    const { openId, setOpenId } = useContext(OpenContext);
    // const [ isOpen, setIsOpen ] = useState(false);

    function onClick() {
        if (appMode === "closed") {
            setAppMode("open");
            setOpenId(props.id);
        };
    };

    return (
        <div className={`listing-card-container ${openId === props.id ? "open" : ""}`}>
            <div className={`listing-card ${openId === props.id ? "open" : ""}`} onClick={onClick}>
                <Skull className="listing-logo" />
                <div className="listing-text">
                    <div className="listing-title">Entry Title</div>
                    <div className="listing-subtitle">Description here</div>
                </div>
                <div className={`card-additional-details ${openId === props.id ? "open" : ""}`}>
                    <div className="card-large-description">
                        Lots of more information here
                    </div>
                    <div>
                        picture carousel here
                    </div>
                </div>
            </div>
            <div className={`listing-placeholder ${openId === props.id ? "open" : ""}`}/>
        </div>
    );
};

export default ListingCard;
