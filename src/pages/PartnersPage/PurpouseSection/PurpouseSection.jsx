import React from 'react';
import "./purposeSection.sass"
const PurpouseSection = () => {
    return (
        <section className={'purpose'}>
            <div className="container purpose__container">
                <h2 className={'purpose__h2'}>Цели </h2>
                <p className="purpose__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="purpose__wrapper">
                    <div className="purpose__block">
                        <div className="purpose__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="purpose__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                    <div className="purpose__block">
                        <div className="purpose__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="purpose__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                    <div className="purpose__block">
                        <div className="purpose__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="purpose__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="purpose__block">
                        <div className="purpose__pic">
                            <img src="" alt="" className="purpose__image"/>
                        </div>
                        <p className="purpose__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurpouseSection;