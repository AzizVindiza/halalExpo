import React from 'react';
import './BrandForm.sass'

import SocialSection from "../../SocialSection/SocialSection";
import ContactFace from "../ContactFace/ContactFace";
import {useForm} from "react-hook-form";


const
    BrandForm = () => {
        const {
            register,
            formState: {
                errors

            },
            handleSubmit,

        } = useForm({mode:"onBlur"});
    return (
        <section className="brandForm">
            <div className="brandForm__popup">
                <div className="brandForm__wrapper">
                    <div className="brandForm__form">
                        <label htmlFor="" className="brandForm__label">
                            <span>Наимнование бренда<span  className="brandForm__span">*</span></span>
                            <input
                                {...register("nameBrand",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>



                        <div className="brandForm__logo">
                            <span className="brandForm__text">Загрузите логотип компании в  png, jpg, pdf<span  className="brandForm__span">*</span></span>
                            <div className="brandForm__download">
                                <h3 className="brandForm__h3">Загрузить</h3>
                                <div className="brandForm__line">
                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                        <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="" className="brandForm__label">
                            <span>Полное юридическое наименование организации<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("nameOrganisation",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Юридический адрес<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("developmentAddress",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span> ИНН<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("inn",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Р/С<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("ps",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>БИК<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("bic",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>ОКПО<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("okpo",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>

                        <div className="brandForm__logo">
                            <span className="brandForm__text">Загрузите свидетельство регистрации<span  className="brandForm__span">*</span></span>
                            <div className="brandForm__download">
                                <h3 className="brandForm__h3">Загрузить</h3>
                                <div className="brandForm__line">
                                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.80554 1C6.80554 0.585786 6.46976 0.25 6.05554 0.25C5.64133 0.25 5.30554 0.585786 5.30554 1H6.80554ZM5.52521 11.6414C5.81811 11.9343 6.29298 11.9343 6.58587 11.6414L11.3588 6.86847C11.6517 6.57558 11.6517 6.1007 11.3588 5.80781C11.0659 5.51492 10.5911 5.51492 10.2982 5.80781L6.05554 10.0505L1.8129 5.80781C1.52001 5.51492 1.04513 5.51492 0.752241 5.80781C0.459348 6.1007 0.459348 6.57558 0.752241 6.86847L5.52521 11.6414ZM5.30554 1L5.30554 11.1111H6.80554L6.80554 1H5.30554Z" fill="#3378C9"/>
                                        <path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                                    </svg>
                                </div>
                            </div>
                        </div>


                        <label htmlFor="" className="brandForm__label">
                            <span> ФИО руководителя<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("bos",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Должность<span  className="brandForm__span">*</span></span>
                            <input
                                {...register("profession",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Деятельность компании<span  className="brandForm__span">*</span></span>
                            <input
                                {...register("company",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Опишите товары или услуги компании<span  className="brandForm__span">*</span></span>

                            <textarea
                                {...register("goods",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                className='brandForm__label-area' name="" id="" cols="10" rows="4"></textarea>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>  Веб-сайт<span  className="brandForm__span">*</span></span>
                            <input
                                {...register("lastName",{
                                    required:{
                                        message:"Заполните web",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Рабочий телефон<span  className="brandForm__span">*</span></span>
                            <input
                                {...register("workNumber",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="tel"/>
                        </label>
                        <label htmlFor="" className="brandForm__label">
                            <span>Email<span  className="brandForm__span">*</span></span>

                            <input
                                {...register("emailThird",{
                                    required:{
                                        message:"Заполните email",
                                        value:true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна',
                                        value: 15
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна',
                                        value: 3
                                    }

                                })}
                                type="text"/>
                        </label>
                        <SocialSection/>
                        <ContactFace/>








                    </div>

                </div>
            </div>

        </section>
    );
};

export default BrandForm;