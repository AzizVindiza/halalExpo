import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
const RegistrationCountry = ({title, name}) => {
    const {
        register, formState: {
            errors
        },
        control
    } = useFormContext()
    return (
        <>
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <Controller
                control={control}
                rules={{
                    required : {
                        message : "Выберите страну",
                        value: true
                    }
                }}
                name={name}
                render={({ field }) => (
                    <ReactFlagsSelect
                        searchable={true}
                        placeholder={"Выберите Страну"}
                        selected={field.value}
                        onSelect={(code) => field.onChange(code)}
                    />
                )}
            />
        </>
    );
};

export default RegistrationCountry;