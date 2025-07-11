import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Footer/FooterSocial.css";

export default function FooterSocial({ icon, href }) {
    return (
        <li>
            <Link
                className='footer__link  footer__link--hover  footer__link--size'
                to={href} target="_blank"
                rel="noopener noreferrer">
                <i className={icon}></i>
            </Link>
        </li>
    );
}

FooterSocial.propTypes = {
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};