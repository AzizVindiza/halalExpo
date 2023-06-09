import React from 'react';
import {useFormContext} from "react-hook-form";

const RegistrationInput = ({type, classname, name, title,notrequired}) => {
    const {
        register, formState: {
            errors
        }
    } = useFormContext()
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span
                className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <input className="registration__input" type={type} {...register(name, {
                required: {
                    message: "Это поле обязательно к заполнению!",
                    value: !notrequired
                }
            })}/>
        </label>
    );
};

export default RegistrationInput;