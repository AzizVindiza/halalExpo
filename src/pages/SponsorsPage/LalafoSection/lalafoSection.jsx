import React from 'react';
import "./lalafoSection.sass"
import lalafo from "./lalafo.svg"

const LalafoSection = () => {
    return (
        <section className={'lalafo'}>
            <div className="container lalafo__container">
                <div className="lalafo__wrapper">
                    <div className="lalafo__img">
                        <img src={lalafo} alt=""/>
                    </div>
                    <div className="lalafo__txt">
                        <h2 className="lalafo__h2">Спонсор зоны регистрации</h2>
                        <h3 className="lalafo__h3">Lalafo — крупная и известная компания, занимающая лидирующие позиции в развитии интернет-платформы для объявлений. Они предоставляют удобный и надежный сервис, позволяющий пользователям размещать и находить разнообразные объявления.</h3>
                        <p className="lalafo__p">lalafo также будут играть важную роль в составе жюри HIT Awards и предоставят эксклюзивные подарки для участников мероприятия.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LalafoSection;