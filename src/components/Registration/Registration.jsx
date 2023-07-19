import React, {useContext} from 'react';
import './Registration.sass'
import {useForm, FormProvider} from "react-hook-form";
import {CustomContext} from "../../Context";
import Btn from "../Btn/Btn";
import RegistrationSelect from "./RegistrationSelect/RegistrationSelect";
import MasMediaForm from "../MasMediaForm/MasMediaForm";
import {toast} from "react-toastify";
import axios from "axios";
import RegistrationParticipant from "./RegistrationParticipant/RegistrationParticipant";
import RegistrationGover from "./RegistrationGover/RegistrationGover";
import RegistrationExpert from "./RegistrationExpert/RegistrationExpert";


const Registration = () => {

    const methods = useForm({mode: "onBlur"});
    // использую переменную methods чтобы передавать вложенным инпутам
    const {setClose, role, members} = useContext(CustomContext)

    const onSubmit = (data) => {
        const id = toast.loading("Please wait...")
        try {
            if(data.type_register === "Участник"){
                data = {
                    ...data,
                    photo_company: data.photo_company[0],
                    image_logo: data.image_logo[0],
                }
            }else if (data.type_register === "СМИ"){
                data = {
                    ...data,
                    image_certificate_smi: data.image_certificate_smi[0],
                    image_logo: data.image_logo[0],
                }
            }
            console.log(data)

            // console.log(data)

            axios.post('https://shark-app-65hkc.ondigitalocean.app/user/', data, {
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
    // вытаскиваю функцию setClose из контекста чтобы закрывать форму при клике на крестик
    return (
        <FormProvider {...methods} >{/*передаю все методы из rhf в FormProvider чтобы все вложенные инпуты могли испольозвать*/}
            <div className="registration">
                <div className="registration__wrapper">
                    <form className='registration__form'
                          onSubmit={methods.handleSubmit(onSubmit)}>{/*форма*/}{/*беру функцию handleSubmit из rhf и передаю onSubmit*/}
                        <div className="registration__title">
                            <h2 className="registration__h2">Регистрация</h2>
                            <button onClick={() => setClose(false)} className="registration__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675"
                                          stroke="black"
                                          strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="registration__container">
                            <RegistrationSelect title={"В качестве кого вы хотите посетить HIT EXPO?"} name={"type_register"}/>

                            {
                                role === "Участник" ? <RegistrationParticipant/>
                                    : role === "Посетитель" ? <RegistrationExpert/>
                                        : role === "СМИ" ? <MasMediaForm/>
                                            : role === "Эксперта" ? <RegistrationExpert/>
                                                : role === "Представитель государственных органов" ? <RegistrationGover/>
                                                    : ""
                            }

                            <Btn text={"Зарегистрироваться"} type={"submit"}/>
                            {/*главная кнопка отправки type submit*/}
                        </div>

                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default Registration;
