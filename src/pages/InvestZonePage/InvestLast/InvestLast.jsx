import React from 'react';
import './investLast.sass'
import l1 from "../img/l1.svg"
import l2 from "../img/l2.svg"
import l3 from "../img/l3.svg"
import l4 from "../img/l4.svg"

const InvestLast = () => {
    return (
        <section className="investLast">
            <div className="investLast__container container">
                <div className="investLast__wrapper">
                    <div className="investLast__row">
                        <div className="investLast__img">
                            <img src={l1} alt=""/>
                        </div>
                        <div className="investLast__box">
                            <h2 className="investLast__h2">Подача бизнес-плана</h2>
                            <p className="investLast__p">Как спонсор, вы получите широкий охват аудитории, состоящей из представителей бизнеса, инвесторов, производителей и других участников, заинтересованных в халяльной индустрии.</p>
                        </div>
                    </div>
                    <div className="investLast__row">
                        <div className="investLast__img">
                            <img src={l2} alt=""/>
                        </div>
                        <div className="investLast__box">
                            <h2 className="investLast__h2">Одобрение участия</h2>
                            <p className="investLast__p">Участие в качестве спонсора дает вам возможность расширить свою аудиторию и продвигать свой бренд в качестве ведущего игрока на рынке халяльной продукции и услуг.</p>
                        </div>
                    </div>
                    <div className="investLast__row">
                        <div className="investLast__img">
                            <img src={l3} alt=""/>
                        </div>
                        <div className="investLast__box">
                            <h2 className="investLast__h2">Финансовая поддержка</h2>
                            <p className="investLast__p">Возможность установления деловых контактов. Наше мероприятие предоставляет уникальную возможность встретиться и установить связи с ключевыми игроками халяльной индустрии, включая производителей, дистрибьюторов. А также представить инвестиционные проекты инвесторам из стран арабского мира.</p>
                        </div>
                    </div>
                    <div className="investLast__row">
                        <div className="investLast__img">
                            <img src={l4} alt=""/>
                        </div>
                        <div className="investLast__box">
                            <h2 className="investLast__h2">Презентация проекта</h2>
                            <p className="investLast__p">В качестве спонсора, вы можете получить эксклюзивные преимущества, такие как выделение вашего логотипа на материалах мероприятия, участие в презентации продуктов и услуг на главной сцене и другие.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default InvestLast;