import React, {useContext} from 'react';
import "./InvestorCheck.sass"
import {useFormContext} from "react-hook-form";
import {CustomContext} from "../../Context";
const InvestorCheck = ({title, name}) => {
    const {checkBox,setCheckBox} = useContext(CustomContext)
    const handleCheckBox = (event) => {
        const {value,checked} = event.target
        if (checked){
            setCheckBox(value)
        }
    }
    // Функция для получения checkbox
    const {
        register, formState: {
            errors
        }
    } = useFormContext()
    return (
        <label className="investorCheck__label">
            <input value={checkBox}  onChange={handleCheckBox} {...register(name)} className={'investorCheck__check'} type="checkbox"/>
            <span className="investorCheck__span">{title}</span>
        </label>
    );
};

export default InvestorCheck;