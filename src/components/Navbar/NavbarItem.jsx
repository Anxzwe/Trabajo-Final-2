// src/components/NavbarItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import '../../styles/Navbar/NavbarLi.css';

export default function NavbarItem({ href, IconText, iconClasses, disabled}) {
    return (
        //  Ya se que dijieron que si algo no se usa como una sección por ejemplo o un enlace, botón etc es preferible directamente no ponerlo pero... NO ME VAN A NEGAR LA FACHA QUE TIENE ESE LI!! ASJDKASJDHA. Sepan tomar algo de humor después de que estuve 3 semanas seguidas durante horas trabajando en este proyecto :) (Son las 4am y todavia no termino jsjsjs).
        <li className="navbar__item">
            {disabled ? (
                <span className="navbar__link navbar__link--disabled" title="Sección aún no disponible">
                    <i className={`${iconClasses} navbar__icon`} />
                    {IconText}
                </span>
            ) : (
                <NavLink
                    to={href}
                    className={({ isActive }) =>
                        `navbar__link ${isActive ? "navbar__link--active" : ""}`
                    }
                    end
                >
                    <i className={`${iconClasses} navbar__icon`} />
                    {IconText}
                </NavLink>
            )}
        </li>
    );
}

NavbarItem.propTypes = {
    href: PropTypes.string,
    IconText: PropTypes.string.isRequired,
    iconClasses: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};