import React from 'react';
import "./MembersPage.sass"
import SearchSection from "./SearchSection/SearchSection";
import MembersCard from "./MembercCard/MembersCard";
import SelectSection from "./SelectSection/SelectSection";




const MembersPage = () => {
    return (
        <section className="members">
            <h2 className="members__h2">
                Участники
            </h2>
            <div className="container members__container">
                <div className="members__wrapper">
                    <SelectSection/>
                    <SearchSection/>
                    <p className="members__txt">Участников 200 </p>
                </div>

                <div className="members__cards">
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>
                    <MembersCard/>
                </div>
            </div>

        </section>
    );
};

export default MembersPage;