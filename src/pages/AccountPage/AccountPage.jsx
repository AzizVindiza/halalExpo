import React, {useEffect} from 'react';
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Aside from "./Aside/Aside";
import "./account.sass"
import {useDispatch, useSelector} from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import HomePage from "../HomePage/HomePage";
import {logOut} from "../../redux/reducers/userSlice";
import {toast} from "react-toastify";

const AccountPage = () => {

    const {user} = useSelector((store) => store.user)


    // useEffect(() => {
    //     if (Object.keys(user).length === 0) {
    //         navigate('/')
    //     }
    // },[navigate,user])
    return (
        <>
            {
                Object.keys(user).length === 0 ? <HomePage/> :
                    <div className={'account'}>
                        <div className="account__container">
                            <aside className="account__nav">
                                <Aside/>

                            </aside>
                            <div className="account__wrapper">
                                {user.name}
                                <Outlet/>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default AccountPage;