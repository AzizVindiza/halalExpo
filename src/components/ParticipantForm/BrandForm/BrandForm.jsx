import React from 'react';
import './BrandForm.sass'

import SocialSection from "../../SocialSection/SocialSection";
import ContactFace from "../ContactFace/ContactFace";
import {useForm, useFormContext} from "react-hook-form";
import RegistrationInput from "../../Registration/RegistrationInput/RegistrationInput";
import EmailForm from "../EmailForm/EmailForm";


const
    BrandForm = () => {
        const {
            register,
            formState: {
                errors

            },
            handleSubmit,

        } = useFormContext({mode:"onBlur"});
    return (
        <section className="brandForm">
            <div className="brandForm__popup">
                <div className="brandForm__wrapper">
                    <div className="brandForm__form">
                        <RegistrationInput type={'text'} name={'brand'} title={'Наименование бренда'}/>
                        <div className="brandForm__logo">
                            <span className="brandForm__text">Загрузите логотип компании в  png, jpg, pdf<span  className="brandForm__span">*</span></span>
                            <div className="brandForm__download">
                                <h3 className="brandForm__h3">Загрузить</h3>
                                <div className="brandForm__line">
                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                        <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <RegistrationInput type={'text'} name={'development_name'} title={'Полное юридическое наименование организации*'}/>
                        <RegistrationInput type={'text'} name={'address_development'} title={'Юридический адрес*'}/>
                        <RegistrationInput type={'text'} name={'inn'} title={'ИНН*'}/>
                        <RegistrationInput type={'text'} name={'РС'} title={'Р/С'}/>
                        <RegistrationInput type={'text'} name={'bic'} title={'БИК'}/>
                        <RegistrationInput type={'text'} name={'okp'} title={'ОКПО'}/>
                        <div className="brandForm__logo">
                            <span className="brandForm__text">Загрузите свидетельство регистрации<span  className="brandForm__span">*</span></span>
                            <div className="brandForm__download">
                                <h3 className="brandForm__h3">Загрузить</h3>
                                <div className="brandForm__line">
                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                        <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <RegistrationInput type={'text'} name={'bosName'} title={'ФИО руководителя'}/>
                        <RegistrationInput type={'text'} name={'profession'} title={'Должность'}/>
                        <RegistrationInput type={'text'} name={'companyWork'} title={'Деятельность компании'}/>
                        <RegistrationInput type={'text'} name={'describe'} title={'Опишите товары или услуги компании'}/>
                        <RegistrationInput type={'text'} name={'web'} title={'Веб-сайт '}/>
                        <RegistrationInput type={'text'} name={'tel'} title={'Рабочий телефон'}/>
                        <RegistrationInput type={'text'} name={'Email_third'} title={'Email'}/>
                        <SocialSection/>
                        <ContactFace/>
                        <EmailForm/>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default BrandForm;