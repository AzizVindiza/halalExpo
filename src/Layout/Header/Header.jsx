import React, {useContext, useState} from 'react';
import logo from './header__logo.png'
import './Header.sass'
import Nav from "./Nav/Nav";
import RowSection from "./RowSection/RowSection";
import {Link} from "react-router-dom";
import Burger from "./Nav/Burger/Burger";
import {animateScroll} from "react-scroll"
const Header = () => {
    const [isActiveHamburger, setActiveHamburger] = useState(false);
    const [isActiveHamburgerMenu, setActiveHamburgerMenu] = useState(false);

    const toggleClass = () => {
        setActiveHamburger(!isActiveHamburger);
        setActiveHamburgerMenu(!isActiveHamburgerMenu);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
     return (
        <header className="header">
            <RowSection/>
            <div className="container header__container">
                <h1 className="header__logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Halal Investment and Trade Expo"/>
                    </Link>
                </h1>


                    <Burger toogleClass={toggleClass} isActiveHamburger={isActiveHamburger}/>


                <div className={`header__menu ${isActiveHamburger ? " header__menu_active" : null} `}>
                    <Nav/>
                </div>

            </div>

        </header>
    );
};

export default Header;