import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Layout = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <Header open={open} setOpen={setOpen}/>

            <main>
                <SmoothScroll>
                    <Outlet/>
                    <div className="smooth-scroll" style={{padding: '120px'}}></div>
                </SmoothScroll>
            </main>
            {

                open && <RegisterForm open={open} setOpen={setOpen}/>}

            <Footer/>
        </>
    );
};

export default Layout;