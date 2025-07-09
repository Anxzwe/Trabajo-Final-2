import React from 'react'
import '../../styles/Formulario/FormSelect.css';

export default function FormSelect({ id, name, required, optiontext, options = [{ value, label }] }) {

    //  Notas para mi. jsjsjsjs. Ignorar.
    //  El key={value} funciona com identificador unico para no poner una prop extra id en "options = [{value, label, id}]" y en "{options.map(({ value, label,id })...", "<option key={id} value={value}>" porque cuando vos en Formulario.jsx tengas tu array de objetos: "
    //  {value: "hombre", label: "Hombre" },
    //  {value: "mujer", label: "Mujer" },
    //  {value: "otro", label: "Otro" }" El value es diferente para cada uno. 1er value: "hombre", 2do value, "mujer", 3er value: "otro". Ahora si tuvieras un mismovalue: "persona" para todos, deberias de poner un id unico para cada uno para que React sepa que cambia y renderizar eso.
    //  key={value}, key va a valer hombre por ejemplo a nivel React. value={value}, va a valer tambien hombre pero a nivel HTML cuando se envie el formulario.

    return (
        <select id={id} name={name} className="formulario__select" required={required}>

            <option value="" disabled selected>{optiontext}</option>

            {options.map(({ value, label }) => (

                <option key={value} value={value}>
                    {label}
                </option>

            ))}

        </select>
    )
}
