import React from "react";
import "../styles/CardContainer.css";

function CardsContainer({ children }) {
    return (
        <div className="cards-container">
            {children}
        </div>
    )
}

export default CardsContainer