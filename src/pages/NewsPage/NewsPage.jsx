import React from 'react';
import CartNewsSection from "./CartNewsSection/CartNewsSection";
import "./newdPage.sass"
const NewsPage = () => {
    return (
        <section className={'newsPage'}>
            <div className="newsPage__content">
                <h2 className="newsPage__title">Новости</h2>
            </div>
            <div className="container newsPage__container">
                <CartNewsSection/>
                <CartNewsSection/>
                <CartNewsSection/>
                <CartNewsSection/>
                <CartNewsSection/>
                <CartNewsSection/>
            </div>
        </section>
    );
};

export default NewsPage;