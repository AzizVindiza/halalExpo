import React from 'react';
import "./b2bVisitor.sass"
import logo from "../../img/defoult.svg";
import acc from "../../img/accaunt.svg";
import chat from "../../img/chat.svg";
import {useLocation} from "react-router-dom";

const B2BVisitor = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className={"B2bVisitor"}>
            <div className="B2bVisitor__row">
                <div className={location.pathname === "/account/meet/inbox2" ? "B2bVisitor__status" : "B2bVisitor__status2"}>
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
                    <span className="B2bVisitor__span">
                          {
                              location.pathname === "/account/meet/inbox2" ? "Активно" :
                                  location.pathname === "/account/meet/inbox" ? "Ждет ответа" :
                                      location.pathname === "/account/meet/sent" ? "В ожидании" : ""
                          }
                    </span>

                </div>
                <div className="B2bVisitor__date">
                    27 августа 12:02
                </div>
            </div>
            <div className="B2bVisitor__wrapper">
                <div className="B2bVisitor__person">
                    <div className="B2bVisitor__img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="B2bVisitor__column">
                        <div className="B2bVisitor__span2">
                            (Посетитель)
                        </div>
                        <h2 className="B2bVisitor__h2">
                            Темиров Арсен Акматович
                        </h2>
                    </div>
                </div>
                <div className="B2bVisitor__zone">
                    <div className="B2bVisitor__country">
                        <h3 className="B2bVisitor__h3">
                            Страна
                        </h3>
                        <span className="B2bVisitor__span3">
                            Казахстан
                        </span>
                    </div>
                    <div className="B2bVisitor__column">
                        <h3 className="B2bVisitor__h3">
                            Телефон
                        </h3>
                        <span className="B2bVisitor__span3">
                            +7 (701) 723 90 23
                        </span>
                    </div>

                </div>
                <div className="B2bVisitor__box">
                    <div className="B2bVisitor__time">
                        <div className="B2bVisitor__flex">
                            <h4 className="B2bVisitor___h4">
                                Дата:
                            </h4>
                            <span className="B2bVisitor__span4">
                            25 августа
                        </span>
                        </div>
                        <div className="B2bVisitor__flex">
                            <h4 className="B2bVisitor___h4">
                                Время:
                            </h4>
                            <span className="B2bVisitor__span4">
                            12:10-12:25
                        </span>
                        </div>
                    </div>
                    <div className="B2bVisitor__mail">
                        <h3 className="B2bVisitor__h3">
                            Email
                        </h3>
                        <span className="B2bVisitor__span3">
                            temirov@gmail.com
                        </span>
                    </div>

                </div>
                <div className="B2bVisitor__btns">
                    <button className={location.pathname === "/account/meet/inbox" ? "B2bVisitor__btn" : "B2bVisitor__btn1"}>
                        Принять
                    </button>
                    <button className="B2bVisitor__btn">
                        Отказаться
                    </button>
                </div>
                <div className="B2bVisitor__icons">
                    <img src={chat} alt=""/>
                </div>



            </div>



        </div>
    );
};

export default B2BVisitor;