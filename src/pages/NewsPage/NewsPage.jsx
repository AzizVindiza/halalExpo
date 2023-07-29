import React, {useEffect, useState} from 'react';
import CartNewsSection from "./CartNewsSection/CartNewsSection";
import "./newdPage.sass"
import {useGetNewsInNewsPageQuery} from "../../redux/ApiSlice";
import axios from "axios";
import Btn from "../../components/Btn/Btn";
import {useNavigate} from "react-router-dom";

const NewsPage = () => {

    const navigate = useNavigate()

    const {data: data = []} = useGetNewsInNewsPageQuery()
    console.log(data)

    return (
        <section className={'newsPage'}>
            <div className="newsPage__content">
                <h2 className="newsPage__title">Новости</h2>
            </div>
            <div className="container newsPage__container">
                {
                    data.map((item) => (
                        <CartNewsSection key={item.id} item={item}/>
                    ))
                }</div>
        </section>
    );
};

export default NewsPage;