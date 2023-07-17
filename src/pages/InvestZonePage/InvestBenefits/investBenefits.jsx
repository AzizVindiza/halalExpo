import React from 'react';
import "./investBenefits.sass"
import svg1 from "../img/svg1.svg"
import svg2 from "../img/svg2.svg"
import svg3 from "../img/svg3.svg"
import svg4 from "../img/svg4.svg"
import svg5 from "../img/svg5.svg"
import svg6 from "../img/svg6.svg"



const InvestBenefits = () => {
    return (
        <section className={"investBenefits"}>
            <div className="investBenefits__container container">
                <h2 className="investBenefits__h2">
                    Преимущества
                </h2>
                <div className="investBenefits__wrapper">

                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg1} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Более 50 инновационных бизнес-идей, отобранных по потенциалу
                            </h3>
                            <p className="investBenefits__p">
                                Зона Invest на Halal Trade Expo представляет собой уникальное пространство, где бизнес-предприниматели и инвесторы смогут встретиться, обменяться идеями и осуществить потенциальные инвестиции. В этой зоне будет представлено более 50 бизнес-идей, отобранных по их инновационности и потенциалу.
                            </p>
                        </div>
                    </div>
                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg2} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Площадка для презентации проектов и привлечения инвесторов
                            </h3>
                            <p className="investBenefits__p">
                                Главной особенностью зоны Invest является площадка для презентации проектов, где предприниматели смогут представить свои идеи и бизнес-планы инвесторам и экспертам. Здесь каждый участник будет иметь возможность подробно описать свой проект, его потенциал и предложение инвесторам.                            </p>
                        </div>
                    </div>
                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg3} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Экспертные консультации и советы для улучшения проектов                            </h3>
                            <p className="investBenefits__p">Кроме того, в зоне Invest будут доступны консультации от опытных специалистов. Участники смогут получить экспертные советы и рекомендации по различным аспектам бизнеса, таким как финансовое планирование, маркетинговые стратегии, юридические вопросы и др. Это поможет предпринимателям улучшить свои проекты и увеличить их привлекательность для инвесторов.</p>
                        </div>
                    </div>
                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg4} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Обсуждение перспективных трендов и стратегий в инвестиционной сфере                            </h3>
                            <p className="investBenefits__p">
                                Зона Invest также включает стратегическую зону, где будут обсуждаться перспективные тренды и стратегии в инвестиционной сфере. Участники смогут ознакомиться с новыми и развивающимися отраслями, а также обсудить возможности партнерства и сотрудничества с другими участниками.                            </p>
                        </div>
                    </div>
                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg5} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Создание ценных связей и партнерств для будущего развития                            </h3>
                            <p className="investBenefits__p">
                                Открытый доступ ко всем зонам позволит участникам зоны Invest познакомиться с другими предпринимателями, посетить другие интересные мероприятия и создать ценные связи для будущего развития своих проектов.                            </p>
                        </div>
                    </div>
                    <div className="investBenefits__row">
                        <div className="investBenefits__svg">
                            <img src={svg6} alt=""/>

                        </div>
                        <div className="investBenefits__column">
                            <h3 className="investBenefits__h3">
                                Возможность привлечения инвестиций от 100 000$ для реализации проектов                            </h3>
                            <p className="investBenefits__p">
                                Одним из ключевых преимуществ зоны Invest является возможность реализации проектов. Здесь предприниматели смогут привлечь инвестиции от 100 000$ и выше, чтобы финансировать свои идеи и обеспечить их рост и развитие.                            </p>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    );
};

export default InvestBenefits;