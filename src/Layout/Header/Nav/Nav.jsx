import "./Nav.sass"
import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

import arr from "../../../utils/nav";
import arr1 from "../../../utils/nav1";
import arr2 from "../../../utils/nav2";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";
const Nav = () => {
    const {isActiveHamburgerMenu,setActiveHamburger,setLogin, setClose ,setActiveHamburgerMenu} = useContext(CustomContext)
    const {t} = useTranslation()
    const activeRegister = () => {
        setActiveHamburger(false)
        setClose(true)
    }
    const activeLogin = () => {
        setActiveHamburger(false)
         setLogin(true)
    }
    return (
        <nav className="nav">
            <div className="container nav__container">

                <Dropdown  item={t("header.dropDown",{returnObjects:true})}/>
                <Dropdown  item={t("header.dropDown1",{returnObjects:true})} />
                {/*<Dropdown  txt={t("header.Visitors")} arr={arr2}/>*/}
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'partner'}>{t("header.Partners")}</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'mass'}>{t("header.MEDIA")}</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'meet'}>B2B</NavLink>
                {/*<NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'news'}>{t("header.News")}</NavLink>*/}
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'question'}>FQA</NavLink>
            </div>
            <div className="nav__wrapper">
                <Link onClick={activeRegister} className={'nav__user'} to={''}>Регистрация</Link>
                {/*<Link onClick={activeLogin} className={'nav__user'} to={''}>Войти</Link>*/}
            </div>
            <p className="nav__txt">
                26.08.23 - 28.08.23 Иссык-Кульская область Экспо, г.Чолпон-Ата ,Рух Ордо
            </p>
        </nav>
    );
};

export default Nav;