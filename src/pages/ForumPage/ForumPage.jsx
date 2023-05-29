import React from 'react';
import './ForumPage.sass'
import CardSection from "./CardSection/CardSection";
import MeetSection from "./MeetSection/MeetSection";
import TimeSection from "./TimeSection/TimeSection";

const ForumPage = () => {
    return (
        <section className="forum">
            <h2 className="forum__h2">

                Программа форума
            </h2>
            <div className=" container forum__container">
                <MeetSection/>
                <CardSection/>
                <TimeSection/>




            </div>

        </section>
    );
};

export default ForumPage;