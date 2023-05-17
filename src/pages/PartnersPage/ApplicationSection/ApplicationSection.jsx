import React from 'react';
import Btn from "../../../components/Btn/Btn";

const ApplicationSection = () => {
    return (
        <section className={'applicationSection'}>
            <div className="applicationSection__container container">
                <h2 className="applicationSection__h2">Стать партнером форума</h2>
                <p className="applicationSection__txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem Ipsum is simply </p>
                <Btn text={'Оставить заявку'} m={'application'}/>
            </div>
        </section>
    );
};

export default ApplicationSection;