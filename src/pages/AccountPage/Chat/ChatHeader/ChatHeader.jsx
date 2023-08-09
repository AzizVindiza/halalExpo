import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import "./chatHeader.sass"
import message from "../img/message.svg"
import all from "../img/allMessage.svg"
import favorite from "../img/favorite.svg"
import draft from "../img/draft.svg"
import send from "../img/send.svg"

const ChatHeader = () => {
    return (
        <div className={"chatHeader"}>
            <div className="chatHeader__wrapper">

                <NavLink className={({isActive})=>(
                    !isActive ? "chatHeader__navlink" : "chatHeader__navlink_active")} to={'allMessage'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6V15C1 16.6569 2.34315 18 4 18H19.5" stroke="#393939"/>
                        <path d="M20.0366 15.3513L20.6384 14.6558L16.1475 10.043L21.5385 5.73968V14.6667C21.5385 15.7388 20.7403 16.5385 19.6923 16.5385H4.30769C3.2597 16.5385 2.46154 15.7388 2.46154 14.6667V5.72192L7.85333 9.97L3.35912 14.6584L3.96573 15.3496L9.63112 11.1835L11.7478 12.5643L12.0042 12.7316L12.258 12.5605L14.2979 11.1854L20.0366 15.3513ZM2.83687 4.85064L2.46154 5.41865V5.33333C2.46154 4.26119 3.2597 3.46154 4.30769 3.46154H19.6923C20.7403 3.46154 21.5385 4.26119 21.5385 5.33333V5.60785L21.0874 4.92776L12.0008 9.86324L2.83687 4.85064Z" fill="#393939" stroke="#393939" stroke-width="0.923077"/>
                    </svg>

                    <h2 className="chatHeader__h2">
                        Вся почта
                    </h2>
                    <span className="chatHeader__span">1</span>
                </NavLink>

                <NavLink className={({isActive})=>(
                    !isActive ? "chatHeader__navlink" : "chatHeader__navlink_active")} to={'incoming'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.996" fillRule="evenodd" clipRule="evenodd" d="M1.52121 8.0001C4.26418 9.7859 7.05623 11.3019 9.77009 13.146C10.59 13.6869 11.41 13.6869 12.2299 13.146C14.9438 11.3019 17.7358 9.78581 20.4788 8C20.5071 11.459 20.5071 14.9182 20.4788 18.3772C20.2596 19.2242 19.7295 19.758 18.8884 19.9786C13.6295 20.0071 8.37053 20.0071 3.11161 19.9786C2.27046 19.758 1.74033 19.2242 1.52121 18.3772C1.49293 14.9182 1.49293 11.4591 1.52121 8.0001Z" fill="#393939"/>
                        <path d="M12.5285 2.90502C11.5859 2.34692 10.4141 2.34692 9.47152 2.90502L1.5 7.625C7.80051 8.53692 14.1995 8.53692 20.5 7.625L12.5285 2.90502Z" fill="#CDCDCD"/>
                    </svg>

                    <h2 className="chatHeader__h2">
                        Входящие
                    </h2>
                    <span className="chatHeader__span">1</span>
                </NavLink>
                <NavLink className={({isActive})=>(
                    !isActive ? "chatHeader__navlink" : "chatHeader__navlink_active")} to={'send'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83398 19.25L21.084 11L1.83398 2.75V9.16667L15.584 11L1.83398 12.8333V19.25Z" fill="#393939"/>
                    </svg>

                    <h2 className="chatHeader__h2">
                        Отправленные
                    </h2>
                    <span className="chatHeader__span">1</span>
                </NavLink>
                <NavLink className={({isActive})=>(
                    !isActive ? "chatHeader__navlink" : "chatHeader__navlink_active")} to={'draft'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3333 1.83203C18.5764 1.83203 18.8096 1.92861 18.9815 2.10052C19.1534 2.27242 19.25 2.50558 19.25 2.7487V6.19261L11.0009 14.4426L10.9954 18.3274L14.8876 18.3329L19.25 13.9705V19.2487C19.25 19.4918 19.1534 19.725 18.9815 19.8969C18.8096 20.0688 18.5764 20.1654 18.3333 20.1654H3.66667C3.42355 20.1654 3.19039 20.0688 3.01849 19.8969C2.84658 19.725 2.75 19.4918 2.75 19.2487V2.7487C2.75 2.50558 2.84658 2.27242 3.01849 2.10052C3.19039 1.92861 3.42355 1.83203 3.66667 1.83203H18.3333ZM19.9632 8.0727L21.2593 9.36887L14.1295 16.4987L12.8315 16.4969L12.8333 15.2025L19.9632 8.0727ZM11 10.9987H6.41667V12.832H11V10.9987ZM13.75 7.33203H6.41667V9.16536H13.75V7.33203Z" fill="#393939"/>
                    </svg>
                    <h2 className="chatHeader__h2">
                        Черновик
                    </h2>
                    <span className="chatHeader__span">1</span>
                </NavLink>
                <NavLink className={({isActive})=>(
                    !isActive ? "chatHeader__navlink" : "chatHeader__navlink_active")} to={'favorite'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5245 2.46353C10.6741 2.00287 11.3259 2.00287 11.4755 2.46353L13.1329 7.56434C13.1998 7.77035 13.3918 7.90983 13.6084 7.90983H18.9717C19.4561 7.90983 19.6575 8.52964 19.2656 8.81434L14.9266 11.9668C14.7514 12.0941 14.678 12.3198 14.745 12.5258L16.4023 17.6266C16.552 18.0873 16.0248 18.4704 15.6329 18.1857L11.2939 15.0332C11.1186 14.9059 10.8814 14.9059 10.7061 15.0332L6.3671 18.1857C5.97524 18.4704 5.448 18.0873 5.59768 17.6266L7.25503 12.5258C7.32197 12.3198 7.24864 12.0941 7.07339 11.9668L2.73438 8.81434C2.34253 8.52964 2.54392 7.90983 3.02828 7.90983H8.39159C8.6082 7.90983 8.80018 7.77035 8.86712 7.56434L10.5245 2.46353Z" fill="#393939"/>
                    </svg>
                    <h2 className="chatHeader__h2">
                            Избранные
                    </h2>
                    <span className="chatHeader__span">1</span>
                </NavLink>
            </div>
            <div className="chatHeader__box">
                <Outlet/>
            </div>

            
        </div>
    );
};

export default ChatHeader;