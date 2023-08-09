import React, {useContext, useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom"
import "./b2b.sass"
import B2BCard from "./B2bCard/B2bCard";
import {CustomContext} from "../../../Context";
import {useSelector} from "react-redux";
import * as events from "events";

const B2B = () => {



    return (
        <div className={"B2b"}>
            <div className="B2b__container">
                <div className="B2b__wrapper">
                    <h2 className="B2b__h2">Записи B2B встреч</h2>
                    <div className="B2b__links">
                        <NavLink className={({isActive}) => (
                                !isActive ? "B2b__link" : "B2b__link_active")}  to={"inbox2"}>Назначенные встречи</NavLink>
                        <NavLink className={({isActive}) => (
                                !isActive ? "B2b__link" : "B2b__link_active")} to={"inbox"}>Входящие</NavLink>
                        <NavLink className={({isActive}) => (
                                !isActive ? "B2b__link" : "B2b__link_active")}  to={"sent"}>Отправленные</NavLink>
                    </div>
                    <div className="B2b__box">
                        <Outlet/>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default B2B;