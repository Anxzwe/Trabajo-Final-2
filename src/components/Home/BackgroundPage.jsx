import React from "react";
import "../../styles/Home/BackgroundPage.css";

function BackgroundPage({ fondo__titulo, fondo__subtitulo }) {
    return (
        <div className="fondo__contenedor2">
            <h1 className="fondo__titulo">{fondo__titulo}</h1>
            <h2 className="fondo__subtitulo">{fondo__subtitulo}</h2>
        </div>
    )
}

export default BackgroundPage