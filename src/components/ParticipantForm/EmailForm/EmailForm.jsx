import React, {useContext} from 'react';
import './EmailForm.sass'
import {CustomContext} from "../../../Context";
import { AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import {useForm, useFormContext} from "react-hook-form";

const EmailForm = () => {

    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm();

    const {passwordShown, setPasswordShown,passwordShown2,setPasswordShown2} = useContext(CustomContext)


    return (
        
        <section className="emailForm">
            <label htmlFor="" className="emailForm__label">
                <span>Электронная почта<span  className="emailForm__span">*</span></span>
                <input type="email" {...register('email',{
                    required:{
                        message:"Поле Email , обязателен к заполнению",
                        value: true
                    },
                    minLength: {
                        message: "Минимальная длина 10 символа",
                        value: 0
                    },
                    // pattern:{
                    //     message:"Напишите правильно свой email",
                    //     value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                    // }


                })}/>
                <span className='form__error'>{errors.email && errors.email.message}</span>
            </label>

            <label  htmlFor="" className="emailForm__label">
              <span>  Придумайте пароль<span  className="emailForm__span">*</span></span>
                <input type={`${passwordShown ? 'text' : 'password'}`}
                       {...register('password',{
                           required:{
                               message:"Пароль обязателен к заполнению",
                               value:true

                           },
                           minLength: {
                               message: "Минимальная длина 8 символа",
                               value: 0
                           },
                           // pattern:{
                           //     value: /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                           //     message:'Пароль должен содержать не менее 8 символов'
                           // }
                       })}

                />
                <span  onClick={() => setPasswordShown(!passwordShown)} className="emailForm__eye">
                            {
                                passwordShown ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }

                        </span>
                <span className='form__error'>{errors.password && errors.password.message}</span>
            </label>

            <label  htmlFor="" className="emailForm__label">
                <span>Подвердите пароль<span  className="emailForm__span">*</span></span>
                <input type={`${passwordShown2 ? 'text' : 'password'}`}
                       {...register('password',{
                           required:{
                               message:"Пароль обязателен к заполнению",
                               value:true

                           },
                           minLength: {
                               message: "Минимальная длина 8 символа",
                               value: 0
                           },
                           // pattern:{
                           //     value: /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                           //     message:'Пароль должен содержать не менее 8 символов'
                           // }
                       })}


                />
                <span  onClick={() => setPasswordShown2(!passwordShown2)} className="emailForm__eye">
                            {
                                passwordShown2 ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }

                        </span>
                <span className='form__error'>{errors.password && errors.password.message}</span>
            </label>




        </section>
    );
};

export default EmailForm;