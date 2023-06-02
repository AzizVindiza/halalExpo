import React from 'react';
import "./TextSection.sass"
const TextSection = () => {
    return (
        <div className={'textSection'}>
            <div className="textSection__container">
                <div className="textSection__wrapper">
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">Аккредитация СМИ осуществляется только до 20 июля. Просим вас отправить заявку на аккредитацию до этой даты, чтобы мы могли обработать ее своевременно. Подать заявку можно с помощью формы регистрации по ссылке>> </p>
                    </div>
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">Ваша заявка на аккредитацию должна содержать следующую информацию: полное название СМИ, ФИО представителя, контактные данные (телефон, электронная почта) и подробное описание целей и плана вашего освещения мероприятия.</p>
                    </div>
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">Пожалуйста, предоставьте копию вашего журналистского удостоверения или другого документа, подтверждающего вашу профессиональную принадлежность к СМИ.</p>
                    </div>
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">При посещении мероприятия, пожалуйста, помните, что вы представляете свое СМИ. Следуйте этическим принципам и проявляйте уважение к участникам, остальным представителям СМИ и посетителям выставки</p>
                    </div>
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">Фото- и видеосъемка разрешена только в указанных зонах и с согласия субъектов съемки. Пожалуйста, соблюдайте приватность и конфиденциальность участников и других посетителей.</p>
                    </div>
                    <div className={"textSection__row"}>
                        <span className="textSection__span"></span><p className="textSection__txt">Мы ожидаем, что представители СМИ будут обеспечивать объективное и качественное освещение мероприятия. Просим вас соблюдать этические нормы, отображать информацию соответствующим образом и точно передавать сообщения и ключевые моменты мероприятия.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default TextSection;