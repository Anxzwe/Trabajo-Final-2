import React from "react";
import "../src/styles/Card.css";

function Card({CardText, CardTitle, CardImg, href1, alt}) {
    return (
        <a class="card-link" href={href1}>
            <div class="card__container">

                <img class="card__img" src={CardImg} alt={alt}/>

                <h2 class="card__title">{CardTitle}</h2>

                <i class="[ fa-solid  fa-paw  fa-xl ]  card__icon"></i>

                <p class="card__text">{CardText}</p>

            </div>
        </a>
    )
}

export default Card