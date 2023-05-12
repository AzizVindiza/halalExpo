import React from 'react';
import Btn from "../../../components/Btn/Btn";
import './PartnersSection.sass'
import img1 from './partner1.png'
import img2 from './partner2.png'
import img3 from './partner3.png'
import img4 from './partner4.png'
import img5 from './partner5.png'
import img6 from './partner6.png'
import img7 from './partner7.png'
import img8 from './partner8.png'
const PartnersSection = () => {
    return (
        <section className="partners">
            <h2 className="partners__title">
                Партнеры
            </h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img src={img1} alt=""/>
                    <h2 className="partners__h2">
                        Торгово-промышленная палата <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img2} alt=""/>
                    <h2 className="partners__h2">
                        Министерства иностранных дел <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img3} alt=""/>
                    <h2 className="partners__h2">
                        Санарип Кыргызстан
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img4} alt=""/>
                    <h2 className="partners__h2">
                        Государственный центр по <br/>
                        развитию Халал-индустрии <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img5} alt=""/>
                    <h2 className="partners__h2">
                        Пресс-служба Минэкономики <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img6} alt=""/>
                    <h2 className="partners__h2">
                        Министерства образования <br/>
                        Кыргызской Республики

                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img7} alt=""/>
                    <h2 className="partners__h2">
                        Министерства сельского хозяйства <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={img8} alt=""/>
                    <h2 className="partners__h2">
                        Министерства транспорта <br/>и коммуникаций
                    </h2>
                </div>

            </div>
            <a className="speaker__btn partners__btn" href="">
                <Btn m={"big btn_border"} type="button" text="Стать партнером"/>
            </a>

        </section>
    );
};

export default PartnersSection;