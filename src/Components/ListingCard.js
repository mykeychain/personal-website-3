import React from "react";
import {ReactComponent as Skull} from "../hd-skull.svg";
import "../Styles/ListingCard.css";

function ListingCard() {
    return (
        <div className="listing-card">
            <Skull className="listing-logo" />
            <div className="listing-text">
                <div className="listing-title">Entry Title</div>
                <div className="listing-subtitle">Description here</div>
            </div>
        </div>
    );
};

export default ListingCard;
