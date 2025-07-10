import React from "react";
import PropTypes from "prop-types";
import "../../styles/Home/BackgroundPage.css";

export default function BackgroundPage({ title, subtitle }) {
    return (
        <div className="fondo__contenedor2">
            <h1 className="fondo__titulo">{title}</h1>
            <h2 className="fondo__subtitulo">{subtitle}</h2>
        </div>
    )
}

BackgroundPage.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};