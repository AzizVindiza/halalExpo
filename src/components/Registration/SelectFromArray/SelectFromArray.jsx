import React, {useContext} from 'react';
import {useFormContext} from "react-hook-form";

const SelectFromArray = ({name, title,array}) => {
    const {register,formState:{
        errors
    }} = useFormContext()
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <select className="registration__input" {...register(name,{
                required : {
                    message : "Выберите поле",
                    value: true
                }
            })}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                {array.map((el,idx)=>{
                    return <option key={idx} className="registration__option" value={el}>{el}</option>
                })}

            </select>
        </label>
    );
};

export default SelectFromArray;