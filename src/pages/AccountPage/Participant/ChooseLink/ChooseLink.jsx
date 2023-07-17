import React from 'react';
import img from "./img.svg"
import "./chooselink.sass"
import {Link} from "react-router-dom";
const ChooseLink = () => {
    return (
        <div className={'chooseLink'}>
           <div className="chooseLink__img">
               <img src={img} className={'chooseLink__pic'} alt="basket"/>
           </div>
            <p className="chooseLink__p">Здесь после оплаты появится информация о вашем стенде. Для выбора пакета, пожалуйста, перейдите по <Link className={'chooseLink__link'} to={'/account/stand'}>ссылке</Link></p>
        </div>
    );
};

export default ChooseLink;