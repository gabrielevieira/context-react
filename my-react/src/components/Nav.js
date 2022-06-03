import React from 'react'
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </div>
    )
}

export default Nav