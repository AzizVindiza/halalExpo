import React, {useContext} from 'react';
import "./rowSection.sass"
import {CustomContext} from "../../../Context";
import LoginForm from "../../../components/LoginForm/LoginForm";
import Registration from "../../../components/Registration/Registration";
import DemoForm from "../../../components/DemoRegistraion/DemoForm/DemoForm";
import {useTranslation} from "react-i18next";



const RowSection = () => {

    const {setClose,setLogin,login} = useContext(CustomContext)
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
                        <div className="rowSection__box">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.125 16.625C6.125 15.1753 8.08375 14 10.5 14C12.9162 14 14.875 15.1753 14.875 16.625" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 11.375C11.9497 11.375 13.125 10.1997 13.125 8.75C13.125 7.30025 11.9497 6.125 10.5 6.125C9.05025 6.125 7.875 7.30025 7.875 8.75C7.875 10.1997 9.05025 11.375 10.5 11.375Z" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625C6.15076 2.625 2.625 6.15076 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375Z" stroke="#14181F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <button onClick={() => setClose(true)} className={'rowSection__reg'}>{t("header.signUp")}</button>
                        </div>

                        {/*<button onClick={() => setLogin(!login)} className={'rowSection__in'}>{t("header.login")}</button>*/}

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

        </div>
    );
};


export default RowSection;