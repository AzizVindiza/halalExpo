import React, {useContext} from 'react';
import {useFormContext} from "react-hook-form";
import {CustomContext} from "../../../Context";

const RegistrationSelectFashion = ({title,name}) => {
    const {register,formState:{
        errors
    }} = useFormContext()
    const  {fashion,setFashion} = useContext(CustomContext)
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <select className="registration__input" {...register(name,{
                required : {
                    message : "Выберите поле",
                    value: true
                }
            })} onChange={(event)=> setFashion(event.target.value)}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                <option className="registration__option" value="Модельер одежды">Модельер одежды</option>
                <option  className="registration__option" value="Дизайнер обуви">Дизайнер обуви</option>
                <option  className="registration__option" value="Дизайнер аксессуаров">Дизайнер аксессуаров</option>
                <option  className="registration__option" value="Основатель бренда">Основатель бренда</option>
                <option  className="registration__option" value="Крупный производитель">Крупный производитель</option>
            </select>
        </label>
    );
};

export default RegistrationSelectFashion;