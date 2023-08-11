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

                    {/*<div className="rowSection__change">*/}
                    {/*    <button onClick={() => changeLanguages('ru')} className={`rowSection__lang ${i18n.language === "ru" ? 'rowSection__lang_active' : "" }`}>RU</button>*/}
                    {/*    <button onClick={() => changeLanguages('en')} className={`rowSection__lang ${i18n.language === "en" ?  'rowSection__lang_active' : ""}`}>EN</button>*/}
                    {/*</div>*/}


                    {


                        Object.keys(user).length === 0  ?
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
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.42219 4.00886C9.73387 4.29105 9.83333 4.59485 9.83333 4.82857C9.83333 6.6089 10.0559 8.16437 10.3967 9.5H5.60332C5.9441 8.16437 6.16667 6.6089 6.16667 4.82857C6.16667 4.59486 6.26612 4.29105 6.57781 4.00886C6.90104 3.71623 7.40766 3.5 8 3.5C8.59234 3.5 9.09897 3.71623 9.42219 4.00886Z" stroke="#2948A7" strokeWidth="7" strokeLinecap="round" stroke-linejoin="round"/>
                                        <path d="M10 15C9.79675 15.3042 9.50502 15.5566 9.15402 15.7321C8.80302 15.9076 8.40506 16 8 16C7.59494 16 7.19698 15.9076 6.84598 15.7321C6.49498 15.5566 6.20325 15.3042 6 15" stroke="#2948A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </div>

                                <Link to={'account/profile'} className="rowSection__account">
                                    <div className="rowSection__logo">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.12109 16.625C6.12109 15.1753 8.07849 14 10.4931 14C12.9076 14 14.865 15.1753 14.865 16.625" stroke="#14181F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.4923 11.375C11.9411 11.375 13.1155 10.1997 13.1155 8.75C13.1155 7.30025 11.9411 6.125 10.4923 6.125C9.04358 6.125 7.86914 7.30025 7.86914 8.75C7.86914 10.1997 9.04358 11.375 10.4923 11.375Z" stroke="#14181F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.4926 18.375C14.8388 18.375 18.3621 14.8492 18.3621 10.5C18.3621 6.15076 14.8388 2.625 10.4926 2.625C6.14636 2.625 2.62305 6.15076 2.62305 10.5C2.62305 14.8492 6.14636 18.375 10.4926 18.375Z" stroke="#14181F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <h5 className="rowSection__h5">Профиль</h5>
                                </Link>
                            </div>

                    }


                </div>

            </div>
        </div>
    );
};


export default RowSection;