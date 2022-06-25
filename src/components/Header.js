import React from 'react';
import './Header.css';
import logo from '../img/logo.png'; 
import Dashboard from './Dashboard';



function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-brand">
                        <div className="header-brand-logo" aria-hidden="true">
                            <img src={logo} alt="Trivia Test" />
                        </div>
                        <span>
                            Trivia Test
                        </span>
                    </div>

                    <Dashboard />

                </div>
            </header>
        </>
  );



}

export default Header; 
