import React, {useContext} from 'react';
import Btn from "../../../components/Btn/Btn";
import "./applicationSection.sass"
import {CustomContext} from "../../../Context";

const ApplicationSection = () => {
    const {setRequest}=useContext(CustomContext)
    return (
        <section className={'applicationSection'}>
            <div className="applicationSection__container container">
                <h2 className="applicationSection__h2">Стать партнером форума</h2>
                <p className="applicationSection__txt">Присоединяйтесь к нам в качестве партнера Halal Investment and Trade Expo 2023 и укрепите свое положение на рынке халяльных товаров и услуг. Расширьте узнаваемость вашего бренда и установите ценные деловые связи. Не упустите возможность быть частью этого значимого мероприятия!</p>
                <div onClick={() => setRequest(true)}>
                    <Btn m={'application'} type="button" text="Оставить заявку"/>
                </div>
            </div>
        </section>
    );
};

export default ApplicationSection;