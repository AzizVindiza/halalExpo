import React from 'react';
import logo1 from "./image/logo1.png"
import logo2 from "./image/logo2.png"
import logo3 from "./image/logo3.png"
import logo4 from "./image/logo4.png"
import logo6 from "./image/logo6.png"
import logo7 from "./image/logo7.png"
import logo5 from "./image/logo5.png"
import logo0 from "./image/development.png"
import "./OrganizatorSection.sass"
const OrganizatorSection = () => {
    return (
        <section className={'organizatorSection'}>
            <div className="container organizatorSection__container">
                <h2 className="organizatorSection__h2">Организаторы</h2>
                <div className={'organizatorSection__img'}>
                    <img src={logo1} alt=""/>
                </div>
                <div className="organizatorSection__line"></div>
                <h3 className="organizatorSection__h3">ПРИ ПОДДЕРЖКЕ </h3>


                <div className="organizatorSection__wrapper">
                    <div className="organizatorSection__row">
                        <div className="organizatorSection__box">
                            <div className="organizatorSection__img1">
                                <img src={logo0} alt=""/>
                            </div>
                            <span className="organizatorSection__span">
                                Правительство <br/>
                                Кыргызской Республики
                            </span>
                        </div>
                        <div className="organizatorSection__box">
                            <div className="organizatorSection__img2">
                                <img src={logo2} alt=""/>
                            </div>
                            <span className="organizatorSection__span">
                                Корпорация IBIC
                            </span>

                        </div>

                    </div>
                    <div className="organizatorSection__row2">
                        <div className="organizatorSection__picture">
                            <img src={logo3} alt="" className="organizatorSection__img"/>
                            <img src={logo4} alt="" className="organizatorSection__img"/>
                            <img src={logo5} alt="" className="organizatorSection__img"/>


                        </div>
                        <div className="organizatorSection__picture">
                            <img src={logo6} alt="" className="organizatorSection__img"/>
                            <img src={logo7} alt="" className="organizatorSection__img"/>
                        </div>

                    </div>



                    {/*<div className="organizatorSection__pic">*/}
                    {/*    */}
                    {/*</div>*/}
                    {/*<div className="organizatorSection__pic">*/}
                    {/*    <img src={logo4} alt="" className="organizatorSection__img"/>*/}
                    {/*</div>*/}
                    {/*<div className="organizatorSection__pic">*/}
                    {/*    <img src={logo5} alt="" className="organizatorSection__img"/>*/}
                    {/*</div>*/}
                    {/*<div className="organizatorSection__pic">*/}
                    {/*    <img src={logo6} alt="" className="organizatorSection__img"/>*/}
                    {/*</div>*/}
                    {/*<div className="organizatorSection__pic">*/}
                    {/*    <img src={logo7} alt="" className="organizatorSection__img"/>*/}
                    {/*</div>*/}
                    {/*<div className="organizatorSection__pic">*/}
                    {/*    <img src={logo8} alt="" className="organizatorSection__img"/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default OrganizatorSection;