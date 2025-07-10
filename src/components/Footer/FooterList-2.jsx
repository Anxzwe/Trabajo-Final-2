import React from 'react'
import { footerSocial } from "../../data/Footer/FooterSocial";
import FooterSocial from "../Footer/FooterSocial";

export default function FooterList2() {

    return (
        <ul className='footer__list  footer__list--size'>
            {footerSocial.map(social => (
                <FooterSocial key={social.id} {...social} />
            ))}
        </ul>
    )
}