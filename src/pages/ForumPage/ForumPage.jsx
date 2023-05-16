import React from 'react';
import './ForumPage.sass'
import CardSection from "./CardSection/CardSection";

const ForumPage = () => {
    return (
        <section className="forum">
            <h2 className="forum__h2">

                Программа форума
            </h2>
            <div className=" container forum__container">
                <CardSection/>




            </div>

        </section>
    );
};

export default ForumPage;