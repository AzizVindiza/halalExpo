import React from 'react';
import "./b2bParticipant.sass"
import logo from "../../img/logo.svg"
import acc from "../../img/accaunt.svg"
import chat from "../../img/chat.svg"
import {useLocation} from "react-router-dom";

const B2bParticipant = () => {
    const location = useLocation()
    console.log(location.pathname)


    return (
        <div className={"B2bParticipant"}>
            <div className="B2bParticipant__row">
                <div className= {location.pathname === "/account/meet/inbox2" ? "B2bParticipant__status" : "B2bParticipant__status2"}>
                    {
                        location.pathname === "/account/meet/inbox2" ?
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.25 7.5L8.25 10.5L6.75 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="6.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25 6V9.75H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                    }
                    <span className="B2bParticipant__span">
                        {
                            location.pathname === "/account/meet/inbox2" ? "Активно" :
                                location.pathname === "/account/meet/inbox" ? "Ждет ответа" :
                                    location.pathname === "/account/meet/sent" ? "В ожидании" : ""
                        }

                    </span>

                </div>
                <div className="B2bParticipant__date">
                    27 августа 12:02
                </div>
            </div>
            <div className="B2bParticipant__wrapper">
                <div className="B2bParticipant__person">
                    <div className="B2bParticipant__img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="B2bParticipant__column">
                        <div className="B2bParticipant__span2">
                            (Участник)
                        </div>
                        <h2 className="B2bParticipant__h2">
                            Allchips Limited
                        </h2>
                    </div>
                </div>
                <div className="B2bParticipant__zone">
                    <div className="B2bParticipant__place">
                        <h3 className="B2bParticipant__h3">
                            Зона
                        </h3>
                        <span className="B2bParticipant__span3">
                            Trade
                        </span>
                    </div>
                    <div className="B2bParticipant__column">
                        <h3 className="B2bParticipant__h3">
                            Категория
                        </h3>
                        <span className="B2bParticipant__span3">
                            Техника и спецтехника
                        </span>
                    </div>

                </div>
                <div className="B2bParticipant__box">
                    <div className="B2bParticipant__flex">
                        <h4 className="B2bParticipant__h4">
                            Дата:
                        </h4>
                        <span className="B2bParticipant__span4">
                            25 августа
                        </span>
                    </div>
                    <div className="B2bParticipant__flex">
                        <h4 className="B2bParticipant__h4">
                            Время:
                        </h4>
                        <span className="B2bParticipant__span4">
                            12:10-12:25
                        </span>
                    </div>
                </div>
                <div className="B2bParticipant__btns">
                    <button className={location.pathname === "/account/meet/inbox" ? "B2bParticipant__btn" : "B2bParticipant__btn1"}>
                        Принять
                    </button>
                    <button className="B2bParticipant__btn">
                        Отказаться
                    </button>
                </div>
                <div className="B2bParticipant__icons">
                    <img src={acc} alt=""/>
                    <img src={chat} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default B2bParticipant;