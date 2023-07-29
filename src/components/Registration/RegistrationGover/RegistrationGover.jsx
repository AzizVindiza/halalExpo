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
import Btn from "../../Btn/Btn";
import SelectFromArray from "../SelectFromArray/SelectFromArray";

const RegistrationGover = () => {

    const methods = useForm({mode: "onBlur"})
    const {setClose} = useContext(CustomContext)

    const onSubmit = (data) => {
        const id = toast.loading("Please wait...")
        try {
            data = {
                ...data,
                user_type: 4,
            }
            console.log(data)
            axios.post(`${process.env.REACT_APP_REST}/user/user-gos/`, data, {
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
                <RegistrationInput type={"text"} title={"ФИО"} name={"full_name"}/>
                <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>
                <RegistrationPhoneNumber title={"Телефон"} name={"phone"}/>
                <SelectFromArray array={[ "Министерство иностранных дел", "Министерство внутренних дел", "Министерство образования и науки", "Министерство финансов", "Министерство экономики", "Министерство труда и социального развития", "Министерство транспорта и дорожного хозяйства", "Министерство сельского хозяйства", "водного хозяйства и регионального развития", "Государственный комитет национальной безопасности", "Государственная налоговая служба", "Государственная таможенная служба", "Государственная служба по борьбе с экономической преступностью" ]} name={"oganization"} title={"Организация"}/>
                <RegistrationInput type={"text"} title={"Отделение"}
                                   name={"branch"}/>
                {/*Бэк*/}
                <RegistrationInput type={"text"} title={"Должность"}
                                   name={"position"}/>
                <RegistrationPassword/>
                <CheckBox/>
                <CheckBoxGover/>
                <Btn text={"Зарегистрироваться"} type={"submit"}/>
            </form>
        </FormProvider>
    );
};

export default RegistrationGover;