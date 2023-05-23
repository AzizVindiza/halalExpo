import React, {useState} from 'react';
import './BaseForm.sass'

const BaseForm = () => {

    const [close,setClose] = useState(true)





    return (
        <>
            {
                close ?
                    <section className="baseForm">


                        <div className="baseForm__wrapper">
                            <div onClick={()=>setClose(false)} className="baseForm__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                    <input type="text"/>
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


                            </form>


                        </div>
                    </section> : ''
            }


        </>
    );
};

export default BaseForm;