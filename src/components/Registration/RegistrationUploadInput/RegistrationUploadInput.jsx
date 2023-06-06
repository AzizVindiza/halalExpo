import React from 'react';

const RegistrationUploadInput = () => {
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span
                className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <input className="registration__input" type={type} {...register(name, {
                required: {
                    message: "Это поле обязательно к заполнению!",
                    value: true
                }
            })}/>
        </label>
    );
};

export default RegistrationUploadInput;