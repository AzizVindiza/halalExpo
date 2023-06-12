import React, {useContext} from 'react';
import {useFormContext} from "react-hook-form";
import {CustomContext} from "../../../Context";

const RegistrationSelectMember = ({title,name}) => {
    const {register,formState:{
        errors
    }} = useFormContext()
    const {setMembers,members} = useContext(CustomContext)
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <select className="registration__input" {...register(name,{
                required : {
                    message : "Выберите поле",
                    value: true
                }
            })} onChange={(event)=> setMembers(event.target.value)}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                <option className="registration__option" value="Trade">Trade</option>
                <option  className="registration__option" value="Investment">Investment</option>
                <option  className="registration__option" value="Fashion">Fashion</option>
                <option  className="registration__option" value="Food">Food</option>
            </select>
        </label>
    );
};

export default RegistrationSelectMember;