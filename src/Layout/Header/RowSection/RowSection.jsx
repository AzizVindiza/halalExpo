import React, {useContext} from 'react';
import "./rowSection.sass"
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../../redux/reducers/userSlice";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";



const RowSection = () => {

    const {setClose,setLogin,login} = useContext(CustomContext)
    const {t,i18n} = useTranslation()

    const  changeLanguages = (language) => {
        i18n.changeLanguage(language)
    }

    const {user} = useSelector((store) => store.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const ClickLogOut = () => {
        dispatch(logOut())
        navigate('/')
        toast.success('Вы вышли из аккаунт', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }


    return (
        <div className={'rowSection'}>
            <div className="container rowSection__container">
                <h2 className="rowSection__h2">{t("header.text")}</h2>
                <div className="rowSection__wrapper">
                    {
                        Object.keys(user).length === 0 ?
                            <div className="rowSection__user">
                                <div className="rowSection__box">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.125 16.625C6.125 15.1753 8.08375 14 10.5 14C12.9162 14 14.875 15.1753 14.875 16.625" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.5 11.375C11.9497 11.375 13.125 10.1997 13.125 8.75C13.125 7.30025 11.9497 6.125 10.5 6.125C9.05025 6.125 7.875 7.30025 7.875 8.75C7.875 10.1997 9.05025 11.375 10.5 11.375Z" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625C6.15076 2.625 2.625 6.15076 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375Z" stroke="#14181F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <button onClick={() => setClose(true)} className={'rowSection__reg'}>{t("header.signUp")}</button>


                                </div>

                                <button onClick={() => setLogin(!login)} className={'rowSection__in'}>{t("header.login")}</button>

                            </div>
                            :

                            <div className="rowSection__profile">
                                <div className="rowSection__notice">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.4222 8.00886C13.7339 8.29105 13.8333 8.59485 13.8333 8.82857C13.8333 10.6089 14.0559 12.1644 14.3967 13.5H9.60332C9.9441 12.1644 10.1667 10.6089 10.1667 8.82857C10.1667 8.59486 10.2661 8.29105 10.5778 8.00886C10.901 7.71623 11.4077 7.5 12 7.5C12.5923 7.5 13.099 7.71623 13.4222 8.00886Z" stroke="#2948A7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 19C13.7968 19.3042 13.505 19.5566 13.154 19.7321C12.803 19.9076 12.4051 20 12 20C11.5949 20 11.197 19.9076 10.846 19.7321C10.495 19.5566 10.2032 19.3042 10 19" stroke="#2948A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="17" cy="7" r="3" fill="#FF2E13"/>
                                    </svg>
                                </div>
                                <Link to={'account/profile'} className="rowSection__account">
                                    <div className="rowSection__logo">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.12109 16.625C6.12109 15.1753 8.07849 14 10.4931 14C12.9076 14 14.865 15.1753 14.865 16.625" stroke="#14181F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.4923 11.375C11.9411 11.375 13.1155 10.1997 13.1155 8.75C13.1155 7.30025 11.9411 6.125 10.4923 6.125C9.04358 6.125 7.86914 7.30025 7.86914 8.75C7.86914 10.1997 9.04358 11.375 10.4923 11.375Z" stroke="#14181F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.4926 18.375C14.8388 18.375 18.3621 14.8492 18.3621 10.5C18.3621 6.15076 14.8388 2.625 10.4926 2.625C6.14636 2.625 2.62305 6.15076 2.62305 10.5C2.62305 14.8492 6.14636 18.375 10.4926 18.375Z" stroke="#14181F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <h5 className="rowSection__h5">Профиль</h5>
                                </Link>
                            </div>

                    }

                    <div className="rowSection__change">
                        <button onClick={() => changeLanguages('ru')} className={`rowSection__lang ${i18n.language === "ru" ? 'rowSection__lang_active' : "" }`}>RU</button>
                        <button onClick={() => changeLanguages('en')} className={`rowSection__lang ${i18n.language === "en" ?  'rowSection__lang_active' : ""}`}>EN</button>
                    </div>

                </div>

            </div>
        </div>
    );
};


export default RowSection;