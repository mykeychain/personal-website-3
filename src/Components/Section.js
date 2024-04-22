import React from "react";
import SectionTitle from "./SectionTitle";
import ListingCard from "./ListingCard";
import "../Styles/Section.css";

function Section(props) {
    function renderCards() {
        const cards = [];
        let i = 1;
        while (i <= props.numCards) {
            cards.push(<ListingCard />);
            i++;
        };
        return cards;
    };
    
    return (
        <div className="section">
            <SectionTitle title={props.title}/>
            { renderCards() }
        </div>
    );
};

export default Section;
