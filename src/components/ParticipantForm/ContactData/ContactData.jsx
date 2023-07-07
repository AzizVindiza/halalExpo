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
            <RegistrationInput type={'text'} name={'name_contact_person'} title={'ФИО'}/>
            <RegistrationInput type={'text'} name={'position_contact_person'} title={'Должность'}/>
            <RegistrationPhoneNumber title={'Телефон'} name={'phone_contact_person'}/>
        </div>
    );
};

export default ContactData;