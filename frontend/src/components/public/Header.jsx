import React from "react";
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
    <div className="Header">
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/test'>Test</Link></li>
                </ul>
                <div>
                    <span className="connexion">Connexion</span>
                    {/* <button className="deconnexion">Déconnexion</button> */}
                </div>
            </nav>
        </header>
    </div>);
};

export default Header;
