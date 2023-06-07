import React, {useContext} from 'react';
import './Registration.sass'
import {useForm, FormProvider, useFormContext} from "react-hook-form";
import {CustomContext} from "../../Context";
import Btn from "../Btn/Btn";
import RegistrationInput from "./RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "./RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationSelect from "./RegistrationSelect/RegistrationSelect";
import MasMediaForm from "../MasMediaForm/MasMediaForm";
import ParticipantForm from "../ParticipantForm/ParticipantForm";
import EmailForm from "../ParticipantForm/EmailForm/EmailForm";
import CheckBox from "../CheckBox/CheckBox";

const Registration = () => {
    const methods = useForm({mode:"onBlur"});
    // использую переменную methods чтобы передавать вложенным инпутам
    const onSubmit = data => console.log(data);
    // функция при отправки формы
    const {setClose,role} = useContext(CustomContext)
    // вытаскиваю функцию setClose из контекста чтобы закрывать форму при клике на крестик
    return (
        <FormProvider {...methods} >{/*передаю все методы из rhf в FormProvider чтобы все вложенные инпуты могли испольозвать*/}
            <div className="registration">
                <div className="registration__wrapper">
                    <form className='registration__form'
                          onSubmit={methods.handleSubmit(onSubmit)}>{/*форма*/}{/*беру функцию handleSubmit из rhf и передаю onSubmit*/}

                        <div onClick={() => setClose(false)} className="registration__close">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675" stroke="black"
                                      strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="registration__h2">Регистрация</h2>

                        <p className="registration__p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when Lorem Ipsum is simply dummy text
                            of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                        </p>

                        <RegistrationInput type={"text"} title={"Имя"} name={"name"}/>
                        <RegistrationInput type={"text"} title={"Фамилия"} name={"lastname"}/>
                        <RegistrationInput type={"text"} title={"Отчество"} name={"middlename"}/>
                        <RegistrationInput type={"email"} title={"Email"} name={"email"}/>
                        <RegistrationInput type={"text"} title={"Страна"} name={"country"}/>
                        <RegistrationInput type={"text"} title={"Город"} name={"city"}/>
                        <RegistrationInput type={"date"} title={"Дата рождения"} name={"dateofbirth"}/>
                        <RegistrationPhoneNumber name={"telephone"}/>
                        <RegistrationPhoneNumber name={"whatsapp"}/>
                        <CheckBox/>
                        <RegistrationSelect title={"В качестве кого вы хотите посетить HIT EXPO?*"} name={"role"}/>
                        {
                         role === "Посетитель" ?
                             <>
                                 <RegistrationInput type={'email'} name={'email_second'} title={'Элктронная почта'}/>
                                 <RegistrationInput type={'password'} name={'password_second'} title={'Придумайте пароль*'}/>
                                 <RegistrationInput type={'password'} name={'confirm_password'} title={'Подтвердите пароль*'}/>
                             </>
                                 : role === "Участник" ? <ParticipantForm/>
                                     : role === "СМИ" ? <MasMediaForm/> : role === "Эксперта" ?
                                     <>
                                         <EmailForm/>
                                     </> : role === "Представитель государственных органов" ? <EmailForm/> : ""


                        }
                        <Btn text={"Зарегистрироваться"} type={"submit"}/>{/*главная кнопка отправки type submit*/}
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default Registration;