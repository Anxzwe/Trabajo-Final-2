import React from 'react'
import '../../styles/Formulario/FormInput.css';

export default function FormInput({ id, classN, type, placeholder, required, name }) {


    return (
        <input name={name} id={id} className={classN} type={type} placeholder={placeholder} required={required} />
    )
}
