import React from 'react';
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import CheckBox from "../CheckBox/CheckBox";
import Btn from "../../Btn/Btn";
import RegistrationCountry from "../RegistrationCountry/RegistrationCountry";

const RegistrationExpert = () => {
    return (
        <>
            <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
            <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
            <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
            <RegistrationPassword/>
            <CheckBox/>
        </>
    );
};

export default RegistrationExpert;