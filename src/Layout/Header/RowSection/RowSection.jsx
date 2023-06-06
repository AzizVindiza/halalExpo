import React, {useContext, useState} from 'react';
import "./rowSection.sass"
import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import {CustomContext} from "../../../Context";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Registration from "../../../components/Registration/Registration";



const RowSection = () => {
    const {close, setClose,setLogin,login} = useContext(CustomContext)
    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">29.07.23 - 01.08.23 Иссык-Кульская область Экспо, МВЦ. г.
                    Чолпон-Ата</h2>
                <div className="rowSection__wrapper">
                    <div className="rowSection__user">
                        <button onClick={() => setLogin(!login)} className={'rowSection__in'}>Вход/</button>
                        <button onClick={() => setClose(true)} className={'rowSection__reg'}>Регистрация</button>
                    </div>
                    <div className="rowSection__change">

                        <button className={'rowSection__lang'}>RU</button>
                        <button className={'rowSection__lang'}>EN</button>
                    </div>
                </div>

            </div>
            {
                close ?  <RegisterForm /> : ''
            }
            {/*{*/}
            {/*    close ?  <Registration /> : ''*/}
            {/*}*/}
            {
                login ? <LoginForm/> : ''
            }
        </div>
    );
};


export default RowSection;