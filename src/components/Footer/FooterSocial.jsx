import React from "react";
import PropTypes from "prop-types";
import "../../styles/Footer/FooterSocial.css";

export default function FooterSocial({ icon, href }) {
    return (
        <li>
            <a
                className='footer__link  footer__link--hover'
                href={href} target="_blank"
                rel="noopener noreferrer">
                <i className={icon}></i>
            </a>
        </li>
    );
}

FooterSocial.propTypes = {
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};