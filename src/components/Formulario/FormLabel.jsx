import React from 'react'
import PropTypes from "prop-types";
import '../../styles/Formulario/FormLabel.css';

export default function FormLabel({ labelFor, classN, text }) {


    return (
        <label htmlFor={labelFor} className={`formulario__label  ${classN}`}>{text}</label>
    )
}

FormLabel.propTypes = {
    labelFor: PropTypes.string.isRequired,
    classN: PropTypes.string,
    text: PropTypes.string.isRequired,
};