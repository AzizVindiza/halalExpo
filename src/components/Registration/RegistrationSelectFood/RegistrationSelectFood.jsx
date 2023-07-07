import React, {useContext} from 'react';
import {useFormContext} from "react-hook-form";
import {CustomContext} from "../../../Context";

const RegistrationSelectFood = ({title,name}) => {
    const {register,formState:{
        errors
    }} = useFormContext()
    const {food,setFood} = useContext(CustomContext)
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <select className="registration__input" {...register(name,{
                required : {
                    message : "Выберите поле",
                    value: true
                }
            })}  onChange={(event)=> setFood(event.target.value)}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                <option className="registration__option" value="Кафе">Кафе</option>
                <option  className="registration__option" value="Ресторан">Ресторан</option>
                <option  className="registration__option" value="Fast food">Fast food</option>
                <option  className="registration__option" value="Чайхана">Чайхана</option>
                <option  className="registration__option" value="Кофейня">Кофейня</option>
                <option  className="registration__option" value="Кейтеринг">Кейтеринг</option>
                <option  className="registration__option" value="Take and GO (На вынос)">Take and GO (На вынос)</option>
            </select>
        </label>
    );
};

export default RegistrationSelectFood;