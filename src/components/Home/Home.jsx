import React from "react";
import CardsContainer from '../Card/CardsContainer';
import MapCards from '../Card/MapCards';
import BackgroundImg from '../Home/BackgroundImg';
import BackgroundPage from '../Home/BackgroundPage';
import MasInfo from '../Home/MasInfo';

import "../../styles/Navbar/Navbar.css";
import "../../styles/Card/Card.css";
import "../../styles/Home/Home.css";

export default function Home() {
    return (
        <>
            <BackgroundImg fondoImg="fondo-img" fondo__contenedor1="fondo__contenedor1">
                <BackgroundPage title={"Centro de adopciones Nueva Esperanza"} subtitle={"Empezá adoptando hoy"}/>
            </BackgroundImg>

            <section className='adoptions' aria-label="Animales recién llegados">

                <h2 className='adoptions__title'>Recién llegados al refugio!</h2>
                
                <CardsContainer>
                    <MapCards/>
                </CardsContainer>

                <MasInfo href={"/"} text={"Ver más..."} />

            </section>
        </>
    );
}
