import React, {useContext} from 'react';
import './demoForm.sass'
import top from './linet.png'
import bot from './lineb.png'
import Btn from "../../Btn/Btn";
import {CustomContext} from "../../../Context";
import {useForm} from "react-hook-form";
import {apiSlice, useAddPartnerMutation} from "../../../redux/ApiSlice";

const DemoForm = () => {
    const [addPartner] = useAddPartnerMutation();
    const handlePartner = (data) => {
        addPartner(data)
        console.log(data)
    }
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    })



    const {setRequest,demo,setDemo} = useContext(CustomContext)
    return (
        <section className={"demoForm"}>
             <div className="demoForm__wrapp">
                 <div className="demoForm__wrapper">
                     <form onSubmit={handleSubmit(handlePartner)} className="demoForm__form">
                         <h2>ПРЕДВАРИТЕЛЬНАЯ ЗАЯВКА</h2>
                         <img className={"demoForm__b1"} src={top} alt=""/>
                         <img className={"demoForm__b2"} src={bot} alt=""/>
                         <svg onClick={() => setRequest(false)} className={"demoForm__svg"} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M11.667 11.6666L28.3337 28.3333M11.667 28.3333L28.3337 11.6666" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>

                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Название организации <span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.name_organic && errors.name_organic.message}</span></h3>
                             <input type="text" className="demoForm__input" {...register('name_organic', {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Фамилия<span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.surname && errors.surname.message}</span></h3>
                             <input type="text" className="demoForm__input"{...register("surname", {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Имя<span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.name && errors.name.message}</span></h3>
                             <input type="text" className="demoForm__input"{...register("name", {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>E-mail<span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.email && errors.email.message}</span></h3>
                             <input type="email" className="demoForm__input"{...register("email", {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Телефон<span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.number && errors.number.message}</span></h3>
                             <input type="text" className="demoForm__input"{...register("number", {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Выберите направление<span className={"demoForm__span"}>*</span>
                                 <span
                                     className="registration__error"> {errors.user_status && errors.user_status.message}</span></h3>
                             <select className="demoForm__select" {...register("user_status", {
                                 required: {
                                     message: "Это поле обязательно к заполнению!",
                                     value: true
                                 }
                             })}>
                                 <option value="" className="demoForm__option">Выберите</option>
                                 <option value="Партнер" className="demoForm__option">Партнер</option>
                                 <option value="Участник" className="demoForm__option">Участник</option>

                             </select>
                         </label>
                         {/*<label htmlFor="" className="demoForm__check">*/}
                         {/*    <span*/}
                         {/*        className="registration__error"> {errors[name] && errors[name].message}</span>*/}
                         {/*    <input type="checkbox"{...register(name, {*/}
                         {/*        required: {*/}
                         {/*            message: "Это поле обязательно к заполнению!",*/}
                         {/*            value: true*/}
                         {/*        }*/}
                         {/*    })}/> <span>Я согласен на обработку моих персональных данных</span>*/}
                         {/*</label>*/}
                         <Btn type={"submit"} m={"demo"} text={"Оставить заявку"}/>





                     </form>

                 </div>
             </div>



        </section>
    );
};

export default DemoForm;