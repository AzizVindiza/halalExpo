import React, {useContext, useEffect, useState} from 'react';
import "./rowSection.sass"
import {CustomContext} from "../../../Context";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Registration from "../../../components/Registration/Registration";
import DemoForm from "../../../components/DemoRegistraion/DemoForm/DemoForm";



const RowSection = () => {
   const [language,setLanguage] = useState('ru')
    const {close, setClose,setLogin,login,t,i18n,request} = useContext(CustomContext)
    useEffect(() => {
        i18n.changeLanguage(language)
    },[])
    useEffect(() => {
            i18n.changeLanguage(language)
    },[language])



    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">{t("header.text")}</h2>
                <div className="rowSection__wrapper">
                    <div className="rowSection__user">
                        <button onClick={() => setLogin(!login)} className={'rowSection__in'}>{t("header.signUp")}</button>
                        <button onClick={() => setClose(true)} className={'rowSection__reg'}>{t("header.login")}</button>
                    </div>
                    <div className="rowSection__change">
                        <button onClick={() => setLanguage('ru')} className={`rowSection__lang ${i18n.language === "ru" ? 'rowSection__lang_active' : "" }`}>RU</button>
                        <button onClick={() => setLanguage('en')} className={`rowSection__lang ${i18n.language === "en" ?  'rowSection__lang_active' : ""}`}>EN</button>
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