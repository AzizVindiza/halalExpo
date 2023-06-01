import "./Nav.sass"
import React from 'react';
import {NavLink} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import arr from "../../../utils/nav";
import arr1 from "../../../utils/nav1";
import arr2 from "../../../utils/nav2";
import Btn from "../../../components/Btn/Btn";
const Nav = () => {
    return (
        <nav className="nav">
            <div className="container nav__container">
                <Dropdown txt={"Об ЭКСПО"} arr={arr}/>
                <Dropdown txt={"Участникам"} arr={arr1}/>
                <Dropdown txt={"Посетителям"} arr={arr2}/>
                <NavLink className={'nav__link'} to={'partner'}>Партнеры</NavLink>
                <NavLink className={'nav__link'} to={'mass'}>СМИ</NavLink>
                <NavLink className={'nav__link'} to={'meet'}>B2B</NavLink>
                <NavLink className={'nav__link'} to={'news'}>Новости</NavLink>
                <NavLink className={'nav__link'} to={'question'}>FQA</NavLink>
                <NavLink className={'nav__link'} to={''}>
                    <Btn type="button" text="Купить Билет" m="border"/>
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;