import React from "react";
import PropTypes from "prop-types";
import "../../styles/Home/BackgroundImg.css";

export default function BackgroundImg({ fondoImg, fondo__contenedor1, children }) {
    return (
        <section className={fondoImg}>
            <div className={fondo__contenedor1}>
                {children}
            </div>
        </section>
    )
}

BackgroundImg.propTypes = {
    fondoImg: PropTypes.string.isRequired,
    fondo__contenedor1: PropTypes.string.isRequired,
    children: PropTypes.node
}