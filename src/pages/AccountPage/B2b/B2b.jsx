import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom"
import "./b2b.sass"
import B2BCard from "./B2bCard/B2bCard";
import {CustomContext} from "../../../Context";
import {useSelector} from "react-redux";
import * as events from "events";

const B2B = () => {
    const links = document.querySelectorAll(".B2b__link")
    links.forEach(link =>{
        link.addEventListener("click",()=>{
            document.querySelector(".active")?.classList.remove("active")
            link.classList.add("active")
        })
    })


    return (
        <div className={"B2b"}>
            <div className="B2b__container">
                <div className="B2b__wrapper">
                    <h2 className="B2b__h2">Записи B2B встреч</h2>
                    <div className="B2b__links">
                        <Link  className={"B2b__link"} to={""}>Назначенные встречи</Link>
                        <Link  className={"B2b__link"} to={""}>Входящие</Link>
                        <Link  className={"B2b__link"} to={""}>Отправленные</Link>
                    </div>
                    <div className="B2b__box">
                        {/*<B2BCard/>*/}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default B2B;