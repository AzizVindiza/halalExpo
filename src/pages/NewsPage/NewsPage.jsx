import React, {useEffect, useState} from 'react';
import CartNewsSection from "./CartNewsSection/CartNewsSection";
import "./newdPage.sass"
import {useGetNewsInNewsPageQuery} from "../../redux/ApiSlice";
import axios from "axios";

const NewsPage = () => {
    // const [data, setData] = useState([])
    const {data:data=[]} = useGetNewsInNewsPageQuery()
    // useEffect(() => {
    //     axios.get("http://143.110.188.124:8000/other/news/")
    //         .then((res) => {
    //             setData(res.data)
    //             console.log(res.data)
    //         })
    //         .catch((error) => console.log(error))
    // }, []);
    return (
        <section className={'newsPage'}>
            <div className="newsPage__content">
                <h2 className="newsPage__title">Новости</h2>
            </div>
            <div className="container newsPage__container">
                {
                    data.map((item) => (
                        <>
                            <CartNewsSection key={item.id} item={item}/>
                            <CartNewsSection key={item.id} item={item}/>
                            <CartNewsSection key={item.id} item={item}/>
                            <CartNewsSection key={item.id} item={item}/>
                            <CartNewsSection key={item.id} item={item}/>
                            <CartNewsSection key={item.id} item={item}/>
                        </>
                    ))
                }</div>
        </section>
    );
};

export default NewsPage;