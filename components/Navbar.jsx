import React from "react";
import "../src/styles/Navbar.css";

function Navbar({ children }) {
    return (
        <nav class="navegacion">
            <ul>{children}</ul>
        </nav>
    )
}

export default Navbar