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
                                <h3 className="plusSection__h3">Высокая видимость </h3>
                                <p className="plusSection__p">Ваше имя и логотип будут активно рекламироваться на всех рекламных материалах, включая веб-сайт, брошюры, баннеры и другие печатные материалы. Это даст вам широкую аудиторию и повысит узнаваемость вашего бренда.</p>
                            </div>
                        </div>
                    </div>
                    <div className="plusSection__block">
                        <div className="plusSection__box">
                            <div className="plusSection__pic">
                                <img src="" alt="" className="plusSection__img"/>
                            </div>
                            <div className="plusSection__right">
                                <h3 className="plusSection__h3">Доступ к ключевым участникам</h3>
                                <p className="plusSection__p">Как партнер, вы получите возможность установить контакт с ведущими компаниями, представителями правительства, инвесторами и экспертами в халяльной индустрии. Это поможет вам расширить свою деловую сеть и найти новые возможности для сотрудничества.</p>
                            </div>
                        </div>
                    </div>
                    <div className="plusSection__block">
                        <div className="plusSection__box">
                            <div className="plusSection__pic">
                                <img src="" alt="" className="plusSection__img"/>
                            </div>
                            <div className="plusSection__right">
                                <h3 className="plusSection__h3">Участие в ключевых мероприятиях</h3>
                                <p className="plusSection__p">Как партнер, вам будет предоставлено приоритетное участие во всех ключевых мероприятиях выставки, включая форумы, конференции и церемонии награждения. Вы сможете выступить перед аудиторией, поделиться своими знаниями и установить ценные контакты.</p>
                            </div>
                        </div>
                    </div>
                    <div className="plusSection__block">
                        <div className="plusSection__box">
                            <div className="plusSection__pic">
                                <img src="" alt="" className="plusSection__img"/>
                            </div>
                            <div className="plusSection__right">
                                <h3 className="plusSection__h3">Медиапокрытие</h3>
                                <p className="plusSection__p">Ваше участие в качестве партнера будет продвигаться в СМИ и социальных сетях. Вы получите возможность представить свою компанию и экспертность в халяльной индустрии широкой аудитории нескольких стран.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlusSection;