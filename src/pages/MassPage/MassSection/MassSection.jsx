import React from 'react';
import "./MassSection.sass"

import camera from "./camera2.png"


const MassSection = ({item}) => {
    return (
        <div className="massSection">
            <h2 className="massSection__h2">{item.title}</h2>
            <div className="massSection__img">
                <img src={camera} alt=""/>
            </div>

            <div className="massSection__container container">
                <p className={"massSection__p"}>Спасибо за ваш интерес к Halal Investment and Trade Expo 2023. Мы готовы предоставить вам возможность аккредитации на наше мероприятие, чтобы вы могли освещать его и сообщать о ключевых событиях и развитии халяльной индустрии. Пожалуйста, ознакомьтесь с правилами аккредитации и соблюдайте следующие требования:</p>

                <div className="massSection__wrapper">
                    <ul className={"massSection__ul"}>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Аккредитация СМИ осуществляется только до 20 июля. Просим вас отправить заявку на аккредитацию до этой даты, чтобы мы могли обработать ее своевременно. Подать заявку можно с помощью формы регистрации по
                              <a href=""> ссылке>></a> </p></li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Ваша заявка на аккредитацию должна содержать следующую информацию: полное название СМИ, ФИО представителя, контактные данные (телефон, электронная почта) и подробное описание целей и плана вашего освещения мероприятия.</p> </li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Пожалуйста, предоставьте копию вашего журналистского удостоверения или другого документа, подтверждающего вашу профессиональную принадлежность к СМИ. </p></li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Аккредитация может быть предоставлена только журналистам, репортерам, фотографам и видеооператорам, работающим в аккредитованных СМИ. Приглашение на мероприятие не распространяется на сопровождающих лиц.</p></li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>При посещении мероприятия, пожалуйста, помните, что вы представляете свое СМИ. Следуйте этическим принципам и проявляйте уважение к участникам, остальным представителям СМИ и посетителям выставки</p></li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Фото- и видеосъемка разрешена только в указанных зонах и с согласия субъектов съемки. Пожалуйста, соблюдайте приватность и конфиденциальность участников и других посетителей. </p></li>
                        <li className={"massSection__li"}><div className={"massSection__circle"}></div><p className={"massSection__item"}>Мы ожидаем, что представители СМИ будут обеспечивать объективное и качественное освещение мероприятия. Просим вас соблюдать этические нормы, отображать информацию соответствующим образом и точно передавать сообщения и ключевые моменты мероприятия.</p> </li>

                    </ul>
                    <p className="massSection__text">


                        Мы ценим ваше участие и поддержку в освещении Halal Investment and Trade Expo 2023. Просим вас соблюдать данные правила и быть аккуратными при осуществлении своей профессиональной деятельности во время мероприятия.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default MassSection;