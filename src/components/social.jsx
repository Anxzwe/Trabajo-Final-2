import React from "react";

function ListItemsSocial({ href4, clases }) {
    return (
        <li>
            <a className="endpage__link  endpage__link--hover" href={href4}>
                <i className={clases}></i>
            </a>
        </li>
    )
}

export default ListItemsSocial