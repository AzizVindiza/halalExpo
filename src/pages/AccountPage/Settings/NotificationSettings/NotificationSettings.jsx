import React from 'react';
import "./notificationSettings.sass"
import {useNavigate} from "react-router-dom";
import Switch from '@mui/material/Switch';

const NotificationSettings = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const navigate = useNavigate()
    return (
        <section className={"notificationSettings"}>
            <div className="notificationSettings__container">
                <div className="notificationSettings__wrapper">
                    <div className="notificationSettings__box">
                        <svg onClick={()=>navigate(-1)} width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="11" fill="#D9E2FF"/>
                            <path d="M30 12C30.5523 12 31 11.5523 31 11C31 10.4477 30.5523 10 30 10V12ZM10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L16.6569 18.0711C17.0474 18.4616 17.6805 18.4616 18.0711 18.0711C18.4616 17.6805 18.4616 17.0474 18.0711 16.6569L12.4142 11L18.0711 5.34315C18.4616 4.95262 18.4616 4.31946 18.0711 3.92893C17.6805 3.53841 17.0474 3.53841 16.6569 3.92893L10.2929 10.2929ZM30 10L11 10V12L30 12V10Z" fill="#494949"/>
                        </svg>
                        <h2 className="infoSettings__h2">
                            Уведомления
                        </h2>
                    </div>
                    <div className="notificationSettings__row">
                       <div>
                           <h3 className="notificationSettings__h3">
                               Новости
                           </h3>
                           <span className="notificationSettings__span">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </span>
                       </div>
                        <Switch {...label} defaultChecked />

                    </div>

                </div>
            </div>

        </section>
    );
};

export default NotificationSettings;