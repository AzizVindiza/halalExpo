import React from 'react';
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import CheckBox from "../CheckBox/CheckBox";
import RegistrationUploadInput from "../RegistrationUploadInput/RegistrationUploadInput";
import Btn from "../../Btn/Btn";
import CheckBoxGover from "../CheckBoxGover/CheckBoxGover";

const RegistrationGover = () => {
    return (
        <>
            <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
            <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
            <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
            <RegistrationInput type={"text"} title={"Организация"}
                               name={"gos_organization"}/>
            <RegistrationInput type={"text"} title={"Отделение"}
                               name={"branch"}/>
            {/*Бэк*/}
            <RegistrationInput type={"text"} title={"Должность"}
                               name={"position_main"}/>
            <RegistrationPassword/>
            <CheckBox/>
            <CheckBoxGover/>
        </>
    );
};

export default RegistrationGover;