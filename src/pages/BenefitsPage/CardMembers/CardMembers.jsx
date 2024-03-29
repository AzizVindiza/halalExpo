import React from 'react';
import "./CardMembers.sass"

const CardMembers = ({members}) => {
    return (
        <section className="cardMembers">


            <div className="cardMembers__img">
                <img src={members.svg} alt=""/>
            </div>


            <h2 className="cardMembers__h2">
                {members.title}
            </h2>
            <p className="cardMembers__h3">
                {members.p}</p>

        </section>
    );
};

export default CardMembers;