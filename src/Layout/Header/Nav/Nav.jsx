import "./Nav.sass"
import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import arr from "../../../utils/nav";
import arr1 from "../../../utils/nav1";
import arr2 from "../../../utils/nav2";
import {CustomContext} from "../../../Context";
const Nav = () => {
    const { setActiveHamburger} = useContext(CustomContext)
    const {isActiveHamburgerMenu, setActiveHamburgerMenu} = useContext(CustomContext)
    return (
        <nav className="nav">
            <div className="container nav__container">

                <Dropdown  txt={"Об ЭКСПО"} arr={arr}/>
                <Dropdown  txt={"Участникам"} arr={arr1}/>
                <Dropdown  txt={"Посетителям"} arr={arr2}/>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'partner'}>Партнеры</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'mass'}>СМИ</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'meet'}>B2B</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'news'}>Новости</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link'} to={'question'}>FQA</NavLink>
                <NavLink onClick={() => setActiveHamburger(false)}  className={'nav__link nav__btn  '} to={''}>
                    <button type="button"   className={'nav__btn-second'}>
                        <span className={'nav__span'}>Купить Билет</span>
                    </button>
                </NavLink>
            </div>
            <div className="nav__wrapper">
                <Link className={'nav__user'} to={''}>Регистрация</Link>
                <Link className={'nav__user'} to={''}>Войти</Link>
            </div>
            <p className="nav__txt">
                29.07.23 - 01.08.23 Иссык-Кульская область Экспо, МВЦ. г. Чолпон-Ата
            </p>
        </nav>
    );
};

export default Nav;