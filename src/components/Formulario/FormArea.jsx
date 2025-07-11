import React from 'react'
import PropTypes from "prop-types";
import '../../styles/Formulario/FormArea.css';

export default function FormArea({ rows, maxLength, text, id, value, onChange }) {


    return (
        <textarea
            name='feedback'
            id={id}
            rows={rows}
            className="formulario__textarea"
            maxLength={maxLength}
            placeholder={text}
            value={value}
            onChange={onChange}
        />
    )
}

FormArea.propTypes = {
    id: PropTypes.string.isRequired,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    maxLength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};