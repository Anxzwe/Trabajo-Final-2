// pages/Home.jsx
import CardsContainer from '../components/CardsContainer';
import BackgroundImg from '../components/BackgroundImg';
import BackgroundPage from '../components/BackgroundPage';
import Card from '../components/Card';
import { cards } from '../data/Cards';
import "../styles/Navbar.css";
import "../styles/Card.css";

export default function Home() {
    return (
        <>
            <BackgroundImg fondoImg="fondo-img" fondo__contenedor1="fondo__contenedor1">
                <BackgroundPage fondo__titulo="Centro de adopciones Nueva Esperanza" fondo__subtitulo="Empezá adoptando hoy" />
            </BackgroundImg>

            <section>
                <CardsContainer>
                    {cards.map(card => (
                        <Card key={card.id} {...card} />
                    ))}
                </CardsContainer>

                <div className="centrar-link-masinfo">
                    <a className="centrar-link-masinfo__link" href="#">Ver más…</a>
                </div>
            </section>
        </>
    );
}
