import React from 'react';
import {NavLink} from "react-router-dom";
import "./tab.sass"
import {useSelector} from "react-redux";
const Tab = ({item}) => {
    const {user} = useSelector((store) => store.user)
    const url = "../asserts/accountsIcon/"
    return (
        <div className={'tab'}>
            <div className="container tab__container">
                {
                    user.type_register === "Посетитель"  ?
                    item.filter((el) => el.title !== "Управление участием" && el.title !== 'Документы').map((item) => {
                        return (
                            <NavLink className={({isActive}) => (
                                !isActive ? "tab__links" : "tab__links_active"
                            )} to={item.path}>
                                <div className="tab__svg">
                                    <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                </div>
                                <h2 className="tab__h2">{item.title}</h2>
                            </NavLink>
                        )
                    })  :  user.type_register === "Участник" ?

                            <>

                            {
                                item.map((item) => {
                                    return (
                                        <NavLink className={({isActive}) => (
                                            !isActive ? "tab__links" : "tab__links_active"
                                        )} to={item.path}>
                                            <div className="tab__svg">
                                                <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                            </div>
                                            <h2 className="tab__h2">{item.title}</h2>
                                        </NavLink>
                                    )
                                })
                            }

                            </>
                            : user.type_register === "Представитель государственных органов" || user.type_register === "Представитель государственных органов" || user.type_register === "Эксперта" ?

                            <>
                            {
                                item.filter((el) => el.title !== 'Документы' && el.title !== 'Управление участием' && el.title !== "B2B встречи"  && el.title !== "Чат" && el.title !== "Забронировать билет").map((item) => {
                                    return (
                                        <NavLink className={({isActive}) => (
                                            !isActive ? "tab__links" : "tab__links_active"
                                        )} to={item.path}>
                                            <div className="tab__svg">
                                                <img src={url + item.svg} alt="tabs-icon" className="tab__img"/>
                                            </div>
                                            <h2 className="tab__h2">{item.title}</h2>
                                        </NavLink>
                                    )
                                })
                            }
                            </> : ""

                }
            </div>
        </div>
    );
};

export default Tab;