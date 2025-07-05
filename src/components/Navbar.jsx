// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../data/NavbarLinks";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    {navbarLinks.map(({ href, IconText, clases }, index) => (
                        <li key={index} className="navbar__item">
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    `navbar__link ${isActive ? "navbar__link--active" : ""}`
                                }
                                end
                            >
                                <i className={`${clases} navbar__icon`} />
                                {IconText}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
