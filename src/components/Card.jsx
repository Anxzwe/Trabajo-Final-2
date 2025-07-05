import React from "react";
import "../styles/Card.css";

function Card({text, title, img, href, alt}) {
    return (
        <a className="card-link" href={href}>
            <div className="card__container">

                <img className="card__img" src={img} alt={alt}/>

                <h2 className="card__title">{title}</h2>

                <i className="[ fa-solid  fa-paw  fa-xl ]  card__icon"></i>

                <p className="card__text">{text}</p>

            </div>
        </a>
    )
}

export default Card