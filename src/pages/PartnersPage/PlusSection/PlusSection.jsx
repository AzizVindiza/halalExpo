import React from 'react';
import "./plusSection.sass"
const PlusSection = () => {
    return (
        <section className={'plusSection'}>
            <div className="plusSection__container container">
                <h2 className="plusSection__h2">Преимущества для партнеров</h2>
                <div className="plusSection__wrapper">
                    <div className="plusSection__block">
                        <div className="plusSection__box">
                            <div className="plusSection__pic">
                                <img src="" alt="" className="plusSection__img"/>
                            </div>
                            <div className="plusSection__right">
                                <h3 className="plusSection__h3">Lorem Ipsum is simply </h3>
                                <p className="plusSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                        </div>
                    </div>
                    <div className="plusSection__block">
                        <div className="plusSection__box">
                            <div className="plusSection__pic">
                                <img src="" alt="" className="plusSection__img"/>
                            </div>
                            <div className="plusSection__right">
                                <h3 className="plusSection__h3">Lorem Ipsum is simply </h3>
                                <p className="plusSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlusSection;