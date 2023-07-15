import React from 'react';
import logo from "./logo.png"
import "./profile.sass"
const Profile = () => {
    return (
        <section className={'profile'}>
            <div className="profile__container">
                <div className="profile__wrapper">
                    <div className="profile__logo">
                        <div className="profile__pic">
                            <img src={logo} className={'profile__picture'} alt="logo"/>
                        </div>
                        <h2 className="profile__h2">Allchips Limited</h2>
                    </div>
                    <div className="profile__center">
                        <h3 className="profile__h3">Отрасль</h3>
                        <p className="profile__p profile__p_first">Информационные технологии и программное обеспечение</p>
                        <h3 className="profile__h3">Направление</h3>
                        <p className="profile__p">Техника и спецтехника</p>
                    </div>
                    <div className="profile__right">
                        <div className="profile__links">
                            <h4 className="profile__h4">Email:</h4>
                            <a href="#" className="profile__link">info@fjnnlk.org</a>
                        </div>
                        <div className="profile__links">
                            <h4 className="profile__h4">Email:</h4>
                            <a href="#" className="profile__link">info@fjnnlk.org</a>
                        </div>
                        <div className="profile__links">
                            <h4 className="profile__h4">Email:</h4>
                            <a href="#" className="profile__link">info@fjnnlk.org</a>
                        </div>
                        <div className="profile__links">
                            <h4 className="profile__h4">Email:</h4>
                            <a href="#" className="profile__link">info@fjnnlk.org</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;