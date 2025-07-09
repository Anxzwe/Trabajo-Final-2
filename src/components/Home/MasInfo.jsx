import React from "react";
import "../../styles/Home/MasInfo.css";
import { Link } from "react-router-dom";

export default function MasInfo({ text , href}) {
    return (
        <div className="mas-info">
            <Link className="mas-info__link" to={href}>{text}</Link>
        </div>
    )
}