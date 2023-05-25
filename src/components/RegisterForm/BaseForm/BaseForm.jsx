import React, {useContext, useState} from 'react';
import './BaseForm.sass'

import {CustomContext} from "../../../Context";

import MasMediaForm from "../../MasMediaForm/MasMediaForm";
import EmailForm from "../../ParticipantForm/EmailForm/EmailForm";
import CheckBox from "../../CheckBox/CheckBox";
import Btn from "../../Btn/Btn";
import Stake from "../../Stake/Stake";
import Branch from "../../Branch/Branch";
import ParticipantForm from "../../ParticipantForm/ParticipantForm";

const BaseForm = () => {
    const {close,setClose} = useContext(CustomContext)
    const arr = ["Представитель государственных органов","СМИ","Посетитель","Участник","Эксперт"]

    const [select,setSelect] = useState('Представитель государственных органов') //choose select
    const [active,setActive] = useState(false) // open select
    const [category,setCategory] = useState(0) // open select
    const clickOnCategory = (item,i) => { //choose category
        setSelect(item)
        setCategory(i)
    }
    return (
        <>
            {
                close ?
                    <section className="baseForm">
                        <div className="baseForm__popup">

                            <div className="baseForm__wrapper">
                                <h2 className="baseForm__title">В качестве кого вы хотите посетить HIT EXPO?</h2>

                                <ul className="baseForm__array">
                                    {
                                        arr.map((item,i) => (
                                            <li onClick={() =>  clickOnCategory(item,i)} className={`baseForm__item ${category === i ? "baseForm__item_active" : ''}`}>{item}</li>
                                        ))
                                    }
                                </ul>
                                <div onClick={()=>setClose(false)} className="baseForm__close">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>


                                </div>


                            <h2 className="baseForm__h2">Регистрация {select === "Посетитель" ?  "Посетителя"  : select === "Участник" ? "Участника" : select === "Эксперт" ? "Эксперта"  : select ==="СМИ" ? "СМИ" : <h2 className={'baseForm__gos'}>{select === "Представитель государственных органов" ? "Представителя государственных органов" : ""}</h2> }</h2>

                                <p className="baseForm__p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                            </p>
                            <form className="baseForm__form">
                                <label className="baseForm__label" htmlFor="">
                                    <span>Имя<span  className="baseForm__span">*</span></span>

                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Фамилия<span  className="baseForm__span">*</span></span>
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Отечество<span  className="baseForm__span">*</span></span>
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Email<span  className="baseForm__span">*</span></span>
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Страна<span  className="baseForm__span">*</span></span>
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Город<span  className="baseForm__span">*</span></span>
                                    <input type="text"/>
                                </label>


                                <label className="baseForm__label" htmlFor="">
                                    <span>Дата рождения<span  className="baseForm__span">*</span></span>
                                    <input type="date"/>
                                </label>

                                <div>
                                    <div className="baseForm__passport">
                                        <span className="baseForm__text">Загрузите паспорт с лицевой стороны<span  className="baseForm__span">*</span></span>
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
                                        <span className="baseForm__text">Загрузите паспорт с обратной стороны<span  className="baseForm__span">*</span></span>
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
                                        <span  className="baseForm__text">Сделайте селфи с паспортом<span  className="baseForm__span">*</span></span>
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
                                <label className='baseForm__label' htmlFor="">
                                    <span>Телефон<span  className="baseForm__span">*</span></span>
                                    <input type="tel"/>
                                </label>
                                <label className='baseForm__label' htmlFor="">
                                    <span>WhatsApp<span  className="baseForm__span">*</span></span>
                                    <input type="tel"/>
                                </label>

                                {
                                         select === "СМИ"  ?  <MasMediaForm/> : select === "Посетитель" ? <><EmailForm/><CheckBox/></> : select === "Участник" ? <><Stake/><Branch/><ParticipantForm/></>: ''

                                }


                            </form>
                                <Btn m={'masmedia'} text={'Зарегистрироваться'}/>
                                <p className="baseForm__tp" >
                                    Нажимая на кнопку, вы даете согласие на обработку своих персональных данных в соответствие с <span className="masmediaform__tp2">политикой конфиденциальности</span>
                                </p>

                            </div>

                        </div>
                    </section> : ''
            }


        </>
    );
};

export default BaseForm;