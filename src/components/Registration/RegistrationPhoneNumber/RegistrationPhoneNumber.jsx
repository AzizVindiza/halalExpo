import React from 'react';
import ReactPhoneInput from "react-phone-input-2";
import {Controller, useFormContext} from "react-hook-form";
import "react-phone-input-2/lib/bootstrap.css";
import "./controller.sass"

const RegistrationPhoneNumber = ({name}) => {
    const {control,formState :{
        errors
    }}= useFormContext()
    return (
        <div className={'controller'}>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: {
                        message: "Это поле обязательно к заполнению!",
                        value: true
                    }
                }}
                render={({ field: { ref, ...field } }) => (
                    <ReactPhoneInput
                        {...field}
                        inputExtraProps={{
                            ref,
                            required: true,
                            autoFocus: true
                        }}
                        enableSearch={true}
                        country={"kg"}
                        countryCodeEditable={true}
                        specialLabel={"Player Mobile Number"}
                    />
                )}
            />
            <span className="registration__error">{errors[name] && errors[name].message}</span>
        </div>

    );
};

export default RegistrationPhoneNumber;