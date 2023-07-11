import React from 'react';
import {useFormContext} from "react-hook-form";

const RegistrationInputTextarea = ({title,name,p,placeholder}) => {
    const {
        register, formState: {
            errors
        }
    } = useFormContext()
    return (

            <label className="registration__label">
                <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span
                    className="registration__error"> {errors[name] && errors[name].message}</span></h3>
                <p className="registration__label-p">{p || ""}</p>
                <textarea placeholder={placeholder || ""} className="registration__textarea" {...register(name, {
                    required: {
                        message: "Это поле обязательно к заполнению!",
                        value: true
                    }
                })}/>
            </label>


    );
};

export default RegistrationInputTextarea;