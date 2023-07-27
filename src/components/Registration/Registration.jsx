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
import ChooseIndustry from "./ChooseIndustry/ChooseIndustry";
import ChooseTypeRegistration from "./ChooseTypeRegistration/ChooseTypeRegistration";


const Registration = () => {
    const {setClose, role, members} = useContext(CustomContext)

    return (
            <div className="registration">
                <div className="registration__wrapper">
                    <div className='registration__form'>
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
                            <ChooseTypeRegistration title={"В качестве кого вы хотите посетить HIT EXPO?"} name={"type_register"}/>
                            {
                                role === "Участник" ? <RegistrationParticipant/>
                                    : role === "Посетитель" ? <RegistrationExpert/>
                                        : role === "СМИ" ? <MasMediaForm/>
                                            : role === "Эксперта" ? <RegistrationExpert/>
                                                : role === "Представитель государственных органов" ? <RegistrationGover/>
                                                    : ""
                            }
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Registration;
