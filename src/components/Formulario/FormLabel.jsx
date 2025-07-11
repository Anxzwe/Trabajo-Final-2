import React from 'react'
import PropTypes from "prop-types";
import '../../styles/Formulario/FormLabel.css';

export default function FormLabel({ labelFor, className, text }) {


    return (
        <label htmlFor={labelFor} className={`formulario__label  ${className}`}>{text}</label>
    )
}

FormLabel.propTypes = {
    labelFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};