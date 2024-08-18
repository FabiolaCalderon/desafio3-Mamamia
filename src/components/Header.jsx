import React from 'react';

const Header = ({titulo, detalle}) => {
    return(

        <div className="Header">
            <div className="titulo">
            <h1>{titulo}</h1>
            <p>{detalle}</p>
            </div>
        </div>
     
    )
}

export default Header;