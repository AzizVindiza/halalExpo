import React, {useContext, useState} from 'react';
import logo from './logo3.svg'
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
    const {isActiveHamburger,request,close,login, setActiveHamburger,isActiveHamburgerMenu, setActiveHamburgerMenu,openAside,setOpenAside} = useContext(CustomContext)


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


                <div className={"header__box"}>
                    <div onClick={()=>setOpenAside(!openAside)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.70163 6.09751C8.70163 5.06384 9.11225 4.07252 9.84316 3.34161C10.5741 2.6107 11.5654 2.20008 12.5991 2.20008C13.6327 2.20008 14.6241 2.6107 15.355 3.34161C16.0859 4.07252 16.4965 5.06384 16.4965 6.09751C16.4965 7.13117 16.0859 8.1225 15.355 8.85341C14.6241 9.58432 13.6327 9.99494 12.5991 9.99494C11.5654 9.99494 10.5741 9.58432 9.84316 8.85341C9.11225 8.1225 8.70163 7.13117 8.70163 6.09751ZM4.32016 15.4186C5.27111 14.4676 6.56088 13.9334 7.90573 13.9334H17.2924C18.6372 13.9334 19.927 14.4676 20.878 15.4186C21.8289 16.3696 22.3632 17.6593 22.3632 19.0042C22.3632 19.7267 22.0762 20.4195 21.5653 20.9304C21.0544 21.4413 20.3615 21.7283 19.6391 21.7283H5.55906C4.83659 21.7283 4.1437 21.4413 3.63283 20.9304C3.12197 20.4195 2.83496 19.7267 2.83496 19.0042C2.83496 17.6593 3.3692 16.3696 4.32016 15.4186Z" fill="#2948A7"/>
                            <path d="M8.70163 6.09751C8.70163 5.06384 9.11225 4.07252 9.84316 3.34161C10.5741 2.6107 11.5654 2.20008 12.5991 2.20008C13.6327 2.20008 14.6241 2.6107 15.355 3.34161C16.0859 4.07252 16.4965 5.06384 16.4965 6.09751C16.4965 7.13117 16.0859 8.1225 15.355 8.85341C14.6241 9.58432 13.6327 9.99494 12.5991 9.99494C11.5654 9.99494 10.5741 9.58432 9.84316 8.85341C9.11225 8.1225 8.70163 7.13117 8.70163 6.09751ZM4.32016 15.4186C5.27111 14.4676 6.56088 13.9334 7.90573 13.9334H17.2924C18.6372 13.9334 19.927 14.4676 20.878 15.4186C21.8289 16.3696 22.3632 17.6593 22.3632 19.0042C22.3632 19.7267 22.0762 20.4195 21.5653 20.9304C21.0544 21.4413 20.3615 21.7283 19.6391 21.7283H5.55906C4.83659 21.7283 4.1437 21.4413 3.63283 20.9304C3.12197 20.4195 2.83496 19.7267 2.83496 19.0042C2.83496 17.6593 3.3692 16.3696 4.32016 15.4186Z" stroke="#2E2E2E" stroke-width="1.5918"/>
                            <path d="M8.70163 6.09751C8.70163 5.06384 9.11225 4.07252 9.84316 3.34161C10.5741 2.6107 11.5654 2.20008 12.5991 2.20008C13.6327 2.20008 14.6241 2.6107 15.355 3.34161C16.0859 4.07252 16.4965 5.06384 16.4965 6.09751C16.4965 7.13117 16.0859 8.1225 15.355 8.85341C14.6241 9.58432 13.6327 9.99494 12.5991 9.99494C11.5654 9.99494 10.5741 9.58432 9.84316 8.85341C9.11225 8.1225 8.70163 7.13117 8.70163 6.09751ZM4.32016 15.4186C5.27111 14.4676 6.56088 13.9334 7.90573 13.9334H17.2924C18.6372 13.9334 19.927 14.4676 20.878 15.4186C21.8289 16.3696 22.3632 17.6593 22.3632 19.0042C22.3632 19.7267 22.0762 20.4195 21.5653 20.9304C21.0544 21.4413 20.3615 21.7283 19.6391 21.7283H5.55906C4.83659 21.7283 4.1437 21.4413 3.63283 20.9304C3.12197 20.4195 2.83496 19.7267 2.83496 19.0042C2.83496 17.6593 3.3692 16.3696 4.32016 15.4186Z" stroke="#2948A7" stroke-width="1.5918"/>
                        </svg>
                    </div>


                    <Burger toogleClass={toggleClass} isActive  Hamburger={isActiveHamburger}/>
                </div>











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
            {
                request ? <DemoForm/> : ""
            }


        </header>
    );
};

export default Header;