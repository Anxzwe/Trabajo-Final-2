// src/components/Navbar.jsx
import React from "react";
import NavbarItem from "./NavbarItem";
import { navbarLinks } from "../../data/Navbar/NavbarLinks";
import "../../styles/Navbar/Navbar.css";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    {navbarLinks.map(link => (
                        <NavbarItem key={link.id} {...link} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
