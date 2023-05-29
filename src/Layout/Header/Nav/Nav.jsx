import "./Nav.sass"
import React from 'react';
import {NavLink} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import arr from "../../../utils/nav";
import arr1 from "../../../utils/nav1";
import arr2 from "../../../utils/nav2";
const Nav = () => {
    return (
        <nav className="nav">
            <div className="container nav__container">
                <Dropdown txt={"О ЭКСПО"} arr={arr}/>
                <Dropdown txt={"Участникам"} arr={arr1}/>
                <Dropdown txt={"Посетителям"} arr={arr2}/>
                <NavLink className={'nav__link'} to={'partner'}>Партнеры</NavLink>
                <NavLink className={'nav__link'} to={''}>СМИ</NavLink>
                <NavLink className={'nav__link'} to={'meet'}>B2B</NavLink>
                <NavLink className={'nav__link'} to={'news'}>Новости</NavLink>
                <NavLink className={'nav__link'} to={'question'}>FQA</NavLink>
            </div>
        </nav>
    );
};

export default Nav;