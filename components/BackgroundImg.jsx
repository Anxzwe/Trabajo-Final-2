import React, { Children } from "react";
import "../src/styles/BackgroundImg.css";

function BackgroundImg({ fondoImg, fondo__contenedor1, children }) {
    return (
        <section class={fondoImg}>
            <div class={fondo__contenedor1}>
                {children}
            </div>
        </section>
    )
}

export default BackgroundImg

