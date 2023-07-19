import React, {useContext} from 'react';
import {CustomContext} from "../../../../../Context";
import {useForm} from "react-hook-form";

const FormCheckZone = ({name,title,id}) => {
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
        <div className={'formZone__single'}>
            <input
                id={id}
                value={checkBoxZone}
                onChange={handleCheckZone}
                {...register(name)}
                className="formZone__input" type="checkbox"/>
            <label htmlFor={id} className="formZone__label formZone__label_second">

                <h2 className="formZone__h3 formZone__h3_second">{title}</h2>
            </label>

        </div>
    );
};

export default FormCheckZone;