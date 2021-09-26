import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <div className='header-top'>
                <img src={logo} alt="journalist logo" />
                <h1>Top journalists in Bangladesh</h1>
                <h2>Budget for the program: 15 Million</h2>
            </div>
                <nav className="header-menu">
                    <a href="/home">Home</a>
                    <a href="/home">About</a>
                    <a href="/home">Gallery</a>
                    <a href="/home">Contact</a>
                </nav>
        </header>
    );
};

export default Header;