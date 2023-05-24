import React, {useContext, useState} from 'react';
import './BaseForm.sass'
import Btn from "../../Btn/Btn";
import {CustomContext} from "../../../Context";
import Stake from "../../Stake/Stake";
import Branch from "../../Branch/Branch";
import LoginForm from "../../ParticipantForm/LoginForm/LoginForm";

const BaseForm = () => {
    const {close,setClose,changeComponent,setChangeComponent} = useContext(CustomContext)
    const arr = ["Представитель государственных органов","СМИ","Посетитель","Участник","Эксперт"]

    const [select,setSelect] = useState('Представитель государственных органов') //choose select
    const [active,setActive] = useState(false) // open select
    const chooseItem = (item) => {
        setSelect(item)
    }
    return (
        <>
            {
                close ?
                    <section className="baseForm">



                        <div className="baseForm__popup">
                            <div className="baseForm__wrapper">
                                <div onClick={()=>setClose(false)} className="baseForm__close">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>


                                </div>


                            <h2 className="baseForm__h2">Регистрация</h2>
                            <p className="baseForm__p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                            </p>
                            <form className="baseForm__form">
                                <label className="baseForm__label" htmlFor="">Имя
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Фамилия
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Отечество
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Email
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Страна
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Город
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">Дата рождения
                                    <input type="date"/>
                                </label>

                                <div>
                                    <div className="baseForm__passport">
                                        <p className="baseForm__text">Загрузите паспорт с лицевой стороны*</p>
                                        <div className="baseForm__download">
                                            <h3 className="baseForm__h3">Загрузить</h3>
                                            <div className="baseForm__line">
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                                    <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="baseForm__passport2">
                                        <p className="baseForm__text">Загрузите паспорт с обратной стороны*</p>
                                        <div className="baseForm__download">
                                            <h3 className="baseForm__h3">Загрузить</h3>
                                            <div className="baseForm__line">
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                                    <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="baseForm__self">
                                        <p className="baseForm__text">Сделайте селфи с паспортом*</p>
                                        <div className="baseForm__download">
                                            <h3 className="baseForm__h3">Загрузить</h3>
                                            <div className="baseForm__line">
                                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                                    <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <label className='baseForm__label' htmlFor="">Телефон*
                                    <input type="tel"/>
                                </label>
                                <label className='baseForm__label' htmlFor="">WhatsApp*
                                    <input type="tel"/>
                                </label>

                                <div onClick={() => setActive(!active)} className="baseForm__choose">
                                    <h4 className="baseForm__h4"> В качестве кого вы хотите посетить HIT EXPO?</h4>
                                    <div className="baseForm__row">
                                        <h5 className="baseForm__h5">{select}</h5>
                                        <div  className={`baseForm__tick ${active ? 'baseForm__tick_active' : ''} `}>
                                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5 1.66602L6.5 5.33268L1.5 1.66602" stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>

                                        </div>
                                        {
                                            active ?   <ul className="baseForm__select">
                                                {
                                                    arr.map((item) => (
                                                        <li onClick={() => chooseItem(item)} className="baseForm__item">{item}</li>
                                                    ))
                                                }

                                            </ul> : ''
                                        }
                                    </div>


                                </div>
                                {
                                    select === "Участник"?
                                        <>
                                            <Branch/>
                                            <Stake/>

                                        </> :
                                         select === "СМИ"
                                       ? "" :  <LoginForm/>

                                }

                                <div className="baseForm__check">
                                    <div className="baseForm__choose">
                                        <h2 className="baseForm__name">Я заинтересован в</h2>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Посещение на HIT EXPO</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Участие на HIT EXPO</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Поиске проектов</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Другом</span>
                                        </label>
                                    </div>
                                    <div className="baseForm__choose">
                                        <h2 className="baseForm__name" >Как вы узнали о мероприятие</h2>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Инстаграм</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>ТВ, Радио</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Новостные порталы</span>
                                        </label>
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span>Другое</span>
                                        </label>

                                    </div>
                                </div>
                                {
                                    select === "СМИ" || select === "Участник" ? <Btn m={"register"} text={  "Продолжить"}/> :  <Btn m={"register"} text={  "Зарегистрироваться"}/>
                                }





                            </form>
                            </div>

                        </div>
                    </section> : ''
            }


        </>
    );
};

export default BaseForm;