import React, {useContext} from 'react';
import './Registration.sass'
import {useForm, FormProvider} from "react-hook-form";
import {CustomContext} from "../../Context";
import Btn from "../Btn/Btn";
import RegistrationInput from "./RegistrationInput/RegistrationInput";
import RegistrationPhoneNumber from "./RegistrationPhoneNumber/RegistrationPhoneNumber";
import RegistrationSelect from "./RegistrationSelect/RegistrationSelect";
import MasMediaForm from "../MasMediaForm/MasMediaForm";
import ParticipantForm from "../ParticipantForm/ParticipantForm";
import CheckBox from "../CheckBox/CheckBox";
import RegistrationSelectMember from "./RegistrationSelectMember/RegistrationSelectMember";
import RegistrationSelectIndustry from "./RegistrationSelectIndustry/RegistrationSelectIndustry";
import RegistrationSelectFashion from "./RegistrationSelectFashion/RegistrationSelectFashion";
import RegistrationSelectFood from "./RegistrationSelectFood/RegistrationSelectFood";
import ChooseIndustry from "./ChooseIndustry/ChooseIndustry";
import RegistrationUploadInput from "./RegistrationUploadInput/RegistrationUploadInput";
import {useAddUserMutation} from "../../redux/ApiSlice";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/store";
import {fillRegister} from "../../redux/reducers/userSlice";
import img from "./information 1.png"
import RegistrationPassword from "./RegistrationPassword/RegistrationPassword";


const Registration = () => {
    const {user} = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const methods = useForm({mode: "onBlur"});
    // использую переменную methods чтобы передавать вложенным инпутам
    const [addUser]= useAddUserMutation()

    const {setClose, role, members} = useContext(CustomContext)

    const onSubmit = (data) => {
        try {
            addUser(data)

                .unwrap()
                .then(() => {
                    dispatch(fillRegister(data))
                    console.log(data)
                    toast.success('Заявка отпралена!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setClose(false)
                })
                .catch(() => {
                    console.log(data)
                    toast.error('Ошибка в сервере!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })

        } catch (error) {
            toast.error('Ошибка в сервере!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
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

                        <div onClick={() => setClose(false)} className="registration__close">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16663 1.16675L12.8333 12.8334M1.16663 12.8334L12.8333 1.16675"
                                      stroke="black"
                                      strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="registration__h2">Регистрация</h2>

                        <p className="registration__p">
                            <img src={img} alt="" className="registration__img"/>
                            <span className="registration__span">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            </span>
                        </p>
                        <RegistrationInput type={"text"} title={"ФИО"} name={"name"}/>

                        <RegistrationInput type={"text"} title={"Страна"} name={"country"}/>
                        <RegistrationInput type={"text"} title={"Город"} name={"city"}/>
                        <RegistrationInput type={"date"} title={"Дата рождения"} name={"birth"}/>
                        <RegistrationUploadInput name={"image_id_one"} title={"Загрузите паспорт с лицевой стороны*"}/>
                        <RegistrationUploadInput name={"image_id_two"} title={"Загрузите паспорт с обратной стороны*"}/>
                        <RegistrationUploadInput name={"image_id_three"} title={"Сделайте селфи с паспортом*"}/>
                        <RegistrationPhoneNumber title={"Телефон"} name={"workPhone"}/>
                        <RegistrationPhoneNumber title={"WhatsApp"} name={"personalPhone"}/>
                        <CheckBox/>
                        <RegistrationSelect title={"В качестве кого вы хотите посетить HIT EXPO?"} name={"participant_sector"}/>
                        {
                            role === "Посетитель" ?
                                ""
                                : role === "Участник" ?
                                    <>
                                        <RegistrationSelectMember
                                            title={'Выберите сектор участия (с условиями участия каждого сектора можно ознакомится)'}
                                            name={'participation_sector'}/>
                                        {members === 'Trade' ?
                                            <RegistrationSelectIndustry title={'Выберите отрасль'} name={'trade'}/>
                                            :
                                            members === "Fashion" ?
                                                <RegistrationSelectFashion title={'Выберите направление'} name={'choose_direction_fashion'}/>
                                                :
                                                members === 'Food' ?
                                                    <RegistrationSelectFood title={'Выберите направление'} name={'choose_direction_food'}/>
                                                    :
                                                    members === "Investment" ?
                                                        <ChooseIndustry/>
                                                        : ""
                                        }
                                        {<ParticipantForm/>}
                                    </>
                                    : role === "СМИ" ? <MasMediaForm/> : role === "Эксперта" ? ""
                                        : role === "Представитель государственных органов" ? <RegistrationInput type={"text"} title={"Должность"} name={"position_main"}/> : ""
                        }

                            <RegistrationInput type={"email"} title={"Электронная почта"} name={"email"}/>



                        <Btn text={"Зарегистрироваться"} type={"submit"}/>{/*главная кнопка отправки type submit*/}
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default Registration;