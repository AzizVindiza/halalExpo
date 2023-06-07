import React from 'react';
import './ContactData.sass'
import {Controller, useFormContext} from "react-hook-form";
import RegistrationInput from "../../Registration/RegistrationInput/RegistrationInput";
import EmailForm from "../EmailForm/EmailForm";
import RegistrationPhoneNumber from "../../Registration/RegistrationPhoneNumber/RegistrationPhoneNumber";

const ContactData = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useFormContext();


    return (
        <div className="contactData">
            <h2 className="contactData__h2">
                Введите данные о контактном лице
            </h2>
            <RegistrationInput type={'text'} name={'fio'} title={'ФИО'}/>
            <RegistrationInput type={'text'} name={'profession'} title={'Должность'}/>
            <RegistrationPhoneNumber name={'number'}/>
            <RegistrationPhoneNumber name={'number'}/>

        </div>
    );
};

export default ContactData;