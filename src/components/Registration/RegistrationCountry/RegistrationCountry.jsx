import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
const RegistrationCountry = () => {
    const {
        register, formState: {
            errors
        },
        control
    } = useFormContext()
    return (
        <Controller
            control={control}
            name="country"
            render={({ field }) => (
                <ReactFlagsSelect
                    selected={field.value}
                    onSelect={(code) => field.onChange(code)}
                />
            )}
        />
    );
};

export default RegistrationCountry;