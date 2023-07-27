import React, {useContext} from 'react';
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import CheckBox from "../CheckBox/CheckBox";
import CheckBoxGover from "../CheckBoxGover/CheckBoxGover";
import {FormProvider, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import axios from "axios";
import {CustomContext} from "../../../Context";

const RegistrationGover = () => {

    const methods = useForm({mode: "onBlur"})
    const {setClose} = useContext(CustomContext)

    const onSubmit = (data) => {
        const id = toast.loading("Please wait...")
        try {
            axios.post(`${process.env.REACT_APP_REST}/user-gos/`, data, {
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
                console.log(data)
                setClose(false)
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

            </form>
        </FormProvider>
    );
};

export default RegistrationGover;