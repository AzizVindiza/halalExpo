import React from 'react';
import "./masmediaform.sass"
import SocialSection from "../SocialSection/SocialSection";
import {useForm} from "react-hook-form";
import RegistrationInput from "../Registration/RegistrationInput/RegistrationInput";
import RegistrationUploadInput from "../Registration/RegistrationUploadInput/RegistrationUploadInput";
import RegistrationPhoneNumber from "../Registration/RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../Registration/RegistrationPassword/RegistrationPassword";
import CheckBox from "../Registration/CheckBox/CheckBox";
import Btn from "../Btn/Btn";
import ContactFace from "../ParticipantForm/ContactFace/ContactFace";


const MasMediaForm = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm({mode:"onBlur"});

    return (
        <div className={'masmediaform'}>
            <div className="masmediaform__wrapper">
                <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>
                <RegistrationInput type={'text'} name={'inn'} title={'ИНН'}/>
                <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
                <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
                <RegistrationPassword/>
                <CheckBox/>
                {/*{далее}*/}
                 <h2 className="masmediaform__h2">Заполните данные о компании</h2>
                <div  className="masmediaform__form">
                    <RegistrationUploadInput name={"image_certificate_smi"} title={"Загрузите вашего журналистского удостоверения"}/>
                    <RegistrationUploadInput name={"image_logo"} title={"Загрузите логотип компании в  png или jpg*"}/>
                    <RegistrationInput type={'text'} name={'organization_smi'} title={'Полное юридическое наименование организации'}/>
                    <RegistrationInput type={'text'} name={'address'} title={'Юридический адрес'}/>
                    <RegistrationInput type={'text'} name={'web_site'} title={'Веб-сайт'}/>
                    <SocialSection/>
                    <ContactFace/>
                    <RegistrationInput type={'text'} name={"smi_team"} title={'Сколько у вас человек в команде?'}/>
                </div>
            </div>
        </div>
    );
};

export default MasMediaForm;