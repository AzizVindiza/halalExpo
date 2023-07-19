import React, {useEffect} from 'react';
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Aside from "./Aside/Aside";
import "./account.sass"
import {useDispatch, useSelector} from "react-redux";

import HomePage from "../HomePage/HomePage";
import {logOut} from "../../redux/reducers/userSlice";
import {toast} from "react-toastify";

const AccountPage = () => {

    const {user} = useSelector((store) => store.user)
   const dispatch = useDispatch()
    const navigate = useNavigate()
    const clickLogOut = () => {
        dispatch(logOut())
        navigate('/')
    }

    // useEffect(() => {
    //     if (Object.keys(user).length === 0) {
    //         navigate('/')
    //     }
    // },[navigate,user])
    return (
        <>
            {/*{*/}
            {/*    Object.keys(user).length === 0 ? <HomePage/> :*/}
                    <div className={'account'}>
                        <div className="account__container">
                            <aside className="account__nav">
                                <Aside/>
                                <button onClick={clickLogOut}>Выйти</button>
                            </aside>
                            <div className="account__wrapper">
                                <Outlet/>
                            </div>
                        </div>
                    </div>
            {/*}*/}
        </>
    );
};

export default AccountPage;