import React from 'react';
import "./visitorProfile.sass"
import {useSelector} from "react-redux";


const VisitorProfile = () => {
    const {user} = useSelector((store) => store.user)
    return (
        <section className={"VisitorProfile"}>
            <div className="VisitorProfile__container">
                <div className="VisitorProfile__wrapper">
                    <div className="VisitorProfile__box">

                        <h2 className="VisitorProfile__h2">
                            Данные о поситителе
                        </h2>

                            <label className="VisitorProfile__label">
                                ФИО
                                <input className={"VisitorProfile__input"} type="text" value={user.name}/>
                            </label>


                            <label className="VisitorProfile__label">
                                Номер телефона
                                <input className={"VisitorProfile__input"} type="text" value={user.workPhone}/>
                            </label>

                        <div className="VisitorProfile__row">

                                <label className="VisitorProfile__label">
                                    Email
                                    <input className={"VisitorProfile__input"} type="text" value={user.email}/>
                                </label>


                            <div className="VisitorProfile__edit">
                                <button className="VisitorProfile__btn">
                                    Редактирование
                                </button>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.901 16.1602L17.297 8.76423C16.0526 8.24471 14.9226 7.48565 13.971 6.53023C13.0151 5.57845 12.2557 4.44801 11.736 3.20323L4.34 10.5992C3.763 11.1762 3.474 11.4652 3.226 11.7832C2.9331 12.1585 2.68196 12.5646 2.477 12.9942C2.304 13.3582 2.175 13.7462 1.917 14.5202L0.554996 18.6032C0.492309 18.7902 0.483009 18.9909 0.528139 19.1828C0.57327 19.3748 0.671042 19.5503 0.810467 19.6898C0.949892 19.8292 1.12544 19.927 1.31738 19.9721C1.50932 20.0172 1.71005 20.0079 1.897 19.9452L5.98 18.5832C6.755 18.3252 7.142 18.1962 7.506 18.0232C7.936 17.8182 8.342 17.5672 8.717 17.2742C9.035 17.0262 9.324 16.7372 9.901 16.1602ZM19.349 6.71223C20.0864 5.9748 20.5007 4.97462 20.5007 3.93173C20.5007 2.88884 20.0864 1.88867 19.349 1.15123C18.6116 0.413798 17.6114 -0.000488273 16.5685 -0.000488281C15.5256 -0.000488289 14.5254 0.413798 13.788 1.15123L12.901 2.03823L12.939 2.14923C13.3761 3.39995 14.0914 4.53513 15.031 5.46923C15.993 6.43693 17.168 7.16634 18.462 7.59923L19.349 6.71223Z" fill="white"/>
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className="VisitorProfile__box">
                        <h2 className="VisitorProfile__h2">
                            Добавьте дополнительные данные
                        </h2>
                        <div className="VisitorProfile__column">
                            <h3 className="VisitorProfile__h3">
                                +Страна проживания
                            </h3>
                        </div>
                        <div className="VisitorProfile__column">
                            <h3 className="VisitorProfile__h3">
                                +Вид деятельности
                            </h3>

                        </div>
                        <div className="VisitorProfile__row">
                            <div className="VisitorProfile__column">
                                <h3 className="VisitorProfile__h3">
                                    +Цель посещения выставки
                                </h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default VisitorProfile;