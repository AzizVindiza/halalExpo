import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import "./LoginForm.sass"
import Btn from "../Btn/Btn";
import {CustomContext} from "../../Context";
import { AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";


const LoginForm = () => {
    const {setLogin,passwordShown, setPasswordShown} = useContext(CustomContext)
    //closeLogin and toggle password




    const {
        register,
        formState: {
            errors

    },
        handleSubmit,

    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="login">
            <div className="login__wrapper">
                <div onClick={() => setLogin(false)} className="login__close">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.16699 8.16675L19.8337 19.8334M8.16699 19.8334L19.8337 8.16675" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>

                <h2 className="login__h2">Вход</h2>
                <form className={'login__form'} onSubmit={handleSubmit(onSubmit)}>
                    <label className="login__label">
                        <span>Электронная почта   <span className={'login__star'}>*</span></span>

                        <input type={''}
                               {...register("firstName", {
                                   register: "Поле обязательно у заполнению",
                                   minLength: {
                                       value: 5,
                                       message: 'минимум 5 символов'
                                   }
                               })}
                        />

                    </label>
                    <label className="login__password">

                       <span>Ведите пороль *</span>
                        <input type={`${passwordShown ? "text" : "password"}`}
                               {...register("password",{
                                   required:"obez",
                                   minLength:{
                                       value:5,
                                       message: 'min 4 sim'
                                   }
                               } )}/>
                        <span  onClick={() => setPasswordShown(!passwordShown)} className="login__eye">
                            {
                                passwordShown ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }

                        </span>
                    </label>

                    <li className={'login__li'}>Забыли пароль?</li>

                    <Btn text={' Войти'} m={"login"}/>
                </form>
            </div>

        </div>
    );
};

export default LoginForm;