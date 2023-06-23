import React from 'react';
import './BrandForm.sass'

import SocialSection from "../../SocialSection/SocialSection";
import ContactFace from "../ContactFace/ContactFace";
import {useForm, useFormContext} from "react-hook-form";
import RegistrationInput from "../../Registration/RegistrationInput/RegistrationInput";
import EmailForm from "../EmailForm/EmailForm";
import RegistrationInputTextarea from "../../Registration/RegistrationInputTextarea/RegistrationInputTextarea";
import RegistrationUploadInput from "../../Registration/RegistrationUploadInput/RegistrationUploadInput";


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
                        {/*<div className="brandForm__logo">*/}
                        {/*    <span className="brandForm__text">Загрузите логотип компании в  png, jpg, pdf<span  className="brandForm__span">*</span></span>*/}
                        {/*    <RegistrationUploadInput name={'fddfd'} />*/}
                        {/*</div>*/}
                        <RegistrationInput type={'text'} name={'development_name'} title={'Полное юридическое наименование организации*'}/>
                        <RegistrationInput type={'text'} name={'address_development'} title={'Юридический адрес*'}/>
                        <RegistrationInput type={'text'} name={'inn'} title={'ИНН'}/>
                        <RegistrationInput type={'text'} name={'p_c'} title={'Р/С'}/>
                        <RegistrationInput type={'text'} name={'bik'} title={'БИК'}/>
                        <RegistrationInput type={'text'} name={'okpo'} title={'ОКПО'}/>
                        <div className="brandForm__logo">
                            <span className="brandForm__text">Загрузите свидетельство регистрации<span  className="brandForm__span">*</span></span>
                            <RegistrationUploadInput name={'sds'}/>
                        </div>
                        <RegistrationInput type={'text'} name={'name_manager'} title={'ФИО руководителя'}/>
                        <RegistrationInput type={'text'} name={'position_participant'} title={'Должность'}/>
                        <RegistrationInput type={'text'} name={'company'} title={'Деятельность компании'}/>
                        <RegistrationInputTextarea  type={'text'} name={'description'} title={'Опишите товары или услуги компании'}/>
                        <RegistrationInput type={'url'} name={'web_site'} title={'Веб-сайт '}/>
                        <RegistrationInput type={'text'} name={'name_contact_person'} title={'Рабочий телефон'}/>
                        <RegistrationInput type={'text'} name={'email'} title={'Email'}/>
                        <SocialSection/>
                        <ContactFace/>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default BrandForm;