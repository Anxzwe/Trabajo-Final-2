import React from 'react'
import '../../styles/Formulario/FormArea.css';

export default function FormArea({ rows, maxLength, text, id }) {


    return (
        <textarea id={id} rows={rows} className="formulario__textarea" maxLength={maxLength}
        placeholder={text}></textarea>
    )
}
