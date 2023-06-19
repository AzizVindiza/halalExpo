import React from 'react';
import "./masmediaform.sass"
import SocialSection from "../SocialSection/SocialSection";
import {useForm} from "react-hook-form";
import RegistrationInput from "../Registration/RegistrationInput/RegistrationInput";
import RegistrationUploadInput from "../Registration/RegistrationUploadInput/RegistrationUploadInput";


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
                 <h2 className="masmediaform__h2">Заполните данные о компании</h2>
                {/*<RegistrationUploadInput name={'dsds'} title={'Загрузите логотип компании в  png или jpg'}/>*/}
                <div  className="masmediaform__form">
                    <RegistrationInput type={'text'} name={'organization_smi'} title={'Полное юридическое наименование организации'}/>
                    <RegistrationInput type={'text'} name={'address'} title={'Юридический адрес'}/>
                    <RegistrationInput type={'text'} name={'web_site'} title={'Веб-сайт'}/>
                    <RegistrationInput type={'text'} name={'work_phone'} title={'Рабочий телефон'}/>
                    <RegistrationInput type={'email'} name={'email_smi'} title={'Email'}/>
                    <SocialSection/>
                    <RegistrationInput type={'text'} name={"smi_team"} title={'Сколько у вас человек в команде?'}/>
                </div>
            </div>
        </div>
    );
};

export default MasMediaForm;