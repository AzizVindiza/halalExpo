import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";
import {ScrollRestoration} from "react-router-dom";
import DemoForm from "../components/DemoRegistraion/DemoForm/DemoForm";
import Advertising from "./Advertising/Advertising";

const Layout = () => {

    return (
        <>
            <Header/>

            <main>
                    <Outlet/>
                    {/*<Advertising/>*/}
                    <div className="smooth-scroll" style={{padding: '100px'}}></div>
                    <ScrollRestoration/>
            </main>


            <Footer/>
        </>
    );
};

export default Layout;