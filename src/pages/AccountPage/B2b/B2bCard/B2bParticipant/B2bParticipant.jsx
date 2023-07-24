import React from 'react';
import "./b2bParticipant.sass"
import logo from "../../img/logo.svg"
import account from "../../img/accaunt.svg"
import chat from "../../img/chat.svg"



const B2BParticipant = () => {
    return (
        <div className={"B2BParticipant"}>
            <div className="B2BParticipant__wrapper">
                <div className="B2BParticipant__person">
                    <div className="B2BParticipant__img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="B2BParticipant__column">
                        <span className="B2BParticipant__span">
                            (Участник)
                        </span>
                        <h2 className="B2BParticipant__h2">
                            Allchips Limited
                        </h2>
                    </div>
                </div>
                <div className="B2BParticipant__box">
                    <div className="B2BParticipant__column">
                        <h3 className="B2BParticipant__h3">
                            Зона
                        </h3>
                        <span2 className="B2BParticipant__span2">Trade</span2>

                    </div>
                    <div className="B2BParticipant__column">
                        <h3 className="B2BParticipant__h3">
                            Категория
                        </h3>
                        <span2 className="B2BParticipant__span2">Техника и спецтехника</span2>

                    </div>
                    </div>
                <div className="B2BParticipant__time">
                    <div className="B2BParticipant__flex">
                            <h4 className="B2BParticipant__h4">
                                Дата:
                            </h4>
                            <span3 className="B2BParticipant__span3">
                                25 августа
                            </span3>

                    </div>
                    <div className="B2BParticipant__flex">
                            <h4 className="B2BParticipant__h4">
                                Время
                            </h4>
                            <span3 className="B2BParticipant__span3">
                                12:10-12:25
                            </span3>

                    </div>
                </div>
                <button className="B2BParticipant__btn">Отказаться</button>
                <div className="B2BParticipant__icons">
                    <div className="B2BParticipant__icon">
                        <img src={account} alt=""/>
                    </div>
                    <div className="B2BParticipant__icon">
                        <img src={chat} alt=""/>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default B2BParticipant;