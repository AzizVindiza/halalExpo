import React from 'react';
import "./PackageSection.sass"
import pic from "./pic.png"
import Btn from "../../../components/Btn/Btn";

const PackageSection = () => {
    return (
        <section className="package">
            <div className="container__package container">
                <div className="package__box">
                    <div className="package__txt">
                        STANDARD
                    </div>
                    <div className="package__block">
                        <div className="package__pic">
                            <img src={pic} alt=""/>
                        </div>
                        <div className="package__card">

                            <div className="package__wrapper">
                                <h2 className={'package__h2'}>
                                    Пакет: Standard
                                </h2>
                                <h3 className="package__h3">
                                        2м
                                </h3>

                             </div>
                             <ul className={'package__list'}>
                                 <li className={'package__item'}>Стенды по периметру</li>
                                 <li className={'package__item'}>Стойка для ресепшн</li>
                                 <li className={'package__item'}>Полки</li>
                                 <li className={'package__item'}>Логотип компании</li>
                                 <li className={'package__item'}>Розетки</li>


                             </ul>

                                <p className="package__p">
                                    $2850
                                </p>
                            <Btn text={'Забронировать стенд'}/>


                        </div>
                    </div>


                </div>



            </div>

        </section>
    );
};

export default PackageSection;