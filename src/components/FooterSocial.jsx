import React from "react";
import { Link } from "react-router-dom";
import "../styles/FooterSocial.css";

export default function FooterSocial({ icon, href}) {
    return(
        <li>
            <Link className='footer__link  footer__link--hover' to={href}><i className={icon}></i></Link>
        </li>
    );
}