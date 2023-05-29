import React from 'react';
import logo from './header__logo.png'
import './Header.sass'
import Nav from "./Nav/Nav";
import RowSection from "./RowSection/RowSection";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <RowSection/>
            <div className="container header__container">
                <h1 className="header__logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Halal Investment and Trading Expo"/>
                    </Link>
                </h1>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;