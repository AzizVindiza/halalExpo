import React, {useContext, useState} from 'react';
import logo from './header__logo.png'
import './Header.sass'
import Nav from "./Nav/Nav";
import RowSection from "./RowSection/RowSection";
import {Link} from "react-router-dom";
import Burger from "./Nav/Burger/Burger";
import {animateScroll} from "react-scroll"
import DemoForm from "../../components/DemoRegistraion/DemoForm/DemoForm";
import {ToastContainer} from "react-toastify";
import {CustomContext} from "../../Context";
import Registration from "../../components/Registration/Registration";
import LoginForm from "../../components/LoginForm/LoginForm";
const Header = () => {
    const {isActiveHamburger,request,close,login, setActiveHamburger,isActiveHamburgerMenu, setActiveHamburgerMenu} = useContext(CustomContext)


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
                <Link to={"/"}>
                <h2 className="header__logo">
                        <img src={logo} alt="HIT Expo - Halal Investment and Trade Expo"/>
                </h2>
                </Link>


                    <Burger toogleClass={toggleClass} isActiveHamburger={isActiveHamburger}/>


                <div className={`header__menu ${isActiveHamburger ? " header__menu_active" : null} `}>
                    <Nav/>
                </div>
                <div className={'header__example'}></div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {
                close ?  <Registration/> : ''
            }
            {
                login ? <LoginForm/> : ''
            }
            {/*{*/}
            {/*    request ? <DemoForm/> : ""*/}
            {/*}*/}
        </header>
    );
};

export default Header;