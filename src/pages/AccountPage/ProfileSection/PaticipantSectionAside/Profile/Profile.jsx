import React, {useState} from 'react';
import logo from "./logo.png"
import "./profile.sass"
import {useSelector} from "react-redux";
import ModalProfile from "./ModalProfile/ModalProfile";
import {useGetUserDataBossQuery} from "../../../../../redux/ApiSlice";

const Profile = () => {
    const {user} = useSelector((store) => store.user)
    const {data : item = {}} = useGetUserDataBossQuery(user.uniqueId)

    return (
        <section className={'profile'}>
            <div className="profile__container">
                <div className="profile__wrapper">
                    <div className="profile__logo">
                        <div className="profile__pic">
                            <img src={`${process.env.REACT_APP_REST}${user.image_logo}`} className={'profile__picture'} alt="logo"/>
                        </div>
                        <h2 className="profile__h2">{user.company_one}</h2>
                    </div>
                    <div className="profile__box">
                        <div className="profile__center">
                            <h3 className="profile__h3">Отрасль</h3>
                            <p className="profile__p profile__p_first">{user.industry}</p>
                            <h3 className="profile__h3">Направление</h3>
                            <p className="profile__p">{user.direction}</p>
                        </div>
                        <div className="profile__right">
                            <div className="profile__links">
                                <h4 className="profile__h4">Email:</h4>
                                <a href="#" className="profile__link">{user.workEmail}</a>
                            </div>
                            <div className="profile__links">
                                <h4 className="profile__h4">Website:</h4>
                                <a href="#" className="profile__link">{user.site_company}</a>
                            </div>
                            <div className="profile__links">
                                <h4 className="profile__h4">Facebook:</h4>
                                <a href="#" className="profile__link">{user.facebook}</a>
                            </div>
                            <div className="profile__links">
                                <h4 className="profile__h4">Instagram</h4>
                                <a href="#" className="profile__link">{user.instagram}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;