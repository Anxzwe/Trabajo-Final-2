import React from "react";
import "../../styles/Card/CardContainer.css";

export default function CardsContainer({ children }) {

    //  Notas para mi. jsjsjsjs. Ignorar.
    //  El {children} lo que va a hacer es, cuando se cree el componente "<CardsContainer> Este seria un hijo </CardsContainer>" todo lo que vos pongás ahí dentro del componente, se va a tomar como que es el hijo y así es por su nombre. Por ende si yo pongo dentro el componente "<MapCards/>" el {children} permite que se ponga dentro de su elemento padre el "<CardsContainer></CardsContainer>" y me genere las cards. Si yo no pusiera el {children}, lo que pasaria es que el "<CardsContainer></CardsContainer>" seria desde que empieza hasta que termina el div: "<div></div><MapCards/>" El componente quedaria así sin el {children}.


    return (
        <div className="cards-container">
            {children}
        </div>
    )
}