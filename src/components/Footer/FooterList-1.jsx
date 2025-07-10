import React from 'react'
import { footerLinks } from "../../data/Footer/FooterLinks";
import FooterLink from "../Footer/FooterLinks";

export default function FooterList1() {

    return (
        <ul className='footer__list'>
            {footerLinks.map(link => (
                <FooterLink key={link.id} {...link} />
            ))}
        </ul>
    )
}
