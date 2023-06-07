import React, {useState} from 'react';
import "./masmediaform.sass"
import EmailForm from "../ParticipantForm/EmailForm/EmailForm";
import SocialSection from "../SocialSection/SocialSection";

import Btn from "../Btn/Btn";
import {useForm} from "react-hook-form";
import RegistrationInput from "../Registration/RegistrationInput/RegistrationInput";


const MasMediaForm = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm({mode:"onBlur"});
    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className={'masmediaform'}>
            <div className="masmediaform__wrapper">
                 <h2 className="masmediaform__h2">Заполните данные о компании</h2>
                <div className="masmediaform__logo">
                    <span className="masmediaform__p">Загрузите логотип компании в  png, jpg, pdf<span  className="masmediaform__span">*</span></span>
                    <div className="masmediaform__download">
                        <h3 className="masmediaform__h3">Загрузить</h3>
                        <div className="masmediaform__line">
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                            </svg>

                        </div>
                    </div>

                </div>
                <div  className="masmediaform__form">
                    <RegistrationInput type={'text'} name={'organization'} title={'Полное юридическое наименование организации'}/>
                    <RegistrationInput type={'text'} name={'developmentEmail'} title={'Полное юридическое наименование организаци'}/>
                    <RegistrationInput type={'text'} name={'website'} title={'Веб-сайт'}/>
                    <RegistrationInput type={'text'} name={'phone'} title={'Рабочий телефон'}/>
                    <RegistrationInput type={'text'} name={'emailMas'} title={'Email'}/>
                    <SocialSection/>
                    <EmailForm/>
                </div>
            </div>
        </div>
    );
};

export default MasMediaForm;