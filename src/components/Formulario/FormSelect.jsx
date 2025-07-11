import React from 'react'
import PropTypes from "prop-types";
import '../../styles/Formulario/FormSelect.css';

export default function FormSelect({ id, name, required, optiontext, options, value, onChange }) {

    return (
        <select
            id={id}
            name={name}
            className="formulario__select"
            required={required}
            value={value}
            onChange={onChange}
        >


            <option value="" disabled>{optiontext}</option>

            {options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}

        </select>
    )
}

FormSelect.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    optiontext: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};