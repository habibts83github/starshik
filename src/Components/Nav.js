import React from "react";
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div className="nav">
            <nav>
            <h1 className='title'>Star-Wars</h1>
                <ul>
                    <Link to = 'Starship'>
                        <h1>Ships</h1>
                    </Link>

                    <Link to= 'Planet'>
                        <h1>Planets</h1>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav