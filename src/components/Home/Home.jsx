// pages/Home.jsx
import CardsContainer from '../Card/CardsContainer';
import BackgroundImg from '../Home/BackgroundImg';
import BackgroundPage from '../Home/BackgroundPage';
import MasInfo from '../Home/MasInfo';
import MapCards from '../Card/MapCards';
import "../../styles/Navbar/Navbar.css";
import "../../styles/Card/Card.css";
import "../../styles/Home/Home.css";

export default function Home() {
    return (
        <>
            <BackgroundImg fondoImg="fondo-img" fondo__contenedor1="fondo__contenedor1">
                <BackgroundPage fondo__titulo="Centro de adopciones Nueva Esperanza" fondo__subtitulo="Empezá adoptando hoy" />
            </BackgroundImg>

            <section className='adoptions'>

                <h2 className='adoptions__title'>Recién llegados al refugio!</h2>
                
                <CardsContainer>
                    <MapCards/>
                </CardsContainer>

                <MasInfo href={"/"} text={"Ver más..."} />

            </section>
        </>
    );
}
