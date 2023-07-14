import React from 'react';
import "./meetcard.sass"
import num1 from "./num1.png"
import num2 from "./num2.png"
import num3 from "./num3.png"
import num4 from "./num4.png"
const MeetCard = () => {
    return (
        <div className={'meetcard'}>
            <div className="container meetcard__container">
                <h2 className="meetcard__h2">Для назначения встречи следуйте инструкции:</h2>
                <div className="meetcard__wrapper">
                    <div className="meetcard__box">
                        <div className="meetcard__num">
                            <img src={num1} className={'meetcard__img'} alt="number"/>
                        </div>
                        <p className="meetcard__p">Отсканируйте QR-код компании или введите ее название в строке поиска. Это позволит вам найти профиль компании, ознакомиться с информацией об организации и её предложения, а далее перейти к возможностям назначения встречи.</p>
                    </div>
                    <div className="meetcard__box">
                        <div className="meetcard__num">
                            <img src={num2} className={'meetcard__img'} alt="number"/>
                        </div>
                        <p className="meetcard__p">Проверьте доступное время и выберите удобное окошко для встречи.</p>
                    </div>
                    <div className="meetcard__box">
                        <div className="meetcard__num">
                            <img src={num3} className={'meetcard__img'} alt="number"/>
                        </div>
                        <p className="meetcard__p">Отправьте запрос на встречу. Заполните необходимую информацию и отправьте запрос.</p>
                    </div>
                    <div className="meetcard__box">
                        <div className="meetcard__num">
                            <img src={num4} className={'meetcard__img'} alt="number"/>
                        </div>
                        <p className="meetcard__p">Дождитесь обратной связи. После отправки запроса вам будет предоставлена обратная связь с подтверждением или предложением альтернативного времени для встречи.</p>
                    </div>
                </div>
                <h3 className="meetcard__h3">Следуя этой простой инструкции, вы сможете легко назначить встречу на HIT Expo 2023!</h3>
            </div>
        </div>
    );
};

export default MeetCard;