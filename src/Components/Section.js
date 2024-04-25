import React from "react";
import SectionTitle from "./SectionTitle";
import ListingCard from "./ListingCard";
import "../Styles/Section.css";

function Section(props) {
    function renderCards() {
        const cards = [];
        let i = 1;
        while (i <= props.numCards) {
            let id = props.id + "-" + i;
            cards.push(<ListingCard id={id} key={id} />);
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
