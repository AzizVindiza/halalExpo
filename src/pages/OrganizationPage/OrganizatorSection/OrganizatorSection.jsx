import React from 'react';
import logo1 from "./image/logo1.png"
import logo2 from "./image/logo2.png"
import logo3 from "./image/logo3.png"
import logo4 from "./image/logo4.png"
import "./OrganizatorSection.sass"
const OrganizatorSection = () => {
    return (
        <section className={'organizatorSection'}>
            <div className="container organizatorSection__container">
                <h2 className="organizatorSection__h2">Организаторы</h2>
                <div className="organizatorSection__wrapper">
                    <div className="organizatorSection__pic">
                        <img src={logo1} alt="" className="organizatorSection__img"/>
                    </div>
                    <div className="organizatorSection__pic">
                        <img src={logo2} alt="" className="organizatorSection__img"/>
                    </div>
                    <div className="organizatorSection__pic">
                        <img src={logo3} alt="" className="organizatorSection__img"/>
                    </div>
                    <div className="organizatorSection__pic">
                        <img src={logo4} alt="" className="organizatorSection__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizatorSection;