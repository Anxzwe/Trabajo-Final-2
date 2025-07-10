import React from "react";
import PropTypes from "prop-types";
import "../../styles/Home/MasInfo.css";
import { Link } from "react-router-dom";

export default function MasInfo({ text , href}) {
    return (
        <div className="mas-info">
            <Link className="mas-info__link" to={href}>{text}</Link>
        </div>
    )
}

MasInfo.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}