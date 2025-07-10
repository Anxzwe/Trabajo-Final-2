import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Footer/FooterLinks.css";

export default function FooterLink({ text, href }) {
    return (
        <li>
            <Link className="footer__link" to={href}>{text}</Link>
        </li>
    );
}

FooterLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

