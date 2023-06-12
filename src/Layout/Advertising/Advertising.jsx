import React from 'react';
import "./Advertising.sass"
import img from "./img.png";
import img2 from "./img2.png";
import svg from "../../pages/BenefitsPage/svg.png";

const Advertising = () => {
    return (
        <section className={'advertising'}>
            <div className="advertising__container container">
                <div className="advertising__img">
                    <img src={img} alt=""/>
                </div>
                <div className="advertising__svg">
                    <div className="advertising__png">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="advertising__png">
                        <img src={img2} alt=""/>
                    </div>
                </div>



            </div>


        </section>
    );
};

export default Advertising;