import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../roadcast_logo_black.svg';

const Head = () => {
    return (
        <div className="container heading">
            <a><img src={logo} height={150} width={300} /></a>
        </div>
        
    )
}

export default Head;