import React, {useState} from 'react';
import "./rowSection.sass"

import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import LoginForm from "../../../components/LoginForm/LoginForm";
const RowSection = () => {
    const [open,setOpen] = useState(false)
    const [openLogin,setOpenLogin] = useState(false)
    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">29.07.23 - 01.08.23 Иссык-Кульская область Экспо, МВЦ. г. Чолпон-Ата</h2>
                <div className="rowSection__wrapper">
                    <div className="rowSection__user">
                        <button className={'rowSection__in'}>Вход/</button>
                        <button onClick={() => setOpen(!open)} className={'rowSection__reg'}>Регистрация</button>
                    </div>
                    <div className="rowSection__change">
                        <button className={'rowSection__lang'}>RU</button>
                        <button className={'rowSection__lang'}>EN</button>
                    </div>
                </div>
            </div>
            {
                open && <RegisterForm open={open} setOpen={setOpen}/>

            }
            {
                openLogin && <LoginForm open={open} setOpenLogin={setOpenLogin}/>
            }
        </div>
    );
};

export default RowSection;