import React from 'react';
import "./MembersPage.sass"
import SearchSection from "./SearchSection/SearchSection";
import MembersCard from "./MembercCard/MembersCard";




const MembersPage = () => {
    return (
        <section className="members">
            <h2 className="members__h2">
                Участники
            </h2>
            <div className="container members__container">
                <SearchSection/>
                <div className="members__cards">
                    <MembersCard/>
                </div>
            </div>

        </section>
    );
};

export default MembersPage;