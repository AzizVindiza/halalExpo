import React from 'react';
import './ContactData.sass'
import {useForm} from "react-hook-form";

const ContactData = () => {
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }


    return (
        <div className="contactData">
            <h2 className="contactData__h2">
                Введите данные о контактном лице
            </h2>
            <label htmlFor="" className="contactData__label">
                <span>ФИО <span className="contactData__span">*</span></span>
                <input type="text"
                       {...register('qwe',{
                           required:{
                               message:"Поле Email , обязателен к заполнению",
                               value: true
                           },
                           minLength: {
                               message: "Минимальная длина 10 символа",
                               value: 0
                           },



                       })}

                />
                <span className='form__error'>{errors.qwe && errors.qwe.message}</span>
            </label>
            <label htmlFor="" className="contactData__label">
                <span>Должность <span className="contactData__span">*</span></span>
                <input type="text"
                       {...register('job',{
                           required:{
                               message:"Поле обязателено к заполнению",
                               value: true
                           },
                           minLength: {
                               message: "Минимальная длина 10 символа",
                               value: 0
                           },



                       })}

                />
                <span className='form__error'>{errors.job && errors.job.message}</span>
            </label>
            <label htmlFor="" className="contactData__label">
                <span>Телефон <span className="contactData__span">*</span></span>
                <input type="tel"
                       {...register('iphone',{
                           required:{
                               message:"Поле обязателено к заполнению",
                               value: true
                           },
                           minLength: {
                               message: "Минимальная длина 10 символа",
                               value: 0
                           },



                       })}
                />
                <span className='form__error'>{errors.iphone && errors.iphone.message}</span>

            </label>
            <label htmlFor="" className="contactData__label">
                <span>WhatsApp <span className="contactData__span">*</span></span>
                <input type="tel"
                       {...register('whatsapp',{
                           required:{
                               message:"Поле обязателено к заполнению",
                               value: true
                           },
                           minLength: {
                               message: "Минимальная длина 10 символа",
                               value: 0
                           },

                       })}

                />
                <span className='form__error'>{errors.whatsapp && errors.whatsapp.message}</span>
            </label>

        </div>
    );
};

export default ContactData;