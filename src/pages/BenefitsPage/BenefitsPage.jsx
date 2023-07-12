import React from 'react';
import './BenefitsPage.sass'
import CardMembers from "./CardMembers/CardMembers";
import CardPdf from "./CaardPdf/CardPdf";
import svg from "./svg.png"
import contact from "./contact.svg"
import figure from "./figure.png"
import promotion from "./promotion.svg"
import projects from "./projects.svg"
import coverage from "./coverage.svg"
import organizer from "./organizer.svg"

const BenefitsPage = () => {
    return (
        <section className="benefits">
            <div className="benefits__photo">
                <img src={figure} alt=""/>
            </div>

            <div className="benefits__container container">
                <h2 className="benefits__h2">
                    Преимущества для участников
                </h2>
                <div className="benefits__wrapper">
                    <CardMembers svg={promotion} members={{title:"Возможность презентации и продвижения",p:"Мероприятие предоставляет уникальную платформу для представления вашей компании, продуктов, услуг и инвестиционных проектов перед широкой аудиторией. Вы сможете привлечь внимание потенциальных инвесторов, партнеров и клиентов."}}/>
                    <CardMembers svg={contact} members={{title:"Расширение деловых контактов",p:"Выставка соберет ведущих представителей халяльной индустрии, инвесторов, предпринимателей и профессионалов. Ваше участие даст возможность установить новые связи, расширить сеть контактов и создать ценные деловые партнерства."}}/>
                    <CardMembers svg={projects} members={{title:"Инновационные идеи и проекты",p:"Halal Investment and Trade Expo 2023 представит перед вами широкий спектр инновационных халяльных проектов и идей. Вы сможете узнать о последних тенденциях и развитии в отрасли, а также обменяться опытом с экспертами и профессионалами."}}/>
                    <CardMembers svg={coverage}  members={{title:"Международный охват",p:"Halal Investment and Trade Expo 2023 привлечет участников и гостей из разных стран мира. Это даст вам возможность расширить вашу глобальную видимость, установить международные связи и исследовать новые рынки."}}/>
                    <CardMembers svg={organizer} members={{title:"Поддержка со стороны организаторов ",p:"Организаторы выставки обеспечат профессиональную поддержку, включая маркетинговую и PR-поддержку, помощь с организационными вопросами, а также предоставление необходимой информации и готовых выставочных стендов."}}/>

                </div>
                <CardPdf/>
            </div>
            {/*<div className="benefits__svg">*/}
            {/*    <img src={svg} alt=""/>*/}
            {/*</div>*/}

        </section>
    );
};

export default BenefitsPage;