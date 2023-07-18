import React, {useContext} from 'react';
import {CustomContext} from "../../../../../Context";
import {useForm} from "react-hook-form";

const FormCheckZone = ({name,title}) => {
    const {checkBoxZone,setCheckBoxZone} = useContext(CustomContext)
    const {
        register, formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const handleCheckZone = (event) => {
        const {value,checked} = event.target
        if (checked){
            setCheckBoxZone(value)
        }
    }
    return (
        <div>
            <label
                htmlFor="" className="formZone__label formZone__label_second">
                <input
                    value={checkBoxZone}
                    onChange={handleCheckZone}
                    {...register(name)}
                    className="formZone__input" type="checkbox"/>
                <h2 className="formZone__h3 formZone__h3_second">{title}</h2>
            </label>

        </div>
    );
};

export default FormCheckZone;