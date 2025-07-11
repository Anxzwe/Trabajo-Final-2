import React from "react";
import PropTypes from "prop-types";
import "../../styles/Card/CardContainer.css";

export default function CardsContainer({ children }) {
    
    return (
        <div className="cards-container">
            {children}
        </div>
    )
}

CardsContainer.propTypes = {
    children: PropTypes.node.isRequired,
};