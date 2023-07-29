import React, {useContext} from 'react';
import "./masmediaform.sass"
import SocialSection from "../SocialSection/SocialSection";
import {FormProvider, useForm} from "react-hook-form";
import RegistrationInput from "../Registration/RegistrationInput/RegistrationInput";
import RegistrationUploadInput from "../Registration/RegistrationUploadInput/RegistrationUploadInput";
import RegistrationPhoneNumber from "../Registration/RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../Registration/RegistrationPassword/RegistrationPassword";
import CheckBox from "../Registration/CheckBox/CheckBox";
import Btn from "../Btn/Btn";
import ContactFace from "../ParticipantForm/ContactFace/ContactFace";
import CheckBoxSmi from "../Registration/CheckBoxSmi/CheckBoxSmi";
import {toast} from "react-toastify";
import axios from "axios";
import {CustomContext} from "../../Context";


const MasMediaForm = () => {

    const methods = useForm({mode: "onBlur"})

    const {setClose} = useContext(CustomContext)

    const onSubmit = (data) => {
        const id = toast.loading("Please wait...")
        try {
            data = {
                ...data,
                image_certificate: data.image_certificate[0],
                image_logo: data.image_logo[0],
                user_type: 1,
            }
            console.log(data)

            axios.post(`${process.env.REACT_APP_REST}/user/user-smi/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                toast.update(id, {
                    render: "Вы зарегистрировались",
                    type: "success",
                    isLoading: false,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setClose(false)
                console.log(data)

            }).catch((err) => {
                console.log(err)
                toast.update(id, {
                    render: err.response.data.email ? err.response.data.email[0] : err.response.data.workEmail ? err.response.data.workEmail[0] :'Ошибка в сервере!' ,
                    type: "error",
                    isLoading: false,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            })

        } catch (error) {
            toast.update(id, {
                render: 'Ошибка в сервере!', type: "error", isLoading: false,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={'masmediaform'}>

                    <div className="masmediaform__wrapper">
                        <h3 className="registration__h3">Заполните данные о компании</h3>
                        <div className="registration__column-wrapper">
                            <div className="registration__column">
                                <RegistrationUploadInput name={"image_certificate"}
                                                         title={"Загрузите вашего журналистского удостоверения"}/>
                                <RegistrationUploadInput name={"image_logo"}
                                                         title={"Загрузите логотип компании в  png или jpg*"}/>
                                <RegistrationInput type={'text'} name={"quantity_person"}
                                                   title={'Сколько у вас человек в команде?'}/>
                                <RegistrationPhoneNumber title={"Телефон"} name={"phone"}/>
                            </div>
                            <div className="registration__column">
                                <RegistrationInput type={'text'} name={'name_organization'}
                                                   title={'Полное юридическое наименование организации'}/>
                                <RegistrationInput type={'text'} name={'address'} title={'Юридический адрес'}/>
                                <RegistrationInput type={'text'} name={'web_site'} title={'Веб-сайт'}/>
                                <RegistrationInput type={'email'} name={'email_company'} title={'Email  компании'}/>
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
                                <RegistrationInput type={"email"}
                                                   title={"Адрес электронной почты (данная почта указывается как логин для входа)"}
                                                   name={"email"}/>
                                <RegistrationPassword/>
                            </div>
                        </div>
                        <CheckBox/>
                        <CheckBoxSmi/>
                    </div>
                </div>
                <Btn text={"Зарегистрироваться"} type={"submit"}/>
            </form>
        </FormProvider>
    );
};

export default MasMediaForm;