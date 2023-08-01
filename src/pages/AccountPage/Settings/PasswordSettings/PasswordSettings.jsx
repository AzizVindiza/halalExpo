import React, {useContext, useRef, useState} from 'react';
import "./passwordSettings.sass"
import {useNavigate} from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {CustomContext} from "../../../../Context";
import {useForm, useFormContext} from "react-hook-form";

const PasswordSettings = () => {
    const [open,setOpen] = useState(false)
    const {passwordShown,setPasswordShown, passwordShown2, setPasswordShown2,} = useContext(CustomContext)
    const {register, watch,formState : {errors}} = useForm({mode : "onBlur"})


    const password = useRef({})
    password.current = watch('password', "")


    const navigate = useNavigate()
    return (
        <section className={"passwordSettings"}>
            <div className="passwordSettings__container">
                <div className="passwordSettings__wrapper">
                    <div className="passwordSettings__box">
                        <svg onClick={()=>navigate(-1)} width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="11" fill="#D9E2FF"/>
                            <path d="M30 12C30.5523 12 31 11.5523 31 11C31 10.4477 30.5523 10 30 10V12ZM10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L16.6569 18.0711C17.0474 18.4616 17.6805 18.4616 18.0711 18.0711C18.4616 17.6805 18.4616 17.0474 18.0711 16.6569L12.4142 11L18.0711 5.34315C18.4616 4.95262 18.4616 4.31946 18.0711 3.92893C17.6805 3.53841 17.0474 3.53841 16.6569 3.92893L10.2929 10.2929ZM30 10L11 10V12L30 12V10Z" fill="#494949"/>
                        </svg>
                        <h2 className="passwordSettings__h2">
                            Пароль
                        </h2>
                    </div>

                    <form className="passwordSettings__form">
                        <div className="">
                            <label htmlFor="" className="passwordSettings__label">
                                <h3 className="passwordSettings__h3">
                                    Старый пароль
                                </h3>
                                <input type={open ? "text" : 'password'}
                                       {...register('password', {
                                    required: {
                                        message: "Это поле обязательно к заполнению!",
                                        value: true
                                    },
                                    pattern: {
                                        message : "Должен содержать комбинацию из цифр и латинских букв ^[a-zA-Z0-9]+$",
                                        value :  /^[a-zA-Z0-9]+$/,
                                    },
                                    minLength : {
                                        message : "Должен состоять не менее чем из 5 символов",
                                        value : 5,
                                    }
                                })}
                                />
                                <span  onClick={() => setOpen(!open)} className="passwordSettings__eye">
                            {
                                open ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }
                        </span>
                            </label>
                            <div className={'registration__errorPassword'}>
                                {errors.password && errors.password.message}
                            </div>
                            <span className="passwordSettings__span" >Забыли пароль?</span>
                        </div>
                        <label htmlFor="" className="passwordSettings__label">
                           <h3 className="passwordSettings__h3">
                               Новый пароль
                           </h3>
                            <input type={passwordShown ? "text" : "password"}
                                   {...register('passwords', {
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true
                                },
                                pattern: {
                                    message : "Должен содержать комбинацию из цифр и латинских букв ^[a-zA-Z0-9]+$",
                                    value :  /^[a-zA-Z0-9]+$/,
                                },
                                minLength : {
                                    message : "Должен состоять не менее чем из 5 символов",
                                    value : 5,
                                }
                            })}

                            />
                            <span  onClick={() => setPasswordShown(!passwordShown)} className="passwordSettings__eye2">
                            {
                                passwordShown ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }
                        </span>
                        </label>
                        <div className={'registration__errorPassword'}>
                            {errors.passwords && errors.passwords.message}
                        </div>
                        <label htmlFor="" className="passwordSettings__label">
                             <h3 className="passwordSettings__h3">
                                 Новый пароль ещё раз
                             </h3>
                            <input type={passwordShown2 ? "text" : "password"}

                                   {...register('confirm_password', {
                                required: {
                                    message: "Это поле обязательно к заполнению!",
                                    value: true,
                                },
                                validate : value =>
                                    value ===  password.current || "Несоответстие пароля"
                            })}

                            />
                            <span  onClick={() => setPasswordShown2(!passwordShown2)} className="passwordSettings__eye2">
                            {
                                passwordShown2 ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }
                        </span>
                        </label>
                        <button className="passwordSettings__btn">
                            Готово
                        </button>
                        <p className="passwordSettings__p">
                            Пароль должен состоять из восьми или более символов латинского алфавита, содержать заглавные и строчные буквы, цифры.
                        </p>

                    </form>




                </div>
            </div>

        </section>
    );
};

export default PasswordSettings;