import React, {useContext, useRef} from 'react';
import {CustomContext} from "../../../Context";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useForm, useFormContext} from "react-hook-form";

const RegistrationPassword = ({title , name} ) => {
    const {passwordShown,setPasswordShown, passwordShown2, setPasswordShown2,} = useContext(CustomContext)
    const {register, watch, formState: {
        errors,
    }} = useFormContext()
    const password = useRef({})
    password.current = watch('password_user', "")
    return (
        <>
            <label className="registration__label">
                <h3 className="registration__label-title">Придумайте пароль<span className="registration__star">*</span> <span
                    className="registration__error"> {errors.password_user && errors.password_user.message}</span></h3>
                <input className="registration__input" ref={password} type={passwordShown ? "text" : 'password'} {...register('password_user', {
                    required: {
                        message: "Это поле обязательно к заполнению!",
                        value: true
                    }
                })}/>
                <span  onClick={() => setPasswordShown(!passwordShown)} className="registration__eye">
                            {
                                passwordShown ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }
                        </span>
            </label>
            <label className="registration__label">
                <h3 className="registration__label-title">Подтвердите пароль<span className="registration__star">*</span> <span
                    className="registration__error"> {errors.confirm_password && errors.confirm_password.message}</span></h3>
                <input className="registration__input" type={passwordShown2 ? 'text' : "password"} {...register('confirm_password', {
                    required: {
                        message: "Это поле обязательно к заполнению!",
                        value: true
                    },
                    validate : value =>
                        value ===  password.current || "Несоответстие пароля"
                })}/>
                <span  onClick={() => setPasswordShown2(!passwordShown2)} className="registration__eye">
                            {
                                passwordShown2 ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }
                        </span>
            </label>

        </>



    );
};

export default RegistrationPassword;