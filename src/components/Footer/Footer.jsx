import React from "react";
import FooterList1 from "../Footer/FooterList-1";
import FooterList2 from "../Footer/FooterList-2";
import "../../styles/Footer/Footer.css";

export default function Footer() {
    return (
        <footer className='footer'>

            <nav aria-label="Enlaces del sitio">

                <FooterList1 />

            </nav>

            <p className='footer__text1'>Redes</p>

            <nav aria-label="Redes sociales">

                <FooterList2 />

            </nav>

            <hr className='footer__line' />

            <p className='footer__text2'>© 2025 Nueva Esperanza</p>
        </footer>
    );
}
