import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

import RegistrationSelectMember from "../RegistrationSelectMember/RegistrationSelectMember";
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import RegistrationUploadInput from "../RegistrationUploadInput/RegistrationUploadInput";
import RegistrationPhoneNumber from "../RegistrationPhoneNumber/RegistrationPhoneNumber";
import CheckBox from "../CheckBox/CheckBox";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import RegistrationInputTextarea from "../RegistrationInputTextarea/RegistrationInputTextarea";
import ContactFace from "../../ParticipantForm/ContactFace/ContactFace";
import RegistrationCountry from "../RegistrationCountry/RegistrationCountry";
import CheckBoxParticipant from "../CheckBoxParticipant/CheckBoxParticipant";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";
import Btn from "../../Btn/Btn";

const RegistrationParticipant = () => {
    const methods = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        const id = toast.loading("Please wait...")
        console.log(data)
        try {
            data = {
                ...data,
                user_type: 5,
                charter_company: data.charter_company[0],
                image_logo: data.image_logo[0],
            }
            console.log(data)

            axios.post(`${process.env.REACT_APP_REST}/user/user-participant/`, data, {
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
                    render: err.response.data.email ? err.response.data.email[0] : err.response.data.workEmail ? err.response.data.workEmail[0] : 'Ошибка в сервере!',
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
    const {setClose, role, members, fileCompany, setFileCompany} = useContext(CustomContext)
    const handleFileCompanyChange = (e) => {
        setFileCompany(e.target.files[0])
    }
    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <h3 className="registration__h3">Данные о компании</h3>
                <RegistrationInput type={"text"} title={"Название компании"} name={"company_one"}/>
                <RegistrationInput type={"text"} title={"Юридическое название компании"} name={"company_two"}/>
                <RegistrationInput type={"number"} title={"Количество сотрудников"} name={"personnel"}/>
                <RegistrationSelectMember
                    title={'Отрасль (Выберите одну из представленных “Строительство и недвижимость”)'}
                    name={'industry'}/>
                {
                    members === 'Другое' ?
                        <>
                            <RegistrationInput type={"text"}
                                               title={"Другое(Введите свою отрасль если не нашли среди предложенных)"}
                                               name={"industry_name"}/>
                        </>
                        : ""
                }

                <RegistrationInput type={"text"}
                                   title={"Направление (Напишите свой вид деятельности “Производство кирпичей”)"}
                                   name={"direction"}/>
                <RegistrationInputTextarea
                    name={"description"}
                    title={"Опишите свою деятельность (товар или услугу)"}
                    p={"данная информация будет указана в профиле компании важно для участников выставки более подробно описать*"}
                    placeholder={"Пример: Мы предоставляем различные способы оплаты для наших товаров, чтобы обеспечить удобство и гибкость для наших клиентов. Вы можете выбрать один из следующих способов оплаты при приобретении наших товаров:"}
                />
                <div className="registration__column-wrapper">
                    <div className="registration__column">
                        <RegistrationCountry title={"Страна:"} name={"country"}/>
                        <RegistrationInput type={"text"} title={"Город:"} name={"city"}/>
                        <RegistrationInput type={"text"} title={"Юридический адрес"} name={"address_one"}/>
                        <RegistrationInput type={"text"} title={"Фактический адрес"} name={"address_two"}/>
                    </div>
                    <div className="registration__column">
                        <RegistrationInput type={"email"} title={"Адрес электронной почты компании"}
                                           name={"email_company"}
                                           notrequired={true}/>
                        <RegistrationPhoneNumber title={'Контактный телефон компании'} name={'phone'}/>
                        <RegistrationInput type={"text"} title={"Сайт"} name={"site_company"} notrequired={true}/>
                        <RegistrationInput type={"text"} title={"Facebook"} name={"facebook"} notrequired={true}/>
                        <RegistrationInput type={"text"} title={"Инстаграм"} name={"instagram"} notrequired={true}/>
                    </div>
                </div>
                <div className="registration__column-wrapper">
                    <div className="registration__column">
                        <h3 className="registration__h3">Свидетельство о юридической регистрации</h3>
                        <RegistrationInput type={'text'} name={'iin_inn'} title={'ИИН/ИНН(Серия патента компании)'}/>
                        {/*<RegistrationInput type={'text'} name={'ogrn'} title={'ОГРН/Номер патента'}/>*/}
                        <RegistrationInput type={'text'} name={'okpo'} title={'ОКПО'}/>
                        <label className="registration__label">
                            <h3 className="registration__label-title">Загрузите устав компании (документ/pdf)</h3>
                            <input className="registration__input" type="file" {...methods.register("charter_company",)}
                                   onChange={handleFileCompanyChange}/>
                            <span className="unploud">
                <h2 className="unploud__title">{
                    fileCompany ? fileCompany.name : "Загрузить"
                }</h2>
                <span className="unploud__svg">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M6.80566 1C6.80566 0.585786 6.46988 0.25 6.05566 0.25C5.64145 0.25 5.30566 0.585786 5.30566 1H6.80566ZM5.52533 11.6414C5.81823 11.9343 6.2931 11.9343 6.58599 11.6414L11.359 6.86847C11.6519 6.57558 11.6519 6.1007 11.359 5.80781C11.0661 5.51492 10.5912 5.51492 10.2983 5.80781L6.05566 10.0505L1.81302 5.80781C1.52013 5.51492 1.04526 5.51492 0.752363 5.80781C0.45947 6.1007 0.45947 6.57558 0.752363 6.86847L5.52533 11.6414ZM5.30566 1L5.30566 11.1111H6.80566L6.80566 1H5.30566Z"
                        fill="#3378C9"/><path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5"
                                              strokeLinecap="square"/>
                    </svg>
                </span>
            </span>
                        </label>
                    </div>
                    <div className="registration__column">
                        <h3 className="registration__h3">Реквизиты <br/> банковского счета</h3>
                        <RegistrationInput type={'text'} name={'bank'} title={'Наименование банка'}/>
                        <RegistrationInput type={'text'} name={'p_c'} title={'Р/С'}/>
                        <RegistrationInput type={'text'} name={'bik'} title={'БИК'}/>
                        <RegistrationUploadInput name={"image_logo"} title={"Логотип компании в  png или jpg"}/>
                    </div>
                </div>
                <div className="registration__column-wrapper">
                    <div className="registration__column">
                        <h3 className="registration__h3">Данные о руководителе</h3>
                        <RegistrationInput type={'text'} name={'name_manager'} title={'ФИО'}/>
                        <RegistrationInput type={'date'} name={'date_of_birth'} title={'Дата рождения'}/>
                        {/*<RegistrationInput type={'text'} name={'inn_manager'} title={'ИНН/ИИН руководителя'}/>*/}
                        <RegistrationInput type={'text'} name={'position'} title={'Должность'}/>
                        <RegistrationInput type={'text'} name={'effective'} title={'Действующий на основании'}/>
                    </div>
                    <div className="registration__column">
                        <h3 className="registration__h3">Контактное лицо</h3>
                        <ContactFace/>
                        <RegistrationInput type={"email"}
                                           title={"Адрес электронной почты (данная почта указывается как логин для входа)"}
                                           name={"email"}/>
                        <RegistrationPassword/>


                    </div>
                </div>
                <CheckBox/>
                <CheckBoxParticipant/>
                <Btn text={"Зарегистрироваться"} type={"submit"}/>
            </form>
        </FormProvider>
    );
};

export default RegistrationParticipant;