import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/Card/Card.css";

export default function Card({ text, title, img, href, alt, icon }) {
    return (
        <Link className="card-link" to={href}>
            
            <div className="card__container">

                <img className="card__img" src={img} alt={alt} />

                <h2 className="card__title">{title}</h2>

                <i className={`${icon}  card__icon`}></i>

                <p className="card__text">{text}</p>

            </div>
        </Link>
    )
}

Card.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};