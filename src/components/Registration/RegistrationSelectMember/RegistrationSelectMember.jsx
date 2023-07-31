import React, {useContext} from 'react';
import {useFormContext} from "react-hook-form";
import {CustomContext} from "../../../Context";


const options = ["Информационные технологии и программное обеспечение","Машиностроение и автоматизация производства","Медицинская и фармацевтическая промышленность.","Транспорт и логистика.","Пищевая и сельскохозяйственная промышленность.","Энергетика и альтернативные источники энергии.","Финансовые и банковские продукты и услуги","Строительство и недвижимость","Образовательные продукты и услуги","Техника и спецтехника","Классическое и современное искусство","Национальные товары, рукоделие","сувенирная продукция","Экотовары","Инвестиционные проекты","Другое"]
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
                {
                    options.map((item,idx)=>{
                        return <option  className="registration__option" value={item}>{item}</option>
                    })
                }

            </select>
        </label>
    );
};

export default RegistrationSelectMember;