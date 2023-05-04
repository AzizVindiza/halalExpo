import React from 'react';
import "./getSection.sass"
const GetSection = () => {
    return (
        <section className={'getSection'}>
            <div className=" getSection__container container">
               <h2 className="getSection__h2">Что получают  спонсоры</h2>
                <div className="getSection__line"></div>
                <div className="getSection__wrapper">
                    <div className="getSection__block">
                        <div className="getSection__pic">
                            <img src={''} className={'getSection__img'} alt=""/>
                        </div>
                        <p className="getSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="getSection__block">
                        <div className="getSection__pic">
                            <img src={''} className={'getSection__img'} alt=""/>
                        </div>
                        <p className="getSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="getSection__block">
                        <div className="getSection__pic">
                            <img src={''} className={'getSection__img'} alt=""/>
                        </div>
                        <p className="getSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="getSection__block">
                        <div className="getSection__pic">
                            <img src={''} className={'getSection__img'} alt=""/>
                        </div>
                        <p className="getSection__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetSection;