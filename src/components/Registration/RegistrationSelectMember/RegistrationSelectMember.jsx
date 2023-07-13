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
                <option className="registration__option" value="Информационные технологии и программное обеспечение.">Информационные технологии и программное обеспечение.</option>
                <option  className="registration__option" value="Машиностроение и автоматизация производства.">Машиностроение и автоматизация производства.</option>
                <option  className="registration__option" value="Медицинская и фармацевтическая промышленность.">Медицинская и фармацевтическая промышленность.</option>
                <option  className="registration__option" value="Транспорт и логистика.">Транспорт и логистика.</option>
                <option  className="registration__option" value="Пищевая и сельскохозяйственная промышленность.">Пищевая и сельскохозяйственная промышленность.</option>
                <option  className="registration__option" value="Энергетика и альтернативные источники энергии.">Энергетика и альтернативные источники энергии.</option>
                <option  className="registration__option" value="Финансовые и банковские продукты и услуги">Финансовые и банковские продукты и услуги</option>
                <option  className="registration__option" value="Строительство и недвижимость">Строительство и недвижимость</option>
                <option  className="registration__option" value="Образовательные продукты и услуги">Образовательные продукты и услуги</option>
                <option  className="registration__option" value="Техника и спецтехника">Техника и спецтехника</option>
                <option  className="registration__option" value="Классическое и современное искусство">Классическое и современное искусство</option>
                <option  className="registration__option" value="Национальные товары, рукоделие, сувенирная продукция">Национальные товары, рукоделие, сувенирная продукция</option>
                <option  className="registration__option" value="Экотовары">Экотовары</option>
                <option  className="registration__option" value="Инвестиционные проекты">Инвестиционные проекты</option>
                <option  className="registration__option" value="Другое">Другое</option>
            </select>
        </label>
    );
};

export default RegistrationSelectMember;