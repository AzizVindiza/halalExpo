import React from 'react';
import "./b2bParticipant.sass"
import logo from "../../img/logo.svg"
import acc from "../../img/accaunt.svg"
import chat from "../../img/chat.svg"

const B2bParticipant = () => {
    return (
        <div className={"B2bParticipant"}>
            <div className="B2bParticipant__row">
                <div className="B2bParticipant__status">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.25 7.5L8.25 10.5L6.75 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="B2bParticipant__span">
                        Активно
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
                        <h4 className="B2bParticipant___h4">
                            Дата:
                        </h4>
                        <span className="B2bParticipant__span4">
                            25 августа
                        </span>
                    </div>
                    <div className="B2bParticipant__flex">
                        <h4 className="B2bParticipant___h4">
                            Время:
                        </h4>
                        <span className="B2bParticipant__span4">
                            12:10-12:25
                        </span>
                    </div>
                </div>
                <button className="B2bParticipant__btn">
                    Отказаться
                </button>
                <div className="B2bParticipant__icons">
                    <img src={acc} alt=""/>
                    <img src={chat} alt=""/>
                </div>



            </div>



        </div>
    );
};

export default B2bParticipant;