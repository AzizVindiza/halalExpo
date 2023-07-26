import React, {useEffect, useState} from 'react';
import Btn from "../../../components/Btn/Btn";
import "./membersuser.sass"
import logo from "./logo.png"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useGetMemberUserQuery} from "../../../redux/ApiSlice";
import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";

const MembersUser = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {data: memberUser, isLoading,error} = useGetMemberUserQuery(params.id)


    return (
        <>
            {
                memberUser ? <div className={'membersUser'}>
                    <div className="container membersUser__container">
                        <div className="membersUser__title">
                            <div onClick={() => navigate(-1)} className="membersUser__back">
                                <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="11" fill="#D9E2FF"/>
                                    <path
                                        d="M30 12C30.5523 12 31 11.5523 31 11C31 10.4477 30.5523 10 30 10V12ZM10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L16.6569 18.0711C17.0474 18.4616 17.6805 18.4616 18.0711 18.0711C18.4616 17.6805 18.4616 17.0474 18.0711 16.6569L12.4142 11L18.0711 5.34315C18.4616 4.95262 18.4616 4.31946 18.0711 3.92893C17.6805 3.53841 17.0474 3.53841 16.6569 3.92893L10.2929 10.2929ZM30 10L11 10V12L30 12V10Z"
                                        fill="#494949"/>
                                </svg>
                            </div>
                            <h2 className="membersUser__h2">Профиль участника</h2>
                        </div>
                        <div className="membersUser__wrapper">
                            <div className="membersUser__left">
                                <div className="membersUser__logo">
                                    <img src={memberUser.photo_company} className={'membersUser__img'} alt=""/>
                                </div>
                                <h3 className="membersUser__nameCompany">{memberUser.company_one}</h3>
                                <div className="membersUser__wrapp">
                                    <div className="membersUser__first">
                                        <h3 className="membersUser__h3">Зона</h3>
                                        <p className="membersUser__p">Trade</p>
                                    </div>
                                    <div className="membersUser__second">
                                        <h3 className="membersUser__h3">Категория</h3>
                                        <p className="membersUser__p">Техника</p>
                                    </div>
                                </div>
                                <div className="membersUser__choose-direction">
                                    <h4 className="membersUser__h4">Направление</h4>
                                    <p className="membersUser__text">{memberUser.direction}</p>
                                </div>
                                <h4 className="membersUser__h4">Описание компании</h4>
                                <p className="membersUser__text">{memberUser.describe_company}</p>
                                <div className="membersUser__sign-in">
                                    <Btn text={'Записаться на встречу'}/>
                                </div>
                            </div>
                            <div className="membersUser__right">
                                <div className="membersUser__block">
                                    <div className="membersUser__inner">
                                        <h4 className="membersUser__h4">Адрес</h4>
                                        <p className="membersUser__text-rigth">
                                            <span>{memberUser.country}</span>, <span>{memberUser.city}, <span>{memberUser.address_two}</span></span>
                                        </p>
                                    </div>
                                    <div className="membersUser__inner">
                                        <h4 className="membersUser__h4">Номер телефона</h4>
                                        <p className="membersUser__text">{memberUser.work_phone}</p>
                                    </div>
                                    <div className="membersUser__inner">
                                        <h4 className="membersUser__h4">Сайт</h4>
                                        <p className="membersUser__text">{memberUser.web_site}</p>
                                    </div>
                                    <div className="membersUser__social">
                                        <a href={memberUser.instagram} className="membersUser__socialLink">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.2463 0.046875H6.75441C4.97708 0.0487762 3.27309 0.75566 2.01633 2.01242C0.759566 3.26918 0.0526825 4.97317 0.0507812 6.7505V18.2424C0.0526825 20.0198 0.759566 21.7238 2.01633 22.9805C3.27309 24.2373 4.97708 24.9442 6.75441 24.9461H18.2463C20.0237 24.9442 21.7277 24.2373 22.9844 22.9805C24.2412 21.7238 24.9481 20.0198 24.95 18.2424V6.7505C24.9481 4.97317 24.2412 3.26918 22.9844 2.01242C21.7277 0.75566 20.0237 0.0487762 18.2463 0.046875ZM12.5004 18.2424C11.3639 18.2424 10.253 17.9054 9.30809 17.2741C8.36317 16.6427 7.6267 15.7453 7.1918 14.6954C6.7569 13.6454 6.64311 12.4901 6.86482 11.3755C7.08653 10.2609 7.63378 9.23705 8.43737 8.43346C9.24095 7.62987 10.2648 7.08262 11.3794 6.86091C12.494 6.6392 13.6493 6.75299 14.6993 7.18789C15.7492 7.62279 16.6466 8.35926 17.278 9.30418C17.9093 10.2491 18.2463 11.36 18.2463 12.4965C18.2448 14.0199 17.6389 15.4805 16.5616 16.5577C15.4844 17.635 14.0238 18.2409 12.5004 18.2424ZM19.6828 6.7505C19.3987 6.7505 19.121 6.66626 18.8848 6.50841C18.6485 6.35057 18.4644 6.12622 18.3557 5.86373C18.247 5.60125 18.2185 5.31242 18.2739 5.03377C18.3294 4.75511 18.4662 4.49916 18.6671 4.29826C18.868 4.09736 19.1239 3.96055 19.4026 3.90512C19.6812 3.84969 19.9701 3.87814 20.2326 3.98687C20.495 4.09559 20.7194 4.27971 20.8772 4.51594C21.0351 4.75217 21.1193 5.0299 21.1193 5.31401C21.1193 5.69499 20.968 6.06037 20.6986 6.32977C20.4292 6.59916 20.0638 6.7505 19.6828 6.7505ZM16.331 12.4965C16.331 13.2541 16.1064 13.9947 15.6854 14.6247C15.2645 15.2546 14.6663 15.7456 13.9663 16.0355C13.2663 16.3255 12.4961 16.4013 11.7531 16.2535C11.01 16.1057 10.3274 15.7409 9.7917 15.2051C9.25598 14.6694 8.89114 13.9869 8.74334 13.2438C8.59553 12.5007 8.67139 11.7305 8.96132 11.0305C9.25126 10.3306 9.74224 9.73232 10.3722 9.31141C11.0021 8.89049 11.7427 8.66583 12.5004 8.66583C13.5163 8.66583 14.4907 9.06941 15.2091 9.7878C15.9274 10.5062 16.331 11.4805 16.331 12.4965Z"
                                                    fill="#5160E4"/>
                                            </svg>

                                        </a>
                                        <a href={memberUser.facebook} className="membersUser__socialLink">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M24.8992 12.5024C24.8992 5.65712 19.3437 0.101562 12.4985 0.101562C5.65321 0.101562 0.0976562 5.65712 0.0976562 12.5024C0.0976562 18.5043 4.36353 23.5019 10.0183 24.6551V16.2226H7.53813V12.5024H10.0183V9.40216C10.0183 7.0088 11.9652 5.06188 14.3586 5.06188H17.4588V8.78212H14.9786C14.2966 8.78212 13.7385 9.34015 13.7385 10.0222V12.5024H17.4588V16.2226H13.7385V24.8411C20.0009 24.2211 24.8992 18.9384 24.8992 12.5024Z"
                                                    fill="#5160E4"/>
                                            </svg>

                                        </a>
                                        <a href={memberUser.twitter} className="membersUser__socialLink">
                                            <svg width="27" height="28" viewBox="0 0 27 28" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4084_5688)">
                                                    <path
                                                        d="M12.5511 -0.125593C9.71927 0.143353 7.29349 1.15058 5.24212 2.92245C2.91654 4.92109 1.46634 7.57363 0.965367 10.7166C0.838804 11.5445 0.838804 13.443 0.97064 14.2814C1.36087 16.7705 2.33646 18.9168 3.92904 20.7678C5.94349 23.1144 8.75951 24.6226 11.9183 25.0603C12.5669 25.15 14.439 25.1447 15.0824 25.0551C18.7579 24.5488 21.8745 22.6451 23.9312 19.6551C26.1197 16.4752 26.7367 12.3672 25.5712 8.72324C24.6589 5.87031 22.9134 3.56581 20.4349 1.92577C18.6999 0.781439 16.7171 0.0853443 14.6341 -0.104498C14.0962 -0.15196 12.9835 -0.162506 12.5511 -0.125593ZM17.1285 6.38183C17.5451 6.49784 18.1304 6.77206 18.4995 7.02519L18.7263 7.18339L19.1587 7.04101C19.396 6.96718 19.8126 6.79843 20.0869 6.6666C20.3558 6.54003 20.5878 6.43456 20.5984 6.43456C20.6089 6.43456 20.6195 6.4873 20.6195 6.55585C20.6195 6.80371 20.3347 7.24667 19.8917 7.68437C19.5701 8.00605 19.4804 8.12206 19.5595 8.12206C19.723 8.12206 20.3769 7.97441 20.7091 7.86366C20.8779 7.80566 21.0203 7.76874 21.0308 7.77929C21.0677 7.81093 20.4718 8.48593 20.0288 8.91308C19.5648 9.36132 19.5648 9.3666 19.5648 9.62499C19.5648 10.0943 19.4593 11.0277 19.3486 11.5445C18.9583 13.3322 18.0935 14.9143 16.791 16.2115C16.1212 16.876 15.7521 17.1344 14.7923 17.6142C13.8484 18.0836 13.1786 18.3314 12.2558 18.5424C11.412 18.7322 10.0673 18.7797 9.20248 18.6426C8.17416 18.4844 6.90326 17.9939 6.19134 17.4771L5.93294 17.2926L6.46029 17.3295C7.36732 17.3822 8.37982 17.1713 9.2183 16.7494C9.62962 16.5385 10.3363 16.0533 10.3363 15.9795C10.3363 15.9478 10.2466 15.9268 10.1411 15.9268C9.26576 15.9215 8.17943 15.1885 7.73119 14.3078C7.62572 14.0969 7.54134 13.907 7.54134 13.8859C7.54134 13.8596 7.74701 13.8437 8.00541 13.8437C8.25853 13.8437 8.55912 13.8226 8.67513 13.7963L8.88607 13.7541L8.55912 13.6328C8.05814 13.4535 7.67318 13.1951 7.2724 12.7785C6.74505 12.2195 6.45502 11.5973 6.36009 10.801L6.32845 10.5531L6.5763 10.706C6.87689 10.8959 7.11419 10.9697 7.45169 10.9697H7.70482L7.34623 10.6111C6.96127 10.2314 6.70814 9.81484 6.56048 9.30859C6.38646 8.72324 6.46556 7.658 6.72396 7.03574L6.79779 6.85117L7.33041 7.32578C8.71732 8.57031 9.99876 9.31386 11.5702 9.78847C12.0765 9.9414 12.7515 10.0732 13.031 10.0732H13.2367V9.60917C13.2472 7.87949 14.0119 6.7457 15.4462 6.35019C15.8417 6.24472 16.6855 6.26054 17.1285 6.38183Z"
                                                        fill="#5160E4"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4084_5688">
                                                        <rect y="0.5" width="27" height="27" rx="4" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </a>
                                    </div>
                                </div>
                                <div className="membersUser__send">
                                    <div className="membersUser__btn">
                                        <button className={'membersUser__click'}>Поделиться профилем</button>
                                    </div>
                                    <div className="membersUser__link">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.17188 14.8287L14.8287 9.17188" stroke="white" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M7.05063 11.2969L5.63642 12.7111C4.07432 14.2732 4.07432 16.8058 5.63642 18.3679C7.19851 19.93 9.73117 19.93 11.2933 18.3679L12.7075 16.9537"
                                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M11.293 7.04672L12.7072 5.63251C14.2693 4.07041 16.8019 4.07041 18.364 5.63251C19.9261 7.19461 19.9261 9.72727 18.364 11.2894L16.9498 12.7036"
                                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                    error ? "error" :
                        isLoading ? "loading..." :
                            null
            }
        </>
)
    ;


};

export default MembersUser;