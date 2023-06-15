import React, {useContext} from 'react';
import "./rowSection.sass"
import {CustomContext} from "../../../Context";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Registration from "../../../components/Registration/Registration";
import DemoForm from "../../../components/DemoRegistraion/DemoForm/DemoForm";
import {useTranslation} from "react-i18next";



const RowSection = () => {

    const {close, setClose,setLogin,login,request} = useContext(CustomContext)
    const {t,i18n} = useTranslation()

    const  changeLanguages = (language) => {
        i18n.changeLanguage(language)
    }



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