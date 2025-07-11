import '../../styles/Formulario/Formulario.css';
import { useState } from 'react';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import FormSelect from './FormSelect';
import FormArea from './FormArea';

export default function Formulario() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        age: '',
        genre: '',
        email: '',
        tel: '',
        feedback: '',
        notifications: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);

        setFormData({
            name: '',
            surname: '',
            age: '',
            genre: '',
            email: '',
            tel: '',
            feedback: '',
            notifications: false
        });
    };

    return (
        <section className='gradient-bc'>
            <main>
                <form className="formulario" onSubmit={handleSubmit}>


                    {/* <!--        Info Básica        --> */}

                    <fieldset className="formulario__field">

                        <legend className="formulario__legend">INFORMACIÓN BÁSICA</legend>

                        <FormLabel labelFor={"name"} text={"Nombre"} classN={null} />

                        <FormInput
                            name={"name"}
                            id={"name"}
                            classN={"formulario__input"}
                            type={"text"}
                            placeholder={"Roselio"}
                            required={true}
                            maxLength={"30"}
                            value={formData.name}
                            onChange={handleChange}
                        />


                        <FormLabel labelFor={"surname"} text={"Apellido"} />

                        <FormInput
                            name={"surname"}
                            id={"surname"}
                            classN={"formulario__input"}
                            type={"text"}
                            placeholder={"Posadas"}
                            required={true}
                            maxLength={"30"}
                            value={formData.surname}
                            onChange={handleChange}
                        />


                        <FormLabel labelFor={"age"} text={"Edad"} />

                        <FormInput
                            name={"age"}
                            id={"age"}
                            classN={"formulario__input"}
                            type={"number"}
                            placeholder={"21"}
                            required={true}
                            min={"5"}
                            max={"100"}
                            value={formData.age}
                            onChange={handleChange}
                        />


                        <FormLabel labelFor={"genre"} text={"Género"} />

                        <FormSelect
                            id={"genre"}
                            name={"genre"}
                            text={"Selecciona un género"}
                            optiontext={"Selecciona un género"}
                            required={true}
                            value={formData.genre}
                            onChange={handleChange}
                            options={[
                                { value: "hombre", label: "Hombre" },
                                { value: "mujer", label: "Mujer" },
                                { value: "otro", label: "Otro" }
                            ]}
                        />

                    </fieldset>


                    {/* <!--        Contacto        --> */}

                    <fieldset className="formulario__field">

                        <legend className="formulario__legend">INFORMACIÓN DE CONTACTO</legend>

                        <FormLabel labelFor={"email"} text={"Email"} />

                        <FormInput
                            name={"email"}
                            id={"email"}
                            classN={"formulario__input"}
                            type={"email"}
                            placeholder={"ejemplo@gmail.com"}
                            required={true}
                            maxLength={"80"}
                            value={formData.email}
                            onChange={handleChange}
                        />


                        <FormLabel labelFor={"tel"} text={"Teléfono"} />

                        <FormInput
                            name={"tel"}
                            id={"tel"}
                            classN={"formulario__input"}
                            type={"number"}
                            placeholder={"1594835114"}
                            required={true}
                            maxLength={"12"}
                            value={formData.tel}
                            onChange={handleChange}
                            min={"0"}
                        />

                    </fieldset>


                    {/* Feedback */}

                    <FormLabel labelFor={"formTextarea"} classN={"formulario__label--position"} text={"Feedback"} />

                    <FormArea
                        name={"feedback"}
                        id={"formTextarea"}
                        rows={"7"}
                        maxLength={"1500"}
                        text={"Dejanos un mensaje..."}
                        value={formData.feedback}
                        onChange={handleChange}
                    />


                    {/* Notificaciones */}

                    <div className="formulario__container1">

                        <FormLabel
                            labelFor={"checkbox"}
                            classN={"formulario__label--design"}
                            text={"Enviarme notificaciones sobre nuevas adopciones"}
                        />

                        <FormInput
                            name={"notifications"}
                            id={"checkbox"}
                            classN={"formulario__input-checkbox"}
                            required={false}
                            type={"checkbox"}
                            checked={formData.notifications}
                            onChange={handleChange}
                        />

                    </div>


                    {/* Botones */}

                    <div className="formulario__container2">

                        <FormInput
                            classN={"formulario__button"}
                            type={"submit"}
                        />

                        <FormInput
                            classN={"formulario__button"}
                            //  Tuve que hacer que sea type button y no reset, porque sino cuando yo lo apreto, el options, en vez de quedarme en "Selecciona un género" me quedaba en la opción hombre y no deberia de pasar eso.
                            type={"button"}
                            value={"Resetear"}
                            onClick={() => setFormData({
                                name: '',
                                surname: '',
                                age: '',
                                genre: '',
                                email: '',
                                tel: '',
                                feedback: '',
                                notifications: false
                            })}
                        />

                    </div>

                </form>
            </main>
        </section>
    );
}
