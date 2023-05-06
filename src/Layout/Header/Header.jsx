import React from 'react';
import logo from './header__logo.png'
import './Header.sass'
import Nav from "./Nav/Nav";
import RowSection from "./RowSection/RowSection";
const Header = () => {
    return (
        <header className="header">
            <RowSection/>
            <div className="container header__container">
                <h1 className="header__logo">
                    <img src={logo} alt="Halal Investment and Trading"/>
                </h1>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;