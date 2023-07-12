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
        <>
            <RegistrationInput type={'text'} name={'name_contact_person'} title={'ФИО'}/>
            <RegistrationPhoneNumber title={'Телефон'} name={'phone_contact_person'}/>
        </>
    );
};

export default ContactData;