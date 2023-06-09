import React, {useContext} from 'react';
import './demoForm.sass'
import top from './linet.png'
import bot from './lineb.png'
import Btn from "../../Btn/Btn";
import {CustomContext} from "../../../Context";

const DemoForm = () => {
    const {request,setRequest} = useContext(CustomContext)
    return (
        <section className={"demoForm"}>
             <div className="demoForm__wrapp">
                 <div className="demoForm__wrapper">
                     <form className="demoForm__form">
                         <h2>ПРЕДВАРИТЕЛЬНАЯ ЗАЯВКА</h2>
                         <img className={"demoForm__b1"} src={top} alt=""/>
                         <img className={"demoForm__b2"} src={bot} alt=""/>
                         <svg onClick={() => setRequest(false)} className={"demoForm__svg"} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M11.667 11.6666L28.3337 28.3333M11.667 28.3333L28.3337 11.6666" stroke="black" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>

                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Название организации <span className={"demoForm__span"}>*</span> </h3>
                             <input type="text" className="demoForm__input"/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Фамилия<span className={"demoForm__span"}>*</span> </h3>
                             <input type="text" className="demoForm__input"/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Имя<span className={"demoForm__span"}>*</span> </h3>
                             <input type="text" className="demoForm__input"/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>E-mail<span className={"demoForm__span"}>*</span> </h3>
                             <input type="text" className="demoForm__input"/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Телефон<span className={"demoForm__span"}>*</span> </h3>
                             <input type="text" className="demoForm__input"/>
                         </label>
                         <label className="demoForm__label">
                             <h3 className={"demoForm__h3"}>Выберите направление<span className={"demoForm__span"}>*</span> </h3>
                             <select className="demoForm__select">
                                 <option value="" className="demoForm__option">1</option>
                                 <option value="" className="demoForm__option">2</option>
                                 <option value="" className="demoForm__option">3</option>
                                 <option value="" className="demoForm__option">4</option>
                             </select>
                         </label>
                         <label htmlFor="" className="demoForm__check">
                             <input type="checkbox"/> <span>Я согласен на обработку моих персональных данных</span>
                         </label>
                         <Btn m={"demo"} text={"Оставить заявку"}/>




                     </form>

                 </div>
             </div>



        </section>
    );
};

export default DemoForm;