import React from 'react';
import './OpportunitySection.sass'
import bg from './opportunity__bg.svg'
import six from './six-blue.svg'
import img from './box__img.svg'
const OpportunitySection = () => {
    return (
        <section className="opportunity">
            <div className="opportunity__container container_fluid">
                <div className="opportunity__bg">
                    <img src={bg} alt="bg lines"/>
                </div>

                <div className="row__top row">
                    <div className="box ">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__2">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__1">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__2">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>

                </div>
                <div className="row__bot row">
                    <div className="box ">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__1">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__3">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Представители <br/>правительства</h3>
                    </div>
                    <div className="box box__4">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box box__2">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                    <div className="box">
                        <div className="six">
                            <div className="six__img">
                                <img src={img} alt="box img"/>
                            </div>
                        </div>
                        <h3 className="six__h3">Дистрибьюторы</h3>
                    </div>
                </div>
                <div className="six-blue">
                    <img src={six} alt="polygon"/>
                </div>

            </div>
        </section>
    );
};

export default OpportunitySection;