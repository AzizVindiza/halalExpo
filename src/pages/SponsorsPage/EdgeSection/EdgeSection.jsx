import React from 'react';
import "./edgeSetion.sass"
const EdgeSection = () => {
    return (
        <section className={'edgeSection'}>
            <div className="edgeSection__container container">
                <h3 className="edgeSection__h3">Преимущества спонсорства</h3>
                <div className="edgeSection__wrapper">
                    <div className="edgeSection__box">
                        <div className="edgeSection__image">
                            <img src={''} className={'edgeSection__'} alt=""/>
                        </div>
                        <div className="edgeSection__inner">
                            <h4 className="edgeSection__h4">Узнаваемость</h4>
                            <p className="edgeSection__p">Как спонсор, вы получите широкий охват аудитории, состоящей из представителей бизнеса, инвесторов, производителей и других участников, заинтересованных в халяльной индустрии.</p>
                        </div>
                    </div>
                    <div className="edgeSection__box">
                        <div className="edgeSection__image">
                            <img src={''} className={'edgeSection__'} alt=""/>
                        </div>
                        <div className="edgeSection__inner">
                            <h4 className="edgeSection__h4">Продвижение бренда</h4>
                            <p className="edgeSection__p">Участие в качестве спонсора дает вам возможность расширить свою аудиторию и продвигать свой бренд в качестве ведущего игрока на рынке халяльной продукции и услуг.</p>
                        </div>
                    </div>

                    <div className="edgeSection__box">
                        <div className="edgeSection__image">
                            <img src={''} className={'edgeSection__'} alt=""/>
                        </div>
                        <div className="edgeSection__inner">
                            <h4 className="edgeSection__h4">Возможность установления деловых контактов</h4>
                            <p className="edgeSection__p">Возможность установления деловых контактов. Наше мероприятие предоставляет уникальную возможность встретиться и установить связи с ключевыми игроками халяльной индустрии, включая производителей, дистрибьюторов. А также представить инвестиционные проекты инвесторам из стран арабского мира.</p>
                        </div>
                    </div>
                    <div className="edgeSection__box">
                        <div className="edgeSection__image">
                            <img src={''} className={'edgeSection__'} alt=""/>
                        </div>
                        <div className="edgeSection__inner">
                            <h4 className="edgeSection__h4">Получение эксклюзивных преимуществ</h4>
                            <p className="edgeSection__p">В качестве спонсора, вы можете получить эксклюзивные преимущества, такие как выделение вашего логотипа на материалах мероприятия, участие в презентации продуктов и услуг на главной сцене и другие.</p>
                        </div>
                    </div>
                    <div className="edgeSection__box">
                        <div className="edgeSection__image">
                            <img src={''} className={'edgeSection__'} alt=""/>
                        </div>
                        <div className="edgeSection__inner">
                            <h4 className="edgeSection__h4">Поддержка развития халяльной индустрии</h4>
                            <p className="edgeSection__p">Участие в качестве спонсора поможет развитию халяльной индустрии в регионе и поддержит растущий спрос на халяльную продукцию и услуги.</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default EdgeSection;