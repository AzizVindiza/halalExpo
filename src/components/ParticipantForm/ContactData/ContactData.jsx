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
            <RegistrationInput type={'text'} name={'name_cont_person'} title={'ФИО'}/>
            <RegistrationPhoneNumber title={'Телефон'} name={'number_cont_person'}/>
        </>
    );
};

export default ContactData;