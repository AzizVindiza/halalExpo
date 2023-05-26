import React from 'react';
import Btn from "../../../components/Btn/Btn";

const ApplicationSection = () => {
    return (
        <section className={'applicationSection'}>
            <div className="applicationSection__container container">
                <h2 className="applicationSection__h2">Стать партнером форума</h2>
                <p className="applicationSection__txt">Присоединяйтесь к нам в качестве партнера Halal Investment and Trade Expo 2023 и укрепите свое положение на рынке халяльных товаров и услуг. Расширьте узнаваемость вашего бренда и установите ценные деловые связи. Не упустите возможность быть частью этого значимого мероприятия!</p>
                <Btn text={'Оставить заявку'} m={'application'}/>
            </div>
        </section>
    );
};

export default ApplicationSection;