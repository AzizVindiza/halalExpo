import React from 'react';
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import CheckBox from "../CheckBox/CheckBox";
import RegistrationUploadInput from "../RegistrationUploadInput/RegistrationUploadInput";
import Btn from "../../Btn/Btn";

const RegistrationGover = () => {
    return (
        <>
            <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
            <RegistrationInput type={'text'} name={'inn'} title={'ИНН'}/>
            <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
            <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
            <RegistrationPassword/>
            <RegistrationInput type={"text"} title={"Организация"}
                               name={"position_main"}/>
            <RegistrationInput type={"text"} title={"Отделение"}
                               name={"position_main"}/>
                {/*Бэк*/}
            <RegistrationInput type={"text"} title={"Должность"}
                               name={"position_main"}/>
            <RegistrationUploadInput name={"image_id_one"} title={"Загрузите паспорт с лицевой стороны"}/>
            <RegistrationUploadInput name={"image_id_two"} title={"Загрузите паспорт с обратной стороны"}/>
            <RegistrationUploadInput name={"image_id_three"} title={"Сделайте селфи с паспортом"}/>
            <CheckBox/>
        </>
    );
};

export default RegistrationGover;