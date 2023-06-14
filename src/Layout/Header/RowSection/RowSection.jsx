import React, {useContext} from 'react';
import "./rowSection.sass"
import {CustomContext} from "../../../Context";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Registration from "../../../components/Registration/Registration";
import DemoForm from "../../../components/DemoRegistraion/DemoForm/DemoForm";



const RowSection = () => {

    const {close, setClose,setLogin,login,t,i18n,request} = useContext(CustomContext)
    const  changeLanguages = (language) => {
        i18n.changeLanguage(language)
    }



    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">29.07.23 - 01.08.23 Иссык-Кульская область Экспо, МВЦ. г.
                    Чолпон-Ата</h2>
                <div className="rowSection__wrapper">
                    <div className="rowSection__user">
                        <button onClick={() => setLogin(!login)} className={'rowSection__in'}>Регистрация</button>
                        <button onClick={() => setClose(true)} className={'rowSection__reg'}>Войти</button>
                    </div>
                    <div className="rowSection__change">
                        <button onClick={() => changeLanguages('ru')} className={`rowSection__lang ${i18n.language === "ru" ? 'rowSection__lang_active' : "" }`}>RU</button>
                        <button onClick={() => changeLanguages('en')} className={`rowSection__lang ${i18n.language === "en" ?  'rowSection__lang_active' : ""}`}>EN</button>
                    </div>
                </div>

            </div>
            {/*{*/}
            {/*    close ?  <RegisterForm /> : ''*/}
            {/*}*/}
            {
                close ?  <Registration /> : ''
            }
            {
                login ? <LoginForm/> : ''
            }
            {
                request ? <DemoForm/> : ""
            }

        </div>
    );
};


export default RowSection;