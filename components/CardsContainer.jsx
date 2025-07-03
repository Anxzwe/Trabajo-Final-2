import React from "react";
import "../src/styles/NavbarItems.css"

function CardsContainer({ children }) {
    return (
        <div className="cards-container">
            {children}
        </div>
    )
}

export default CardsContainer