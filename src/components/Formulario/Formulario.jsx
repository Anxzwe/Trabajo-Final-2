import '../../styles/Formulario/Formulario.css';
import FormInput from './FormInput';
import FormLabel from './FormLabel';
import FormSelect from './FormSelect';
import FormArea from './FormArea';

export default function Formulario() {
    return (
        <section className='gradient-bc'>
            <main>
                <form className="formulario">

                    {/* <!--        Info Básica        --> */}

                    <fieldset className="formulario__field">

                        <legend className="formulario__legend">INFORMACIÓN BÁSICA</legend>

                        <FormLabel labelFor={"name"} text={"Nombre"} classN={null}/>
                        <FormInput name={"name"} id={"name"} classN={"formulario__input"} type={"text"} placeholder={"Nombre"} required={true} />

                        <FormLabel labelFor={"surname"} text={"Apellido"} />
                        <FormInput name={"surname"} id={"surname"} classN={"formulario__input"} type={"text"} placeholder={"Apellido"} required={true} />

                        <FormLabel labelFor={"age"} text={"Edad"} />
                        <FormInput name={"age"} id={"age"} classN={"formulario__input"} type={"number"} placeholder={"21"} required={true} />

                        <FormLabel labelFor={"genre"} text={"Género"} />
                        <FormSelect id={"genre"} name={"genre"} text={"Selecciona tu género"} optiontext={"Selecciona tu género"} required={true} options={[
                            { value: "hombre", label: "Hombre" },
                            { value: "mujer", label: "Mujer" },
                            { value: "otro", label: "Otro" }
                        ]} />

                    </fieldset>

                    {/* <!--        Fin Info Básica        --> */}


                    {/* <!--        Contacto        --> */}

                    <fieldset className="formulario__field">

                        <legend className="formulario__legend">INFORMACIÓN DE CONTACTO</legend>

                        <FormLabel labelFor={"email"} text={"Email"} />
                        <FormInput name={"email"} id={"email"} classN={"formulario__input"} type={"email"} placeholder={"ejemplo@gmail.com"} required={true} />

                        <FormLabel labelFor={"tel"} text={"Teléfono"} />
                        <FormInput name={"tel"} id={"tel"} classN={"formulario__input"} type={"number"} placeholder={"1594835114"} required={true} />

                    </fieldset>

                    {/* <!--        Fin Contacto        --> */}


                    <FormLabel labelFor={"formTextarea"} classN={"formulario__label--design"} text={"Feedback"} />
                    <FormArea id={"formTextarea"} rows={"5"} maxLength={"10000"} text={"Dejanos un mensaje..."} />


                    <div className="formulario__container1">
                        <FormLabel labelFor={"checkbox"} classN={"formulario__label--design"} text={"Enviarme notificaciones sobre nuevas adopciones"} />
                        <FormInput name={"checkbox"} id={"checkbox"} classN={"formulario__input-checkbox"} required={false} type={"checkbox"} />
                    </div>


                    <div className="formulario__container2">
                        <FormInput classN={"formulario__button"} type={"submit"} />
                        <FormInput classN={"formulario__button"} type={"reset"}/>
                    </div>

                </form>
            </main>
        </section>
    );
}
