import React from "react";

function FooterLinks({ dire4, text }) {
    return (
        <li>
            <a class="endpage__link" href={dire4}>{text}</a>
        </li>
    )
}

export default FooterLinks