import React from "react";

function ListItemsSocial({ dire3, clases }) {
    return (
        <li>
            <a class="endpage__link  endpage__link--hover" href={dire3}>
                <i class={clases}></i>
            </a>
        </li>
    )
}

export default ListItemsSocial