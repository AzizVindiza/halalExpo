import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import {useFormContext} from "react-hook-form";

const RegistrationSelectIndustry = ({title,name}) => {
    const {register,formState : {
        errors
    }} = useFormContext()
    const {industry,setIndustry} = useContext(CustomContext)

    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span> <span className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <select className="registration__input" {...register(name,{
                required : {
                    message : "Выберите поле",
                    value: true
                }
            })} onChange={(event)=> setIndustry(event.target.value)}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                <option className="registration__option" value="Производство">Производство</option>
                <option  className="registration__option" value="Производство + сельхоз">Производство + сельхоз</option>
                <option  className="registration__option" value="Строительство">Строительство</option>
                <option  className="registration__option" value="Строительство + техника">Строительство + техника</option>
                <option  className="registration__option" value="Техника"> Техника</option>
                <option  className="registration__option" value="Образование">Образование</option>
                <option  className="registration__option" value="Медицина"> Медицина</option>
                <option  className="registration__option" value="Эко">Эко</option>
                <option  className="registration__option" value="Нац">Нац</option>
                <option  className="registration__option" value="Туризм">Туризм</option>
                <option  className="registration__option" value="Текстиль, обувь и аксессуары">  11. Текстиль, обувь и аксессуары</option>
                <option  className="registration__option" value="Искусство">Искусство</option>
                <option  className="registration__option" value="IT">  IT</option>
            </select>
        </label>
    );
};

export default RegistrationSelectIndustry;