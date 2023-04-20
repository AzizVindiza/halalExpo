import React from 'react';
import './FirstSection.sass'
import bg from './first__line.svg'
import small from './first__circle-small.png'
import big from './first__circle-big.png'
import Btn from "../../../components/Btn/Btn";
const FirstSection = () => {
    return (
        <section className="first">
            <div className="container first__container">
                <div className="first__txt">
                    <h2 className="first__h2">
                        <span>2023</span><br/>
                        Halal Investment<br/>
                        and Trading
                    </h2>
                    <p className="first__p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/>
                        has been the industry's standard dummy text ever since the 1500s, when an unknown <br/>
                        printer took a galley of type and scrambled it to make a type specimen.
                    </p>
                    <a href="#" className="first__btn">
                        <Btn type="button" text="Оставить заявку"/>
                    </a>
                </div>
            </div>
            <div className="first__circle-big">
                <img src={big} alt="big circle"/>
            </div>
            <div className="first__circle-small">
                <img src={small} alt="small circle"/>
            </div>
            <div className="first__bg">
                <img src={bg} alt="line bg"/>
            </div>
        </section>
    );
};

export default FirstSection;