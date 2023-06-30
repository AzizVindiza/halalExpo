import React, {useRef, useState} from 'react';
import {useFormContext} from "react-hook-form";
import "./unploud.sass"
import {useAddImageMutation} from "../../../redux/ApiSlice";
const RegistrationUploadInput = ({name, title}) => {

    const [file, setFile] = useState(null);


    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const {
        register, formState: {
            errors
        }
    } = useFormContext()
    return (
        <label className="registration__label">
            <h3 className="registration__label-title">{title}<span
                className="registration__error"> {errors[name] && errors[name].message}</span></h3>
            <input   className="registration__input" type="file" {...register(name, {
                required: {
                    message: "Это поле обязательно к заполнению!",
                    value: true
                }
            })} onChange={handleFileChange} />
            <span className="unploud">
                <h2  className="unploud__title">{
                    file ? file.name : "Загрузить"
                }</h2>
                <span className="unploud__svg">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M6.80566 1C6.80566 0.585786 6.46988 0.25 6.05566 0.25C5.64145 0.25 5.30566 0.585786 5.30566 1H6.80566ZM5.52533 11.6414C5.81823 11.9343 6.2931 11.9343 6.58599 11.6414L11.359 6.86847C11.6519 6.57558 11.6519 6.1007 11.359 5.80781C11.0661 5.51492 10.5912 5.51492 10.2983 5.80781L6.05566 10.0505L1.81302 5.80781C1.52013 5.51492 1.04526 5.51492 0.752363 5.80781C0.45947 6.1007 0.45947 6.57558 0.752363 6.86847L5.52533 11.6414ZM5.30566 1L5.30566 11.1111H6.80566L6.80566 1H5.30566Z"
                        fill="#3378C9"/><path d="M1 14H11.1111" stroke="#3378C9" strokeWidth="1.5" strokeLinecap="square"/>
                    </svg>
                </span>
            </span>
        </label>
    );
};

export default RegistrationUploadInput;