import React from 'react';
import logo from './header__logo.png'
import './Header.sass'
const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <h1 className="header__logo">
                    <img src={logo} alt="Halal Investment and Trading"/>
                </h1>


            </div>
        </header>
    );
};

export default Header;