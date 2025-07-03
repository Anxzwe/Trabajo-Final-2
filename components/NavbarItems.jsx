import React from "react";
import "../src/styles/NavbarItems.css"

function ListItems({ direccion1, IconText, clases, activo }) {
    return (
        <li className="navegacion__item">
            <a className={`navegacion__link ${activo}`} href={direccion1}>
                <i className={`${clases} navegacion__icono`}></i>{IconText}
            </a>
        </li>
    )
}

export default ListItems