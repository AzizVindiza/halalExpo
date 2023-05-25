import React, {useContext} from 'react';
import './EmailForm.sass'
import {CustomContext} from "../../../Context";
import { AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";

const EmailForm = () => {
    const {passwordShown, setPasswordShown,passwordShown2,setPasswordShown2} = useContext(CustomContext)


    return (
        <section className="emailForm">
            <label htmlFor="" className="emailForm__label">
                <span>Электронная почта<span  className="emailForm__span">*</span></span>
                <input type="text"/>
            </label>

            <label  htmlFor="" className="emailForm__label">
              <span>  Придумайте пароль<span  className="emailForm__span">*</span></span>
                <input type={`${passwordShown ? 'text' : 'password'}`}/>
                <span  onClick={() => setPasswordShown(!passwordShown)} className="emailForm__eye">
                            {
                                passwordShown ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }

                        </span>
            </label>

            <label  htmlFor="" className="emailForm__label">
                <span>Подвердите пароль<span  className="emailForm__span">*</span></span>
                <input type={`${passwordShown2 ? 'text' : 'password'}`}/>
                <span  onClick={() => setPasswordShown2(!passwordShown2)} className="emailForm__eye">
                            {
                                passwordShown2 ?   <AiOutlineEye/> :  <AiOutlineEyeInvisible/>
                            }

                        </span>
            </label>




        </section>
    );
};

export default EmailForm;