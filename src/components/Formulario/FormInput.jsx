import React from 'react'
import PropTypes from "prop-types";
import '../../styles/Formulario/FormInput.css';

export default function FormInput({
    id,
    classN,
    type,
    placeholder,
    required,
    name,
    value,
    onChange,
    maxLength,
    min,
    max,
    onClick,
    checked
}) {


    return (
        <input
            name={name}
            id={id}
            className={classN}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            min={min}
            max={max}
            onClick={onClick}
            {...(type === "checkbox"
                ? { checked }
                : { value })}
        />
    )
}

FormInput.propTypes = {
    id: PropTypes.string,
    classN: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    maxLength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    min: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    max: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func,
    checked: PropTypes.bool
};