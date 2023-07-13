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
import CheckBoxSmi from "../Registration/CheckBoxSmi/CheckBoxSmi";


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
                <h3 className="registration__h3">Заполните данные о компании</h3>
                <div className="registration__column-wrapper">
                    <div className="registration__column">
                        <RegistrationUploadInput name={"image_certificate_smi"} title={"Загрузите вашего журналистского удостоверения"}/>
                        <RegistrationUploadInput name={"image_logo"} title={"Загрузите логотип компании в  png или jpg*"}/>
                        <RegistrationInput type={'text'} name={"quantity_person_smi"} title={'Сколько у вас человек в команде?'}/>
                        <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
                    </div>
                    <div className="registration__column">
                        <RegistrationInput type={'text'} name={'organization_smi'} title={'Полное юридическое наименование организации'}/>
                        <RegistrationInput type={'text'} name={'address_one'} title={'Юридический адрес'}/>
                        <RegistrationInput type={'text'} name={'web_site'} title={'Веб-сайт'}/>
                        <RegistrationInput type={'email'} name={'email_smi'} title={'Email  компании'}/>
                    </div>
                </div>
                <h3 className="registration__h3">Социальные сети</h3>

                <div className="registration__column-wrapper">
                    <div className="registration__column">
                        <RegistrationInput type={"text"} title={"Facebook"} name={"facebook"} notrequired={true}/>
                        <RegistrationInput type={"text"} title={"Инстаграм"} name={"instagram"}/>
                        <RegistrationInput type={"text"} title={"Twitter"} name={"twitter"} notrequired={true}/>
                    </div>
                    <div className="registration__column">
                        <ContactFace/>
                        <RegistrationInput type={"email"} title={"Адрес электронной почты (данная почта указывается как логин для входа)"} name={"email"}/>
                        <RegistrationPassword/>
                    </div>
                </div>
                <CheckBox/>
                <CheckBoxSmi/>
            </div>
        </div>
    );
};

export default MasMediaForm;