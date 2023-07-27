import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

const RegistrationSelect = ({type, classname, name, title}) => {
    const {setRole} = useContext(CustomContext)
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span className="registration__star">*</span></h3>
            <select className="registration__input" required={true} onChange={(event)=> setRole(event.target.value)}>
                <option hidden={true}  className="registration__option" value="">Выберите</option>
                <option className="registration__option" value="СМИ">СМИ</option>
                <option  className="registration__option" value="Посетитель">Посетитель</option>
                <option  className="registration__option" value="Участник">Участник</option>
                <option  className="registration__option" value="Эксперта">Эксперта</option>
                <option  className="registration__option" value="Представитель государственных органов">Представитель государственных органов</option>
            </select>
        </label>
    );
};

export default RegistrationSelect;