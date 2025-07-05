import React from "react";
import FooterLink from "../components/FooterLinks";
import FooterSocial from "../components/FooterSocial";
import { footerLinks } from "../data/FooterLinks";
import { footerSocial } from "../data/FooterSocial";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer__list'>
                {footerLinks.map(link => (
                    <FooterLink key={link.id} {...link} />
                ))}
            </ul>

            <p className='footer__text1'>Redes</p>

            <ul className='footer__list  footer__list--size'>
                {footerSocial.map(social => (
                    <FooterSocial key={social.id} {...social} />
                ))}
            </ul>

            <hr className='footer__line'/>

            <p className='footer__text2'>© 2025 Nueva Esperanza</p>
        </footer>
    );
}
