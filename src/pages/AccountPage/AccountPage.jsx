import React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import Aside from "./Aside/Aside";
import "./account.sass"
const AccountPage = () => {
    return (
        <div className={'account'}>
            <div className="account__container">
                <aside className="account__nav">
                    <Aside/>
                </aside>
                <div className="account__wrapper">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;