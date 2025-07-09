import React from 'react'
import '../../styles/Formulario/FormLabel.css';

export default function FormLabel({ labelFor, classN, text }) {


    return (
        <label htmlFor={labelFor} className={`formulario__label  ${classN}`}>{text}</label>
    )
}
