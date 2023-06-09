import React from 'react';
import Btn from "../../../components/Btn/Btn";
import './PartnersSection.sass'
import trade from './trade.svg'
import educ from './education.svg'
import halal from './halal.svg'
import minist from './ministr.svg'
import rating from './rating.svg'
import sanarip from './sanarip.svg'
import trans from './trans.svg'
import viliage from './viliage.svg'

const PartnersSection = () => {
    return (
        <section className="partners">
            <h2 className="partners__title">
                Партнеры
            </h2>
            <div className="container partners__container">
                <div className="partners__card">
                    <img src={trade} alt=""/>
                    <h2 className="partners__h2">
                        Торгово-промышленная палата <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={minist} alt=""/>
                    <h2 className="partners__h2">
                        Министерства иностранных дел <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={sanarip} alt=""/>
                    <h2 className="partners__h2">
                        Санарип Кыргызстан
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={halal} alt=""/>
                    <h2 className="partners__h2">
                        Государственный центр по <br/>
                        развитию Халал-индустрии <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={rating} alt=""/>
                    <h2 className="partners__h2">
                        Пресс-служба Минэкономики <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={educ} alt=""/>
                    <h2 className="partners__h2">
                        Министерства образования <br/>
                        Кыргызской Республики

                    </h2>
                </div>
                <div className="partners__card">
                    <img src={viliage} alt=""/>
                    <h2 className="partners__h2">
                        Министерства сельского хозяйства <br/>
                        Кыргызской Республики
                    </h2>
                </div>
                <div className="partners__card">
                    <img src={trans} alt=""/>
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