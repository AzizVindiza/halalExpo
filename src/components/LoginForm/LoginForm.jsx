import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import "./LoginForm.sass"
import Btn from "../Btn/Btn";
import {CustomContext} from "../../Context";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import {useLoginMutation} from "../../redux/ApiSlice";
import {fillRegister} from "../../redux/reducers/userSlice";
import {toast} from "react-toastify";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {use} from "i18next";


const LoginForm = () => {
    const {setLogin, passwordShown, setPasswordShown} = useContext(CustomContext)
    //closeLogin and toggle password
    const {user} = useSelector((store) => store.user)

    const navigate = useNavigate() // send to accountPage
    const [fillLogin, {
        data: loginData,
        isSuccess: isLoginSuccess,
        isError: isLoginError,
        error: loginError
    }] = useLoginMutation()
    const {
        register,
        formState: {
            errors

        },
        handleSubmit,

    } = useForm();

        const dispatch = useDispatch()

    const onSubmit = (data) => {
        try {
            fillLogin(data)
                .unwrap()
                .then((payload) => {
                        dispatch(fillRegister(payload))
                    navigate('account/profile')
                    toast.success('Вы вошли в личный кабинет', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    }
                )
                .catch(() => {
                    console.log(data)
                    toast.error('Вы ввели некорректные данные', {
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
            setLogin(false)


        } catch (error) {
            toast.error('Вы ввели некорректные данные', {
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



    return (
        <div className="login">
            <div className="login__wrapper">
                <div onClick={() => setLogin(false)} className="login__close">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.16699 8.16675L19.8337 19.8334M8.16699 19.8334L19.8337 8.16675" stroke="black"
                              strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className="login__h2">Вход <span
                    className="registration__error"> {errors.email && errors.email.message}</span></h2>
                <form className={'login__form'} onSubmit={handleSubmit(onSubmit)}>
                    <label className="login__label">
                        <span>Электронная почта   <span className={'login__star'}>*</span></span>

                        <input type={'email'}
                               {...register("email", {
                                   required: {
                                       message: "Введите почту",
                                       value: true
                                   }
                               })}
                        />

                    </label>
                    <label className="login__password">

                        <span>Ведите пороль <span
                            className="registration__error"> {errors.password && errors.password.message}</span></span>
                        <input type={`${passwordShown ? "text" : "password"}`}
                               {...register("password", {
                                   required: {
                                       message: "Введите пароль",
                                       value: true
                                   }
                               })}/>
                        <span onClick={() => setPasswordShown(!passwordShown)} className="login__eye">
                            {
                                passwordShown ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>
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