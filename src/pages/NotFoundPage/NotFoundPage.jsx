import React, {useContext} from 'react';
import './NotFoundPage.sass'
import {useTranslation} from "react-i18next";
import  pic from  "./logo.jpg"
import {Link} from "react-router-dom";

const NotFoundPage = () => {

    return (
        <div className="notfound">
            <div className="notfound__wrapper">
                <div className="notfound__pic">
                    <img src={pic} alt="" className="notfound__img"/>
                </div>
                <h2 className="notfound__h2">Oh, Page not found.</h2>
                <Link to={'/'} className="notfound__link">Go to HomePage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;