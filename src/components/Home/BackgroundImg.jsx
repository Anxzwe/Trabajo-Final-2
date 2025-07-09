import React from "react";
import "../../styles/Home/BackgroundImg.css";

function BackgroundImg({ fondoImg, fondo__contenedor1, children }) {
    return (
        <section className={fondoImg}>
            <div className={fondo__contenedor1}>
                {children}
            </div>
        </section>
    )
}

export default BackgroundImg

