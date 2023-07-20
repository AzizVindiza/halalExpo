import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {ScrollRestoration} from "react-router-dom";
import DemoForm from "../components/DemoRegistraion/DemoForm/DemoForm";
import Advertising from "./Advertising/Advertising";
import Whatsapp from "./Whatsapp/Whatsapp";
import TopBtn from "./TopBtn/TopBtn";

const Layout = () => {
    const location = useLocation()

    return (
        <>
            <Header/>

            <main>
                    <Outlet/>
                    {/*<Advertising/>*/}
                    {/*<div className="smooth-scroll" style={{padding: '100px'}}></div>*/}
                    <ScrollRestoration/>
            </main>
            <TopBtn/>
            <Whatsapp/>
            {
                location.pathname.includes('account') ?  "" : <Footer/>
            }

        </>
    );
};

export default Layout;