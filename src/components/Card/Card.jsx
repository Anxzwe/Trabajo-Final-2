import React from "react";
import "../../styles/Card/Card.css";
import { Link } from "react-router-dom";

function Card({ text, title, img, href, alt, icon }) {
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

export default Card