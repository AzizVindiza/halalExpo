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

                <NavLink className={'nav__link'} to={''}>Программа форума</NavLink>
                <Dropdown txt={"Участникам"} arr={arr1}/>
                <Dropdown txt={"Посетителям"} arr={arr2}/>


                <NavLink className={'nav__link'} to={''}>Партнеры</NavLink>
                <NavLink className={'nav__link'} to={''}>B2B</NavLink>
                <NavLink className={'nav__link'} to={''}>Новости</NavLink>
                <NavLink className={'nav__link'} to={''}>FQA</NavLink>
            </div>
        </nav>
    );
};

export default Nav;