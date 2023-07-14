import React from 'react';
import pic from "./btwo.png"
import "./btwo.sass"
const BtwoSection = () => {
    return (
        <section className={'btwoSection'}>
            <div className="container btwoSection__container">
                <div className="btwoSection__image">
                    <img src={pic} alt="picture"/>
                </div>
                <div className="btwoSection__wrapper">
                    <p className="btwoSection__p">
                        <span className={'btwoSection__title'}>B2B-встречи</span> — ключевой элемент успеха в бизнесе. Они предоставляют уникальные возможности для установления новых деловых связей, расширения сети контактов и создания партнерств. На выставке Halal Investment and Trade Expo 2023, все эти встречи и разговоры могут стать вашей новой возможностью для роста.
                    </p>
                    <p className="btwoSection__p">
                        <span className={'btwoSection__title'}>B2B-встречи</span> — на HIT Expo 2023 - это место, где лидеры и представители различных отраслей халяльного бизнеса соберутся вместе. Здесь вы сможете встретиться с потенциальными клиентами, поставщиками и инвесторами из разных стран, что значительно расширит границы вашего бизнеса и создаст новые возможности для сотрудничества.
                    </p>
                    <p className="btwoSection__p">
                         Безусловно, участие в выставке открывает двери к множеству возможностей и преимуществ. На HIT Expo 2023 вы сможете общаться с экспертами отрасли, узнавать о последних тенденциях и инновациях, а также установить деловые связи с представителями различных компаний. Здесь вы найдете вдохновение и идеи для развития своего бизнеса.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BtwoSection;